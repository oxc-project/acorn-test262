__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useState1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 26
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 28
          }
        ],
        "start": 26,
        "end": 29
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 45,
                      "end": 46
                    },
                    "typeArguments": null,
                    "start": 45,
                    "end": 46
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 62,
                        "end": 65
                      },
                      "start": 59,
                      "end": 65
                    },
                    "start": 56,
                    "end": 65
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 69,
                    "end": 74
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 77,
                    "end": 78
                  },
                  "start": 45,
                  "end": 78
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 90
                      },
                      "typeArguments": null,
                      "start": 89,
                      "end": 90
                    },
                    "start": 86,
                    "end": 90
                  },
                  "start": 83,
                  "end": 90
                }
              ],
              "start": 44,
              "end": 91
            },
            "start": 42,
            "end": 91
          },
          "start": 30,
          "end": 91
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 95
          },
          "typeArguments": null,
          "start": 94,
          "end": 95
        },
        "start": 92,
        "end": 95
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useState2",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 134
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 136
          }
        ],
        "start": 134,
        "end": 137
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 153,
                      "end": 154
                    },
                    "typeArguments": null,
                    "start": 153,
                    "end": 154
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 168,
                          "end": 172
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 174,
                              "end": 177
                            },
                            "start": 174,
                            "end": 179
                          },
                          "start": 172,
                          "end": 179
                        },
                        "value": null,
                        "start": 165,
                        "end": 179
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 184,
                        "end": 187
                      },
                      "start": 181,
                      "end": 187
                    },
                    "start": 164,
                    "end": 187
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 191,
                    "end": 196
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 199,
                      "end": 200
                    },
                    "typeArguments": null,
                    "start": 199,
                    "end": 200
                  },
                  "start": 153,
                  "end": 200
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 212
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 212
                    },
                    "start": 208,
                    "end": 212
                  },
                  "start": 205,
                  "end": 212
                }
              ],
              "start": 152,
              "end": 213
            },
            "start": 150,
            "end": 213
          },
          "start": 138,
          "end": 213
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 217
          },
          "typeArguments": null,
          "start": 216,
          "end": 217
        },
        "start": 214,
        "end": 217
      },
      "body": null,
      "expression": false,
      "start": 108,
      "end": 218
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
            "name": "func1",
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 243
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useState1",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 255
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 268,
                    "end": 269
                  },
                  "id": null,
                  "generator": false,
                  "start": 262,
                  "end": 269
                },
                "id": null,
                "generator": false,
                "start": 256,
                "end": 269
              }
            ],
            "optional": false,
            "start": 246,
            "end": 270
          },
          "definite": false,
          "start": 238,
          "end": 270
        }
      ],
      "declare": false,
      "start": 232,
      "end": 271
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
            "name": "func2",
            "optional": false,
            "typeAnnotation": null,
            "start": 278,
            "end": 283
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useState2",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 295
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 308,
                    "end": 309
                  },
                  "id": null,
                  "generator": false,
                  "start": 302,
                  "end": 309
                },
                "id": null,
                "generator": false,
                "start": 296,
                "end": 309
              }
            ],
            "optional": false,
            "start": 286,
            "end": 310
          },
          "definite": false,
          "start": 278,
          "end": 310
        }
      ],
      "declare": false,
      "start": 272,
      "end": 311
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useState3",
        "optional": false,
        "typeAnnotation": null,
        "start": 330,
        "end": 339
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 340,
            "end": 341
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 344
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 354
              },
              "typeArguments": null,
              "start": 353,
              "end": 354
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 343,
            "end": 354
          }
        ],
        "start": 339,
        "end": 355
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "typeArguments": null,
                    "start": 371,
                    "end": 372
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 388,
                        "end": 391
                      },
                      "start": 385,
                      "end": 391
                    },
                    "start": 382,
                    "end": 391
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 395,
                    "end": 400
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 403,
                      "end": 404
                    },
                    "typeArguments": null,
                    "start": 403,
                    "end": 404
                  },
                  "start": 371,
                  "end": 404
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "typeArguments": null,
                      "start": 415,
                      "end": 416
                    },
                    "start": 412,
                    "end": 416
                  },
                  "start": 409,
                  "end": 416
                }
              ],
              "start": 370,
              "end": 417
            },
            "start": 368,
            "end": 417
          },
          "start": 356,
          "end": 417
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 421
          },
          "typeArguments": null,
          "start": 420,
          "end": 421
        },
        "start": 418,
        "end": 421
      },
      "body": null,
      "expression": false,
      "start": 313,
      "end": 422
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useState4",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 460
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 461,
            "end": 462
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 465
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "S",
                "optional": false,
                "typeAnnotation": null,
                "start": 474,
                "end": 475
              },
              "typeArguments": null,
              "start": 474,
              "end": 475
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 464,
            "end": 475
          }
        ],
        "start": 460,
        "end": 476
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "initialState",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSConditionalType",
                  "checkType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 492,
                      "end": 493
                    },
                    "typeArguments": null,
                    "start": 492,
                    "end": 493
                  },
                  "extendsType": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 507,
                          "end": 511
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 513,
                              "end": 516
                            },
                            "start": 513,
                            "end": 518
                          },
                          "start": 511,
                          "end": 518
                        },
                        "value": null,
                        "start": 504,
                        "end": 518
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 523,
                        "end": 526
                      },
                      "start": 520,
                      "end": 526
                    },
                    "start": 503,
                    "end": 526
                  },
                  "trueType": {
                    "type": "TSNeverKeyword",
                    "start": 530,
                    "end": 535
                  },
                  "falseType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 538,
                      "end": 539
                    },
                    "typeArguments": null,
                    "start": 538,
                    "end": 539
                  },
                  "start": 492,
                  "end": 539
                },
                {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 550,
                        "end": 551
                      },
                      "typeArguments": null,
                      "start": 550,
                      "end": 551
                    },
                    "start": 547,
                    "end": 551
                  },
                  "start": 544,
                  "end": 551
                }
              ],
              "start": 491,
              "end": 552
            },
            "start": 489,
            "end": 552
          },
          "start": 477,
          "end": 552
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "S",
            "optional": false,
            "typeAnnotation": null,
            "start": 555,
            "end": 556
          },
          "typeArguments": null,
          "start": 555,
          "end": 556
        },
        "start": 553,
        "end": 556
      },
      "body": null,
      "expression": false,
      "start": 434,
      "end": 557
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
            "name": "func3",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useState1",
              "optional": false,
              "typeAnnotation": null,
              "start": 585,
              "end": 594
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 607,
                    "end": 608
                  },
                  "id": null,
                  "generator": false,
                  "start": 601,
                  "end": 608
                },
                "id": null,
                "generator": false,
                "start": 595,
                "end": 608
              }
            ],
            "optional": false,
            "start": 585,
            "end": 609
          },
          "definite": false,
          "start": 577,
          "end": 609
        }
      ],
      "declare": false,
      "start": 571,
      "end": 610
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
            "name": "func4",
            "optional": false,
            "typeAnnotation": null,
            "start": 617,
            "end": 622
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useState2",
              "optional": false,
              "typeAnnotation": null,
              "start": 625,
              "end": 634
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 647,
                    "end": 648
                  },
                  "id": null,
                  "generator": false,
                  "start": 641,
                  "end": 648
                },
                "id": null,
                "generator": false,
                "start": 635,
                "end": 648
              }
            ],
            "optional": false,
            "start": 625,
            "end": 649
          },
          "definite": false,
          "start": 617,
          "end": 649
        }
      ],
      "declare": false,
      "start": 611,
      "end": 650
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 650
}
```
