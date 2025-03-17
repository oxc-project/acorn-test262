__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 90,
  "body": [
    {
      "type": "LabeledStatement",
      "start": 0,
      "end": 90,
      "body": {
        "type": "WhileStatement",
        "start": 8,
        "end": 90,
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
          "end": 90,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 88,
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
                "end": 88,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 44,
                    "end": 84,
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
                      "end": 84,
                      "body": [
                        {
                          "type": "BreakStatement",
                          "start": 65,
                          "end": 78,
                          "label": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 77,
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
