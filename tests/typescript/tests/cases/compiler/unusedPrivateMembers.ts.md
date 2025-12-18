__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 11
      },
      "typeParameters": null,
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
              "name": "initializeInternal",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 44
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
                "body": [],
                "start": 47,
                "end": 54
              },
              "expression": false,
              "start": 44,
              "end": 54
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 18,
            "end": 54
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 67,
              "end": 71
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 88,
                          "end": 89
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 101
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 92,
                          "end": 103
                        },
                        "definite": false,
                        "start": 88,
                        "end": 103
                      }
                    ],
                    "declare": false,
                    "start": 84,
                    "end": 104
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 114
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "initializeInternal",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 115,
                          "end": 133
                        },
                        "optional": false,
                        "computed": false,
                        "start": 113,
                        "end": 133
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 113,
                      "end": 135
                    },
                    "directive": null,
                    "start": 113,
                    "end": 136
                  }
                ],
                "start": 74,
                "end": 142
              },
              "expression": false,
              "start": 71,
              "end": 142
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 60,
            "end": 142
          }
        ],
        "start": 12,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test2",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 157
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 173
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 176,
              "end": 177
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 164,
            "end": 178
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 194
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 211,
                          "end": 212
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 219,
                            "end": 224
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 215,
                          "end": 226
                        },
                        "definite": false,
                        "start": 211,
                        "end": 226
                      }
                    ],
                    "declare": false,
                    "start": 207,
                    "end": 227
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 236,
                        "end": 237
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 238,
                        "end": 239
                      },
                      "optional": false,
                      "computed": false,
                      "start": 236,
                      "end": 239
                    },
                    "directive": null,
                    "start": 236,
                    "end": 240
                  }
                ],
                "start": 197,
                "end": 246
              },
              "expression": false,
              "start": 194,
              "end": 246
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 183,
            "end": 246
          }
        ],
        "start": 158,
        "end": 248
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 248
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test3",
        "optional": false,
        "typeAnnotation": null,
        "start": 256,
        "end": 261
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 281
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 302,
                      "end": 303
                    },
                    "start": 295,
                    "end": 304
                  }
                ],
                "start": 285,
                "end": 310
              },
              "expression": false,
              "start": 282,
              "end": 310
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 268,
            "end": 310
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 323,
              "end": 327
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 345
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test3",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 352,
                            "end": 357
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 348,
                          "end": 359
                        },
                        "definite": false,
                        "start": 344,
                        "end": 359
                      }
                    ],
                    "declare": false,
                    "start": 340,
                    "end": 360
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 369,
                        "end": 370
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 372
                      },
                      "optional": false,
                      "computed": false,
                      "start": 369,
                      "end": 372
                    },
                    "directive": null,
                    "start": 369,
                    "end": 373
                  }
                ],
                "start": 330,
                "end": 379
              },
              "expression": false,
              "start": 327,
              "end": 379
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 316,
            "end": 379
          }
        ],
        "start": 262,
        "end": 381
      },
      "abstract": false,
      "declare": false,
      "start": 250,
      "end": 381
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test4",
        "optional": false,
        "typeAnnotation": null,
        "start": 389,
        "end": 394
      },
      "typeParameters": null,
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 414
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 416
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 429
                    },
                    "directive": null,
                    "start": 428,
                    "end": 430
                  }
                ],
                "start": 418,
                "end": 436
              },
              "expression": false,
              "start": 414,
              "end": 436
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 401,
            "end": 436
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 449,
              "end": 453
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 470,
                          "end": 471
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test4",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 478,
                            "end": 483
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 474,
                          "end": 485
                        },
                        "definite": false,
                        "start": 470,
                        "end": 485
                      }
                    ],
                    "declare": false,
                    "start": 466,
                    "end": 486
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 495,
                        "end": 496
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 497,
                        "end": 498
                      },
                      "optional": false,
                      "computed": false,
                      "start": 495,
                      "end": 498
                    },
                    "directive": null,
                    "start": 495,
                    "end": 499
                  }
                ],
                "start": 456,
                "end": 505
              },
              "expression": false,
              "start": 453,
              "end": 505
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 442,
            "end": 505
          }
        ],
        "start": 395,
        "end": 507
      },
      "abstract": false,
      "declare": false,
      "start": 383,
      "end": 507
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test5",
        "optional": false,
        "typeAnnotation": null,
        "start": 515,
        "end": 520
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
              "start": 521,
              "end": 522
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 521,
            "end": 522
          }
        ],
        "start": 520,
        "end": 523
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
              "name": "p",
              "optional": false,
              "typeAnnotation": null,
              "start": 538,
              "end": 539
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
                  "start": 541,
                  "end": 542
                },
                "typeArguments": null,
                "start": 541,
                "end": 542
              },
              "start": 539,
              "end": 542
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 530,
            "end": 543
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 555,
              "end": 559
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 577
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 584,
                            "end": 589
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 590,
                                "end": 596
                              }
                            ],
                            "start": 589,
                            "end": 597
                          },
                          "arguments": [],
                          "start": 580,
                          "end": 599
                        },
                        "definite": false,
                        "start": 576,
                        "end": 599
                      }
                    ],
                    "declare": false,
                    "start": 572,
                    "end": 600
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 609,
                        "end": 610
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "optional": false,
                      "computed": false,
                      "start": 609,
                      "end": 612
                    },
                    "directive": null,
                    "start": 609,
                    "end": 613
                  }
                ],
                "start": 562,
                "end": 619
              },
              "expression": false,
              "start": 559,
              "end": 619
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 548,
            "end": 619
          }
        ],
        "start": 524,
        "end": 621
      },
      "abstract": false,
      "declare": false,
      "start": 509,
      "end": 621
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Test6",
        "optional": false,
        "typeAnnotation": null,
        "start": 629,
        "end": 634
      },
      "typeParameters": null,
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 653,
              "end": 654
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 674,
                      "end": 675
                    },
                    "start": 667,
                    "end": 676
                  }
                ],
                "start": 657,
                "end": 682
              },
              "expression": false,
              "start": 654,
              "end": 682
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 641,
            "end": 682
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 699,
              "end": 700
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
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 701,
                  "end": 702
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 714,
                      "end": 715
                    },
                    "directive": null,
                    "start": 714,
                    "end": 716
                  }
                ],
                "start": 704,
                "end": 722
              },
              "expression": false,
              "start": 700,
              "end": 722
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 687,
            "end": 722
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 736
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 739,
              "end": 740
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 727,
            "end": 741
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 754,
              "end": 758
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
                    "type": "VariableDeclaration",
                    "kind": "var",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 775,
                          "end": 776
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Test6",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 783,
                            "end": 788
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 779,
                          "end": 790
                        },
                        "definite": false,
                        "start": 775,
                        "end": 790
                      }
                    ],
                    "declare": false,
                    "start": 771,
                    "end": 791
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "UpdateExpression",
                      "operator": "++",
                      "prefix": false,
                      "argument": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 800,
                          "end": 801
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 802,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 800,
                        "end": 803
                      },
                      "start": 800,
                      "end": 805
                    },
                    "directive": null,
                    "start": 800,
                    "end": 806
                  }
                ],
                "start": 761,
                "end": 812
              },
              "expression": false,
              "start": 758,
              "end": 812
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 747,
            "end": 812
          }
        ],
        "start": 635,
        "end": 814
      },
      "abstract": false,
      "declare": false,
      "start": 623,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 814
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5,
    "range": [
      0,
      5
    ]
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 6,
    "end": 11,
    "range": [
      6,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeInternal",
    "start": 26,
    "end": 44,
    "range": [
      26,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 45,
    "end": 46,
    "range": [
      45,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 60,
    "end": 66,
    "range": [
      60,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 84,
    "end": 87,
    "range": [
      84,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 88,
    "end": 89,
    "range": [
      88,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 92,
    "end": 95,
    "range": [
      92,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "Test1",
    "start": 96,
    "end": 101,
    "range": [
      96,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "initializeInternal",
    "start": 115,
    "end": 133,
    "range": [
      115,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 146,
    "end": 151,
    "range": [
      146,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 152,
    "end": 157,
    "range": [
      152,
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
    "value": "private",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 183,
    "end": 189,
    "range": [
      183,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 190,
    "end": 194,
    "range": [
      190,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196,
    "range": [
      195,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 215,
    "end": 218,
    "range": [
      215,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "Test2",
    "start": 219,
    "end": 224,
    "range": [
      219,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248,
    "range": [
      247,
      248
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 250,
    "end": 255,
    "range": [
      250,
      255
    ]
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 256,
    "end": 261,
    "range": [
      256,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 276,
    "end": 279,
    "range": [
      276,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 295,
    "end": 301,
    "range": [
      295,
      301
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 316,
    "end": 322,
    "range": [
      316,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 323,
    "end": 327,
    "range": [
      323,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343,
    "range": [
      340,
      343
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 348,
    "end": 351,
    "range": [
      348,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "Test3",
    "start": 352,
    "end": 357,
    "range": [
      352,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
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
    "value": ".",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 380,
    "end": 381,
    "range": [
      380,
      381
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 383,
    "end": 388,
    "range": [
      383,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 389,
    "end": 394,
    "range": [
      389,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 401,
    "end": 408,
    "range": [
      401,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 409,
    "end": 412,
    "range": [
      409,
      412
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "v",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 428,
    "end": 429,
    "range": [
      428,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
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
    "type": "Keyword",
    "value": "public",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 449,
    "end": 453,
    "range": [
      449,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 466,
    "end": 469,
    "range": [
      466,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 474,
    "end": 477,
    "range": [
      474,
      477
    ]
  },
  {
    "type": "Identifier",
    "value": "Test4",
    "start": 478,
    "end": 483,
    "range": [
      478,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 504,
    "end": 505,
    "range": [
      504,
      505
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 509,
    "end": 514,
    "range": [
      509,
      514
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 515,
    "end": 520,
    "range": [
      515,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 530,
    "end": 537,
    "range": [
      530,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 548,
    "end": 554,
    "range": [
      548,
      554
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 560,
    "end": 561,
    "range": [
      560,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 572,
    "end": 575,
    "range": [
      572,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 580,
    "end": 583,
    "range": [
      580,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "Test5",
    "start": 584,
    "end": 589,
    "range": [
      584,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 590,
    "end": 596,
    "range": [
      590,
      596
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 596,
    "end": 597,
    "range": [
      596,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 598,
    "end": 599,
    "range": [
      598,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 623,
    "end": 628,
    "range": [
      623,
      628
    ]
  },
  {
    "type": "Identifier",
    "value": "Test6",
    "start": 629,
    "end": 634,
    "range": [
      629,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 641,
    "end": 648,
    "range": [
      641,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 667,
    "end": 673,
    "range": [
      667,
      673
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 687,
    "end": 694,
    "range": [
      687,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 695,
    "end": 698,
    "range": [
      695,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 702,
    "end": 703,
    "range": [
      702,
      703
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 714,
    "end": 715,
    "range": [
      714,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 727,
    "end": 734,
    "range": [
      727,
      734
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 740,
    "end": 741,
    "range": [
      740,
      741
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 754,
    "end": 758,
    "range": [
      754,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 771,
    "end": 774,
    "range": [
      771,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 779,
    "end": 782,
    "range": [
      779,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "Test6",
    "start": 783,
    "end": 788,
    "range": [
      783,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 800,
    "end": 801,
    "range": [
      800,
      801
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 803,
    "end": 805,
    "range": [
      803,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 811,
    "end": 812,
    "range": [
      811,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 813,
    "end": 814,
    "range": [
      813,
      814
    ]
  }
]
```
