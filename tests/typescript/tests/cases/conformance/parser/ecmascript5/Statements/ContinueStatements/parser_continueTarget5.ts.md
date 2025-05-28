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
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null
      },
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
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
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
