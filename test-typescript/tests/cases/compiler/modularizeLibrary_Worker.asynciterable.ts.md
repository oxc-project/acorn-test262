__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 166,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 25,
      "end": 165,
      "expression": {
        "type": "CallExpression",
        "start": 25,
        "end": 164,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 63,
            "end": 163,
            "async": true,
            "body": {
              "type": "BlockStatement",
              "start": 82,
              "end": 163,
              "body": [
                {
                  "type": "ForOfStatement",
                  "start": 88,
                  "end": 161,
                  "await": true,
                  "body": {
                    "type": "BlockStatement",
                    "start": 133,
                    "end": 161,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 143,
                        "end": 155,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 143,
                          "end": 154,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 143,
                            "end": 149,
                            "decorators": [],
                            "name": "handle",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 154,
                            "decorators": [],
                            "name": "kind",
                            "optional": false
                          }
                        }
                      }
                    ]
                  },
                  "left": {
                    "type": "VariableDeclaration",
                    "start": 99,
                    "end": 118,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 105,
                        "end": 118,
                        "definite": false,
                        "id": {
                          "type": "ArrayPattern",
                          "start": 105,
                          "end": 118,
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "start": 106,
                              "end": 109,
                              "decorators": [],
                              "name": "key",
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 111,
                              "end": 117,
                              "decorators": [],
                              "name": "handle",
                              "optional": false
                            }
                          ],
                          "optional": false
                        },
                        "init": null
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 131,
                    "decorators": [],
                    "name": "directory",
                    "optional": false
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 69,
                "end": 78,
                "decorators": [],
                "name": "directory",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 25,
          "end": 62,
          "computed": false,
          "object": {
            "type": "CallExpression",
            "start": 25,
            "end": 57,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 25,
              "end": 55,
              "computed": false,
              "object": {
                "type": "MemberExpression",
                "start": 25,
                "end": 42,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 34,
                  "decorators": [],
                  "name": "navigator",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "storage",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 55,
                "decorators": [],
                "name": "getDirectory",
                "optional": false
              }
            },
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 62,
            "decorators": [],
            "name": "then",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
