/*
 * @Description:
 * @Author: lycheeKing
 * @Email: anzhiyu-c@qq.com
 * @Date: 2022-11-29 20:59:45
 * @LastEditTime: 2022-11-29 21:02:39
 * @LastEditors: lycheeKing
 */
import { magnitude } from "./magnitude";

export function getDistanceToFurthestCorner(x: number, y: number, { width, height }: DOMRect): number {
  // 获取点击目标的位置到块级作用域边界的距离
  const topLeft = magnitude(x, y, 0, 0);
  const topRight = magnitude(x, y, width, 0);
  const bottomLeft = magnitude(x, y, 0, height);
  const bottomRight = magnitude(x, y, width, height);
  return Math.max(topLeft, topRight, bottomLeft, bottomRight);
}
