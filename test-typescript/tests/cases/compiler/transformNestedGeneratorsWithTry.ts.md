main.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 380,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 56,
      "end": 93,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 92,
        "raw": "'bluebird'",
        "value": "bluebird"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 63,
          "end": 76,
          "local": {
            "type": "Identifier",
            "start": 68,
            "end": 76,
            "decorators": [],
            "name": "Bluebird",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 379,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 129,
        "end": 379,
        "body": [
          {
            "type": "TryStatement",
            "start": 133,
            "end": 377,
            "block": {
              "type": "BlockStatement",
              "start": 137,
              "end": 359,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 143,
                  "end": 302,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 149,
                      "end": 301,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 153,
                        "end": 301,
                        "async": true,
                        "body": {
                          "type": "BlockStatement",
                          "start": 188,
                          "end": 301,
                          "body": [
                            {
                              "type": "TryStatement",
                              "start": 196,
                              "end": 295,
                              "block": {
                                "type": "BlockStatement",
                                "start": 200,
                                "end": 277,
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "start": 210,
                                    "end": 235,
                                    "expression": {
                                      "type": "AwaitExpression",
                                      "start": 210,
                                      "end": 234,
                                      "argument": {
                                        "type": "CallExpression",
                                        "start": 216,
                                        "end": 234,
                                        "arguments": [],
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 216,
                                          "end": 232,
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 216,
                                            "end": 224,
                                            "decorators": [],
                                            "name": "Bluebird",
                                            "optional": false
                                          },
                                          "optional": false,
                                          "property": {
                                            "type": "Identifier",
                                            "start": 225,
                                            "end": 232,
                                            "decorators": [],
                                            "name": "resolve",
                                            "optional": false
                                          }
                                        },
                                        "optional": false
                                      }
                                    }
                                  }
                                ]
                              },
                              "finalizer": null,
                              "handler": {
                                "type": "CatchClause",
                                "start": 278,
                                "end": 295,
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 292,
                                  "end": 295,
                                  "body": []
                                },
                                "param": {
                                  "type": "Identifier",
                                  "start": 285,
                                  "end": 290,
                                  "decorators": [],
                                  "name": "error",
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
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 171,
                          "end": 187,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 187,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 181,
                              "end": 187,
                              "params": [
                                {
                                  "type": "TSVoidKeyword",
                                  "start": 182,
                                  "end": 186
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 181,
                              "decorators": [],
                              "name": "Bluebird",
                              "optional": false
                            }
                          }
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 308,
                  "end": 318,
                  "expression": {
                    "type": "AwaitExpression",
                    "start": 308,
                    "end": 317,
                    "argument": {
                      "type": "CallExpression",
                      "start": 314,
                      "end": 317,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                }
              ]
            },
            "finalizer": null,
            "handler": {
              "type": "CatchClause",
              "start": 360,
              "end": 377,
              "body": {
                "type": "BlockStatement",
                "start": 374,
                "end": 377,
                "body": []
              },
              "param": {
                "type": "Identifier",
                "start": 367,
                "end": 372,
                "decorators": [],
                "name": "error",
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
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "a",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 114,
          "end": 128,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 122,
            "end": 128,
            "params": [
              {
                "type": "TSVoidKeyword",
                "start": 123,
                "end": 127
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 114,
            "end": 122,
            "decorators": [],
            "name": "Bluebird",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "module"
}
```
bluebird.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 123,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 123,
      "kind": "module",
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 123,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 32,
            "end": 62,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "decorators": [],
              "name": "Bluebird",
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 51,
              "end": 61,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 58,
                "end": 61,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 59,
                    "end": 60,
                    "typeName": {
                      "type": "Identifier",
                      "start": 59,
                      "end": 60,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 58,
                "decorators": [],
                "name": "Promise",
                "optional": false
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 45,
              "end": 48,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 46,
                  "end": 47,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 97,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 73,
                  "end": 97,
                  "decorators": [],
                  "name": "Bluebird",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 83,
                      "end": 97,
                      "exprName": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 97,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false
                      }
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "TSExportAssignment",
            "start": 103,
            "end": 121,
            "expression": {
              "type": "Identifier",
              "start": 112,
              "end": 120,
              "decorators": [],
              "name": "Bluebird",
              "optional": false
            }
          }
        ]
      },
      "declare": true,
      "global": false,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "raw": "\"bluebird\"",
        "value": "bluebird"
      }
    }
  ],
  "sourceType": "module"
}
```
