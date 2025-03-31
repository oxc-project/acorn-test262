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
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 55,
                        "end": 71,
                        "id": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "name": "stack2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 64,
                          "end": 71,
                          "object": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "name": "e",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 71,
                            "name": "stack",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
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
                      "name": "stack2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              }
            },
            "finalizer": null
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
