/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience, Project } from "../models/ResumeModel";
import { IBlock } from "./BlockFactory";
import { ProjectBlock } from "./ProjectBlock";
import { HighlightDecorator } from "../decorators/HighlightDecorator";

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience[]) {}

  /**
   * Рендеринг блоку досвіду роботи
   *
   */
  render(): HTMLElement {
    // Створюємо контейнер для досвіду роботи
    const container = document.createElement("section");
    container.className = "section experience";
    container.innerHTML = "<h2>Experience</h2>";
    this.d.forEach((exp) => {
       const item = document.createElement("div");
    item.className = "experience-item";

    const header = document.createElement("p");
    header.innerHTML = `
      <strong>${exp.position}</strong> at <em>${exp.company}</em> (${exp.start} - ${exp.end})
    `;
      item.appendChild(header);
      
      exp.projects.forEach((project: Project) => {
        const projectBlock = project.isRecent ? new HighlightDecorator(new ProjectBlock(project)) : new ProjectBlock(project)
        item.appendChild(projectBlock.render())
      });
    container.appendChild(item);

    
    });


    return container;
  }
}
