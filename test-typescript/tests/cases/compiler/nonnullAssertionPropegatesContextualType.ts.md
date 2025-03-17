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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 25,
            "name": "rect2",
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
                  "name": "SVGRectElement",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                  "name": "document",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 50,
                  "name": "querySelector",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 51,
                  "end": 67,
                  "value": ".svg-rectangle",
                  "raw": "'.svg-rectangle'"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
