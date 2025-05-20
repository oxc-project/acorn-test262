__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 85,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 10,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 9,
            "raw": "4",
            "value": 4
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "IfStatement",
      "start": 12,
      "end": 85,
      "alternate": {
        "type": "BlockStatement",
        "start": 55,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 83,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 82,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 72,
                  "decorators": [],
                  "name": "message",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 75,
                  "end": 82,
                  "raw": "\"Ooops\"",
                  "value": "Ooops"
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "test": {
        "type": "LogicalExpression",
        "start": 15,
        "end": 44,
        "operator": "||",
        "left": {
          "type": "LogicalExpression",
          "start": 15,
          "end": 33,
          "operator": "||",
          "left": {
            "type": "BinaryExpression",
            "start": 15,
            "end": 22,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "1",
              "value": 1
            }
          },
          "right": {
            "type": "BinaryExpression",
            "start": 26,
            "end": 33,
            "operator": "===",
            "left": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "raw": "2",
              "value": 2
            }
          }
        },
        "right": {
          "type": "BinaryExpression",
          "start": 37,
          "end": 44,
          "operator": "===",
          "left": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "raw": "3",
            "value": 3
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
