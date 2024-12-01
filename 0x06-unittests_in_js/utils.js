const Utils = {
  calculateNumber(type, a, b) {
    const aRound = Math.round(a);
    const bRound = Math.round(b);

    switch (type) {
      case 'SUM':
        return aRound + bRound;
      case 'SUBTRACT':
        return aRound - bRound;
      case 'DIVIDE':
        if (bRound === 0) return 'Error';
        return aRound / bRound;
      default:
        return 'Error';
    }
  }
};

module.exports = Utils; 