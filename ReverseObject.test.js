const ReverseObject = require('./ReverseObject');

test('reverse the nested input value', () => {
  const data = {
    hired: {
      be: {
        to: {
          deserve: 'I'
        }
      }
    }
  };
  expect(ReverseObject(data)).toEqual({
    I: {
      deserve: {
        to: {
          be: 'hired'
        }
      }
    }
  });
});
