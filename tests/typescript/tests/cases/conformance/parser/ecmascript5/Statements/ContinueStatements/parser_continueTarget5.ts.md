__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "target",
        "optional": false,
        "typeAnnotation": null,
        "start": 0,
        "end": 6
      },
      "body": {
        "type": "WhileStatement",
        "test": {
          "type": "Literal",
          "value": true,
          "raw": "true",
          "start": 15,
          "end": 19
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "WhileStatement",
                    "test": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 51,
                      "end": 55
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ContinueStatement",
                          "label": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "target",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 74,
                            "end": 80
                          },
                          "start": 65,
                          "end": 81
                        }
                      ],
                      "start": 57,
                      "end": 87
                    },
                    "start": 44,
                    "end": 87
                  }
                ],
                "start": 38,
                "end": 91
              },
              "expression": false,
              "start": 25,
              "end": 91
            }
          ],
          "start": 21,
          "end": 93
        },
        "start": 8,
        "end": 93
      },
      "start": 0,
      "end": 93
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 93
}
```
