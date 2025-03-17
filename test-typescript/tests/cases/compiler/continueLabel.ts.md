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
        "init": {
          "type": "VariableDeclaration",
          "start": 12,
          "end": 21,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 16,
              "end": 21,
              "id": {
                "type": "Identifier",
                "start": 16,
                "end": 17,
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "kind": "var",
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "i",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "label1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "name": "label1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
