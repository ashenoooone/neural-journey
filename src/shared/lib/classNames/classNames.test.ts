import { classNames, Mods } from './classNames';

describe('classNames test', () => {
  test('только основной класс', () => {
    expect(classNames('main')).toBe('main');
  });
  test('основной класс и модификатор', () => {
    const expected = 'main hovered';
    expect(classNames('main', { hovered: true }, [])).toBe(expected);
  });
  test('основной класс и модификаторы', () => {
    const expected = 'main hovered selectable';
    const mods: Mods = { hovered: true, selectable: true };
    expect(classNames('main', mods, [])).toBe(expected);
  });
  test('основной класс и доп. классы', () => {
    const additionalClasses: string[] = ['class1', 'class2'];
    const expected = 'main class1 class2';
    expect(classNames('main', {}, additionalClasses)).toBe(expected);
  });
  test('основной класс, модификаторы и доп. классы', () => {
    const additionalClasses: string[] = ['class1', 'class2'];
    const mods: Mods = { hovered: true, selectable: true };
    const expected = 'main hovered selectable class1 class2';
    expect(classNames('main', mods, additionalClasses)).toBe(expected);
  });
  test('основной класс, модификаторы (true,false), доп. классы', () => {
    const additionalClasses: string[] = ['class1', 'class2'];
    const mods: Mods = { hovered: true, selectable: false };
    const expected = 'main hovered class1 class2';
    expect(classNames('main', mods, additionalClasses)).toBe(expected);
  });
});
