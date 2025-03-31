__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 29,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 10,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 29,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 12,
          "end": 18,
          "elements": [
            {
              "type": "RestElement",
              "start": 13,
              "end": 17,
              "argument": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 21,
          "end": 28,
          "elements": [
            {
              "type": "Literal",
              "start": 22,
              "end": 24,
              "value": "",
              "raw": "\"\""
            },
            {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "value": 0,
              "raw": "0"
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
