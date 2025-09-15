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
        "name": "CallSignature",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 51
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                            "type": "TSNumberKeyword",
                            "start": 60,
                            "end": 66
                          },
                          "start": 58,
                          "end": 66
                        },
                        "start": 57,
                        "end": 66
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 71,
                        "end": 75
                      },
                      "start": 68,
                      "end": 75
                    },
                    "start": 56,
                    "end": 75
                  },
                  "start": 54,
                  "end": 75
                },
                "start": 52,
                "end": 75
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 85,
                  "end": 87
                },
                "typeArguments": null,
                "start": 78,
                "end": 87
              },
              "start": 76,
              "end": 87
            },
            "body": null,
            "expression": false,
            "start": 30,
            "end": 88
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 114
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 119,
                    "end": 122
                  },
                  "start": 117,
                  "end": 122
                },
                "start": 115,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 125,
                "end": 128
              },
              "start": 123,
              "end": 128
            },
            "body": null,
            "expression": false,
            "start": 93,
            "end": 129
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
                  "start": 138,
                  "end": 139
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 146
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
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
                              "start": 151,
                              "end": 157
                            },
                            "start": 149,
                            "end": 157
                          },
                          "start": 148,
                          "end": 157
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 162,
                        "end": 163
                      },
                      "id": null,
                      "generator": false,
                      "start": 147,
                      "end": 163
                    }
                  ],
                  "optional": false,
                  "start": 142,
                  "end": 164
                },
                "definite": false,
                "start": 138,
                "end": 164
              }
            ],
            "declare": false,
            "start": 134,
            "end": 165
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
                  "start": 206,
                  "end": 208
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 215
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 217,
                              "end": 218
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 217,
                            "end": 218
                          }
                        ],
                        "start": 216,
                        "end": 219
                      },
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
                                "start": 223,
                                "end": 224
                              },
                              "typeArguments": null,
                              "start": 223,
                              "end": 224
                            },
                            "start": 221,
                            "end": 224
                          },
                          "start": 220,
                          "end": 224
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 229,
                        "end": 231
                      },
                      "id": null,
                      "generator": false,
                      "start": 216,
                      "end": 231
                    }
                  ],
                  "optional": false,
                  "start": 211,
                  "end": 232
                },
                "definite": false,
                "start": 206,
                "end": 232
              }
            ],
            "declare": false,
            "start": 202,
            "end": 233
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 288,
              "end": 292
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
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
                            "type": "TSNumberKeyword",
                            "start": 301,
                            "end": 307
                          },
                          "start": 299,
                          "end": 307
                        },
                        "start": 298,
                        "end": 307
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 312,
                            "end": 318
                          },
                          "start": 310,
                          "end": 318
                        },
                        "start": 309,
                        "end": 318
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 323,
                        "end": 327
                      },
                      "start": 320,
                      "end": 327
                    },
                    "start": 297,
                    "end": 327
                  },
                  "start": 295,
                  "end": 327
                },
                "start": 293,
                "end": 327
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cb",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 339
                },
                "typeArguments": null,
                "start": 330,
                "end": 339
              },
              "start": 328,
              "end": 339
            },
            "body": null,
            "expression": false,
            "start": 271,
            "end": 340
          },
          {
            "type": "TSDeclareFunction",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
            },
            "generator": false,
            "async": false,
            "declare": true,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 371,
                    "end": 374
                  },
                  "start": 369,
                  "end": 374
                },
                "start": 367,
                "end": 374
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 377,
                "end": 380
              },
              "start": 375,
              "end": 380
            },
            "body": null,
            "expression": false,
            "start": 345,
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
                  "start": 390,
                  "end": 392
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 395,
                    "end": 399
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
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
                              "start": 404,
                              "end": 410
                            },
                            "start": 402,
                            "end": 410
                          },
                          "start": 401,
                          "end": 410
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 415,
                              "end": 421
                            },
                            "start": 413,
                            "end": 421
                          },
                          "start": 412,
                          "end": 421
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 426,
                        "end": 427
                      },
                      "id": null,
                      "generator": false,
                      "start": 400,
                      "end": 427
                    }
                  ],
                  "optional": false,
                  "start": 395,
                  "end": 428
                },
                "definite": false,
                "start": 390,
                "end": 428
              }
            ],
            "declare": false,
            "start": 386,
            "end": 429
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
                  "start": 470,
                  "end": 472
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 475,
                    "end": 479
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
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
                              "start": 481,
                              "end": 482
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 481,
                            "end": 482
                          }
                        ],
                        "start": 480,
                        "end": 483
                      },
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
                                "start": 487,
                                "end": 488
                              },
                              "typeArguments": null,
                              "start": 487,
                              "end": 488
                            },
                            "start": 485,
                            "end": 488
                          },
                          "start": 484,
                          "end": 488
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 493,
                        "end": 495
                      },
                      "id": null,
                      "generator": false,
                      "start": 480,
                      "end": 495
                    }
                  ],
                  "optional": false,
                  "start": 475,
                  "end": 496
                },
                "definite": false,
                "start": 470,
                "end": 496
              }
            ],
            "declare": false,
            "start": 466,
            "end": 497
          }
        ],
        "start": 24,
        "end": 531
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 531
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 531
}
```
