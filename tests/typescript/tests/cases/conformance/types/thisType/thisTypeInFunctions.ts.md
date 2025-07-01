__ESTREE_TEST__:PASS:
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
