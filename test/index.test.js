const { expect } = require('chai');
const { groupWildersBySchool, schoolsWithWilders } = require('../index');

describe('groupWildersBySchool', () => {
  it('should return an array of schools with wilders list', () => {
    const wilders = [{
      name: 'Axel',
      schoolName: 'Reims',
    },
    {
      name: 'Sébastien',
      schoolName: 'Reims',
    },
    {
      name: 'Anastasiya',
      schoolName: 'Berlin',
    },
    {
      name: 'Neli',
      schoolName: 'Berlin',
    }];

    const expected = {
      Berlin: {
        schoolName: 'Berlin',
        wilders: [{
          name: 'Anastasiya',
          schoolName: 'Berlin',
        },
        {
          name: 'Neli',
          schoolName: 'Berlin',
        }],
      },
      Reims: {
        schoolName: 'Reims',
        wilders: [{
          name: 'Axel',
          schoolName: 'Reims',
        },
        {
          name: 'Sébastien',
          schoolName: 'Reims',
        }],
      },
    };

    expect(groupWildersBySchool(wilders)).to.deep.equal(expected);
  });
});


describe('schoolsWithWilders', () => {
  it('should return an array of schools with wilders list', () => {
    const wilders = [{
      name: 'Axel',
      schoolName: 'Reims',
    },
    {
      name: 'Sébastien',
      schoolName: 'Reims',
    },
    {
      name: 'Anastasiya',
      schoolName: 'Berlin',
    },
    {
      name: 'Neli',
      schoolName: 'Berlin',
    }];

    const expected = [
      {
        schoolName: 'Berlin',
        wilders: [{
          name: 'Anastasiya',
          schoolName: 'Berlin',
        },
        {
          name: 'Neli',
          schoolName: 'Berlin',
        }],
      },
      {
        schoolName: 'Reims',
        wilders: [{
          name: 'Axel',
          schoolName: 'Reims',
        },
        {
          name: 'Sébastien',
          schoolName: 'Reims',
        }],
      },
    ];

    expect(schoolsWithWilders(wilders)).to.deep.equal(expected);
  });
});
