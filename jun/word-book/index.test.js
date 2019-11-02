const filterSearchedWord = inputVal => {};

describe('filterSearchedWord()는', () => {
  it('기존 배열에서 입력 값에 일치하는 값만 반환한다.', () => {
    const inputVal = 'happy';
    const expected = ['happy'];

    expect(filterSearchedWord(inputVal)).toStrictEqual(expected);
  });
});

// TODO: 일치하는 단어를 불러온다

// 1. 일치하는 단어만 추출한다.
// 단어 추출 (정규표현식)

// 2. 기존 단어 목록을 지운다.

// 3. 추출한 단어를 다시 뿌려준다.
