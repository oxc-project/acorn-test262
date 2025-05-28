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
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "label1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ForStatement",
        "start": 8,
        "end": 59,
        "init": {
          "type": "VariableDeclaration",
          "start": 12,
          "end": 21,
          "kind": "var",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 16,
              "end": 21,
              "id": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Literal",
                "start": 20,
                "end": 21,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        "test": {
          "type": "BinaryExpression",
          "start": 23,
          "end": 28,
          "left": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "<",
          "right": {
            "type": "Literal",
            "start": 27,
            "end": 28,
            "value": 1,
            "raw": "1"
          }
        },
        "update": {
          "type": "UpdateExpression",
          "start": 30,
          "end": 33,
          "operator": "++",
          "prefix": false,
          "argument": {
            "type": "Identifier",
            "start": 30,
            "end": 31,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          }
        },
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
                "optional": false,
                "typeAnnotation": null
              }
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
