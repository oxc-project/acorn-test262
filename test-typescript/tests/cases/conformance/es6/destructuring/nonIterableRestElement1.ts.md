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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 8,
            "end": 10,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 12,
      "end": 29,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 12,
        "end": 28,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 12,
          "end": 18,
          "decorators": [],
          "elements": [
            {
              "type": "RestElement",
              "start": 13,
              "end": 17,
              "argument": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
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
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            {
              "type": "Literal",
              "start": 26,
              "end": 27,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
