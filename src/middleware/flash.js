const flash = (req, res, next) => {
  req.flash = (type, message) => {
    const messages = req.session.flash || {};
    if (message !== undefined) {
      if (!['success', 'error', 'warning', 'info'].includes(type)) {
        throw new Error('Unsupported flash message type');
      }
      messages[type] = [...(messages[type] || []), String(message)];
      req.session.flash = messages;
      return;
    }
    if (type !== undefined) {
      const selected = messages[type] || [];
      delete messages[type];
      if (Object.keys(messages).length === 0) delete req.session.flash;
      return selected;
    }
    delete req.session.flash;
    return messages;
  };
  res.locals.flash = req.flash;
  next();
};

export default flash;
