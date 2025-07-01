__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "rect2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "SVGRectElement",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 11,
                  "end": 25
                },
                "typeArguments": null,
                "start": 11,
                "end": 25
              },
              "start": 9,
              "end": 25
            },
            "start": 4,
            "end": 25
          },
          "init": {
            "type": "TSNonNullExpression",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "document",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 36
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "querySelector",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 37,
                  "end": 50
                },
                "optional": false,
                "computed": false,
                "start": 28,
                "end": 50
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": ".svg-rectangle",
                  "raw": "'.svg-rectangle'",
                  "start": 51,
                  "end": 67
                }
              ],
              "optional": false,
              "start": 28,
              "end": 68
            },
            "start": 28,
            "end": 69
          },
          "definite": false,
          "start": 4,
          "end": 69
        }
      ],
      "declare": false,
      "start": 0,
      "end": 70
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 88
}
```
