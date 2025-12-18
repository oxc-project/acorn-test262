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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 24
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
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
            "start": 31,
            "end": 41
          }
        ],
        "start": 25,
        "end": 43
      },
      "abstract": false,
      "declare": false,
      "start": 17,
      "end": 43
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
        "start": 50,
        "end": 51
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
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 59
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 58,
            "end": 68
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
              "start": 73,
              "end": 85
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
                      "start": 92,
                      "end": 96
                    },
                    "start": 90,
                    "end": 96
                  },
                  "start": 86,
                  "end": 96
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
                      "start": 101,
                      "end": 107
                    },
                    "start": 99,
                    "end": 107
                  },
                  "start": 98,
                  "end": 107
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 110,
                  "end": 116
                },
                "start": 108,
                "end": 116
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
                          "start": 134,
                          "end": 138
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 139,
                          "end": 140
                        },
                        "optional": false,
                        "computed": false,
                        "start": 134,
                        "end": 140
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 143,
                        "end": 144
                      },
                      "start": 134,
                      "end": 144
                    },
                    "start": 127,
                    "end": 145
                  }
                ],
                "start": 117,
                "end": 151
              },
              "expression": false,
              "start": 85,
              "end": 151
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 73,
            "end": 151
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 165
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 173
                      },
                      "typeArguments": null,
                      "start": 172,
                      "end": 173
                    },
                    "start": 170,
                    "end": 173
                  },
                  "start": 166,
                  "end": 173
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
                      "start": 178,
                      "end": 184
                    },
                    "start": 176,
                    "end": 184
                  },
                  "start": 175,
                  "end": 184
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 187,
                  "end": 193
                },
                "start": 185,
                "end": 193
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
                          "start": 211,
                          "end": 215
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 217
                        },
                        "optional": false,
                        "computed": false,
                        "start": 211,
                        "end": 217
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 220,
                        "end": 221
                      },
                      "start": 211,
                      "end": 221
                    },
                    "start": 204,
                    "end": 222
                  }
                ],
                "start": 194,
                "end": 228
              },
              "expression": false,
              "start": 165,
              "end": 228
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 156,
            "end": 228
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 249
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
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 258
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 260,
                              "end": 266
                            },
                            "start": 258,
                            "end": 266
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 257,
                          "end": 266
                        }
                      ],
                      "start": 256,
                      "end": 267
                    },
                    "start": 254,
                    "end": 267
                  },
                  "start": 250,
                  "end": 267
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
                      "start": 272,
                      "end": 278
                    },
                    "start": 270,
                    "end": 278
                  },
                  "start": 269,
                  "end": 278
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 281,
                  "end": 287
                },
                "start": 279,
                "end": 287
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
                          "start": 305,
                          "end": 309
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "n",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 310,
                          "end": 311
                        },
                        "optional": false,
                        "computed": false,
                        "start": 305,
                        "end": 311
                      },
                      "operator": "+",
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 314,
                        "end": 315
                      },
                      "start": 305,
                      "end": 315
                    },
                    "start": 298,
                    "end": 316
                  }
                ],
                "start": 288,
                "end": 322
              },
              "expression": false,
              "start": 249,
              "end": 322
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 233,
            "end": 322
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
              "start": 327,
              "end": 339
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
                      "start": 346,
                      "end": 350
                    },
                    "start": 344,
                    "end": 350
                  },
                  "start": 340,
                  "end": 350
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
                      "start": 355,
                      "end": 361
                    },
                    "start": 353,
                    "end": 361
                  },
                  "start": 352,
                  "end": 361
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 364,
                  "end": 370
                },
                "start": 362,
                "end": 370
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
                        "start": 388,
                        "end": 389
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 392,
                        "end": 393
                      },
                      "start": 388,
                      "end": 393
                    },
                    "start": 381,
                    "end": 394
                  }
                ],
                "start": 371,
                "end": 400
              },
              "expression": false,
              "start": 339,
              "end": 400
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 327,
            "end": 400
          }
        ],
        "start": 52,
        "end": 402
      },
      "abstract": false,
      "declare": false,
      "start": 44,
      "end": 402
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
        "start": 409,
        "end": 410
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 420
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 421,
        "end": 424
      },
      "abstract": false,
      "declare": false,
      "start": 403,
      "end": 424
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 436
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 443,
              "end": 444
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 446,
                "end": 452
              },
              "start": 444,
              "end": 452
            },
            "accessibility": null,
            "static": false,
            "start": 443,
            "end": 453
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid1",
              "optional": false,
              "typeAnnotation": null,
              "start": 458,
              "end": 471
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
                    "type": "TSVoidKeyword",
                    "start": 478,
                    "end": 482
                  },
                  "start": 476,
                  "end": 482
                },
                "start": 472,
                "end": 482
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 485,
                "end": 491
              },
              "start": 483,
              "end": 491
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 458,
            "end": 492
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid2",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 510
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
                    "type": "TSVoidKeyword",
                    "start": 517,
                    "end": 521
                  },
                  "start": 515,
                  "end": 521
                },
                "start": 511,
                "end": 521
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 524,
                "end": 530
              },
              "start": 522,
              "end": 530
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 497,
            "end": 531
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStructural",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 554
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
                          "start": 562,
                          "end": 563
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 565,
                            "end": 571
                          },
                          "start": 563,
                          "end": 571
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 562,
                        "end": 571
                      }
                    ],
                    "start": 561,
                    "end": 572
                  },
                  "start": 559,
                  "end": 572
                },
                "start": 555,
                "end": 572
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 575,
                "end": 581
              },
              "start": 573,
              "end": 581
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 536,
            "end": 582
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitInterface",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 604
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 611,
                      "end": 612
                    },
                    "typeArguments": null,
                    "start": 611,
                    "end": 612
                  },
                  "start": 609,
                  "end": 612
                },
                "start": 605,
                "end": 612
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 615,
                "end": 621
              },
              "start": 613,
              "end": 621
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 587,
            "end": 622
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 639
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
                    "start": 646,
                    "end": 650
                  },
                  "start": 644,
                  "end": 650
                },
                "start": 640,
                "end": 650
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 653,
                "end": 659
              },
              "start": 651,
              "end": 659
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 627,
            "end": 660
          }
        ],
        "start": 437,
        "end": 662
      },
      "declare": false,
      "start": 425,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "explicitStructural",
        "optional": false,
        "typeAnnotation": null,
        "start": 672,
        "end": 690
      },
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 699,
                    "end": 700
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 702,
                      "end": 708
                    },
                    "start": 700,
                    "end": 708
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 699,
                  "end": 708
                }
              ],
              "start": 697,
              "end": 710
            },
            "start": 695,
            "end": 710
          },
          "start": 691,
          "end": 710
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 715,
              "end": 721
            },
            "start": 713,
            "end": 721
          },
          "start": 712,
          "end": 721
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 724,
          "end": 730
        },
        "start": 722,
        "end": 730
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
                "start": 744,
                "end": 745
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 748,
                  "end": 752
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 753,
                  "end": 754
                },
                "optional": false,
                "computed": false,
                "start": 748,
                "end": 754
              },
              "start": 744,
              "end": 754
            },
            "start": 737,
            "end": 755
          }
        ],
        "start": 731,
        "end": 757
      },
      "expression": false,
      "start": 663,
      "end": 757
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "justThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 767,
        "end": 775
      },
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 784,
                    "end": 785
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 787,
                      "end": 793
                    },
                    "start": 785,
                    "end": 793
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 784,
                  "end": 793
                }
              ],
              "start": 782,
              "end": 795
            },
            "start": 780,
            "end": 795
          },
          "start": 776,
          "end": 795
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 798,
          "end": 804
        },
        "start": 796,
        "end": 804
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 818,
                "end": 822
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 824
              },
              "optional": false,
              "computed": false,
              "start": 818,
              "end": 824
            },
            "start": 811,
            "end": 825
          }
        ],
        "start": 805,
        "end": 827
      },
      "expression": false,
      "start": 758,
      "end": 827
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "implicitThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 837,
        "end": 849
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 853,
              "end": 859
            },
            "start": 851,
            "end": 859
          },
          "start": 850,
          "end": 859
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 862,
          "end": 868
        },
        "start": 860,
        "end": 868
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 882,
                    "end": 886
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 887,
                    "end": 888
                  },
                  "optional": false,
                  "computed": false,
                  "start": 882,
                  "end": 888
                },
                "operator": "+",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 891,
                  "end": 892
                },
                "start": 882,
                "end": 892
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 895,
                "end": 897
              },
              "start": 882,
              "end": 897
            },
            "start": 875,
            "end": 898
          }
        ],
        "start": 869,
        "end": 900
      },
      "expression": false,
      "start": 828,
      "end": 900
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
            "name": "impl",
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
                  "start": 911,
                  "end": 912
                },
                "typeArguments": null,
                "start": 911,
                "end": 912
              },
              "start": 909,
              "end": 912
            },
            "start": 905,
            "end": 912
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 921,
                  "end": 922
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 924,
                  "end": 926
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 921,
                "end": 926
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 932,
                  "end": 945
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 953,
                      "end": 957
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 959
                    },
                    "optional": false,
                    "computed": false,
                    "start": 953,
                    "end": 959
                  },
                  "id": null,
                  "generator": false,
                  "start": 947,
                  "end": 959
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 932,
                "end": 959
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1031,
                  "end": 1044
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
                          "value": 12,
                          "raw": "12",
                          "start": 1056,
                          "end": 1058
                        },
                        "start": 1049,
                        "end": 1059
                      }
                    ],
                    "start": 1047,
                    "end": 1061
                  },
                  "expression": false,
                  "start": 1044,
                  "end": 1061
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1031,
                "end": 1061
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1067,
                  "end": 1085
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1105,
                            "end": 1109
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1110,
                            "end": 1111
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1105,
                          "end": 1111
                        },
                        "start": 1098,
                        "end": 1112
                      }
                    ],
                    "start": 1088,
                    "end": 1118
                  },
                  "expression": false,
                  "start": 1085,
                  "end": 1118
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1067,
                "end": 1118
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitInterface",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1124,
                  "end": 1141
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1161,
                            "end": 1165
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1166,
                            "end": 1167
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1161,
                          "end": 1167
                        },
                        "start": 1154,
                        "end": 1168
                      }
                    ],
                    "start": 1144,
                    "end": 1174
                  },
                  "expression": false,
                  "start": 1141,
                  "end": 1174
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1124,
                "end": 1174
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
                  "start": 1180,
                  "end": 1192
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
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 1212,
                            "end": 1216
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1217,
                            "end": 1218
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1212,
                          "end": 1218
                        },
                        "start": 1205,
                        "end": 1219
                      }
                    ],
                    "start": 1195,
                    "end": 1225
                  },
                  "expression": false,
                  "start": 1192,
                  "end": 1225
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1180,
                "end": 1225
              }
            ],
            "start": 915,
            "end": 1228
          },
          "definite": false,
          "start": 905,
          "end": 1228
        }
      ],
      "declare": false,
      "start": 901,
      "end": 1228
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1229,
            "end": 1233
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1234,
            "end": 1247
          },
          "optional": false,
          "computed": false,
          "start": 1229,
          "end": 1247
        },
        "right": {
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
                  "value": 12,
                  "raw": "12",
                  "start": 1271,
                  "end": 1273
                },
                "start": 1264,
                "end": 1274
              }
            ],
            "start": 1262,
            "end": 1276
          },
          "expression": false,
          "start": 1250,
          "end": 1276
        },
        "start": 1229,
        "end": 1276
      },
      "directive": null,
      "start": 1229,
      "end": 1277
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1278,
            "end": 1282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid2",
            "optional": false,
            "typeAnnotation": null,
            "start": 1283,
            "end": 1296
          },
          "optional": false,
          "computed": false,
          "start": 1278,
          "end": 1296
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1305,
            "end": 1307
          },
          "id": null,
          "generator": false,
          "start": 1299,
          "end": 1307
        },
        "start": 1278,
        "end": 1307
      },
      "directive": null,
      "start": 1278,
      "end": 1308
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1309,
            "end": 1313
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 1314,
            "end": 1332
          },
          "optional": false,
          "computed": false,
          "start": 1309,
          "end": 1332
        },
        "right": {
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1355,
                    "end": 1359
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1360,
                    "end": 1361
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1355,
                  "end": 1361
                },
                "start": 1348,
                "end": 1362
              }
            ],
            "start": 1346,
            "end": 1364
          },
          "expression": false,
          "start": 1335,
          "end": 1364
        },
        "start": 1309,
        "end": 1364
      },
      "directive": null,
      "start": 1309,
      "end": 1365
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1366,
            "end": 1370
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 1371,
            "end": 1388
          },
          "optional": false,
          "computed": false,
          "start": 1366,
          "end": 1388
        },
        "right": {
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1411,
                    "end": 1415
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1416,
                    "end": 1417
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1411,
                  "end": 1417
                },
                "start": 1404,
                "end": 1418
              }
            ],
            "start": 1402,
            "end": 1420
          },
          "expression": false,
          "start": 1391,
          "end": 1420
        },
        "start": 1366,
        "end": 1420
      },
      "directive": null,
      "start": 1366,
      "end": 1421
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1422,
            "end": 1426
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 1427,
            "end": 1445
          },
          "optional": false,
          "computed": false,
          "start": 1422,
          "end": 1445
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1454,
            "end": 1456
          },
          "id": null,
          "generator": false,
          "start": 1448,
          "end": 1456
        },
        "start": 1422,
        "end": 1456
      },
      "directive": null,
      "start": 1422,
      "end": 1457
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1458,
            "end": 1462
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitInterface",
            "optional": false,
            "typeAnnotation": null,
            "start": 1463,
            "end": 1480
          },
          "optional": false,
          "computed": false,
          "start": 1458,
          "end": 1480
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1489,
            "end": 1491
          },
          "id": null,
          "generator": false,
          "start": 1483,
          "end": 1491
        },
        "start": 1458,
        "end": 1491
      },
      "directive": null,
      "start": 1458,
      "end": 1492
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
            "name": "impl",
            "optional": false,
            "typeAnnotation": null,
            "start": 1493,
            "end": 1497
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1498,
            "end": 1510
          },
          "optional": false,
          "computed": false,
          "start": 1493,
          "end": 1510
        },
        "right": {
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
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 1534,
                    "end": 1538
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1539,
                    "end": 1540
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1534,
                  "end": 1540
                },
                "start": 1527,
                "end": 1541
              }
            ],
            "start": 1525,
            "end": 1543
          },
          "expression": false,
          "start": 1513,
          "end": 1543
        },
        "start": 1493,
        "end": 1543
      },
      "directive": null,
      "start": 1493,
      "end": 1544
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
            "name": "ok",
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
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1577
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1579,
                        "end": 1585
                      },
                      "start": 1577,
                      "end": 1585
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1576,
                    "end": 1586
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1587,
                      "end": 1588
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                      "name": "y",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1599,
                                      "end": 1600
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 1602,
                                        "end": 1608
                                      },
                                      "start": 1600,
                                      "end": 1608
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 1599,
                                    "end": 1608
                                  }
                                ],
                                "start": 1597,
                                "end": 1610
                              },
                              "start": 1595,
                              "end": 1610
                            },
                            "start": 1591,
                            "end": 1610
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 1615,
                                "end": 1621
                              },
                              "start": 1613,
                              "end": 1621
                            },
                            "start": 1612,
                            "end": 1621
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1626,
                            "end": 1632
                          },
                          "start": 1623,
                          "end": 1632
                        },
                        "start": 1590,
                        "end": 1632
                      },
                      "start": 1588,
                      "end": 1632
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1587,
                    "end": 1632
                  }
                ],
                "start": 1575,
                "end": 1633
              },
              "start": 1573,
              "end": 1633
            },
            "start": 1571,
            "end": 1633
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1638,
                  "end": 1639
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1641,
                  "end": 1643
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1638,
                "end": 1643
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1645,
                  "end": 1646
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitStructural",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1648,
                  "end": 1666
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1645,
                "end": 1666
              }
            ],
            "start": 1636,
            "end": 1668
          },
          "definite": false,
          "start": 1571,
          "end": 1668
        }
      ],
      "declare": false,
      "start": 1567,
      "end": 1669
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
            "name": "implicitAnyOk",
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
                      "name": "notSpecified",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1690,
                      "end": 1702
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1704,
                        "end": 1710
                      },
                      "start": 1702,
                      "end": 1710
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1690,
                    "end": 1711
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1712,
                      "end": 1713
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                "start": 1719,
                                "end": 1725
                              },
                              "start": 1717,
                              "end": 1725
                            },
                            "start": 1716,
                            "end": 1725
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1730,
                            "end": 1736
                          },
                          "start": 1727,
                          "end": 1736
                        },
                        "start": 1715,
                        "end": 1736
                      },
                      "start": 1713,
                      "end": 1736
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1712,
                    "end": 1736
                  }
                ],
                "start": 1689,
                "end": 1737
              },
              "start": 1687,
              "end": 1737
            },
            "start": 1674,
            "end": 1737
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
                  "name": "notSpecified",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1742,
                  "end": 1754
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 1756,
                  "end": 1758
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1742,
                "end": 1758
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1760,
                  "end": 1761
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "implicitThis",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1763,
                  "end": 1775
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1760,
                "end": 1775
              }
            ],
            "start": 1740,
            "end": 1777
          },
          "definite": false,
          "start": 1674,
          "end": 1777
        }
      ],
      "declare": false,
      "start": 1670,
      "end": 1778
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
            "name": "ok",
            "optional": false,
            "typeAnnotation": null,
            "start": 1779,
            "end": 1781
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1782,
            "end": 1783
          },
          "optional": false,
          "computed": false,
          "start": 1779,
          "end": 1783
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 13,
            "raw": "13",
            "start": 1784,
            "end": 1786
          }
        ],
        "optional": false,
        "start": 1779,
        "end": 1787
      },
      "directive": null,
      "start": 1779,
      "end": 1788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "implicitThis",
          "optional": false,
          "typeAnnotation": null,
          "start": 1789,
          "end": 1801
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1802,
            "end": 1804
          }
        ],
        "optional": false,
        "start": 1789,
        "end": 1805
      },
      "directive": null,
      "start": 1789,
      "end": 1806
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
            "name": "implicitAnyOk",
            "optional": false,
            "typeAnnotation": null,
            "start": 1807,
            "end": 1820
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null,
            "start": 1821,
            "end": 1822
          },
          "optional": false,
          "computed": false,
          "start": 1807,
          "end": 1822
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1823,
            "end": 1825
          }
        ],
        "optional": false,
        "start": 1807,
        "end": 1826
      },
      "directive": null,
      "start": 1807,
      "end": 1827
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
            "start": 1833,
            "end": 1834
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 1841,
              "end": 1842
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1837,
            "end": 1844
          },
          "definite": false,
          "start": 1833,
          "end": 1844
        }
      ],
      "declare": false,
      "start": 1829,
      "end": 1845
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1850,
            "end": 1851
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 1858,
              "end": 1859
            },
            "typeArguments": null,
            "arguments": [],
            "start": 1854,
            "end": 1861
          },
          "definite": false,
          "start": 1850,
          "end": 1861
        }
      ],
      "declare": false,
      "start": 1846,
      "end": 1862
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
            "name": "ripped",
            "optional": false,
            "typeAnnotation": null,
            "start": 1867,
            "end": 1873
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 1876,
              "end": 1877
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitC",
              "optional": false,
              "typeAnnotation": null,
              "start": 1878,
              "end": 1887
            },
            "optional": false,
            "computed": false,
            "start": 1876,
            "end": 1887
          },
          "definite": false,
          "start": 1867,
          "end": 1887
        }
      ],
      "declare": false,
      "start": 1863,
      "end": 1888
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1889,
            "end": 1890
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1891,
            "end": 1900
          },
          "optional": false,
          "computed": false,
          "start": 1889,
          "end": 1900
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1901,
            "end": 1903
          }
        ],
        "optional": false,
        "start": 1889,
        "end": 1904
      },
      "directive": null,
      "start": 1889,
      "end": 1905
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1906,
            "end": 1907
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 1908,
            "end": 1924
          },
          "optional": false,
          "computed": false,
          "start": 1906,
          "end": 1924
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1925,
            "end": 1927
          }
        ],
        "optional": false,
        "start": 1906,
        "end": 1928
      },
      "directive": null,
      "start": 1906,
      "end": 1929
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
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 1930,
            "end": 1931
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1932,
            "end": 1944
          },
          "optional": false,
          "computed": false,
          "start": 1930,
          "end": 1944
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1945,
            "end": 1947
          }
        ],
        "optional": false,
        "start": 1930,
        "end": 1948
      },
      "directive": null,
      "start": 1930,
      "end": 1949
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1950,
            "end": 1951
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 1952,
            "end": 1961
          },
          "optional": false,
          "computed": false,
          "start": 1950,
          "end": 1961
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1962,
            "end": 1964
          }
        ],
        "optional": false,
        "start": 1950,
        "end": 1965
      },
      "directive": null,
      "start": 1950,
      "end": 1966
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1967,
            "end": 1968
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 1969,
            "end": 1985
          },
          "optional": false,
          "computed": false,
          "start": 1967,
          "end": 1985
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 1986,
            "end": 1988
          }
        ],
        "optional": false,
        "start": 1967,
        "end": 1989
      },
      "directive": null,
      "start": 1967,
      "end": 1990
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
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 1991,
            "end": 1992
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 1993,
            "end": 2005
          },
          "optional": false,
          "computed": false,
          "start": 1991,
          "end": 2005
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 2006,
            "end": 2008
          }
        ],
        "optional": false,
        "start": 1991,
        "end": 2009
      },
      "directive": null,
      "start": 1991,
      "end": 2010
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
            "name": "reconstructed",
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
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2037,
                      "end": 2038
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2040,
                        "end": 2046
                      },
                      "start": 2038,
                      "end": 2046
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2037,
                    "end": 2047
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitThis",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2052,
                      "end": 2064
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2071,
                              "end": 2072
                            },
                            "typeArguments": null,
                            "start": 2071,
                            "end": 2072
                          },
                          "start": 2069,
                          "end": 2072
                        },
                        "start": 2065,
                        "end": 2072
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
                            "start": 2077,
                            "end": 2083
                          },
                          "start": 2075,
                          "end": 2083
                        },
                        "start": 2074,
                        "end": 2083
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2086,
                        "end": 2092
                      },
                      "start": 2084,
                      "end": 2092
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2052,
                    "end": 2093
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitC",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2160,
                      "end": 2169
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "C",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2176,
                              "end": 2177
                            },
                            "typeArguments": null,
                            "start": 2176,
                            "end": 2177
                          },
                          "start": 2174,
                          "end": 2177
                        },
                        "start": 2170,
                        "end": 2177
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
                            "start": 2182,
                            "end": 2188
                          },
                          "start": 2180,
                          "end": 2188
                        },
                        "start": 2179,
                        "end": 2188
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2191,
                        "end": 2197
                      },
                      "start": 2189,
                      "end": 2197
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2160,
                    "end": 2198
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitProperty",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2203,
                      "end": 2219
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
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
                                      "name": "n",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2229,
                                      "end": 2230
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 2233,
                                        "end": 2239
                                      },
                                      "start": 2231,
                                      "end": 2239
                                    },
                                    "accessibility": null,
                                    "static": false,
                                    "start": 2229,
                                    "end": 2239
                                  }
                                ],
                                "start": 2228,
                                "end": 2240
                              },
                              "start": 2226,
                              "end": 2240
                            },
                            "start": 2222,
                            "end": 2240
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
                                "start": 2245,
                                "end": 2251
                              },
                              "start": 2243,
                              "end": 2251
                            },
                            "start": 2242,
                            "end": 2251
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2256,
                            "end": 2262
                          },
                          "start": 2253,
                          "end": 2262
                        },
                        "start": 2221,
                        "end": 2262
                      },
                      "start": 2219,
                      "end": 2262
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2203,
                    "end": 2263
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "explicitVoid",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2268,
                      "end": 2280
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
                            "type": "TSVoidKeyword",
                            "start": 2287,
                            "end": 2291
                          },
                          "start": 2285,
                          "end": 2291
                        },
                        "start": 2281,
                        "end": 2291
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
                            "start": 2296,
                            "end": 2302
                          },
                          "start": 2294,
                          "end": 2302
                        },
                        "start": 2293,
                        "end": 2302
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2305,
                        "end": 2311
                      },
                      "start": 2303,
                      "end": 2311
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 2268,
                    "end": 2312
                  }
                ],
                "start": 2030,
                "end": 2314
              },
              "start": 2028,
              "end": 2314
            },
            "start": 2015,
            "end": 2314
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
                  "start": 2324,
                  "end": 2325
                },
                "value": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 2327,
                  "end": 2329
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2324,
                "end": 2329
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
                  "start": 2335,
                  "end": 2347
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2349,
                    "end": 2350
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitThis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2351,
                    "end": 2363
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2349,
                  "end": 2363
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2335,
                "end": 2363
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitC",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2369,
                  "end": 2378
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2380,
                    "end": 2381
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitC",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2382,
                    "end": 2391
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2380,
                  "end": 2391
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2369,
                "end": 2391
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitProperty",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2397,
                  "end": 2413
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2415,
                    "end": 2416
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitProperty",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2417,
                    "end": 2433
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2415,
                  "end": 2433
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2397,
                "end": 2433
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "explicitVoid",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2439,
                  "end": 2451
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2453,
                    "end": 2454
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "explicitVoid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2455,
                    "end": 2467
                  },
                  "optional": false,
                  "computed": false,
                  "start": 2453,
                  "end": 2467
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 2439,
                "end": 2467
              }
            ],
            "start": 2317,
            "end": 2469
          },
          "definite": false,
          "start": 2015,
          "end": 2469
        }
      ],
      "declare": false,
      "start": 2011,
      "end": 2470
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
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 2471,
            "end": 2484
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 2485,
            "end": 2497
          },
          "optional": false,
          "computed": false,
          "start": 2471,
          "end": 2497
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 2498,
            "end": 2500
          }
        ],
        "optional": false,
        "start": 2471,
        "end": 2501
      },
      "directive": null,
      "start": 2471,
      "end": 2502
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
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 2503,
            "end": 2516
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 2517,
            "end": 2533
          },
          "optional": false,
          "computed": false,
          "start": 2503,
          "end": 2533
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 11,
            "raw": "11",
            "start": 2534,
            "end": 2536
          }
        ],
        "optional": false,
        "start": 2503,
        "end": 2537
      },
      "directive": null,
      "start": 2503,
      "end": 2538
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
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 2543,
            "end": 2555
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "reconstructed",
              "optional": false,
              "typeAnnotation": null,
              "start": 2558,
              "end": 2571
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitVoid",
              "optional": false,
              "typeAnnotation": null,
              "start": 2572,
              "end": 2584
            },
            "optional": false,
            "computed": false,
            "start": 2558,
            "end": 2584
          },
          "definite": false,
          "start": 2543,
          "end": 2584
        }
      ],
      "declare": false,
      "start": 2539,
      "end": 2585
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitVoid",
          "optional": false,
          "typeAnnotation": null,
          "start": 2586,
          "end": 2598
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 12,
            "raw": "12",
            "start": 2599,
            "end": 2601
          }
        ],
        "optional": false,
        "start": 2586,
        "end": 2602
      },
      "directive": null,
      "start": 2586,
      "end": 2603
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
            "name": "unboundToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2660,
                              "end": 2661
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2663,
                                "end": 2669
                              },
                              "start": 2661,
                              "end": 2669
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2660,
                            "end": 2669
                          }
                        ],
                        "start": 2658,
                        "end": 2671
                      },
                      "start": 2656,
                      "end": 2671
                    },
                    "start": 2652,
                    "end": 2671
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2676,
                        "end": 2682
                      },
                      "start": 2674,
                      "end": 2682
                    },
                    "start": 2673,
                    "end": 2682
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2687,
                    "end": 2693
                  },
                  "start": 2684,
                  "end": 2693
                },
                "start": 2651,
                "end": 2693
              },
              "start": 2649,
              "end": 2693
            },
            "start": 2631,
            "end": 2693
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2696,
                "end": 2697
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2701,
                "end": 2702
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 2705,
                  "end": 2709
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2710,
                  "end": 2711
                },
                "optional": false,
                "computed": false,
                "start": 2705,
                "end": 2711
              },
              "start": 2701,
              "end": 2711
            },
            "id": null,
            "generator": false,
            "start": 2696,
            "end": 2711
          },
          "definite": false,
          "start": 2631,
          "end": 2711
        }
      ],
      "declare": false,
      "start": 2627,
      "end": 2712
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
            "name": "specifiedToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2763,
                              "end": 2764
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2766,
                                "end": 2772
                              },
                              "start": 2764,
                              "end": 2772
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2763,
                            "end": 2772
                          }
                        ],
                        "start": 2762,
                        "end": 2773
                      },
                      "start": 2760,
                      "end": 2773
                    },
                    "start": 2756,
                    "end": 2773
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2778,
                        "end": 2784
                      },
                      "start": 2776,
                      "end": 2784
                    },
                    "start": 2775,
                    "end": 2784
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2789,
                    "end": 2795
                  },
                  "start": 2786,
                  "end": 2795
                },
                "start": 2755,
                "end": 2795
              },
              "start": 2753,
              "end": 2795
            },
            "start": 2733,
            "end": 2795
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitStructural",
            "optional": false,
            "typeAnnotation": null,
            "start": 2798,
            "end": 2816
          },
          "definite": false,
          "start": 2733,
          "end": 2816
        }
      ],
      "declare": false,
      "start": 2729,
      "end": 2817
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
            "name": "anyToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2847,
                              "end": 2848
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 2850,
                                "end": 2856
                              },
                              "start": 2848,
                              "end": 2856
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 2847,
                            "end": 2856
                          }
                        ],
                        "start": 2845,
                        "end": 2858
                      },
                      "start": 2843,
                      "end": 2858
                    },
                    "start": 2839,
                    "end": 2858
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2863,
                        "end": 2869
                      },
                      "start": 2861,
                      "end": 2869
                    },
                    "start": 2860,
                    "end": 2869
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2874,
                    "end": 2880
                  },
                  "start": 2871,
                  "end": 2880
                },
                "start": 2838,
                "end": 2880
              },
              "start": 2836,
              "end": 2880
            },
            "start": 2822,
            "end": 2880
          },
          "init": {
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
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2895,
                    "end": 2901
                  },
                  "start": 2893,
                  "end": 2901
                },
                "start": 2892,
                "end": 2901
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2904,
                "end": 2910
              },
              "start": 2902,
              "end": 2910
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
                      "start": 2920,
                      "end": 2921
                    },
                    "operator": "+",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 2924,
                      "end": 2926
                    },
                    "start": 2920,
                    "end": 2926
                  },
                  "start": 2913,
                  "end": 2927
                }
              ],
              "start": 2911,
              "end": 2929
            },
            "expression": false,
            "start": 2883,
            "end": 2929
          },
          "definite": false,
          "start": 2822,
          "end": 2929
        }
      ],
      "declare": false,
      "start": 2818,
      "end": 2930
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
            "name": "unspecifiedLambda",
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2959,
                        "end": 2965
                      },
                      "start": 2957,
                      "end": 2965
                    },
                    "start": 2956,
                    "end": 2965
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 2970,
                    "end": 2976
                  },
                  "start": 2967,
                  "end": 2976
                },
                "start": 2955,
                "end": 2976
              },
              "start": 2953,
              "end": 2976
            },
            "start": 2936,
            "end": 2976
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2979,
                "end": 2980
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 2984,
                "end": 2985
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 2988,
                "end": 2990
              },
              "start": 2984,
              "end": 2990
            },
            "id": null,
            "generator": false,
            "start": 2979,
            "end": 2990
          },
          "definite": false,
          "start": 2936,
          "end": 2990
        }
      ],
      "declare": false,
      "start": 2932,
      "end": 2991
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
            "name": "specifiedLambda",
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 3020,
                        "end": 3024
                      },
                      "start": 3018,
                      "end": 3024
                    },
                    "start": 3014,
                    "end": 3024
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3029,
                        "end": 3035
                      },
                      "start": 3027,
                      "end": 3035
                    },
                    "start": 3026,
                    "end": 3035
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3040,
                    "end": 3046
                  },
                  "start": 3037,
                  "end": 3046
                },
                "start": 3013,
                "end": 3046
              },
              "start": 3011,
              "end": 3046
            },
            "start": 2996,
            "end": 3046
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3049,
                "end": 3050
              }
            ],
            "returnType": null,
            "body": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 3054,
                "end": 3055
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 3058,
                "end": 3060
              },
              "start": 3054,
              "end": 3060
            },
            "id": null,
            "generator": false,
            "start": 3049,
            "end": 3060
          },
          "definite": false,
          "start": 2996,
          "end": 3060
        }
      ],
      "declare": false,
      "start": 2992,
      "end": 3061
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
            "name": "unspecifiedLambdaToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3104,
                              "end": 3105
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3107,
                                "end": 3113
                              },
                              "start": 3105,
                              "end": 3113
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3104,
                            "end": 3113
                          }
                        ],
                        "start": 3103,
                        "end": 3114
                      },
                      "start": 3101,
                      "end": 3114
                    },
                    "start": 3097,
                    "end": 3114
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3119,
                        "end": 3125
                      },
                      "start": 3117,
                      "end": 3125
                    },
                    "start": 3116,
                    "end": 3125
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3130,
                    "end": 3136
                  },
                  "start": 3127,
                  "end": 3136
                },
                "start": 3096,
                "end": 3136
              },
              "start": 3094,
              "end": 3136
            },
            "start": 3066,
            "end": 3136
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "unspecifiedLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 3139,
            "end": 3156
          },
          "definite": false,
          "start": 3066,
          "end": 3156
        }
      ],
      "declare": false,
      "start": 3062,
      "end": 3157
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
            "name": "specifiedLambdaToSpecified",
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
                    "name": "this",
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
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3198,
                              "end": 3199
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3201,
                                "end": 3207
                              },
                              "start": 3199,
                              "end": 3207
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3198,
                            "end": 3207
                          }
                        ],
                        "start": 3197,
                        "end": 3208
                      },
                      "start": 3195,
                      "end": 3208
                    },
                    "start": 3191,
                    "end": 3208
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 3213,
                        "end": 3219
                      },
                      "start": 3211,
                      "end": 3219
                    },
                    "start": 3210,
                    "end": 3219
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3224,
                    "end": 3230
                  },
                  "start": 3221,
                  "end": 3230
                },
                "start": 3190,
                "end": 3230
              },
              "start": 3188,
              "end": 3230
            },
            "start": 3162,
            "end": 3230
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "specifiedLambda",
            "optional": false,
            "typeAnnotation": null,
            "start": 3233,
            "end": 3248
          },
          "definite": false,
          "start": 3162,
          "end": 3248
        }
      ],
      "declare": false,
      "start": 3158,
      "end": 3249
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
            "name": "explicitCFunction",
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
                    "name": "this",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3282,
                          "end": 3283
                        },
                        "typeArguments": null,
                        "start": 3282,
                        "end": 3283
                      },
                      "start": 3280,
                      "end": 3283
                    },
                    "start": 3276,
                    "end": 3283
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
                        "start": 3288,
                        "end": 3294
                      },
                      "start": 3286,
                      "end": 3294
                    },
                    "start": 3285,
                    "end": 3294
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3299,
                    "end": 3305
                  },
                  "start": 3296,
                  "end": 3305
                },
                "start": 3275,
                "end": 3305
              },
              "start": 3273,
              "end": 3305
            },
            "start": 3256,
            "end": 3305
          },
          "init": null,
          "definite": false,
          "start": 3256,
          "end": 3305
        }
      ],
      "declare": false,
      "start": 3252,
      "end": 3306
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
            "name": "explicitPropertyFunction",
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
                    "name": "this",
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
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3345,
                              "end": 3346
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 3348,
                                "end": 3354
                              },
                              "start": 3346,
                              "end": 3354
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 3345,
                            "end": 3354
                          }
                        ],
                        "start": 3344,
                        "end": 3355
                      },
                      "start": 3342,
                      "end": 3355
                    },
                    "start": 3338,
                    "end": 3355
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
                        "start": 3360,
                        "end": 3366
                      },
                      "start": 3358,
                      "end": 3366
                    },
                    "start": 3357,
                    "end": 3366
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3371,
                    "end": 3377
                  },
                  "start": 3368,
                  "end": 3377
                },
                "start": 3337,
                "end": 3377
              },
              "start": 3335,
              "end": 3377
            },
            "start": 3311,
            "end": 3377
          },
          "init": null,
          "definite": false,
          "start": 3311,
          "end": 3377
        }
      ],
      "declare": false,
      "start": 3307,
      "end": 3378
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
            "start": 3379,
            "end": 3380
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3381,
            "end": 3390
          },
          "optional": false,
          "computed": false,
          "start": 3379,
          "end": 3390
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 3393,
          "end": 3410
        },
        "start": 3379,
        "end": 3410
      },
      "directive": null,
      "start": 3379,
      "end": 3411
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
            "start": 3412,
            "end": 3413
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3414,
            "end": 3423
          },
          "optional": false,
          "computed": false,
          "start": 3412,
          "end": 3423
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3441,
                    "end": 3442
                  },
                  "typeArguments": null,
                  "start": 3441,
                  "end": 3442
                },
                "start": 3439,
                "end": 3442
              },
              "start": 3435,
              "end": 3442
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
                  "start": 3447,
                  "end": 3453
                },
                "start": 3445,
                "end": 3453
              },
              "start": 3444,
              "end": 3453
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 3464,
                      "end": 3468
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3469,
                      "end": 3470
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3464,
                    "end": 3470
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3473,
                    "end": 3474
                  },
                  "start": 3464,
                  "end": 3474
                },
                "start": 3457,
                "end": 3474
              }
            ],
            "start": 3455,
            "end": 3476
          },
          "expression": false,
          "start": 3426,
          "end": 3476
        },
        "start": 3412,
        "end": 3476
      },
      "directive": null,
      "start": 3412,
      "end": 3477
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
            "start": 3478,
            "end": 3479
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3480,
            "end": 3496
          },
          "optional": false,
          "computed": false,
          "start": 3478,
          "end": 3496
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitPropertyFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 3499,
          "end": 3523
        },
        "start": 3478,
        "end": 3523
      },
      "directive": null,
      "start": 3478,
      "end": 3524
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
            "start": 3525,
            "end": 3526
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3527,
            "end": 3543
          },
          "optional": false,
          "computed": false,
          "start": 3525,
          "end": 3543
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
              "name": "this",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3562,
                        "end": 3563
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 3565,
                          "end": 3571
                        },
                        "start": 3563,
                        "end": 3571
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 3562,
                      "end": 3571
                    }
                  ],
                  "start": 3561,
                  "end": 3572
                },
                "start": 3559,
                "end": 3572
              },
              "start": 3555,
              "end": 3572
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
                  "start": 3577,
                  "end": 3583
                },
                "start": 3575,
                "end": 3583
              },
              "start": 3574,
              "end": 3583
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 3594,
                      "end": 3598
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3599,
                      "end": 3600
                    },
                    "optional": false,
                    "computed": false,
                    "start": 3594,
                    "end": 3600
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3603,
                    "end": 3604
                  },
                  "start": 3594,
                  "end": 3604
                },
                "start": 3587,
                "end": 3604
              }
            ],
            "start": 3585,
            "end": 3606
          },
          "expression": false,
          "start": 3546,
          "end": 3606
        },
        "start": 3525,
        "end": 3606
      },
      "directive": null,
      "start": 3525,
      "end": 3607
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
            "start": 3608,
            "end": 3609
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3610,
            "end": 3626
          },
          "optional": false,
          "computed": false,
          "start": 3608,
          "end": 3626
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "reconstructed",
            "optional": false,
            "typeAnnotation": null,
            "start": 3629,
            "end": 3642
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3643,
            "end": 3659
          },
          "optional": false,
          "computed": false,
          "start": 3629,
          "end": 3659
        },
        "start": 3608,
        "end": 3659
      },
      "directive": null,
      "start": 3608,
      "end": 3660
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
            "start": 3700,
            "end": 3701
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3702,
            "end": 3711
          },
          "optional": false,
          "computed": false,
          "start": 3700,
          "end": 3711
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3714,
              "end": 3715
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3719,
            "end": 3720
          },
          "id": null,
          "generator": false,
          "start": 3714,
          "end": 3720
        },
        "start": 3700,
        "end": 3720
      },
      "directive": null,
      "start": 3700,
      "end": 3721
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
            "start": 3722,
            "end": 3723
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 3724,
            "end": 3736
          },
          "optional": false,
          "computed": false,
          "start": 3722,
          "end": 3736
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3739,
              "end": 3740
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3744,
            "end": 3745
          },
          "id": null,
          "generator": false,
          "start": 3739,
          "end": 3745
        },
        "start": 3722,
        "end": 3745
      },
      "directive": null,
      "start": 3722,
      "end": 3746
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
            "start": 3747,
            "end": 3748
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3749,
            "end": 3765
          },
          "optional": false,
          "computed": false,
          "start": 3747,
          "end": 3765
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3768,
              "end": 3769
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 3773,
            "end": 3774
          },
          "id": null,
          "generator": false,
          "start": 3768,
          "end": 3774
        },
        "start": 3747,
        "end": 3774
      },
      "directive": null,
      "start": 3747,
      "end": 3775
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
            "start": 3881,
            "end": 3882
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 3883,
            "end": 3892
          },
          "optional": false,
          "computed": false,
          "start": 3881,
          "end": 3892
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3895,
              "end": 3896
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3900,
              "end": 3901
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3904,
                "end": 3908
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3909,
                "end": 3910
              },
              "optional": false,
              "computed": false,
              "start": 3904,
              "end": 3910
            },
            "start": 3900,
            "end": 3910
          },
          "id": null,
          "generator": false,
          "start": 3895,
          "end": 3910
        },
        "start": 3881,
        "end": 3910
      },
      "directive": null,
      "start": 3881,
      "end": 3911
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
            "start": 3912,
            "end": 3913
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 3914,
            "end": 3926
          },
          "optional": false,
          "computed": false,
          "start": 3912,
          "end": 3926
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3929,
              "end": 3930
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3934,
              "end": 3935
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3938,
                "end": 3942
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3943,
                "end": 3944
              },
              "optional": false,
              "computed": false,
              "start": 3938,
              "end": 3944
            },
            "start": 3934,
            "end": 3944
          },
          "id": null,
          "generator": false,
          "start": 3929,
          "end": 3944
        },
        "start": 3912,
        "end": 3944
      },
      "directive": null,
      "start": 3912,
      "end": 3945
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
            "start": 3946,
            "end": 3947
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 3948,
            "end": 3964
          },
          "optional": false,
          "computed": false,
          "start": 3946,
          "end": 3964
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3967,
              "end": 3968
            }
          ],
          "returnType": null,
          "body": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 3972,
              "end": 3973
            },
            "operator": "+",
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 3976,
                "end": 3980
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 3981,
                "end": 3982
              },
              "optional": false,
              "computed": false,
              "start": 3976,
              "end": 3982
            },
            "start": 3972,
            "end": 3982
          },
          "id": null,
          "generator": false,
          "start": 3967,
          "end": 3982
        },
        "start": 3946,
        "end": 3982
      },
      "directive": null,
      "start": 3946,
      "end": 3983
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
            "start": 4015,
            "end": 4016
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4017,
            "end": 4029
          },
          "optional": false,
          "computed": false,
          "start": 4015,
          "end": 4029
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "explicitCFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 4032,
          "end": 4049
        },
        "start": 4015,
        "end": 4049
      },
      "directive": null,
      "start": 4015,
      "end": 4050
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
            "start": 4051,
            "end": 4052
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4053,
            "end": 4065
          },
          "optional": false,
          "computed": false,
          "start": 4051,
          "end": 4065
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "C",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4083,
                    "end": 4084
                  },
                  "typeArguments": null,
                  "start": 4083,
                  "end": 4084
                },
                "start": 4081,
                "end": 4084
              },
              "start": 4077,
              "end": 4084
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
                  "start": 4089,
                  "end": 4095
                },
                "start": 4087,
                "end": 4095
              },
              "start": 4086,
              "end": 4095
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4106,
                      "end": 4110
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4111,
                      "end": 4112
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4106,
                    "end": 4112
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4115,
                    "end": 4116
                  },
                  "start": 4106,
                  "end": 4116
                },
                "start": 4099,
                "end": 4116
              }
            ],
            "start": 4097,
            "end": 4118
          },
          "expression": false,
          "start": 4068,
          "end": 4118
        },
        "start": 4051,
        "end": 4118
      },
      "directive": null,
      "start": 4051,
      "end": 4119
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
            "start": 4147,
            "end": 4148
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 4149,
            "end": 4158
          },
          "optional": false,
          "computed": false,
          "start": 4147,
          "end": 4158
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
              "start": 4170,
              "end": 4171
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4182,
                      "end": 4186
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4187,
                      "end": 4188
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4182,
                    "end": 4188
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4191,
                    "end": 4192
                  },
                  "start": 4182,
                  "end": 4192
                },
                "start": 4175,
                "end": 4192
              }
            ],
            "start": 4173,
            "end": 4194
          },
          "expression": false,
          "start": 4161,
          "end": 4194
        },
        "start": 4147,
        "end": 4194
      },
      "directive": null,
      "start": 4147,
      "end": 4195
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
            "start": 4196,
            "end": 4197
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 4198,
            "end": 4214
          },
          "optional": false,
          "computed": false,
          "start": 4196,
          "end": 4214
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
              "start": 4226,
              "end": 4227
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4238,
                      "end": 4242
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4243,
                      "end": 4244
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4238,
                    "end": 4244
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4247,
                    "end": 4248
                  },
                  "start": 4238,
                  "end": 4248
                },
                "start": 4231,
                "end": 4248
              }
            ],
            "start": 4229,
            "end": 4250
          },
          "expression": false,
          "start": 4217,
          "end": 4250
        },
        "start": 4196,
        "end": 4250
      },
      "directive": null,
      "start": 4196,
      "end": 4251
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
            "start": 4252,
            "end": 4253
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4254,
            "end": 4266
          },
          "optional": false,
          "computed": false,
          "start": 4252,
          "end": 4266
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
              "start": 4278,
              "end": 4279
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4290,
                      "end": 4294
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4295,
                      "end": 4296
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4290,
                    "end": 4296
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4299,
                    "end": 4300
                  },
                  "start": 4290,
                  "end": 4300
                },
                "start": 4283,
                "end": 4300
              }
            ],
            "start": 4281,
            "end": 4302
          },
          "expression": false,
          "start": 4269,
          "end": 4302
        },
        "start": 4252,
        "end": 4302
      },
      "directive": null,
      "start": 4252,
      "end": 4303
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
            "start": 4332,
            "end": 4333
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 4334,
            "end": 4346
          },
          "optional": false,
          "computed": false,
          "start": 4332,
          "end": 4346
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
              "name": "this",
              "optional": false,
              "typeAnnotation": null,
              "start": 4358,
              "end": 4362
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 4364,
              "end": 4365
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4376,
                      "end": 4380
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4381,
                      "end": 4382
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4376,
                    "end": 4382
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4385,
                    "end": 4386
                  },
                  "start": 4376,
                  "end": 4386
                },
                "start": 4369,
                "end": 4386
              }
            ],
            "start": 4367,
            "end": 4388
          },
          "expression": false,
          "start": 4349,
          "end": 4388
        },
        "start": 4332,
        "end": 4388
      },
      "directive": null,
      "start": 4332,
      "end": 4389
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
            "start": 4425,
            "end": 4426
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitC",
            "optional": false,
            "typeAnnotation": null,
            "start": 4427,
            "end": 4436
          },
          "optional": false,
          "computed": false,
          "start": 4425,
          "end": 4436
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
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4454,
                    "end": 4455
                  },
                  "typeArguments": null,
                  "start": 4454,
                  "end": 4455
                },
                "start": 4452,
                "end": 4455
              },
              "start": 4448,
              "end": 4455
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
                  "start": 4460,
                  "end": 4466
                },
                "start": 4458,
                "end": 4466
              },
              "start": 4457,
              "end": 4466
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
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 4477,
                      "end": 4481
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "n",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4482,
                      "end": 4483
                    },
                    "optional": false,
                    "computed": false,
                    "start": 4477,
                    "end": 4483
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4486,
                    "end": 4487
                  },
                  "start": 4477,
                  "end": 4487
                },
                "start": 4470,
                "end": 4487
              }
            ],
            "start": 4468,
            "end": 4489
          },
          "expression": false,
          "start": 4439,
          "end": 4489
        },
        "start": 4425,
        "end": 4489
      },
      "directive": null,
      "start": 4425,
      "end": 4490
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
            "start": 4519,
            "end": 4520
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicitVoid",
            "optional": false,
            "typeAnnotation": null,
            "start": 4521,
            "end": 4533
          },
          "optional": false,
          "computed": false,
          "start": 4519,
          "end": 4533
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": true,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 4536,
              "end": 4537
            }
          ],
          "returnType": null,
          "body": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 4541,
            "end": 4542
          },
          "id": null,
          "generator": false,
          "start": 4536,
          "end": 4542
        },
        "start": 4519,
        "end": 4542
      },
      "directive": null,
      "start": 4519,
      "end": 4543
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4580,
        "end": 4585
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
              "start": 4592,
              "end": 4593
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4595,
                "end": 4601
              },
              "start": 4593,
              "end": 4601
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
            "start": 4592,
            "end": 4602
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "polymorphic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4614,
              "end": 4625
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
                      "start": 4632,
                      "end": 4636
                    },
                    "start": 4630,
                    "end": 4636
                  },
                  "start": 4626,
                  "end": 4636
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4639,
                  "end": 4645
                },
                "start": 4637,
                "end": 4645
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4655,
                        "end": 4659
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4660,
                        "end": 4661
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4655,
                      "end": 4661
                    },
                    "start": 4648,
                    "end": 4662
                  }
                ],
                "start": 4646,
                "end": 4664
              },
              "expression": false,
              "start": 4625,
              "end": 4664
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 4607,
            "end": 4664
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4669,
              "end": 4677
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4684,
                        "end": 4689
                      },
                      "typeArguments": null,
                      "start": 4684,
                      "end": 4689
                    },
                    "start": 4682,
                    "end": 4689
                  },
                  "start": 4678,
                  "end": 4689
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4692,
                  "end": 4698
                },
                "start": 4690,
                "end": 4698
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4708,
                        "end": 4712
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4713,
                        "end": 4714
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4708,
                      "end": 4714
                    },
                    "start": 4701,
                    "end": 4715
                  }
                ],
                "start": 4699,
                "end": 4717
              },
              "expression": false,
              "start": 4677,
              "end": 4717
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4669,
            "end": 4717
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicitStatic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4729,
              "end": 4743
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
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4757,
                        "end": 4762
                      },
                      "typeArguments": null,
                      "start": 4750,
                      "end": 4762
                    },
                    "start": 4748,
                    "end": 4762
                  },
                  "start": 4744,
                  "end": 4762
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4765,
                  "end": 4771
                },
                "start": 4763,
                "end": 4771
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4781,
                        "end": 4785
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4786,
                        "end": 4787
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4781,
                      "end": 4787
                    },
                    "start": 4774,
                    "end": 4788
                  }
                ],
                "start": 4772,
                "end": 4790
              },
              "expression": false,
              "start": 4743,
              "end": 4790
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4722,
            "end": 4790
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4802,
              "end": 4803
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4805,
                "end": 4811
              },
              "start": 4803,
              "end": 4811
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 4795,
            "end": 4812
          }
        ],
        "start": 4586,
        "end": 4814
      },
      "abstract": false,
      "declare": false,
      "start": 4574,
      "end": 4814
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4821,
        "end": 4829
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4838,
        "end": 4843
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
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 4850,
              "end": 4851
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4853,
                "end": 4859
              },
              "start": 4851,
              "end": 4859
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
            "start": 4850,
            "end": 4859
          }
        ],
        "start": 4844,
        "end": 4861
      },
      "abstract": false,
      "declare": false,
      "start": 4815,
      "end": 4861
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4868,
        "end": 4873
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
              "start": 4880,
              "end": 4881
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 4883,
                "end": 4889
              },
              "start": 4881,
              "end": 4889
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
            "start": 4880,
            "end": 4889
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "polymorphic",
              "optional": false,
              "typeAnnotation": null,
              "start": 4894,
              "end": 4905
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
                      "start": 4912,
                      "end": 4916
                    },
                    "start": 4910,
                    "end": 4916
                  },
                  "start": 4906,
                  "end": 4916
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4919,
                  "end": 4925
                },
                "start": 4917,
                "end": 4925
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4935,
                        "end": 4939
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4940,
                        "end": 4941
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4935,
                      "end": 4941
                    },
                    "start": 4928,
                    "end": 4942
                  }
                ],
                "start": 4926,
                "end": 4944
              },
              "expression": false,
              "start": 4905,
              "end": 4944
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4894,
            "end": 4944
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "explicit",
              "optional": false,
              "typeAnnotation": null,
              "start": 4949,
              "end": 4957
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4964,
                        "end": 4969
                      },
                      "typeArguments": null,
                      "start": 4964,
                      "end": 4969
                    },
                    "start": 4962,
                    "end": 4969
                  },
                  "start": 4958,
                  "end": 4969
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 4972,
                  "end": 4978
                },
                "start": 4970,
                "end": 4978
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 4988,
                        "end": 4992
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4993,
                        "end": 4994
                      },
                      "optional": false,
                      "computed": false,
                      "start": 4988,
                      "end": 4994
                    },
                    "start": 4981,
                    "end": 4995
                  }
                ],
                "start": 4979,
                "end": 4997
              },
              "expression": false,
              "start": 4957,
              "end": 4997
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 4949,
            "end": 4997
          }
        ],
        "start": 4874,
        "end": 4999
      },
      "abstract": false,
      "declare": false,
      "start": 4862,
      "end": 4999
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5006,
        "end": 5014
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base2",
        "optional": false,
        "typeAnnotation": null,
        "start": 5023,
        "end": 5028
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
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 5035,
              "end": 5036
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 5038,
                "end": 5044
              },
              "start": 5036,
              "end": 5044
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
            "start": 5035,
            "end": 5044
          }
        ],
        "start": 5029,
        "end": 5046
      },
      "abstract": false,
      "declare": false,
      "start": 5000,
      "end": 5046
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5051,
            "end": 5053
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5060,
              "end": 5065
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5056,
            "end": 5067
          },
          "definite": false,
          "start": 5051,
          "end": 5067
        }
      ],
      "declare": false,
      "start": 5047,
      "end": 5068
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
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5073,
            "end": 5075
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5082,
              "end": 5087
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5078,
            "end": 5089
          },
          "definite": false,
          "start": 5073,
          "end": 5089
        }
      ],
      "declare": false,
      "start": 5069,
      "end": 5090
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5095,
            "end": 5097
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived1",
              "optional": false,
              "typeAnnotation": null,
              "start": 5104,
              "end": 5112
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5100,
            "end": 5114
          },
          "definite": false,
          "start": 5095,
          "end": 5114
        }
      ],
      "declare": false,
      "start": 5091,
      "end": 5115
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5120,
            "end": 5122
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived2",
              "optional": false,
              "typeAnnotation": null,
              "start": 5129,
              "end": 5137
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5125,
            "end": 5139
          },
          "definite": false,
          "start": 5120,
          "end": 5139
        }
      ],
      "declare": false,
      "start": 5116,
      "end": 5140
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5141,
            "end": 5143
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5144,
            "end": 5155
          },
          "optional": false,
          "computed": false,
          "start": 5141,
          "end": 5155
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5158,
            "end": 5160
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5161,
            "end": 5172
          },
          "optional": false,
          "computed": false,
          "start": 5158,
          "end": 5172
        },
        "start": 5141,
        "end": 5172
      },
      "directive": null,
      "start": 5141,
      "end": 5172
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5204,
            "end": 5206
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5207,
            "end": 5218
          },
          "optional": false,
          "computed": false,
          "start": 5204,
          "end": 5218
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5221,
            "end": 5223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5224,
            "end": 5235
          },
          "optional": false,
          "computed": false,
          "start": 5221,
          "end": 5235
        },
        "start": 5204,
        "end": 5235
      },
      "directive": null,
      "start": 5204,
      "end": 5235
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
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5296,
            "end": 5298
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5299,
            "end": 5310
          },
          "optional": false,
          "computed": false,
          "start": 5296,
          "end": 5310
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5313,
            "end": 5315
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5316,
            "end": 5327
          },
          "optional": false,
          "computed": false,
          "start": 5313,
          "end": 5327
        },
        "start": 5296,
        "end": 5327
      },
      "directive": null,
      "start": 5296,
      "end": 5327
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
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5354,
            "end": 5356
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5357,
            "end": 5368
          },
          "optional": false,
          "computed": false,
          "start": 5354,
          "end": 5368
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5371,
            "end": 5373
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5374,
            "end": 5382
          },
          "optional": false,
          "computed": false,
          "start": 5371,
          "end": 5382
        },
        "start": 5354,
        "end": 5382
      },
      "directive": null,
      "start": 5354,
      "end": 5382
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5406,
            "end": 5408
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5409,
            "end": 5420
          },
          "optional": false,
          "computed": false,
          "start": 5406,
          "end": 5420
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5423,
            "end": 5425
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5426,
            "end": 5437
          },
          "optional": false,
          "computed": false,
          "start": 5423,
          "end": 5437
        },
        "start": 5406,
        "end": 5437
      },
      "directive": null,
      "start": 5406,
      "end": 5437
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
            "name": "b1",
            "optional": false,
            "typeAnnotation": null,
            "start": 5477,
            "end": 5479
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "explicit",
            "optional": false,
            "typeAnnotation": null,
            "start": 5480,
            "end": 5488
          },
          "optional": false,
          "computed": false,
          "start": 5477,
          "end": 5488
        },
        "right": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null,
            "start": 5491,
            "end": 5493
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "polymorphic",
            "optional": false,
            "typeAnnotation": null,
            "start": 5494,
            "end": 5505
          },
          "optional": false,
          "computed": false,
          "start": 5491,
          "end": 5505
        },
        "start": 5477,
        "end": 5505
      },
      "directive": null,
      "start": 5477,
      "end": 5505
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InterfaceThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5607,
        "end": 5620
      },
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 5627,
                "end": 5628
              },
              "typeArguments": null,
              "start": 5627,
              "end": 5628
            },
            "start": 5625,
            "end": 5628
          },
          "start": 5621,
          "end": 5628
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 5636,
                  "end": 5640
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5641,
                  "end": 5642
                },
                "optional": false,
                "computed": false,
                "start": 5636,
                "end": 5642
              },
              "right": {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 5645,
                "end": 5647
              },
              "start": 5636,
              "end": 5647
            },
            "directive": null,
            "start": 5636,
            "end": 5648
          }
        ],
        "start": 5630,
        "end": 5650
      },
      "expression": false,
      "start": 5598,
      "end": 5650
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LiteralTypeThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5660,
        "end": 5675
      },
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
                    "start": 5683,
                    "end": 5684
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 5686,
                      "end": 5692
                    },
                    "start": 5684,
                    "end": 5692
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5683,
                  "end": 5692
                }
              ],
              "start": 5682,
              "end": 5693
            },
            "start": 5680,
            "end": 5693
          },
          "start": 5676,
          "end": 5693
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 5701,
                  "end": 5705
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5706,
                  "end": 5707
                },
                "optional": false,
                "computed": false,
                "start": 5701,
                "end": 5707
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 5710,
                "end": 5714
              },
              "start": 5701,
              "end": 5714
            },
            "directive": null,
            "start": 5701,
            "end": 5715
          }
        ],
        "start": 5695,
        "end": 5717
      },
      "expression": false,
      "start": 5651,
      "end": 5717
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnyThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 5727,
        "end": 5734
      },
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
              "type": "TSAnyKeyword",
              "start": 5741,
              "end": 5744
            },
            "start": 5739,
            "end": 5744
          },
          "start": 5735,
          "end": 5744
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 5752,
                  "end": 5756
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5757,
                  "end": 5758
                },
                "optional": false,
                "computed": false,
                "start": 5752,
                "end": 5758
              },
              "right": {
                "type": "Literal",
                "value": "ok",
                "raw": "\"ok\"",
                "start": 5761,
                "end": 5765
              },
              "start": 5752,
              "end": 5765
            },
            "directive": null,
            "start": 5752,
            "end": 5766
          }
        ],
        "start": 5746,
        "end": 5768
      },
      "expression": false,
      "start": 5718,
      "end": 5768
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
            "name": "interfaceThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5773,
            "end": 5786
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "InterfaceThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5793,
              "end": 5806
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5789,
            "end": 5808
          },
          "definite": false,
          "start": 5773,
          "end": 5808
        }
      ],
      "declare": false,
      "start": 5769,
      "end": 5809
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
            "name": "literalTypeThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5814,
            "end": 5829
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "LiteralTypeThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5836,
              "end": 5851
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5832,
            "end": 5853
          },
          "definite": false,
          "start": 5814,
          "end": 5853
        }
      ],
      "declare": false,
      "start": 5810,
      "end": 5854
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
            "name": "anyThis",
            "optional": false,
            "typeAnnotation": null,
            "start": 5859,
            "end": 5866
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "AnyThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 5873,
              "end": 5880
            },
            "typeArguments": null,
            "arguments": [],
            "start": 5869,
            "end": 5882
          },
          "definite": false,
          "start": 5859,
          "end": 5882
        }
      ],
      "declare": false,
      "start": 5855,
      "end": 5883
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 5949,
                            "end": 5953
                          },
                          "start": 5947,
                          "end": 5953
                        },
                        "start": 5943,
                        "end": 5953
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 5958,
                            "end": 5964
                          },
                          "start": 5956,
                          "end": 5964
                        },
                        "start": 5955,
                        "end": 5964
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 5967,
                        "end": 5973
                      },
                      "start": 5965,
                      "end": 5973
                    },
                    "start": 5942,
                    "end": 5974
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "call",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5980,
                      "end": 5984
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5985,
                            "end": 5986
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 5985,
                          "end": 5986
                        }
                      ],
                      "start": 5984,
                      "end": 5987
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "RestElement",
                                "decorators": [],
                                "argument": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "argArray",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5998,
                                  "end": 6006
                                },
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSArrayType",
                                    "elementType": {
                                      "type": "TSAnyKeyword",
                                      "start": 6008,
                                      "end": 6011
                                    },
                                    "start": 6008,
                                    "end": 6013
                                  },
                                  "start": 6006,
                                  "end": 6013
                                },
                                "value": null,
                                "start": 5995,
                                "end": 6013
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6018,
                                  "end": 6019
                                },
                                "typeArguments": null,
                                "start": 6018,
                                "end": 6019
                              },
                              "start": 6015,
                              "end": 6019
                            },
                            "start": 5994,
                            "end": 6019
                          },
                          "start": 5992,
                          "end": 6019
                        },
                        "start": 5988,
                        "end": 6019
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "argArray",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6024,
                          "end": 6032
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 6034,
                              "end": 6037
                            },
                            "start": 6034,
                            "end": 6039
                          },
                          "start": 6032,
                          "end": 6039
                        },
                        "value": null,
                        "start": 6021,
                        "end": 6039
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6042,
                          "end": 6043
                        },
                        "typeArguments": null,
                        "start": 6042,
                        "end": 6043
                      },
                      "start": 6040,
                      "end": 6043
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 5980,
                    "end": 6044
                  }
                ],
                "start": 5935,
                "end": 6046
              },
              "start": 5933,
              "end": 6046
            },
            "start": 5932,
            "end": 6046
          },
          "init": null,
          "definite": false,
          "start": 5932,
          "end": 6046
        }
      ],
      "declare": true,
      "start": 5920,
      "end": 6047
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 6055,
                "end": 6061
              },
              "start": 6053,
              "end": 6061
            },
            "start": 6052,
            "end": 6061
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 6064,
                "end": 6065
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "call",
                "optional": false,
                "typeAnnotation": null,
                "start": 6066,
                "end": 6070
              },
              "optional": false,
              "computed": false,
              "start": 6064,
              "end": 6070
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 12,
                "raw": "12",
                "start": 6071,
                "end": 6073
              }
            ],
            "optional": false,
            "start": 6064,
            "end": 6074
          },
          "definite": false,
          "start": 6052,
          "end": 6074
        }
      ],
      "declare": false,
      "start": 6048,
      "end": 6075
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "missingTypeIsImplicitAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 6086,
        "end": 6110
      },
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
          "typeAnnotation": null,
          "start": 6111,
          "end": 6115
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 6120,
              "end": 6126
            },
            "start": 6118,
            "end": 6126
          },
          "start": 6117,
          "end": 6126
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
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 6137,
                  "end": 6141
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "anything",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6142,
                  "end": 6150
                },
                "optional": false,
                "computed": false,
                "start": 6137,
                "end": 6150
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 6153,
                "end": 6154
              },
              "start": 6137,
              "end": 6154
            },
            "start": 6130,
            "end": 6155
          }
        ],
        "start": 6128,
        "end": 6157
      },
      "expression": false,
      "start": 6077,
      "end": 6157
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 17,
  "end": 6158
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 17,
    "end": 22,
    "range": [
      17,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 34,
    "end": 40,
    "range": [
      34,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 44,
    "end": 49,
    "range": [
      44,
      49
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53,
    "range": [
      52,
      53
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 61,
    "end": 67,
    "range": [
      61,
      67
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68,
    "range": [
      67,
      68
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 73,
    "end": 85,
    "range": [
      73,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 86,
    "end": 90,
    "range": [
      86,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 92,
    "end": 96,
    "range": [
      92,
      96
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 96,
    "end": 97,
    "range": [
      96,
      97
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 98,
    "end": 99,
    "range": [
      98,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 99,
    "end": 100,
    "range": [
      99,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 101,
    "end": 107,
    "range": [
      101,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 110,
    "end": 116,
    "range": [
      110,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118,
    "range": [
      117,
      118
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 127,
    "end": 133,
    "range": [
      127,
      133
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 156,
    "end": 165,
    "range": [
      156,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 166,
    "end": 170,
    "range": [
      166,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 178,
    "end": 184,
    "range": [
      178,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 187,
    "end": 193,
    "range": [
      187,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 211,
    "end": 215,
    "range": [
      211,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 216,
    "end": 217,
    "range": [
      216,
      217
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 233,
    "end": 249,
    "range": [
      233,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 250,
    "end": 254,
    "range": [
      250,
      254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 257,
    "end": 258,
    "range": [
      257,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
    "end": 259,
    "range": [
      258,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 260,
    "end": 266,
    "range": [
      260,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 272,
    "end": 278,
    "range": [
      272,
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
    "value": ":",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 281,
    "end": 287,
    "range": [
      281,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 305,
    "end": 309,
    "range": [
      305,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 309,
    "end": 310,
    "range": [
      309,
      310
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322,
    "range": [
      321,
      322
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 327,
    "end": 339,
    "range": [
      327,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 339,
    "end": 340,
    "range": [
      339,
      340
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 340,
    "end": 344,
    "range": [
      340,
      344
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 346,
    "end": 350,
    "range": [
      346,
      350
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 350,
    "end": 351,
    "range": [
      350,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 355,
    "end": 361,
    "range": [
      355,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 364,
    "end": 370,
    "range": [
      364,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 381,
    "end": 387,
    "range": [
      381,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 388,
    "end": 389,
    "range": [
      388,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 390,
    "end": 391,
    "range": [
      390,
      391
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 403,
    "end": 408,
    "range": [
      403,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 409,
    "end": 410,
    "range": [
      409,
      410
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 423,
    "end": 424,
    "range": [
      423,
      424
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 425,
    "end": 434,
    "range": [
      425,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 458,
    "end": 471,
    "range": [
      458,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 471,
    "end": 472,
    "range": [
      471,
      472
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 472,
    "end": 476,
    "range": [
      472,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 478,
    "end": 482,
    "range": [
      478,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 497,
    "end": 510,
    "range": [
      497,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 511,
    "end": 515,
    "range": [
      511,
      515
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 517,
    "end": 521,
    "range": [
      517,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 524,
    "end": 530,
    "range": [
      524,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 536,
    "end": 554,
    "range": [
      536,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 555,
    "end": 559,
    "range": [
      555,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 565,
    "end": 571,
    "range": [
      565,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 587,
    "end": 604,
    "range": [
      587,
      604
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 604,
    "end": 605,
    "range": [
      604,
      605
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 605,
    "end": 609,
    "range": [
      605,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 615,
    "end": 621,
    "range": [
      615,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 627,
    "end": 639,
    "range": [
      627,
      639
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 640,
    "end": 644,
    "range": [
      640,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 646,
    "end": 650,
    "range": [
      646,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 653,
    "end": 659,
    "range": [
      653,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 663,
    "end": 671,
    "range": [
      663,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 672,
    "end": 690,
    "range": [
      672,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 691,
    "end": 695,
    "range": [
      691,
      695
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 700,
    "end": 701,
    "range": [
      700,
      701
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 712,
    "end": 713,
    "range": [
      712,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 715,
    "end": 721,
    "range": [
      715,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 721,
    "end": 722,
    "range": [
      721,
      722
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 724,
    "end": 730,
    "range": [
      724,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 737,
    "end": 743,
    "range": [
      737,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 746,
    "end": 747,
    "range": [
      746,
      747
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 748,
    "end": 752,
    "range": [
      748,
      752
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 752,
    "end": 753,
    "range": [
      752,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 758,
    "end": 766,
    "range": [
      758,
      766
    ]
  },
  {
    "type": "Identifier",
    "value": "justThis",
    "start": 767,
    "end": 775,
    "range": [
      767,
      775
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776,
    "range": [
      775,
      776
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 776,
    "end": 780,
    "range": [
      776,
      780
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 784,
    "end": 785,
    "range": [
      784,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 787,
    "end": 793,
    "range": [
      787,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 798,
    "end": 804,
    "range": [
      798,
      804
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 805,
    "end": 806,
    "range": [
      805,
      806
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 811,
    "end": 817,
    "range": [
      811,
      817
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 818,
    "end": 822,
    "range": [
      818,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 828,
    "end": 836,
    "range": [
      828,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 837,
    "end": 849,
    "range": [
      837,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 853,
    "end": 859,
    "range": [
      853,
      859
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 860,
    "end": 861,
    "range": [
      860,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 862,
    "end": 868,
    "range": [
      862,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 875,
    "end": 881,
    "range": [
      875,
      881
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 882,
    "end": 886,
    "range": [
      882,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 895,
    "end": 897,
    "range": [
      895,
      897
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 897,
    "end": 898,
    "range": [
      897,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 901,
    "end": 904,
    "range": [
      901,
      904
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 905,
    "end": 909,
    "range": [
      905,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 921,
    "end": 922,
    "range": [
      921,
      922
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 922,
    "end": 923,
    "range": [
      922,
      923
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 924,
    "end": 926,
    "range": [
      924,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 932,
    "end": 945,
    "range": [
      932,
      945
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 950,
    "end": 952,
    "range": [
      950,
      952
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 953,
    "end": 957,
    "range": [
      953,
      957
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 958,
    "end": 959,
    "range": [
      958,
      959
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 1031,
    "end": 1044,
    "range": [
      1031,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1047,
    "end": 1048,
    "range": [
      1047,
      1048
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1049,
    "end": 1055,
    "range": [
      1049,
      1055
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1056,
    "end": 1058,
    "range": [
      1056,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1060,
    "end": 1061,
    "range": [
      1060,
      1061
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062,
    "range": [
      1061,
      1062
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1067,
    "end": 1085,
    "range": [
      1067,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1098,
    "end": 1104,
    "range": [
      1098,
      1104
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1105,
    "end": 1109,
    "range": [
      1105,
      1109
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1109,
    "end": 1110,
    "range": [
      1109,
      1110
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1110,
    "end": 1111,
    "range": [
      1110,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1111,
    "end": 1112,
    "range": [
      1111,
      1112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1118,
    "end": 1119,
    "range": [
      1118,
      1119
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1124,
    "end": 1141,
    "range": [
      1124,
      1141
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1141,
    "end": 1142,
    "range": [
      1141,
      1142
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1142,
    "end": 1143,
    "range": [
      1142,
      1143
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1144,
    "end": 1145,
    "range": [
      1144,
      1145
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1154,
    "end": 1160,
    "range": [
      1154,
      1160
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1161,
    "end": 1165,
    "range": [
      1161,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1166,
    "end": 1167,
    "range": [
      1166,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1173,
    "end": 1174,
    "range": [
      1173,
      1174
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1180,
    "end": 1192,
    "range": [
      1180,
      1192
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1195,
    "end": 1196,
    "range": [
      1195,
      1196
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1205,
    "end": 1211,
    "range": [
      1205,
      1211
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1212,
    "end": 1216,
    "range": [
      1212,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1229,
    "end": 1233,
    "range": [
      1229,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1233,
    "end": 1234,
    "range": [
      1233,
      1234
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid1",
    "start": 1234,
    "end": 1247,
    "range": [
      1234,
      1247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1250,
    "end": 1258,
    "range": [
      1250,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1259,
    "end": 1260,
    "range": [
      1259,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1264,
    "end": 1270,
    "range": [
      1264,
      1270
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1271,
    "end": 1273,
    "range": [
      1271,
      1273
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1273,
    "end": 1274,
    "range": [
      1273,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1278,
    "end": 1282,
    "range": [
      1278,
      1282
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid2",
    "start": 1283,
    "end": 1296,
    "range": [
      1283,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1302,
    "end": 1304,
    "range": [
      1302,
      1304
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1305,
    "end": 1307,
    "range": [
      1305,
      1307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1309,
    "end": 1313,
    "range": [
      1309,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1313,
    "end": 1314,
    "range": [
      1313,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1314,
    "end": 1332,
    "range": [
      1314,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1335,
    "end": 1343,
    "range": [
      1335,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1343,
    "end": 1344,
    "range": [
      1343,
      1344
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1348,
    "end": 1354,
    "range": [
      1348,
      1354
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1355,
    "end": 1359,
    "range": [
      1355,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1366,
    "end": 1370,
    "range": [
      1366,
      1370
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1370,
    "end": 1371,
    "range": [
      1370,
      1371
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1371,
    "end": 1388,
    "range": [
      1371,
      1388
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1391,
    "end": 1399,
    "range": [
      1391,
      1399
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1399,
    "end": 1400,
    "range": [
      1399,
      1400
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1400,
    "end": 1401,
    "range": [
      1400,
      1401
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403,
    "range": [
      1402,
      1403
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1404,
    "end": 1410,
    "range": [
      1404,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1411,
    "end": 1415,
    "range": [
      1411,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1416,
    "end": 1417,
    "range": [
      1416,
      1417
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1417,
    "end": 1418,
    "range": [
      1417,
      1418
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1419,
    "end": 1420,
    "range": [
      1419,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1422,
    "end": 1426,
    "range": [
      1422,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1427,
    "end": 1445,
    "range": [
      1427,
      1445
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1448,
    "end": 1449,
    "range": [
      1448,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1451,
    "end": 1453,
    "range": [
      1451,
      1453
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1454,
    "end": 1456,
    "range": [
      1454,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1456,
    "end": 1457,
    "range": [
      1456,
      1457
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1458,
    "end": 1462,
    "range": [
      1458,
      1462
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1462,
    "end": 1463,
    "range": [
      1462,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitInterface",
    "start": 1463,
    "end": 1480,
    "range": [
      1463,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1481,
    "end": 1482,
    "range": [
      1481,
      1482
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1486,
    "end": 1488,
    "range": [
      1486,
      1488
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1489,
    "end": 1491,
    "range": [
      1489,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "impl",
    "start": 1493,
    "end": 1497,
    "range": [
      1493,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1498,
    "end": 1510,
    "range": [
      1498,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1511,
    "end": 1512,
    "range": [
      1511,
      1512
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1513,
    "end": 1521,
    "range": [
      1513,
      1521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1523,
    "end": 1524,
    "range": [
      1523,
      1524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1525,
    "end": 1526,
    "range": [
      1525,
      1526
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1527,
    "end": 1533,
    "range": [
      1527,
      1533
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1534,
    "end": 1538,
    "range": [
      1534,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1538,
    "end": 1539,
    "range": [
      1538,
      1539
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1540,
    "end": 1541,
    "range": [
      1540,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1542,
    "end": 1543,
    "range": [
      1542,
      1543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1543,
    "end": 1544,
    "range": [
      1543,
      1544
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1567,
    "end": 1570,
    "range": [
      1567,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1571,
    "end": 1573,
    "range": [
      1571,
      1573
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1573,
    "end": 1574,
    "range": [
      1573,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1576,
    "end": 1577,
    "range": [
      1576,
      1577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1577,
    "end": 1578,
    "range": [
      1577,
      1578
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1579,
    "end": 1585,
    "range": [
      1579,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1585,
    "end": 1586,
    "range": [
      1585,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1587,
    "end": 1588,
    "range": [
      1587,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1590,
    "end": 1591,
    "range": [
      1590,
      1591
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 1591,
    "end": 1595,
    "range": [
      1591,
      1595
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1602,
    "end": 1608,
    "range": [
      1602,
      1608
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1609,
    "end": 1610,
    "range": [
      1609,
      1610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1610,
    "end": 1611,
    "range": [
      1610,
      1611
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1613,
    "end": 1614,
    "range": [
      1613,
      1614
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1615,
    "end": 1621,
    "range": [
      1615,
      1621
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1621,
    "end": 1622,
    "range": [
      1621,
      1622
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1623,
    "end": 1625,
    "range": [
      1623,
      1625
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1626,
    "end": 1632,
    "range": [
      1626,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1638,
    "end": 1639,
    "range": [
      1638,
      1639
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1641,
    "end": 1643,
    "range": [
      1641,
      1643
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 1648,
    "end": 1666,
    "range": [
      1648,
      1666
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1670,
    "end": 1673,
    "range": [
      1670,
      1673
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitAnyOk",
    "start": 1674,
    "end": 1687,
    "range": [
      1674,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1689,
    "end": 1690,
    "range": [
      1689,
      1690
    ]
  },
  {
    "type": "Identifier",
    "value": "notSpecified",
    "start": 1690,
    "end": 1702,
    "range": [
      1690,
      1702
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1702,
    "end": 1703,
    "range": [
      1702,
      1703
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1704,
    "end": 1710,
    "range": [
      1704,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1710,
    "end": 1711,
    "range": [
      1710,
      1711
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1715,
    "end": 1716,
    "range": [
      1715,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1717,
    "end": 1718,
    "range": [
      1717,
      1718
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1719,
    "end": 1725,
    "range": [
      1719,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1727,
    "end": 1729,
    "range": [
      1727,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1730,
    "end": 1736,
    "range": [
      1730,
      1736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1738,
    "end": 1739,
    "range": [
      1738,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "notSpecified",
    "start": 1742,
    "end": 1754,
    "range": [
      1742,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1756,
    "end": 1758,
    "range": [
      1756,
      1758
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1758,
    "end": 1759,
    "range": [
      1758,
      1759
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1760,
    "end": 1761,
    "range": [
      1760,
      1761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1761,
    "end": 1762,
    "range": [
      1761,
      1762
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 1763,
    "end": 1775,
    "range": [
      1763,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1776,
    "end": 1777,
    "range": [
      1776,
      1777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1777,
    "end": 1778,
    "range": [
      1777,
      1778
    ]
  },
  {
    "type": "Identifier",
    "value": "ok",
    "start": 1779,
    "end": 1781,
    "range": [
      1779,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Numeric",
    "value": "13",
    "start": 1784,
    "end": 1786,
    "range": [
      1784,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitThis",
    "start": 1789,
    "end": 1801,
    "range": [
      1789,
      1801
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802,
    "range": [
      1801,
      1802
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1802,
    "end": 1804,
    "range": [
      1802,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1805,
    "end": 1806,
    "range": [
      1805,
      1806
    ]
  },
  {
    "type": "Identifier",
    "value": "implicitAnyOk",
    "start": 1807,
    "end": 1820,
    "range": [
      1807,
      1820
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1820,
    "end": 1821,
    "range": [
      1820,
      1821
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1821,
    "end": 1822,
    "range": [
      1821,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1823,
    "end": 1825,
    "range": [
      1823,
      1825
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1825,
    "end": 1826,
    "range": [
      1825,
      1826
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1826,
    "end": 1827,
    "range": [
      1826,
      1827
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1829,
    "end": 1832,
    "range": [
      1829,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1833,
    "end": 1834,
    "range": [
      1833,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1837,
    "end": 1840,
    "range": [
      1837,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1842,
    "end": 1843,
    "range": [
      1842,
      1843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1843,
    "end": 1844,
    "range": [
      1843,
      1844
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1844,
    "end": 1845,
    "range": [
      1844,
      1845
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1846,
    "end": 1849,
    "range": [
      1846,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1852,
    "end": 1853,
    "range": [
      1852,
      1853
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1854,
    "end": 1857,
    "range": [
      1854,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 1858,
    "end": 1859,
    "range": [
      1858,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1863,
    "end": 1866,
    "range": [
      1863,
      1866
    ]
  },
  {
    "type": "Identifier",
    "value": "ripped",
    "start": 1867,
    "end": 1873,
    "range": [
      1867,
      1873
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1878,
    "end": 1887,
    "range": [
      1878,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1891,
    "end": 1900,
    "range": [
      1891,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1901,
    "end": 1903,
    "range": [
      1901,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
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
    "value": "c",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 1908,
    "end": 1924,
    "range": [
      1908,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1924,
    "end": 1925,
    "range": [
      1924,
      1925
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1925,
    "end": 1927,
    "range": [
      1925,
      1927
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1932,
    "end": 1944,
    "range": [
      1932,
      1944
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1945,
    "end": 1947,
    "range": [
      1945,
      1947
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1950,
    "end": 1951,
    "range": [
      1950,
      1951
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1951,
    "end": 1952,
    "range": [
      1951,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 1952,
    "end": 1961,
    "range": [
      1952,
      1961
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1961,
    "end": 1962,
    "range": [
      1961,
      1962
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1962,
    "end": 1964,
    "range": [
      1962,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1967,
    "end": 1968,
    "range": [
      1967,
      1968
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 1969,
    "end": 1985,
    "range": [
      1969,
      1985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1985,
    "end": 1986,
    "range": [
      1985,
      1986
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 1986,
    "end": 1988,
    "range": [
      1986,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1989,
    "end": 1990,
    "range": [
      1989,
      1990
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 1993,
    "end": 2005,
    "range": [
      1993,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2006,
    "end": 2008,
    "range": [
      2006,
      2008
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
      2009
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2009,
    "end": 2010,
    "range": [
      2009,
      2010
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2011,
    "end": 2014,
    "range": [
      2011,
      2014
    ]
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2015,
    "end": 2028,
    "range": [
      2015,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2040,
    "end": 2046,
    "range": [
      2040,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2052,
    "end": 2064,
    "range": [
      2052,
      2064
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2065,
    "end": 2069,
    "range": [
      2065,
      2069
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2069,
    "end": 2070,
    "range": [
      2069,
      2070
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076,
    "range": [
      2075,
      2076
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2077,
    "end": 2083,
    "range": [
      2077,
      2083
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2083,
    "end": 2084,
    "range": [
      2083,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2086,
    "end": 2092,
    "range": [
      2086,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2160,
    "end": 2169,
    "range": [
      2160,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2170,
    "end": 2174,
    "range": [
      2170,
      2174
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2174,
    "end": 2175,
    "range": [
      2174,
      2175
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2180,
    "end": 2181,
    "range": [
      2180,
      2181
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2182,
    "end": 2188,
    "range": [
      2182,
      2188
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2188,
    "end": 2189,
    "range": [
      2188,
      2189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2189,
    "end": 2190,
    "range": [
      2189,
      2190
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2191,
    "end": 2197,
    "range": [
      2191,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2197,
    "end": 2198,
    "range": [
      2197,
      2198
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2203,
    "end": 2219,
    "range": [
      2203,
      2219
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2219,
    "end": 2220,
    "range": [
      2219,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2221,
    "end": 2222,
    "range": [
      2221,
      2222
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2222,
    "end": 2226,
    "range": [
      2222,
      2226
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2231,
    "end": 2232,
    "range": [
      2231,
      2232
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2233,
    "end": 2239,
    "range": [
      2233,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2239,
    "end": 2240,
    "range": [
      2239,
      2240
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2242,
    "end": 2243,
    "range": [
      2242,
      2243
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2245,
    "end": 2251,
    "range": [
      2245,
      2251
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2253,
    "end": 2255,
    "range": [
      2253,
      2255
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2256,
    "end": 2262,
    "range": [
      2256,
      2262
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2262,
    "end": 2263,
    "range": [
      2262,
      2263
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2268,
    "end": 2280,
    "range": [
      2268,
      2280
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2280,
    "end": 2281,
    "range": [
      2280,
      2281
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2281,
    "end": 2285,
    "range": [
      2281,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 2287,
    "end": 2291,
    "range": [
      2287,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2294,
    "end": 2295,
    "range": [
      2294,
      2295
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2296,
    "end": 2302,
    "range": [
      2296,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2302,
    "end": 2303,
    "range": [
      2302,
      2303
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2305,
    "end": 2311,
    "range": [
      2305,
      2311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2313,
    "end": 2314,
    "range": [
      2313,
      2314
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2315,
    "end": 2316,
    "range": [
      2315,
      2316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2325,
    "end": 2326,
    "range": [
      2325,
      2326
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2327,
    "end": 2329,
    "range": [
      2327,
      2329
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2329,
    "end": 2330,
    "range": [
      2329,
      2330
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2335,
    "end": 2347,
    "range": [
      2335,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2347,
    "end": 2348,
    "range": [
      2347,
      2348
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2350,
    "end": 2351,
    "range": [
      2350,
      2351
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2351,
    "end": 2363,
    "range": [
      2351,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2363,
    "end": 2364,
    "range": [
      2363,
      2364
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2369,
    "end": 2378,
    "range": [
      2369,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2380,
    "end": 2381,
    "range": [
      2380,
      2381
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 2382,
    "end": 2391,
    "range": [
      2382,
      2391
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2397,
    "end": 2413,
    "range": [
      2397,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2413,
    "end": 2414,
    "range": [
      2413,
      2414
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2417,
    "end": 2433,
    "range": [
      2417,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2433,
    "end": 2434,
    "range": [
      2433,
      2434
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2439,
    "end": 2451,
    "range": [
      2439,
      2451
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2451,
    "end": 2452,
    "range": [
      2451,
      2452
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2453,
    "end": 2454,
    "range": [
      2453,
      2454
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2454,
    "end": 2455,
    "range": [
      2454,
      2455
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2455,
    "end": 2467,
    "range": [
      2455,
      2467
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2468,
    "end": 2469,
    "range": [
      2468,
      2469
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2469,
    "end": 2470,
    "range": [
      2469,
      2470
    ]
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2471,
    "end": 2484,
    "range": [
      2471,
      2484
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2484,
    "end": 2485,
    "range": [
      2484,
      2485
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 2485,
    "end": 2497,
    "range": [
      2485,
      2497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2497,
    "end": 2498,
    "range": [
      2497,
      2498
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2498,
    "end": 2500,
    "range": [
      2498,
      2500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2500,
    "end": 2501,
    "range": [
      2500,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2503,
    "end": 2516,
    "range": [
      2503,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 2517,
    "end": 2533,
    "range": [
      2517,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 2534,
    "end": 2536,
    "range": [
      2534,
      2536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2536,
    "end": 2537,
    "range": [
      2536,
      2537
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2537,
    "end": 2538,
    "range": [
      2537,
      2538
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2539,
    "end": 2542,
    "range": [
      2539,
      2542
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2543,
    "end": 2555,
    "range": [
      2543,
      2555
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2556,
    "end": 2557,
    "range": [
      2556,
      2557
    ]
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 2558,
    "end": 2571,
    "range": [
      2558,
      2571
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2571,
    "end": 2572,
    "range": [
      2571,
      2572
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2572,
    "end": 2584,
    "range": [
      2572,
      2584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2584,
    "end": 2585,
    "range": [
      2584,
      2585
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 2586,
    "end": 2598,
    "range": [
      2586,
      2598
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2598,
    "end": 2599,
    "range": [
      2598,
      2599
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2599,
    "end": 2601,
    "range": [
      2599,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2602,
    "end": 2603,
    "range": [
      2602,
      2603
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2627,
    "end": 2630,
    "range": [
      2627,
      2630
    ]
  },
  {
    "type": "Identifier",
    "value": "unboundToSpecified",
    "start": 2631,
    "end": 2649,
    "range": [
      2631,
      2649
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2649,
    "end": 2650,
    "range": [
      2649,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2651,
    "end": 2652,
    "range": [
      2651,
      2652
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2652,
    "end": 2656,
    "range": [
      2652,
      2656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2656,
    "end": 2657,
    "range": [
      2656,
      2657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2661,
    "end": 2662,
    "range": [
      2661,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2663,
    "end": 2669,
    "range": [
      2663,
      2669
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2670,
    "end": 2671,
    "range": [
      2670,
      2671
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2671,
    "end": 2672,
    "range": [
      2671,
      2672
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2673,
    "end": 2674,
    "range": [
      2673,
      2674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2674,
    "end": 2675,
    "range": [
      2674,
      2675
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2676,
    "end": 2682,
    "range": [
      2676,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2684,
    "end": 2686,
    "range": [
      2684,
      2686
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2687,
    "end": 2693,
    "range": [
      2687,
      2693
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2698,
    "end": 2700,
    "range": [
      2698,
      2700
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2701,
    "end": 2702,
    "range": [
      2701,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2705,
    "end": 2709,
    "range": [
      2705,
      2709
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2709,
    "end": 2710,
    "range": [
      2709,
      2710
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2710,
    "end": 2711,
    "range": [
      2710,
      2711
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2729,
    "end": 2732,
    "range": [
      2729,
      2732
    ]
  },
  {
    "type": "Identifier",
    "value": "specifiedToSpecified",
    "start": 2733,
    "end": 2753,
    "range": [
      2733,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2755,
    "end": 2756,
    "range": [
      2755,
      2756
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2756,
    "end": 2760,
    "range": [
      2756,
      2760
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2760,
    "end": 2761,
    "range": [
      2760,
      2761
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2762,
    "end": 2763,
    "range": [
      2762,
      2763
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2763,
    "end": 2764,
    "range": [
      2763,
      2764
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2764,
    "end": 2765,
    "range": [
      2764,
      2765
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2766,
    "end": 2772,
    "range": [
      2766,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2775,
    "end": 2776,
    "range": [
      2775,
      2776
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2776,
    "end": 2777,
    "range": [
      2776,
      2777
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2778,
    "end": 2784,
    "range": [
      2778,
      2784
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2784,
    "end": 2785,
    "range": [
      2784,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2786,
    "end": 2788,
    "range": [
      2786,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2789,
    "end": 2795,
    "range": [
      2789,
      2795
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStructural",
    "start": 2798,
    "end": 2816,
    "range": [
      2798,
      2816
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2816,
    "end": 2817,
    "range": [
      2816,
      2817
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2818,
    "end": 2821,
    "range": [
      2818,
      2821
    ]
  },
  {
    "type": "Identifier",
    "value": "anyToSpecified",
    "start": 2822,
    "end": 2836,
    "range": [
      2822,
      2836
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2836,
    "end": 2837,
    "range": [
      2836,
      2837
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2838,
    "end": 2839,
    "range": [
      2838,
      2839
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2839,
    "end": 2843,
    "range": [
      2839,
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
    "type": "Punctuator",
    "value": "{",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 2847,
    "end": 2848,
    "range": [
      2847,
      2848
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2848,
    "end": 2849,
    "range": [
      2848,
      2849
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2850,
    "end": 2856,
    "range": [
      2850,
      2856
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2858,
    "end": 2859,
    "range": [
      2858,
      2859
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2860,
    "end": 2861,
    "range": [
      2860,
      2861
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2861,
    "end": 2862,
    "range": [
      2861,
      2862
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2863,
    "end": 2869,
    "range": [
      2863,
      2869
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2869,
    "end": 2870,
    "range": [
      2869,
      2870
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2871,
    "end": 2873,
    "range": [
      2871,
      2873
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2874,
    "end": 2880,
    "range": [
      2874,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2881,
    "end": 2882,
    "range": [
      2881,
      2882
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2883,
    "end": 2891,
    "range": [
      2883,
      2891
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2891,
    "end": 2892,
    "range": [
      2891,
      2892
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2892,
    "end": 2893,
    "range": [
      2892,
      2893
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2893,
    "end": 2894,
    "range": [
      2893,
      2894
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2895,
    "end": 2901,
    "range": [
      2895,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2901,
    "end": 2902,
    "range": [
      2901,
      2902
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2904,
    "end": 2910,
    "range": [
      2904,
      2910
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2913,
    "end": 2919,
    "range": [
      2913,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2920,
    "end": 2921,
    "range": [
      2920,
      2921
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2922,
    "end": 2923,
    "range": [
      2922,
      2923
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2924,
    "end": 2926,
    "range": [
      2924,
      2926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2926,
    "end": 2927,
    "range": [
      2926,
      2927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2928,
    "end": 2929,
    "range": [
      2928,
      2929
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2929,
    "end": 2930,
    "range": [
      2929,
      2930
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2932,
    "end": 2935,
    "range": [
      2932,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambda",
    "start": 2936,
    "end": 2953,
    "range": [
      2936,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2956,
    "end": 2957,
    "range": [
      2956,
      2957
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2959,
    "end": 2965,
    "range": [
      2959,
      2965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2965,
    "end": 2966,
    "range": [
      2965,
      2966
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2967,
    "end": 2969,
    "range": [
      2967,
      2969
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2970,
    "end": 2976,
    "range": [
      2970,
      2976
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2977,
    "end": 2978,
    "range": [
      2977,
      2978
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2979,
    "end": 2980,
    "range": [
      2979,
      2980
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 2981,
    "end": 2983,
    "range": [
      2981,
      2983
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 2984,
    "end": 2985,
    "range": [
      2984,
      2985
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 2986,
    "end": 2987,
    "range": [
      2986,
      2987
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 2988,
    "end": 2990,
    "range": [
      2988,
      2990
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2990,
    "end": 2991,
    "range": [
      2990,
      2991
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2992,
    "end": 2995,
    "range": [
      2992,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "specifiedLambda",
    "start": 2996,
    "end": 3011,
    "range": [
      2996,
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
    "type": "Punctuator",
    "value": "(",
    "start": 3013,
    "end": 3014,
    "range": [
      3013,
      3014
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3014,
    "end": 3018,
    "range": [
      3014,
      3018
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3018,
    "end": 3019,
    "range": [
      3018,
      3019
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3020,
    "end": 3024,
    "range": [
      3020,
      3024
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3024,
    "end": 3025,
    "range": [
      3024,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3026,
    "end": 3027,
    "range": [
      3026,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3029,
    "end": 3035,
    "range": [
      3029,
      3035
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3035,
    "end": 3036,
    "range": [
      3035,
      3036
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3037,
    "end": 3039,
    "range": [
      3037,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3040,
    "end": 3046,
    "range": [
      3040,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3047,
    "end": 3048,
    "range": [
      3047,
      3048
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3049,
    "end": 3050,
    "range": [
      3049,
      3050
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3051,
    "end": 3053,
    "range": [
      3051,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 3058,
    "end": 3060,
    "range": [
      3058,
      3060
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3060,
    "end": 3061,
    "range": [
      3060,
      3061
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3062,
    "end": 3065,
    "range": [
      3062,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambdaToSpecified",
    "start": 3066,
    "end": 3094,
    "range": [
      3066,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3097,
    "end": 3101,
    "range": [
      3097,
      3101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3103,
    "end": 3104,
    "range": [
      3103,
      3104
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3104,
    "end": 3105,
    "range": [
      3104,
      3105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3107,
    "end": 3113,
    "range": [
      3107,
      3113
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3113,
    "end": 3114,
    "range": [
      3113,
      3114
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3114,
    "end": 3115,
    "range": [
      3114,
      3115
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3116,
    "end": 3117,
    "range": [
      3116,
      3117
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3119,
    "end": 3125,
    "range": [
      3119,
      3125
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3127,
    "end": 3129,
    "range": [
      3127,
      3129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3130,
    "end": 3136,
    "range": [
      3130,
      3136
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3137,
    "end": 3138,
    "range": [
      3137,
      3138
    ]
  },
  {
    "type": "Identifier",
    "value": "unspecifiedLambda",
    "start": 3139,
    "end": 3156,
    "range": [
      3139,
      3156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3156,
    "end": 3157,
    "range": [
      3156,
      3157
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3158,
    "end": 3161,
    "range": [
      3158,
      3161
    ]
  },
  {
    "type": "Identifier",
    "value": "specifiedLambdaToSpecified",
    "start": 3162,
    "end": 3188,
    "range": [
      3162,
      3188
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3191,
    "end": 3195,
    "range": [
      3191,
      3195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3195,
    "end": 3196,
    "range": [
      3195,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 3198,
    "end": 3199,
    "range": [
      3198,
      3199
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3199,
    "end": 3200,
    "range": [
      3199,
      3200
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3201,
    "end": 3207,
    "range": [
      3201,
      3207
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3207,
    "end": 3208,
    "range": [
      3207,
      3208
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3208,
    "end": 3209,
    "range": [
      3208,
      3209
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 3210,
    "end": 3211,
    "range": [
      3210,
      3211
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3211,
    "end": 3212,
    "range": [
      3211,
      3212
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3213,
    "end": 3219,
    "range": [
      3213,
      3219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3219,
    "end": 3220,
    "range": [
      3219,
      3220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3221,
    "end": 3223,
    "range": [
      3221,
      3223
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3224,
    "end": 3230,
    "range": [
      3224,
      3230
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3231,
    "end": 3232,
    "range": [
      3231,
      3232
    ]
  },
  {
    "type": "Identifier",
    "value": "specifiedLambda",
    "start": 3233,
    "end": 3248,
    "range": [
      3233,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3252,
    "end": 3255,
    "range": [
      3252,
      3255
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 3256,
    "end": 3273,
    "range": [
      3256,
      3273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3273,
    "end": 3274,
    "range": [
      3273,
      3274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3275,
    "end": 3276,
    "range": [
      3275,
      3276
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3276,
    "end": 3280,
    "range": [
      3276,
      3280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3280,
    "end": 3281,
    "range": [
      3280,
      3281
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3282,
    "end": 3283,
    "range": [
      3282,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3283,
    "end": 3284,
    "range": [
      3283,
      3284
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3285,
    "end": 3286,
    "range": [
      3285,
      3286
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3286,
    "end": 3287,
    "range": [
      3286,
      3287
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3288,
    "end": 3294,
    "range": [
      3288,
      3294
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3296,
    "end": 3298,
    "range": [
      3296,
      3298
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3299,
    "end": 3305,
    "range": [
      3299,
      3305
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3305,
    "end": 3306,
    "range": [
      3305,
      3306
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 3307,
    "end": 3310,
    "range": [
      3307,
      3310
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitPropertyFunction",
    "start": 3311,
    "end": 3335,
    "range": [
      3311,
      3335
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3335,
    "end": 3336,
    "range": [
      3335,
      3336
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3337,
    "end": 3338,
    "range": [
      3337,
      3338
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3338,
    "end": 3342,
    "range": [
      3338,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3342,
    "end": 3343,
    "range": [
      3342,
      3343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3344,
    "end": 3345,
    "range": [
      3344,
      3345
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3345,
    "end": 3346,
    "range": [
      3345,
      3346
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3346,
    "end": 3347,
    "range": [
      3346,
      3347
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3348,
    "end": 3354,
    "range": [
      3348,
      3354
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3354,
    "end": 3355,
    "range": [
      3354,
      3355
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3355,
    "end": 3356,
    "range": [
      3355,
      3356
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3358,
    "end": 3359,
    "range": [
      3358,
      3359
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3360,
    "end": 3366,
    "range": [
      3360,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3368,
    "end": 3370,
    "range": [
      3368,
      3370
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3371,
    "end": 3377,
    "range": [
      3371,
      3377
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3379,
    "end": 3380,
    "range": [
      3379,
      3380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3380,
    "end": 3381,
    "range": [
      3380,
      3381
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3381,
    "end": 3390,
    "range": [
      3381,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 3393,
    "end": 3410,
    "range": [
      3393,
      3410
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3410,
    "end": 3411,
    "range": [
      3410,
      3411
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3412,
    "end": 3413,
    "range": [
      3412,
      3413
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3413,
    "end": 3414,
    "range": [
      3413,
      3414
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3414,
    "end": 3423,
    "range": [
      3414,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3426,
    "end": 3434,
    "range": [
      3426,
      3434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3434,
    "end": 3435,
    "range": [
      3434,
      3435
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3435,
    "end": 3439,
    "range": [
      3435,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3439,
    "end": 3440,
    "range": [
      3439,
      3440
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3442,
    "end": 3443,
    "range": [
      3442,
      3443
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3444,
    "end": 3445,
    "range": [
      3444,
      3445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3445,
    "end": 3446,
    "range": [
      3445,
      3446
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3447,
    "end": 3453,
    "range": [
      3447,
      3453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3453,
    "end": 3454,
    "range": [
      3453,
      3454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3455,
    "end": 3456,
    "range": [
      3455,
      3456
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3457,
    "end": 3463,
    "range": [
      3457,
      3463
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3464,
    "end": 3468,
    "range": [
      3464,
      3468
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3468,
    "end": 3469,
    "range": [
      3468,
      3469
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3469,
    "end": 3470,
    "range": [
      3469,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3473,
    "end": 3474,
    "range": [
      3473,
      3474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3475,
    "end": 3476,
    "range": [
      3475,
      3476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3476,
    "end": 3477,
    "range": [
      3476,
      3477
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3478,
    "end": 3479,
    "range": [
      3478,
      3479
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3479,
    "end": 3480,
    "range": [
      3479,
      3480
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3480,
    "end": 3496,
    "range": [
      3480,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitPropertyFunction",
    "start": 3499,
    "end": 3523,
    "range": [
      3499,
      3523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3523,
    "end": 3524,
    "range": [
      3523,
      3524
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3525,
    "end": 3526,
    "range": [
      3525,
      3526
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3526,
    "end": 3527,
    "range": [
      3526,
      3527
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3527,
    "end": 3543,
    "range": [
      3527,
      3543
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3544,
    "end": 3545,
    "range": [
      3544,
      3545
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3546,
    "end": 3554,
    "range": [
      3546,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3554,
    "end": 3555,
    "range": [
      3554,
      3555
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 3555,
    "end": 3559,
    "range": [
      3555,
      3559
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3559,
    "end": 3560,
    "range": [
      3559,
      3560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3561,
    "end": 3562,
    "range": [
      3561,
      3562
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3562,
    "end": 3563,
    "range": [
      3562,
      3563
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3565,
    "end": 3571,
    "range": [
      3565,
      3571
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3571,
    "end": 3572,
    "range": [
      3571,
      3572
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3572,
    "end": 3573,
    "range": [
      3572,
      3573
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3574,
    "end": 3575,
    "range": [
      3574,
      3575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3575,
    "end": 3576,
    "range": [
      3575,
      3576
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3577,
    "end": 3583,
    "range": [
      3577,
      3583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3583,
    "end": 3584,
    "range": [
      3583,
      3584
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3585,
    "end": 3586,
    "range": [
      3585,
      3586
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3587,
    "end": 3593,
    "range": [
      3587,
      3593
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3594,
    "end": 3598,
    "range": [
      3594,
      3598
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3598,
    "end": 3599,
    "range": [
      3598,
      3599
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3601,
    "end": 3602,
    "range": [
      3601,
      3602
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3605,
    "end": 3606,
    "range": [
      3605,
      3606
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3606,
    "end": 3607,
    "range": [
      3606,
      3607
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3608,
    "end": 3609,
    "range": [
      3608,
      3609
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3610,
    "end": 3626,
    "range": [
      3610,
      3626
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3627,
    "end": 3628,
    "range": [
      3627,
      3628
    ]
  },
  {
    "type": "Identifier",
    "value": "reconstructed",
    "start": 3629,
    "end": 3642,
    "range": [
      3629,
      3642
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3642,
    "end": 3643,
    "range": [
      3642,
      3643
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3643,
    "end": 3659,
    "range": [
      3643,
      3659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3659,
    "end": 3660,
    "range": [
      3659,
      3660
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3700,
    "end": 3701,
    "range": [
      3700,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3702,
    "end": 3711,
    "range": [
      3702,
      3711
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3712,
    "end": 3713,
    "range": [
      3712,
      3713
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3714,
    "end": 3715,
    "range": [
      3714,
      3715
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3716,
    "end": 3718,
    "range": [
      3716,
      3718
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3722,
    "end": 3723,
    "range": [
      3722,
      3723
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3723,
    "end": 3724,
    "range": [
      3723,
      3724
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 3724,
    "end": 3736,
    "range": [
      3724,
      3736
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3737,
    "end": 3738,
    "range": [
      3737,
      3738
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3739,
    "end": 3740,
    "range": [
      3739,
      3740
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3741,
    "end": 3743,
    "range": [
      3741,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3744,
    "end": 3745,
    "range": [
      3744,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3745,
    "end": 3746,
    "range": [
      3745,
      3746
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3747,
    "end": 3748,
    "range": [
      3747,
      3748
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3748,
    "end": 3749,
    "range": [
      3748,
      3749
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3749,
    "end": 3765,
    "range": [
      3749,
      3765
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3766,
    "end": 3767,
    "range": [
      3766,
      3767
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3768,
    "end": 3769,
    "range": [
      3768,
      3769
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3770,
    "end": 3772,
    "range": [
      3770,
      3772
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3773,
    "end": 3774,
    "range": [
      3773,
      3774
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3774,
    "end": 3775,
    "range": [
      3774,
      3775
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3881,
    "end": 3882,
    "range": [
      3881,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 3883,
    "end": 3892,
    "range": [
      3883,
      3892
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3893,
    "end": 3894,
    "range": [
      3893,
      3894
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3895,
    "end": 3896,
    "range": [
      3895,
      3896
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3897,
    "end": 3899,
    "range": [
      3897,
      3899
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3900,
    "end": 3901,
    "range": [
      3900,
      3901
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3902,
    "end": 3903,
    "range": [
      3902,
      3903
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3904,
    "end": 3908,
    "range": [
      3904,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3908,
    "end": 3909,
    "range": [
      3908,
      3909
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3909,
    "end": 3910,
    "range": [
      3909,
      3910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3910,
    "end": 3911,
    "range": [
      3910,
      3911
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3912,
    "end": 3913,
    "range": [
      3912,
      3913
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3913,
    "end": 3914,
    "range": [
      3913,
      3914
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 3914,
    "end": 3926,
    "range": [
      3914,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3927,
    "end": 3928,
    "range": [
      3927,
      3928
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3929,
    "end": 3930,
    "range": [
      3929,
      3930
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3931,
    "end": 3933,
    "range": [
      3931,
      3933
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3934,
    "end": 3935,
    "range": [
      3934,
      3935
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3938,
    "end": 3942,
    "range": [
      3938,
      3942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3942,
    "end": 3943,
    "range": [
      3942,
      3943
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3943,
    "end": 3944,
    "range": [
      3943,
      3944
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3944,
    "end": 3945,
    "range": [
      3944,
      3945
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 3946,
    "end": 3947,
    "range": [
      3946,
      3947
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3947,
    "end": 3948,
    "range": [
      3947,
      3948
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 3948,
    "end": 3964,
    "range": [
      3948,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3967,
    "end": 3968,
    "range": [
      3967,
      3968
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3969,
    "end": 3971,
    "range": [
      3969,
      3971
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 3976,
    "end": 3980,
    "range": [
      3976,
      3980
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3980,
    "end": 3981,
    "range": [
      3980,
      3981
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 3981,
    "end": 3982,
    "range": [
      3981,
      3982
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3982,
    "end": 3983,
    "range": [
      3982,
      3983
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4015,
    "end": 4016,
    "range": [
      4015,
      4016
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4017,
    "end": 4029,
    "range": [
      4017,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4030,
    "end": 4031,
    "range": [
      4030,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitCFunction",
    "start": 4032,
    "end": 4049,
    "range": [
      4032,
      4049
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4049,
    "end": 4050,
    "range": [
      4049,
      4050
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4051,
    "end": 4052,
    "range": [
      4051,
      4052
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4052,
    "end": 4053,
    "range": [
      4052,
      4053
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4053,
    "end": 4065,
    "range": [
      4053,
      4065
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4066,
    "end": 4067,
    "range": [
      4066,
      4067
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4068,
    "end": 4076,
    "range": [
      4068,
      4076
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4076,
    "end": 4077,
    "range": [
      4076,
      4077
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4077,
    "end": 4081,
    "range": [
      4077,
      4081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4081,
    "end": 4082,
    "range": [
      4081,
      4082
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 4083,
    "end": 4084,
    "range": [
      4083,
      4084
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4086,
    "end": 4087,
    "range": [
      4086,
      4087
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4087,
    "end": 4088,
    "range": [
      4087,
      4088
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4089,
    "end": 4095,
    "range": [
      4089,
      4095
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4095,
    "end": 4096,
    "range": [
      4095,
      4096
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4097,
    "end": 4098,
    "range": [
      4097,
      4098
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4099,
    "end": 4105,
    "range": [
      4099,
      4105
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4106,
    "end": 4110,
    "range": [
      4106,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4113,
    "end": 4114,
    "range": [
      4113,
      4114
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4115,
    "end": 4116,
    "range": [
      4115,
      4116
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4117,
    "end": 4118,
    "range": [
      4117,
      4118
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4118,
    "end": 4119,
    "range": [
      4118,
      4119
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4147,
    "end": 4148,
    "range": [
      4147,
      4148
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4148,
    "end": 4149,
    "range": [
      4148,
      4149
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 4149,
    "end": 4158,
    "range": [
      4149,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "start": 4161,
    "end": 4169,
    "range": [
      4161,
      4169
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4169,
    "end": 4170,
    "range": [
      4169,
      4170
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4170,
    "end": 4171,
    "range": [
      4170,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4171,
    "end": 4172,
    "range": [
      4171,
      4172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4173,
    "end": 4174,
    "range": [
      4173,
      4174
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4175,
    "end": 4181,
    "range": [
      4175,
      4181
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4182,
    "end": 4186,
    "range": [
      4182,
      4186
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4186,
    "end": 4187,
    "range": [
      4186,
      4187
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4187,
    "end": 4188,
    "range": [
      4187,
      4188
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4189,
    "end": 4190,
    "range": [
      4189,
      4190
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4191,
    "end": 4192,
    "range": [
      4191,
      4192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4194,
    "end": 4195,
    "range": [
      4194,
      4195
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4196,
    "end": 4197,
    "range": [
      4196,
      4197
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4197,
    "end": 4198,
    "range": [
      4197,
      4198
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitProperty",
    "start": 4198,
    "end": 4214,
    "range": [
      4198,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4217,
    "end": 4225,
    "range": [
      4217,
      4225
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4227,
    "end": 4228,
    "range": [
      4227,
      4228
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4229,
    "end": 4230,
    "range": [
      4229,
      4230
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4231,
    "end": 4237,
    "range": [
      4231,
      4237
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4238,
    "end": 4242,
    "range": [
      4238,
      4242
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4242,
    "end": 4243,
    "range": [
      4242,
      4243
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4245,
    "end": 4246,
    "range": [
      4245,
      4246
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4247,
    "end": 4248,
    "range": [
      4247,
      4248
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4249,
    "end": 4250,
    "range": [
      4249,
      4250
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4250,
    "end": 4251,
    "range": [
      4250,
      4251
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4252,
    "end": 4253,
    "range": [
      4252,
      4253
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4253,
    "end": 4254,
    "range": [
      4253,
      4254
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4254,
    "end": 4266,
    "range": [
      4254,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4267,
    "end": 4268,
    "range": [
      4267,
      4268
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4269,
    "end": 4277,
    "range": [
      4269,
      4277
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4277,
    "end": 4278,
    "range": [
      4277,
      4278
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4278,
    "end": 4279,
    "range": [
      4278,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4279,
    "end": 4280,
    "range": [
      4279,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4283,
    "end": 4289,
    "range": [
      4283,
      4289
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4290,
    "end": 4294,
    "range": [
      4290,
      4294
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4294,
    "end": 4295,
    "range": [
      4294,
      4295
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4295,
    "end": 4296,
    "range": [
      4295,
      4296
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4297,
    "end": 4298,
    "range": [
      4297,
      4298
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4301,
    "end": 4302,
    "range": [
      4301,
      4302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4302,
    "end": 4303,
    "range": [
      4302,
      4303
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4332,
    "end": 4333,
    "range": [
      4332,
      4333
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4333,
    "end": 4334,
    "range": [
      4333,
      4334
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitThis",
    "start": 4334,
    "end": 4346,
    "range": [
      4334,
      4346
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4347,
    "end": 4348,
    "range": [
      4347,
      4348
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4349,
    "end": 4357,
    "range": [
      4349,
      4357
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4357,
    "end": 4358,
    "range": [
      4357,
      4358
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4358,
    "end": 4362,
    "range": [
      4358,
      4362
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4362,
    "end": 4363,
    "range": [
      4362,
      4363
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4364,
    "end": 4365,
    "range": [
      4364,
      4365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4369,
    "end": 4375,
    "range": [
      4369,
      4375
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4376,
    "end": 4380,
    "range": [
      4376,
      4380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4380,
    "end": 4381,
    "range": [
      4380,
      4381
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4381,
    "end": 4382,
    "range": [
      4381,
      4382
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4383,
    "end": 4384,
    "range": [
      4383,
      4384
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4385,
    "end": 4386,
    "range": [
      4385,
      4386
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4387,
    "end": 4388,
    "range": [
      4387,
      4388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4388,
    "end": 4389,
    "range": [
      4388,
      4389
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4425,
    "end": 4426,
    "range": [
      4425,
      4426
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4426,
    "end": 4427,
    "range": [
      4426,
      4427
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitC",
    "start": 4427,
    "end": 4436,
    "range": [
      4427,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4439,
    "end": 4447,
    "range": [
      4439,
      4447
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4447,
    "end": 4448,
    "range": [
      4447,
      4448
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4448,
    "end": 4452,
    "range": [
      4448,
      4452
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4452,
    "end": 4453,
    "range": [
      4452,
      4453
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4454,
    "end": 4455,
    "range": [
      4454,
      4455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4455,
    "end": 4456,
    "range": [
      4455,
      4456
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4457,
    "end": 4458,
    "range": [
      4457,
      4458
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4460,
    "end": 4466,
    "range": [
      4460,
      4466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4466,
    "end": 4467,
    "range": [
      4466,
      4467
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4468,
    "end": 4469,
    "range": [
      4468,
      4469
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4470,
    "end": 4476,
    "range": [
      4470,
      4476
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4477,
    "end": 4481,
    "range": [
      4477,
      4481
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4481,
    "end": 4482,
    "range": [
      4481,
      4482
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4482,
    "end": 4483,
    "range": [
      4482,
      4483
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4484,
    "end": 4485,
    "range": [
      4484,
      4485
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 4486,
    "end": 4487,
    "range": [
      4486,
      4487
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 4519,
    "end": 4520,
    "range": [
      4519,
      4520
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4520,
    "end": 4521,
    "range": [
      4520,
      4521
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitVoid",
    "start": 4521,
    "end": 4533,
    "range": [
      4521,
      4533
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4534,
    "end": 4535,
    "range": [
      4534,
      4535
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4536,
    "end": 4537,
    "range": [
      4536,
      4537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4538,
    "end": 4540,
    "range": [
      4538,
      4540
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4542,
    "end": 4543,
    "range": [
      4542,
      4543
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4574,
    "end": 4579,
    "range": [
      4574,
      4579
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4580,
    "end": 4585,
    "range": [
      4580,
      4585
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4586,
    "end": 4587,
    "range": [
      4586,
      4587
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4593,
    "end": 4594,
    "range": [
      4593,
      4594
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4595,
    "end": 4601,
    "range": [
      4595,
      4601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4601,
    "end": 4602,
    "range": [
      4601,
      4602
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 4607,
    "end": 4613,
    "range": [
      4607,
      4613
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 4614,
    "end": 4625,
    "range": [
      4614,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4626,
    "end": 4630,
    "range": [
      4626,
      4630
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4632,
    "end": 4636,
    "range": [
      4632,
      4636
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4636,
    "end": 4637,
    "range": [
      4636,
      4637
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4637,
    "end": 4638,
    "range": [
      4637,
      4638
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4639,
    "end": 4645,
    "range": [
      4639,
      4645
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4646,
    "end": 4647,
    "range": [
      4646,
      4647
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4648,
    "end": 4654,
    "range": [
      4648,
      4654
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4655,
    "end": 4659,
    "range": [
      4655,
      4659
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4660,
    "end": 4661,
    "range": [
      4660,
      4661
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4661,
    "end": 4662,
    "range": [
      4661,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4663,
    "end": 4664,
    "range": [
      4663,
      4664
    ]
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 4669,
    "end": 4677,
    "range": [
      4669,
      4677
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4677,
    "end": 4678,
    "range": [
      4677,
      4678
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4678,
    "end": 4682,
    "range": [
      4678,
      4682
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4682,
    "end": 4683,
    "range": [
      4682,
      4683
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4684,
    "end": 4689,
    "range": [
      4684,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4689,
    "end": 4690,
    "range": [
      4689,
      4690
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4690,
    "end": 4691,
    "range": [
      4690,
      4691
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4692,
    "end": 4698,
    "range": [
      4692,
      4698
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4699,
    "end": 4700,
    "range": [
      4699,
      4700
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4701,
    "end": 4707,
    "range": [
      4701,
      4707
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4708,
    "end": 4712,
    "range": [
      4708,
      4712
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4712,
    "end": 4713,
    "range": [
      4712,
      4713
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4714,
    "end": 4715,
    "range": [
      4714,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4716,
    "end": 4717,
    "range": [
      4716,
      4717
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4722,
    "end": 4728,
    "range": [
      4722,
      4728
    ]
  },
  {
    "type": "Identifier",
    "value": "explicitStatic",
    "start": 4729,
    "end": 4743,
    "range": [
      4729,
      4743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4743,
    "end": 4744,
    "range": [
      4743,
      4744
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4744,
    "end": 4748,
    "range": [
      4744,
      4748
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4748,
    "end": 4749,
    "range": [
      4748,
      4749
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 4750,
    "end": 4756,
    "range": [
      4750,
      4756
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4757,
    "end": 4762,
    "range": [
      4757,
      4762
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4762,
    "end": 4763,
    "range": [
      4762,
      4763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4763,
    "end": 4764,
    "range": [
      4763,
      4764
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4765,
    "end": 4771,
    "range": [
      4765,
      4771
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4772,
    "end": 4773,
    "range": [
      4772,
      4773
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4774,
    "end": 4780,
    "range": [
      4774,
      4780
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4781,
    "end": 4785,
    "range": [
      4781,
      4785
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4785,
    "end": 4786,
    "range": [
      4785,
      4786
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4786,
    "end": 4787,
    "range": [
      4786,
      4787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4787,
    "end": 4788,
    "range": [
      4787,
      4788
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4789,
    "end": 4790,
    "range": [
      4789,
      4790
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 4795,
    "end": 4801,
    "range": [
      4795,
      4801
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4802,
    "end": 4803,
    "range": [
      4802,
      4803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4803,
    "end": 4804,
    "range": [
      4803,
      4804
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4805,
    "end": 4811,
    "range": [
      4805,
      4811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4811,
    "end": 4812,
    "range": [
      4811,
      4812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4813,
    "end": 4814,
    "range": [
      4813,
      4814
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4815,
    "end": 4820,
    "range": [
      4815,
      4820
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 4821,
    "end": 4829,
    "range": [
      4821,
      4829
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 4830,
    "end": 4837,
    "range": [
      4830,
      4837
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4838,
    "end": 4843,
    "range": [
      4838,
      4843
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4844,
    "end": 4845,
    "range": [
      4844,
      4845
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4850,
    "end": 4851,
    "range": [
      4850,
      4851
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4851,
    "end": 4852,
    "range": [
      4851,
      4852
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4853,
    "end": 4859,
    "range": [
      4853,
      4859
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4860,
    "end": 4861,
    "range": [
      4860,
      4861
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 4862,
    "end": 4867,
    "range": [
      4862,
      4867
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 4868,
    "end": 4873,
    "range": [
      4868,
      4873
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4874,
    "end": 4875,
    "range": [
      4874,
      4875
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4880,
    "end": 4881,
    "range": [
      4880,
      4881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4881,
    "end": 4882,
    "range": [
      4881,
      4882
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4883,
    "end": 4889,
    "range": [
      4883,
      4889
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 4894,
    "end": 4905,
    "range": [
      4894,
      4905
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4906,
    "end": 4910,
    "range": [
      4906,
      4910
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4910,
    "end": 4911,
    "range": [
      4910,
      4911
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4912,
    "end": 4916,
    "range": [
      4912,
      4916
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4916,
    "end": 4917,
    "range": [
      4916,
      4917
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4917,
    "end": 4918,
    "range": [
      4917,
      4918
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4919,
    "end": 4925,
    "range": [
      4919,
      4925
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4926,
    "end": 4927,
    "range": [
      4926,
      4927
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4928,
    "end": 4934,
    "range": [
      4928,
      4934
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4935,
    "end": 4939,
    "range": [
      4935,
      4939
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4939,
    "end": 4940,
    "range": [
      4939,
      4940
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 4940,
    "end": 4941,
    "range": [
      4940,
      4941
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4941,
    "end": 4942,
    "range": [
      4941,
      4942
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4943,
    "end": 4944,
    "range": [
      4943,
      4944
    ]
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 4949,
    "end": 4957,
    "range": [
      4949,
      4957
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4957,
    "end": 4958,
    "range": [
      4957,
      4958
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 4958,
    "end": 4962,
    "range": [
      4958,
      4962
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4962,
    "end": 4963,
    "range": [
      4962,
      4963
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 4964,
    "end": 4969,
    "range": [
      4964,
      4969
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4969,
    "end": 4970,
    "range": [
      4969,
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
    "value": "number",
    "start": 4972,
    "end": 4978,
    "range": [
      4972,
      4978
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4979,
    "end": 4980,
    "range": [
      4979,
      4980
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4981,
    "end": 4987,
    "range": [
      4981,
      4987
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 4988,
    "end": 4992,
    "range": [
      4988,
      4992
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4992,
    "end": 4993,
    "range": [
      4992,
      4993
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 4993,
    "end": 4994,
    "range": [
      4993,
      4994
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4994,
    "end": 4995,
    "range": [
      4994,
      4995
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4996,
    "end": 4997,
    "range": [
      4996,
      4997
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4998,
    "end": 4999,
    "range": [
      4998,
      4999
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 5000,
    "end": 5005,
    "range": [
      5000,
      5005
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5006,
    "end": 5014,
    "range": [
      5006,
      5014
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 5015,
    "end": 5022,
    "range": [
      5015,
      5022
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5023,
    "end": 5028,
    "range": [
      5023,
      5028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5029,
    "end": 5030,
    "range": [
      5029,
      5030
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5035,
    "end": 5036,
    "range": [
      5035,
      5036
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5038,
    "end": 5044,
    "range": [
      5038,
      5044
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5045,
    "end": 5046,
    "range": [
      5045,
      5046
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5047,
    "end": 5050,
    "range": [
      5047,
      5050
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5051,
    "end": 5053,
    "range": [
      5051,
      5053
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5054,
    "end": 5055,
    "range": [
      5054,
      5055
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5056,
    "end": 5059,
    "range": [
      5056,
      5059
    ]
  },
  {
    "type": "Identifier",
    "value": "Base1",
    "start": 5060,
    "end": 5065,
    "range": [
      5060,
      5065
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5065,
    "end": 5066,
    "range": [
      5065,
      5066
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5066,
    "end": 5067,
    "range": [
      5066,
      5067
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5067,
    "end": 5068,
    "range": [
      5067,
      5068
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5069,
    "end": 5072,
    "range": [
      5069,
      5072
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 5073,
    "end": 5075,
    "range": [
      5073,
      5075
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5076,
    "end": 5077,
    "range": [
      5076,
      5077
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5078,
    "end": 5081,
    "range": [
      5078,
      5081
    ]
  },
  {
    "type": "Identifier",
    "value": "Base2",
    "start": 5082,
    "end": 5087,
    "range": [
      5082,
      5087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5088,
    "end": 5089,
    "range": [
      5088,
      5089
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5089,
    "end": 5090,
    "range": [
      5089,
      5090
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5091,
    "end": 5094,
    "range": [
      5091,
      5094
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5095,
    "end": 5097,
    "range": [
      5095,
      5097
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5098,
    "end": 5099,
    "range": [
      5098,
      5099
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5100,
    "end": 5103,
    "range": [
      5100,
      5103
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived1",
    "start": 5104,
    "end": 5112,
    "range": [
      5104,
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
    "type": "Punctuator",
    "value": ")",
    "start": 5113,
    "end": 5114,
    "range": [
      5113,
      5114
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5114,
    "end": 5115,
    "range": [
      5114,
      5115
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5116,
    "end": 5119,
    "range": [
      5116,
      5119
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5120,
    "end": 5122,
    "range": [
      5120,
      5122
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5123,
    "end": 5124,
    "range": [
      5123,
      5124
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5125,
    "end": 5128,
    "range": [
      5125,
      5128
    ]
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 5129,
    "end": 5137,
    "range": [
      5129,
      5137
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5137,
    "end": 5138,
    "range": [
      5137,
      5138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5138,
    "end": 5139,
    "range": [
      5138,
      5139
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5139,
    "end": 5140,
    "range": [
      5139,
      5140
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5141,
    "end": 5143,
    "range": [
      5141,
      5143
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5143,
    "end": 5144,
    "range": [
      5143,
      5144
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5144,
    "end": 5155,
    "range": [
      5144,
      5155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5156,
    "end": 5157,
    "range": [
      5156,
      5157
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5158,
    "end": 5160,
    "range": [
      5158,
      5160
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5160,
    "end": 5161,
    "range": [
      5160,
      5161
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5161,
    "end": 5172,
    "range": [
      5161,
      5172
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5204,
    "end": 5206,
    "range": [
      5204,
      5206
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5206,
    "end": 5207,
    "range": [
      5206,
      5207
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5207,
    "end": 5218,
    "range": [
      5207,
      5218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5219,
    "end": 5220,
    "range": [
      5219,
      5220
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5221,
    "end": 5223,
    "range": [
      5221,
      5223
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5223,
    "end": 5224,
    "range": [
      5223,
      5224
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5224,
    "end": 5235,
    "range": [
      5224,
      5235
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5296,
    "end": 5298,
    "range": [
      5296,
      5298
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5298,
    "end": 5299,
    "range": [
      5298,
      5299
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5299,
    "end": 5310,
    "range": [
      5299,
      5310
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5311,
    "end": 5312,
    "range": [
      5311,
      5312
    ]
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 5313,
    "end": 5315,
    "range": [
      5313,
      5315
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5315,
    "end": 5316,
    "range": [
      5315,
      5316
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5316,
    "end": 5327,
    "range": [
      5316,
      5327
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5354,
    "end": 5356,
    "range": [
      5354,
      5356
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5356,
    "end": 5357,
    "range": [
      5356,
      5357
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5357,
    "end": 5368,
    "range": [
      5357,
      5368
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5369,
    "end": 5370,
    "range": [
      5369,
      5370
    ]
  },
  {
    "type": "Identifier",
    "value": "d1",
    "start": 5371,
    "end": 5373,
    "range": [
      5371,
      5373
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5373,
    "end": 5374,
    "range": [
      5373,
      5374
    ]
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 5374,
    "end": 5382,
    "range": [
      5374,
      5382
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5406,
    "end": 5408,
    "range": [
      5406,
      5408
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5408,
    "end": 5409,
    "range": [
      5408,
      5409
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5409,
    "end": 5420,
    "range": [
      5409,
      5420
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5421,
    "end": 5422,
    "range": [
      5421,
      5422
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5423,
    "end": 5425,
    "range": [
      5423,
      5425
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5425,
    "end": 5426,
    "range": [
      5425,
      5426
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5426,
    "end": 5437,
    "range": [
      5426,
      5437
    ]
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 5477,
    "end": 5479,
    "range": [
      5477,
      5479
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5479,
    "end": 5480,
    "range": [
      5479,
      5480
    ]
  },
  {
    "type": "Identifier",
    "value": "explicit",
    "start": 5480,
    "end": 5488,
    "range": [
      5480,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5489,
    "end": 5490,
    "range": [
      5489,
      5490
    ]
  },
  {
    "type": "Identifier",
    "value": "d2",
    "start": 5491,
    "end": 5493,
    "range": [
      5491,
      5493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5493,
    "end": 5494,
    "range": [
      5493,
      5494
    ]
  },
  {
    "type": "Identifier",
    "value": "polymorphic",
    "start": 5494,
    "end": 5505,
    "range": [
      5494,
      5505
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5598,
    "end": 5606,
    "range": [
      5598,
      5606
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceThis",
    "start": 5607,
    "end": 5620,
    "range": [
      5607,
      5620
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5620,
    "end": 5621,
    "range": [
      5620,
      5621
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5621,
    "end": 5625,
    "range": [
      5621,
      5625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5625,
    "end": 5626,
    "range": [
      5625,
      5626
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 5627,
    "end": 5628,
    "range": [
      5627,
      5628
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5628,
    "end": 5629,
    "range": [
      5628,
      5629
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5630,
    "end": 5631,
    "range": [
      5630,
      5631
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5636,
    "end": 5640,
    "range": [
      5636,
      5640
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5640,
    "end": 5641,
    "range": [
      5640,
      5641
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5641,
    "end": 5642,
    "range": [
      5641,
      5642
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5643,
    "end": 5644,
    "range": [
      5643,
      5644
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 5645,
    "end": 5647,
    "range": [
      5645,
      5647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5647,
    "end": 5648,
    "range": [
      5647,
      5648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5649,
    "end": 5650,
    "range": [
      5649,
      5650
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5651,
    "end": 5659,
    "range": [
      5651,
      5659
    ]
  },
  {
    "type": "Identifier",
    "value": "LiteralTypeThis",
    "start": 5660,
    "end": 5675,
    "range": [
      5660,
      5675
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5675,
    "end": 5676,
    "range": [
      5675,
      5676
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5676,
    "end": 5680,
    "range": [
      5676,
      5680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5680,
    "end": 5681,
    "range": [
      5680,
      5681
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5682,
    "end": 5683,
    "range": [
      5682,
      5683
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5683,
    "end": 5684,
    "range": [
      5683,
      5684
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5684,
    "end": 5685,
    "range": [
      5684,
      5685
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5686,
    "end": 5692,
    "range": [
      5686,
      5692
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5692,
    "end": 5693,
    "range": [
      5692,
      5693
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5693,
    "end": 5694,
    "range": [
      5693,
      5694
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5695,
    "end": 5696,
    "range": [
      5695,
      5696
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5701,
    "end": 5705,
    "range": [
      5701,
      5705
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5705,
    "end": 5706,
    "range": [
      5705,
      5706
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5706,
    "end": 5707,
    "range": [
      5706,
      5707
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5708,
    "end": 5709,
    "range": [
      5708,
      5709
    ]
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 5710,
    "end": 5714,
    "range": [
      5710,
      5714
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5714,
    "end": 5715,
    "range": [
      5714,
      5715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5716,
    "end": 5717,
    "range": [
      5716,
      5717
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5718,
    "end": 5726,
    "range": [
      5718,
      5726
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyThis",
    "start": 5727,
    "end": 5734,
    "range": [
      5727,
      5734
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5734,
    "end": 5735,
    "range": [
      5734,
      5735
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5735,
    "end": 5739,
    "range": [
      5735,
      5739
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5739,
    "end": 5740,
    "range": [
      5739,
      5740
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5741,
    "end": 5744,
    "range": [
      5741,
      5744
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5744,
    "end": 5745,
    "range": [
      5744,
      5745
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5746,
    "end": 5747,
    "range": [
      5746,
      5747
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 5752,
    "end": 5756,
    "range": [
      5752,
      5756
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5756,
    "end": 5757,
    "range": [
      5756,
      5757
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5757,
    "end": 5758,
    "range": [
      5757,
      5758
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5759,
    "end": 5760,
    "range": [
      5759,
      5760
    ]
  },
  {
    "type": "String",
    "value": "\"ok\"",
    "start": 5761,
    "end": 5765,
    "range": [
      5761,
      5765
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5765,
    "end": 5766,
    "range": [
      5765,
      5766
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5767,
    "end": 5768,
    "range": [
      5767,
      5768
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5769,
    "end": 5772,
    "range": [
      5769,
      5772
    ]
  },
  {
    "type": "Identifier",
    "value": "interfaceThis",
    "start": 5773,
    "end": 5786,
    "range": [
      5773,
      5786
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5787,
    "end": 5788,
    "range": [
      5787,
      5788
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5789,
    "end": 5792,
    "range": [
      5789,
      5792
    ]
  },
  {
    "type": "Identifier",
    "value": "InterfaceThis",
    "start": 5793,
    "end": 5806,
    "range": [
      5793,
      5806
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5806,
    "end": 5807,
    "range": [
      5806,
      5807
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5807,
    "end": 5808,
    "range": [
      5807,
      5808
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5808,
    "end": 5809,
    "range": [
      5808,
      5809
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5810,
    "end": 5813,
    "range": [
      5810,
      5813
    ]
  },
  {
    "type": "Identifier",
    "value": "literalTypeThis",
    "start": 5814,
    "end": 5829,
    "range": [
      5814,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5830,
    "end": 5831,
    "range": [
      5830,
      5831
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5832,
    "end": 5835,
    "range": [
      5832,
      5835
    ]
  },
  {
    "type": "Identifier",
    "value": "LiteralTypeThis",
    "start": 5836,
    "end": 5851,
    "range": [
      5836,
      5851
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5851,
    "end": 5852,
    "range": [
      5851,
      5852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5852,
    "end": 5853,
    "range": [
      5852,
      5853
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5853,
    "end": 5854,
    "range": [
      5853,
      5854
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5855,
    "end": 5858,
    "range": [
      5855,
      5858
    ]
  },
  {
    "type": "Identifier",
    "value": "anyThis",
    "start": 5859,
    "end": 5866,
    "range": [
      5859,
      5866
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5867,
    "end": 5868,
    "range": [
      5867,
      5868
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 5869,
    "end": 5872,
    "range": [
      5869,
      5872
    ]
  },
  {
    "type": "Identifier",
    "value": "AnyThis",
    "start": 5873,
    "end": 5880,
    "range": [
      5873,
      5880
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5880,
    "end": 5881,
    "range": [
      5880,
      5881
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5881,
    "end": 5882,
    "range": [
      5881,
      5882
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5882,
    "end": 5883,
    "range": [
      5882,
      5883
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 5920,
    "end": 5927,
    "range": [
      5920,
      5927
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 5928,
    "end": 5931,
    "range": [
      5928,
      5931
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 5932,
    "end": 5933,
    "range": [
      5932,
      5933
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5933,
    "end": 5934,
    "range": [
      5933,
      5934
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5935,
    "end": 5936,
    "range": [
      5935,
      5936
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5942,
    "end": 5943,
    "range": [
      5942,
      5943
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5943,
    "end": 5947,
    "range": [
      5943,
      5947
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5947,
    "end": 5948,
    "range": [
      5947,
      5948
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5949,
    "end": 5953,
    "range": [
      5949,
      5953
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5953,
    "end": 5954,
    "range": [
      5953,
      5954
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 5955,
    "end": 5956,
    "range": [
      5955,
      5956
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5956,
    "end": 5957,
    "range": [
      5956,
      5957
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5958,
    "end": 5964,
    "range": [
      5958,
      5964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5964,
    "end": 5965,
    "range": [
      5964,
      5965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5965,
    "end": 5966,
    "range": [
      5965,
      5966
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5967,
    "end": 5973,
    "range": [
      5967,
      5973
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5973,
    "end": 5974,
    "range": [
      5973,
      5974
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 5980,
    "end": 5984,
    "range": [
      5980,
      5984
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5984,
    "end": 5985,
    "range": [
      5984,
      5985
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 5985,
    "end": 5986,
    "range": [
      5985,
      5986
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5986,
    "end": 5987,
    "range": [
      5986,
      5987
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5987,
    "end": 5988,
    "range": [
      5987,
      5988
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 5988,
    "end": 5992,
    "range": [
      5988,
      5992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5992,
    "end": 5993,
    "range": [
      5992,
      5993
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5994,
    "end": 5995,
    "range": [
      5994,
      5995
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5995,
    "end": 5998,
    "range": [
      5995,
      5998
    ]
  },
  {
    "type": "Identifier",
    "value": "argArray",
    "start": 5998,
    "end": 6006,
    "range": [
      5998,
      6006
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6006,
    "end": 6007,
    "range": [
      6006,
      6007
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6008,
    "end": 6011,
    "range": [
      6008,
      6011
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6011,
    "end": 6012,
    "range": [
      6011,
      6012
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6012,
    "end": 6013,
    "range": [
      6012,
      6013
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6013,
    "end": 6014,
    "range": [
      6013,
      6014
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6015,
    "end": 6017,
    "range": [
      6015,
      6017
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6018,
    "end": 6019,
    "range": [
      6018,
      6019
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6019,
    "end": 6020,
    "range": [
      6019,
      6020
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6021,
    "end": 6024,
    "range": [
      6021,
      6024
    ]
  },
  {
    "type": "Identifier",
    "value": "argArray",
    "start": 6024,
    "end": 6032,
    "range": [
      6024,
      6032
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6032,
    "end": 6033,
    "range": [
      6032,
      6033
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6034,
    "end": 6037,
    "range": [
      6034,
      6037
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6037,
    "end": 6038,
    "range": [
      6037,
      6038
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6038,
    "end": 6039,
    "range": [
      6038,
      6039
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6039,
    "end": 6040,
    "range": [
      6039,
      6040
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6040,
    "end": 6041,
    "range": [
      6040,
      6041
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 6042,
    "end": 6043,
    "range": [
      6042,
      6043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6043,
    "end": 6044,
    "range": [
      6043,
      6044
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6045,
    "end": 6046,
    "range": [
      6045,
      6046
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6046,
    "end": 6047,
    "range": [
      6046,
      6047
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6048,
    "end": 6051,
    "range": [
      6048,
      6051
    ]
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 6052,
    "end": 6053,
    "range": [
      6052,
      6053
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6053,
    "end": 6054,
    "range": [
      6053,
      6054
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6055,
    "end": 6061,
    "range": [
      6055,
      6061
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6062,
    "end": 6063,
    "range": [
      6062,
      6063
    ]
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 6064,
    "end": 6065,
    "range": [
      6064,
      6065
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6065,
    "end": 6066,
    "range": [
      6065,
      6066
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 6066,
    "end": 6070,
    "range": [
      6066,
      6070
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6070,
    "end": 6071,
    "range": [
      6070,
      6071
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 6071,
    "end": 6073,
    "range": [
      6071,
      6073
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6073,
    "end": 6074,
    "range": [
      6073,
      6074
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6074,
    "end": 6075,
    "range": [
      6074,
      6075
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6077,
    "end": 6085,
    "range": [
      6077,
      6085
    ]
  },
  {
    "type": "Identifier",
    "value": "missingTypeIsImplicitAny",
    "start": 6086,
    "end": 6110,
    "range": [
      6086,
      6110
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6110,
    "end": 6111,
    "range": [
      6110,
      6111
    ]
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 6111,
    "end": 6115,
    "range": [
      6111,
      6115
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6115,
    "end": 6116,
    "range": [
      6115,
      6116
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6117,
    "end": 6118,
    "range": [
      6117,
      6118
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6118,
    "end": 6119,
    "range": [
      6118,
      6119
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6120,
    "end": 6126,
    "range": [
      6120,
      6126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6126,
    "end": 6127,
    "range": [
      6126,
      6127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6128,
    "end": 6129,
    "range": [
      6128,
      6129
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 6130,
    "end": 6136,
    "range": [
      6130,
      6136
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 6137,
    "end": 6141,
    "range": [
      6137,
      6141
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6141,
    "end": 6142,
    "range": [
      6141,
      6142
    ]
  },
  {
    "type": "Identifier",
    "value": "anything",
    "start": 6142,
    "end": 6150,
    "range": [
      6142,
      6150
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 6151,
    "end": 6152,
    "range": [
      6151,
      6152
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 6153,
    "end": 6154,
    "range": [
      6153,
      6154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6154,
    "end": 6155,
    "range": [
      6154,
      6155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6156,
    "end": 6157,
    "range": [
      6156,
      6157
    ]
  }
]
```
