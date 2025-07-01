__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 1,
        "raw": "1",
        "start": 3,
        "end": 4
      },
      "consequent": {
        "type": "EmptyStatement",
        "start": 5,
        "end": 6
      },
      "alternate": null,
      "start": 0,
      "end": 6
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 12,
            "end": 13
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 16,
            "end": 17
          },
          "definite": false,
          "start": 12,
          "end": 17
        }
      ],
      "declare": false,
      "start": 8,
      "end": 18
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 23,
          "end": 27
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 32,
          "end": 36
        },
        "start": 23,
        "end": 36
      },
      "consequent": {
        "type": "EmptyStatement",
        "start": 37,
        "end": 38
      },
      "alternate": null,
      "start": 19,
      "end": 38
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 51,
              "end": 52
            },
            "start": 47,
            "end": 52
          },
          "directive": null,
          "start": 47,
          "end": 53
        }
      ],
      "start": 39,
      "end": 55
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 55
}
```
