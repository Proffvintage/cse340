import { validationResult } from 'express-validator';

const requireRecordId = (value, resourceName) => {
  if (typeof value !== 'string' || !/^\d+$/.test(value) || !Number.isInteger(Number(value)) || Number(value) < 1 || Number(value) > 2147483647) {
    const error = new Error(`${resourceName} not found`);
    error.status = 404;
    throw error;
  }
  return Number(value);
};

const requireRecord = (record, resourceName) => {
  if (!record) {
    const error = new Error(`${resourceName} not found`);
    error.status = 404;
    throw error;
  }
  return record;
};

const getFormData = (req, defaults = {}) => {
  const formData = req.session.formData?.[req.path] || defaults;
  if (req.session.formData) {
    delete req.session.formData[req.path];
    if (Object.keys(req.session.formData).length === 0) delete req.session.formData;
  }
  return formData;
};

const rememberFormData = (req, fields) => {
  const values = {};
  for (const field of fields) {
    const value = req.body?.[field];
    if (typeof value === 'string') values[field] = value;
    else if (Array.isArray(value)) values[field] = value.filter((item) => typeof item === 'string');
  }
  req.session.formData = { ...req.session.formData, [req.path]: values };
};

const redirectWithSession = (req, res, destination) => new Promise((resolve, reject) => {
  req.session.save((error) => {
    if (error) return reject(error);
    res.redirect(303, destination);
    resolve();
  });
});

const redirectValidationErrors = async (req, res, fields) => {
  const results = validationResult(req);
  if (results.isEmpty()) return false;
  for (const error of results.array({ onlyFirstError: true })) req.flash('error', error.msg);
  rememberFormData(req, fields);
  await redirectWithSession(req, res, req.path);
  return true;
};

export { requireRecordId, requireRecord, getFormData, rememberFormData, redirectWithSession, redirectValidationErrors };
