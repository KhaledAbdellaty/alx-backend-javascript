// Interface for Student data
export interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}
// Create two student objects
const student1: Student = {
  firstName: 'khaled',
  lastName: 'Abdellaty',
  age: 29,
  location: 'Cairo'
};

const student2: Student = {
  firstName: 'Steve',
  lastName: 'Auston',
  age: 25,
  location: 'Florida'
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Function to render a table row
export function renderTable(studentsList: Student[]) {
  const table = document.getElementById("table");
  if (!table) {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    const locationHeader = document.createElement("th");

    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    table.appendChild(headerRow);

  } else {
    const table = document.getElementById("table");
    for (const student of studentsList) {
      const studentRow = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      const locationCell = document.createElement("td");

      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;

      studentRow.appendChild(firstNameCell);
      studentRow.appendChild(locationCell);

      table.appendChild(studentRow);
    }
  }
}

renderTable(studentsList);
