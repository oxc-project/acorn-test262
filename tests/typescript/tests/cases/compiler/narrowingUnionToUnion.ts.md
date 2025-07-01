__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Falsy",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 10
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 13,
              "end": 18
            },
            "start": 13,
            "end": 18
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 21,
              "end": 22
            },
            "start": 21,
            "end": 22
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": null,
              "raw": "0n",
              "bigint": "0",
              "start": 25,
              "end": 27
            },
            "start": 25,
            "end": 27
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 30,
              "end": 32
            },
            "start": 30,
            "end": 32
          },
          {
            "type": "TSNullKeyword",
            "start": 35,
            "end": 39
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 42,
            "end": 51
          }
        ],
        "start": 13,
        "end": 51
      },
      "declare": false,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isFalsy",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnknownKeyword",
              "start": 86,
              "end": 93
            },
            "start": 84,
            "end": 93
          },
          "start": 79,
          "end": 93
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 101
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Falsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 110
              },
              "typeArguments": null,
              "start": 105,
              "end": 110
            },
            "start": 105,
            "end": 110
          },
          "start": 96,
          "end": 110
        },
        "start": 94,
        "end": 110
      },
      "body": null,
      "expression": false,
      "start": 54,
      "end": 111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 125
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 129,
                  "end": 135
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 138,
                  "end": 144
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 147,
                  "end": 156
                }
              ],
              "start": 129,
              "end": 156
            },
            "start": 127,
            "end": 156
          },
          "start": 126,
          "end": 156
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 168,
                "end": 175
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 176,
                  "end": 177
                }
              ],
              "optional": false,
              "start": 168,
              "end": 178
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 191
                  },
                  "directive": null,
                  "start": 190,
                  "end": 192
                }
              ],
              "start": 180,
              "end": 221
            },
            "alternate": null,
            "start": 164,
            "end": 221
          }
        ],
        "start": 158,
        "end": 223
      },
      "expression": false,
      "start": 113,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 237
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
              "start": 238,
              "end": 239
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 238,
            "end": 239
          }
        ],
        "start": 237,
        "end": 240
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
                    "start": 244,
                    "end": 245
                  },
                  "typeArguments": null,
                  "start": 244,
                  "end": 245
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 248,
                  "end": 257
                }
              ],
              "start": 244,
              "end": 257
            },
            "start": 242,
            "end": 257
          },
          "start": 241,
          "end": 257
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 269,
                "end": 276
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 277,
                  "end": 278
                }
              ],
              "optional": false,
              "start": 269,
              "end": 279
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "directive": null,
                  "start": 291,
                  "end": 293
                }
              ],
              "start": 281,
              "end": 325
            },
            "alternate": null,
            "start": 265,
            "end": 325
          }
        ],
        "start": 259,
        "end": 327
      },
      "expression": false,
      "start": 225,
      "end": 327
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 341
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
              "start": 342,
              "end": 343
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 352,
                  "end": 358
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 361,
                  "end": 367
                }
              ],
              "start": 352,
              "end": 367
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 342,
            "end": 367
          }
        ],
        "start": 341,
        "end": 368
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
                "start": 372,
                "end": 373
              },
              "typeArguments": null,
              "start": 372,
              "end": 373
            },
            "start": 370,
            "end": 373
          },
          "start": 369,
          "end": 373
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isFalsy",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 392
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 394
                }
              ],
              "optional": false,
              "start": 385,
              "end": 395
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 408
                  },
                  "directive": null,
                  "start": 407,
                  "end": 409
                }
              ],
              "start": 397,
              "end": 434
            },
            "alternate": null,
            "start": 381,
            "end": 434
          }
        ],
        "start": 375,
        "end": 436
      },
      "expression": false,
      "start": 329,
      "end": 436
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isA",
        "optional": false,
        "typeAnnotation": null,
        "start": 455,
        "end": 458
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 464,
              "end": 471
            },
            "start": 462,
            "end": 471
          },
          "start": 459,
          "end": 471
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 474,
            "end": 477
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 483,
                        "end": 484
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 486,
                            "end": 491
                          },
                          "start": 486,
                          "end": 491
                        },
                        "start": 484,
                        "end": 491
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 483,
                      "end": 491
                    }
                  ],
                  "start": 481,
                  "end": 493
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 498,
                        "end": 499
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 501,
                            "end": 502
                          },
                          "start": 501,
                          "end": 502
                        },
                        "start": 499,
                        "end": 502
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 498,
                      "end": 502
                    }
                  ],
                  "start": 496,
                  "end": 504
                }
              ],
              "start": 481,
              "end": 504
            },
            "start": 481,
            "end": 504
          },
          "start": 474,
          "end": 504
        },
        "start": 472,
        "end": 504
      },
      "body": null,
      "expression": false,
      "start": 438,
      "end": 505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx4",
        "optional": false,
        "typeAnnotation": null,
        "start": 516,
        "end": 519
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
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
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 527,
                    "end": 528
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 530,
                      "end": 536
                    },
                    "start": 528,
                    "end": 536
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 527,
                  "end": 536
                }
              ],
              "start": 525,
              "end": 538
            },
            "start": 523,
            "end": 538
          },
          "start": 520,
          "end": 538
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 550,
                "end": 553
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 557
                }
              ],
              "optional": false,
              "start": 550,
              "end": 558
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 573
                  },
                  "directive": null,
                  "start": 570,
                  "end": 574
                }
              ],
              "start": 560,
              "end": 593
            },
            "alternate": null,
            "start": 546,
            "end": 593
          }
        ],
        "start": 540,
        "end": 595
      },
      "expression": false,
      "start": 507,
      "end": 595
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 611,
        "end": 612
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 615,
              "end": 616
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 618,
                "end": 624
              },
              "start": 616,
              "end": 624
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
            "start": 615,
            "end": 624
          }
        ],
        "start": 613,
        "end": 626
      },
      "abstract": false,
      "declare": true,
      "start": 597,
      "end": 626
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XS",
        "optional": false,
        "typeAnnotation": null,
        "start": 641,
        "end": 643
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 652,
        "end": 653
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
              "name": "xs",
              "optional": false,
              "typeAnnotation": null,
              "start": 656,
              "end": 658
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
              },
              "start": 658,
              "end": 666
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
            "start": 656,
            "end": 666
          }
        ],
        "start": 654,
        "end": 668
      },
      "abstract": false,
      "declare": true,
      "start": 627,
      "end": 668
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 684,
        "end": 685
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 688,
              "end": 689
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 691,
                "end": 697
              },
              "start": 689,
              "end": 697
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
            "start": 688,
            "end": 697
          }
        ],
        "start": 686,
        "end": 699
      },
      "abstract": false,
      "declare": true,
      "start": 670,
      "end": 699
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "YS",
        "optional": false,
        "typeAnnotation": null,
        "start": 714,
        "end": 716
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null,
        "start": 725,
        "end": 726
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
              "name": "ys",
              "optional": false,
              "typeAnnotation": null,
              "start": 729,
              "end": 731
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 733,
                "end": 739
              },
              "start": 731,
              "end": 739
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
            "start": 729,
            "end": 739
          }
        ],
        "start": 727,
        "end": 741
      },
      "abstract": false,
      "declare": true,
      "start": 700,
      "end": 741
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isXSorY",
        "optional": false,
        "typeAnnotation": null,
        "start": 760,
        "end": 767
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 773,
              "end": 780
            },
            "start": 771,
            "end": 780
          },
          "start": 768,
          "end": 780
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 783,
            "end": 786
          },
          "asserts": false,
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
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 790,
                    "end": 792
                  },
                  "typeArguments": null,
                  "start": 790,
                  "end": 792
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 795,
                    "end": 796
                  },
                  "typeArguments": null,
                  "start": 795,
                  "end": 796
                }
              ],
              "start": 790,
              "end": 796
            },
            "start": 790,
            "end": 796
          },
          "start": 783,
          "end": 796
        },
        "start": 781,
        "end": 796
      },
      "body": null,
      "expression": false,
      "start": 743,
      "end": 797
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx5",
        "optional": false,
        "typeAnnotation": null,
        "start": 808,
        "end": 811
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
              "start": 812,
              "end": 813
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 822,
                "end": 823
              },
              "typeArguments": null,
              "start": 822,
              "end": 823
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 812,
            "end": 823
          }
        ],
        "start": 811,
        "end": 824
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
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
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 830,
                    "end": 831
                  },
                  "typeArguments": null,
                  "start": 830,
                  "end": 831
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "YS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 834,
                    "end": 836
                  },
                  "typeArguments": null,
                  "start": 834,
                  "end": 836
                }
              ],
              "start": 830,
              "end": 836
            },
            "start": 828,
            "end": 836
          },
          "start": 825,
          "end": 836
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "XS",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 848,
                    "end": 850
                  },
                  "typeArguments": null,
                  "start": 841,
                  "end": 850
                },
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 860,
                    "end": 861
                  },
                  "typeArguments": null,
                  "start": 853,
                  "end": 861
                }
              ],
              "start": 841,
              "end": 861
            },
            "start": 839,
            "end": 861
          },
          "start": 838,
          "end": 861
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 873,
                "end": 876
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 888,
                "end": 889
              },
              "start": 873,
              "end": 889
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 901,
                    "end": 904
                  },
                  "directive": null,
                  "start": 901,
                  "end": 905
                }
              ],
              "start": 891,
              "end": 923
            },
            "alternate": null,
            "start": 869,
            "end": 923
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isXSorY",
                "optional": false,
                "typeAnnotation": null,
                "start": 932,
                "end": 939
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 940,
                  "end": 943
                }
              ],
              "optional": false,
              "start": 932,
              "end": 944
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 956,
                    "end": 959
                  },
                  "directive": null,
                  "start": 956,
                  "end": 960
                }
              ],
              "start": 946,
              "end": 978
            },
            "alternate": null,
            "start": 928,
            "end": 978
          }
        ],
        "start": 863,
        "end": 980
      },
      "expression": false,
      "start": 799,
      "end": 980
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyStrOrUndefined",
        "optional": false,
        "typeAnnotation": null,
        "start": 1021,
        "end": 1042
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "mixed",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1050,
              "end": 1053
            },
            "start": 1048,
            "end": 1053
          },
          "start": 1043,
          "end": 1053
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "mixed",
            "optional": false,
            "typeAnnotation": null,
            "start": 1056,
            "end": 1061
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 1065,
                    "end": 1067
                  },
                  "start": 1065,
                  "end": 1067
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1070,
                  "end": 1079
                }
              ],
              "start": 1065,
              "end": 1079
            },
            "start": 1065,
            "end": 1079
          },
          "start": 1056,
          "end": 1079
        },
        "start": 1054,
        "end": 1079
      },
      "body": null,
      "expression": false,
      "start": 1004,
      "end": 1080
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fx10",
        "optional": false,
        "typeAnnotation": null,
        "start": 1091,
        "end": 1095
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1099,
                  "end": 1105
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1108,
                  "end": 1117
                }
              ],
              "start": 1099,
              "end": 1117
            },
            "start": 1097,
            "end": 1117
          },
          "start": 1096,
          "end": 1117
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "isEmptyStrOrUndefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 1129,
                "end": 1150
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1151,
                  "end": 1152
                }
              ],
              "optional": false,
              "start": 1129,
              "end": 1153
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1165,
                    "end": 1166
                  },
                  "directive": null,
                  "start": 1165,
                  "end": 1167
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1199,
                      "end": 1200
                    },
                    "operator": "==",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1204,
                      "end": 1213
                    },
                    "start": 1199,
                    "end": 1213
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1229,
                          "end": 1230
                        },
                        "directive": null,
                        "start": 1229,
                        "end": 1231
                      }
                    ],
                    "start": 1215,
                    "end": 1255
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "s",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1283,
                          "end": 1284
                        },
                        "directive": null,
                        "start": 1283,
                        "end": 1285
                      }
                    ],
                    "start": 1269,
                    "end": 1302
                  },
                  "start": 1195,
                  "end": 1302
                }
              ],
              "start": 1155,
              "end": 1308
            },
            "alternate": null,
            "start": 1125,
            "end": 1308
          }
        ],
        "start": 1119,
        "end": 1310
      },
      "expression": false,
      "start": 1082,
      "end": 1310
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1343,
        "end": 1345
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
              "type": "TSAnyKeyword",
              "start": 1349,
              "end": 1352
            },
            "start": 1347,
            "end": 1352
          },
          "start": 1346,
          "end": 1352
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1363,
            "end": 1364
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1368,
                  "end": 1374
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1377,
                  "end": 1386
                }
              ],
              "start": 1368,
              "end": 1386
            },
            "start": 1368,
            "end": 1386
          },
          "start": 1355,
          "end": 1386
        },
        "start": 1353,
        "end": 1386
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1387,
        "end": 1390
      },
      "expression": false,
      "start": 1334,
      "end": 1390
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1399,
                    "end": 1405
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1408,
                    "end": 1414
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1417,
                    "end": 1426
                  }
                ],
                "start": 1399,
                "end": 1426
              },
              "start": 1397,
              "end": 1426
            },
            "start": 1395,
            "end": 1426
          },
          "init": null,
          "definite": false,
          "start": 1395,
          "end": 1426
        }
      ],
      "declare": false,
      "start": 1391,
      "end": 1427
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
          "start": 1428,
          "end": 1430
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1431,
            "end": 1433
          }
        ],
        "optional": false,
        "start": 1428,
        "end": 1434
      },
      "directive": null,
      "start": 1428,
      "end": 1435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v1",
        "optional": false,
        "typeAnnotation": null,
        "start": 1436,
        "end": 1438
      },
      "directive": null,
      "start": 1436,
      "end": 1439
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1473,
        "end": 1475
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
              "type": "TSAnyKeyword",
              "start": 1479,
              "end": 1482
            },
            "start": 1477,
            "end": 1482
          },
          "start": 1476,
          "end": 1482
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1494
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 6,
                    "raw": "6",
                    "start": 1498,
                    "end": 1499
                  },
                  "start": 1498,
                  "end": 1499
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1502,
                  "end": 1511
                }
              ],
              "start": 1498,
              "end": 1511
            },
            "start": 1498,
            "end": 1511
          },
          "start": 1485,
          "end": 1511
        },
        "start": 1483,
        "end": 1511
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1512,
        "end": 1515
      },
      "expression": false,
      "start": 1464,
      "end": 1515
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 1524,
                    "end": 1530
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 1533,
                    "end": 1539
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1542,
                    "end": 1551
                  }
                ],
                "start": 1524,
                "end": 1551
              },
              "start": 1522,
              "end": 1551
            },
            "start": 1520,
            "end": 1551
          },
          "init": null,
          "definite": false,
          "start": 1520,
          "end": 1551
        }
      ],
      "declare": false,
      "start": 1516,
      "end": 1552
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
          "start": 1553,
          "end": 1555
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "v2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1556,
            "end": 1558
          }
        ],
        "optional": false,
        "start": 1553,
        "end": 1559
      },
      "directive": null,
      "start": 1553,
      "end": 1560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "v2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1561,
        "end": 1563
      },
      "directive": null,
      "start": 1561,
      "end": 1564
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1612,
        "end": 1625
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSStringKeyword",
              "start": 1633,
              "end": 1639
            },
            "start": 1631,
            "end": 1639
          },
          "start": 1626,
          "end": 1639
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1642,
            "end": 1647
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "",
                "raw": "''",
                "start": 1651,
                "end": 1653
              },
              "start": 1651,
              "end": 1653
            },
            "start": 1651,
            "end": 1653
          },
          "start": 1642,
          "end": 1653
        },
        "start": 1640,
        "end": 1653
      },
      "body": null,
      "expression": false,
      "start": 1595,
      "end": 1654
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeEmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 1672,
        "end": 1690
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1698,
                  "end": 1704
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1707,
                  "end": 1711
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1714,
                  "end": 1723
                }
              ],
              "start": 1698,
              "end": 1723
            },
            "start": 1696,
            "end": 1723
          },
          "start": 1691,
          "end": 1723
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1726,
            "end": 1731
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 1735,
                    "end": 1737
                  },
                  "start": 1735,
                  "end": 1737
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1740,
                  "end": 1744
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1747,
                  "end": 1756
                }
              ],
              "start": 1735,
              "end": 1756
            },
            "start": 1735,
            "end": 1756
          },
          "start": 1726,
          "end": 1756
        },
        "start": 1724,
        "end": 1756
      },
      "body": null,
      "expression": false,
      "start": 1655,
      "end": 1757
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 1776,
        "end": 1782
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSNumberKeyword",
              "start": 1790,
              "end": 1796
            },
            "start": 1788,
            "end": 1796
          },
          "start": 1783,
          "end": 1796
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1799,
            "end": 1804
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1808,
                "end": 1809
              },
              "start": 1808,
              "end": 1809
            },
            "start": 1808,
            "end": 1809
          },
          "start": 1799,
          "end": 1809
        },
        "start": 1797,
        "end": 1809
      },
      "body": null,
      "expression": false,
      "start": 1759,
      "end": 1810
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeZero",
        "optional": false,
        "typeAnnotation": null,
        "start": 1828,
        "end": 1839
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 1847,
                  "end": 1853
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1856,
                  "end": 1860
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1863,
                  "end": 1872
                }
              ],
              "start": 1847,
              "end": 1872
            },
            "start": 1845,
            "end": 1872
          },
          "start": 1840,
          "end": 1872
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1875,
            "end": 1880
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1884,
                    "end": 1885
                  },
                  "start": 1884,
                  "end": 1885
                },
                {
                  "type": "TSNullKeyword",
                  "start": 1888,
                  "end": 1892
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1895,
                  "end": 1904
                }
              ],
              "start": 1884,
              "end": 1904
            },
            "start": 1884,
            "end": 1904
          },
          "start": 1875,
          "end": 1904
        },
        "start": 1873,
        "end": 1904
      },
      "body": null,
      "expression": false,
      "start": 1811,
      "end": 1905
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmptyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1924,
        "end": 1936
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
              "start": 1937,
              "end": 1938
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1937,
            "end": 1938
          }
        ],
        "start": 1936,
        "end": 1939
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
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1947,
                  "end": 1948
                },
                "typeArguments": null,
                "start": 1947,
                "end": 1948
              },
              "start": 1947,
              "end": 1950
            },
            "start": 1945,
            "end": 1950
          },
          "start": 1940,
          "end": 1950
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 1953,
            "end": 1958
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [],
              "start": 1962,
              "end": 1964
            },
            "start": 1962,
            "end": 1964
          },
          "start": 1953,
          "end": 1964
        },
        "start": 1951,
        "end": 1964
      },
      "body": null,
      "expression": false,
      "start": 1907,
      "end": 1965
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMaybeEmptyArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 1983,
        "end": 2000
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
              "start": 2001,
              "end": 2002
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2001,
            "end": 2002
          }
        ],
        "start": 2000,
        "end": 2003
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2011,
                      "end": 2012
                    },
                    "typeArguments": null,
                    "start": 2011,
                    "end": 2012
                  },
                  "start": 2011,
                  "end": 2014
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2017,
                  "end": 2021
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2024,
                  "end": 2033
                }
              ],
              "start": 2011,
              "end": 2033
            },
            "start": 2009,
            "end": 2033
          },
          "start": 2004,
          "end": 2033
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 2036,
            "end": 2041
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [],
                  "start": 2045,
                  "end": 2047
                },
                {
                  "type": "TSNullKeyword",
                  "start": 2050,
                  "end": 2054
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 2057,
                  "end": 2066
                }
              ],
              "start": 2045,
              "end": 2066
            },
            "start": 2045,
            "end": 2066
          },
          "start": 2036,
          "end": 2066
        },
        "start": 2034,
        "end": 2066
      },
      "body": null,
      "expression": false,
      "start": 1966,
      "end": 2067
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
            "name": "TEST_CASES",
            "optional": false,
            "typeAnnotation": null,
            "start": 2075,
            "end": 2085
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
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
                        "type": "TSStringKeyword",
                        "start": 2102,
                        "end": 2108
                      },
                      "start": 2100,
                      "end": 2108
                    },
                    "start": 2095,
                    "end": 2108
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2127,
                          "end": 2140
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2141,
                            "end": 2146
                          }
                        ],
                        "optional": false,
                        "start": 2127,
                        "end": 2147
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2163,
                              "end": 2168
                            },
                            "directive": null,
                            "start": 2163,
                            "end": 2169
                          }
                        ],
                        "start": 2149,
                        "end": 2186
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2214,
                              "end": 2219
                            },
                            "directive": null,
                            "start": 2214,
                            "end": 2220
                          }
                        ],
                        "start": 2200,
                        "end": 2241
                      },
                      "start": 2123,
                      "end": 2241
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2254,
                          "end": 2272
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2273,
                            "end": 2278
                          }
                        ],
                        "optional": false,
                        "start": 2254,
                        "end": 2279
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2295,
                              "end": 2300
                            },
                            "directive": null,
                            "start": 2295,
                            "end": 2301
                          }
                        ],
                        "start": 2281,
                        "end": 2318
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2346,
                              "end": 2351
                            },
                            "directive": null,
                            "start": 2346,
                            "end": 2352
                          }
                        ],
                        "start": 2332,
                        "end": 2373
                      },
                      "start": 2250,
                      "end": 2373
                    }
                  ],
                  "start": 2113,
                  "end": 2379
                },
                "id": null,
                "generator": false,
                "start": 2094,
                "end": 2379
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2394,
                        "end": 2400
                      },
                      "start": 2392,
                      "end": 2400
                    },
                    "start": 2386,
                    "end": 2400
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyString",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2419,
                          "end": 2437
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2438,
                            "end": 2443
                          }
                        ],
                        "optional": false,
                        "start": 2419,
                        "end": 2444
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2460,
                              "end": 2465
                            },
                            "directive": null,
                            "start": 2460,
                            "end": 2466
                          }
                        ],
                        "start": 2446,
                        "end": 2495
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2523,
                              "end": 2528
                            },
                            "directive": null,
                            "start": 2523,
                            "end": 2529
                          }
                        ],
                        "start": 2509,
                        "end": 2550
                      },
                      "start": 2415,
                      "end": 2550
                    }
                  ],
                  "start": 2405,
                  "end": 2556
                },
                "id": null,
                "generator": false,
                "start": 2385,
                "end": 2556
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2570,
                        "end": 2576
                      },
                      "start": 2568,
                      "end": 2576
                    },
                    "start": 2563,
                    "end": 2576
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2595,
                          "end": 2601
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2602,
                            "end": 2607
                          }
                        ],
                        "optional": false,
                        "start": 2595,
                        "end": 2608
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2624,
                              "end": 2629
                            },
                            "directive": null,
                            "start": 2624,
                            "end": 2630
                          }
                        ],
                        "start": 2610,
                        "end": 2646
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2674,
                              "end": 2679
                            },
                            "directive": null,
                            "start": 2674,
                            "end": 2680
                          }
                        ],
                        "start": 2660,
                        "end": 2701
                      },
                      "start": 2591,
                      "end": 2701
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2714,
                          "end": 2725
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2726,
                            "end": 2731
                          }
                        ],
                        "optional": false,
                        "start": 2714,
                        "end": 2732
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2748,
                              "end": 2753
                            },
                            "directive": null,
                            "start": 2748,
                            "end": 2754
                          }
                        ],
                        "start": 2734,
                        "end": 2769
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2797,
                              "end": 2802
                            },
                            "directive": null,
                            "start": 2797,
                            "end": 2803
                          }
                        ],
                        "start": 2783,
                        "end": 2824
                      },
                      "start": 2710,
                      "end": 2824
                    }
                  ],
                  "start": 2581,
                  "end": 2830
                },
                "id": null,
                "generator": false,
                "start": 2562,
                "end": 2830
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2845,
                        "end": 2851
                      },
                      "start": 2843,
                      "end": 2851
                    },
                    "start": 2837,
                    "end": 2851
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeZero",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2870,
                          "end": 2881
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2882,
                            "end": 2887
                          }
                        ],
                        "optional": false,
                        "start": 2870,
                        "end": 2888
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2904,
                              "end": 2909
                            },
                            "directive": null,
                            "start": 2904,
                            "end": 2910
                          }
                        ],
                        "start": 2890,
                        "end": 2938
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2966,
                              "end": 2971
                            },
                            "directive": null,
                            "start": 2966,
                            "end": 2972
                          }
                        ],
                        "start": 2952,
                        "end": 2993
                      },
                      "start": 2866,
                      "end": 2993
                    }
                  ],
                  "start": 2856,
                  "end": 2999
                },
                "id": null,
                "generator": false,
                "start": 2836,
                "end": 2999
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
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3013,
                          "end": 3019
                        },
                        "start": 3013,
                        "end": 3021
                      },
                      "start": 3011,
                      "end": 3021
                    },
                    "start": 3006,
                    "end": 3021
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3040,
                          "end": 3052
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3053,
                            "end": 3058
                          }
                        ],
                        "optional": false,
                        "start": 3040,
                        "end": 3059
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3075,
                              "end": 3080
                            },
                            "directive": null,
                            "start": 3075,
                            "end": 3081
                          }
                        ],
                        "start": 3061,
                        "end": 3098
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3126,
                              "end": 3131
                            },
                            "directive": null,
                            "start": 3126,
                            "end": 3132
                          }
                        ],
                        "start": 3112,
                        "end": 3155
                      },
                      "start": 3036,
                      "end": 3155
                    },
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3168,
                          "end": 3185
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3186,
                            "end": 3191
                          }
                        ],
                        "optional": false,
                        "start": 3168,
                        "end": 3192
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3208,
                              "end": 3213
                            },
                            "directive": null,
                            "start": 3208,
                            "end": 3214
                          }
                        ],
                        "start": 3194,
                        "end": 3231
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3259,
                              "end": 3264
                            },
                            "directive": null,
                            "start": 3259,
                            "end": 3265
                          }
                        ],
                        "start": 3245,
                        "end": 3288
                      },
                      "start": 3164,
                      "end": 3288
                    }
                  ],
                  "start": 3026,
                  "end": 3294
                },
                "id": null,
                "generator": false,
                "start": 3005,
                "end": 3294
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
                    "name": "value",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSStringKeyword",
                          "start": 3309,
                          "end": 3315
                        },
                        "start": 3309,
                        "end": 3317
                      },
                      "start": 3307,
                      "end": 3317
                    },
                    "start": 3301,
                    "end": 3317
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "IfStatement",
                      "test": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "isMaybeEmptyArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3336,
                          "end": 3353
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3354,
                            "end": 3359
                          }
                        ],
                        "optional": false,
                        "start": 3336,
                        "end": 3360
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3376,
                              "end": 3381
                            },
                            "directive": null,
                            "start": 3376,
                            "end": 3382
                          }
                        ],
                        "start": 3362,
                        "end": 3411
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3439,
                              "end": 3444
                            },
                            "directive": null,
                            "start": 3439,
                            "end": 3445
                          }
                        ],
                        "start": 3425,
                        "end": 3468
                      },
                      "start": 3332,
                      "end": 3468
                    }
                  ],
                  "start": 3322,
                  "end": 3474
                },
                "id": null,
                "generator": false,
                "start": 3300,
                "end": 3474
              }
            ],
            "start": 2088,
            "end": 3477
          },
          "definite": false,
          "start": 2075,
          "end": 3477
        }
      ],
      "declare": false,
      "start": 2069,
      "end": 3478
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "EmptyString",
        "optional": false,
        "typeAnnotation": null,
        "start": 3507,
        "end": 3518
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 3521,
              "end": 3523
            },
            "start": 3521,
            "end": 3523
          },
          {
            "type": "TSNullKeyword",
            "start": 3526,
            "end": 3530
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 3533,
            "end": 3542
          }
        ],
        "start": 3521,
        "end": 3542
      },
      "declare": false,
      "start": 3502,
      "end": 3543
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isEmpty",
        "optional": false,
        "typeAnnotation": null,
        "start": 3554,
        "end": 3561
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3569,
                  "end": 3575
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "EmptyString",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3578,
                    "end": 3589
                  },
                  "typeArguments": null,
                  "start": 3578,
                  "end": 3589
                }
              ],
              "start": 3569,
              "end": 3589
            },
            "start": 3567,
            "end": 3589
          },
          "start": 3562,
          "end": 3589
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3592,
            "end": 3597
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "EmptyString",
                "optional": false,
                "typeAnnotation": null,
                "start": 3601,
                "end": 3612
              },
              "typeArguments": null,
              "start": 3601,
              "end": 3612
            },
            "start": 3601,
            "end": 3612
          },
          "start": 3592,
          "end": 3612
        },
        "start": 3590,
        "end": 3612
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "LogicalExpression",
                "left": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3626,
                    "end": 3631
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 3636,
                    "end": 3638
                  },
                  "start": 3626,
                  "end": 3638
                },
                "operator": "||",
                "right": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3642,
                    "end": 3647
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 3652,
                    "end": 3656
                  },
                  "start": 3642,
                  "end": 3656
                },
                "start": 3626,
                "end": 3656
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3660,
                  "end": 3665
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3670,
                  "end": 3679
                },
                "start": 3660,
                "end": 3679
              },
              "start": 3626,
              "end": 3679
            },
            "start": 3619,
            "end": 3680
          }
        ],
        "start": 3613,
        "end": 3682
      },
      "expression": false,
      "start": 3545,
      "end": 3682
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 3694,
                    "end": 3700
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 3703,
                    "end": 3707
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 3710,
                    "end": 3719
                  }
                ],
                "start": 3694,
                "end": 3719
              },
              "start": 3692,
              "end": 3719
            },
            "start": 3688,
            "end": 3719
          },
          "init": null,
          "definite": false,
          "start": 3688,
          "end": 3719
        }
      ],
      "declare": false,
      "start": 3684,
      "end": 3720
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "isEmpty",
          "optional": false,
          "typeAnnotation": null,
          "start": 3726,
          "end": 3733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null,
            "start": 3734,
            "end": 3738
          }
        ],
        "optional": false,
        "start": 3726,
        "end": 3739
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 3747,
              "end": 3751
            },
            "directive": null,
            "start": 3747,
            "end": 3752
          }
        ],
        "start": 3741,
        "end": 3770
      },
      "alternate": null,
      "start": 3722,
      "end": 3770
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null,
        "start": 3811,
        "end": 3817
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
              "start": 3818,
              "end": 3819
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3818,
            "end": 3819
          }
        ],
        "start": 3817,
        "end": 3820
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
              "type": "TSAnyKeyword",
              "start": 3828,
              "end": 3831
            },
            "start": 3826,
            "end": 3831
          },
          "start": 3821,
          "end": 3831
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 3842,
            "end": 3847
          },
          "asserts": true,
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
                "start": 3851,
                "end": 3852
              },
              "typeArguments": null,
              "start": 3851,
              "end": 3852
            },
            "start": 3851,
            "end": 3852
          },
          "start": 3834,
          "end": 3852
        },
        "start": 3832,
        "end": 3852
      },
      "body": null,
      "expression": false,
      "start": 3794,
      "end": 3852
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3863,
        "end": 3868
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 3874,
                  "end": 3880
                },
                {
                  "type": "TSStringKeyword",
                  "start": 3883,
                  "end": 3889
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 3892,
                  "end": 3899
                }
              ],
              "start": 3874,
              "end": 3899
            },
            "start": 3872,
            "end": 3899
          },
          "start": 3869,
          "end": 3899
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assert",
                "optional": false,
                "typeAnnotation": null,
                "start": 3907,
                "end": 3913
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 3914,
                          "end": 3915
                        },
                        "start": 3914,
                        "end": 3915
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3918,
                        "end": 3924
                      }
                    ],
                    "start": 3914,
                    "end": 3924
                  }
                ],
                "start": 3913,
                "end": 3925
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3926,
                  "end": 3929
                }
              ],
              "optional": false,
              "start": 3907,
              "end": 3930
            },
            "directive": null,
            "start": 3907,
            "end": 3931
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3936,
              "end": 3939
            },
            "directive": null,
            "start": 3936,
            "end": 3940
          }
        ],
        "start": 3901,
        "end": 3957
      },
      "expression": false,
      "start": 3854,
      "end": 3957
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3990,
        "end": 3996
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
              "type": "TSUnknownKeyword",
              "start": 4000,
              "end": 4007
            },
            "start": 3998,
            "end": 4007
          },
          "start": 3997,
          "end": 4007
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4010,
            "end": 4011
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4016,
                  "end": 4022
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4025,
                    "end": 4026
                  },
                  "start": 4025,
                  "end": 4026
                }
              ],
              "start": 4016,
              "end": 4026
            },
            "start": 4016,
            "end": 4026
          },
          "start": 4010,
          "end": 4027
        },
        "start": 4008,
        "end": 4027
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4045,
                    "end": 4046
                  },
                  "prefix": true,
                  "start": 4038,
                  "end": 4046
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4051,
                  "end": 4059
                },
                "start": 4038,
                "end": 4059
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4063,
                  "end": 4064
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4069,
                  "end": 4070
                },
                "start": 4063,
                "end": 4070
              },
              "start": 4038,
              "end": 4070
            },
            "start": 4031,
            "end": 4071
          }
        ],
        "start": 4028,
        "end": 4073
      },
      "expression": false,
      "start": 3981,
      "end": 4073
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "check2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4084,
        "end": 4090
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
              "type": "TSUnknownKeyword",
              "start": 4094,
              "end": 4101
            },
            "start": 4092,
            "end": 4101
          },
          "start": 4091,
          "end": 4101
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4104,
            "end": 4105
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "hello",
                    "raw": "\"hello\"",
                    "start": 4110,
                    "end": 4117
                  },
                  "start": 4110,
                  "end": 4117
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 4120,
                    "end": 4121
                  },
                  "start": 4120,
                  "end": 4121
                }
              ],
              "start": 4110,
              "end": 4121
            },
            "start": 4110,
            "end": 4121
          },
          "start": 4104,
          "end": 4122
        },
        "start": 4102,
        "end": 4122
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4133,
                  "end": 4134
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 4139,
                  "end": 4146
                },
                "start": 4133,
                "end": 4146
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4150,
                  "end": 4151
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4156,
                  "end": 4157
                },
                "start": 4150,
                "end": 4157
              },
              "start": 4133,
              "end": 4157
            },
            "start": 4126,
            "end": 4158
          }
        ],
        "start": 4123,
        "end": 4160
      },
      "expression": false,
      "start": 4075,
      "end": 4160
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 4171,
        "end": 4176
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
              "type": "TSUnknownKeyword",
              "start": 4180,
              "end": 4187
            },
            "start": 4178,
            "end": 4187
          },
          "start": 4177,
          "end": 4187
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4203,
                    "end": 4204
                  },
                  "prefix": true,
                  "start": 4196,
                  "end": 4204
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 4209,
                  "end": 4217
                },
                "start": 4196,
                "end": 4217
              },
              "operator": "||",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4221,
                  "end": 4222
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 4227,
                  "end": 4228
                },
                "start": 4221,
                "end": 4228
              },
              "start": 4196,
              "end": 4228
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4234,
                    "end": 4235
                  },
                  "directive": null,
                  "start": 4234,
                  "end": 4236
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4258,
                        "end": 4259
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "\"hello\"",
                        "start": 4264,
                        "end": 4271
                      },
                      "start": 4258,
                      "end": 4271
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4275,
                        "end": 4276
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 4281,
                        "end": 4282
                      },
                      "start": 4275,
                      "end": 4282
                    },
                    "start": 4258,
                    "end": 4282
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4289,
                          "end": 4290
                        },
                        "directive": null,
                        "start": 4289,
                        "end": 4291
                      }
                    ],
                    "start": 4284,
                    "end": 4311
                  },
                  "alternate": null,
                  "start": 4254,
                  "end": 4311
                }
              ],
              "start": 4230,
              "end": 4314
            },
            "alternate": null,
            "start": 4192,
            "end": 4314
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "check1",
                "optional": false,
                "typeAnnotation": null,
                "start": 4320,
                "end": 4326
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4327,
                  "end": 4328
                }
              ],
              "optional": false,
              "start": 4320,
              "end": 4329
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4335,
                    "end": 4336
                  },
                  "directive": null,
                  "start": 4335,
                  "end": 4337
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "check2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4359,
                      "end": 4365
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4366,
                        "end": 4367
                      }
                    ],
                    "optional": false,
                    "start": 4359,
                    "end": 4368
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4375,
                          "end": 4376
                        },
                        "directive": null,
                        "start": 4375,
                        "end": 4377
                      }
                    ],
                    "start": 4370,
                    "end": 4397
                  },
                  "alternate": null,
                  "start": 4355,
                  "end": 4397
                }
              ],
              "start": 4331,
              "end": 4400
            },
            "alternate": null,
            "start": 4316,
            "end": 4400
          }
        ],
        "start": 4189,
        "end": 4402
      },
      "expression": false,
      "start": 4162,
      "end": 4402
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertRelationIsNullOrStringArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 4435,
        "end": 4468
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4473,
                        "end": 4479
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4482,
                        "end": 4488
                      }
                    ],
                    "start": 4473,
                    "end": 4488
                  },
                  "start": 4472,
                  "end": 4491
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4494,
                  "end": 4498
                }
              ],
              "start": 4472,
              "end": 4498
            },
            "start": 4470,
            "end": 4498
          },
          "start": 4469,
          "end": 4498
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 4509,
            "end": 4510
          },
          "asserts": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 4514,
                    "end": 4520
                  },
                  "start": 4514,
                  "end": 4522
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4525,
                  "end": 4529
                }
              ],
              "start": 4514,
              "end": 4529
            },
            "start": 4514,
            "end": 4529
          },
          "start": 4501,
          "end": 4529
        },
        "start": 4499,
        "end": 4529
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4530,
        "end": 4532
      },
      "expression": false,
      "start": 4426,
      "end": 4532
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1x",
        "optional": false,
        "typeAnnotation": null,
        "start": 4543,
        "end": 4546
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 4553,
                        "end": 4559
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 4562,
                        "end": 4568
                      }
                    ],
                    "start": 4553,
                    "end": 4568
                  },
                  "start": 4552,
                  "end": 4571
                },
                {
                  "type": "TSNullKeyword",
                  "start": 4574,
                  "end": 4578
                }
              ],
              "start": 4552,
              "end": 4578
            },
            "start": 4550,
            "end": 4578
          },
          "start": 4547,
          "end": 4578
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "assertRelationIsNullOrStringArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 4586,
                "end": 4619
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4620,
                  "end": 4623
                }
              ],
              "optional": false,
              "start": 4586,
              "end": 4624
            },
            "directive": null,
            "start": 4586,
            "end": 4625
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 4630,
              "end": 4633
            },
            "directive": null,
            "start": 4630,
            "end": 4634
          }
        ],
        "start": 4580,
        "end": 4656
      },
      "expression": false,
      "start": 4534,
      "end": 4656
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 4685,
        "end": 4705
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4710,
                  "end": 4714
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 4716,
                      "end": 4719
                    },
                    "start": 4716,
                    "end": 4719
                  },
                  "start": 4714,
                  "end": 4719
                },
                "accessibility": null,
                "static": false,
                "start": 4710,
                "end": 4720
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "aProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4721,
                  "end": 4726
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 4728,
                    "end": 4734
                  },
                  "start": 4726,
                  "end": 4734
                },
                "accessibility": null,
                "static": false,
                "start": 4721,
                "end": 4734
              }
            ],
            "start": 4708,
            "end": 4736
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4741,
                  "end": 4745
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 4747,
                      "end": 4750
                    },
                    "start": 4747,
                    "end": 4750
                  },
                  "start": 4745,
                  "end": 4750
                },
                "accessibility": null,
                "static": false,
                "start": 4741,
                "end": 4751
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4752,
                  "end": 4757
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4759,
                    "end": 4765
                  },
                  "start": 4757,
                  "end": 4765
                },
                "accessibility": null,
                "static": false,
                "start": 4752,
                "end": 4765
              }
            ],
            "start": 4739,
            "end": 4767
          }
        ],
        "start": 4708,
        "end": 4767
      },
      "declare": false,
      "start": 4680,
      "end": 4768
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isMyDiscriminatedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 4787,
        "end": 4809
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 4816,
              "end": 4823
            },
            "start": 4814,
            "end": 4823
          },
          "start": 4810,
          "end": 4823
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "item",
            "optional": false,
            "typeAnnotation": null,
            "start": 4826,
            "end": 4830
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "MyDiscriminatedUnion",
                "optional": false,
                "typeAnnotation": null,
                "start": 4834,
                "end": 4854
              },
              "typeArguments": null,
              "start": 4834,
              "end": 4854
            },
            "start": 4834,
            "end": 4854
          },
          "start": 4826,
          "end": 4854
        },
        "start": 4824,
        "end": 4854
      },
      "body": null,
      "expression": false,
      "start": 4770,
      "end": 4855
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
            "name": "working",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 4880,
                "end": 4887
              },
              "start": 4878,
              "end": 4887
            },
            "start": 4871,
            "end": 4887
          },
          "init": null,
          "definite": false,
          "start": 4871,
          "end": 4887
        }
      ],
      "declare": true,
      "start": 4857,
      "end": 4888
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
            "name": "broken",
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
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4911,
                      "end": 4917
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4918,
                          "end": 4924
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4926,
                          "end": 4929
                        }
                      ],
                      "start": 4917,
                      "end": 4930
                    },
                    "start": 4911,
                    "end": 4930
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4933,
                    "end": 4942
                  }
                ],
                "start": 4911,
                "end": 4942
              },
              "start": 4909,
              "end": 4942
            },
            "start": 4903,
            "end": 4942
          },
          "init": null,
          "definite": false,
          "start": 4903,
          "end": 4942
        }
      ],
      "declare": true,
      "start": 4889,
      "end": 4943
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
            "name": "workingAgain",
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
                      "name": "Record",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4972,
                      "end": 4978
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4979,
                          "end": 4985
                        },
                        {
                          "type": "TSAnyKeyword",
                          "start": 4987,
                          "end": 4990
                        }
                      ],
                      "start": 4978,
                      "end": 4991
                    },
                    "start": 4972,
                    "end": 4991
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 4994,
                    "end": 5003
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 5006,
                    "end": 5013
                  }
                ],
                "start": 4972,
                "end": 5013
              },
              "start": 4970,
              "end": 5013
            },
            "start": 4958,
            "end": 5013
          },
          "init": null,
          "definite": false,
          "start": 4958,
          "end": 5013
        }
      ],
      "declare": true,
      "start": 4944,
      "end": 5014
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5016,
              "end": 5038
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null,
                "start": 5039,
                "end": 5046
              }
            ],
            "optional": false,
            "start": 5016,
            "end": 5047
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "working",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5058
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5059,
                "end": 5063
              },
              "optional": false,
              "computed": false,
              "start": 5051,
              "end": 5063
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5068,
              "end": 5071
            },
            "start": 5051,
            "end": 5071
          },
          "start": 5016,
          "end": 5071
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "working",
            "optional": false,
            "typeAnnotation": null,
            "start": 5075,
            "end": 5082
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5083,
            "end": 5088
          },
          "optional": false,
          "computed": false,
          "start": 5075,
          "end": 5088
        },
        "start": 5016,
        "end": 5088
      },
      "directive": null,
      "start": 5016,
      "end": 5089
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5090,
              "end": 5112
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null,
                "start": 5113,
                "end": 5119
              }
            ],
            "optional": false,
            "start": 5090,
            "end": 5120
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "broken",
                "optional": false,
                "typeAnnotation": null,
                "start": 5124,
                "end": 5130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5131,
                "end": 5135
              },
              "optional": false,
              "computed": false,
              "start": 5124,
              "end": 5135
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5140,
              "end": 5143
            },
            "start": 5124,
            "end": 5143
          },
          "start": 5090,
          "end": 5143
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "broken",
            "optional": false,
            "typeAnnotation": null,
            "start": 5147,
            "end": 5153
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5154,
            "end": 5159
          },
          "optional": false,
          "computed": false,
          "start": 5147,
          "end": 5159
        },
        "start": 5090,
        "end": 5159
      },
      "directive": null,
      "start": 5090,
      "end": 5160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "isMyDiscriminatedUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 5161,
              "end": 5183
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null,
                "start": 5184,
                "end": 5196
              }
            ],
            "optional": false,
            "start": 5161,
            "end": 5197
          },
          "operator": "&&",
          "right": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "workingAgain",
                "optional": false,
                "typeAnnotation": null,
                "start": 5201,
                "end": 5213
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 5214,
                "end": 5218
              },
              "optional": false,
              "computed": false,
              "start": 5201,
              "end": 5218
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "A",
              "raw": "'A'",
              "start": 5223,
              "end": 5226
            },
            "start": 5201,
            "end": 5226
          },
          "start": 5161,
          "end": 5226
        },
        "operator": "&&",
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "workingAgain",
            "optional": false,
            "typeAnnotation": null,
            "start": 5230,
            "end": 5242
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "aProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 5243,
            "end": 5248
          },
          "optional": false,
          "computed": false,
          "start": 5230,
          "end": 5248
        },
        "start": 5161,
        "end": 5248
      },
      "directive": null,
      "start": 5161,
      "end": 5249
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 5278,
        "end": 5283
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5294,
                  "end": 5298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 5300,
                      "end": 5303
                    },
                    "start": 5300,
                    "end": 5303
                  },
                  "start": 5298,
                  "end": 5303
                },
                "accessibility": null,
                "static": false,
                "start": 5294,
                "end": 5304
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5305,
                  "end": 5312
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5314,
                      "end": 5315
                    },
                    "start": 5314,
                    "end": 5315
                  },
                  "start": 5312,
                  "end": 5315
                },
                "accessibility": null,
                "static": false,
                "start": 5305,
                "end": 5315
              }
            ],
            "start": 5292,
            "end": 5317
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5326,
                  "end": 5330
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 5332,
                      "end": 5335
                    },
                    "start": 5332,
                    "end": 5335
                  },
                  "start": 5330,
                  "end": 5335
                },
                "accessibility": null,
                "static": false,
                "start": 5326,
                "end": 5336
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5337,
                  "end": 5344
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 5346,
                      "end": 5347
                    },
                    "start": 5346,
                    "end": 5347
                  },
                  "start": 5344,
                  "end": 5347
                },
                "accessibility": null,
                "static": false,
                "start": 5337,
                "end": 5347
              }
            ],
            "start": 5324,
            "end": 5349
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
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5358,
                  "end": 5362
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 5364,
                      "end": 5367
                    },
                    "start": 5364,
                    "end": 5367
                  },
                  "start": 5362,
                  "end": 5367
                },
                "accessibility": null,
                "static": false,
                "start": 5358,
                "end": 5367
              }
            ],
            "start": 5356,
            "end": 5369
          }
        ],
        "start": 5290,
        "end": 5369
      },
      "declare": false,
      "start": 5273,
      "end": 5370
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5381,
        "end": 5389
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5397,
                "end": 5402
              },
              "typeArguments": null,
              "start": 5397,
              "end": 5402
            },
            "start": 5395,
            "end": 5402
          },
          "start": 5390,
          "end": 5402
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5407,
                    "end": 5411
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5413,
                        "end": 5416
                      },
                      "start": 5413,
                      "end": 5416
                    },
                    "start": 5411,
                    "end": 5416
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5407,
                  "end": 5417
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5418,
                    "end": 5425
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5427,
                        "end": 5428
                      },
                      "start": 5427,
                      "end": 5428
                    },
                    "start": 5425,
                    "end": 5428
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5418,
                  "end": 5428
                }
              ],
              "start": 5405,
              "end": 5430
            },
            {
              "type": "TSNullKeyword",
              "start": 5433,
              "end": 5437
            }
          ],
          "start": 5405,
          "end": 5437
        },
        "start": 5403,
        "end": 5437
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5448,
                  "end": 5453
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5454,
                  "end": 5458
                },
                "optional": false,
                "computed": false,
                "start": 5448,
                "end": 5458
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5463,
                "end": 5466
              },
              "start": 5448,
              "end": 5466
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5485,
                    "end": 5489
                  },
                  "start": 5478,
                  "end": 5490
                }
              ],
              "start": 5468,
              "end": 5496
            },
            "alternate": null,
            "start": 5444,
            "end": 5496
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5505,
                  "end": 5510
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "variant",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5511,
                  "end": 5518
                },
                "optional": false,
                "computed": false,
                "start": 5505,
                "end": 5518
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 5523,
                "end": 5524
              },
              "start": 5505,
              "end": 5524
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5543,
                    "end": 5547
                  },
                  "start": 5536,
                  "end": 5548
                }
              ],
              "start": 5526,
              "end": 5554
            },
            "alternate": null,
            "start": 5501,
            "end": 5554
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 5566,
              "end": 5571
            },
            "start": 5559,
            "end": 5572
          }
        ],
        "start": 5438,
        "end": 5574
      },
      "expression": false,
      "start": 5372,
      "end": 5574
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5585,
        "end": 5593
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5601,
                "end": 5606
              },
              "typeArguments": null,
              "start": 5601,
              "end": 5606
            },
            "start": 5599,
            "end": 5606
          },
          "start": 5594,
          "end": 5606
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5611,
                    "end": 5615
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5617,
                        "end": 5620
                      },
                      "start": 5617,
                      "end": 5620
                    },
                    "start": 5615,
                    "end": 5620
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5611,
                  "end": 5621
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5622,
                    "end": 5629
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5631,
                        "end": 5632
                      },
                      "start": 5631,
                      "end": 5632
                    },
                    "start": 5629,
                    "end": 5632
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5622,
                  "end": 5632
                }
              ],
              "start": 5609,
              "end": 5634
            },
            {
              "type": "TSNullKeyword",
              "start": 5637,
              "end": 5641
            }
          ],
          "start": 5609,
          "end": 5641
        },
        "start": 5607,
        "end": 5641
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5652,
                  "end": 5657
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5658,
                  "end": 5662
                },
                "optional": false,
                "computed": false,
                "start": 5652,
                "end": 5662
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5667,
                "end": 5670
              },
              "start": 5652,
              "end": 5670
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5689,
                    "end": 5693
                  },
                  "start": 5682,
                  "end": 5694
                }
              ],
              "start": 5672,
              "end": 5700
            },
            "alternate": null,
            "start": 5648,
            "end": 5700
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5709,
                    "end": 5714
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5715,
                    "end": 5719
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5709,
                  "end": 5719
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 5724,
                  "end": 5727
                },
                "start": 5709,
                "end": 5727
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5731,
                    "end": 5736
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5737,
                    "end": 5744
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5731,
                  "end": 5744
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5749,
                  "end": 5750
                },
                "start": 5731,
                "end": 5750
              },
              "start": 5709,
              "end": 5750
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5769,
                    "end": 5773
                  },
                  "start": 5762,
                  "end": 5774
                }
              ],
              "start": 5752,
              "end": 5780
            },
            "alternate": null,
            "start": 5705,
            "end": 5780
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 5792,
              "end": 5797
            },
            "start": 5785,
            "end": 5798
          }
        ],
        "start": 5642,
        "end": 5800
      },
      "expression": false,
      "start": 5576,
      "end": 5800
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "example3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5811,
        "end": 5819
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Union",
                "optional": false,
                "typeAnnotation": null,
                "start": 5827,
                "end": 5832
              },
              "typeArguments": null,
              "start": 5827,
              "end": 5832
            },
            "start": 5825,
            "end": 5832
          },
          "start": 5820,
          "end": 5832
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5837,
                    "end": 5841
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "'a'",
                        "start": 5843,
                        "end": 5846
                      },
                      "start": 5843,
                      "end": 5846
                    },
                    "start": 5841,
                    "end": 5846
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5837,
                  "end": 5847
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5848,
                    "end": 5855
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 5857,
                        "end": 5858
                      },
                      "start": 5857,
                      "end": 5858
                    },
                    "start": 5855,
                    "end": 5858
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5848,
                  "end": 5858
                }
              ],
              "start": 5835,
              "end": 5860
            },
            {
              "type": "TSNullKeyword",
              "start": 5863,
              "end": 5867
            }
          ],
          "start": 5835,
          "end": 5867
        },
        "start": 5833,
        "end": 5867
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5878,
                  "end": 5883
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5884,
                  "end": 5888
                },
                "optional": false,
                "computed": false,
                "start": 5878,
                "end": 5888
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 5893,
                "end": 5896
              },
              "start": 5878,
              "end": 5896
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5915,
                    "end": 5919
                  },
                  "start": 5908,
                  "end": 5920
                }
              ],
              "start": 5898,
              "end": 5926
            },
            "alternate": null,
            "start": 5874,
            "end": 5926
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5935,
                  "end": 5940
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5941,
                  "end": 5945
                },
                "optional": false,
                "computed": false,
                "start": 5935,
                "end": 5945
              },
              "operator": "&&",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5949,
                    "end": 5954
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "variant",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5955,
                    "end": 5962
                  },
                  "optional": false,
                  "computed": false,
                  "start": 5949,
                  "end": 5962
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5967,
                  "end": 5968
                },
                "start": 5949,
                "end": 5968
              },
              "start": 5935,
              "end": 5968
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 5987,
                    "end": 5991
                  },
                  "start": 5980,
                  "end": 5992
                }
              ],
              "start": 5970,
              "end": 5998
            },
            "alternate": null,
            "start": 5931,
            "end": 5998
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 6010,
              "end": 6015
            },
            "start": 6003,
            "end": 6016
          }
        ],
        "start": 5868,
        "end": 6018
      },
      "expression": false,
      "start": 5802,
      "end": 6018
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 6018
}
```
