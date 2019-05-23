

const groupWildersBySchool = wilders => wilders.reduce(
  (acc, wilder) => (acc[wilder.schoolName]
    ? {
      ...acc,
      [wilder.schoolName]: {
        ...acc[wilder.schoolName],
        wilders: [...acc[wilder.schoolName].wilders, wilder],
      },
    }
    : {
      ...acc,
      [wilder.schoolName]: {
        schoolName: wilder.schoolName,
        wilders: [wilder],
      },
    }
  ),
  {},
);
const schoolsWithWilders = wilders => Object.values(
  groupWildersBySchool(wilders),
).sort((schoolA, schoolB) => (schoolA.schoolName < schoolB.schoolName ? -1 : 1));

module.exports = { schoolsWithWilders, groupWildersBySchool };
