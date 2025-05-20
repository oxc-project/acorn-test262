__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "IfStatement",
      "start": 0,
      "end": 6,
      "alternate": null,
      "consequent": {
        "type": "EmptyStatement",
        "start": 5,
        "end": 6
      },
      "test": {
        "type": "Literal",
        "start": 3,
        "end": 4,
        "raw": "1",
        "value": 1
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 8,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 19,
      "end": 38,
      "alternate": null,
      "consequent": {
        "type": "EmptyStatement",
        "start": 37,
        "end": 38
      },
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 36,
        "operator": "===",
        "left": {
          "type": "Literal",
          "start": 23,
          "end": 27,
          "raw": "true",
          "value": true
        },
        "right": {
          "type": "Literal",
          "start": 32,
          "end": 36,
          "raw": "true",
          "value": true
        }
      }
    },
    {
      "type": "BlockStatement",
      "start": 39,
      "end": 55,
      "body": [
        {
          "type": "ExpressionStatement",
          "start": 47,
          "end": 53,
          "directive": null,
          "expression": {
            "type": "AssignmentExpression",
            "start": 47,
            "end": 52,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 51,
              "end": 52,
              "raw": "1",
              "value": 1
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
