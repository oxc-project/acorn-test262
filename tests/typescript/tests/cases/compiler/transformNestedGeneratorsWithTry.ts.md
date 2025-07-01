__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bluebird",
            "optional": false,
            "typeAnnotation": null,
            "start": 68,
            "end": 76
          },
          "start": 63,
          "end": 76
        }
      ],
      "source": {
        "type": "Literal",
        "value": "bluebird",
        "raw": "'bluebird'",
        "start": 82,
        "end": 92
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 56,
      "end": 93
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 110
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Bluebird",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 122
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 123,
                "end": 127
              }
            ],
            "start": 122,
            "end": 128
          },
          "start": 114,
          "end": 128
        },
        "start": 112,
        "end": 128
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 149,
                        "end": 150
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 169
                        },
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Bluebird",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 181
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSVoidKeyword",
                                  "start": 182,
                                  "end": 186
                                }
                              ],
                              "start": 181,
                              "end": 187
                            },
                            "start": 173,
                            "end": 187
                          },
                          "start": 171,
                          "end": 187
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "TryStatement",
                              "block": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AwaitExpression",
                                      "argument": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Bluebird",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 216,
                                            "end": 224
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "resolve",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 225,
                                            "end": 232
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 216,
                                          "end": 232
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 216,
                                        "end": 234
                                      },
                                      "start": 210,
                                      "end": 234
                                    },
                                    "directive": null,
                                    "start": 210,
                                    "end": 235
                                  }
                                ],
                                "start": 200,
                                "end": 277
                              },
                              "handler": {
                                "type": "CatchClause",
                                "param": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 285,
                                  "end": 290
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [],
                                  "start": 292,
                                  "end": 295
                                },
                                "start": 278,
                                "end": 295
                              },
                              "finalizer": null,
                              "start": 196,
                              "end": 295
                            }
                          ],
                          "start": 188,
                          "end": 301
                        },
                        "expression": false,
                        "start": 153,
                        "end": 301
                      },
                      "definite": false,
                      "start": 149,
                      "end": 301
                    }
                  ],
                  "declare": false,
                  "start": 143,
                  "end": 302
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AwaitExpression",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 314,
                      "end": 317
                    },
                    "start": 308,
                    "end": 317
                  },
                  "directive": null,
                  "start": 308,
                  "end": 318
                }
              ],
              "start": 137,
              "end": 359
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 367,
                "end": 372
              },
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 374,
                "end": 377
              },
              "start": 360,
              "end": 377
            },
            "finalizer": null,
            "start": 133,
            "end": 377
          }
        ],
        "start": 129,
        "end": 379
      },
      "expression": false,
      "start": 94,
      "end": 379
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 56,
  "end": 380
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "bluebird",
        "raw": "\"bluebird\"",
        "start": 15,
        "end": 25
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bluebird",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 45
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 46,
                    "end": 47
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 46,
                  "end": 47
                }
              ],
              "start": 45,
              "end": 48
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 51,
                "end": 58
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 59,
                      "end": 60
                    },
                    "typeArguments": null,
                    "start": 59,
                    "end": 60
                  }
                ],
                "start": 58,
                "end": 61
              },
              "start": 51,
              "end": 61
            },
            "declare": false,
            "start": 32,
            "end": 62
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Bluebird",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 90,
                        "end": 97
                      },
                      "typeArguments": null,
                      "start": 83,
                      "end": 97
                    },
                    "start": 81,
                    "end": 97
                  },
                  "start": 73,
                  "end": 97
                },
                "init": null,
                "definite": false,
                "start": 73,
                "end": 97
              }
            ],
            "declare": false,
            "start": 67,
            "end": 98
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bluebird",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 120
            },
            "start": 103,
            "end": 121
          }
        ],
        "start": 26,
        "end": 123
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 123
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 123
}
```
