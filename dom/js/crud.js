// html 요소 가져오기
const taskForm = document.querySelector("#taskForm");
const taskInput = document.querySelector("#taskInput");
const taskList = document.querySelector("#taskList");
const count = document.querySelector("#count");
//할 일 데이터 저장 배열
let tasks = [
  {
    id: 1,
    text: "HTML 공부하기",
    done: false,
  },
  {
    id: 2,
    text: "CSS 공부하기",
    done: false,
  },
];
//다음에 사용할 id번호
let nextId = 3;
// R-목록 출력(Read)
function renderTasks() {
  // console.log("read");
  // 기존 화면 비우기(초기화)
  taskList.innerHTML = "";
  // 배열 데이터 햐나씩 화면에 출력
  tasks.forEach((task) => {
    console.log(task);
    const li = document.createElement("li");
    // console.log(li);
    // 할일 내용
    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = task.text;
    // console.log(span);
    // 완료 여부에 따라서 클래스 추가
    if (task.done) {
      span.classList.add("done");
    }
    // 완료 체크 버튼
    const checkBtn = document.createElement("button");
    // console.log(checkBtn);
    // 삼항연산자
    checkBtn.textContent = task.done ? "완료 취소" : "완료";
    // 완료체크 버튼 클릭시 함수
    checkBtn.addEventListener("click", () => {
      task.done = !task.done;
      renderTasks();
    });

    // 수정 버튼
    const editBtn = document.createElement("button");
    editBtn.textContent = "수정";
    editBtn.className = "edit-Btn";
    console.log(editBtn);
    // 수정 버튼 클릭시 함수
    editBtn.addEventListener("click", () => {
      const nextText = prompt("수정할 내용을 입력하세요.", task.text);
      // task.text = nextText;
      if (nextText !== null && nextText.trim() !== "") {
        task.text = nextText;
      }
      renderTasks();
    });

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.className = "delete-Btn";
    console.log(deleteBtn);
    // 삭제 버튼 클릭시 함수
    deleteBtn.addEventListener("click", () => {
      const ok = confirm("정말 삭제할까요?");
      if (ok) {
        tasks = tasks.filter((item) => {
          //현재 삭제하려는 할일을 제외하고 나머지만 남기기
          //  return : 결과 반환
          return item.id !== task.id;
        });
        renderTasks();
      }
    });
    // 버튼 영역
    const actions = document.createElement("div");
    console.log(actions);
    actions.className = "actions";
    actions.append(checkBtn, editBtn, deleteBtn);

    //   목록 내용과 버튼 넣기
    li.append(span, actions);
    console.log(li);
    taskList.append(li);
  });
  //   전체 개수/완료 개수
  const doneCount = tasks.filter((task)=>{
    return task.done;
  }).length;
  count.textContent = `전체 ${tasks.length}개 / 완료 ${doneCount}개`;
}
// C- 새 할일 추가(Create)
taskForm.addEventListener("submit", (e) => {
  //form 제출시 페이지 새로고침기능 정지
  e.preventDefault();
  const text = taskInput.value.trim();
  console.log(text);
  // 빈 내용은 등록 하지않음
  if (text === "") {
    alert("할 일을 입력하세요.");
    return;
  }
  // 배열에 새 객체 추가
  tasks.push({
    id: nextId,
    text: text,
    done: false,
  });
  console.log(tasks);
  nextId++;
  //   입력창 지우기
  taskInput.value = "";
  // 변경된 배열을 화면에 출력
  // 화면출력함수 재사용
  renderTasks();
});
// 처음 화면 출력
renderTasks();
