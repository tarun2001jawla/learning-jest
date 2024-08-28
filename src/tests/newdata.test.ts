import { getFirstPlayer, player1, player2 } from '../functions/newdata';

describe('getFirstPlayer', () => {
  test('should return player1 when called with player1 and player2 (using toBe)', () => {
    expect(getFirstPlayer(player1, player2)).toBe(player1);
  });

  test('should not return player2 when called with player1 and player2 (using not.toBe)', () => {
    expect(getFirstPlayer(player1, player2)).not.toBe(player2);
  });

  // New tests using toEqual
  test('should return player1 when called with player1 and player2 (using toEqual)', () => {
    expect(getFirstPlayer(player1, player2)).toEqual(player1); // Passes
  });

  test('should not return player2 when called with player1 and player2 (using not.toEqual)', () => {
    expect(getFirstPlayer(player1, player2)).not.toEqual(player2); // Fails
  });
});

test('check if player1 and player2 are the same', () => {
    console.log('player1:', player1);
    console.log('player2:', player2);
    expect(player1).toEqual(player2);
  })