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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 19
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              },
              "start": 19,
              "end": 27
            },
            "accessibility": null,
            "static": false,
            "start": 18,
            "end": 28
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 45
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 52,
                    "end": 56
                  },
                  "start": 50,
                  "end": 56
                },
                "start": 46,
                "end": 56
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 61,
                    "end": 67
                  },
                  "start": 59,
                  "end": 67
                },
                "start": 58,
                "end": 67
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              },
              "start": 68,
              "end": 76
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 33,
            "end": 77
          }
        ],
        "start": 12,
        "end": 79
      },
      "declare": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Unused",
        "optional": false,
        "typeAnnotation": null,
        "start": 90,
        "end": 96
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "implicitNoThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 117
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "m",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 121,
                    "end": 127
                  },
                  "start": 119,
                  "end": 127
                },
                "start": 118,
                "end": 127
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 130,
                "end": 136
              },
              "start": 128,
              "end": 136
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 103,
            "end": 137
          }
        ],
        "start": 97,
        "end": 139
      },
      "declare": false,
      "start": 80,
      "end": 139
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
        "start": 146,
        "end": 147
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
            "start": 159,
            "end": 160
          },
          "typeArguments": null,
          "start": 159,
          "end": 160
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 167,
              "end": 168
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 170,
                "end": 176
              },
              "start": 168,
              "end": 176
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
            "start": 167,
            "end": 177
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 194
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSThisType",
                      "start": 201,
                      "end": 205
                    },
                    "start": 199,
                    "end": 205
                  },
                  "start": 195,
                  "end": 205
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 210,
                      "end": 216
                    },
                    "start": 208,
                    "end": 216
                  },
                  "start": 207,
                  "end": 216
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 219,
                  "end": 225
                },
                "start": 217,
                "end": 225
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 243,
                          "end": 247
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 248,
                          "end": 249
                        },
                        "optional": false,
                        "computed": false,
                        "start": 243,
                        "end": 249
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 252,
                        "end": 253
                      },
                      "start": 243,
                      "end": 253
                    },
                    "start": 236,
                    "end": 254
                  }
                ],
                "start": 226,
                "end": 260
              },
              "expression": false,
              "start": 194,
              "end": 260
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 182,
            "end": 260
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "implicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 265,
              "end": 277
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
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 281,
                      "end": 287
                    },
                    "start": 279,
                    "end": 287
                  },
                  "start": 278,
                  "end": 287
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 290,
                  "end": 296
                },
                "start": 288,
                "end": 296
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 314,
                          "end": 318
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 319,
                          "end": 320
                        },
                        "optional": false,
                        "computed": false,
                        "start": 314,
                        "end": 320
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 323,
                        "end": 324
                      },
                      "start": 314,
                      "end": 324
                    },
                    "start": 307,
                    "end": 325
                  }
                ],
                "start": 297,
                "end": 331
              },
              "expression": false,
              "start": 277,
              "end": 331
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 265,
            "end": 331
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 348
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
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 355,
                      "end": 359
                    },
                    "start": 353,
                    "end": 359
                  },
                  "start": 349,
                  "end": 359
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 364,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  },
                  "start": 361,
                  "end": 370
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 373,
                  "end": 379
                },
                "start": 371,
                "end": 379
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
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 397,
                        "end": 398
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 401,
                        "end": 402
                      },
                      "start": 397,
                      "end": 402
                    },
                    "start": 390,
                    "end": 403
                  }
                ],
                "start": 380,
                "end": 409
              },
              "expression": false,
              "start": 348,
              "end": 409
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 336,
            "end": 409
          }
        ],
        "start": 161,
        "end": 411
      },
      "abstract": false,
      "declare": false,
      "start": 140,
      "end": 411
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 416,
            "end": 417
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 425
            },
            "typeArguments": null,
            "arguments": [],
            "start": 420,
            "end": 427
          },
          "definite": false,
          "start": 416,
          "end": 427
        }
      ],
      "declare": false,
      "start": 412,
      "end": 428
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 430
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 443
          },
          "optional": false,
          "computed": false,
          "start": 429,
          "end": 443
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 460
          },
          "optional": false,
          "computed": false,
          "start": 446,
          "end": 460
        },
        "start": 429,
        "end": 460
      },
      "directive": null,
      "start": 429,
      "end": 461
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 506
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 515,
                  "end": 516
                },
                "value": {
                  "type": "Literal",
                  "value": 101,
                  "raw": "101",
                  "start": 518,
                  "end": 521
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 515,
                "end": 521
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 527,
                  "end": 539
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 554,
                          "end": 560
                        },
                        "start": 552,
                        "end": 560
                      },
                      "start": 551,
                      "end": 560
                    }
                  ],
                  "returnType": null,
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
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 579,
                            "end": 580
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 583,
                                "end": 587
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 588,
                                "end": 589
                              },
                              "optional": false,
                              "computed": false,
                              "start": 583,
                              "end": 589
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 590,
                              "end": 596
                            },
                            "optional": false,
                            "computed": false,
                            "start": 583,
                            "end": 596
                          },
                          "start": 579,
                          "end": 596
                        },
                        "start": 572,
                        "end": 597
                      }
                    ],
                    "start": 562,
                    "end": 649
                  },
                  "expression": false,
                  "start": 541,
                  "end": 649
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 527,
                "end": 649
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 655,
                  "end": 667
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 671,
                          "end": 677
                        },
                        "start": 669,
                        "end": 677
                      },
                      "start": 668,
                      "end": 677
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 680,
                      "end": 686
                    },
                    "start": 678,
                    "end": 686
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 696,
                          "end": 697
                        },
                        "start": 689,
                        "end": 698
                      }
                    ],
                    "start": 687,
                    "end": 700
                  },
                  "expression": false,
                  "start": 667,
                  "end": 700
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 655,
                "end": 700
              }
            ],
            "start": 509,
            "end": 702
          },
          "definite": false,
          "start": 505,
          "end": 702
        }
      ],
      "declare": false,
      "start": 501,
      "end": 703
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 712
                },
                "typeArguments": null,
                "start": 711,
                "end": 712
              },
              "start": 709,
              "end": 712
            },
            "start": 708,
            "end": 712
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 715,
            "end": 716
          },
          "definite": false,
          "start": 708,
          "end": 716
        }
      ],
      "declare": false,
      "start": 704,
      "end": 717
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 727
                },
                "typeArguments": null,
                "start": 726,
                "end": 727
              },
              "start": 724,
              "end": 727
            },
            "start": 722,
            "end": 727
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 736,
                  "end": 737
                },
                "value": {
                  "type": "Literal",
                  "value": 1001,
                  "raw": "1001",
                  "start": 739,
                  "end": 743
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 736,
                "end": 743
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 749,
                  "end": 761
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
                      "name": "m",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 773,
                      "end": 774
                    }
                  ],
                  "returnType": null,
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
                            "name": "m",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 794,
                            "end": 795
                          },
                          "operator": "+",
                          "right": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 798,
                                "end": 802
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 803,
                                "end": 804
                              },
                              "optional": false,
                              "computed": false,
                              "start": 798,
                              "end": 804
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "length",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 805,
                              "end": 811
                            },
                            "optional": false,
                            "computed": false,
                            "start": 798,
                            "end": 811
                          },
                          "start": 794,
                          "end": 811
                        },
                        "start": 787,
                        "end": 812
                      }
                    ],
                    "start": 776,
                    "end": 864
                  },
                  "expression": false,
                  "start": 763,
                  "end": 864
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 749,
                "end": 864
              }
            ],
            "start": 730,
            "end": 867
          },
          "definite": false,
          "start": 722,
          "end": 867
        }
      ],
      "declare": false,
      "start": 718,
      "end": 867
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 872,
            "end": 873
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 876,
              "end": 877
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 878,
              "end": 890
            },
            "optional": false,
            "computed": false,
            "start": 876,
            "end": 890
          },
          "definite": false,
          "start": 872,
          "end": 890
        }
      ],
      "declare": false,
      "start": 868,
      "end": 891
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 896,
            "end": 897
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 900,
              "end": 901
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 902,
                "end": 904
              }
            ],
            "optional": false,
            "start": 900,
            "end": 905
          },
          "definite": false,
          "start": 896,
          "end": 905
        }
      ],
      "declare": false,
      "start": 892,
      "end": 906
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Unused",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 950,
                  "end": 956
                },
                "typeArguments": null,
                "start": 950,
                "end": 956
              },
              "start": 948,
              "end": 956
            },
            "start": 947,
            "end": 956
          },
          "init": null,
          "definite": false,
          "start": 947,
          "end": 956
        }
      ],
      "declare": false,
      "start": 943,
      "end": 957
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 963
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "u",
              "optional": false,
              "typeAnnotation": null,
              "start": 966,
              "end": 967
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "implicitNoThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 982
            },
            "optional": false,
            "computed": false,
            "start": 966,
            "end": 982
          },
          "definite": false,
          "start": 962,
          "end": 982
        }
      ],
      "declare": false,
      "start": 958,
      "end": 983
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null,
          "start": 984,
          "end": 985
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 988,
            "end": 989
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 12,
              "raw": "12",
              "start": 990,
              "end": 992
            }
          ],
          "optional": false,
          "start": 988,
          "end": 993
        },
        "start": 984,
        "end": 993
      },
      "directive": null,
      "start": 984,
      "end": 994
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1031,
            "end": 1032
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 1033,
            "end": 1045
          },
          "optional": false,
          "computed": false,
          "start": 1031,
          "end": 1045
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1048,
            "end": 1049
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1050,
            "end": 1062
          },
          "optional": false,
          "computed": false,
          "start": 1048,
          "end": 1062
        },
        "start": 1031,
        "end": 1062
      },
      "directive": null,
      "start": 1031,
      "end": 1062
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1093,
            "end": 1094
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1095,
            "end": 1107
          },
          "optional": false,
          "computed": false,
          "start": 1093,
          "end": 1107
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1110,
            "end": 1111
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1112,
            "end": 1124
          },
          "optional": false,
          "computed": false,
          "start": 1110,
          "end": 1124
        },
        "start": 1093,
        "end": 1124
      },
      "directive": null,
      "start": 1093,
      "end": 1125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1156,
            "end": 1157
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1158,
            "end": 1170
          },
          "optional": false,
          "computed": false,
          "start": 1156,
          "end": 1170
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1173,
            "end": 1174
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1175,
            "end": 1187
          },
          "optional": false,
          "computed": false,
          "start": 1173,
          "end": 1187
        },
        "start": 1156,
        "end": 1187
      },
      "directive": null,
      "start": 1156,
      "end": 1188
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1261,
            "end": 1262
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "implicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1263,
            "end": 1275
          },
          "optional": false,
          "computed": false,
          "start": 1261,
          "end": 1275
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1279
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1280,
            "end": 1292
          },
          "optional": false,
          "computed": false,
          "start": 1278,
          "end": 1292
        },
        "start": 1261,
        "end": 1292
      },
      "directive": null,
      "start": 1261,
      "end": 1293
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 1294,
            "end": 1295
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1296,
            "end": 1308
          },
          "optional": false,
          "computed": false,
          "start": 1294,
          "end": 1308
        },
        "right": {
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
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1321
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 1337,
                      "end": 1341
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1342,
                      "end": 1343
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1337,
                    "end": 1343
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1344,
                    "end": 1350
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1337,
                  "end": 1350
                },
                "start": 1330,
                "end": 1351
              }
            ],
            "start": 1323,
            "end": 1379
          },
          "expression": false,
          "start": 1311,
          "end": 1379
        },
        "start": 1294,
        "end": 1379
      },
      "directive": null,
      "start": 1294,
      "end": 1379
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1379
}
```
