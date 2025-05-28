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
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 9,
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
            "value": 4,
            "raw": "4"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 12,
      "end": 85,
      "test": {
        "type": "LogicalExpression",
        "start": 15,
        "end": 44,
        "left": {
          "type": "LogicalExpression",
          "start": 15,
          "end": 33,
          "left": {
            "type": "BinaryExpression",
            "start": 15,
            "end": 22,
            "left": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 1,
              "raw": "1"
            }
          },
          "operator": "||",
          "right": {
            "type": "BinaryExpression",
            "start": 26,
            "end": 33,
            "left": {
              "type": "Identifier",
              "start": 26,
              "end": 27,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 32,
              "end": 33,
              "value": 2,
              "raw": "2"
            }
          }
        },
        "operator": "||",
        "right": {
          "type": "BinaryExpression",
          "start": 37,
          "end": 44,
          "left": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "===",
          "right": {
            "type": "Literal",
            "start": 43,
            "end": 44,
            "value": 3,
            "raw": "3"
          }
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 46,
        "end": 49,
        "body": []
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 55,
        "end": 85,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 61,
            "end": 83,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 65,
                "end": 82,
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
                  "value": "Ooops",
                  "raw": "\"Ooops\""
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
