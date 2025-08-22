/**
 * Патерн Factory Method (Фабричний метод)
 *
 * Клас BlockFactory відповідає за створення різних типів блоків резюме
 * залежно від типу, переданого як параметр.
 */

import {
  ResumeModel,
  Education,
  Experience,
  Skills,
} from "../models/ResumeModel";
import { HeaderBlock } from "./HeaderBlock";
import { SummaryBlock } from "./SummaryBlock";
import { ExperienceBlock } from "./ExperienceBlock";
import { EducationBlock } from "./EducationBlock";
import { SkillsBlock } from "./SkillsBlock";

export interface IBlock {
  render(): HTMLElement;
}

export type BlockType =
  | "header"
  | "summary"
  | "experience"
  | "education"
  | "skills";

export class BlockFactory {
  /**
   * Метод для створення блоку відповідного типу
   *
   * @param type Тип блоку для створення
   * @param model Дані моделі для цього блоку
   * @returns Створений блок, готовий для рендерингу
   *
   */
  createBlock(type: BlockType, m: ResumeModel): IBlock {
    switch (type) {
      case "header":
        return new HeaderBlock(m.header)
      case "summary":
        return new SummaryBlock(m.summary)
      case "experience":
        
        return new ExperienceBlock(m.experience as Experience[])
        
      case "education":
        return new EducationBlock(m.education as Education[])
      case "skills":
        return new SkillsBlock(m.skills as Skills)
      default:
        throw new Error(`Unknown block type: ${type}`);
    }
  }
}
