__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 23,
              "end": 30
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stack2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 55,
                          "end": 61
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "e",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 64,
                            "end": 65
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "stack",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 66,
                            "end": 71
                          },
                          "optional": false,
                          "computed": false,
                          "start": 64,
                          "end": 71
                        },
                        "definite": false,
                        "start": 55,
                        "end": 71
                      }
                    ],
                    "declare": false,
                    "start": 51,
                    "end": 72
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "stack2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 88,
                      "end": 94
                    },
                    "start": 81,
                    "end": 95
                  }
                ],
                "start": 41,
                "end": 149
              },
              "start": 31,
              "end": 149
            },
            "finalizer": null,
            "start": 19,
            "end": 149
          }
        ],
        "start": 13,
        "end": 151
      },
      "expression": false,
      "start": 0,
      "end": 151
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 151
}
```
