const { expect } = require('chai');
const sortWildersBySchool = require('../index');

describe('sortWildersBySchool', () => {
  it('should return an array of schools with wilders list', () => {
    const wilders = [{
      name: 'Axel',
      schoolName: 'Reims',
    }, {
      name: 'Sébastien',
      schoolName: 'Reims',
    }, {
      name: 'Anastasiya',
      schoolName: 'Berlin',
    }, {
      name: 'Neli',
      schoolName: 'Berlin',
    }];

    const expected = [
      {
        schoolName: 'Berlin',
        wilders: [{
          name: 'Anastasiya',
          schoolName: 'Berlin',
        }, {
          name: 'Neli',
          schoolName: 'Berlin',
        }],
      }, {
        schoolName: 'Reims',
        wilders: [{
          name: 'Axel',
          schoolName: 'Reims',
        }, {
          name: 'Sébastien',
          schoolName: 'Reims',
        }],
      },
    ];

    expect(sortWildersBySchool(wilders)).to.deep.equal(expected);
  });
});
