__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thenable",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 24
          }
        ],
        "start": 18,
        "end": 25
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 36
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
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 37,
                    "end": 38
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 37,
                  "end": 38
                }
              ],
              "start": 36,
              "end": 39
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "onFulfilled",
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
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 70,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 70,
                            "end": 75
                          },
                          "start": 68,
                          "end": 75
                        },
                        "start": 63,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "V",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 80,
                              "end": 81
                            },
                            "typeArguments": null,
                            "start": 80,
                            "end": 81
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 84,
                              "end": 92
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 93,
                                    "end": 94
                                  },
                                  "typeArguments": null,
                                  "start": 93,
                                  "end": 94
                                }
                              ],
                              "start": 92,
                              "end": 95
                            },
                            "start": 84,
                            "end": 95
                          }
                        ],
                        "start": 80,
                        "end": 95
                      },
                      "start": 77,
                      "end": 95
                    },
                    "start": 62,
                    "end": 95
                  },
                  "start": 60,
                  "end": 95
                },
                "start": 49,
                "end": 95
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 104,
                  "end": 112
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 113,
                        "end": 114
                      },
                      "typeArguments": null,
                      "start": 113,
                      "end": 114
                    }
                  ],
                  "start": 112,
                  "end": 115
                },
                "start": 104,
                "end": 115
              },
              "start": 102,
              "end": 115
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 32,
            "end": 116
          }
        ],
        "start": 26,
        "end": 118
      },
      "declare": false,
      "start": 0,
      "end": 118
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
            "name": "toThenable",
            "optional": false,
            "typeAnnotation": null,
            "start": 126,
            "end": 136
          },
          "init": {
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
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 146
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 140,
                  "end": 146
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 148,
                    "end": 153
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 148,
                  "end": 153
                }
              ],
              "start": 139,
              "end": 154
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
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
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 172
                            },
                            "typeArguments": null,
                            "start": 167,
                            "end": 172
                          },
                          "start": 165,
                          "end": 172
                        },
                        "start": 160,
                        "end": 172
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 177,
                              "end": 183
                            },
                            "typeArguments": null,
                            "start": 177,
                            "end": 183
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 194
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 195,
                                    "end": 201
                                  },
                                  "typeArguments": null,
                                  "start": 195,
                                  "end": 201
                                }
                              ],
                              "start": 194,
                              "end": 202
                            },
                            "start": 186,
                            "end": 202
                          }
                        ],
                        "start": 177,
                        "end": 202
                      },
                      "start": 174,
                      "end": 202
                    },
                    "start": 159,
                    "end": 202
                  },
                  "start": 157,
                  "end": 202
                },
                "start": 155,
                "end": 202
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 219,
                        "end": 224
                      },
                      "typeArguments": null,
                      "start": 219,
                      "end": 224
                    },
                    "start": 217,
                    "end": 224
                  },
                  "start": 212,
                  "end": 224
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 235
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 236,
                          "end": 242
                        },
                        "typeArguments": null,
                        "start": 236,
                        "end": 242
                      }
                    ],
                    "start": 235,
                    "end": 243
                  },
                  "start": 227,
                  "end": 243
                },
                "start": 225,
                "end": 243
              },
              "body": {
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 263,
                          "end": 269
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 272,
                            "end": 274
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 275,
                              "end": 280
                            }
                          ],
                          "optional": false,
                          "start": 272,
                          "end": 281
                        },
                        "definite": false,
                        "start": 263,
                        "end": 281
                      }
                    ],
                    "declare": false,
                    "start": 257,
                    "end": 281
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 311,
                            "end": 315
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "name": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "V",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 316,
                                    "end": 317
                                  },
                                  "constraint": null,
                                  "default": null,
                                  "in": false,
                                  "out": false,
                                  "const": false,
                                  "start": 316,
                                  "end": 317
                                }
                              ],
                              "start": 315,
                              "end": 318
                            },
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "onFulfilled",
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
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 340,
                                              "end": 346
                                            },
                                            "typeArguments": null,
                                            "start": 340,
                                            "end": 346
                                          },
                                          "start": 338,
                                          "end": 346
                                        },
                                        "start": 333,
                                        "end": 346
                                      }
                                    ],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSUnionType",
                                        "types": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 351,
                                              "end": 352
                                            },
                                            "typeArguments": null,
                                            "start": 351,
                                            "end": 352
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Thenable",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 355,
                                              "end": 363
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "V",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 364,
                                                    "end": 365
                                                  },
                                                  "typeArguments": null,
                                                  "start": 364,
                                                  "end": 365
                                                }
                                              ],
                                              "start": 363,
                                              "end": 366
                                            },
                                            "start": 355,
                                            "end": 366
                                          }
                                        ],
                                        "start": 351,
                                        "end": 366
                                      },
                                      "start": 348,
                                      "end": 366
                                    },
                                    "start": 332,
                                    "end": 366
                                  },
                                  "start": 330,
                                  "end": 366
                                },
                                "start": 319,
                                "end": 366
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toThenable",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 393,
                                        "end": 403
                                      },
                                      "typeArguments": {
                                        "type": "TSTypeParameterInstantiation",
                                        "params": [
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "V",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 404,
                                              "end": 405
                                            },
                                            "typeArguments": null,
                                            "start": 404,
                                            "end": 405
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "Result",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 407,
                                              "end": 413
                                            },
                                            "typeArguments": null,
                                            "start": 407,
                                            "end": 413
                                          }
                                        ],
                                        "start": 403,
                                        "end": 414
                                      },
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 415,
                                          "end": 426
                                        }
                                      ],
                                      "optional": false,
                                      "start": 393,
                                      "end": 427
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 428,
                                          "end": 434
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 438,
                                            "end": 444
                                          },
                                          "typeArguments": null,
                                          "start": 438,
                                          "end": 444
                                        },
                                        "start": 428,
                                        "end": 444
                                      }
                                    ],
                                    "optional": false,
                                    "start": 393,
                                    "end": 445
                                  },
                                  "start": 386,
                                  "end": 445
                                }
                              ],
                              "start": 368,
                              "end": 459
                            },
                            "expression": false,
                            "start": 315,
                            "end": 459
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 311,
                          "end": 459
                        }
                      ],
                      "start": 297,
                      "end": 469
                    },
                    "start": 290,
                    "end": 470
                  }
                ],
                "start": 247,
                "end": 476
              },
              "id": null,
              "generator": false,
              "start": 211,
              "end": 476
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 476
          },
          "definite": false,
          "start": 126,
          "end": 476
        }
      ],
      "declare": false,
      "start": 120,
      "end": 476
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
            "name": "toThenableInferred",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 502
          },
          "init": {
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
                    "name": "Result",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 506,
                    "end": 512
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 506,
                  "end": 512
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 514,
                    "end": 519
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 514,
                  "end": 519
                }
              ],
              "start": 505,
              "end": 520
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
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
                        "name": "input",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 533,
                              "end": 538
                            },
                            "typeArguments": null,
                            "start": 533,
                            "end": 538
                          },
                          "start": 531,
                          "end": 538
                        },
                        "start": 526,
                        "end": 538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Result",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 543,
                              "end": 549
                            },
                            "typeArguments": null,
                            "start": 543,
                            "end": 549
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 552,
                              "end": 560
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 561,
                                    "end": 567
                                  },
                                  "typeArguments": null,
                                  "start": 561,
                                  "end": 567
                                }
                              ],
                              "start": 560,
                              "end": 568
                            },
                            "start": 552,
                            "end": 568
                          }
                        ],
                        "start": 543,
                        "end": 568
                      },
                      "start": 540,
                      "end": 568
                    },
                    "start": 525,
                    "end": 568
                  },
                  "start": 523,
                  "end": 568
                },
                "start": 521,
                "end": 568
              }
            ],
            "returnType": null,
            "body": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "input",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Input",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 590
                      },
                      "typeArguments": null,
                      "start": 585,
                      "end": 590
                    },
                    "start": 583,
                    "end": 590
                  },
                  "start": 578,
                  "end": 590
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Thenable",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 601
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 602,
                          "end": 608
                        },
                        "typeArguments": null,
                        "start": 602,
                        "end": 608
                      }
                    ],
                    "start": 601,
                    "end": 609
                  },
                  "start": 593,
                  "end": 609
                },
                "start": 591,
                "end": 609
              },
              "body": {
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
                          "name": "result",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 635
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "fn",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 638,
                            "end": 640
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "input",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 641,
                              "end": 646
                            }
                          ],
                          "optional": false,
                          "start": 638,
                          "end": 647
                        },
                        "definite": false,
                        "start": 629,
                        "end": 647
                      }
                    ],
                    "declare": false,
                    "start": 623,
                    "end": 647
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "then",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 677,
                            "end": 681
                          },
                          "value": {
                            "type": "FunctionExpression",
                            "id": null,
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "onFulfilled",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 682,
                                "end": 693
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
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "toThenableInferred",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 720,
                                        "end": 738
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "onFulfilled",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 739,
                                          "end": 750
                                        }
                                      ],
                                      "optional": false,
                                      "start": 720,
                                      "end": 751
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "TSAsExpression",
                                        "expression": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "result",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 752,
                                          "end": 758
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Result",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 762,
                                            "end": 768
                                          },
                                          "typeArguments": null,
                                          "start": 762,
                                          "end": 768
                                        },
                                        "start": 752,
                                        "end": 768
                                      }
                                    ],
                                    "optional": false,
                                    "start": 720,
                                    "end": 769
                                  },
                                  "start": 713,
                                  "end": 769
                                }
                              ],
                              "start": 695,
                              "end": 783
                            },
                            "expression": false,
                            "start": 681,
                            "end": 783
                          },
                          "method": true,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 677,
                          "end": 783
                        }
                      ],
                      "start": 663,
                      "end": 793
                    },
                    "start": 656,
                    "end": 794
                  }
                ],
                "start": 613,
                "end": 800
              },
              "id": null,
              "generator": false,
              "start": 577,
              "end": 800
            },
            "id": null,
            "generator": false,
            "start": 505,
            "end": 800
          },
          "definite": false,
          "start": 484,
          "end": 800
        }
      ],
      "declare": false,
      "start": 478,
      "end": 800
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 800
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 10,
    "end": 18,
    "range": [
      10,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 19,
    "end": 24,
    "range": [
      19,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 32,
    "end": 36,
    "range": [
      32,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 36,
    "end": 37,
    "range": [
      36,
      37
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 39,
    "end": 40,
    "range": [
      39,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 49,
    "end": 60,
    "range": [
      49,
      60
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 62,
    "end": 63,
    "range": [
      62,
      63
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 63,
    "end": 68,
    "range": [
      63,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 70,
    "end": 75,
    "range": [
      70,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 77,
    "end": 79,
    "range": [
      77,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 82,
    "end": 83,
    "range": [
      82,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 84,
    "end": 92,
    "range": [
      84,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 104,
    "end": 112,
    "range": [
      104,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "toThenable",
    "start": 126,
    "end": 136,
    "range": [
      126,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 140,
    "end": 146,
    "range": [
      140,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 148,
    "end": 153,
    "range": [
      148,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 155,
    "end": 157,
    "range": [
      155,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 159,
    "end": 160,
    "range": [
      159,
      160
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 160,
    "end": 165,
    "range": [
      160,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 167,
    "end": 172,
    "range": [
      167,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 174,
    "end": 176,
    "range": [
      174,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 186,
    "end": 194,
    "range": [
      186,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 195,
    "end": 201,
    "range": [
      195,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202,
    "range": [
      201,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 212,
    "end": 217,
    "range": [
      212,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218,
    "range": [
      217,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 227,
    "end": 235,
    "range": [
      227,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 236,
    "end": 242,
    "range": [
      236,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 244,
    "end": 246,
    "range": [
      244,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 272,
    "end": 274,
    "range": [
      272,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 275,
    "end": 280,
    "range": [
      275,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 290,
    "end": 296,
    "range": [
      290,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 311,
    "end": 315,
    "range": [
      311,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 319,
    "end": 330,
    "range": [
      319,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 333,
    "end": 338,
    "range": [
      333,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 340,
    "end": 346,
    "range": [
      340,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 348,
    "end": 350,
    "range": [
      348,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 355,
    "end": 363,
    "range": [
      355,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 386,
    "end": 392,
    "range": [
      386,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "toThenable",
    "start": 393,
    "end": 403,
    "range": [
      393,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 403,
    "end": 404,
    "range": [
      403,
      404
    ]
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 407,
    "end": 413,
    "range": [
      407,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 415,
    "end": 426,
    "range": [
      415,
      426
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427,
    "range": [
      426,
      427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 427,
    "end": 428,
    "range": [
      427,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 428,
    "end": 434,
    "range": [
      428,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 435,
    "end": 437,
    "range": [
      435,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 438,
    "end": 444,
    "range": [
      438,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "toThenableInferred",
    "start": 484,
    "end": 502,
    "range": [
      484,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 506,
    "end": 512,
    "range": [
      506,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 514,
    "end": 519,
    "range": [
      514,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 521,
    "end": 523,
    "range": [
      521,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 526,
    "end": 531,
    "range": [
      526,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 533,
    "end": 538,
    "range": [
      533,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 540,
    "end": 542,
    "range": [
      540,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 543,
    "end": 549,
    "range": [
      543,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 552,
    "end": 560,
    "range": [
      552,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 561,
    "end": 567,
    "range": [
      561,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 570,
    "end": 572,
    "range": [
      570,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 577,
    "end": 578,
    "range": [
      577,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 578,
    "end": 583,
    "range": [
      578,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "Input",
    "start": 585,
    "end": 590,
    "range": [
      585,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "Thenable",
    "start": 593,
    "end": 601,
    "range": [
      593,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 602,
    "end": 608,
    "range": [
      602,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 610,
    "end": 612,
    "range": [
      610,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 623,
    "end": 628,
    "range": [
      623,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 638,
    "end": 640,
    "range": [
      638,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 641,
    "end": 646,
    "range": [
      641,
      646
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 656,
    "end": 662,
    "range": [
      656,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 663,
    "end": 664,
    "range": [
      663,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "then",
    "start": 677,
    "end": 681,
    "range": [
      677,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 682,
    "end": 693,
    "range": [
      682,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "toThenableInferred",
    "start": 720,
    "end": 738,
    "range": [
      720,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Identifier",
    "value": "onFulfilled",
    "start": 739,
    "end": 750,
    "range": [
      739,
      750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 759,
    "end": 761,
    "range": [
      759,
      761
    ]
  },
  {
    "type": "Identifier",
    "value": "Result",
    "start": 762,
    "end": 768,
    "range": [
      762,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  }
]
```
