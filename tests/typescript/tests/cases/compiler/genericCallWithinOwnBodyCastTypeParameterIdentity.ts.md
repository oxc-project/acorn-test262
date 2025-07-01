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
