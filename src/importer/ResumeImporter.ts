/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from "./AbstractImporter";
import { ResumeModel } from "../models/ResumeModel";
import { BlockFactory } from "../blocks/BlockFactory";

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   *
   * TODO: Реалізуйте валідацію JSON-даних резюме.
   * Перевірте наявність необхідних полів (header, summary, experience, education, skills)
   */
  private requiredFields: (keyof ResumeModel)[] = [
    "header",
    "summary",
    "experience",
    "education",
    "skills",
  ];
  protected validate(): void {
  if (typeof this.raw !== "object" || this.raw === null) {
    throw new Error("Invalid resume format: data is not an object");
  }

  const data = this.raw as Partial<ResumeModel>;


  for (const field of this.requiredFields) {
    if (!(field in data)) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (typeof data.header !== "object") {
    throw new Error("Invalid format: header must be an object");
  }

  if (
    typeof data.summary !== "object" ||
    typeof data.summary.text !== "string"
  ) {
    throw new Error("Invalid format: summary must contain a text field");
  }

  if (!Array.isArray(data.experience)) {
    throw new Error("Invalid format: experience must be an array");
  }

  if (!Array.isArray(data.education)) {
    throw new Error("Invalid format: education must be an array");
  }

  if (typeof data.skills !== "object" || data.skills === null) {
    throw new Error("Invalid format: skills must be an object");
  }
}


  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   *
   */
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   *
   * TODO: Реалізуйте рендеринг моделі у DOM-дерево
   */
  protected render(model: ResumeModel): void {
    const root = document.getElementById("resume-content")!;
    // TODO: Створіть фабрику і використайте її для створення і рендерингу блоків
    const factory = new BlockFactory();
    const blocks = this.requiredFields.map(block => factory.createBlock(block, model));

    blocks.forEach(block => { 
      const el = block.render();
      root.appendChild(el);
    })
    // TODO: Створіть і додайте у DOM кожен блок резюме
  }
}
