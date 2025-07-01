__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 8,
            "end": 10
          },
          "definite": false,
          "start": 4,
          "end": 10
        }
      ],
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "decorators": [],
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 16,
                "end": 17
              },
              "optional": false,
              "typeAnnotation": null,
              "value": null,
              "start": 13,
              "end": 17
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 18
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 22,
              "end": 24
            },
            {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 26,
              "end": 27
            }
          ],
          "start": 21,
          "end": 28
        },
        "start": 12,
        "end": 28
      },
      "directive": null,
      "start": 12,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 29
}
```
