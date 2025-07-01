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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "Literal",
            "value": 4,
            "raw": "4",
            "start": 8,
            "end": 9
          },
          "definite": false,
          "start": 4,
          "end": 9
        }
      ],
      "declare": false,
      "start": 0,
      "end": 10
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 21,
              "end": 22
            },
            "start": 15,
            "end": 22
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 32,
              "end": 33
            },
            "start": 26,
            "end": 33
          },
          "start": 15,
          "end": 33
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 43,
            "end": 44
          },
          "start": 37,
          "end": 44
        },
        "start": 15,
        "end": 44
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 46,
        "end": 49
      },
      "alternate": {
        "type": "BlockStatement",
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
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 72
                },
                "init": {
                  "type": "Literal",
                  "value": "Ooops",
                  "raw": "\"Ooops\"",
                  "start": 75,
                  "end": 82
                },
                "definite": false,
                "start": 65,
                "end": 82
              }
            ],
            "declare": false,
            "start": 61,
            "end": 83
          }
        ],
        "start": 55,
        "end": 85
      },
      "start": 12,
      "end": 85
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 85
}
```
