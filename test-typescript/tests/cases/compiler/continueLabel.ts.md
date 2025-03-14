__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 59,
      "body": {
        "type": "ForStatement",
        "start": 8,
        "end": 59,
        "body": {
          "type": "BlockStatement",
          "start": 35,
          "end": 59,
          "body": [
            {
              "type": "ContinueStatement",
              "start": 41,
              "end": 57,
              "label": {
                "type": "Identifier",
                "start": 50,
                "end": 56,
                "decorators": [],
                "name": "label1",
                "optional": false
              }
            }
          ]
        },
        "init": {
          "type": "VariableDeclaration",
          "start": 12,
          "end": 21,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 16,
              "end": 21,
              "definite": false,
              "id": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "raw": "0",
                "value": 0
              }
            }
          ],
          "declare": false,
          "kind": "var"
        },
        "test": {
          "type": "BinaryExpression",
          "start": 23,
          "end": 28,
          "operator": "<",
          "left": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "raw": "1",
            "value": 1
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 30,
          "end": 33,
          "argument": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "operator": "++",
          "prefix": false
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "label1",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
