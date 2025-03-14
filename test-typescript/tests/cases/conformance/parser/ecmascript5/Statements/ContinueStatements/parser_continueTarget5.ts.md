parser_continueTarget5.ts
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
        "body": {
          "type": "BlockStatement",
          "start": 21,
          "end": 93,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 25,
              "end": 91,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 38,
                "end": 91,
                "body": [
                  {
                    "type": "WhileStatement",
                    "start": 44,
                    "end": 87,
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
                            "optional": false
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Literal",
                      "start": 51,
                      "end": 55,
                      "raw": "true",
                      "value": true
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 34,
                "end": 35,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "params": []
            }
          ]
        },
        "test": {
          "type": "Literal",
          "start": 15,
          "end": 19,
          "raw": "true",
          "value": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 0,
        "end": 6,
        "decorators": [],
        "name": "target",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
