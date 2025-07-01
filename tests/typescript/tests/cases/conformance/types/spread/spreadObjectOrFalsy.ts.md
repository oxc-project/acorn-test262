__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          }
        ],
        "start": 11,
        "end": 14
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "start": 18,
                    "end": 19
                  },
                  "typeArguments": null,
                  "start": 18,
                  "end": 19
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 22,
                  "end": 31
                }
              ],
              "start": 18,
              "end": 31
            },
            "start": 16,
            "end": 31
          },
          "start": 15,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 51,
                    "end": 52
                  },
                  "start": 48,
                  "end": 52
                }
              ],
              "start": 46,
              "end": 54
            },
            "start": 39,
            "end": 55
          }
        ],
        "start": 33,
        "end": 67
      },
      "expression": false,
      "start": 0,
      "end": 67
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 78,
        "end": 80
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 82
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 81,
            "end": 82
          }
        ],
        "start": 80,
        "end": 83
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "start": 87,
                    "end": 88
                  },
                  "typeArguments": null,
                  "start": 87,
                  "end": 88
                },
                {
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
                        "start": 91,
                        "end": 92
                      },
                      "typeArguments": null,
                      "start": 91,
                      "end": 92
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 95,
                      "end": 104
                    }
                  ],
                  "start": 91,
                  "end": 104
                }
              ],
              "start": 87,
              "end": 104
            },
            "start": 85,
            "end": 104
          },
          "start": 84,
          "end": 104
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 124,
                    "end": 125
                  },
                  "start": 121,
                  "end": 125
                }
              ],
              "start": 119,
              "end": 127
            },
            "start": 112,
            "end": 128
          }
        ],
        "start": 106,
        "end": 130
      },
      "expression": false,
      "start": 69,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 145
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 154,
              "end": 163
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 144,
            "end": 163
          }
        ],
        "start": 143,
        "end": 164
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 168,
                "end": 169
              },
              "typeArguments": null,
              "start": 168,
              "end": 169
            },
            "start": 166,
            "end": 169
          },
          "start": 165,
          "end": 169
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 189,
                    "end": 190
                  },
                  "start": 186,
                  "end": 190
                }
              ],
              "start": 184,
              "end": 192
            },
            "start": 177,
            "end": 193
          }
        ],
        "start": 171,
        "end": 205
      },
      "expression": false,
      "start": 132,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 218
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 219,
              "end": 220
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 229,
              "end": 238
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 219,
            "end": 238
          }
        ],
        "start": 218,
        "end": 239
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 243,
                  "end": 249
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 252,
                    "end": 253
                  },
                  "typeArguments": null,
                  "start": 252,
                  "end": 253
                }
              ],
              "start": 243,
              "end": 253
            },
            "start": 241,
            "end": 253
          },
          "start": 240,
          "end": 253
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 273,
                    "end": 274
                  },
                  "start": 270,
                  "end": 274
                }
              ],
              "start": 268,
              "end": 276
            },
            "start": 261,
            "end": 277
          }
        ],
        "start": 255,
        "end": 279
      },
      "expression": false,
      "start": 207,
      "end": 279
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 290,
        "end": 292
      },
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
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 294
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 293,
            "end": 294
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 296,
              "end": 297
            },
            "constraint": {
              "type": "TSUndefinedKeyword",
              "start": 306,
              "end": 315
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 296,
            "end": 315
          }
        ],
        "start": 292,
        "end": 316
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                    "name": "S",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 320,
                    "end": 321
                  },
                  "typeArguments": null,
                  "start": 320,
                  "end": 321
                },
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
                }
              ],
              "start": 320,
              "end": 325
            },
            "start": 318,
            "end": 325
          },
          "start": 317,
          "end": 325
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 345,
                    "end": 346
                  },
                  "start": 342,
                  "end": 346
                }
              ],
              "start": 340,
              "end": 348
            },
            "start": 333,
            "end": 349
          }
        ],
        "start": 327,
        "end": 351
      },
      "expression": false,
      "start": 281,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null,
        "start": 362,
        "end": 364
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 366
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSObjectKeyword",
                  "start": 375,
                  "end": 381
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 384,
                  "end": 393
                }
              ],
              "start": 375,
              "end": 393
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 365,
            "end": 393
          }
        ],
        "start": 364,
        "end": 394
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
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
                "start": 398,
                "end": 399
              },
              "typeArguments": null,
              "start": 398,
              "end": 399
            },
            "start": 396,
            "end": 399
          },
          "start": 395,
          "end": 399
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 420
                  },
                  "start": 416,
                  "end": 420
                }
              ],
              "start": 414,
              "end": 422
            },
            "start": 407,
            "end": 423
          }
        ],
        "start": 401,
        "end": 425
      },
      "expression": false,
      "start": 353,
      "end": 425
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 460
      },
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
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 462
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [],
              "start": 471,
              "end": 473
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 461,
            "end": 473
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 476
            },
            "constraint": {
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 488
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSIntersectionType",
                      "types": [
                        {
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
                                "start": 491,
                                "end": 492
                              },
                              "typeArguments": null,
                              "start": 491,
                              "end": 492
                            },
                            {
                              "type": "TSUndefinedKeyword",
                              "start": 495,
                              "end": 504
                            }
                          ],
                          "start": 491,
                          "end": 504
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 508,
                            "end": 509
                          },
                          "typeArguments": null,
                          "start": 508,
                          "end": 509
                        }
                      ],
                      "start": 490,
                      "end": 509
                    },
                    "start": 488,
                    "end": 509
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 487,
                  "end": 509
                }
              ],
              "start": 485,
              "end": 511
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 475,
            "end": 511
          }
        ],
        "start": 460,
        "end": 512
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 516,
                "end": 517
              },
              "typeArguments": null,
              "start": 516,
              "end": 517
            },
            "start": 514,
            "end": 517
          },
          "start": 513,
          "end": 517
        }
      ],
      "returnType": null,
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 534
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 533,
                        "end": 534
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 533,
                      "end": 534
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 536
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 540
                },
                "definite": false,
                "start": 531,
                "end": 540
              }
            ],
            "declare": false,
            "start": 525,
            "end": 541
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 566,
                    "end": 567
                  },
                  "start": 563,
                  "end": 567
                }
              ],
              "start": 553,
              "end": 573
            },
            "start": 546,
            "end": 574
          }
        ],
        "start": 519,
        "end": 576
      },
      "expression": false,
      "start": 449,
      "end": 576
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "DatafulFoo",
        "optional": false,
        "typeAnnotation": null,
        "start": 610,
        "end": 620
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
              "start": 621,
              "end": 622
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 621,
            "end": 622
          }
        ],
        "start": 620,
        "end": 623
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
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 634
            },
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
                  "start": 636,
                  "end": 637
                },
                "typeArguments": null,
                "start": 636,
                "end": 637
              },
              "start": 634,
              "end": 637
            },
            "accessibility": null,
            "static": false,
            "start": 630,
            "end": 638
          }
        ],
        "start": 624,
        "end": 640
      },
      "declare": false,
      "start": 600,
      "end": 640
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 648,
        "end": 651
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
              "start": 652,
              "end": 653
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 662,
              "end": 668
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 652,
            "end": 668
          }
        ],
        "start": 651,
        "end": 669
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "data",
              "optional": false,
              "typeAnnotation": null,
              "start": 676,
              "end": 680
            },
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
                      "start": 682,
                      "end": 683
                    },
                    "typeArguments": null,
                    "start": 682,
                    "end": 683
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 686,
                    "end": 695
                  }
                ],
                "start": 682,
                "end": 695
              },
              "start": 680,
              "end": 695
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 676,
            "end": 696
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 701,
              "end": 704
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 721,
                          "end": 725
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "hasData",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 726,
                          "end": 733
                        },
                        "optional": false,
                        "computed": false,
                        "start": 721,
                        "end": 733
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 721,
                      "end": 735
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 751,
                                  "end": 755
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "data",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 756,
                                  "end": 760
                                },
                                "optional": false,
                                "computed": false,
                                "start": 751,
                                "end": 760
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toLocaleLowerCase",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 761,
                                "end": 778
                              },
                              "optional": false,
                              "computed": false,
                              "start": 751,
                              "end": 778
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 751,
                            "end": 780
                          },
                          "directive": null,
                          "start": 751,
                          "end": 781
                        }
                      ],
                      "start": 737,
                      "end": 791
                    },
                    "alternate": null,
                    "start": 717,
                    "end": 791
                  }
                ],
                "start": 707,
                "end": 797
              },
              "expression": false,
              "start": 704,
              "end": 797
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 701,
            "end": 797
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasData",
              "optional": false,
              "typeAnnotation": null,
              "start": 802,
              "end": 809
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "TSThisType",
                    "start": 813,
                    "end": 817
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "DatafulFoo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 821,
                        "end": 831
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
                              "start": 832,
                              "end": 833
                            },
                            "typeArguments": null,
                            "start": 832,
                            "end": 833
                          }
                        ],
                        "start": 831,
                        "end": 834
                      },
                      "start": 821,
                      "end": 834
                    },
                    "start": 821,
                    "end": 834
                  },
                  "start": 813,
                  "end": 834
                },
                "start": 811,
                "end": 834
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 852,
                      "end": 856
                    },
                    "start": 845,
                    "end": 857
                  }
                ],
                "start": 835,
                "end": 863
              },
              "expression": false,
              "start": 809,
              "end": 863
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 802,
            "end": 863
          }
        ],
        "start": 670,
        "end": 865
      },
      "abstract": false,
      "declare": false,
      "start": 642,
      "end": 865
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 865
}
```
