localVariablesReturnedFromCatchBlocks.ts
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
      "async": false,
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
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 31,
              "end": 149,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 55,
                          "end": 61,
                          "decorators": [],
                          "name": "stack2",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 64,
                          "end": 71,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 64,
                            "end": 65,
                            "decorators": [],
                            "name": "e",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 71,
                            "decorators": [],
                            "name": "stack",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
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
                      "optional": false
                    }
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "e",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
