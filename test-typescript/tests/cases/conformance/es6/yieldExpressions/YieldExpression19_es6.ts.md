__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 88,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 88,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 88,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 19,
            "end": 86,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 34,
              "end": 86,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 40,
                  "end": 82,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 57,
                    "end": 82,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 65,
                        "end": 76,
                        "expression": {
                          "type": "YieldExpression",
                          "start": 65,
                          "end": 75,
                          "argument": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 74,
                            "decorators": [],
                            "name": "foo",
                            "optional": false
                          },
                          "delegate": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": true,
                  "id": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 54,
                    "decorators": [],
                    "name": "quux",
                    "optional": false
                  },
                  "params": []
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "params": []
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
