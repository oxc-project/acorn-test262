__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Collection",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 36
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 38,
                "end": 44
              },
              "start": 36,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 30,
            "end": 45
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "add",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 53
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 57,
                      "end": 58
                    },
                    "typeArguments": null,
                    "start": 57,
                    "end": 58
                  },
                  "start": 55,
                  "end": 58
                },
                "start": 54,
                "end": 58
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 61,
                "end": 65
              },
              "start": 59,
              "end": 65
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 50,
            "end": 66
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "remove",
              "optional": false,
              "typeAnnotation": null,
              "start": 71,
              "end": 77
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 82
                    },
                    "typeArguments": null,
                    "start": 81,
                    "end": 82
                  },
                  "start": 79,
                  "end": 82
                },
                "start": 78,
                "end": 82
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 85,
                "end": 92
              },
              "start": 83,
              "end": 92
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 71,
            "end": 93
          }
        ],
        "start": 24,
        "end": 95
      },
      "declare": false,
      "start": 0,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Combinators",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 118
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "forEach",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 132
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "start": 133,
                    "end": 134
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 133,
                  "end": 134
                }
              ],
              "start": 132,
              "end": 135
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Collection",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 149
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
                            "start": 150,
                            "end": 151
                          },
                          "typeArguments": null,
                          "start": 150,
                          "end": 151
                        }
                      ],
                      "start": 149,
                      "end": 152
                    },
                    "start": 139,
                    "end": 152
                  },
                  "start": 137,
                  "end": 152
                },
                "start": 136,
                "end": 152
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 161,
                              "end": 162
                            },
                            "typeArguments": null,
                            "start": 161,
                            "end": 162
                          },
                          "start": 159,
                          "end": 162
                        },
                        "start": 158,
                        "end": 162
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Date",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 167,
                          "end": 171
                        },
                        "typeArguments": null,
                        "start": 167,
                        "end": 171
                      },
                      "start": 164,
                      "end": 171
                    },
                    "start": 157,
                    "end": 171
                  },
                  "start": 155,
                  "end": 171
                },
                "start": 154,
                "end": 171
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 174,
                "end": 178
              },
              "start": 172,
              "end": 178
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 125,
            "end": 179
          }
        ],
        "start": 119,
        "end": 181
      },
      "declare": false,
      "start": 97,
      "end": 181
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Collection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 201
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 202,
                      "end": 208
                    }
                  ],
                  "start": 201,
                  "end": 209
                },
                "start": 191,
                "end": 209
              },
              "start": 189,
              "end": 209
            },
            "start": 187,
            "end": 209
          },
          "init": null,
          "definite": false,
          "start": 187,
          "end": 209
        }
      ],
      "declare": false,
      "start": 183,
      "end": 210
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "_",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Combinators",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 229
                },
                "typeArguments": null,
                "start": 218,
                "end": 229
              },
              "start": 216,
              "end": 229
            },
            "start": 215,
            "end": 229
          },
          "init": null,
          "definite": false,
          "start": 215,
          "end": 229
        }
      ],
      "declare": false,
      "start": 211,
      "end": 230
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 308,
            "end": 309
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 316,
                    "end": 322
                  },
                  "start": 314,
                  "end": 322
                },
                "start": 313,
                "end": 322
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 336,
                        "end": 337
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 338,
                        "end": 345
                      },
                      "optional": false,
                      "computed": false,
                      "start": 336,
                      "end": 345
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 336,
                    "end": 347
                  },
                  "start": 329,
                  "end": 347
                }
              ],
              "start": 327,
              "end": 349
            },
            "id": null,
            "generator": false,
            "start": 312,
            "end": 349
          },
          "definite": false,
          "start": 308,
          "end": 349
        }
      ],
      "declare": false,
      "start": 304,
      "end": 350
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 355,
            "end": 357
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 361
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 369
              },
              "optional": false,
              "computed": false,
              "start": 360,
              "end": 369
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 370,
                  "end": 376
                }
              ],
              "start": 369,
              "end": 377
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 380
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 382,
                "end": 383
              }
            ],
            "optional": false,
            "start": 360,
            "end": 384
          },
          "definite": false,
          "start": 355,
          "end": 384
        }
      ],
      "declare": false,
      "start": 351,
      "end": 385
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r6",
            "optional": false,
            "typeAnnotation": null,
            "start": 391,
            "end": 393
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "_",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 397
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "forEach",
                "optional": false,
                "typeAnnotation": null,
                "start": 398,
                "end": 405
              },
              "optional": false,
              "computed": false,
              "start": 396,
              "end": 405
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 406,
                  "end": 412
                }
              ],
              "start": 405,
              "end": 413
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 416
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 434,
                            "end": 435
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "toFixed",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 443
                          },
                          "optional": false,
                          "computed": false,
                          "start": 434,
                          "end": 443
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 434,
                        "end": 445
                      },
                      "start": 427,
                      "end": 445
                    }
                  ],
                  "start": 425,
                  "end": 447
                },
                "id": null,
                "generator": false,
                "start": 418,
                "end": 447
              }
            ],
            "optional": false,
            "start": 396,
            "end": 448
          },
          "definite": false,
          "start": 391,
          "end": 448
        }
      ],
      "declare": false,
      "start": 387,
      "end": 449
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 450
}
```
