// --------------------------------------------------------------------------
// 📌 [함수형 프로그래밍 개념 학습]
// --------------------------------------------------------------------------
// - 불변 데이터(immutable data)
//   - 생성 이후 변경이 불가능한 데이터
//   - 변경할 수 없는 것이 좋다고? 왜?
//
// - 데이터 불변화 및 관리 방법
//   - Object.freeze()
//   - 객체 또는 배열 상태 관리
// --------------------------------------------------------------------------

const note = {
  id: "note-1",
  title: "함수형 프로그래밍",
  description: `함수형 프로그래밍은 프로그래밍 패러다임 중 하나로,
                "프로그래밍을 함수들의 조합으로 바라보는 것"입니다.`,
};

const noteList = [
  note,
  {
    id: "note-2",
    title: "동일 입력 → 동일 출력",
    description:
      '함수형 프로그래밍은 "동일한 입력 값에 대해서는 항상 동일한 출력 값을 보장"합니다.',
  },
];

// --------------------------------------------------------------------------
// [데이터 불변화]
Object.freeze(note);
Object.freeze(noteList);

// --------------------------------------------------------------------------
// - [객체 불변 데이터 관리]
//   - 객체 속성 추가
let updateNote = Object.freeze({ ...note, newProp: "new property" });

//   - 객체 속성 수정
updateNote = Object.freeze({ ...note, title: "update title" });

//   - 객체 속성 삭제(삭제하고 싶은 것만 빼우고 다시 덮어씌우기)
const { title, ...restUpdateNote } = updateNote;
updateNote = Object.freeze({ ...restUpdateNote });

// --------------------------------------------------------------------------
// - [배열 불변 데이터 관리]
//   - 배열 원소 추가
let updateNoteList = [
  ...noteList,
  {
    id: "note-3",
    title: "react router",
    description: "CSR-client side rendering library",
  },
];

//   - 배열 원소 수정(map)
updateNoteList = updateNoteList.map((note) => {
  if (note.id === "note-3") {
    return { ...note, title: "리액트 라우터" };
  } else {
    return note;
  }
});

//   - 배열 원소 삭제(filter)
updateNoteList = updateNoteList.filter((note) => {
  return !note.id.includes("note-2");
});

// console.log(updateNoteList);
