__ESTREE_TEST__:PASS:
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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 69,
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
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
              "callee": {
                "type": "MemberExpression",
                "start": 28,
                "end": 50,
                "object": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 36,
                  "decorators": [],
                  "name": "document",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 50,
                  "decorators": [],
                  "name": "querySelector",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 67,
                  "value": ".svg-rectangle",
                  "raw": "'.svg-rectangle'"
                }
              ],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
