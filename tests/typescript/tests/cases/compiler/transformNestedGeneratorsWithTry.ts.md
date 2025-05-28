__ESTREE_TEST__:PASS:
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
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 82,
        "end": 92,
        "value": "bluebird",
        "raw": "'bluebird'"
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "FunctionDeclaration",
      "start": 94,
      "end": 379,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 112,
        "end": 128,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 114,
          "end": 128,
          "typeName": {
            "type": "Identifier",
            "start": 114,
            "end": 122,
            "decorators": [],
            "name": "Bluebird",
            "optional": false,
            "typeAnnotation": null
          },
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
          }
        }
      },
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 149,
                      "end": 301,
                      "id": {
                        "type": "Identifier",
                        "start": 149,
                        "end": 150,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "FunctionExpression",
                        "start": 153,
                        "end": 301,
                        "id": {
                          "type": "Identifier",
                          "start": 168,
                          "end": 169,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "generator": false,
                        "async": true,
                        "declare": false,
                        "typeParameters": null,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 171,
                          "end": 187,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 173,
                            "end": 187,
                            "typeName": {
                              "type": "Identifier",
                              "start": 173,
                              "end": 181,
                              "decorators": [],
                              "name": "Bluebird",
                              "optional": false,
                              "typeAnnotation": null
                            },
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
                            }
                          }
                        },
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
                                        "callee": {
                                          "type": "MemberExpression",
                                          "start": 216,
                                          "end": 232,
                                          "object": {
                                            "type": "Identifier",
                                            "start": 216,
                                            "end": 224,
                                            "decorators": [],
                                            "name": "Bluebird",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "start": 225,
                                            "end": 232,
                                            "decorators": [],
                                            "name": "resolve",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "computed": false
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false
                                      }
                                    },
                                    "directive": null
                                  }
                                ]
                              },
                              "handler": {
                                "type": "CatchClause",
                                "start": 278,
                                "end": 295,
                                "param": {
                                  "type": "Identifier",
                                  "start": 285,
                                  "end": 290,
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "body": {
                                  "type": "BlockStatement",
                                  "start": 292,
                                  "end": 295,
                                  "body": []
                                }
                              },
                              "finalizer": null
                            }
                          ]
                        },
                        "expression": false
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
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
                      "callee": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "handler": {
              "type": "CatchClause",
              "start": 360,
              "end": 377,
              "param": {
                "type": "Identifier",
                "start": 367,
                "end": 372,
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 374,
                "end": 377,
                "body": []
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 25,
        "value": "bluebird",
        "raw": "\"bluebird\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 123,
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "start": 32,
            "end": 62,
            "id": {
              "type": "Identifier",
              "start": 37,
              "end": 45,
              "decorators": [],
              "name": "Bluebird",
              "optional": false,
              "typeAnnotation": null
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
                  "name": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 51,
              "end": 61,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 58,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 67,
            "end": 98,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 73,
                "end": 97,
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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
