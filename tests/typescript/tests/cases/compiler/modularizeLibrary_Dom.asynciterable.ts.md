__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "navigator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 0,
                  "end": 9
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "storage",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 10,
                  "end": 17
                },
                "optional": false,
                "computed": false,
                "start": 0,
                "end": 17
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDirectory",
                "optional": false,
                "typeAnnotation": null,
                "start": 18,
                "end": 30
              },
              "optional": false,
              "computed": false,
              "start": 0,
              "end": 30
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 0,
            "end": 32
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 33,
            "end": 37
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 37
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "directory",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 53
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForOfStatement",
                  "await": true,
                  "left": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "ArrayPattern",
                          "decorators": [],
                          "elements": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "key",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 81,
                              "end": 84
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "handle",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 86,
                              "end": 92
                            }
                          ],
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 93
                        },
                        "init": null,
                        "definite": false,
                        "start": 80,
                        "end": 93
                      }
                    ],
                    "declare": false,
                    "start": 74,
                    "end": 93
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "directory",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 97,
                    "end": 106
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "handle",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 118,
                            "end": 124
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 125,
                            "end": 129
                          },
                          "optional": false,
                          "computed": false,
                          "start": 118,
                          "end": 129
                        },
                        "directive": null,
                        "start": 118,
                        "end": 130
                      }
                    ],
                    "start": 108,
                    "end": 136
                  },
                  "start": 63,
                  "end": 136
                }
              ],
              "start": 57,
              "end": 138
            },
            "id": null,
            "generator": false,
            "start": 38,
            "end": 138
          }
        ],
        "optional": false,
        "start": 0,
        "end": 139
      },
      "directive": null,
      "start": 0,
      "end": 140
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 140
}
```
