import * as CSS from "csstype";
import React from "react";
import styled from "styled-components";

export const SFlex = styled.div<{
  align?: CSS.Property.AlignItems;
  justify?: CSS.Property.JustifyContent;
  direction?: CSS.Property.FlexDirection;
  wrap?: CSS.Property.FlexWrap;
  gap?: CSS.Property.Gap;
  padding?: CSS.Property.Padding;
  margin?: CSS.Property.Margin;
  width?: CSS.Property.Width;
}>`
  box-sizing: border-box;
  display: flex;
  align-items: ${(p) => p.align || "center"};
  justify-content: ${(p) => p.justify || "center"};
  flex-direction: ${(p) => p.direction || "row"};
  flex-wrap: ${(p) => p.wrap || "wrap"};
  ${(p) => (p.padding ? "padding:" + p.padding + ";" : null)}
  ${(p) => (p.margin ? "margin:" + p.margin + ";" : null)}
  ${(p) => (p.gap ? "gap:" + p.gap + ";" : null)}
  ${(p) => (p.width ? "width:" + p.width + ";" : null)}
`;
