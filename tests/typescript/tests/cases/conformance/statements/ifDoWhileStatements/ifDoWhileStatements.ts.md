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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 20
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 29
          }
        ],
        "start": 12,
        "end": 31
      },
      "declare": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 40
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 52,
            "end": 53
          },
          "typeArguments": null,
          "start": 52,
          "end": 53
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
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
            "start": 60,
            "end": 71
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 80
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 82,
                "end": 88
              },
              "start": 80,
              "end": 88
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
            "start": 76,
            "end": 89
          }
        ],
        "start": 54,
        "end": 91
      },
      "abstract": false,
      "declare": false,
      "start": 33,
      "end": 91
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 101
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 110,
        "end": 111
      },
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
              "name": "valid",
              "optional": false,
              "typeAnnotation": null,
              "start": 118,
              "end": 123
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
              },
              "start": 123,
              "end": 132
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
            "start": 118,
            "end": 133
          }
        ],
        "start": 112,
        "end": 135
      },
      "abstract": false,
      "declare": false,
      "start": 93,
      "end": 135
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 143,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 146
          }
        ],
        "start": 144,
        "end": 147
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
              "name": "source",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 159
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 153,
            "end": 163
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "recurse",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 178
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
                        "start": 179,
                        "end": 180
                      },
                      "typeArguments": null,
                      "start": 179,
                      "end": 180
                    }
                  ],
                  "start": 178,
                  "end": 181
                },
                "start": 177,
                "end": 181
              },
              "start": 175,
              "end": 181
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
            "start": 168,
            "end": 182
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "wrapped",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 196,
                  "end": 197
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 198,
                        "end": 199
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
                              "start": 200,
                              "end": 201
                            },
                            "typeArguments": null,
                            "start": 200,
                            "end": 201
                          }
                        ],
                        "start": 199,
                        "end": 202
                      },
                      "start": 198,
                      "end": 202
                    }
                  ],
                  "start": 197,
                  "end": 203
                },
                "start": 196,
                "end": 203
              },
              "start": 194,
              "end": 203
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
            "start": 187,
            "end": 203
          }
        ],
        "start": 147,
        "end": 205
      },
      "abstract": false,
      "declare": false,
      "start": 137,
      "end": 205
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 217
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSStringKeyword",
              "start": 221,
              "end": 227
            },
            "start": 219,
            "end": 227
          },
          "start": 218,
          "end": 227
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 230,
          "end": 236
        },
        "start": 228,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 246,
              "end": 248
            },
            "start": 239,
            "end": 249
          }
        ],
        "start": 237,
        "end": 251
      },
      "expression": false,
      "start": 207,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null,
        "start": 261,
        "end": 263
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 267,
              "end": 273
            },
            "start": 265,
            "end": 273
          },
          "start": 264,
          "end": 273
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 276,
          "end": 283
        },
        "start": 274,
        "end": 283
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 293,
                "end": 294
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 297,
                "end": 299
              },
              "start": 293,
              "end": 299
            },
            "start": 286,
            "end": 300
          }
        ],
        "start": 284,
        "end": 302
      },
      "expression": false,
      "start": 252,
      "end": 302
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 312
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 333
              },
              "typeParameters": null,
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 344,
                      "end": 348
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 350,
                        "end": 356
                      },
                      "start": 348,
                      "end": 356
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
                    "start": 344,
                    "end": 357
                  }
                ],
                "start": 334,
                "end": 363
              },
              "abstract": false,
              "declare": false,
              "start": 326,
              "end": 363
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 319,
            "end": 363
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 387
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 391,
                      "end": 397
                    },
                    "start": 389,
                    "end": 397
                  },
                  "start": 388,
                  "end": 397
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 400,
                  "end": 406
                },
                "start": 398,
                "end": 406
              },
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
                          "start": 416,
                          "end": 417
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 418,
                          "end": 426
                        },
                        "optional": false,
                        "computed": false,
                        "start": 416,
                        "end": 426
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 416,
                      "end": 428
                    },
                    "start": 409,
                    "end": 429
                  }
                ],
                "start": 407,
                "end": 431
              },
              "expression": false,
              "start": 376,
              "end": 431
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 369,
            "end": 431
          }
        ],
        "start": 313,
        "end": 433
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 304,
      "end": 433
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 442,
        "end": 443
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 463,
                "end": 464
              },
              "typeParameters": null,
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 477
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 479,
                        "end": 485
                      },
                      "start": 477,
                      "end": 485
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
                    "start": 475,
                    "end": 486
                  }
                ],
                "start": 465,
                "end": 492
              },
              "abstract": false,
              "declare": false,
              "start": 457,
              "end": 492
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 450,
            "end": 492
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F2",
                "optional": false,
                "typeAnnotation": null,
                "start": 514,
                "end": 516
              },
              "generator": false,
              "async": false,
              "declare": false,
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
                      "start": 520,
                      "end": 526
                    },
                    "start": 518,
                    "end": 526
                  },
                  "start": 517,
                  "end": 526
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 529,
                  "end": 535
                },
                "start": 527,
                "end": 535
              },
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
                          "start": 545,
                          "end": 546
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 547,
                          "end": 555
                        },
                        "optional": false,
                        "computed": false,
                        "start": 545,
                        "end": 555
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 545,
                      "end": 557
                    },
                    "start": 538,
                    "end": 558
                  }
                ],
                "start": 536,
                "end": 560
              },
              "expression": false,
              "start": 505,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 498,
            "end": 560
          }
        ],
        "start": 444,
        "end": 562
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 435,
      "end": 562
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 580,
        "end": 584
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 586,
        "end": 589
      },
      "alternate": null,
      "start": 576,
      "end": 589
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 597,
        "end": 601
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 603,
        "end": 606
      },
      "start": 590,
      "end": 606
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 610,
        "end": 613
      },
      "test": {
        "type": "Literal",
        "value": true,
        "raw": "true",
        "start": 619,
        "end": 623
      },
      "start": 607,
      "end": 624
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 630,
        "end": 634
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 636,
        "end": 639
      },
      "alternate": null,
      "start": 626,
      "end": 639
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 647,
        "end": 651
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 653,
        "end": 656
      },
      "start": 640,
      "end": 656
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 660,
        "end": 663
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "null",
        "start": 669,
        "end": 673
      },
      "start": 657,
      "end": 674
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 680,
        "end": 689
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 691,
        "end": 694
      },
      "alternate": null,
      "start": 676,
      "end": 694
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 702,
        "end": 711
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 713,
        "end": 716
      },
      "start": 695,
      "end": 716
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 720,
        "end": 723
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "undefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 729,
        "end": 738
      },
      "start": 717,
      "end": 739
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 745,
        "end": 748
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 750,
        "end": 753
      },
      "alternate": null,
      "start": 741,
      "end": 753
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 761,
        "end": 764
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 766,
        "end": 769
      },
      "start": 754,
      "end": 769
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 773,
        "end": 776
      },
      "test": {
        "type": "Literal",
        "value": 0,
        "raw": "0.0",
        "start": 782,
        "end": 785
      },
      "start": 770,
      "end": 786
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 792,
        "end": 802
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 804,
        "end": 807
      },
      "alternate": null,
      "start": 788,
      "end": 807
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 815,
        "end": 825
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 827,
        "end": 830
      },
      "start": 808,
      "end": 830
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 834,
        "end": 837
      },
      "test": {
        "type": "Literal",
        "value": "a string",
        "raw": "'a string'",
        "start": 843,
        "end": 853
      },
      "start": 831,
      "end": 854
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 860,
        "end": 862
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 864,
        "end": 867
      },
      "alternate": null,
      "start": 856,
      "end": 867
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 875,
        "end": 877
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 879,
        "end": 882
      },
      "start": 868,
      "end": 882
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 886,
        "end": 889
      },
      "test": {
        "type": "Literal",
        "value": "",
        "raw": "''",
        "start": 895,
        "end": 897
      },
      "start": 883,
      "end": 898
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 904,
        "end": 911
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 913,
        "end": 916
      },
      "alternate": null,
      "start": 900,
      "end": 916
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 924,
        "end": 931
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 933,
        "end": 936
      },
      "start": 917,
      "end": 936
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 940,
        "end": 943
      },
      "test": {
        "type": "Literal",
        "value": null,
        "raw": "/[a-z]/",
        "regex": {
          "pattern": "[a-z]",
          "flags": ""
        },
        "start": 949,
        "end": 956
      },
      "start": 937,
      "end": 957
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 963,
        "end": 965
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 967,
        "end": 970
      },
      "alternate": null,
      "start": 959,
      "end": 970
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 978,
        "end": 980
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 982,
        "end": 985
      },
      "start": 971,
      "end": 985
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 989,
        "end": 992
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [],
        "start": 998,
        "end": 1000
      },
      "start": 986,
      "end": 1001
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1008,
            "end": 1009
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1011,
            "end": 1012
          }
        ],
        "start": 1007,
        "end": 1013
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1015,
        "end": 1018
      },
      "alternate": null,
      "start": 1003,
      "end": 1018
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1027,
            "end": 1028
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1030,
            "end": 1031
          }
        ],
        "start": 1026,
        "end": 1032
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1034,
        "end": 1037
      },
      "start": 1019,
      "end": 1037
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1041,
        "end": 1044
      },
      "test": {
        "type": "ArrayExpression",
        "elements": [
          {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 1051,
            "end": 1052
          },
          {
            "type": "Literal",
            "value": 2,
            "raw": "2",
            "start": 1054,
            "end": 1055
          }
        ],
        "start": 1050,
        "end": 1056
      },
      "start": 1038,
      "end": 1057
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1063,
        "end": 1065
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1067,
        "end": 1070
      },
      "alternate": null,
      "start": 1059,
      "end": 1070
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1078,
        "end": 1080
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1082,
        "end": 1085
      },
      "start": 1071,
      "end": 1085
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1089,
        "end": 1092
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [],
        "start": 1098,
        "end": 1100
      },
      "start": 1086,
      "end": 1101
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1109,
              "end": 1110
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1112,
              "end": 1113
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1109,
            "end": 1113
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1115,
              "end": 1116
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1118,
              "end": 1121
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1115,
            "end": 1121
          }
        ],
        "start": 1107,
        "end": 1123
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1125,
        "end": 1128
      },
      "alternate": null,
      "start": 1103,
      "end": 1128
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1138,
              "end": 1139
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1141,
              "end": 1142
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1138,
            "end": 1142
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1145
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1147,
              "end": 1150
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1144,
            "end": 1150
          }
        ],
        "start": 1136,
        "end": 1152
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1154,
        "end": 1157
      },
      "start": 1129,
      "end": 1157
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1161,
        "end": 1164
      },
      "test": {
        "type": "ObjectExpression",
        "properties": [
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1172,
              "end": 1173
            },
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1175,
              "end": 1176
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1172,
            "end": 1176
          },
          {
            "type": "Property",
            "kind": "init",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1178,
              "end": 1179
            },
            "value": {
              "type": "Literal",
              "value": "a",
              "raw": "'a'",
              "start": 1181,
              "end": 1184
            },
            "method": false,
            "shorthand": false,
            "computed": false,
            "optional": false,
            "start": 1178,
            "end": 1184
          }
        ],
        "start": 1170,
        "end": 1186
      },
      "start": 1158,
      "end": 1187
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1199,
          "end": 1201
        },
        "id": null,
        "generator": false,
        "start": 1193,
        "end": 1201
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1203,
        "end": 1206
      },
      "alternate": null,
      "start": 1189,
      "end": 1206
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1220,
          "end": 1222
        },
        "id": null,
        "generator": false,
        "start": 1214,
        "end": 1222
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1224,
        "end": 1227
      },
      "start": 1207,
      "end": 1227
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1231,
        "end": 1234
      },
      "test": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "Literal",
          "value": 43,
          "raw": "43",
          "start": 1246,
          "end": 1248
        },
        "id": null,
        "generator": false,
        "start": 1240,
        "end": 1248
      },
      "start": 1228,
      "end": 1249
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1259,
          "end": 1260
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1255,
        "end": 1262
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1264,
        "end": 1267
      },
      "alternate": null,
      "start": 1251,
      "end": 1267
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1279,
          "end": 1280
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1275,
        "end": 1282
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1284,
        "end": 1287
      },
      "start": 1268,
      "end": 1287
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1291,
        "end": 1294
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 1304,
          "end": 1305
        },
        "typeArguments": null,
        "arguments": [],
        "start": 1300,
        "end": 1307
      },
      "start": 1288,
      "end": 1308
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1318,
          "end": 1319
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1320,
                "end": 1321
              },
              "typeArguments": null,
              "start": 1320,
              "end": 1321
            }
          ],
          "start": 1319,
          "end": 1322
        },
        "arguments": [],
        "start": 1314,
        "end": 1324
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1326,
        "end": 1329
      },
      "alternate": null,
      "start": 1310,
      "end": 1329
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1341,
          "end": 1342
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1343,
                "end": 1344
              },
              "typeArguments": null,
              "start": 1343,
              "end": 1344
            }
          ],
          "start": 1342,
          "end": 1345
        },
        "arguments": [],
        "start": 1337,
        "end": 1347
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1349,
        "end": 1352
      },
      "start": 1330,
      "end": 1352
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1356,
        "end": 1359
      },
      "test": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "D",
          "optional": false,
          "typeAnnotation": null,
          "start": 1369,
          "end": 1370
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 1371,
                "end": 1372
              },
              "typeArguments": null,
              "start": 1371,
              "end": 1372
            }
          ],
          "start": 1370,
          "end": 1373
        },
        "arguments": [],
        "start": 1365,
        "end": 1375
      },
      "start": 1353,
      "end": 1376
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1396,
            "end": 1397
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 1400,
            "end": 1404
          },
          "definite": false,
          "start": 1396,
          "end": 1404
        }
      ],
      "declare": false,
      "start": 1392,
      "end": 1405
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1410,
        "end": 1411
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1413,
        "end": 1416
      },
      "alternate": null,
      "start": 1406,
      "end": 1416
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1425
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1427,
        "end": 1430
      },
      "start": 1417,
      "end": 1430
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1434,
        "end": 1437
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 1443,
        "end": 1444
      },
      "start": 1431,
      "end": 1445
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 1451,
            "end": 1452
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "null",
            "start": 1455,
            "end": 1459
          },
          "definite": false,
          "start": 1451,
          "end": 1459
        }
      ],
      "declare": false,
      "start": 1447,
      "end": 1460
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1465,
        "end": 1466
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1468,
        "end": 1471
      },
      "alternate": null,
      "start": 1461,
      "end": 1471
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1479,
        "end": 1480
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1482,
        "end": 1485
      },
      "start": 1472,
      "end": 1485
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1489,
        "end": 1492
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 1498,
        "end": 1499
      },
      "start": 1486,
      "end": 1500
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1506,
            "end": 1507
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null,
            "start": 1510,
            "end": 1519
          },
          "definite": false,
          "start": 1506,
          "end": 1519
        }
      ],
      "declare": false,
      "start": 1502,
      "end": 1520
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1525,
        "end": 1526
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1528,
        "end": 1531
      },
      "alternate": null,
      "start": 1521,
      "end": 1531
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1539,
        "end": 1540
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1542,
        "end": 1545
      },
      "start": 1532,
      "end": 1545
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1549,
        "end": 1552
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 1558,
        "end": 1559
      },
      "start": 1546,
      "end": 1560
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1566,
            "end": 1567
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0.0",
            "start": 1570,
            "end": 1573
          },
          "definite": false,
          "start": 1566,
          "end": 1573
        }
      ],
      "declare": false,
      "start": 1562,
      "end": 1574
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1579,
        "end": 1580
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1582,
        "end": 1585
      },
      "alternate": null,
      "start": 1575,
      "end": 1585
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1593,
        "end": 1594
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1596,
        "end": 1599
      },
      "start": 1586,
      "end": 1599
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1603,
        "end": 1606
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "d",
        "optional": false,
        "typeAnnotation": null,
        "start": 1612,
        "end": 1613
      },
      "start": 1600,
      "end": 1614
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 1620,
            "end": 1621
          },
          "init": {
            "type": "Literal",
            "value": "a string",
            "raw": "'a string'",
            "start": 1624,
            "end": 1634
          },
          "definite": false,
          "start": 1620,
          "end": 1634
        }
      ],
      "declare": false,
      "start": 1616,
      "end": 1635
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1640,
        "end": 1641
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1643,
        "end": 1646
      },
      "alternate": null,
      "start": 1636,
      "end": 1646
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1654,
        "end": 1655
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1657,
        "end": 1660
      },
      "start": 1647,
      "end": 1660
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1664,
        "end": 1667
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "e",
        "optional": false,
        "typeAnnotation": null,
        "start": 1673,
        "end": 1674
      },
      "start": 1661,
      "end": 1675
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
            "start": 1681,
            "end": 1682
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "''",
            "start": 1685,
            "end": 1687
          },
          "definite": false,
          "start": 1681,
          "end": 1687
        }
      ],
      "declare": false,
      "start": 1677,
      "end": 1688
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1693,
        "end": 1694
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1696,
        "end": 1699
      },
      "alternate": null,
      "start": 1689,
      "end": 1699
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1707,
        "end": 1708
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1710,
        "end": 1713
      },
      "start": 1700,
      "end": 1713
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1717,
        "end": 1720
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1726,
        "end": 1727
      },
      "start": 1714,
      "end": 1728
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
            "name": "g",
            "optional": false,
            "typeAnnotation": null,
            "start": 1734,
            "end": 1735
          },
          "init": {
            "type": "Literal",
            "value": null,
            "raw": "/[a-z]/",
            "regex": {
              "pattern": "[a-z]",
              "flags": ""
            },
            "start": 1738,
            "end": 1745
          },
          "definite": false,
          "start": 1734,
          "end": 1745
        }
      ],
      "declare": false,
      "start": 1730,
      "end": 1745
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1750,
        "end": 1751
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1753,
        "end": 1756
      },
      "alternate": null,
      "start": 1746,
      "end": 1756
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1764,
        "end": 1765
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1767,
        "end": 1770
      },
      "start": 1757,
      "end": 1770
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1774,
        "end": 1777
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1783,
        "end": 1784
      },
      "start": 1771,
      "end": 1785
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
            "name": "h",
            "optional": false,
            "typeAnnotation": null,
            "start": 1791,
            "end": 1792
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 1795,
            "end": 1797
          },
          "definite": false,
          "start": 1791,
          "end": 1797
        }
      ],
      "declare": false,
      "start": 1787,
      "end": 1798
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1803,
        "end": 1804
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1806,
        "end": 1809
      },
      "alternate": null,
      "start": 1799,
      "end": 1809
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1817,
        "end": 1818
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1820,
        "end": 1823
      },
      "start": 1810,
      "end": 1823
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1827,
        "end": 1830
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null,
        "start": 1836,
        "end": 1837
      },
      "start": 1824,
      "end": 1838
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
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1844,
            "end": 1845
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1849,
                "end": 1850
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 1852,
                "end": 1853
              }
            ],
            "start": 1848,
            "end": 1854
          },
          "definite": false,
          "start": 1844,
          "end": 1854
        }
      ],
      "declare": false,
      "start": 1840,
      "end": 1855
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1860,
        "end": 1861
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1863,
        "end": 1866
      },
      "alternate": null,
      "start": 1856,
      "end": 1866
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1874,
        "end": 1875
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1877,
        "end": 1880
      },
      "start": 1867,
      "end": 1880
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1884,
        "end": 1887
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "i",
        "optional": false,
        "typeAnnotation": null,
        "start": 1893,
        "end": 1894
      },
      "start": 1881,
      "end": 1895
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 1901,
            "end": 1902
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 1905,
            "end": 1907
          },
          "definite": false,
          "start": 1901,
          "end": 1907
        }
      ],
      "declare": false,
      "start": 1897,
      "end": 1908
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1913,
        "end": 1914
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1916,
        "end": 1919
      },
      "alternate": null,
      "start": 1909,
      "end": 1919
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1927,
        "end": 1928
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1930,
        "end": 1933
      },
      "start": 1920,
      "end": 1933
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1937,
        "end": 1940
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "j",
        "optional": false,
        "typeAnnotation": null,
        "start": 1946,
        "end": 1947
      },
      "start": 1934,
      "end": 1948
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
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 1954,
            "end": 1955
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1960,
                  "end": 1961
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1963,
                  "end": 1964
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1960,
                "end": 1964
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1966,
                  "end": 1967
                },
                "value": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 1969,
                  "end": 1972
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1966,
                "end": 1972
              }
            ],
            "start": 1958,
            "end": 1974
          },
          "definite": false,
          "start": 1954,
          "end": 1974
        }
      ],
      "declare": false,
      "start": 1950,
      "end": 1975
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 1980,
        "end": 1981
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 1983,
        "end": 1986
      },
      "alternate": null,
      "start": 1976,
      "end": 1986
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 1994,
        "end": 1995
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1997,
        "end": 2000
      },
      "start": 1987,
      "end": 2000
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2004,
        "end": 2007
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "k",
        "optional": false,
        "typeAnnotation": null,
        "start": 2013,
        "end": 2014
      },
      "start": 2001,
      "end": 2015
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2026,
        "end": 2028
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2033,
              "end": 2039
            },
            "start": 2031,
            "end": 2039
          },
          "start": 2029,
          "end": 2039
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "I",
            "optional": false,
            "typeAnnotation": null,
            "start": 2042,
            "end": 2043
          },
          "typeArguments": null,
          "start": 2042,
          "end": 2043
        },
        "start": 2040,
        "end": 2043
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 2053,
              "end": 2057
            },
            "start": 2046,
            "end": 2058
          }
        ],
        "start": 2044,
        "end": 2060
      },
      "expression": false,
      "start": 2017,
      "end": 2060
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2065,
          "end": 2067
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2065,
        "end": 2069
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2071,
        "end": 2074
      },
      "alternate": null,
      "start": 2061,
      "end": 2074
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2082,
          "end": 2084
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2082,
        "end": 2086
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2088,
        "end": 2091
      },
      "start": 2075,
      "end": 2091
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2095,
        "end": 2098
      },
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": null,
          "start": 2104,
          "end": 2106
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 2104,
        "end": 2108
      },
      "start": 2092,
      "end": 2109
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2115,
        "end": 2117
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [],
        "start": 2119,
        "end": 2122
      },
      "alternate": null,
      "start": 2111,
      "end": 2122
    },
    {
      "type": "WhileStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2130,
        "end": 2132
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2134,
        "end": 2137
      },
      "start": 2123,
      "end": 2137
    },
    {
      "type": "DoWhileStatement",
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 2141,
        "end": 2144
      },
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 2150,
        "end": 2152
      },
      "start": 2138,
      "end": 2153
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2155
}
```
