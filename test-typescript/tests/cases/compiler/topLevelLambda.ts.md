__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 43,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 42,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 12,
            "end": 40,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 16,
                "end": 40,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 16,
                  "end": 17,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                },
                "init": {
                  "type": "ArrowFunctionExpression",
                  "start": 20,
                  "end": 40,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 26,
                    "end": 40,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 27,
                        "end": 39,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 27,
                          "end": 38,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 27,
                            "end": 31
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 32,
                            "end": 38,
                            "decorators": [],
                            "name": "window",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
