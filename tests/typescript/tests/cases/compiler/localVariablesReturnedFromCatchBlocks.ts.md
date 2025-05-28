__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 151,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 151,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
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
        "start": 13,
        "end": 151,
        "body": [
          {
            "type": "TryStatement",
            "start": 19,
            "end": 149,
            "block": {
              "type": "BlockStatement",
              "start": 23,
              "end": 30,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 31,
              "end": 149,
              "param": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 149,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 51,
                    "end": 72,
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 55,
                        "end": 71,
                        "id": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "decorators": [],
                          "name": "stack2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 64,
                          "end": 71,
                          "object": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 71,
                            "decorators": [],
                            "name": "stack",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 81,
                    "end": 95,
                    "argument": {
                      "type": "Identifier",
                      "start": 88,
                      "end": 94,
                      "decorators": [],
                      "name": "stack2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            },
            "finalizer": null
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
