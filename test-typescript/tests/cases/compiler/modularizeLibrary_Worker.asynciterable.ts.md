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
      "directive": null,
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
                        "directive": null,
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
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 150,
                            "end": 154,
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null
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
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 111,
                              "end": 117,
                              "decorators": [],
                              "name": "handle",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null
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
                    "optional": false,
                    "typeAnnotation": null
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
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 42,
                  "decorators": [],
                  "name": "storage",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 43,
                "end": 55,
                "decorators": [],
                "name": "getDirectory",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 58,
            "end": 62,
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
