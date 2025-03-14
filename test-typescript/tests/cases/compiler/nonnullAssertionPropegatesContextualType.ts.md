nonnullAssertionPropegatesContextualType.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 25,
            "decorators": [],
            "name": "rect2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 9,
              "end": 25,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 11,
                "end": 25,
                "typeName": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 25,
                  "decorators": [],
                  "name": "SVGRectElement",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSNonNullExpression",
            "start": 28,
            "end": 69,
            "expression": {
              "type": "CallExpression",
              "start": 28,
              "end": 68,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 67,
                  "raw": "'.svg-rectangle'",
                  "value": ".svg-rectangle"
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 28,
                "end": 50,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 36,
                  "decorators": [],
                  "name": "document",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 50,
                  "decorators": [],
                  "name": "querySelector",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script"
}
```
