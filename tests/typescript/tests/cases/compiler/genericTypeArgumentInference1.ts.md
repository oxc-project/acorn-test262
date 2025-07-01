__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Underscore",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 17
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Iterator",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 49
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
                      "start": 50,
                      "end": 51
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 50,
                    "end": 51
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 53,
                      "end": 54
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 53,
                    "end": 54
                  }
                ],
                "start": 49,
                "end": 55
              },
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 67,
                        "end": 75
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "index",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 84,
                            "end": 87
                          },
                          "start": 82,
                          "end": 87
                        },
                        "start": 77,
                        "end": 87
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 95,
                            "end": 98
                          },
                          "start": 93,
                          "end": 98
                        },
                        "start": 89,
                        "end": 98
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 101,
                          "end": 102
                        },
                        "typeArguments": null,
                        "start": 101,
                        "end": 102
                      },
                      "start": 99,
                      "end": 102
                    },
                    "start": 66,
                    "end": 103
                  }
                ],
                "start": 56,
                "end": 109
              },
              "declare": false,
              "start": 31,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 24,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Static",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
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
                      "name": "all",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 151
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
                            "start": 152,
                            "end": 153
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 152,
                          "end": 153
                        }
                      ],
                      "start": 151,
                      "end": 154
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "list",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
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
                            "start": 161,
                            "end": 164
                          },
                          "start": 159,
                          "end": 164
                        },
                        "start": 155,
                        "end": 164
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iterator",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Iterator",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 185
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
                                    "start": 186,
                                    "end": 187
                                  },
                                  "typeArguments": null,
                                  "start": 186,
                                  "end": 187
                                },
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 189,
                                  "end": 196
                                }
                              ],
                              "start": 185,
                              "end": 197
                            },
                            "start": 177,
                            "end": 197
                          },
                          "start": 175,
                          "end": 197
                        },
                        "start": 166,
                        "end": 197
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "context",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 209,
                            "end": 212
                          },
                          "start": 207,
                          "end": 212
                        },
                        "start": 199,
                        "end": 212
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 216
                        },
                        "typeArguments": null,
                        "start": 215,
                        "end": 216
                      },
                      "start": 213,
                      "end": 216
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 148,
                    "end": 217
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "identity",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 234
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
                            "start": 235,
                            "end": 236
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 235,
                          "end": 236
                        }
                      ],
                      "start": 234,
                      "end": 237
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
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
                              "start": 245,
                              "end": 246
                            },
                            "typeArguments": null,
                            "start": 245,
                            "end": 246
                          },
                          "start": 243,
                          "end": 246
                        },
                        "start": 238,
                        "end": 246
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 250
                        },
                        "typeArguments": null,
                        "start": 249,
                        "end": 250
                      },
                      "start": 247,
                      "end": 250
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 226,
                    "end": 251
                  }
                ],
                "start": 138,
                "end": 257
              },
              "declare": false,
              "start": 121,
              "end": 257
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 114,
            "end": 257
          }
        ],
        "start": 18,
        "end": 259
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 259
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
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Underscore",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 275,
                    "end": 285
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Static",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 286,
                    "end": 292
                  },
                  "start": 275,
                  "end": 292
                },
                "typeArguments": null,
                "start": 275,
                "end": 292
              },
              "start": 273,
              "end": 292
            },
            "start": 272,
            "end": 292
          },
          "init": null,
          "definite": false,
          "start": 272,
          "end": 292
        }
      ],
      "declare": true,
      "start": 260,
      "end": 293
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 300
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
                "start": 303,
                "end": 304
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 305,
                "end": 308
              },
              "optional": false,
              "computed": false,
              "start": 303,
              "end": 308
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 310,
                    "end": 314
                  },
                  {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 316,
                    "end": 317
                  },
                  {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 319,
                    "end": 323
                  },
                  {
                    "type": "Literal",
                    "value": "yes",
                    "raw": "'yes'",
                    "start": 325,
                    "end": 330
                  }
                ],
                "start": 309,
                "end": 331
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 333,
                  "end": 334
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 335,
                  "end": 343
                },
                "optional": false,
                "computed": false,
                "start": 333,
                "end": 343
              }
            ],
            "optional": false,
            "start": 303,
            "end": 344
          },
          "definite": false,
          "start": 299,
          "end": 344
        }
      ],
      "declare": false,
      "start": 295,
      "end": 345
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 350,
            "end": 352
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
                "start": 355,
                "end": 356
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 357,
                "end": 360
              },
              "optional": false,
              "computed": false,
              "start": 355,
              "end": 360
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 362,
                    "end": 366
                  }
                ],
                "start": 361,
                "end": 367
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 369,
                  "end": 370
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 371,
                  "end": 379
                },
                "optional": false,
                "computed": false,
                "start": 369,
                "end": 379
              }
            ],
            "optional": false,
            "start": 355,
            "end": 380
          },
          "definite": false,
          "start": 350,
          "end": 380
        }
      ],
      "declare": false,
      "start": 346,
      "end": 381
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": null,
            "start": 386,
            "end": 388
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
                "start": 391,
                "end": 392
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 396
              },
              "optional": false,
              "computed": false,
              "start": 391,
              "end": 396
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [],
                "start": 397,
                "end": 399
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 401,
                  "end": 402
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 403,
                  "end": 411
                },
                "optional": false,
                "computed": false,
                "start": 401,
                "end": 411
              }
            ],
            "optional": false,
            "start": 391,
            "end": 412
          },
          "definite": false,
          "start": 386,
          "end": 412
        }
      ],
      "declare": false,
      "start": 382,
      "end": 413
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 420
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
                "start": 423,
                "end": 424
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 425,
                "end": 428
              },
              "optional": false,
              "computed": false,
              "start": 423,
              "end": 428
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "TSTypeAssertion",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 431,
                      "end": 434
                    },
                    "expression": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 435,
                      "end": 439
                    },
                    "start": 430,
                    "end": 439
                  }
                ],
                "start": 429,
                "end": 440
              },
              {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "_",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 443
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "identity",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 444,
                  "end": 452
                },
                "optional": false,
                "computed": false,
                "start": 442,
                "end": 452
              }
            ],
            "optional": false,
            "start": 423,
            "end": 453
          },
          "definite": false,
          "start": 418,
          "end": 453
        }
      ],
      "declare": false,
      "start": 414,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
