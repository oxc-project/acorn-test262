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
      "test": {
        "type": "Literal",
        "start": 3,
        "end": 4,
        "value": 1,
        "raw": "1"
      },
      "consequent": {
        "type": "EmptyStatement",
        "start": 5,
        "end": 6
      },
      "alternate": null
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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 16,
            "end": 17,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 19,
      "end": 38,
      "test": {
        "type": "BinaryExpression",
        "start": 23,
        "end": 36,
        "left": {
          "type": "Literal",
          "start": 23,
          "end": 27,
          "value": true,
          "raw": "true"
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 32,
          "end": 36,
          "value": true,
          "raw": "true"
        }
      },
      "consequent": {
        "type": "EmptyStatement",
        "start": 37,
        "end": 38
      },
      "alternate": null
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
          "expression": {
            "type": "AssignmentExpression",
            "start": 47,
            "end": 52,
            "operator": "=",
            "left": {
              "type": "Identifier",
              "start": 47,
              "end": 48,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 51,
              "end": 52,
              "value": 1,
              "raw": "1"
            }
          },
          "directive": null
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
