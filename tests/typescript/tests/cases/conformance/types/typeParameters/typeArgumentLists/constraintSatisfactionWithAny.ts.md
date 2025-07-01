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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 105
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
              "start": 106,
              "end": 107
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 122
              },
              "typeArguments": null,
              "start": 116,
              "end": 122
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 106,
            "end": 122
          }
        ],
        "start": 105,
        "end": 123
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
                "start": 127,
                "end": 128
              },
              "typeArguments": null,
              "start": 127,
              "end": 128
            },
            "start": 125,
            "end": 128
          },
          "start": 124,
          "end": 128
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
            "start": 131,
            "end": 132
          },
          "typeArguments": null,
          "start": 131,
          "end": 132
        },
        "start": 129,
        "end": 132
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
              "start": 142,
              "end": 146
            },
            "start": 135,
            "end": 147
          }
        ],
        "start": 133,
        "end": 149
      },
      "expression": false,
      "start": 93,
      "end": 149
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 163
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
              "start": 164,
              "end": 165
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 176,
                    "end": 177
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 179,
                      "end": 185
                    },
                    "start": 177,
                    "end": 185
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 176,
                  "end": 185
                }
              ],
              "start": 174,
              "end": 187
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 164,
            "end": 187
          }
        ],
        "start": 163,
        "end": 188
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
                "start": 192,
                "end": 193
              },
              "typeArguments": null,
              "start": 192,
              "end": 193
            },
            "start": 190,
            "end": 193
          },
          "start": 189,
          "end": 193
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
            "start": 196,
            "end": 197
          },
          "typeArguments": null,
          "start": 196,
          "end": 197
        },
        "start": 194,
        "end": 197
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
              "start": 207,
              "end": 211
            },
            "start": 200,
            "end": 212
          }
        ],
        "start": 198,
        "end": 214
      },
      "expression": false,
      "start": 150,
      "end": 214
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 281,
        "end": 285
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
              "start": 286,
              "end": 287
            },
            "constraint": {
              "type": "TSFunctionType",
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
                      "start": 297,
                      "end": 298
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 297,
                    "end": 298
                  }
                ],
                "start": 296,
                "end": 299
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
                        "start": 303,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 303,
                      "end": 304
                    },
                    "start": 301,
                    "end": 304
                  },
                  "start": 300,
                  "end": 304
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 309,
                  "end": 313
                },
                "start": 306,
                "end": 313
              },
              "start": 296,
              "end": 313
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 286,
            "end": 313
          }
        ],
        "start": 285,
        "end": 314
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
                "start": 318,
                "end": 319
              },
              "typeArguments": null,
              "start": 318,
              "end": 319
            },
            "start": 316,
            "end": 319
          },
          "start": 315,
          "end": 319
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
            "start": 322,
            "end": 323
          },
          "typeArguments": null,
          "start": 322,
          "end": 323
        },
        "start": 320,
        "end": 323
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
              "start": 333,
              "end": 337
            },
            "start": 326,
            "end": 338
          }
        ],
        "start": 324,
        "end": 340
      },
      "expression": false,
      "start": 272,
      "end": 340
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
            "start": 345,
            "end": 346
          },
          "init": null,
          "definite": false,
          "start": 345,
          "end": 346
        }
      ],
      "declare": false,
      "start": 341,
      "end": 347
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 351
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 353
          }
        ],
        "optional": false,
        "start": 348,
        "end": 354
      },
      "directive": null,
      "start": 348,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 360
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 362
          }
        ],
        "optional": false,
        "start": 356,
        "end": 363
      },
      "directive": null,
      "start": 356,
      "end": 364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 376,
          "end": 380
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 382
          }
        ],
        "optional": false,
        "start": 376,
        "end": 383
      },
      "directive": null,
      "start": 376,
      "end": 384
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 393,
                "end": 399
              },
              "start": 391,
              "end": 399
            },
            "start": 390,
            "end": 399
          },
          "init": null,
          "definite": false,
          "start": 390,
          "end": 399
        }
      ],
      "declare": false,
      "start": 386,
      "end": 400
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 401,
          "end": 404
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 405,
              "end": 408
            }
          ],
          "start": 404,
          "end": 409
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 410,
            "end": 411
          }
        ],
        "optional": false,
        "start": 401,
        "end": 412
      },
      "directive": null,
      "start": 401,
      "end": 413
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 414,
          "end": 418
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 419,
              "end": 422
            }
          ],
          "start": 418,
          "end": 423
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 425
          }
        ],
        "optional": false,
        "start": 414,
        "end": 426
      },
      "directive": null,
      "start": 414,
      "end": 427
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo4",
          "optional": false,
          "typeAnnotation": null,
          "start": 444,
          "end": 448
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSAnyKeyword",
              "start": 449,
              "end": 452
            }
          ],
          "start": 448,
          "end": 453
        },
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 455
          }
        ],
        "optional": false,
        "start": 444,
        "end": 456
      },
      "directive": null,
      "start": 444,
      "end": 457
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
        "start": 583,
        "end": 584
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
              "start": 585,
              "end": 586
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null,
                "start": 595,
                "end": 601
              },
              "typeArguments": null,
              "start": 595,
              "end": 601
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 585,
            "end": 601
          }
        ],
        "start": 584,
        "end": 602
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 620
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 631,
                          "end": 632
                        },
                        "typeArguments": null,
                        "start": 631,
                        "end": 632
                      },
                      "start": 629,
                      "end": 632
                    },
                    "start": 628,
                    "end": 632
                  },
                  "readonly": false,
                  "static": false,
                  "start": 621,
                  "end": 632
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 634,
                "end": 637
              },
              "expression": false,
              "start": 620,
              "end": 637
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 609,
            "end": 637
          }
        ],
        "start": 603,
        "end": 639
      },
      "abstract": false,
      "declare": false,
      "start": 577,
      "end": 639
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
            "typeAnnotation": null,
            "start": 645,
            "end": 647
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 654,
              "end": 655
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 657
              }
            ],
            "start": 650,
            "end": 658
          },
          "definite": false,
          "start": 645,
          "end": 658
        }
      ],
      "declare": false,
      "start": 641,
      "end": 659
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
            "typeAnnotation": null,
            "start": 664,
            "end": 666
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 673,
              "end": 674
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 675,
                  "end": 678
                }
              ],
              "start": 674,
              "end": 679
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 680,
                "end": 681
              }
            ],
            "start": 669,
            "end": 682
          },
          "definite": false,
          "start": 664,
          "end": 682
        }
      ],
      "declare": false,
      "start": 660,
      "end": 683
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
        "start": 691,
        "end": 693
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
              "start": 694,
              "end": 695
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 706,
                    "end": 707
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 709,
                      "end": 715
                    },
                    "start": 707,
                    "end": 715
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 706,
                  "end": 715
                }
              ],
              "start": 704,
              "end": 717
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 694,
            "end": 717
          }
        ],
        "start": 693,
        "end": 718
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 725,
              "end": 736
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 747,
                          "end": 748
                        },
                        "typeArguments": null,
                        "start": 747,
                        "end": 748
                      },
                      "start": 745,
                      "end": 748
                    },
                    "start": 744,
                    "end": 748
                  },
                  "readonly": false,
                  "static": false,
                  "start": 737,
                  "end": 748
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 750,
                "end": 753
              },
              "expression": false,
              "start": 736,
              "end": 753
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 725,
            "end": 753
          }
        ],
        "start": 719,
        "end": 755
      },
      "abstract": false,
      "declare": false,
      "start": 685,
      "end": 755
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
            "name": "c3",
            "optional": false,
            "typeAnnotation": null,
            "start": 761,
            "end": 763
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 770,
              "end": 772
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 774
              }
            ],
            "start": 766,
            "end": 775
          },
          "definite": false,
          "start": 761,
          "end": 775
        }
      ],
      "declare": false,
      "start": 757,
      "end": 776
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
            "name": "c4",
            "optional": false,
            "typeAnnotation": null,
            "start": 781,
            "end": 783
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C2",
              "optional": false,
              "typeAnnotation": null,
              "start": 790,
              "end": 792
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 793,
                  "end": 796
                }
              ],
              "start": 792,
              "end": 797
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 799
              }
            ],
            "start": 786,
            "end": 800
          },
          "definite": false,
          "start": 781,
          "end": 800
        }
      ],
      "declare": false,
      "start": 777,
      "end": 801
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C4",
        "optional": false,
        "typeAnnotation": null,
        "start": 927,
        "end": 929
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
              "start": 930,
              "end": 931
            },
            "constraint": {
              "type": "TSFunctionType",
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
                      "start": 941,
                      "end": 942
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 941,
                    "end": 942
                  }
                ],
                "start": 940,
                "end": 943
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
                        "start": 946,
                        "end": 947
                      },
                      "typeArguments": null,
                      "start": 946,
                      "end": 947
                    },
                    "start": 945,
                    "end": 947
                  },
                  "start": 944,
                  "end": 947
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
                    "start": 952,
                    "end": 953
                  },
                  "typeArguments": null,
                  "start": 952,
                  "end": 953
                },
                "start": 949,
                "end": 953
              },
              "start": 940,
              "end": 953
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 930,
            "end": 953
          }
        ],
        "start": 929,
        "end": 954
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 972
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
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
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
                          "start": 983,
                          "end": 984
                        },
                        "typeArguments": null,
                        "start": 983,
                        "end": 984
                      },
                      "start": 981,
                      "end": 984
                    },
                    "start": 980,
                    "end": 984
                  },
                  "readonly": false,
                  "static": false,
                  "start": 973,
                  "end": 984
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 986,
                "end": 989
              },
              "expression": false,
              "start": 972,
              "end": 989
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 961,
            "end": 989
          }
        ],
        "start": 955,
        "end": 991
      },
      "abstract": false,
      "declare": false,
      "start": 921,
      "end": 991
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
            "name": "c7",
            "optional": false,
            "typeAnnotation": null,
            "start": 997,
            "end": 999
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1006,
              "end": 1008
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1009,
                "end": 1010
              }
            ],
            "start": 1002,
            "end": 1011
          },
          "definite": false,
          "start": 997,
          "end": 1011
        }
      ],
      "declare": false,
      "start": 993,
      "end": 1012
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
            "name": "c8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1017,
            "end": 1019
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C4",
              "optional": false,
              "typeAnnotation": null,
              "start": 1026,
              "end": 1028
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 1029,
                  "end": 1032
                }
              ],
              "start": 1028,
              "end": 1033
            },
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1034,
                "end": 1035
              }
            ],
            "start": 1022,
            "end": 1036
          },
          "definite": false,
          "start": 1017,
          "end": 1036
        }
      ],
      "declare": false,
      "start": 1013,
      "end": 1037
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 93,
  "end": 1039
}
```
