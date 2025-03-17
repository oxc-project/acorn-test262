__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 93,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 93,
      "body": {
        "type": "WhileStatement",
        "start": 8,
        "end": 93,
        "test": {
          "type": "Literal",
          "start": 15,
          "end": 19,
          "value": true,
          "raw": "true"
        },
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 93,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 91,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 91,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 44,
                    "end": 87,
                    "test": {
                      "type": "Literal",
                      "start": 51,
                      "end": 55,
                      "value": true,
                      "raw": "true"
                    },
                    "body": {
                      "type": "BlockStatement",
                      "start": 57,
                      "end": 87,
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "start": 65,
                          "end": 81,
                          "label": {
                            "type": "Identifier",
                            "start": 74,
                            "end": 80,
                            "name": "target",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            }
          ]
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "name": "target",
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
