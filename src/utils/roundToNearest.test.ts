import { roundToNearest } from './roundToNearest';

const values = [54.5, 1, 3, 92.5, 654, 5542];

describe('roundToNearest', () => {
  it('should round a number to the nearest 0.5', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 0.5, value }),
    );
    expect(result).toEqual([54.5, 1, 3, 92.5, 654, 5542]);
  });
  it('should round a number to the nearest 1', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 1, value }),
    );
    expect(result).toEqual([55, 1, 3, 93, 654, 5542]);
  });
  it('should round a number to the nearest 2.5', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 2.5, value }),
    );
    expect(result).toEqual([55, 0, 2.5, 92.5, 655, 5542.5]);
  });
  it('should round a number to the nearest 5', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 5, value }),
    );
    expect(result).toEqual([55, 0, 5, 95, 655, 5540]);
  });
  it('should round a number to the nearest 10', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 10, value }),
    );
    expect(result).toEqual([50, 0, 0, 90, 650, 5540]);
  });
  it('should round a number to the nearest 50', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 50, value }),
    );
    expect(result).toEqual([50, 0, 0, 100, 650, 5550]);
  });
  it('should round a number to the nearest 500', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 500, value }),
    );
    expect(result).toEqual([0, 0, 0, 0, 500, 5500]);
  });
  it('should round a number to the nearest 2500', () => {
    const result = values.map((value) =>
      roundToNearest({ interval: 2500, value }),
    );
    expect(result).toEqual([0, 0, 0, 0, 0, 5000]);
  });
});
