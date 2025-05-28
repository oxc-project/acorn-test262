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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 15,
        "end": 88,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 19,
            "end": 86,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 31,
              "decorators": [],
              "name": "bar",
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
              "start": 34,
              "end": 86,
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "start": 40,
                  "end": 82,
                  "id": {
                    "type": "Identifier",
                    "start": 50,
                    "end": 54,
                    "decorators": [],
                    "name": "quux",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "delegate": false,
                          "argument": {
                            "type": "Identifier",
                            "start": 71,
                            "end": 74,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "expression": false
                }
              ]
            },
            "expression": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
