import { recommendations } from "./recommendations";
import { students } from "./students";
import "./style.css";

function renderStudents() {
  const studentsList = document.getElementById("studentsList");

  students.forEach((student) => {
    const studentCard = document.createElement("div");
    studentCard.className = "student-card";
    studentCard.onclick = () => scrollToFirstRecommendation(student.id);

    studentCard.innerHTML = `
            <div class="student-avatar" style="background: linear-gradient(135deg, ${student.gradient[0]} 0%, ${student.gradient[1]} 100%);">
              <img src="${student.avatar}" alt="avatar" />  
            </div>
            <div class="student-name">${student.name}</div>
        `;

    studentsList.appendChild(studentCard);
  });
}

// Render recommendations
function renderRecommendations() {
  const recommendationsList = document.getElementById("recommendationsList");

  recommendations.forEach((rec) => {
    const recCard = document.createElement("div");
    recCard.className = "recommendation-card";
    recCard.id = `rec-student-${rec.studentId}-${rec.id}`;

    const thumbnailUrl = `https://img.youtube.com/vi/${rec.videoId}/maxresdefault.jpg`;

    const student = students.find((s) => s.id === rec.studentId) || {
      name: "Não achei",
    };

    recCard.innerHTML = `
    <a href="https://www.youtube.com/watch?v=${rec.videoId}" class="video" target="_blank">
      <img src="${thumbnailUrl}" alt="${rec.videoName}" class="video-thumbnail" />
      <div class="recommendation-content">
          <div class="video-name">${rec.videoName}</div>
          <div class="recommended-by">by <span>${student.name}</span></div>
      </div>
    </a>
  `;

    recommendationsList.appendChild(recCard);
  });
}

function scrollToFirstRecommendation(studentId) {
  const firstRec = recommendationsData.find(
    (rec) => rec.studentId === studentId
  );

  if (firstRec) {
    const element = document.getElementById(
      `rec-student-${firstRec.studentId}-${firstRec.id}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });

      element.style.borderColor = "rgba(255, 255, 255, 0.3)";
      setTimeout(() => {
        element.style.borderColor = "rgba(255, 255, 255, 0.08)";
      }, 1500);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderStudents();
  renderRecommendations();
});
