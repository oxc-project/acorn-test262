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
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": true,
      "async": false,
      "params": [],
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
              "name": "bar",
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
                    "name": "quux",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "expression": false,
                  "generator": true,
                  "async": false,
                  "params": [],
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
                            "name": "foo",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
