__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 5,
    "end": 10,
    "range": [
      5,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 13,
    "end": 18,
    "range": [
      13,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Numeric",
    "value": "0n",
    "start": 25,
    "end": 27,
    "range": [
      25,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 30,
    "end": 32,
    "range": [
      30,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 35,
    "end": 39,
    "range": [
      35,
      39
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 42,
    "end": 51,
    "range": [
      42,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61,
    "range": [
      54,
      61
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70,
    "range": [
      62,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 71,
    "end": 78,
    "range": [
      71,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 79,
    "end": 84,
    "range": [
      79,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 86,
    "end": 93,
    "range": [
      86,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 102,
    "end": 104,
    "range": [
      102,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "Falsy",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "fx1",
    "start": 122,
    "end": 125,
    "range": [
      122,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 129,
    "end": 135,
    "range": [
      129,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 147,
    "end": 156,
    "range": [
      147,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 168,
    "end": 175,
    "range": [
      168,
      175
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 190,
    "end": 191,
    "range": [
      190,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 225,
    "end": 233,
    "range": [
      225,
      233
    ]
  },
  {
    "type": "Identifier",
    "value": "fx2",
    "start": 234,
    "end": 237,
    "range": [
      234,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 248,
    "end": 257,
    "range": [
      248,
      257
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 265,
    "end": 267,
    "range": [
      265,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 269,
    "end": 276,
    "range": [
      269,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 277,
    "end": 278,
    "range": [
      277,
      278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 324,
    "end": 325,
    "range": [
      324,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 329,
    "end": 337,
    "range": [
      329,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "fx3",
    "start": 338,
    "end": 341,
    "range": [
      338,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 344,
    "end": 351,
    "range": [
      344,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 352,
    "end": 358,
    "range": [
      352,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 361,
    "end": 367,
    "range": [
      361,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376,
    "range": [
      375,
      376
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 381,
    "end": 383,
    "range": [
      381,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 384,
    "end": 385,
    "range": [
      384,
      385
    ]
  },
  {
    "type": "Identifier",
    "value": "isFalsy",
    "start": 385,
    "end": 392,
    "range": [
      385,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 438,
    "end": 445,
    "range": [
      438,
      445
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 446,
    "end": 454,
    "range": [
      446,
      454
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 459,
    "end": 462,
    "range": [
      459,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 464,
    "end": 471,
    "range": [
      464,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 478,
    "end": 480,
    "range": [
      478,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 486,
    "end": 491,
    "range": [
      486,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 507,
    "end": 515,
    "range": [
      507,
      515
    ]
  },
  {
    "type": "Identifier",
    "value": "fx4",
    "start": 516,
    "end": 519,
    "range": [
      516,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 520,
    "end": 523,
    "range": [
      520,
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
    "value": "{",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 527,
    "end": 528,
    "range": [
      527,
      528
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 530,
    "end": 536,
    "range": [
      530,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 537,
    "end": 538,
    "range": [
      537,
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
    "value": "{",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 546,
    "end": 548,
    "range": [
      546,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 554,
    "end": 557,
    "range": [
      554,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 597,
    "end": 604,
    "range": [
      597,
      604
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 605,
    "end": 610,
    "range": [
      605,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 611,
    "end": 612,
    "range": [
      611,
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
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 618,
    "end": 624,
    "range": [
      618,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 627,
    "end": 634,
    "range": [
      627,
      634
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 635,
    "end": 640,
    "range": [
      635,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 644,
    "end": 651,
    "range": [
      644,
      651
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "xs",
    "start": 656,
    "end": 658,
    "range": [
      656,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 667,
    "end": 668,
    "range": [
      667,
      668
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 670,
    "end": 677,
    "range": [
      670,
      677
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 678,
    "end": 683,
    "range": [
      678,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 691,
    "end": 697,
    "range": [
      691,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 700,
    "end": 707,
    "range": [
      700,
      707
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 708,
    "end": 713,
    "range": [
      708,
      713
    ]
  },
  {
    "type": "Identifier",
    "value": "YS",
    "start": 714,
    "end": 716,
    "range": [
      714,
      716
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 717,
    "end": 724,
    "range": [
      717,
      724
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "ys",
    "start": 729,
    "end": 731,
    "range": [
      729,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 733,
    "end": 739,
    "range": [
      733,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 743,
    "end": 750,
    "range": [
      743,
      750
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 751,
    "end": 759,
    "range": [
      751,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "isXSorY",
    "start": 760,
    "end": 767,
    "range": [
      760,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 768,
    "end": 771,
    "range": [
      768,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 773,
    "end": 780,
    "range": [
      773,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 783,
    "end": 786,
    "range": [
      783,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 787,
    "end": 789,
    "range": [
      787,
      789
    ]
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 790,
    "end": 792,
    "range": [
      790,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 799,
    "end": 807,
    "range": [
      799,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "fx5",
    "start": 808,
    "end": 811,
    "range": [
      808,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 814,
    "end": 821,
    "range": [
      814,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 825,
    "end": 828,
    "range": [
      825,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "X",
    "start": 830,
    "end": 831,
    "range": [
      830,
      831
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 832,
    "end": 833,
    "range": [
      832,
      833
    ]
  },
  {
    "type": "Identifier",
    "value": "YS",
    "start": 834,
    "end": 836,
    "range": [
      834,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 841,
    "end": 847,
    "range": [
      841,
      847
    ]
  },
  {
    "type": "Identifier",
    "value": "XS",
    "start": 848,
    "end": 850,
    "range": [
      848,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 853,
    "end": 859,
    "range": [
      853,
      859
    ]
  },
  {
    "type": "Identifier",
    "value": "Y",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 869,
    "end": 871,
    "range": [
      869,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 873,
    "end": 876,
    "range": [
      873,
      876
    ]
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 877,
    "end": 887,
    "range": [
      877,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 888,
    "end": 889,
    "range": [
      888,
      889
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 901,
    "end": 904,
    "range": [
      901,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 928,
    "end": 930,
    "range": [
      928,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Identifier",
    "value": "isXSorY",
    "start": 932,
    "end": 939,
    "range": [
      932,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 940,
    "end": 943,
    "range": [
      940,
      943
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1004,
    "end": 1011,
    "range": [
      1004,
      1011
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1012,
    "end": 1020,
    "range": [
      1012,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyStrOrUndefined",
    "start": 1021,
    "end": 1042,
    "range": [
      1021,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 1043,
    "end": 1048,
    "range": [
      1043,
      1048
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1050,
    "end": 1053,
    "range": [
      1050,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "mixed",
    "start": 1056,
    "end": 1061,
    "range": [
      1056,
      1061
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1062,
    "end": 1064,
    "range": [
      1062,
      1064
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 1065,
    "end": 1067,
    "range": [
      1065,
      1067
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1070,
    "end": 1079,
    "range": [
      1070,
      1079
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1079,
    "end": 1080,
    "range": [
      1079,
      1080
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1082,
    "end": 1090,
    "range": [
      1082,
      1090
    ]
  },
  {
    "type": "Identifier",
    "value": "fx10",
    "start": 1091,
    "end": 1095,
    "range": [
      1091,
      1095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1095,
    "end": 1096,
    "range": [
      1095,
      1096
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1096,
    "end": 1097,
    "range": [
      1096,
      1097
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1097,
    "end": 1098,
    "range": [
      1097,
      1098
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1099,
    "end": 1105,
    "range": [
      1099,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1108,
    "end": 1117,
    "range": [
      1108,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1125,
    "end": 1127,
    "range": [
      1125,
      1127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyStrOrUndefined",
    "start": 1129,
    "end": 1150,
    "range": [
      1129,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1195,
    "end": 1197,
    "range": [
      1195,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 1201,
    "end": 1203,
    "range": [
      1201,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1204,
    "end": 1213,
    "range": [
      1204,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1229,
    "end": 1230,
    "range": [
      1229,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1230,
    "end": 1231,
    "range": [
      1230,
      1231
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1254,
    "end": 1255,
    "range": [
      1254,
      1255
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1264,
    "end": 1268,
    "range": [
      1264,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1283,
    "end": 1284,
    "range": [
      1283,
      1284
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1301,
    "end": 1302,
    "range": [
      1301,
      1302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1309,
    "end": 1310,
    "range": [
      1309,
      1310
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1334,
    "end": 1342,
    "range": [
      1334,
      1342
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1343,
    "end": 1345,
    "range": [
      1343,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1347,
    "end": 1348,
    "range": [
      1347,
      1348
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1349,
    "end": 1352,
    "range": [
      1349,
      1352
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1352,
    "end": 1353,
    "range": [
      1352,
      1353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1353,
    "end": 1354,
    "range": [
      1353,
      1354
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1355,
    "end": 1362,
    "range": [
      1355,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1365,
    "end": 1367,
    "range": [
      1365,
      1367
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1368,
    "end": 1374,
    "range": [
      1368,
      1374
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1377,
    "end": 1386,
    "range": [
      1377,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1387,
    "end": 1388,
    "range": [
      1387,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1391,
    "end": 1394,
    "range": [
      1391,
      1394
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1395,
    "end": 1397,
    "range": [
      1395,
      1397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1397,
    "end": 1398,
    "range": [
      1397,
      1398
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1399,
    "end": 1405,
    "range": [
      1399,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1406,
    "end": 1407,
    "range": [
      1406,
      1407
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1408,
    "end": 1414,
    "range": [
      1408,
      1414
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1417,
    "end": 1426,
    "range": [
      1417,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 1428,
    "end": 1430,
    "range": [
      1428,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1431,
    "end": 1433,
    "range": [
      1431,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "v1",
    "start": 1436,
    "end": 1438,
    "range": [
      1436,
      1438
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1438,
    "end": 1439,
    "range": [
      1438,
      1439
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1464,
    "end": 1472,
    "range": [
      1464,
      1472
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1473,
    "end": 1475,
    "range": [
      1473,
      1475
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1477,
    "end": 1478,
    "range": [
      1477,
      1478
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1479,
    "end": 1482,
    "range": [
      1479,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1482,
    "end": 1483,
    "range": [
      1482,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 1485,
    "end": 1492,
    "range": [
      1485,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1493,
    "end": 1494,
    "range": [
      1493,
      1494
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1495,
    "end": 1497,
    "range": [
      1495,
      1497
    ]
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1502,
    "end": 1511,
    "range": [
      1502,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1512,
    "end": 1513,
    "range": [
      1512,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1516,
    "end": 1519,
    "range": [
      1516,
      1519
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1520,
    "end": 1522,
    "range": [
      1520,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1524,
    "end": 1530,
    "range": [
      1524,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1531,
    "end": 1532,
    "range": [
      1531,
      1532
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1533,
    "end": 1539,
    "range": [
      1533,
      1539
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1542,
    "end": 1551,
    "range": [
      1542,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 1553,
    "end": 1555,
    "range": [
      1553,
      1555
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1555,
    "end": 1556,
    "range": [
      1555,
      1556
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1556,
    "end": 1558,
    "range": [
      1556,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Identifier",
    "value": "v2",
    "start": 1561,
    "end": 1563,
    "range": [
      1561,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1595,
    "end": 1602,
    "range": [
      1595,
      1602
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1603,
    "end": 1611,
    "range": [
      1603,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyString",
    "start": 1612,
    "end": 1625,
    "range": [
      1612,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1626,
    "end": 1631,
    "range": [
      1626,
      1631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1633,
    "end": 1639,
    "range": [
      1633,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1642,
    "end": 1647,
    "range": [
      1642,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1648,
    "end": 1650,
    "range": [
      1648,
      1650
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1651,
    "end": 1653,
    "range": [
      1651,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1653,
    "end": 1654,
    "range": [
      1653,
      1654
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1655,
    "end": 1662,
    "range": [
      1655,
      1662
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1663,
    "end": 1671,
    "range": [
      1663,
      1671
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 1672,
    "end": 1690,
    "range": [
      1672,
      1690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1691,
    "end": 1696,
    "range": [
      1691,
      1696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1696,
    "end": 1697,
    "range": [
      1696,
      1697
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1698,
    "end": 1704,
    "range": [
      1698,
      1704
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1705,
    "end": 1706,
    "range": [
      1705,
      1706
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1707,
    "end": 1711,
    "range": [
      1707,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1714,
    "end": 1723,
    "range": [
      1714,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1726,
    "end": 1731,
    "range": [
      1726,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1732,
    "end": 1734,
    "range": [
      1732,
      1734
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 1735,
    "end": 1737,
    "range": [
      1735,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1740,
    "end": 1744,
    "range": [
      1740,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1747,
    "end": 1756,
    "range": [
      1747,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1756,
    "end": 1757,
    "range": [
      1756,
      1757
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1759,
    "end": 1766,
    "range": [
      1759,
      1766
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1767,
    "end": 1775,
    "range": [
      1767,
      1775
    ]
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 1776,
    "end": 1782,
    "range": [
      1776,
      1782
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1783,
    "end": 1788,
    "range": [
      1783,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1788,
    "end": 1789,
    "range": [
      1788,
      1789
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1790,
    "end": 1796,
    "range": [
      1790,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1797,
    "end": 1798,
    "range": [
      1797,
      1798
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1799,
    "end": 1804,
    "range": [
      1799,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1805,
    "end": 1807,
    "range": [
      1805,
      1807
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1809,
    "end": 1810,
    "range": [
      1809,
      1810
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1811,
    "end": 1818,
    "range": [
      1811,
      1818
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1819,
    "end": 1827,
    "range": [
      1819,
      1827
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 1828,
    "end": 1839,
    "range": [
      1828,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1840,
    "end": 1845,
    "range": [
      1840,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1847,
    "end": 1853,
    "range": [
      1847,
      1853
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1854,
    "end": 1855,
    "range": [
      1854,
      1855
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1856,
    "end": 1860,
    "range": [
      1856,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1863,
    "end": 1872,
    "range": [
      1863,
      1872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1872,
    "end": 1873,
    "range": [
      1872,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1873,
    "end": 1874,
    "range": [
      1873,
      1874
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1875,
    "end": 1880,
    "range": [
      1875,
      1880
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1881,
    "end": 1883,
    "range": [
      1881,
      1883
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1888,
    "end": 1892,
    "range": [
      1888,
      1892
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1893,
    "end": 1894,
    "range": [
      1893,
      1894
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1895,
    "end": 1904,
    "range": [
      1895,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1907,
    "end": 1914,
    "range": [
      1907,
      1914
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1915,
    "end": 1923,
    "range": [
      1915,
      1923
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyArray",
    "start": 1924,
    "end": 1936,
    "range": [
      1924,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1940,
    "end": 1945,
    "range": [
      1940,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1953,
    "end": 1958,
    "range": [
      1953,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 1959,
    "end": 1961,
    "range": [
      1959,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1966,
    "end": 1973,
    "range": [
      1966,
      1973
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1974,
    "end": 1982,
    "range": [
      1974,
      1982
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 1983,
    "end": 2000,
    "range": [
      1983,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2004,
    "end": 2009,
    "range": [
      2004,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2013,
    "end": 2014,
    "range": [
      2013,
      2014
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2017,
    "end": 2021,
    "range": [
      2017,
      2021
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2022,
    "end": 2023,
    "range": [
      2022,
      2023
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2024,
    "end": 2033,
    "range": [
      2024,
      2033
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2036,
    "end": 2041,
    "range": [
      2036,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2042,
    "end": 2044,
    "range": [
      2042,
      2044
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 2050,
    "end": 2054,
    "range": [
      2050,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2055,
    "end": 2056,
    "range": [
      2055,
      2056
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 2057,
    "end": 2066,
    "range": [
      2057,
      2066
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2066,
    "end": 2067,
    "range": [
      2066,
      2067
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2069,
    "end": 2074,
    "range": [
      2069,
      2074
    ]
  },
  {
    "type": "Identifier",
    "value": "TEST_CASES",
    "start": 2075,
    "end": 2085,
    "range": [
      2075,
      2085
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2095,
    "end": 2100,
    "range": [
      2095,
      2100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2102,
    "end": 2108,
    "range": [
      2102,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2110,
    "end": 2112,
    "range": [
      2110,
      2112
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2123,
    "end": 2125,
    "range": [
      2123,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2126,
    "end": 2127,
    "range": [
      2126,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyString",
    "start": 2127,
    "end": 2140,
    "range": [
      2127,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2141,
    "end": 2146,
    "range": [
      2141,
      2146
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2146,
    "end": 2147,
    "range": [
      2146,
      2147
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2163,
    "end": 2168,
    "range": [
      2163,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2195,
    "end": 2199,
    "range": [
      2195,
      2199
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2214,
    "end": 2219,
    "range": [
      2214,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2250,
    "end": 2252,
    "range": [
      2250,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 2254,
    "end": 2272,
    "range": [
      2254,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2272,
    "end": 2273,
    "range": [
      2272,
      2273
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2273,
    "end": 2278,
    "range": [
      2273,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2278,
    "end": 2279,
    "range": [
      2278,
      2279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2281,
    "end": 2282,
    "range": [
      2281,
      2282
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2295,
    "end": 2300,
    "range": [
      2295,
      2300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2300,
    "end": 2301,
    "range": [
      2300,
      2301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2327,
    "end": 2331,
    "range": [
      2327,
      2331
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2332,
    "end": 2333,
    "range": [
      2332,
      2333
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2346,
    "end": 2351,
    "range": [
      2346,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2379,
    "end": 2380,
    "range": [
      2379,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2385,
    "end": 2386,
    "range": [
      2385,
      2386
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2386,
    "end": 2391,
    "range": [
      2386,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2392,
    "end": 2393,
    "range": [
      2392,
      2393
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2394,
    "end": 2400,
    "range": [
      2394,
      2400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2402,
    "end": 2404,
    "range": [
      2402,
      2404
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2405,
    "end": 2406,
    "range": [
      2405,
      2406
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2415,
    "end": 2417,
    "range": [
      2415,
      2417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2418,
    "end": 2419,
    "range": [
      2418,
      2419
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyString",
    "start": 2419,
    "end": 2437,
    "range": [
      2419,
      2437
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2437,
    "end": 2438,
    "range": [
      2437,
      2438
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2438,
    "end": 2443,
    "range": [
      2438,
      2443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2443,
    "end": 2444,
    "range": [
      2443,
      2444
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2444,
    "end": 2445,
    "range": [
      2444,
      2445
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2446,
    "end": 2447,
    "range": [
      2446,
      2447
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2460,
    "end": 2465,
    "range": [
      2460,
      2465
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2465,
    "end": 2466,
    "range": [
      2465,
      2466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2494,
    "end": 2495,
    "range": [
      2494,
      2495
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2504,
    "end": 2508,
    "range": [
      2504,
      2508
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2509,
    "end": 2510,
    "range": [
      2509,
      2510
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2523,
    "end": 2528,
    "range": [
      2523,
      2528
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2528,
    "end": 2529,
    "range": [
      2528,
      2529
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2555,
    "end": 2556,
    "range": [
      2555,
      2556
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2563,
    "end": 2568,
    "range": [
      2563,
      2568
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2568,
    "end": 2569,
    "range": [
      2568,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2570,
    "end": 2576,
    "range": [
      2570,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2578,
    "end": 2580,
    "range": [
      2578,
      2580
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2581,
    "end": 2582,
    "range": [
      2581,
      2582
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2591,
    "end": 2593,
    "range": [
      2591,
      2593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2594,
    "end": 2595,
    "range": [
      2594,
      2595
    ]
  },
  {
    "type": "Identifier",
    "value": "isZero",
    "start": 2595,
    "end": 2601,
    "range": [
      2595,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2602,
    "end": 2607,
    "range": [
      2602,
      2607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2607,
    "end": 2608,
    "range": [
      2607,
      2608
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2608,
    "end": 2609,
    "range": [
      2608,
      2609
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2610,
    "end": 2611,
    "range": [
      2610,
      2611
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2624,
    "end": 2629,
    "range": [
      2624,
      2629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2629,
    "end": 2630,
    "range": [
      2629,
      2630
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2645,
    "end": 2646,
    "range": [
      2645,
      2646
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2655,
    "end": 2659,
    "range": [
      2655,
      2659
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2674,
    "end": 2679,
    "range": [
      2674,
      2679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2710,
    "end": 2712,
    "range": [
      2710,
      2712
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 2714,
    "end": 2725,
    "range": [
      2714,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2725,
    "end": 2726,
    "range": [
      2725,
      2726
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2726,
    "end": 2731,
    "range": [
      2726,
      2731
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2734,
    "end": 2735,
    "range": [
      2734,
      2735
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2748,
    "end": 2753,
    "range": [
      2748,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2778,
    "end": 2782,
    "range": [
      2778,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2797,
    "end": 2802,
    "range": [
      2797,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2802,
    "end": 2803,
    "range": [
      2802,
      2803
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2823,
    "end": 2824,
    "range": [
      2823,
      2824
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2829,
    "end": 2830,
    "range": [
      2829,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2837,
    "end": 2842,
    "range": [
      2837,
      2842
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2842,
    "end": 2843,
    "range": [
      2842,
      2843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2843,
    "end": 2844,
    "range": [
      2843,
      2844
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2845,
    "end": 2851,
    "range": [
      2845,
      2851
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2851,
    "end": 2852,
    "range": [
      2851,
      2852
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2853,
    "end": 2855,
    "range": [
      2853,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2866,
    "end": 2868,
    "range": [
      2866,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeZero",
    "start": 2870,
    "end": 2881,
    "range": [
      2870,
      2881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2882,
    "end": 2887,
    "range": [
      2882,
      2887
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2887,
    "end": 2888,
    "range": [
      2887,
      2888
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2888,
    "end": 2889,
    "range": [
      2888,
      2889
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2890,
    "end": 2891,
    "range": [
      2890,
      2891
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2904,
    "end": 2909,
    "range": [
      2904,
      2909
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2909,
    "end": 2910,
    "range": [
      2909,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2937,
    "end": 2938,
    "range": [
      2937,
      2938
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2947,
    "end": 2951,
    "range": [
      2947,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2966,
    "end": 2971,
    "range": [
      2966,
      2971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2971,
    "end": 2972,
    "range": [
      2971,
      2972
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3005,
    "end": 3006,
    "range": [
      3005,
      3006
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3006,
    "end": 3011,
    "range": [
      3006,
      3011
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3011,
    "end": 3012,
    "range": [
      3011,
      3012
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3013,
    "end": 3019,
    "range": [
      3013,
      3019
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3019,
    "end": 3020,
    "range": [
      3019,
      3020
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3020,
    "end": 3021,
    "range": [
      3020,
      3021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3021,
    "end": 3022,
    "range": [
      3021,
      3022
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3023,
    "end": 3025,
    "range": [
      3023,
      3025
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3036,
    "end": 3038,
    "range": [
      3036,
      3038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3039,
    "end": 3040,
    "range": [
      3039,
      3040
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmptyArray",
    "start": 3040,
    "end": 3052,
    "range": [
      3040,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3053,
    "end": 3058,
    "range": [
      3053,
      3058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3058,
    "end": 3059,
    "range": [
      3058,
      3059
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3059,
    "end": 3060,
    "range": [
      3059,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3061,
    "end": 3062,
    "range": [
      3061,
      3062
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3075,
    "end": 3080,
    "range": [
      3075,
      3080
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3080,
    "end": 3081,
    "range": [
      3080,
      3081
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3107,
    "end": 3111,
    "range": [
      3107,
      3111
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3126,
    "end": 3131,
    "range": [
      3126,
      3131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3131,
    "end": 3132,
    "range": [
      3131,
      3132
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3164,
    "end": 3166,
    "range": [
      3164,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 3168,
    "end": 3185,
    "range": [
      3168,
      3185
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3185,
    "end": 3186,
    "range": [
      3185,
      3186
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3186,
    "end": 3191,
    "range": [
      3186,
      3191
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3191,
    "end": 3192,
    "range": [
      3191,
      3192
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3192,
    "end": 3193,
    "range": [
      3192,
      3193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3194,
    "end": 3195,
    "range": [
      3194,
      3195
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3208,
    "end": 3213,
    "range": [
      3208,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3213,
    "end": 3214,
    "range": [
      3213,
      3214
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3230,
    "end": 3231,
    "range": [
      3230,
      3231
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3240,
    "end": 3244,
    "range": [
      3240,
      3244
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3245,
    "end": 3246,
    "range": [
      3245,
      3246
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3259,
    "end": 3264,
    "range": [
      3259,
      3264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3264,
    "end": 3265,
    "range": [
      3264,
      3265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3287,
    "end": 3288,
    "range": [
      3287,
      3288
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3293,
    "end": 3294,
    "range": [
      3293,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3301,
    "end": 3306,
    "range": [
      3301,
      3306
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 3306,
    "end": 3307,
    "range": [
      3306,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3309,
    "end": 3315,
    "range": [
      3309,
      3315
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3315,
    "end": 3316,
    "range": [
      3315,
      3316
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3316,
    "end": 3317,
    "range": [
      3316,
      3317
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3317,
    "end": 3318,
    "range": [
      3317,
      3318
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3319,
    "end": 3321,
    "range": [
      3319,
      3321
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3322,
    "end": 3323,
    "range": [
      3322,
      3323
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3332,
    "end": 3334,
    "range": [
      3332,
      3334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Identifier",
    "value": "isMaybeEmptyArray",
    "start": 3336,
    "end": 3353,
    "range": [
      3336,
      3353
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3353,
    "end": 3354,
    "range": [
      3353,
      3354
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3354,
    "end": 3359,
    "range": [
      3354,
      3359
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3360,
    "end": 3361,
    "range": [
      3360,
      3361
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3362,
    "end": 3363,
    "range": [
      3362,
      3363
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3376,
    "end": 3381,
    "range": [
      3376,
      3381
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3381,
    "end": 3382,
    "range": [
      3381,
      3382
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3410,
    "end": 3411,
    "range": [
      3410,
      3411
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3420,
    "end": 3424,
    "range": [
      3420,
      3424
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3425,
    "end": 3426,
    "range": [
      3425,
      3426
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3439,
    "end": 3444,
    "range": [
      3439,
      3444
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3467,
    "end": 3468,
    "range": [
      3467,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3474,
    "end": 3475,
    "range": [
      3474,
      3475
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3477,
    "end": 3478,
    "range": [
      3477,
      3478
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3502,
    "end": 3506,
    "range": [
      3502,
      3506
    ]
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3507,
    "end": 3518,
    "range": [
      3507,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 3521,
    "end": 3523,
    "range": [
      3521,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3524,
    "end": 3525,
    "range": [
      3524,
      3525
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3526,
    "end": 3530,
    "range": [
      3526,
      3530
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3531,
    "end": 3532,
    "range": [
      3531,
      3532
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3533,
    "end": 3542,
    "range": [
      3533,
      3542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3542,
    "end": 3543,
    "range": [
      3542,
      3543
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3545,
    "end": 3553,
    "range": [
      3545,
      3553
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 3554,
    "end": 3561,
    "range": [
      3554,
      3561
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3561,
    "end": 3562,
    "range": [
      3561,
      3562
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3562,
    "end": 3567,
    "range": [
      3562,
      3567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3567,
    "end": 3568,
    "range": [
      3567,
      3568
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3569,
    "end": 3575,
    "range": [
      3569,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3578,
    "end": 3589,
    "range": [
      3578,
      3589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3589,
    "end": 3590,
    "range": [
      3589,
      3590
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3590,
    "end": 3591,
    "range": [
      3590,
      3591
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3592,
    "end": 3597,
    "range": [
      3592,
      3597
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3598,
    "end": 3600,
    "range": [
      3598,
      3600
    ]
  },
  {
    "type": "Identifier",
    "value": "EmptyString",
    "start": 3601,
    "end": 3612,
    "range": [
      3601,
      3612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3613,
    "end": 3614,
    "range": [
      3613,
      3614
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3619,
    "end": 3625,
    "range": [
      3619,
      3625
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3626,
    "end": 3631,
    "range": [
      3626,
      3631
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3632,
    "end": 3635,
    "range": [
      3632,
      3635
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 3636,
    "end": 3638,
    "range": [
      3636,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3639,
    "end": 3641,
    "range": [
      3639,
      3641
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3642,
    "end": 3647,
    "range": [
      3642,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3648,
    "end": 3651,
    "range": [
      3648,
      3651
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3652,
    "end": 3656,
    "range": [
      3652,
      3656
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 3657,
    "end": 3659,
    "range": [
      3657,
      3659
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3660,
    "end": 3665,
    "range": [
      3660,
      3665
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3666,
    "end": 3669,
    "range": [
      3666,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3670,
    "end": 3679,
    "range": [
      3670,
      3679
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3679,
    "end": 3680,
    "range": [
      3679,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3681,
    "end": 3682,
    "range": [
      3681,
      3682
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3684,
    "end": 3687,
    "range": [
      3684,
      3687
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3688,
    "end": 3692,
    "range": [
      3688,
      3692
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3692,
    "end": 3693,
    "range": [
      3692,
      3693
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3694,
    "end": 3700,
    "range": [
      3694,
      3700
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3703,
    "end": 3707,
    "range": [
      3703,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3710,
    "end": 3719,
    "range": [
      3710,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3722,
    "end": 3724,
    "range": [
      3722,
      3724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Identifier",
    "value": "isEmpty",
    "start": 3726,
    "end": 3733,
    "range": [
      3726,
      3733
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3733,
    "end": 3734,
    "range": [
      3733,
      3734
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3734,
    "end": 3738,
    "range": [
      3734,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3738,
    "end": 3739,
    "range": [
      3738,
      3739
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3741,
    "end": 3742,
    "range": [
      3741,
      3742
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 3747,
    "end": 3751,
    "range": [
      3747,
      3751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3751,
    "end": 3752,
    "range": [
      3751,
      3752
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3769,
    "end": 3770,
    "range": [
      3769,
      3770
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3794,
    "end": 3801,
    "range": [
      3794,
      3801
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3802,
    "end": 3810,
    "range": [
      3802,
      3810
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3811,
    "end": 3817,
    "range": [
      3811,
      3817
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3817,
    "end": 3818,
    "range": [
      3817,
      3818
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3818,
    "end": 3819,
    "range": [
      3818,
      3819
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3820,
    "end": 3821,
    "range": [
      3820,
      3821
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3821,
    "end": 3826,
    "range": [
      3821,
      3826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3826,
    "end": 3827,
    "range": [
      3826,
      3827
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3828,
    "end": 3831,
    "range": [
      3828,
      3831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 3834,
    "end": 3841,
    "range": [
      3834,
      3841
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3842,
    "end": 3847,
    "range": [
      3842,
      3847
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 3848,
    "end": 3850,
    "range": [
      3848,
      3850
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3851,
    "end": 3852,
    "range": [
      3851,
      3852
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3854,
    "end": 3862,
    "range": [
      3854,
      3862
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 3863,
    "end": 3868,
    "range": [
      3863,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3868,
    "end": 3869,
    "range": [
      3868,
      3869
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3869,
    "end": 3872,
    "range": [
      3869,
      3872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3872,
    "end": 3873,
    "range": [
      3872,
      3873
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3874,
    "end": 3880,
    "range": [
      3874,
      3880
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3881,
    "end": 3882,
    "range": [
      3881,
      3882
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3883,
    "end": 3889,
    "range": [
      3883,
      3889
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3890,
    "end": 3891,
    "range": [
      3890,
      3891
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 3892,
    "end": 3899,
    "range": [
      3892,
      3899
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3899,
    "end": 3900,
    "range": [
      3899,
      3900
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3901,
    "end": 3902,
    "range": [
      3901,
      3902
    ]
  },
  {
    "type": "Identifier",
    "value": "assert",
    "start": 3907,
    "end": 3913,
    "range": [
      3907,
      3913
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3916,
    "end": 3917,
    "range": [
      3916,
      3917
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 3918,
    "end": 3924,
    "range": [
      3918,
      3924
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3924,
    "end": 3925,
    "range": [
      3924,
      3925
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3925,
    "end": 3926,
    "range": [
      3925,
      3926
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3926,
    "end": 3929,
    "range": [
      3926,
      3929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3929,
    "end": 3930,
    "range": [
      3929,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3930,
    "end": 3931,
    "range": [
      3930,
      3931
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 3936,
    "end": 3939,
    "range": [
      3936,
      3939
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3939,
    "end": 3940,
    "range": [
      3939,
      3940
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3956,
    "end": 3957,
    "range": [
      3956,
      3957
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3981,
    "end": 3989,
    "range": [
      3981,
      3989
    ]
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 3990,
    "end": 3996,
    "range": [
      3990,
      3996
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3996,
    "end": 3997,
    "range": [
      3996,
      3997
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3997,
    "end": 3998,
    "range": [
      3997,
      3998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3998,
    "end": 3999,
    "range": [
      3998,
      3999
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4000,
    "end": 4007,
    "range": [
      4000,
      4007
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4007,
    "end": 4008,
    "range": [
      4007,
      4008
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4008,
    "end": 4009,
    "range": [
      4008,
      4009
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4010,
    "end": 4011,
    "range": [
      4010,
      4011
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4012,
    "end": 4014,
    "range": [
      4012,
      4014
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4015,
    "end": 4016,
    "range": [
      4015,
      4016
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4016,
    "end": 4022,
    "range": [
      4016,
      4022
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4023,
    "end": 4024,
    "range": [
      4023,
      4024
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4025,
    "end": 4026,
    "range": [
      4025,
      4026
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4026,
    "end": 4027,
    "range": [
      4026,
      4027
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4031,
    "end": 4037,
    "range": [
      4031,
      4037
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4038,
    "end": 4044,
    "range": [
      4038,
      4044
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4045,
    "end": 4046,
    "range": [
      4045,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4047,
    "end": 4050,
    "range": [
      4047,
      4050
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4051,
    "end": 4059,
    "range": [
      4051,
      4059
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4060,
    "end": 4062,
    "range": [
      4060,
      4062
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4063,
    "end": 4064,
    "range": [
      4063,
      4064
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4065,
    "end": 4068,
    "range": [
      4065,
      4068
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4069,
    "end": 4070,
    "range": [
      4069,
      4070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4070,
    "end": 4071,
    "range": [
      4070,
      4071
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4072,
    "end": 4073,
    "range": [
      4072,
      4073
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4075,
    "end": 4083,
    "range": [
      4075,
      4083
    ]
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 4084,
    "end": 4090,
    "range": [
      4084,
      4090
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4090,
    "end": 4091,
    "range": [
      4090,
      4091
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4092,
    "end": 4093,
    "range": [
      4092,
      4093
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4094,
    "end": 4101,
    "range": [
      4094,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4102,
    "end": 4103,
    "range": [
      4102,
      4103
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4104,
    "end": 4105,
    "range": [
      4104,
      4105
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4106,
    "end": 4108,
    "range": [
      4106,
      4108
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4110,
    "end": 4117,
    "range": [
      4110,
      4117
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4120,
    "end": 4121,
    "range": [
      4120,
      4121
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4121,
    "end": 4122,
    "range": [
      4121,
      4122
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4123,
    "end": 4124,
    "range": [
      4123,
      4124
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4126,
    "end": 4132,
    "range": [
      4126,
      4132
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4133,
    "end": 4134,
    "range": [
      4133,
      4134
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4135,
    "end": 4138,
    "range": [
      4135,
      4138
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4139,
    "end": 4146,
    "range": [
      4139,
      4146
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4147,
    "end": 4149,
    "range": [
      4147,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4150,
    "end": 4151,
    "range": [
      4150,
      4151
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4152,
    "end": 4155,
    "range": [
      4152,
      4155
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4156,
    "end": 4157,
    "range": [
      4156,
      4157
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4157,
    "end": 4158,
    "range": [
      4157,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4159,
    "end": 4160,
    "range": [
      4159,
      4160
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4162,
    "end": 4170,
    "range": [
      4162,
      4170
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 4171,
    "end": 4176,
    "range": [
      4171,
      4176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4176,
    "end": 4177,
    "range": [
      4176,
      4177
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4177,
    "end": 4178,
    "range": [
      4177,
      4178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4180,
    "end": 4187,
    "range": [
      4180,
      4187
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4187,
    "end": 4188,
    "range": [
      4187,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4192,
    "end": 4194,
    "range": [
      4192,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4196,
    "end": 4202,
    "range": [
      4196,
      4202
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4205,
    "end": 4208,
    "range": [
      4205,
      4208
    ]
  },
  {
    "type": "String",
    "value": "\"string\"",
    "start": 4209,
    "end": 4217,
    "range": [
      4209,
      4217
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4218,
    "end": 4220,
    "range": [
      4218,
      4220
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4223,
    "end": 4226,
    "range": [
      4223,
      4226
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4228,
    "end": 4229,
    "range": [
      4228,
      4229
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4230,
    "end": 4231,
    "range": [
      4230,
      4231
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4234,
    "end": 4235,
    "range": [
      4234,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4254,
    "end": 4256,
    "range": [
      4254,
      4256
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4257,
    "end": 4258,
    "range": [
      4257,
      4258
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4260,
    "end": 4263,
    "range": [
      4260,
      4263
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 4264,
    "end": 4271,
    "range": [
      4264,
      4271
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4272,
    "end": 4274,
    "range": [
      4272,
      4274
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4275,
    "end": 4276,
    "range": [
      4275,
      4276
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4277,
    "end": 4280,
    "range": [
      4277,
      4280
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4284,
    "end": 4285,
    "range": [
      4284,
      4285
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4289,
    "end": 4290,
    "range": [
      4289,
      4290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4290,
    "end": 4291,
    "range": [
      4290,
      4291
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4310,
    "end": 4311,
    "range": [
      4310,
      4311
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4313,
    "end": 4314,
    "range": [
      4313,
      4314
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4316,
    "end": 4318,
    "range": [
      4316,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4319,
    "end": 4320,
    "range": [
      4319,
      4320
    ]
  },
  {
    "type": "Identifier",
    "value": "check1",
    "start": 4320,
    "end": 4326,
    "range": [
      4320,
      4326
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4326,
    "end": 4327,
    "range": [
      4326,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4328,
    "end": 4329,
    "range": [
      4328,
      4329
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4329,
    "end": 4330,
    "range": [
      4329,
      4330
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4331,
    "end": 4332,
    "range": [
      4331,
      4332
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4335,
    "end": 4336,
    "range": [
      4335,
      4336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4336,
    "end": 4337,
    "range": [
      4336,
      4337
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4355,
    "end": 4357,
    "range": [
      4355,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4358,
    "end": 4359,
    "range": [
      4358,
      4359
    ]
  },
  {
    "type": "Identifier",
    "value": "check2",
    "start": 4359,
    "end": 4365,
    "range": [
      4359,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4368,
    "end": 4369,
    "range": [
      4368,
      4369
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4370,
    "end": 4371,
    "range": [
      4370,
      4371
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4375,
    "end": 4376,
    "range": [
      4375,
      4376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4376,
    "end": 4377,
    "range": [
      4376,
      4377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4399,
    "end": 4400,
    "range": [
      4399,
      4400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4401,
    "end": 4402,
    "range": [
      4401,
      4402
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4426,
    "end": 4434,
    "range": [
      4426,
      4434
    ]
  },
  {
    "type": "Identifier",
    "value": "assertRelationIsNullOrStringArray",
    "start": 4435,
    "end": 4468,
    "range": [
      4435,
      4468
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4469,
    "end": 4470,
    "range": [
      4469,
      4470
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4470,
    "end": 4471,
    "range": [
      4470,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4472,
    "end": 4473,
    "range": [
      4472,
      4473
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4473,
    "end": 4479,
    "range": [
      4473,
      4479
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4480,
    "end": 4481,
    "range": [
      4480,
      4481
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4482,
    "end": 4488,
    "range": [
      4482,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4490,
    "end": 4491,
    "range": [
      4490,
      4491
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4492,
    "end": 4493,
    "range": [
      4492,
      4493
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4494,
    "end": 4498,
    "range": [
      4494,
      4498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4499,
    "end": 4500,
    "range": [
      4499,
      4500
    ]
  },
  {
    "type": "Identifier",
    "value": "asserts",
    "start": 4501,
    "end": 4508,
    "range": [
      4501,
      4508
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 4509,
    "end": 4510,
    "range": [
      4509,
      4510
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4511,
    "end": 4513,
    "range": [
      4511,
      4513
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4514,
    "end": 4520,
    "range": [
      4514,
      4520
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4521,
    "end": 4522,
    "range": [
      4521,
      4522
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4523,
    "end": 4524,
    "range": [
      4523,
      4524
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4525,
    "end": 4529,
    "range": [
      4525,
      4529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4531,
    "end": 4532,
    "range": [
      4531,
      4532
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4534,
    "end": 4542,
    "range": [
      4534,
      4542
    ]
  },
  {
    "type": "Identifier",
    "value": "f1x",
    "start": 4543,
    "end": 4546,
    "range": [
      4543,
      4546
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4546,
    "end": 4547,
    "range": [
      4546,
      4547
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4547,
    "end": 4550,
    "range": [
      4547,
      4550
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4552,
    "end": 4553,
    "range": [
      4552,
      4553
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4553,
    "end": 4559,
    "range": [
      4553,
      4559
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4560,
    "end": 4561,
    "range": [
      4560,
      4561
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4562,
    "end": 4568,
    "range": [
      4562,
      4568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4568,
    "end": 4569,
    "range": [
      4568,
      4569
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4569,
    "end": 4570,
    "range": [
      4569,
      4570
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4570,
    "end": 4571,
    "range": [
      4570,
      4571
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4572,
    "end": 4573,
    "range": [
      4572,
      4573
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4574,
    "end": 4578,
    "range": [
      4574,
      4578
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4578,
    "end": 4579,
    "range": [
      4578,
      4579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4580,
    "end": 4581,
    "range": [
      4580,
      4581
    ]
  },
  {
    "type": "Identifier",
    "value": "assertRelationIsNullOrStringArray",
    "start": 4586,
    "end": 4619,
    "range": [
      4586,
      4619
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4619,
    "end": 4620,
    "range": [
      4619,
      4620
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4620,
    "end": 4623,
    "range": [
      4620,
      4623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4623,
    "end": 4624,
    "range": [
      4623,
      4624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4624,
    "end": 4625,
    "range": [
      4624,
      4625
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 4630,
    "end": 4633,
    "range": [
      4630,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4655,
    "end": 4656,
    "range": [
      4655,
      4656
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4680,
    "end": 4684,
    "range": [
      4680,
      4684
    ]
  },
  {
    "type": "Identifier",
    "value": "MyDiscriminatedUnion",
    "start": 4685,
    "end": 4705,
    "range": [
      4685,
      4705
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4706,
    "end": 4707,
    "range": [
      4706,
      4707
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4708,
    "end": 4709,
    "range": [
      4708,
      4709
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4710,
    "end": 4714,
    "range": [
      4710,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4716,
    "end": 4719,
    "range": [
      4716,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4719,
    "end": 4720,
    "range": [
      4719,
      4720
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 4721,
    "end": 4726,
    "range": [
      4721,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4726,
    "end": 4727,
    "range": [
      4726,
      4727
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4728,
    "end": 4734,
    "range": [
      4728,
      4734
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4735,
    "end": 4736,
    "range": [
      4735,
      4736
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4737,
    "end": 4738,
    "range": [
      4737,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4739,
    "end": 4740,
    "range": [
      4739,
      4740
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4741,
    "end": 4745,
    "range": [
      4741,
      4745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4745,
    "end": 4746,
    "range": [
      4745,
      4746
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 4747,
    "end": 4750,
    "range": [
      4747,
      4750
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4750,
    "end": 4751,
    "range": [
      4750,
      4751
    ]
  },
  {
    "type": "Identifier",
    "value": "bProp",
    "start": 4752,
    "end": 4757,
    "range": [
      4752,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4759,
    "end": 4765,
    "range": [
      4759,
      4765
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4766,
    "end": 4767,
    "range": [
      4766,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4767,
    "end": 4768,
    "range": [
      4767,
      4768
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4770,
    "end": 4777,
    "range": [
      4770,
      4777
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4778,
    "end": 4786,
    "range": [
      4778,
      4786
    ]
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 4787,
    "end": 4809,
    "range": [
      4787,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4809,
    "end": 4810,
    "range": [
      4809,
      4810
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4810,
    "end": 4814,
    "range": [
      4810,
      4814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4814,
    "end": 4815,
    "range": [
      4814,
      4815
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4816,
    "end": 4823,
    "range": [
      4816,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4823,
    "end": 4824,
    "range": [
      4823,
      4824
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4824,
    "end": 4825,
    "range": [
      4824,
      4825
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 4826,
    "end": 4830,
    "range": [
      4826,
      4830
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 4831,
    "end": 4833,
    "range": [
      4831,
      4833
    ]
  },
  {
    "type": "Identifier",
    "value": "MyDiscriminatedUnion",
    "start": 4834,
    "end": 4854,
    "range": [
      4834,
      4854
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4854,
    "end": 4855,
    "range": [
      4854,
      4855
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4857,
    "end": 4864,
    "range": [
      4857,
      4864
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4865,
    "end": 4870,
    "range": [
      4865,
      4870
    ]
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 4871,
    "end": 4878,
    "range": [
      4871,
      4878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4878,
    "end": 4879,
    "range": [
      4878,
      4879
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4880,
    "end": 4887,
    "range": [
      4880,
      4887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4887,
    "end": 4888,
    "range": [
      4887,
      4888
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4889,
    "end": 4896,
    "range": [
      4889,
      4896
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4897,
    "end": 4902,
    "range": [
      4897,
      4902
    ]
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 4903,
    "end": 4909,
    "range": [
      4903,
      4909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4909,
    "end": 4910,
    "range": [
      4909,
      4910
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4911,
    "end": 4917,
    "range": [
      4911,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4917,
    "end": 4918,
    "range": [
      4917,
      4918
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4918,
    "end": 4924,
    "range": [
      4918,
      4924
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4924,
    "end": 4925,
    "range": [
      4924,
      4925
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4926,
    "end": 4929,
    "range": [
      4926,
      4929
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4929,
    "end": 4930,
    "range": [
      4929,
      4930
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4931,
    "end": 4932,
    "range": [
      4931,
      4932
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4933,
    "end": 4942,
    "range": [
      4933,
      4942
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4942,
    "end": 4943,
    "range": [
      4942,
      4943
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4944,
    "end": 4951,
    "range": [
      4944,
      4951
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4952,
    "end": 4957,
    "range": [
      4952,
      4957
    ]
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 4958,
    "end": 4970,
    "range": [
      4958,
      4970
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4970,
    "end": 4971,
    "range": [
      4970,
      4971
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 4972,
    "end": 4978,
    "range": [
      4972,
      4978
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4978,
    "end": 4979,
    "range": [
      4978,
      4979
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4979,
    "end": 4985,
    "range": [
      4979,
      4985
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4985,
    "end": 4986,
    "range": [
      4985,
      4986
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4987,
    "end": 4990,
    "range": [
      4987,
      4990
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4990,
    "end": 4991,
    "range": [
      4990,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4992,
    "end": 4993,
    "range": [
      4992,
      4993
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4994,
    "end": 5003,
    "range": [
      4994,
      5003
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5004,
    "end": 5005,
    "range": [
      5004,
      5005
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 5006,
    "end": 5013,
    "range": [
      5006,
      5013
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5013,
    "end": 5014,
    "range": [
      5013,
      5014
    ]
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5016,
    "end": 5038,
    "range": [
      5016,
      5038
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5038,
    "end": 5039,
    "range": [
      5038,
      5039
    ]
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5039,
    "end": 5046,
    "range": [
      5039,
      5046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5046,
    "end": 5047,
    "range": [
      5046,
      5047
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5048,
    "end": 5050,
    "range": [
      5048,
      5050
    ]
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5051,
    "end": 5058,
    "range": [
      5051,
      5058
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5058,
    "end": 5059,
    "range": [
      5058,
      5059
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5059,
    "end": 5063,
    "range": [
      5059,
      5063
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5064,
    "end": 5067,
    "range": [
      5064,
      5067
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5068,
    "end": 5071,
    "range": [
      5068,
      5071
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5072,
    "end": 5074,
    "range": [
      5072,
      5074
    ]
  },
  {
    "type": "Identifier",
    "value": "working",
    "start": 5075,
    "end": 5082,
    "range": [
      5075,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5082,
    "end": 5083,
    "range": [
      5082,
      5083
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5083,
    "end": 5088,
    "range": [
      5083,
      5088
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5088,
    "end": 5089,
    "range": [
      5088,
      5089
    ]
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5090,
    "end": 5112,
    "range": [
      5090,
      5112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5112,
    "end": 5113,
    "range": [
      5112,
      5113
    ]
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5113,
    "end": 5119,
    "range": [
      5113,
      5119
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5119,
    "end": 5120,
    "range": [
      5119,
      5120
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5121,
    "end": 5123,
    "range": [
      5121,
      5123
    ]
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5124,
    "end": 5130,
    "range": [
      5124,
      5130
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5130,
    "end": 5131,
    "range": [
      5130,
      5131
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5131,
    "end": 5135,
    "range": [
      5131,
      5135
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5136,
    "end": 5139,
    "range": [
      5136,
      5139
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5140,
    "end": 5143,
    "range": [
      5140,
      5143
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5144,
    "end": 5146,
    "range": [
      5144,
      5146
    ]
  },
  {
    "type": "Identifier",
    "value": "broken",
    "start": 5147,
    "end": 5153,
    "range": [
      5147,
      5153
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5153,
    "end": 5154,
    "range": [
      5153,
      5154
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5154,
    "end": 5159,
    "range": [
      5154,
      5159
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5159,
    "end": 5160,
    "range": [
      5159,
      5160
    ]
  },
  {
    "type": "Identifier",
    "value": "isMyDiscriminatedUnion",
    "start": 5161,
    "end": 5183,
    "range": [
      5161,
      5183
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5183,
    "end": 5184,
    "range": [
      5183,
      5184
    ]
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5184,
    "end": 5196,
    "range": [
      5184,
      5196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5196,
    "end": 5197,
    "range": [
      5196,
      5197
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5198,
    "end": 5200,
    "range": [
      5198,
      5200
    ]
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5201,
    "end": 5213,
    "range": [
      5201,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5213,
    "end": 5214,
    "range": [
      5213,
      5214
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5214,
    "end": 5218,
    "range": [
      5214,
      5218
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5219,
    "end": 5222,
    "range": [
      5219,
      5222
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 5223,
    "end": 5226,
    "range": [
      5223,
      5226
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5227,
    "end": 5229,
    "range": [
      5227,
      5229
    ]
  },
  {
    "type": "Identifier",
    "value": "workingAgain",
    "start": 5230,
    "end": 5242,
    "range": [
      5230,
      5242
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5242,
    "end": 5243,
    "range": [
      5242,
      5243
    ]
  },
  {
    "type": "Identifier",
    "value": "aProp",
    "start": 5243,
    "end": 5248,
    "range": [
      5243,
      5248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5248,
    "end": 5249,
    "range": [
      5248,
      5249
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5273,
    "end": 5277,
    "range": [
      5273,
      5277
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5278,
    "end": 5283,
    "range": [
      5278,
      5283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5284,
    "end": 5285,
    "range": [
      5284,
      5285
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5290,
    "end": 5291,
    "range": [
      5290,
      5291
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5292,
    "end": 5293,
    "range": [
      5292,
      5293
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5294,
    "end": 5298,
    "range": [
      5294,
      5298
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5298,
    "end": 5299,
    "range": [
      5298,
      5299
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5300,
    "end": 5303,
    "range": [
      5300,
      5303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5303,
    "end": 5304,
    "range": [
      5303,
      5304
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5305,
    "end": 5312,
    "range": [
      5305,
      5312
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5312,
    "end": 5313,
    "range": [
      5312,
      5313
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5314,
    "end": 5315,
    "range": [
      5314,
      5315
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5316,
    "end": 5317,
    "range": [
      5316,
      5317
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5322,
    "end": 5323,
    "range": [
      5322,
      5323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5324,
    "end": 5325,
    "range": [
      5324,
      5325
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5326,
    "end": 5330,
    "range": [
      5326,
      5330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5330,
    "end": 5331,
    "range": [
      5330,
      5331
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5332,
    "end": 5335,
    "range": [
      5332,
      5335
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5335,
    "end": 5336,
    "range": [
      5335,
      5336
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5337,
    "end": 5344,
    "range": [
      5337,
      5344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5344,
    "end": 5345,
    "range": [
      5344,
      5345
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5346,
    "end": 5347,
    "range": [
      5346,
      5347
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5348,
    "end": 5349,
    "range": [
      5348,
      5349
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5354,
    "end": 5355,
    "range": [
      5354,
      5355
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5358,
    "end": 5362,
    "range": [
      5358,
      5362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 5364,
    "end": 5367,
    "range": [
      5364,
      5367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5368,
    "end": 5369,
    "range": [
      5368,
      5369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5369,
    "end": 5370,
    "range": [
      5369,
      5370
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5372,
    "end": 5380,
    "range": [
      5372,
      5380
    ]
  },
  {
    "type": "Identifier",
    "value": "example1",
    "start": 5381,
    "end": 5389,
    "range": [
      5381,
      5389
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5389,
    "end": 5390,
    "range": [
      5389,
      5390
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5390,
    "end": 5395,
    "range": [
      5390,
      5395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5395,
    "end": 5396,
    "range": [
      5395,
      5396
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5397,
    "end": 5402,
    "range": [
      5397,
      5402
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5402,
    "end": 5403,
    "range": [
      5402,
      5403
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5403,
    "end": 5404,
    "range": [
      5403,
      5404
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5405,
    "end": 5406,
    "range": [
      5405,
      5406
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5407,
    "end": 5411,
    "range": [
      5407,
      5411
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5413,
    "end": 5416,
    "range": [
      5413,
      5416
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5416,
    "end": 5417,
    "range": [
      5416,
      5417
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5418,
    "end": 5425,
    "range": [
      5418,
      5425
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5425,
    "end": 5426,
    "range": [
      5425,
      5426
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5427,
    "end": 5428,
    "range": [
      5427,
      5428
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5429,
    "end": 5430,
    "range": [
      5429,
      5430
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5431,
    "end": 5432,
    "range": [
      5431,
      5432
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5433,
    "end": 5437,
    "range": [
      5433,
      5437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5444,
    "end": 5446,
    "range": [
      5444,
      5446
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5447,
    "end": 5448,
    "range": [
      5447,
      5448
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5448,
    "end": 5453,
    "range": [
      5448,
      5453
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5453,
    "end": 5454,
    "range": [
      5453,
      5454
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5454,
    "end": 5458,
    "range": [
      5454,
      5458
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5459,
    "end": 5462,
    "range": [
      5459,
      5462
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5463,
    "end": 5466,
    "range": [
      5463,
      5466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5466,
    "end": 5467,
    "range": [
      5466,
      5467
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5468,
    "end": 5469,
    "range": [
      5468,
      5469
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5478,
    "end": 5484,
    "range": [
      5478,
      5484
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5485,
    "end": 5489,
    "range": [
      5485,
      5489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5495,
    "end": 5496,
    "range": [
      5495,
      5496
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5501,
    "end": 5503,
    "range": [
      5501,
      5503
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5504,
    "end": 5505,
    "range": [
      5504,
      5505
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5505,
    "end": 5510,
    "range": [
      5505,
      5510
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5510,
    "end": 5511,
    "range": [
      5510,
      5511
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5511,
    "end": 5518,
    "range": [
      5511,
      5518
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5519,
    "end": 5522,
    "range": [
      5519,
      5522
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5523,
    "end": 5524,
    "range": [
      5523,
      5524
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5524,
    "end": 5525,
    "range": [
      5524,
      5525
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5526,
    "end": 5527,
    "range": [
      5526,
      5527
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5536,
    "end": 5542,
    "range": [
      5536,
      5542
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5543,
    "end": 5547,
    "range": [
      5543,
      5547
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5547,
    "end": 5548,
    "range": [
      5547,
      5548
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5553,
    "end": 5554,
    "range": [
      5553,
      5554
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5559,
    "end": 5565,
    "range": [
      5559,
      5565
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5566,
    "end": 5571,
    "range": [
      5566,
      5571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5571,
    "end": 5572,
    "range": [
      5571,
      5572
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5573,
    "end": 5574,
    "range": [
      5573,
      5574
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5576,
    "end": 5584,
    "range": [
      5576,
      5584
    ]
  },
  {
    "type": "Identifier",
    "value": "example2",
    "start": 5585,
    "end": 5593,
    "range": [
      5585,
      5593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5593,
    "end": 5594,
    "range": [
      5593,
      5594
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5594,
    "end": 5599,
    "range": [
      5594,
      5599
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5599,
    "end": 5600,
    "range": [
      5599,
      5600
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5601,
    "end": 5606,
    "range": [
      5601,
      5606
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5606,
    "end": 5607,
    "range": [
      5606,
      5607
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5607,
    "end": 5608,
    "range": [
      5607,
      5608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5609,
    "end": 5610,
    "range": [
      5609,
      5610
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5611,
    "end": 5615,
    "range": [
      5611,
      5615
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5615,
    "end": 5616,
    "range": [
      5615,
      5616
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5617,
    "end": 5620,
    "range": [
      5617,
      5620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5620,
    "end": 5621,
    "range": [
      5620,
      5621
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5622,
    "end": 5629,
    "range": [
      5622,
      5629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5629,
    "end": 5630,
    "range": [
      5629,
      5630
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5631,
    "end": 5632,
    "range": [
      5631,
      5632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5633,
    "end": 5634,
    "range": [
      5633,
      5634
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5635,
    "end": 5636,
    "range": [
      5635,
      5636
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5637,
    "end": 5641,
    "range": [
      5637,
      5641
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5642,
    "end": 5643,
    "range": [
      5642,
      5643
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5648,
    "end": 5650,
    "range": [
      5648,
      5650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5651,
    "end": 5652,
    "range": [
      5651,
      5652
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5652,
    "end": 5657,
    "range": [
      5652,
      5657
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5657,
    "end": 5658,
    "range": [
      5657,
      5658
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5658,
    "end": 5662,
    "range": [
      5658,
      5662
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5663,
    "end": 5666,
    "range": [
      5663,
      5666
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5667,
    "end": 5670,
    "range": [
      5667,
      5670
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5670,
    "end": 5671,
    "range": [
      5670,
      5671
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5672,
    "end": 5673,
    "range": [
      5672,
      5673
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5682,
    "end": 5688,
    "range": [
      5682,
      5688
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5689,
    "end": 5693,
    "range": [
      5689,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5699,
    "end": 5700,
    "range": [
      5699,
      5700
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5705,
    "end": 5707,
    "range": [
      5705,
      5707
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5708,
    "end": 5709,
    "range": [
      5708,
      5709
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5709,
    "end": 5714,
    "range": [
      5709,
      5714
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5714,
    "end": 5715,
    "range": [
      5714,
      5715
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5715,
    "end": 5719,
    "range": [
      5715,
      5719
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5720,
    "end": 5723,
    "range": [
      5720,
      5723
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5724,
    "end": 5727,
    "range": [
      5724,
      5727
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5728,
    "end": 5730,
    "range": [
      5728,
      5730
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5731,
    "end": 5736,
    "range": [
      5731,
      5736
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5736,
    "end": 5737,
    "range": [
      5736,
      5737
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5737,
    "end": 5744,
    "range": [
      5737,
      5744
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5745,
    "end": 5748,
    "range": [
      5745,
      5748
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5749,
    "end": 5750,
    "range": [
      5749,
      5750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5750,
    "end": 5751,
    "range": [
      5750,
      5751
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5752,
    "end": 5753,
    "range": [
      5752,
      5753
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5762,
    "end": 5768,
    "range": [
      5762,
      5768
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5769,
    "end": 5773,
    "range": [
      5769,
      5773
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5773,
    "end": 5774,
    "range": [
      5773,
      5774
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5779,
    "end": 5780,
    "range": [
      5779,
      5780
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5785,
    "end": 5791,
    "range": [
      5785,
      5791
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5792,
    "end": 5797,
    "range": [
      5792,
      5797
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5797,
    "end": 5798,
    "range": [
      5797,
      5798
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5799,
    "end": 5800,
    "range": [
      5799,
      5800
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5802,
    "end": 5810,
    "range": [
      5802,
      5810
    ]
  },
  {
    "type": "Identifier",
    "value": "example3",
    "start": 5811,
    "end": 5819,
    "range": [
      5811,
      5819
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5819,
    "end": 5820,
    "range": [
      5819,
      5820
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5820,
    "end": 5825,
    "range": [
      5820,
      5825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5825,
    "end": 5826,
    "range": [
      5825,
      5826
    ]
  },
  {
    "type": "Identifier",
    "value": "Union",
    "start": 5827,
    "end": 5832,
    "range": [
      5827,
      5832
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5832,
    "end": 5833,
    "range": [
      5832,
      5833
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5833,
    "end": 5834,
    "range": [
      5833,
      5834
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5835,
    "end": 5836,
    "range": [
      5835,
      5836
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5837,
    "end": 5841,
    "range": [
      5837,
      5841
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5841,
    "end": 5842,
    "range": [
      5841,
      5842
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5843,
    "end": 5846,
    "range": [
      5843,
      5846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5846,
    "end": 5847,
    "range": [
      5846,
      5847
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5848,
    "end": 5855,
    "range": [
      5848,
      5855
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5855,
    "end": 5856,
    "range": [
      5855,
      5856
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5857,
    "end": 5858,
    "range": [
      5857,
      5858
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5859,
    "end": 5860,
    "range": [
      5859,
      5860
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5861,
    "end": 5862,
    "range": [
      5861,
      5862
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5863,
    "end": 5867,
    "range": [
      5863,
      5867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5868,
    "end": 5869,
    "range": [
      5868,
      5869
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5874,
    "end": 5876,
    "range": [
      5874,
      5876
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5877,
    "end": 5878,
    "range": [
      5877,
      5878
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5878,
    "end": 5883,
    "range": [
      5878,
      5883
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5883,
    "end": 5884,
    "range": [
      5883,
      5884
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5884,
    "end": 5888,
    "range": [
      5884,
      5888
    ]
  },
  {
    "type": "Punctuator",
    "value": "!==",
    "start": 5889,
    "end": 5892,
    "range": [
      5889,
      5892
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 5893,
    "end": 5896,
    "range": [
      5893,
      5896
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5896,
    "end": 5897,
    "range": [
      5896,
      5897
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5898,
    "end": 5899,
    "range": [
      5898,
      5899
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5908,
    "end": 5914,
    "range": [
      5908,
      5914
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5915,
    "end": 5919,
    "range": [
      5915,
      5919
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5919,
    "end": 5920,
    "range": [
      5919,
      5920
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5925,
    "end": 5926,
    "range": [
      5925,
      5926
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5931,
    "end": 5933,
    "range": [
      5931,
      5933
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5934,
    "end": 5935,
    "range": [
      5934,
      5935
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5935,
    "end": 5940,
    "range": [
      5935,
      5940
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5940,
    "end": 5941,
    "range": [
      5940,
      5941
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5941,
    "end": 5945,
    "range": [
      5941,
      5945
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 5946,
    "end": 5948,
    "range": [
      5946,
      5948
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5949,
    "end": 5954,
    "range": [
      5949,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5954,
    "end": 5955,
    "range": [
      5954,
      5955
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 5955,
    "end": 5962,
    "range": [
      5955,
      5962
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 5963,
    "end": 5966,
    "range": [
      5963,
      5966
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5967,
    "end": 5968,
    "range": [
      5967,
      5968
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5968,
    "end": 5969,
    "range": [
      5968,
      5969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5970,
    "end": 5971,
    "range": [
      5970,
      5971
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 5980,
    "end": 5986,
    "range": [
      5980,
      5986
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 5987,
    "end": 5991,
    "range": [
      5987,
      5991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5991,
    "end": 5992,
    "range": [
      5991,
      5992
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5997,
    "end": 5998,
    "range": [
      5997,
      5998
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6003,
    "end": 6009,
    "range": [
      6003,
      6009
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 6010,
    "end": 6015,
    "range": [
      6010,
      6015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6015,
    "end": 6016,
    "range": [
      6015,
      6016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6017,
    "end": 6018,
    "range": [
      6017,
      6018
    ]
  }
]
```
