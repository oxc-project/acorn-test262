__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 30,
  "end": 115,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 30,
      "end": 114,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 45,
        "end": 114,
        "body": [
          {
            "type": "TryStatement",
            "start": 51,
            "end": 112,
            "block": {
              "type": "BlockStatement",
              "start": 55,
              "end": 62,
              "body": []
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 67,
              "end": 112,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 112,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 87,
                    "end": 105,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 91,
                        "end": 104,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 91,
                          "end": 92,
                          "decorators": [],
                          "name": "s",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 95,
                          "end": 104,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 95,
                            "end": 96,
                            "decorators": [],
                            "name": "e",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 97,
                            "end": 104,
                            "decorators": [],
                            "name": "message",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "let"
                  }
                ]
              },
              "param": {
                "type": "Identifier",
                "start": 74,
                "end": 75,
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
        "start": 39,
        "end": 42,
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
