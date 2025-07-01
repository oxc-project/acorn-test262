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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 26,
                    "end": 27
                  },
                  "typeArguments": null,
                  "start": 26,
                  "end": 27
                },
                {
                  "type": "TSStringKeyword",
                  "start": 30,
                  "end": 36
                }
              ],
              "start": 26,
              "end": 36
            },
            "start": 24,
            "end": 36
          },
          "start": 23,
          "end": 36
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
            "start": 39,
            "end": 40
          },
          "typeArguments": null,
          "start": 39,
          "end": 40
        },
        "start": 37,
        "end": 40
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 41
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 51,
                "end": 57
              },
              "start": 49,
              "end": 57
            },
            "start": 47,
            "end": 57
          },
          "init": null,
          "definite": false,
          "start": 47,
          "end": 57
        }
      ],
      "declare": false,
      "start": 43,
      "end": 58
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 67,
                    "end": 73
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 76,
                      "end": 82
                    },
                    "start": 76,
                    "end": 84
                  }
                ],
                "start": 67,
                "end": 84
              },
              "start": 65,
              "end": 84
            },
            "start": 63,
            "end": 84
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 84
        }
      ],
      "declare": false,
      "start": 59,
      "end": 85
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
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 94,
                      "end": 100
                    },
                    "start": 94,
                    "end": 102
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 105,
                    "end": 111
                  }
                ],
                "start": 94,
                "end": 111
              },
              "start": 92,
              "end": 111
            },
            "start": 90,
            "end": 111
          },
          "init": null,
          "definite": false,
          "start": 90,
          "end": 111
        }
      ],
      "declare": false,
      "start": 86,
      "end": 112
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 121,
                    "end": 127
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 132,
                          "end": 136
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 138,
                            "end": 144
                          },
                          "start": 136,
                          "end": 144
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 132,
                        "end": 144
                      }
                    ],
                    "start": 130,
                    "end": 146
                  }
                ],
                "start": 121,
                "end": 146
              },
              "start": 119,
              "end": 146
            },
            "start": 117,
            "end": 146
          },
          "init": null,
          "definite": false,
          "start": 117,
          "end": 146
        }
      ],
      "declare": false,
      "start": 113,
      "end": 147
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 156,
                    "end": 162
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 165,
                    "end": 171
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 174,
                    "end": 181
                  }
                ],
                "start": 156,
                "end": 181
              },
              "start": 154,
              "end": 181
            },
            "start": 152,
            "end": 181
          },
          "init": null,
          "definite": false,
          "start": 152,
          "end": 181
        }
      ],
      "declare": false,
      "start": 148,
      "end": 182
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 183,
          "end": 185
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 186,
            "end": 188
          }
        ],
        "optional": false,
        "start": 183,
        "end": 189
      },
      "directive": null,
      "start": 183,
      "end": 190
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 201,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 206
          }
        ],
        "optional": false,
        "start": 201,
        "end": 207
      },
      "directive": null,
      "start": 201,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 221,
          "end": 223
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 226
          }
        ],
        "optional": false,
        "start": 221,
        "end": 227
      },
      "directive": null,
      "start": 221,
      "end": 228
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 241,
          "end": 243
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 244,
            "end": 246
          }
        ],
        "optional": false,
        "start": 241,
        "end": 247
      },
      "directive": null,
      "start": 241,
      "end": 248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 269,
          "end": 271
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 272,
            "end": 274
          }
        ],
        "optional": false,
        "start": 269,
        "end": 275
      },
      "directive": null,
      "start": 269,
      "end": 276
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 315,
        "end": 317
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 319
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 318,
            "end": 319
          }
        ],
        "start": 317,
        "end": 320
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
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 325
                  },
                  "typeArguments": null,
                  "start": 324,
                  "end": 325
                },
                {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "name",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 330,
                        "end": 334
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 336,
                          "end": 342
                        },
                        "start": 334,
                        "end": 342
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 330,
                      "end": 342
                    }
                  ],
                  "start": 328,
                  "end": 344
                }
              ],
              "start": 324,
              "end": 344
            },
            "start": 322,
            "end": 344
          },
          "start": 321,
          "end": 344
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
            "start": 347,
            "end": 348
          },
          "typeArguments": null,
          "start": 347,
          "end": 348
        },
        "start": 345,
        "end": 348
      },
      "body": null,
      "expression": false,
      "start": 298,
      "end": 349
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 359,
                    "end": 365
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 370,
                          "end": 374
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 376,
                            "end": 382
                          },
                          "start": 374,
                          "end": 382
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 370,
                        "end": 382
                      }
                    ],
                    "start": 368,
                    "end": 384
                  }
                ],
                "start": 359,
                "end": 384
              },
              "start": 357,
              "end": 384
            },
            "start": 355,
            "end": 384
          },
          "init": null,
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 396,
                          "end": 400
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 402,
                            "end": 408
                          },
                          "start": 400,
                          "end": 408
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 396,
                        "end": 408
                      }
                    ],
                    "start": 394,
                    "end": 410
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 413,
                      "end": 419
                    },
                    "start": 413,
                    "end": 421
                  }
                ],
                "start": 394,
                "end": 421
              },
              "start": 392,
              "end": 421
            },
            "start": 390,
            "end": 421
          },
          "init": null,
          "definite": false,
          "start": 390,
          "end": 421
        }
      ],
      "declare": false,
      "start": 386,
      "end": 422
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
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 431,
                    "end": 437
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 442,
                          "end": 446
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 448,
                            "end": 454
                          },
                          "start": 446,
                          "end": 454
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 442,
                        "end": 454
                      }
                    ],
                    "start": 440,
                    "end": 456
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 459,
                    "end": 465
                  }
                ],
                "start": 431,
                "end": 465
              },
              "start": 429,
              "end": 465
            },
            "start": 427,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 427,
          "end": 465
        }
      ],
      "declare": false,
      "start": 423,
      "end": 466
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 475,
                    "end": 481
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 486,
                          "end": 490
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 492,
                            "end": 498
                          },
                          "start": 490,
                          "end": 498
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 486,
                        "end": 498
                      }
                    ],
                    "start": 484,
                    "end": 500
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 503,
                    "end": 509
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 518
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 520,
                            "end": 526
                          },
                          "start": 518,
                          "end": 526
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 514,
                        "end": 526
                      }
                    ],
                    "start": 512,
                    "end": 528
                  }
                ],
                "start": 475,
                "end": 528
              },
              "start": 473,
              "end": 528
            },
            "start": 471,
            "end": 528
          },
          "init": null,
          "definite": false,
          "start": 471,
          "end": 528
        }
      ],
      "declare": false,
      "start": 467,
      "end": 529
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 530,
          "end": 532
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 533,
            "end": 535
          }
        ],
        "optional": false,
        "start": 530,
        "end": 536
      },
      "directive": null,
      "start": 530,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 550
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 551,
            "end": 553
          }
        ],
        "optional": false,
        "start": 548,
        "end": 554
      },
      "directive": null,
      "start": 548,
      "end": 555
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 568,
          "end": 570
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null,
            "start": 571,
            "end": 573
          }
        ],
        "optional": false,
        "start": 568,
        "end": 574
      },
      "directive": null,
      "start": 568,
      "end": 575
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 585,
          "end": 587
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 590
          }
        ],
        "optional": false,
        "start": 585,
        "end": 591
      },
      "directive": null,
      "start": 585,
      "end": 592
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 601
}
```
