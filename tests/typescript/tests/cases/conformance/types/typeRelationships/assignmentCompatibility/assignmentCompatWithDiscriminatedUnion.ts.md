__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example1",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 92
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 104,
              "end": 105
            },
            "typeParameters": null,
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
                    "name": "done",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 114
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 116,
                      "end": 123
                    },
                    "start": 114,
                    "end": 123
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 110,
                  "end": 124
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 125,
                    "end": 130
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 132,
                      "end": 138
                    },
                    "start": 130,
                    "end": 138
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 125,
                  "end": 138
                }
              ],
              "start": 108,
              "end": 140
            },
            "declare": false,
            "start": 99,
            "end": 141
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 152
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
                        "name": "done",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 167,
                        "end": 171
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 173,
                            "end": 177
                          },
                          "start": 173,
                          "end": 177
                        },
                        "start": 171,
                        "end": 177
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 167,
                      "end": 178
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 179,
                        "end": 184
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 186,
                          "end": 192
                        },
                        "start": 184,
                        "end": 192
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 179,
                      "end": 192
                    }
                  ],
                  "start": 165,
                  "end": 194
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
                        "name": "done",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 221
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 223,
                            "end": 228
                          },
                          "start": 223,
                          "end": 228
                        },
                        "start": 221,
                        "end": 228
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 217,
                      "end": 229
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 230,
                        "end": 235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 237,
                          "end": 243
                        },
                        "start": 235,
                        "end": 243
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 230,
                      "end": 243
                    }
                  ],
                  "start": 215,
                  "end": 245
                }
              ],
              "start": 163,
              "end": 245
            },
            "declare": false,
            "start": 146,
            "end": 246
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 275,
                        "end": 276
                      },
                      "typeArguments": null,
                      "start": 275,
                      "end": 276
                    },
                    "start": 273,
                    "end": 276
                  },
                  "start": 272,
                  "end": 276
                },
                "init": null,
                "definite": false,
                "start": 272,
                "end": 276
              }
            ],
            "declare": true,
            "start": 260,
            "end": 277
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
                  "name": "t",
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
                        "start": 297,
                        "end": 298
                      },
                      "typeArguments": null,
                      "start": 297,
                      "end": 298
                    },
                    "start": 295,
                    "end": 298
                  },
                  "start": 294,
                  "end": 298
                },
                "init": null,
                "definite": false,
                "start": 294,
                "end": 298
              }
            ],
            "declare": true,
            "start": 282,
            "end": 299
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 410,
                "end": 411
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 415
              },
              "start": 410,
              "end": 415
            },
            "directive": null,
            "start": 410,
            "end": 416
          }
        ],
        "start": 93,
        "end": 418
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 74,
      "end": 418
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example2",
        "optional": false,
        "typeAnnotation": null,
        "start": 460,
        "end": 468
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "typeParameters": null,
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
                    "start": 486,
                    "end": 487
                  },
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
                            "start": 489,
                            "end": 490
                          },
                          "start": 489,
                          "end": 490
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 493,
                            "end": 494
                          },
                          "start": 493,
                          "end": 494
                        }
                      ],
                      "start": 489,
                      "end": 494
                    },
                    "start": 487,
                    "end": 494
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 486,
                  "end": 495
                },
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
                    "start": 496,
                    "end": 497
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 499,
                        "end": 500
                      },
                      "start": 499,
                      "end": 500
                    },
                    "start": 497,
                    "end": 500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 496,
                  "end": 500
                }
              ],
              "start": 484,
              "end": 502
            },
            "declare": false,
            "start": 475,
            "end": 503
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 514
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 519,
                        "end": 520
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 522,
                            "end": 523
                          },
                          "start": 522,
                          "end": 523
                        },
                        "start": 520,
                        "end": 523
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 519,
                      "end": 524
                    },
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
                        "start": 529,
                        "end": 530
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 532,
                                "end": 533
                              },
                              "start": 532,
                              "end": 533
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 536,
                                "end": 537
                              },
                              "start": 536,
                              "end": 537
                            }
                          ],
                          "start": 532,
                          "end": 537
                        },
                        "start": 530,
                        "end": 537
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 529,
                      "end": 537
                    }
                  ],
                  "start": 517,
                  "end": 539
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 566
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 568,
                            "end": 569
                          },
                          "start": 568,
                          "end": 569
                        },
                        "start": 566,
                        "end": 569
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 565,
                      "end": 570
                    },
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
                        "start": 575,
                        "end": 576
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 578,
                            "end": 579
                          },
                          "start": 578,
                          "end": 579
                        },
                        "start": 576,
                        "end": 579
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 575,
                      "end": 579
                    }
                  ],
                  "start": 563,
                  "end": 581
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 614,
                            "end": 615
                          },
                          "start": 614,
                          "end": 615
                        },
                        "start": 612,
                        "end": 615
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 611,
                      "end": 616
                    },
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
                        "start": 621,
                        "end": 622
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 624,
                                "end": 625
                              },
                              "start": 624,
                              "end": 625
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 628,
                                "end": 629
                              },
                              "start": 628,
                              "end": 629
                            }
                          ],
                          "start": 624,
                          "end": 629
                        },
                        "start": 622,
                        "end": 629
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 621,
                      "end": 629
                    }
                  ],
                  "start": 609,
                  "end": 631
                }
              ],
              "start": 517,
              "end": 631
            },
            "declare": false,
            "start": 508,
            "end": 632
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 661,
                        "end": 662
                      },
                      "typeArguments": null,
                      "start": 661,
                      "end": 662
                    },
                    "start": 659,
                    "end": 662
                  },
                  "start": 658,
                  "end": 662
                },
                "init": null,
                "definite": false,
                "start": 658,
                "end": 662
              }
            ],
            "declare": true,
            "start": 646,
            "end": 663
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
                  "name": "t",
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
                        "start": 683,
                        "end": 684
                      },
                      "typeArguments": null,
                      "start": 683,
                      "end": 684
                    },
                    "start": 681,
                    "end": 684
                  },
                  "start": 680,
                  "end": 684
                },
                "init": null,
                "definite": false,
                "start": 680,
                "end": 684
              }
            ],
            "declare": true,
            "start": 668,
            "end": 685
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 784
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 787,
                "end": 788
              },
              "start": 783,
              "end": 788
            },
            "directive": null,
            "start": 783,
            "end": 789
          }
        ],
        "start": 469,
        "end": 791
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 450,
      "end": 791
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example3",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 838
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 850,
              "end": 851
            },
            "typeParameters": null,
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
                    "start": 856,
                    "end": 857
                  },
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
                            "start": 859,
                            "end": 860
                          },
                          "start": 859,
                          "end": 860
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 863,
                            "end": 864
                          },
                          "start": 863,
                          "end": 864
                        }
                      ],
                      "start": 859,
                      "end": 864
                    },
                    "start": 857,
                    "end": 864
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 856,
                  "end": 865
                },
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
                    "start": 866,
                    "end": 867
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 869,
                        "end": 870
                      },
                      "start": 869,
                      "end": 870
                    },
                    "start": 867,
                    "end": 870
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 866,
                  "end": 870
                }
              ],
              "start": 854,
              "end": 872
            },
            "declare": false,
            "start": 845,
            "end": 873
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 883,
              "end": 884
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 889,
                        "end": 890
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 892,
                            "end": 893
                          },
                          "start": 892,
                          "end": 893
                        },
                        "start": 890,
                        "end": 893
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 889,
                      "end": 894
                    },
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
                        "start": 899,
                        "end": 900
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 902,
                                "end": 903
                              },
                              "start": 902,
                              "end": 903
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 906,
                                "end": 907
                              },
                              "start": 906,
                              "end": 907
                            }
                          ],
                          "start": 902,
                          "end": 907
                        },
                        "start": 900,
                        "end": 907
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 899,
                      "end": 907
                    }
                  ],
                  "start": 887,
                  "end": 909
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 935,
                        "end": 936
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 938,
                            "end": 939
                          },
                          "start": 938,
                          "end": 939
                        },
                        "start": 936,
                        "end": 939
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 935,
                      "end": 940
                    },
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
                        "start": 945,
                        "end": 946
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 948,
                                "end": 949
                              },
                              "start": 948,
                              "end": 949
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 952,
                                "end": 953
                              },
                              "start": 952,
                              "end": 953
                            }
                          ],
                          "start": 948,
                          "end": 953
                        },
                        "start": 946,
                        "end": 953
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 945,
                      "end": 953
                    }
                  ],
                  "start": 933,
                  "end": 955
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 981,
                        "end": 982
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 984,
                            "end": 985
                          },
                          "start": 984,
                          "end": 985
                        },
                        "start": 982,
                        "end": 985
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 981,
                      "end": 986
                    },
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
                        "start": 991,
                        "end": 992
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 994,
                            "end": 995
                          },
                          "start": 994,
                          "end": 995
                        },
                        "start": 992,
                        "end": 995
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 991,
                      "end": 995
                    }
                  ],
                  "start": 979,
                  "end": 997
                }
              ],
              "start": 887,
              "end": 997
            },
            "declare": false,
            "start": 878,
            "end": 998
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1031,
                        "end": 1032
                      },
                      "typeArguments": null,
                      "start": 1031,
                      "end": 1032
                    },
                    "start": 1029,
                    "end": 1032
                  },
                  "start": 1028,
                  "end": 1032
                },
                "init": null,
                "definite": false,
                "start": 1028,
                "end": 1032
              }
            ],
            "declare": true,
            "start": 1016,
            "end": 1033
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
                  "name": "t",
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
                        "start": 1053,
                        "end": 1054
                      },
                      "typeArguments": null,
                      "start": 1053,
                      "end": 1054
                    },
                    "start": 1051,
                    "end": 1054
                  },
                  "start": 1050,
                  "end": 1054
                },
                "init": null,
                "definite": false,
                "start": 1050,
                "end": 1054
              }
            ],
            "declare": true,
            "start": 1038,
            "end": 1055
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1211,
                "end": 1212
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1215,
                "end": 1216
              },
              "start": 1211,
              "end": 1216
            },
            "directive": null,
            "start": 1211,
            "end": 1217
          }
        ],
        "start": 839,
        "end": 1219
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 820,
      "end": 1219
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example4",
        "optional": false,
        "typeAnnotation": null,
        "start": 1262,
        "end": 1270
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1282,
              "end": 1283
            },
            "typeParameters": null,
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
                    "start": 1288,
                    "end": 1289
                  },
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
                            "start": 1291,
                            "end": 1292
                          },
                          "start": 1291,
                          "end": 1292
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1295,
                            "end": 1296
                          },
                          "start": 1295,
                          "end": 1296
                        }
                      ],
                      "start": 1291,
                      "end": 1296
                    },
                    "start": 1289,
                    "end": 1296
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1288,
                  "end": 1297
                },
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
                    "start": 1298,
                    "end": 1299
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 1301,
                        "end": 1302
                      },
                      "start": 1301,
                      "end": 1302
                    },
                    "start": 1299,
                    "end": 1302
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1298,
                  "end": 1302
                }
              ],
              "start": 1286,
              "end": 1304
            },
            "declare": false,
            "start": 1277,
            "end": 1305
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1316
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1321,
                        "end": 1322
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1324,
                            "end": 1325
                          },
                          "start": 1324,
                          "end": 1325
                        },
                        "start": 1322,
                        "end": 1325
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1321,
                      "end": 1326
                    },
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
                        "start": 1331,
                        "end": 1332
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1334,
                                "end": 1335
                              },
                              "start": 1334,
                              "end": 1335
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 1338,
                                "end": 1339
                              },
                              "start": 1338,
                              "end": 1339
                            }
                          ],
                          "start": 1334,
                          "end": 1339
                        },
                        "start": 1332,
                        "end": 1339
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1331,
                      "end": 1339
                    }
                  ],
                  "start": 1319,
                  "end": 1341
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1375,
                        "end": 1376
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1378,
                            "end": 1379
                          },
                          "start": 1378,
                          "end": 1379
                        },
                        "start": 1376,
                        "end": 1379
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1375,
                      "end": 1380
                    },
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
                        "start": 1385,
                        "end": 1386
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1388,
                            "end": 1389
                          },
                          "start": 1388,
                          "end": 1389
                        },
                        "start": 1386,
                        "end": 1389
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1385,
                      "end": 1389
                    }
                  ],
                  "start": 1373,
                  "end": 1391
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1429,
                        "end": 1430
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1432,
                            "end": 1433
                          },
                          "start": 1432,
                          "end": 1433
                        },
                        "start": 1430,
                        "end": 1433
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1429,
                      "end": 1434
                    },
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
                        "start": 1439,
                        "end": 1440
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 1442,
                                "end": 1443
                              },
                              "start": 1442,
                              "end": 1443
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": 4,
                                "raw": "4",
                                "start": 1446,
                                "end": 1447
                              },
                              "start": 1446,
                              "end": 1447
                            }
                          ],
                          "start": 1442,
                          "end": 1447
                        },
                        "start": 1440,
                        "end": 1447
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1439,
                      "end": 1448
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1449,
                        "end": 1450
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1452,
                          "end": 1458
                        },
                        "start": 1450,
                        "end": 1458
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1449,
                      "end": 1458
                    }
                  ],
                  "start": 1427,
                  "end": 1460
                }
              ],
              "start": 1319,
              "end": 1460
            },
            "declare": false,
            "start": 1310,
            "end": 1461
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1487,
                        "end": 1488
                      },
                      "typeArguments": null,
                      "start": 1487,
                      "end": 1488
                    },
                    "start": 1485,
                    "end": 1488
                  },
                  "start": 1484,
                  "end": 1488
                },
                "init": null,
                "definite": false,
                "start": 1484,
                "end": 1488
              }
            ],
            "declare": true,
            "start": 1472,
            "end": 1489
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
                  "name": "t",
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
                        "start": 1509,
                        "end": 1510
                      },
                      "typeArguments": null,
                      "start": 1509,
                      "end": 1510
                    },
                    "start": 1507,
                    "end": 1510
                  },
                  "start": 1506,
                  "end": 1510
                },
                "init": null,
                "definite": false,
                "start": 1506,
                "end": 1510
              }
            ],
            "declare": true,
            "start": 1494,
            "end": 1511
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1635,
                "end": 1636
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1639,
                "end": 1640
              },
              "start": 1635,
              "end": 1640
            },
            "directive": null,
            "start": 1635,
            "end": 1641
          }
        ],
        "start": 1271,
        "end": 1643
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1252,
      "end": 1643
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Example5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1692,
        "end": 1700
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "N",
              "optional": false,
              "typeAnnotation": null,
              "start": 1897,
              "end": 1898
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 1901,
                    "end": 1902
                  },
                  "start": 1901,
                  "end": 1902
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 1905,
                    "end": 1906
                  },
                  "start": 1905,
                  "end": 1906
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 1909,
                    "end": 1910
                  },
                  "start": 1909,
                  "end": 1910
                }
              ],
              "start": 1901,
              "end": 1910
            },
            "declare": false,
            "start": 1892,
            "end": 1911
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1921,
              "end": 1922
            },
            "typeParameters": null,
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
                    "start": 1927,
                    "end": 1928
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1930,
                        "end": 1931
                      },
                      "typeArguments": null,
                      "start": 1930,
                      "end": 1931
                    },
                    "start": 1928,
                    "end": 1931
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1927,
                  "end": 1932
                },
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
                    "start": 1933,
                    "end": 1934
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1936,
                        "end": 1937
                      },
                      "typeArguments": null,
                      "start": 1936,
                      "end": 1937
                    },
                    "start": 1934,
                    "end": 1937
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1933,
                  "end": 1938
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1939,
                    "end": 1940
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "N",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1942,
                        "end": 1943
                      },
                      "typeArguments": null,
                      "start": 1942,
                      "end": 1943
                    },
                    "start": 1940,
                    "end": 1943
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1939,
                  "end": 1943
                }
              ],
              "start": 1925,
              "end": 1945
            },
            "declare": false,
            "start": 1916,
            "end": 1946
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1956,
              "end": 1957
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1962,
                        "end": 1963
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 1965,
                            "end": 1966
                          },
                          "start": 1965,
                          "end": 1966
                        },
                        "start": 1963,
                        "end": 1966
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1962,
                      "end": 1967
                    },
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
                        "start": 1968,
                        "end": 1969
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1971,
                            "end": 1972
                          },
                          "typeArguments": null,
                          "start": 1971,
                          "end": 1972
                        },
                        "start": 1969,
                        "end": 1972
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1968,
                      "end": 1973
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1974,
                        "end": 1975
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1977,
                            "end": 1978
                          },
                          "typeArguments": null,
                          "start": 1977,
                          "end": 1978
                        },
                        "start": 1975,
                        "end": 1978
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1974,
                      "end": 1978
                    }
                  ],
                  "start": 1960,
                  "end": 1980
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1996,
                        "end": 1997
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1999,
                            "end": 2000
                          },
                          "start": 1999,
                          "end": 2000
                        },
                        "start": 1997,
                        "end": 2000
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1996,
                      "end": 2001
                    },
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
                        "start": 2002,
                        "end": 2003
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2005,
                            "end": 2006
                          },
                          "typeArguments": null,
                          "start": 2005,
                          "end": 2006
                        },
                        "start": 2003,
                        "end": 2006
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2002,
                      "end": 2007
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2008,
                        "end": 2009
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2011,
                            "end": 2012
                          },
                          "typeArguments": null,
                          "start": 2011,
                          "end": 2012
                        },
                        "start": 2009,
                        "end": 2012
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2008,
                      "end": 2012
                    }
                  ],
                  "start": 1994,
                  "end": 2014
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2030,
                        "end": 2031
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2033,
                            "end": 2034
                          },
                          "start": 2033,
                          "end": 2034
                        },
                        "start": 2031,
                        "end": 2034
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2030,
                      "end": 2035
                    },
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
                        "start": 2036,
                        "end": 2037
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2039,
                            "end": 2040
                          },
                          "typeArguments": null,
                          "start": 2039,
                          "end": 2040
                        },
                        "start": 2037,
                        "end": 2040
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2036,
                      "end": 2041
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2042,
                        "end": 2043
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2045,
                            "end": 2046
                          },
                          "typeArguments": null,
                          "start": 2045,
                          "end": 2046
                        },
                        "start": 2043,
                        "end": 2046
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2042,
                      "end": 2046
                    }
                  ],
                  "start": 2028,
                  "end": 2048
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2064,
                        "end": 2065
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2067,
                            "end": 2068
                          },
                          "typeArguments": null,
                          "start": 2067,
                          "end": 2068
                        },
                        "start": 2065,
                        "end": 2068
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2064,
                      "end": 2069
                    },
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
                        "start": 2070,
                        "end": 2071
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2073,
                            "end": 2074
                          },
                          "start": 2073,
                          "end": 2074
                        },
                        "start": 2071,
                        "end": 2074
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2070,
                      "end": 2075
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2076,
                        "end": 2077
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2079,
                            "end": 2080
                          },
                          "typeArguments": null,
                          "start": 2079,
                          "end": 2080
                        },
                        "start": 2077,
                        "end": 2080
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2076,
                      "end": 2080
                    }
                  ],
                  "start": 2062,
                  "end": 2082
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2098,
                        "end": 2099
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2101,
                            "end": 2102
                          },
                          "typeArguments": null,
                          "start": 2101,
                          "end": 2102
                        },
                        "start": 2099,
                        "end": 2102
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2098,
                      "end": 2103
                    },
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
                        "start": 2104,
                        "end": 2105
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2107,
                            "end": 2108
                          },
                          "start": 2107,
                          "end": 2108
                        },
                        "start": 2105,
                        "end": 2108
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2104,
                      "end": 2109
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2110,
                        "end": 2111
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2113,
                            "end": 2114
                          },
                          "typeArguments": null,
                          "start": 2113,
                          "end": 2114
                        },
                        "start": 2111,
                        "end": 2114
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2110,
                      "end": 2114
                    }
                  ],
                  "start": 2096,
                  "end": 2116
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2132,
                        "end": 2133
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2135,
                            "end": 2136
                          },
                          "typeArguments": null,
                          "start": 2135,
                          "end": 2136
                        },
                        "start": 2133,
                        "end": 2136
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2132,
                      "end": 2137
                    },
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
                        "start": 2138,
                        "end": 2139
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2141,
                            "end": 2142
                          },
                          "start": 2141,
                          "end": 2142
                        },
                        "start": 2139,
                        "end": 2142
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2138,
                      "end": 2143
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2144,
                        "end": 2145
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2147,
                            "end": 2148
                          },
                          "typeArguments": null,
                          "start": 2147,
                          "end": 2148
                        },
                        "start": 2145,
                        "end": 2148
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2144,
                      "end": 2148
                    }
                  ],
                  "start": 2130,
                  "end": 2150
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2166,
                        "end": 2167
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2169,
                            "end": 2170
                          },
                          "typeArguments": null,
                          "start": 2169,
                          "end": 2170
                        },
                        "start": 2167,
                        "end": 2170
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2166,
                      "end": 2171
                    },
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
                        "start": 2172,
                        "end": 2173
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2175,
                            "end": 2176
                          },
                          "typeArguments": null,
                          "start": 2175,
                          "end": 2176
                        },
                        "start": 2173,
                        "end": 2176
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2172,
                      "end": 2177
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2178,
                        "end": 2179
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 2181,
                            "end": 2182
                          },
                          "start": 2181,
                          "end": 2182
                        },
                        "start": 2179,
                        "end": 2182
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2178,
                      "end": 2182
                    }
                  ],
                  "start": 2164,
                  "end": 2184
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2200,
                        "end": 2201
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2203,
                            "end": 2204
                          },
                          "typeArguments": null,
                          "start": 2203,
                          "end": 2204
                        },
                        "start": 2201,
                        "end": 2204
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2200,
                      "end": 2205
                    },
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
                        "start": 2206,
                        "end": 2207
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2209,
                            "end": 2210
                          },
                          "typeArguments": null,
                          "start": 2209,
                          "end": 2210
                        },
                        "start": 2207,
                        "end": 2210
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2206,
                      "end": 2211
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2212,
                        "end": 2213
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 2215,
                            "end": 2216
                          },
                          "start": 2215,
                          "end": 2216
                        },
                        "start": 2213,
                        "end": 2216
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2212,
                      "end": 2216
                    }
                  ],
                  "start": 2198,
                  "end": 2218
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2234,
                        "end": 2235
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2237,
                            "end": 2238
                          },
                          "typeArguments": null,
                          "start": 2237,
                          "end": 2238
                        },
                        "start": 2235,
                        "end": 2238
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2234,
                      "end": 2239
                    },
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
                        "start": 2240,
                        "end": 2241
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "N",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2243,
                            "end": 2244
                          },
                          "typeArguments": null,
                          "start": 2243,
                          "end": 2244
                        },
                        "start": 2241,
                        "end": 2244
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2240,
                      "end": 2245
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2246,
                        "end": 2247
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 2249,
                            "end": 2250
                          },
                          "start": 2249,
                          "end": 2250
                        },
                        "start": 2247,
                        "end": 2250
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2246,
                      "end": 2250
                    }
                  ],
                  "start": 2232,
                  "end": 2252
                }
              ],
              "start": 1960,
              "end": 2252
            },
            "declare": false,
            "start": 1951,
            "end": 2253
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2273,
                        "end": 2274
                      },
                      "typeArguments": null,
                      "start": 2273,
                      "end": 2274
                    },
                    "start": 2271,
                    "end": 2274
                  },
                  "start": 2270,
                  "end": 2274
                },
                "init": null,
                "definite": false,
                "start": 2270,
                "end": 2274
              }
            ],
            "declare": true,
            "start": 2258,
            "end": 2275
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
                  "name": "t",
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
                        "start": 2295,
                        "end": 2296
                      },
                      "typeArguments": null,
                      "start": 2295,
                      "end": 2296
                    },
                    "start": 2293,
                    "end": 2296
                  },
                  "start": 2292,
                  "end": 2296
                },
                "init": null,
                "definite": false,
                "start": 2292,
                "end": 2296
              }
            ],
            "declare": true,
            "start": 2280,
            "end": 2297
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 2389,
                "end": 2390
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 2393,
                "end": 2394
              },
              "start": 2389,
              "end": 2394
            },
            "directive": null,
            "start": 2389,
            "end": 2395
          }
        ],
        "start": 1701,
        "end": 2397
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1682,
      "end": 2397
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH14865",
        "optional": false,
        "typeAnnotation": null,
        "start": 2465,
        "end": 2472
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Style1",
              "optional": false,
              "typeAnnotation": null,
              "start": 2484,
              "end": 2490
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
                        "start": 2503,
                        "end": 2507
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 2509,
                            "end": 2512
                          },
                          "start": 2509,
                          "end": 2512
                        },
                        "start": 2507,
                        "end": 2512
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2503,
                      "end": 2513
                    },
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
                        "start": 2522,
                        "end": 2526
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2528,
                          "end": 2534
                        },
                        "start": 2526,
                        "end": 2534
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2522,
                      "end": 2535
                    }
                  ],
                  "start": 2493,
                  "end": 2541
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
                        "start": 2554,
                        "end": 2558
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 2560,
                            "end": 2563
                          },
                          "start": 2560,
                          "end": 2563
                        },
                        "start": 2558,
                        "end": 2563
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2554,
                      "end": 2564
                    },
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
                        "start": 2573,
                        "end": 2577
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2579,
                          "end": 2585
                        },
                        "start": 2577,
                        "end": 2585
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2573,
                      "end": 2586
                    }
                  ],
                  "start": 2544,
                  "end": 2592
                }
              ],
              "start": 2493,
              "end": 2592
            },
            "declare": false,
            "start": 2479,
            "end": 2593
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Style2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2604,
              "end": 2610
            },
            "typeParameters": null,
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2623,
                    "end": 2627
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 2629,
                            "end": 2632
                          },
                          "start": 2629,
                          "end": 2632
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 2635,
                            "end": 2638
                          },
                          "start": 2635,
                          "end": 2638
                        }
                      ],
                      "start": 2629,
                      "end": 2638
                    },
                    "start": 2627,
                    "end": 2638
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2623,
                  "end": 2639
                },
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
                    "start": 2648,
                    "end": 2652
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2654,
                      "end": 2660
                    },
                    "start": 2652,
                    "end": 2660
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2648,
                  "end": 2661
                }
              ],
              "start": 2613,
              "end": 2667
            },
            "declare": false,
            "start": 2599,
            "end": 2667
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Style2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2682,
                        "end": 2688
                      },
                      "typeArguments": null,
                      "start": 2682,
                      "end": 2688
                    },
                    "start": 2680,
                    "end": 2688
                  },
                  "start": 2679,
                  "end": 2688
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2693,
                        "end": 2697
                      },
                      "value": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "\"A\"",
                        "start": 2699,
                        "end": 2702
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2693,
                      "end": 2702
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2704,
                        "end": 2708
                      },
                      "value": {
                        "type": "Literal",
                        "value": "whatevs",
                        "raw": "\"whatevs\"",
                        "start": 2710,
                        "end": 2719
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2704,
                      "end": 2719
                    }
                  ],
                  "start": 2691,
                  "end": 2721
                },
                "definite": false,
                "start": 2679,
                "end": 2721
              }
            ],
            "declare": false,
            "start": 2673,
            "end": 2722
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Style1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2734,
                        "end": 2740
                      },
                      "typeArguments": null,
                      "start": 2734,
                      "end": 2740
                    },
                    "start": 2732,
                    "end": 2740
                  },
                  "start": 2731,
                  "end": 2740
                },
                "init": null,
                "definite": false,
                "start": 2731,
                "end": 2740
              }
            ],
            "declare": false,
            "start": 2727,
            "end": 2741
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2746,
                "end": 2747
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2748,
                "end": 2752
              },
              "optional": false,
              "computed": false,
              "start": 2746,
              "end": 2752
            },
            "directive": null,
            "start": 2746,
            "end": 2753
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2771,
                "end": 2772
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2773,
                "end": 2777
              },
              "optional": false,
              "computed": false,
              "start": 2771,
              "end": 2777
            },
            "directive": null,
            "start": 2771,
            "end": 2778
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 2796,
                "end": 2797
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 2800,
                "end": 2801
              },
              "start": 2796,
              "end": 2801
            },
            "directive": null,
            "start": 2796,
            "end": 2802
          }
        ],
        "start": 2473,
        "end": 2828
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2455,
      "end": 2828
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH30170",
        "optional": false,
        "typeAnnotation": null,
        "start": 2896,
        "end": 2903
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 2920,
              "end": 2924
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
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2935,
                    "end": 2940
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "blue",
                        "raw": "'blue'",
                        "start": 2942,
                        "end": 2948
                      },
                      "start": 2942,
                      "end": 2948
                    },
                    "start": 2940,
                    "end": 2948
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2935,
                  "end": 2948
                }
              ],
              "start": 2925,
              "end": 2954
            },
            "declare": false,
            "start": 2910,
            "end": 2954
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Yellow",
              "optional": false,
              "typeAnnotation": null,
              "start": 2969,
              "end": 2975
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2986,
                    "end": 2991
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "yellow",
                        "raw": "'yellow'",
                        "start": 2994,
                        "end": 3002
                      },
                      "start": 2994,
                      "end": 3002
                    },
                    "start": 2992,
                    "end": 3002
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2986,
                  "end": 3003
                }
              ],
              "start": 2976,
              "end": 3009
            },
            "declare": false,
            "start": 2959,
            "end": 3009
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "draw",
              "optional": false,
              "typeAnnotation": null,
              "start": 3023,
              "end": 3027
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "val",
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
                          "name": "Blue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3033,
                          "end": 3037
                        },
                        "typeArguments": null,
                        "start": 3033,
                        "end": 3037
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Yellow",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3040,
                          "end": 3046
                        },
                        "typeArguments": null,
                        "start": 3040,
                        "end": 3046
                      }
                    ],
                    "start": 3033,
                    "end": 3046
                  },
                  "start": 3031,
                  "end": 3046
                },
                "start": 3028,
                "end": 3046
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 3048,
              "end": 3051
            },
            "expression": false,
            "start": 3014,
            "end": 3051
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "drawWithColor",
              "optional": false,
              "typeAnnotation": null,
              "start": 3066,
              "end": 3079
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "currentColor",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "blue",
                          "raw": "'blue'",
                          "start": 3094,
                          "end": 3100
                        },
                        "start": 3094,
                        "end": 3100
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "yellow",
                          "raw": "'yellow'",
                          "start": 3103,
                          "end": 3111
                        },
                        "start": 3103,
                        "end": 3111
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 3114,
                        "end": 3123
                      }
                    ],
                    "start": 3094,
                    "end": 3123
                  },
                  "start": 3092,
                  "end": 3123
                },
                "start": 3080,
                "end": 3123
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "draw",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3142,
                      "end": 3146
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "color",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3149,
                              "end": 3154
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "currentColor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3156,
                              "end": 3168
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 3149,
                            "end": 3168
                          }
                        ],
                        "start": 3147,
                        "end": 3170
                      }
                    ],
                    "optional": false,
                    "start": 3142,
                    "end": 3171
                  },
                  "start": 3135,
                  "end": 3172
                }
              ],
              "start": 3125,
              "end": 3178
            },
            "expression": false,
            "start": 3057,
            "end": 3178
          }
        ],
        "start": 2904,
        "end": 3180
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2886,
      "end": 3180
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH12052",
        "optional": false,
        "typeAnnotation": null,
        "start": 3248,
        "end": 3255
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILinearAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3272,
              "end": 3283
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3286,
                    "end": 3290
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "linear",
                        "raw": "\"linear\"",
                        "start": 3292,
                        "end": 3300
                      },
                      "start": 3292,
                      "end": 3300
                    },
                    "start": 3290,
                    "end": 3300
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3286,
                  "end": 3301
                }
              ],
              "start": 3284,
              "end": 3303
            },
            "declare": false,
            "start": 3262,
            "end": 3303
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ICategoricalAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3319,
              "end": 3335
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3338,
                    "end": 3342
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "categorical",
                        "raw": "\"categorical\"",
                        "start": 3344,
                        "end": 3357
                      },
                      "start": 3344,
                      "end": 3357
                    },
                    "start": 3342,
                    "end": 3357
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3338,
                  "end": 3358
                }
              ],
              "start": 3336,
              "end": 3360
            },
            "declare": false,
            "start": 3309,
            "end": 3360
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAxis",
              "optional": false,
              "typeAnnotation": null,
              "start": 3371,
              "end": 3376
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ILinearAxis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3379,
                    "end": 3390
                  },
                  "typeArguments": null,
                  "start": 3379,
                  "end": 3390
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ICategoricalAxis",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3393,
                    "end": 3409
                  },
                  "typeArguments": null,
                  "start": 3393,
                  "end": 3409
                }
              ],
              "start": 3379,
              "end": 3409
            },
            "declare": false,
            "start": 3366,
            "end": 3410
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAxisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3420,
              "end": 3429
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "linear",
                    "raw": "\"linear\"",
                    "start": 3432,
                    "end": 3440
                  },
                  "start": 3432,
                  "end": 3440
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "categorical",
                    "raw": "\"categorical\"",
                    "start": 3443,
                    "end": 3456
                  },
                  "start": 3443,
                  "end": 3456
                }
              ],
              "start": 3432,
              "end": 3456
            },
            "declare": false,
            "start": 3415,
            "end": 3457
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "getAxisType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3472,
              "end": 3483
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IAxisType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3487,
                  "end": 3496
                },
                "typeArguments": null,
                "start": 3487,
                "end": 3496
              },
              "start": 3485,
              "end": 3496
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3511,
                      "end": 3512
                    },
                    "operator": "==",
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 3516,
                      "end": 3517
                    },
                    "start": 3511,
                    "end": 3517
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "categorical",
                          "raw": "\"categorical\"",
                          "start": 3540,
                          "end": 3553
                        },
                        "start": 3533,
                        "end": 3554
                      }
                    ],
                    "start": 3519,
                    "end": 3564
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": "linear",
                          "raw": "\"linear\"",
                          "start": 3591,
                          "end": 3599
                        },
                        "start": 3584,
                        "end": 3600
                      }
                    ],
                    "start": 3570,
                    "end": 3610
                  },
                  "start": 3507,
                  "end": 3610
                }
              ],
              "start": 3497,
              "end": 3616
            },
            "expression": false,
            "start": 3463,
            "end": 3616
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
                  "name": "bad",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAxis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3633,
                        "end": 3638
                      },
                      "typeArguments": null,
                      "start": 3633,
                      "end": 3638
                    },
                    "start": 3631,
                    "end": 3638
                  },
                  "start": 3628,
                  "end": 3638
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3643,
                        "end": 3647
                      },
                      "value": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getAxisType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3649,
                          "end": 3660
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 3649,
                        "end": 3662
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3643,
                      "end": 3662
                    }
                  ],
                  "start": 3641,
                  "end": 3664
                },
                "definite": false,
                "start": 3628,
                "end": 3664
              }
            ],
            "declare": false,
            "start": 3622,
            "end": 3665
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
                  "name": "good",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAxis",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3682,
                        "end": 3687
                      },
                      "typeArguments": null,
                      "start": 3682,
                      "end": 3687
                    },
                    "start": 3680,
                    "end": 3687
                  },
                  "start": 3676,
                  "end": 3687
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
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3692,
                        "end": 3696
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3698,
                        "end": 3707
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 3692,
                      "end": 3707
                    }
                  ],
                  "start": 3690,
                  "end": 3709
                },
                "definite": false,
                "start": 3676,
                "end": 3709
              }
            ],
            "declare": false,
            "start": 3670,
            "end": 3710
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
                  "name": "good",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3715,
                  "end": 3719
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3720,
                  "end": 3724
                },
                "optional": false,
                "computed": false,
                "start": 3715,
                "end": 3724
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getAxisType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3727,
                  "end": 3738
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 3727,
                "end": 3740
              },
              "start": 3715,
              "end": 3740
            },
            "directive": null,
            "start": 3715,
            "end": 3741
          }
        ],
        "start": 3256,
        "end": 3743
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3238,
      "end": 3743
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH18421",
        "optional": false,
        "typeAnnotation": null,
        "start": 3811,
        "end": 3818
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingTypeOne",
              "optional": false,
              "typeAnnotation": null,
              "start": 3835,
              "end": 3847
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3858,
                    "end": 3862
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "one",
                        "raw": "'one'",
                        "start": 3864,
                        "end": 3869
                      },
                      "start": 3864,
                      "end": 3869
                    },
                    "start": 3862,
                    "end": 3869
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3858,
                  "end": 3870
                }
              ],
              "start": 3848,
              "end": 3876
            },
            "declare": false,
            "start": 3825,
            "end": 3876
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingTypeTwo",
              "optional": false,
              "typeAnnotation": null,
              "start": 3892,
              "end": 3904
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3915,
                    "end": 3919
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "two",
                        "raw": "'two'",
                        "start": 3921,
                        "end": 3926
                      },
                      "start": 3921,
                      "end": 3926
                    },
                    "start": 3919,
                    "end": 3926
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 3915,
                  "end": 3927
                }
              ],
              "start": 3905,
              "end": 3933
            },
            "declare": false,
            "start": 3882,
            "end": 3933
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThingType",
              "optional": false,
              "typeAnnotation": null,
              "start": 3944,
              "end": 3953
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "one",
                    "raw": "'one'",
                    "start": 3956,
                    "end": 3961
                  },
                  "start": 3956,
                  "end": 3961
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "two",
                    "raw": "'two'",
                    "start": 3964,
                    "end": 3969
                  },
                  "start": 3964,
                  "end": 3969
                }
              ],
              "start": 3956,
              "end": 3969
            },
            "declare": false,
            "start": 3939,
            "end": 3970
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 3981,
              "end": 3986
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingTypeOne",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3989,
                    "end": 4001
                  },
                  "typeArguments": null,
                  "start": 3989,
                  "end": 4001
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThingTypeTwo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4004,
                    "end": 4016
                  },
                  "typeArguments": null,
                  "start": 4004,
                  "end": 4016
                }
              ],
              "start": 3989,
              "end": 4016
            },
            "declare": false,
            "start": 3976,
            "end": 4017
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeNewThing",
              "optional": false,
              "typeAnnotation": null,
              "start": 4032,
              "end": 4044
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "thingType",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ThingType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4056,
                      "end": 4065
                    },
                    "typeArguments": null,
                    "start": 4056,
                    "end": 4065
                  },
                  "start": 4054,
                  "end": 4065
                },
                "start": 4045,
                "end": 4065
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4068,
                  "end": 4073
                },
                "typeArguments": null,
                "start": 4068,
                "end": 4073
              },
              "start": 4066,
              "end": 4073
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4105,
                          "end": 4109
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thingType",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4111,
                          "end": 4120
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 4105,
                        "end": 4120
                      }
                    ],
                    "start": 4091,
                    "end": 4130
                  },
                  "start": 4084,
                  "end": 4131
                }
              ],
              "start": 4074,
              "end": 4137
            },
            "expression": false,
            "start": 4023,
            "end": 4137
          }
        ],
        "start": 3819,
        "end": 4139
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3801,
      "end": 4139
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH15907",
        "optional": false,
        "typeAnnotation": null,
        "start": 4207,
        "end": 4214
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 4226,
              "end": 4232
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
                        "start": 4237,
                        "end": 4241
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "activate",
                            "raw": "'activate'",
                            "start": 4243,
                            "end": 4253
                          },
                          "start": 4243,
                          "end": 4253
                        },
                        "start": 4241,
                        "end": 4253
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4237,
                      "end": 4253
                    }
                  ],
                  "start": 4235,
                  "end": 4255
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
                        "start": 4260,
                        "end": 4264
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "disactivate",
                            "raw": "'disactivate'",
                            "start": 4266,
                            "end": 4279
                          },
                          "start": 4266,
                          "end": 4279
                        },
                        "start": 4264,
                        "end": 4279
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 4260,
                      "end": 4279
                    }
                  ],
                  "start": 4258,
                  "end": 4281
                }
              ],
              "start": 4235,
              "end": 4281
            },
            "declare": false,
            "start": 4221,
            "end": 4282
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "dispatchAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 4297,
              "end": 4311
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Action",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4320,
                      "end": 4326
                    },
                    "typeArguments": null,
                    "start": 4320,
                    "end": 4326
                  },
                  "start": 4318,
                  "end": 4326
                },
                "start": 4312,
                "end": 4326
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 4329,
                "end": 4333
              },
              "start": 4327,
              "end": 4333
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 4334,
              "end": 4342
            },
            "expression": false,
            "start": 4288,
            "end": 4342
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
                  "name": "active",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4354,
                  "end": 4360
                },
                "init": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 4363,
                  "end": 4367
                },
                "definite": false,
                "start": 4354,
                "end": 4367
              }
            ],
            "declare": false,
            "start": 4348,
            "end": 4368
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "dispatchAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 4374,
                "end": 4388
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "type",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4391,
                        "end": 4395
                      },
                      "value": {
                        "type": "ConditionalExpression",
                        "test": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "active",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4399,
                          "end": 4405
                        },
                        "consequent": {
                          "type": "Literal",
                          "value": "disactivate",
                          "raw": "'disactivate'",
                          "start": 4407,
                          "end": 4420
                        },
                        "alternate": {
                          "type": "Literal",
                          "value": "activate",
                          "raw": "'activate'",
                          "start": 4423,
                          "end": 4433
                        },
                        "start": 4399,
                        "end": 4433
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 4391,
                      "end": 4434
                    }
                  ],
                  "start": 4389,
                  "end": 4436
                }
              ],
              "optional": false,
              "start": 4374,
              "end": 4437
            },
            "directive": null,
            "start": 4374,
            "end": 4438
          }
        ],
        "start": 4215,
        "end": 4440
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4197,
      "end": 4440
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH20889",
        "optional": false,
        "typeAnnotation": null,
        "start": 4508,
        "end": 4515
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 4532,
              "end": 4534
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4545,
                    "end": 4549
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "A1",
                        "raw": "\"A1\"",
                        "start": 4551,
                        "end": 4555
                      },
                      "start": 4551,
                      "end": 4555
                    },
                    "start": 4549,
                    "end": 4555
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4545,
                  "end": 4556
                }
              ],
              "start": 4535,
              "end": 4562
            },
            "declare": false,
            "start": 4522,
            "end": 4562
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A2",
              "optional": false,
              "typeAnnotation": null,
              "start": 4577,
              "end": 4579
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4590,
                    "end": 4594
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "A2",
                        "raw": "\"A2\"",
                        "start": 4596,
                        "end": 4600
                      },
                      "start": 4596,
                      "end": 4600
                    },
                    "start": 4594,
                    "end": 4600
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 4590,
                  "end": 4601
                }
              ],
              "start": 4580,
              "end": 4607
            },
            "declare": false,
            "start": 4567,
            "end": 4607
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "AU",
              "optional": false,
              "typeAnnotation": null,
              "start": 4617,
              "end": 4619
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4622,
                    "end": 4624
                  },
                  "typeArguments": null,
                  "start": 4622,
                  "end": 4624
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4627,
                    "end": 4629
                  },
                  "typeArguments": null,
                  "start": 4627,
                  "end": 4629
                }
              ],
              "start": 4622,
              "end": 4629
            },
            "declare": false,
            "start": 4612,
            "end": 4630
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 4645,
              "end": 4648
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "obj1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "AU",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4655,
                      "end": 4657
                    },
                    "typeArguments": null,
                    "start": 4655,
                    "end": 4657
                  },
                  "start": 4653,
                  "end": 4657
                },
                "start": 4649,
                "end": 4657
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "AU",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4681,
                              "end": 4683
                            },
                            "typeArguments": null,
                            "start": 4681,
                            "end": 4683
                          },
                          "start": 4679,
                          "end": 4683
                        },
                        "start": 4675,
                        "end": 4683
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
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4700,
                              "end": 4704
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4706,
                                "end": 4710
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "type",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4711,
                                "end": 4715
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4706,
                              "end": 4715
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 4700,
                            "end": 4715
                          }
                        ],
                        "start": 4686,
                        "end": 4725
                      },
                      "definite": false,
                      "start": 4675,
                      "end": 4725
                    }
                  ],
                  "declare": false,
                  "start": 4669,
                  "end": 4726
                }
              ],
              "start": 4659,
              "end": 4732
            },
            "expression": false,
            "start": 4636,
            "end": 4732
          }
        ],
        "start": 4516,
        "end": 4734
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4498,
      "end": 4734
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH39357",
        "optional": false,
        "typeAnnotation": null,
        "start": 4802,
        "end": 4809
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4821,
              "end": 4822
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 4826,
                        "end": 4829
                      },
                      "start": 4826,
                      "end": 4829
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4831,
                      "end": 4837
                    }
                  ],
                  "start": 4825,
                  "end": 4838
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 4842,
                        "end": 4845
                      },
                      "start": 4842,
                      "end": 4845
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 4847,
                      "end": 4853
                    }
                  ],
                  "start": 4841,
                  "end": 4854
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 4858,
                        "end": 4861
                      },
                      "start": 4858,
                      "end": 4861
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 4863,
                      "end": 4869
                    }
                  ],
                  "start": 4857,
                  "end": 4870
                }
              ],
              "start": 4825,
              "end": 4870
            },
            "declare": false,
            "start": 4816,
            "end": 4871
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4881,
              "end": 4882
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "a",
                    "raw": "\"a\"",
                    "start": 4885,
                    "end": 4888
                  },
                  "start": 4885,
                  "end": 4888
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "b",
                    "raw": "\"b\"",
                    "start": 4891,
                    "end": 4894
                  },
                  "start": 4891,
                  "end": 4894
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "c",
                    "raw": "\"c\"",
                    "start": 4897,
                    "end": 4900
                  },
                  "start": 4897,
                  "end": 4900
                }
              ],
              "start": 4885,
              "end": 4900
            },
            "declare": false,
            "start": 4876,
            "end": 4901
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
                  "name": "b",
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
                        "start": 4923,
                        "end": 4924
                      },
                      "typeArguments": null,
                      "start": 4923,
                      "end": 4924
                    },
                    "start": 4921,
                    "end": 4924
                  },
                  "start": 4920,
                  "end": 4924
                },
                "init": null,
                "definite": false,
                "start": 4920,
                "end": 4924
              }
            ],
            "declare": true,
            "start": 4906,
            "end": 4925
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
                        "start": 4939,
                        "end": 4940
                      },
                      "typeArguments": null,
                      "start": 4939,
                      "end": 4940
                    },
                    "start": 4937,
                    "end": 4940
                  },
                  "start": 4936,
                  "end": 4940
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4943,
                        "end": 4944
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "a",
                        "raw": "\"a\"",
                        "start": 4949,
                        "end": 4952
                      },
                      "start": 4943,
                      "end": 4952
                    },
                    "operator": "||",
                    "right": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4956,
                        "end": 4957
                      },
                      "operator": "===",
                      "right": {
                        "type": "Literal",
                        "value": "b",
                        "raw": "\"b\"",
                        "start": 4962,
                        "end": 4965
                      },
                      "start": 4956,
                      "end": 4965
                    },
                    "start": 4943,
                    "end": 4965
                  },
                  "consequent": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4969,
                        "end": 4970
                      },
                      {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 4972,
                        "end": 4973
                      }
                    ],
                    "start": 4968,
                    "end": 4974
                  },
                  "alternate": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": "c",
                        "raw": "\"c\"",
                        "start": 4978,
                        "end": 4981
                      },
                      {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 4983,
                        "end": 4985
                      }
                    ],
                    "start": 4977,
                    "end": 4986
                  },
                  "start": 4943,
                  "end": 4986
                },
                "definite": false,
                "start": 4936,
                "end": 4986
              }
            ],
            "declare": false,
            "start": 4930,
            "end": 4987
          }
        ],
        "start": 4810,
        "end": 4989
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 4792,
      "end": 4989
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GH58603",
        "optional": false,
        "typeAnnotation": null,
        "start": 5057,
        "end": 5064
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyEnum",
              "optional": false,
              "typeAnnotation": null,
              "start": 5076,
              "end": 5082
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5085,
                    "end": 5086
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 5089,
                    "end": 5090
                  },
                  "computed": false,
                  "start": 5085,
                  "end": 5090
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5092,
                    "end": 5093
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 5096,
                    "end": 5097
                  },
                  "computed": false,
                  "start": 5092,
                  "end": 5097
                }
              ],
              "start": 5083,
              "end": 5099
            },
            "const": false,
            "declare": false,
            "start": 5071,
            "end": 5099
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeA",
              "optional": false,
              "typeAnnotation": null,
              "start": 5110,
              "end": 5115
            },
            "typeParameters": null,
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
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5120,
                    "end": 5124
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "MyEnum",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5126,
                          "end": 5132
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5133,
                          "end": 5134
                        },
                        "start": 5126,
                        "end": 5134
                      },
                      "typeArguments": null,
                      "start": 5126,
                      "end": 5134
                    },
                    "start": 5124,
                    "end": 5134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5120,
                  "end": 5135
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5136,
                    "end": 5138
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 5141,
                      "end": 5147
                    },
                    "start": 5139,
                    "end": 5147
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 5136,
                  "end": 5147
                }
              ],
              "start": 5118,
              "end": 5149
            },
            "declare": false,
            "start": 5105,
            "end": 5150
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TypeB",
              "optional": false,
              "typeAnnotation": null,
              "start": 5165,
              "end": 5170
            },
            "typeParameters": null,
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5175,
                        "end": 5179
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MyEnum",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5181,
                              "end": 5187
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "B",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5188,
                              "end": 5189
                            },
                            "start": 5181,
                            "end": 5189
                          },
                          "typeArguments": null,
                          "start": 5181,
                          "end": 5189
                        },
                        "start": 5179,
                        "end": 5189
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5175,
                      "end": 5189
                    }
                  ],
                  "start": 5173,
                  "end": 5191
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5197,
                            "end": 5199
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUndefinedKeyword",
                              "start": 5202,
                              "end": 5211
                            },
                            "start": 5200,
                            "end": 5211
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5197,
                          "end": 5211
                        }
                      ],
                      "start": 5195,
                      "end": 5213
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
                            "name": "id",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5218,
                            "end": 5220
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 5222,
                              "end": 5228
                            },
                            "start": 5220,
                            "end": 5228
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 5218,
                          "end": 5228
                        }
                      ],
                      "start": 5216,
                      "end": 5230
                    }
                  ],
                  "start": 5195,
                  "end": 5230
                }
              ],
              "start": 5173,
              "end": 5231
            },
            "declare": false,
            "start": 5160,
            "end": 5232
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "MyType",
              "optional": false,
              "typeAnnotation": null,
              "start": 5247,
              "end": 5253
            },
            "typeParameters": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5256,
                    "end": 5261
                  },
                  "typeArguments": null,
                  "start": 5256,
                  "end": 5261
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "TypeB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 5264,
                    "end": 5269
                  },
                  "typeArguments": null,
                  "start": 5264,
                  "end": 5269
                }
              ],
              "start": 5256,
              "end": 5269
            },
            "declare": false,
            "start": 5242,
            "end": 5270
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "something",
              "optional": false,
              "typeAnnotation": null,
              "start": 5289,
              "end": 5298
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
                      "name": "MyType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5302,
                      "end": 5308
                    },
                    "typeArguments": null,
                    "start": 5302,
                    "end": 5308
                  },
                  "start": 5300,
                  "end": 5308
                },
                "start": 5299,
                "end": 5308
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5311,
                "end": 5315
              },
              "start": 5309,
              "end": 5315
            },
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 5316,
              "end": 5318
            },
            "expression": false,
            "start": 5280,
            "end": 5318
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "indirect",
              "optional": false,
              "typeAnnotation": null,
              "start": 5337,
              "end": 5345
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "MyEnum",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5352,
                      "end": 5358
                    },
                    "typeArguments": null,
                    "start": 5352,
                    "end": 5358
                  },
                  "start": 5350,
                  "end": 5358
                },
                "start": 5346,
                "end": 5358
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "id",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 5365,
                    "end": 5371
                  },
                  "start": 5363,
                  "end": 5371
                },
                "start": 5360,
                "end": 5371
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5374,
                "end": 5378
              },
              "start": 5372,
              "end": 5378
            },
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
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5389,
                      "end": 5398
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5401,
                              "end": 5405
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5401,
                              "end": 5405
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 5401,
                            "end": 5405
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5407,
                              "end": 5409
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5407,
                              "end": 5409
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 5407,
                            "end": 5409
                          }
                        ],
                        "start": 5399,
                        "end": 5411
                      }
                    ],
                    "optional": false,
                    "start": 5389,
                    "end": 5412
                  },
                  "directive": null,
                  "start": 5389,
                  "end": 5413
                }
              ],
              "start": 5379,
              "end": 5419
            },
            "expression": false,
            "start": 5328,
            "end": 5419
          },
          {
            "type": "TSTypeAliasDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 5434,
              "end": 5437
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5442,
                        "end": 5446
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "types": [
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "a",
                                "raw": "\"a\"",
                                "start": 5448,
                                "end": 5451
                              },
                              "start": 5448,
                              "end": 5451
                            },
                            {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "b",
                                "raw": "\"b\"",
                                "start": 5454,
                                "end": 5457
                              },
                              "start": 5454,
                              "end": 5457
                            }
                          ],
                          "start": 5448,
                          "end": 5457
                        },
                        "start": 5446,
                        "end": 5457
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5442,
                      "end": 5458
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5459,
                        "end": 5464
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 5466,
                          "end": 5472
                        },
                        "start": 5464,
                        "end": 5472
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5459,
                      "end": 5472
                    }
                  ],
                  "start": 5440,
                  "end": 5474
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5479,
                        "end": 5483
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 5485,
                            "end": 5488
                          },
                          "start": 5485,
                          "end": 5488
                        },
                        "start": 5483,
                        "end": 5488
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5479,
                      "end": 5489
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5490,
                        "end": 5495
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUndefinedKeyword",
                          "start": 5497,
                          "end": 5506
                        },
                        "start": 5495,
                        "end": 5506
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5490,
                      "end": 5506
                    }
                  ],
                  "start": 5477,
                  "end": 5508
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5513,
                        "end": 5517
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 5519,
                            "end": 5522
                          },
                          "start": 5519,
                          "end": 5522
                        },
                        "start": 5517,
                        "end": 5522
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5513,
                      "end": 5523
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5524,
                        "end": 5529
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSUndefinedKeyword",
                          "start": 5531,
                          "end": 5540
                        },
                        "start": 5529,
                        "end": 5540
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 5524,
                      "end": 5540
                    }
                  ],
                  "start": 5511,
                  "end": 5542
                }
              ],
              "start": 5440,
              "end": 5542
            },
            "declare": false,
            "start": 5429,
            "end": 5543
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null,
              "start": 5562,
              "end": 5566
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
                          "name": "kind",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5574,
                          "end": 5578
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 5580,
                                  "end": 5583
                                },
                                "start": 5580,
                                "end": 5583
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 5586,
                                  "end": 5589
                                },
                                "start": 5586,
                                "end": 5589
                              }
                            ],
                            "start": 5580,
                            "end": 5589
                          },
                          "start": 5578,
                          "end": 5589
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5574,
                        "end": 5590
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5591,
                          "end": 5596
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 5598,
                                "end": 5604
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 5607,
                                "end": 5616
                              }
                            ],
                            "start": 5598,
                            "end": 5616
                          },
                          "start": 5596,
                          "end": 5616
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 5591,
                        "end": 5616
                      }
                    ],
                    "start": 5572,
                    "end": 5618
                  },
                  "start": 5570,
                  "end": 5618
                },
                "start": 5567,
                "end": 5618
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x1",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5638,
                              "end": 5641
                            },
                            "typeArguments": null,
                            "start": 5638,
                            "end": 5641
                          },
                          "start": 5636,
                          "end": 5641
                        },
                        "start": 5634,
                        "end": 5641
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5644,
                        "end": 5647
                      },
                      "definite": false,
                      "start": 5634,
                      "end": 5647
                    }
                  ],
                  "declare": false,
                  "start": 5630,
                  "end": 5648
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
                        "name": "x2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5665,
                              "end": 5668
                            },
                            "typeArguments": null,
                            "start": 5665,
                            "end": 5668
                          },
                          "start": 5663,
                          "end": 5668
                        },
                        "start": 5661,
                        "end": 5668
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5673,
                              "end": 5677
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5679,
                                "end": 5682
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "kind",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5683,
                                "end": 5687
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5679,
                              "end": 5687
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5673,
                            "end": 5687
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5689,
                              "end": 5694
                            },
                            "value": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "obj",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5696,
                                "end": 5699
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5700,
                                "end": 5705
                              },
                              "optional": false,
                              "computed": false,
                              "start": 5696,
                              "end": 5705
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 5689,
                            "end": 5705
                          }
                        ],
                        "start": 5671,
                        "end": 5707
                      },
                      "definite": false,
                      "start": 5661,
                      "end": 5707
                    }
                  ],
                  "declare": false,
                  "start": 5657,
                  "end": 5708
                }
              ],
              "start": 5620,
              "end": 5714
            },
            "expression": false,
            "start": 5553,
            "end": 5714
          }
        ],
        "start": 5065,
        "end": 5716
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 5047,
      "end": 5716
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 74,
  "end": 5716
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 74,
    "end": 83,
    "range": [
      74,
      83
    ]
  },
  {
    "type": "Identifier",
    "value": "Example1",
    "start": 84,
    "end": 92,
    "range": [
      84,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 99,
    "end": 103,
    "range": [
      99,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 108,
    "end": 109,
    "range": [
      108,
      109
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 110,
    "end": 114,
    "range": [
      110,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 116,
    "end": 123,
    "range": [
      116,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 125,
    "end": 130,
    "range": [
      125,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138,
    "range": [
      132,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 146,
    "end": 150,
    "range": [
      146,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 167,
    "end": 171,
    "range": [
      167,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 173,
    "end": 177,
    "range": [
      173,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 179,
    "end": 184,
    "range": [
      179,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 223,
    "end": 228,
    "range": [
      223,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 230,
    "end": 235,
    "range": [
      230,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 260,
    "end": 267,
    "range": [
      260,
      267
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 268,
    "end": 271,
    "range": [
      268,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 282,
    "end": 289,
    "range": [
      282,
      289
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 290,
    "end": 293,
    "range": [
      290,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 450,
    "end": 459,
    "range": [
      450,
      459
    ]
  },
  {
    "type": "Identifier",
    "value": "Example2",
    "start": 460,
    "end": 468,
    "range": [
      460,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 469,
    "end": 470,
    "range": [
      469,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 475,
    "end": 479,
    "range": [
      475,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 486,
    "end": 487,
    "range": [
      486,
      487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 499,
    "end": 500,
    "range": [
      499,
      500
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 508,
    "end": 512,
    "range": [
      508,
      512
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 515,
    "end": 516,
    "range": [
      515,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 568,
    "end": 569,
    "range": [
      568,
      569
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570,
    "range": [
      569,
      570
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 615,
    "end": 616,
    "range": [
      615,
      616
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 621,
    "end": 622,
    "range": [
      621,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 626,
    "end": 627,
    "range": [
      626,
      627
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 630,
    "end": 631,
    "range": [
      630,
      631
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 631,
    "end": 632,
    "range": [
      631,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 646,
    "end": 653,
    "range": [
      646,
      653
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 654,
    "end": 657,
    "range": [
      654,
      657
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 668,
    "end": 675,
    "range": [
      668,
      675
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 676,
    "end": 679,
    "range": [
      676,
      679
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 787,
    "end": 788,
    "range": [
      787,
      788
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789,
    "range": [
      788,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 820,
    "end": 829,
    "range": [
      820,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "Example3",
    "start": 830,
    "end": 838,
    "range": [
      830,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 845,
    "end": 849,
    "range": [
      845,
      849
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 854,
    "end": 855,
    "range": [
      854,
      855
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 859,
    "end": 860,
    "range": [
      859,
      860
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 864,
    "end": 865,
    "range": [
      864,
      865
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 878,
    "end": 882,
    "range": [
      878,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 885,
    "end": 886,
    "range": [
      885,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 887,
    "end": 888,
    "range": [
      887,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 890,
    "end": 891,
    "range": [
      890,
      891
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 892,
    "end": 893,
    "range": [
      892,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 899,
    "end": 900,
    "range": [
      899,
      900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 900,
    "end": 901,
    "range": [
      900,
      901
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 902,
    "end": 903,
    "range": [
      902,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 935,
    "end": 936,
    "range": [
      935,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 936,
    "end": 937,
    "range": [
      936,
      937
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 939,
    "end": 940,
    "range": [
      939,
      940
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 945,
    "end": 946,
    "range": [
      945,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 946,
    "end": 947,
    "range": [
      946,
      947
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 948,
    "end": 949,
    "range": [
      948,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 981,
    "end": 982,
    "range": [
      981,
      982
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 982,
    "end": 983,
    "range": [
      982,
      983
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 984,
    "end": 985,
    "range": [
      984,
      985
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 985,
    "end": 986,
    "range": [
      985,
      986
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 991,
    "end": 992,
    "range": [
      991,
      992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 992,
    "end": 993,
    "range": [
      992,
      993
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 996,
    "end": 997,
    "range": [
      996,
      997
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 997,
    "end": 998,
    "range": [
      997,
      998
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1016,
    "end": 1023,
    "range": [
      1016,
      1023
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1024,
    "end": 1027,
    "range": [
      1024,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1028,
    "end": 1029,
    "range": [
      1028,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1029,
    "end": 1030,
    "range": [
      1029,
      1030
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1031,
    "end": 1032,
    "range": [
      1031,
      1032
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1032,
    "end": 1033,
    "range": [
      1032,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1038,
    "end": 1045,
    "range": [
      1038,
      1045
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1046,
    "end": 1049,
    "range": [
      1046,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1050,
    "end": 1051,
    "range": [
      1050,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1053,
    "end": 1054,
    "range": [
      1053,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214,
    "range": [
      1213,
      1214
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217,
    "range": [
      1216,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1218,
    "end": 1219,
    "range": [
      1218,
      1219
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1252,
    "end": 1261,
    "range": [
      1252,
      1261
    ]
  },
  {
    "type": "Identifier",
    "value": "Example4",
    "start": 1262,
    "end": 1270,
    "range": [
      1262,
      1270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1277,
    "end": 1281,
    "range": [
      1277,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1282,
    "end": 1283,
    "range": [
      1282,
      1283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1284,
    "end": 1285,
    "range": [
      1284,
      1285
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1286,
    "end": 1287,
    "range": [
      1286,
      1287
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1289,
    "end": 1290,
    "range": [
      1289,
      1290
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1293,
    "end": 1294,
    "range": [
      1293,
      1294
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1295,
    "end": 1296,
    "range": [
      1295,
      1296
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1296,
    "end": 1297,
    "range": [
      1296,
      1297
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1298,
    "end": 1299,
    "range": [
      1298,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305,
    "range": [
      1304,
      1305
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1310,
    "end": 1314,
    "range": [
      1310,
      1314
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1315,
    "end": 1316,
    "range": [
      1315,
      1316
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1317,
    "end": 1318,
    "range": [
      1317,
      1318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1324,
    "end": 1325,
    "range": [
      1324,
      1325
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1325,
    "end": 1326,
    "range": [
      1325,
      1326
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1338,
    "end": 1339,
    "range": [
      1338,
      1339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1371,
    "end": 1372,
    "range": [
      1371,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1373,
    "end": 1374,
    "range": [
      1373,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1375,
    "end": 1376,
    "range": [
      1375,
      1376
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1379,
    "end": 1380,
    "range": [
      1379,
      1380
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1385,
    "end": 1386,
    "range": [
      1385,
      1386
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1386,
    "end": 1387,
    "range": [
      1386,
      1387
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1388,
    "end": 1389,
    "range": [
      1388,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1429,
    "end": 1430,
    "range": [
      1429,
      1430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1430,
    "end": 1431,
    "range": [
      1430,
      1431
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1432,
    "end": 1433,
    "range": [
      1432,
      1433
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1433,
    "end": 1434,
    "range": [
      1433,
      1434
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1439,
    "end": 1440,
    "range": [
      1439,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1442,
    "end": 1443,
    "range": [
      1442,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1444,
    "end": 1445,
    "range": [
      1444,
      1445
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1446,
    "end": 1447,
    "range": [
      1446,
      1447
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1447,
    "end": 1448,
    "range": [
      1447,
      1448
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1450,
    "end": 1451,
    "range": [
      1450,
      1451
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1452,
    "end": 1458,
    "range": [
      1452,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1472,
    "end": 1479,
    "range": [
      1472,
      1479
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1480,
    "end": 1483,
    "range": [
      1480,
      1483
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1485,
    "end": 1486,
    "range": [
      1485,
      1486
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1487,
    "end": 1488,
    "range": [
      1487,
      1488
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489,
    "range": [
      1488,
      1489
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1494,
    "end": 1501,
    "range": [
      1494,
      1501
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1502,
    "end": 1505,
    "range": [
      1502,
      1505
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1506,
    "end": 1507,
    "range": [
      1506,
      1507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1507,
    "end": 1508,
    "range": [
      1507,
      1508
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1509,
    "end": 1510,
    "range": [
      1509,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1635,
    "end": 1636,
    "range": [
      1635,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1639,
    "end": 1640,
    "range": [
      1639,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1640,
    "end": 1641,
    "range": [
      1640,
      1641
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1682,
    "end": 1691,
    "range": [
      1682,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "Example5",
    "start": 1692,
    "end": 1700,
    "range": [
      1692,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1892,
    "end": 1896,
    "range": [
      1892,
      1896
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1897,
    "end": 1898,
    "range": [
      1897,
      1898
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1899,
    "end": 1900,
    "range": [
      1899,
      1900
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1909,
    "end": 1910,
    "range": [
      1909,
      1910
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1910,
    "end": 1911,
    "range": [
      1910,
      1911
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1916,
    "end": 1920,
    "range": [
      1916,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1927,
    "end": 1928,
    "range": [
      1927,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1933,
    "end": 1934,
    "range": [
      1933,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1934,
    "end": 1935,
    "range": [
      1934,
      1935
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1937,
    "end": 1938,
    "range": [
      1937,
      1938
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1939,
    "end": 1940,
    "range": [
      1939,
      1940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1942,
    "end": 1943,
    "range": [
      1942,
      1943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945,
    "range": [
      1944,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1951,
    "end": 1955,
    "range": [
      1951,
      1955
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1958,
    "end": 1959,
    "range": [
      1958,
      1959
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1962,
    "end": 1963,
    "range": [
      1962,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1968,
    "end": 1969,
    "range": [
      1968,
      1969
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1969,
    "end": 1970,
    "range": [
      1969,
      1970
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1972,
    "end": 1973,
    "range": [
      1972,
      1973
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 1974,
    "end": 1975,
    "range": [
      1974,
      1975
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1975,
    "end": 1976,
    "range": [
      1975,
      1976
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 1977,
    "end": 1978,
    "range": [
      1977,
      1978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1979,
    "end": 1980,
    "range": [
      1979,
      1980
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1994,
    "end": 1995,
    "range": [
      1994,
      1995
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1996,
    "end": 1997,
    "range": [
      1996,
      1997
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2000,
    "end": 2001,
    "range": [
      2000,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2003,
    "end": 2004,
    "range": [
      2003,
      2004
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2006,
    "end": 2007,
    "range": [
      2006,
      2007
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2008,
    "end": 2009,
    "range": [
      2008,
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
    "value": "N",
    "start": 2011,
    "end": 2012,
    "range": [
      2011,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 2026,
    "end": 2027,
    "range": [
      2026,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2031,
    "end": 2032,
    "range": [
      2031,
      2032
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2033,
    "end": 2034,
    "range": [
      2033,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2036,
    "end": 2037,
    "range": [
      2036,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2039,
    "end": 2040,
    "range": [
      2039,
      2040
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2040,
    "end": 2041,
    "range": [
      2040,
      2041
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2064,
    "end": 2065,
    "range": [
      2064,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2067,
    "end": 2068,
    "range": [
      2067,
      2068
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2068,
    "end": 2069,
    "range": [
      2068,
      2069
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2071,
    "end": 2072,
    "range": [
      2071,
      2072
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2073,
    "end": 2074,
    "range": [
      2073,
      2074
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2074,
    "end": 2075,
    "range": [
      2074,
      2075
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2076,
    "end": 2077,
    "range": [
      2076,
      2077
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2077,
    "end": 2078,
    "range": [
      2077,
      2078
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2079,
    "end": 2080,
    "range": [
      2079,
      2080
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2081,
    "end": 2082,
    "range": [
      2081,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2096,
    "end": 2097,
    "range": [
      2096,
      2097
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2098,
    "end": 2099,
    "range": [
      2098,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2099,
    "end": 2100,
    "range": [
      2099,
      2100
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2104,
    "end": 2105,
    "range": [
      2104,
      2105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2105,
    "end": 2106,
    "range": [
      2105,
      2106
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2107,
    "end": 2108,
    "range": [
      2107,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2111,
    "end": 2112,
    "range": [
      2111,
      2112
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2113,
    "end": 2114,
    "range": [
      2113,
      2114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2115,
    "end": 2116,
    "range": [
      2115,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2136,
    "end": 2137,
    "range": [
      2136,
      2137
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2138,
    "end": 2139,
    "range": [
      2138,
      2139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2139,
    "end": 2140,
    "range": [
      2139,
      2140
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2147,
    "end": 2148,
    "range": [
      2147,
      2148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2164,
    "end": 2165,
    "range": [
      2164,
      2165
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2166,
    "end": 2167,
    "range": [
      2166,
      2167
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2167,
    "end": 2168,
    "range": [
      2167,
      2168
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2169,
    "end": 2170,
    "range": [
      2169,
      2170
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2172,
    "end": 2173,
    "range": [
      2172,
      2173
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2173,
    "end": 2174,
    "range": [
      2173,
      2174
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2176,
    "end": 2177,
    "range": [
      2176,
      2177
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2179,
    "end": 2180,
    "range": [
      2179,
      2180
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2181,
    "end": 2182,
    "range": [
      2181,
      2182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2183,
    "end": 2184,
    "range": [
      2183,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2196,
    "end": 2197,
    "range": [
      2196,
      2197
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2198,
    "end": 2199,
    "range": [
      2198,
      2199
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2203,
    "end": 2204,
    "range": [
      2203,
      2204
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2204,
    "end": 2205,
    "range": [
      2204,
      2205
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2206,
    "end": 2207,
    "range": [
      2206,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2207,
    "end": 2208,
    "range": [
      2207,
      2208
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2209,
    "end": 2210,
    "range": [
      2209,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2212,
    "end": 2213,
    "range": [
      2212,
      2213
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2213,
    "end": 2214,
    "range": [
      2213,
      2214
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 2215,
    "end": 2216,
    "range": [
      2215,
      2216
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2217,
    "end": 2218,
    "range": [
      2217,
      2218
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2232,
    "end": 2233,
    "range": [
      2232,
      2233
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2234,
    "end": 2235,
    "range": [
      2234,
      2235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2235,
    "end": 2236,
    "range": [
      2235,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2237,
    "end": 2238,
    "range": [
      2237,
      2238
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2238,
    "end": 2239,
    "range": [
      2238,
      2239
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2241,
    "end": 2242,
    "range": [
      2241,
      2242
    ]
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 2243,
    "end": 2244,
    "range": [
      2243,
      2244
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2244,
    "end": 2245,
    "range": [
      2244,
      2245
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2251,
    "end": 2252,
    "range": [
      2251,
      2252
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2252,
    "end": 2253,
    "range": [
      2252,
      2253
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2258,
    "end": 2265,
    "range": [
      2258,
      2265
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2266,
    "end": 2269,
    "range": [
      2266,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2270,
    "end": 2271,
    "range": [
      2270,
      2271
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2274,
    "end": 2275,
    "range": [
      2274,
      2275
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2280,
    "end": 2287,
    "range": [
      2280,
      2287
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2288,
    "end": 2291,
    "range": [
      2288,
      2291
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2292,
    "end": 2293,
    "range": [
      2292,
      2293
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2296,
    "end": 2297,
    "range": [
      2296,
      2297
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2389,
    "end": 2390,
    "range": [
      2389,
      2390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2391,
    "end": 2392,
    "range": [
      2391,
      2392
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 2393,
    "end": 2394,
    "range": [
      2393,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2455,
    "end": 2464,
    "range": [
      2455,
      2464
    ]
  },
  {
    "type": "Identifier",
    "value": "GH14865",
    "start": 2465,
    "end": 2472,
    "range": [
      2465,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2479,
    "end": 2483,
    "range": [
      2479,
      2483
    ]
  },
  {
    "type": "Identifier",
    "value": "Style1",
    "start": 2484,
    "end": 2490,
    "range": [
      2484,
      2490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2491,
    "end": 2492,
    "range": [
      2491,
      2492
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2493,
    "end": 2494,
    "range": [
      2493,
      2494
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2503,
    "end": 2507,
    "range": [
      2503,
      2507
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2507,
    "end": 2508,
    "range": [
      2507,
      2508
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2509,
    "end": 2512,
    "range": [
      2509,
      2512
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2512,
    "end": 2513,
    "range": [
      2512,
      2513
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2522,
    "end": 2526,
    "range": [
      2522,
      2526
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2526,
    "end": 2527,
    "range": [
      2526,
      2527
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2528,
    "end": 2534,
    "range": [
      2528,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2540,
    "end": 2541,
    "range": [
      2540,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2544,
    "end": 2545,
    "range": [
      2544,
      2545
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2554,
    "end": 2558,
    "range": [
      2554,
      2558
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2558,
    "end": 2559,
    "range": [
      2558,
      2559
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2560,
    "end": 2563,
    "range": [
      2560,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2563,
    "end": 2564,
    "range": [
      2563,
      2564
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2573,
    "end": 2577,
    "range": [
      2573,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2577,
    "end": 2578,
    "range": [
      2577,
      2578
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2579,
    "end": 2585,
    "range": [
      2579,
      2585
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2585,
    "end": 2586,
    "range": [
      2585,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2599,
    "end": 2603,
    "range": [
      2599,
      2603
    ]
  },
  {
    "type": "Identifier",
    "value": "Style2",
    "start": 2604,
    "end": 2610,
    "range": [
      2604,
      2610
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2613,
    "end": 2614,
    "range": [
      2613,
      2614
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2623,
    "end": 2627,
    "range": [
      2623,
      2627
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2627,
    "end": 2628,
    "range": [
      2627,
      2628
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2629,
    "end": 2632,
    "range": [
      2629,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2633,
    "end": 2634,
    "range": [
      2633,
      2634
    ]
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 2635,
    "end": 2638,
    "range": [
      2635,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2648,
    "end": 2652,
    "range": [
      2648,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2654,
    "end": 2660,
    "range": [
      2654,
      2660
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2660,
    "end": 2661,
    "range": [
      2660,
      2661
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2673,
    "end": 2678,
    "range": [
      2673,
      2678
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2679,
    "end": 2680,
    "range": [
      2679,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "Style2",
    "start": 2682,
    "end": 2688,
    "range": [
      2682,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2689,
    "end": 2690,
    "range": [
      2689,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2691,
    "end": 2692,
    "range": [
      2691,
      2692
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2693,
    "end": 2697,
    "range": [
      2693,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 2699,
    "end": 2702,
    "range": [
      2699,
      2702
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2702,
    "end": 2703,
    "range": [
      2702,
      2703
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2704,
    "end": 2708,
    "range": [
      2704,
      2708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2708,
    "end": 2709,
    "range": [
      2708,
      2709
    ]
  },
  {
    "type": "String",
    "value": "\"whatevs\"",
    "start": 2710,
    "end": 2719,
    "range": [
      2710,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2720,
    "end": 2721,
    "range": [
      2720,
      2721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2721,
    "end": 2722,
    "range": [
      2721,
      2722
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2727,
    "end": 2730,
    "range": [
      2727,
      2730
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2731,
    "end": 2732,
    "range": [
      2731,
      2732
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2732,
    "end": 2733,
    "range": [
      2732,
      2733
    ]
  },
  {
    "type": "Identifier",
    "value": "Style1",
    "start": 2734,
    "end": 2740,
    "range": [
      2734,
      2740
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2740,
    "end": 2741,
    "range": [
      2740,
      2741
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2746,
    "end": 2747,
    "range": [
      2746,
      2747
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2747,
    "end": 2748,
    "range": [
      2747,
      2748
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2748,
    "end": 2752,
    "range": [
      2748,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2771,
    "end": 2772,
    "range": [
      2771,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2772,
    "end": 2773,
    "range": [
      2772,
      2773
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2773,
    "end": 2777,
    "range": [
      2773,
      2777
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2777,
    "end": 2778,
    "range": [
      2777,
      2778
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 2796,
    "end": 2797,
    "range": [
      2796,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2798,
    "end": 2799,
    "range": [
      2798,
      2799
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 2800,
    "end": 2801,
    "range": [
      2800,
      2801
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2801,
    "end": 2802,
    "range": [
      2801,
      2802
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2827,
    "end": 2828,
    "range": [
      2827,
      2828
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 2886,
    "end": 2895,
    "range": [
      2886,
      2895
    ]
  },
  {
    "type": "Identifier",
    "value": "GH30170",
    "start": 2896,
    "end": 2903,
    "range": [
      2896,
      2903
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2904,
    "end": 2905,
    "range": [
      2904,
      2905
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2910,
    "end": 2919,
    "range": [
      2910,
      2919
    ]
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 2920,
    "end": 2924,
    "range": [
      2920,
      2924
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2925,
    "end": 2926,
    "range": [
      2925,
      2926
    ]
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 2935,
    "end": 2940,
    "range": [
      2935,
      2940
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2940,
    "end": 2941,
    "range": [
      2940,
      2941
    ]
  },
  {
    "type": "String",
    "value": "'blue'",
    "start": 2942,
    "end": 2948,
    "range": [
      2942,
      2948
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2959,
    "end": 2968,
    "range": [
      2959,
      2968
    ]
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 2969,
    "end": 2975,
    "range": [
      2969,
      2975
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2976,
    "end": 2977,
    "range": [
      2976,
      2977
    ]
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 2986,
    "end": 2991,
    "range": [
      2986,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "String",
    "value": "'yellow'",
    "start": 2994,
    "end": 3002,
    "range": [
      2994,
      3002
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3002,
    "end": 3003,
    "range": [
      3002,
      3003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3008,
    "end": 3009,
    "range": [
      3008,
      3009
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3014,
    "end": 3022,
    "range": [
      3014,
      3022
    ]
  },
  {
    "type": "Identifier",
    "value": "draw",
    "start": 3023,
    "end": 3027,
    "range": [
      3023,
      3027
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3027,
    "end": 3028,
    "range": [
      3027,
      3028
    ]
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 3028,
    "end": 3031,
    "range": [
      3028,
      3031
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3031,
    "end": 3032,
    "range": [
      3031,
      3032
    ]
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 3033,
    "end": 3037,
    "range": [
      3033,
      3037
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3038,
    "end": 3039,
    "range": [
      3038,
      3039
    ]
  },
  {
    "type": "Identifier",
    "value": "Yellow",
    "start": 3040,
    "end": 3046,
    "range": [
      3040,
      3046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3046,
    "end": 3047,
    "range": [
      3046,
      3047
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3048,
    "end": 3049,
    "range": [
      3048,
      3049
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3050,
    "end": 3051,
    "range": [
      3050,
      3051
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3057,
    "end": 3065,
    "range": [
      3057,
      3065
    ]
  },
  {
    "type": "Identifier",
    "value": "drawWithColor",
    "start": 3066,
    "end": 3079,
    "range": [
      3066,
      3079
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3079,
    "end": 3080,
    "range": [
      3079,
      3080
    ]
  },
  {
    "type": "Identifier",
    "value": "currentColor",
    "start": 3080,
    "end": 3092,
    "range": [
      3080,
      3092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3092,
    "end": 3093,
    "range": [
      3092,
      3093
    ]
  },
  {
    "type": "String",
    "value": "'blue'",
    "start": 3094,
    "end": 3100,
    "range": [
      3094,
      3100
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3101,
    "end": 3102,
    "range": [
      3101,
      3102
    ]
  },
  {
    "type": "String",
    "value": "'yellow'",
    "start": 3103,
    "end": 3111,
    "range": [
      3103,
      3111
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3112,
    "end": 3113,
    "range": [
      3112,
      3113
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3114,
    "end": 3123,
    "range": [
      3114,
      3123
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3123,
    "end": 3124,
    "range": [
      3123,
      3124
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3125,
    "end": 3126,
    "range": [
      3125,
      3126
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3135,
    "end": 3141,
    "range": [
      3135,
      3141
    ]
  },
  {
    "type": "Identifier",
    "value": "draw",
    "start": 3142,
    "end": 3146,
    "range": [
      3142,
      3146
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3146,
    "end": 3147,
    "range": [
      3146,
      3147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3147,
    "end": 3148,
    "range": [
      3147,
      3148
    ]
  },
  {
    "type": "Identifier",
    "value": "color",
    "start": 3149,
    "end": 3154,
    "range": [
      3149,
      3154
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3154,
    "end": 3155,
    "range": [
      3154,
      3155
    ]
  },
  {
    "type": "Identifier",
    "value": "currentColor",
    "start": 3156,
    "end": 3168,
    "range": [
      3156,
      3168
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3169,
    "end": 3170,
    "range": [
      3169,
      3170
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3170,
    "end": 3171,
    "range": [
      3170,
      3171
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3171,
    "end": 3172,
    "range": [
      3171,
      3172
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3177,
    "end": 3178,
    "range": [
      3177,
      3178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3179,
    "end": 3180,
    "range": [
      3179,
      3180
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3238,
    "end": 3247,
    "range": [
      3238,
      3247
    ]
  },
  {
    "type": "Identifier",
    "value": "GH12052",
    "start": 3248,
    "end": 3255,
    "range": [
      3248,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3262,
    "end": 3271,
    "range": [
      3262,
      3271
    ]
  },
  {
    "type": "Identifier",
    "value": "ILinearAxis",
    "start": 3272,
    "end": 3283,
    "range": [
      3272,
      3283
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3284,
    "end": 3285,
    "range": [
      3284,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3286,
    "end": 3290,
    "range": [
      3286,
      3290
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3290,
    "end": 3291,
    "range": [
      3290,
      3291
    ]
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3292,
    "end": 3300,
    "range": [
      3292,
      3300
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3309,
    "end": 3318,
    "range": [
      3309,
      3318
    ]
  },
  {
    "type": "Identifier",
    "value": "ICategoricalAxis",
    "start": 3319,
    "end": 3335,
    "range": [
      3319,
      3335
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3336,
    "end": 3337,
    "range": [
      3336,
      3337
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
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
    "type": "String",
    "value": "\"categorical\"",
    "start": 3344,
    "end": 3357,
    "range": [
      3344,
      3357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3357,
    "end": 3358,
    "range": [
      3357,
      3358
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3359,
    "end": 3360,
    "range": [
      3359,
      3360
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3366,
    "end": 3370,
    "range": [
      3366,
      3370
    ]
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3371,
    "end": 3376,
    "range": [
      3371,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "ILinearAxis",
    "start": 3379,
    "end": 3390,
    "range": [
      3379,
      3390
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3391,
    "end": 3392,
    "range": [
      3391,
      3392
    ]
  },
  {
    "type": "Identifier",
    "value": "ICategoricalAxis",
    "start": 3393,
    "end": 3409,
    "range": [
      3393,
      3409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3409,
    "end": 3410,
    "range": [
      3409,
      3410
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3415,
    "end": 3419,
    "range": [
      3415,
      3419
    ]
  },
  {
    "type": "Identifier",
    "value": "IAxisType",
    "start": 3420,
    "end": 3429,
    "range": [
      3420,
      3429
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3432,
    "end": 3440,
    "range": [
      3432,
      3440
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3441,
    "end": 3442,
    "range": [
      3441,
      3442
    ]
  },
  {
    "type": "String",
    "value": "\"categorical\"",
    "start": 3443,
    "end": 3456,
    "range": [
      3443,
      3456
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3463,
    "end": 3471,
    "range": [
      3463,
      3471
    ]
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3472,
    "end": 3483,
    "range": [
      3472,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3483,
    "end": 3484,
    "range": [
      3483,
      3484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3485,
    "end": 3486,
    "range": [
      3485,
      3486
    ]
  },
  {
    "type": "Identifier",
    "value": "IAxisType",
    "start": 3487,
    "end": 3496,
    "range": [
      3487,
      3496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3497,
    "end": 3498,
    "range": [
      3497,
      3498
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3507,
    "end": 3509,
    "range": [
      3507,
      3509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3510,
    "end": 3511,
    "range": [
      3510,
      3511
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 3513,
    "end": 3515,
    "range": [
      3513,
      3515
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 3516,
    "end": 3517,
    "range": [
      3516,
      3517
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3517,
    "end": 3518,
    "range": [
      3517,
      3518
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3519,
    "end": 3520,
    "range": [
      3519,
      3520
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3533,
    "end": 3539,
    "range": [
      3533,
      3539
    ]
  },
  {
    "type": "String",
    "value": "\"categorical\"",
    "start": 3540,
    "end": 3553,
    "range": [
      3540,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3563,
    "end": 3564,
    "range": [
      3563,
      3564
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3565,
    "end": 3569,
    "range": [
      3565,
      3569
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3570,
    "end": 3571,
    "range": [
      3570,
      3571
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3584,
    "end": 3590,
    "range": [
      3584,
      3590
    ]
  },
  {
    "type": "String",
    "value": "\"linear\"",
    "start": 3591,
    "end": 3599,
    "range": [
      3591,
      3599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3599,
    "end": 3600,
    "range": [
      3599,
      3600
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3609,
    "end": 3610,
    "range": [
      3609,
      3610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3615,
    "end": 3616,
    "range": [
      3615,
      3616
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3622,
    "end": 3627,
    "range": [
      3622,
      3627
    ]
  },
  {
    "type": "Identifier",
    "value": "bad",
    "start": 3628,
    "end": 3631,
    "range": [
      3628,
      3631
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3631,
    "end": 3632,
    "range": [
      3631,
      3632
    ]
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3633,
    "end": 3638,
    "range": [
      3633,
      3638
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3639,
    "end": 3640,
    "range": [
      3639,
      3640
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3641,
    "end": 3642,
    "range": [
      3641,
      3642
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3643,
    "end": 3647,
    "range": [
      3643,
      3647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3647,
    "end": 3648,
    "range": [
      3647,
      3648
    ]
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3649,
    "end": 3660,
    "range": [
      3649,
      3660
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3660,
    "end": 3661,
    "range": [
      3660,
      3661
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3661,
    "end": 3662,
    "range": [
      3661,
      3662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3663,
    "end": 3664,
    "range": [
      3663,
      3664
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3664,
    "end": 3665,
    "range": [
      3664,
      3665
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3670,
    "end": 3675,
    "range": [
      3670,
      3675
    ]
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 3676,
    "end": 3680,
    "range": [
      3676,
      3680
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3680,
    "end": 3681,
    "range": [
      3680,
      3681
    ]
  },
  {
    "type": "Identifier",
    "value": "IAxis",
    "start": 3682,
    "end": 3687,
    "range": [
      3682,
      3687
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3688,
    "end": 3689,
    "range": [
      3688,
      3689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3690,
    "end": 3691,
    "range": [
      3690,
      3691
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3692,
    "end": 3696,
    "range": [
      3692,
      3696
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3696,
    "end": 3697,
    "range": [
      3696,
      3697
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 3698,
    "end": 3707,
    "range": [
      3698,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3709,
    "end": 3710,
    "range": [
      3709,
      3710
    ]
  },
  {
    "type": "Identifier",
    "value": "good",
    "start": 3715,
    "end": 3719,
    "range": [
      3715,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3720,
    "end": 3724,
    "range": [
      3720,
      3724
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3725,
    "end": 3726,
    "range": [
      3725,
      3726
    ]
  },
  {
    "type": "Identifier",
    "value": "getAxisType",
    "start": 3727,
    "end": 3738,
    "range": [
      3727,
      3738
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": ";",
    "start": 3740,
    "end": 3741,
    "range": [
      3740,
      3741
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3742,
    "end": 3743,
    "range": [
      3742,
      3743
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 3801,
    "end": 3810,
    "range": [
      3801,
      3810
    ]
  },
  {
    "type": "Identifier",
    "value": "GH18421",
    "start": 3811,
    "end": 3818,
    "range": [
      3811,
      3818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3819,
    "end": 3820,
    "range": [
      3819,
      3820
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3825,
    "end": 3834,
    "range": [
      3825,
      3834
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingTypeOne",
    "start": 3835,
    "end": 3847,
    "range": [
      3835,
      3847
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3848,
    "end": 3849,
    "range": [
      3848,
      3849
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3858,
    "end": 3862,
    "range": [
      3858,
      3862
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3862,
    "end": 3863,
    "range": [
      3862,
      3863
    ]
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 3864,
    "end": 3869,
    "range": [
      3864,
      3869
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3875,
    "end": 3876,
    "range": [
      3875,
      3876
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 3882,
    "end": 3891,
    "range": [
      3882,
      3891
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingTypeTwo",
    "start": 3892,
    "end": 3904,
    "range": [
      3892,
      3904
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3905,
    "end": 3906,
    "range": [
      3905,
      3906
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3915,
    "end": 3919,
    "range": [
      3915,
      3919
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3919,
    "end": 3920,
    "range": [
      3919,
      3920
    ]
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 3921,
    "end": 3926,
    "range": [
      3921,
      3926
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3926,
    "end": 3927,
    "range": [
      3926,
      3927
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3932,
    "end": 3933,
    "range": [
      3932,
      3933
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3939,
    "end": 3943,
    "range": [
      3939,
      3943
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingType",
    "start": 3944,
    "end": 3953,
    "range": [
      3944,
      3953
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3954,
    "end": 3955,
    "range": [
      3954,
      3955
    ]
  },
  {
    "type": "String",
    "value": "'one'",
    "start": 3956,
    "end": 3961,
    "range": [
      3956,
      3961
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3962,
    "end": 3963,
    "range": [
      3962,
      3963
    ]
  },
  {
    "type": "String",
    "value": "'two'",
    "start": 3964,
    "end": 3969,
    "range": [
      3964,
      3969
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3969,
    "end": 3970,
    "range": [
      3969,
      3970
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3976,
    "end": 3980,
    "range": [
      3976,
      3980
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 3981,
    "end": 3986,
    "range": [
      3981,
      3986
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3987,
    "end": 3988,
    "range": [
      3987,
      3988
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingTypeOne",
    "start": 3989,
    "end": 4001,
    "range": [
      3989,
      4001
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4002,
    "end": 4003,
    "range": [
      4002,
      4003
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingTypeTwo",
    "start": 4004,
    "end": 4016,
    "range": [
      4004,
      4016
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4023,
    "end": 4031,
    "range": [
      4023,
      4031
    ]
  },
  {
    "type": "Identifier",
    "value": "makeNewThing",
    "start": 4032,
    "end": 4044,
    "range": [
      4032,
      4044
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4044,
    "end": 4045,
    "range": [
      4044,
      4045
    ]
  },
  {
    "type": "Identifier",
    "value": "thingType",
    "start": 4045,
    "end": 4054,
    "range": [
      4045,
      4054
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4054,
    "end": 4055,
    "range": [
      4054,
      4055
    ]
  },
  {
    "type": "Identifier",
    "value": "ThingType",
    "start": 4056,
    "end": 4065,
    "range": [
      4056,
      4065
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4065,
    "end": 4066,
    "range": [
      4065,
      4066
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4066,
    "end": 4067,
    "range": [
      4066,
      4067
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 4068,
    "end": 4073,
    "range": [
      4068,
      4073
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4074,
    "end": 4075,
    "range": [
      4074,
      4075
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 4084,
    "end": 4090,
    "range": [
      4084,
      4090
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4091,
    "end": 4092,
    "range": [
      4091,
      4092
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4105,
    "end": 4109,
    "range": [
      4105,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Identifier",
    "value": "thingType",
    "start": 4111,
    "end": 4120,
    "range": [
      4111,
      4120
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4129,
    "end": 4130,
    "range": [
      4129,
      4130
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4130,
    "end": 4131,
    "range": [
      4130,
      4131
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4136,
    "end": 4137,
    "range": [
      4136,
      4137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4138,
    "end": 4139,
    "range": [
      4138,
      4139
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4197,
    "end": 4206,
    "range": [
      4197,
      4206
    ]
  },
  {
    "type": "Identifier",
    "value": "GH15907",
    "start": 4207,
    "end": 4214,
    "range": [
      4207,
      4214
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4215,
    "end": 4216,
    "range": [
      4215,
      4216
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4221,
    "end": 4225,
    "range": [
      4221,
      4225
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4226,
    "end": 4232,
    "range": [
      4226,
      4232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4233,
    "end": 4234,
    "range": [
      4233,
      4234
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4235,
    "end": 4236,
    "range": [
      4235,
      4236
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4237,
    "end": 4241,
    "range": [
      4237,
      4241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4241,
    "end": 4242,
    "range": [
      4241,
      4242
    ]
  },
  {
    "type": "String",
    "value": "'activate'",
    "start": 4243,
    "end": 4253,
    "range": [
      4243,
      4253
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4254,
    "end": 4255,
    "range": [
      4254,
      4255
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4256,
    "end": 4257,
    "range": [
      4256,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4260,
    "end": 4264,
    "range": [
      4260,
      4264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4264,
    "end": 4265,
    "range": [
      4264,
      4265
    ]
  },
  {
    "type": "String",
    "value": "'disactivate'",
    "start": 4266,
    "end": 4279,
    "range": [
      4266,
      4279
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4280,
    "end": 4281,
    "range": [
      4280,
      4281
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4281,
    "end": 4282,
    "range": [
      4281,
      4282
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4288,
    "end": 4296,
    "range": [
      4288,
      4296
    ]
  },
  {
    "type": "Identifier",
    "value": "dispatchAction",
    "start": 4297,
    "end": 4311,
    "range": [
      4297,
      4311
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4311,
    "end": 4312,
    "range": [
      4311,
      4312
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 4312,
    "end": 4318,
    "range": [
      4312,
      4318
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4318,
    "end": 4319,
    "range": [
      4318,
      4319
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 4320,
    "end": 4326,
    "range": [
      4320,
      4326
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4326,
    "end": 4327,
    "range": [
      4326,
      4327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4327,
    "end": 4328,
    "range": [
      4327,
      4328
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4329,
    "end": 4333,
    "range": [
      4329,
      4333
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4334,
    "end": 4335,
    "range": [
      4334,
      4335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4341,
    "end": 4342,
    "range": [
      4341,
      4342
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4348,
    "end": 4353,
    "range": [
      4348,
      4353
    ]
  },
  {
    "type": "Identifier",
    "value": "active",
    "start": 4354,
    "end": 4360,
    "range": [
      4354,
      4360
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4361,
    "end": 4362,
    "range": [
      4361,
      4362
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 4363,
    "end": 4367,
    "range": [
      4363,
      4367
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4367,
    "end": 4368,
    "range": [
      4367,
      4368
    ]
  },
  {
    "type": "Identifier",
    "value": "dispatchAction",
    "start": 4374,
    "end": 4388,
    "range": [
      4374,
      4388
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4388,
    "end": 4389,
    "range": [
      4388,
      4389
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4389,
    "end": 4390,
    "range": [
      4389,
      4390
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4391,
    "end": 4395,
    "range": [
      4391,
      4395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4396,
    "end": 4397,
    "range": [
      4396,
      4397
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4398,
    "end": 4399,
    "range": [
      4398,
      4399
    ]
  },
  {
    "type": "Identifier",
    "value": "active",
    "start": 4399,
    "end": 4405,
    "range": [
      4399,
      4405
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4405,
    "end": 4406,
    "range": [
      4405,
      4406
    ]
  },
  {
    "type": "String",
    "value": "'disactivate'",
    "start": 4407,
    "end": 4420,
    "range": [
      4407,
      4420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4421,
    "end": 4422,
    "range": [
      4421,
      4422
    ]
  },
  {
    "type": "String",
    "value": "'activate'",
    "start": 4423,
    "end": 4433,
    "range": [
      4423,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4435,
    "end": 4436,
    "range": [
      4435,
      4436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4436,
    "end": 4437,
    "range": [
      4436,
      4437
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4437,
    "end": 4438,
    "range": [
      4437,
      4438
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4498,
    "end": 4507,
    "range": [
      4498,
      4507
    ]
  },
  {
    "type": "Identifier",
    "value": "GH20889",
    "start": 4508,
    "end": 4515,
    "range": [
      4508,
      4515
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4516,
    "end": 4517,
    "range": [
      4516,
      4517
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4522,
    "end": 4531,
    "range": [
      4522,
      4531
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 4532,
    "end": 4534,
    "range": [
      4532,
      4534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4535,
    "end": 4536,
    "range": [
      4535,
      4536
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4545,
    "end": 4549,
    "range": [
      4545,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4549,
    "end": 4550,
    "range": [
      4549,
      4550
    ]
  },
  {
    "type": "String",
    "value": "\"A1\"",
    "start": 4551,
    "end": 4555,
    "range": [
      4551,
      4555
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4555,
    "end": 4556,
    "range": [
      4555,
      4556
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4561,
    "end": 4562,
    "range": [
      4561,
      4562
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 4567,
    "end": 4576,
    "range": [
      4567,
      4576
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 4577,
    "end": 4579,
    "range": [
      4577,
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
    "value": "type",
    "start": 4590,
    "end": 4594,
    "range": [
      4590,
      4594
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4594,
    "end": 4595,
    "range": [
      4594,
      4595
    ]
  },
  {
    "type": "String",
    "value": "\"A2\"",
    "start": 4596,
    "end": 4600,
    "range": [
      4596,
      4600
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4600,
    "end": 4601,
    "range": [
      4600,
      4601
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4606,
    "end": 4607,
    "range": [
      4606,
      4607
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4612,
    "end": 4616,
    "range": [
      4612,
      4616
    ]
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4617,
    "end": 4619,
    "range": [
      4617,
      4619
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4620,
    "end": 4621,
    "range": [
      4620,
      4621
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 4622,
    "end": 4624,
    "range": [
      4622,
      4624
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4625,
    "end": 4626,
    "range": [
      4625,
      4626
    ]
  },
  {
    "type": "Identifier",
    "value": "A2",
    "start": 4627,
    "end": 4629,
    "range": [
      4627,
      4629
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4629,
    "end": 4630,
    "range": [
      4629,
      4630
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4636,
    "end": 4644,
    "range": [
      4636,
      4644
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 4645,
    "end": 4648,
    "range": [
      4645,
      4648
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4648,
    "end": 4649,
    "range": [
      4648,
      4649
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 4649,
    "end": 4653,
    "range": [
      4649,
      4653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4653,
    "end": 4654,
    "range": [
      4653,
      4654
    ]
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4655,
    "end": 4657,
    "range": [
      4655,
      4657
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4657,
    "end": 4658,
    "range": [
      4657,
      4658
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4659,
    "end": 4660,
    "range": [
      4659,
      4660
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4669,
    "end": 4674,
    "range": [
      4669,
      4674
    ]
  },
  {
    "type": "Identifier",
    "value": "obj2",
    "start": 4675,
    "end": 4679,
    "range": [
      4675,
      4679
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4679,
    "end": 4680,
    "range": [
      4679,
      4680
    ]
  },
  {
    "type": "Identifier",
    "value": "AU",
    "start": 4681,
    "end": 4683,
    "range": [
      4681,
      4683
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4684,
    "end": 4685,
    "range": [
      4684,
      4685
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4686,
    "end": 4687,
    "range": [
      4686,
      4687
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4700,
    "end": 4704,
    "range": [
      4700,
      4704
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4704,
    "end": 4705,
    "range": [
      4704,
      4705
    ]
  },
  {
    "type": "Identifier",
    "value": "obj1",
    "start": 4706,
    "end": 4710,
    "range": [
      4706,
      4710
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4710,
    "end": 4711,
    "range": [
      4710,
      4711
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4711,
    "end": 4715,
    "range": [
      4711,
      4715
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4724,
    "end": 4725,
    "range": [
      4724,
      4725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4725,
    "end": 4726,
    "range": [
      4725,
      4726
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4733,
    "end": 4734,
    "range": [
      4733,
      4734
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 4792,
    "end": 4801,
    "range": [
      4792,
      4801
    ]
  },
  {
    "type": "Identifier",
    "value": "GH39357",
    "start": 4802,
    "end": 4809,
    "range": [
      4802,
      4809
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4810,
    "end": 4811,
    "range": [
      4810,
      4811
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4816,
    "end": 4820,
    "range": [
      4816,
      4820
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4821,
    "end": 4822,
    "range": [
      4821,
      4822
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4823,
    "end": 4824,
    "range": [
      4823,
      4824
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4825,
    "end": 4826,
    "range": [
      4825,
      4826
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4826,
    "end": 4829,
    "range": [
      4826,
      4829
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4829,
    "end": 4830,
    "range": [
      4829,
      4830
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4831,
    "end": 4837,
    "range": [
      4831,
      4837
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4837,
    "end": 4838,
    "range": [
      4837,
      4838
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4839,
    "end": 4840,
    "range": [
      4839,
      4840
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4841,
    "end": 4842,
    "range": [
      4841,
      4842
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4842,
    "end": 4845,
    "range": [
      4842,
      4845
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4845,
    "end": 4846,
    "range": [
      4845,
      4846
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4847,
    "end": 4853,
    "range": [
      4847,
      4853
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4853,
    "end": 4854,
    "range": [
      4853,
      4854
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4855,
    "end": 4856,
    "range": [
      4855,
      4856
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4857,
    "end": 4858,
    "range": [
      4857,
      4858
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4858,
    "end": 4861,
    "range": [
      4858,
      4861
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4861,
    "end": 4862,
    "range": [
      4861,
      4862
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4863,
    "end": 4869,
    "range": [
      4863,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4870,
    "end": 4871,
    "range": [
      4870,
      4871
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4876,
    "end": 4880,
    "range": [
      4876,
      4880
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4881,
    "end": 4882,
    "range": [
      4881,
      4882
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4885,
    "end": 4888,
    "range": [
      4885,
      4888
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4889,
    "end": 4890,
    "range": [
      4889,
      4890
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4891,
    "end": 4894,
    "range": [
      4891,
      4894
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4895,
    "end": 4896,
    "range": [
      4895,
      4896
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4897,
    "end": 4900,
    "range": [
      4897,
      4900
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4900,
    "end": 4901,
    "range": [
      4900,
      4901
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4906,
    "end": 4913,
    "range": [
      4906,
      4913
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4914,
    "end": 4919,
    "range": [
      4914,
      4919
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4920,
    "end": 4921,
    "range": [
      4920,
      4921
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4921,
    "end": 4922,
    "range": [
      4921,
      4922
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4923,
    "end": 4924,
    "range": [
      4923,
      4924
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4924,
    "end": 4925,
    "range": [
      4924,
      4925
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4930,
    "end": 4935,
    "range": [
      4930,
      4935
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4936,
    "end": 4937,
    "range": [
      4936,
      4937
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4937,
    "end": 4938,
    "range": [
      4937,
      4938
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4939,
    "end": 4940,
    "range": [
      4939,
      4940
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4941,
    "end": 4942,
    "range": [
      4941,
      4942
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4943,
    "end": 4944,
    "range": [
      4943,
      4944
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4945,
    "end": 4948,
    "range": [
      4945,
      4948
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 4949,
    "end": 4952,
    "range": [
      4949,
      4952
    ]
  },
  {
    "type": "Punctuator",
    "value": "||",
    "start": 4953,
    "end": 4955,
    "range": [
      4953,
      4955
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4956,
    "end": 4957,
    "range": [
      4956,
      4957
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4958,
    "end": 4961,
    "range": [
      4958,
      4961
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 4962,
    "end": 4965,
    "range": [
      4962,
      4965
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4966,
    "end": 4967,
    "range": [
      4966,
      4967
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4968,
    "end": 4969,
    "range": [
      4968,
      4969
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4969,
    "end": 4970,
    "range": [
      4969,
      4970
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4970,
    "end": 4971,
    "range": [
      4970,
      4971
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 4972,
    "end": 4973,
    "range": [
      4972,
      4973
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4973,
    "end": 4974,
    "range": [
      4973,
      4974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4975,
    "end": 4976,
    "range": [
      4975,
      4976
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4977,
    "end": 4978,
    "range": [
      4977,
      4978
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 4978,
    "end": 4981,
    "range": [
      4978,
      4981
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4981,
    "end": 4982,
    "range": [
      4981,
      4982
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 4983,
    "end": 4985,
    "range": [
      4983,
      4985
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4985,
    "end": 4986,
    "range": [
      4985,
      4986
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4986,
    "end": 4987,
    "range": [
      4986,
      4987
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4988,
    "end": 4989,
    "range": [
      4988,
      4989
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 5047,
    "end": 5056,
    "range": [
      5047,
      5056
    ]
  },
  {
    "type": "Identifier",
    "value": "GH58603",
    "start": 5057,
    "end": 5064,
    "range": [
      5057,
      5064
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5065,
    "end": 5066,
    "range": [
      5065,
      5066
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 5071,
    "end": 5075,
    "range": [
      5071,
      5075
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5076,
    "end": 5082,
    "range": [
      5076,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5083,
    "end": 5084,
    "range": [
      5083,
      5084
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5085,
    "end": 5086,
    "range": [
      5085,
      5086
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5089,
    "end": 5090,
    "range": [
      5089,
      5090
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5090,
    "end": 5091,
    "range": [
      5090,
      5091
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5092,
    "end": 5093,
    "range": [
      5092,
      5093
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5094,
    "end": 5095,
    "range": [
      5094,
      5095
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5096,
    "end": 5097,
    "range": [
      5096,
      5097
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5098,
    "end": 5099,
    "range": [
      5098,
      5099
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5105,
    "end": 5109,
    "range": [
      5105,
      5109
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 5110,
    "end": 5115,
    "range": [
      5110,
      5115
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5116,
    "end": 5117,
    "range": [
      5116,
      5117
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5118,
    "end": 5119,
    "range": [
      5118,
      5119
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5120,
    "end": 5124,
    "range": [
      5120,
      5124
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5124,
    "end": 5125,
    "range": [
      5124,
      5125
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5126,
    "end": 5132,
    "range": [
      5126,
      5132
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5132,
    "end": 5133,
    "range": [
      5132,
      5133
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 5133,
    "end": 5134,
    "range": [
      5133,
      5134
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5134,
    "end": 5135,
    "range": [
      5134,
      5135
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5136,
    "end": 5138,
    "range": [
      5136,
      5138
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5138,
    "end": 5139,
    "range": [
      5138,
      5139
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5139,
    "end": 5140,
    "range": [
      5139,
      5140
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5141,
    "end": 5147,
    "range": [
      5141,
      5147
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5148,
    "end": 5149,
    "range": [
      5148,
      5149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5149,
    "end": 5150,
    "range": [
      5149,
      5150
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5160,
    "end": 5164,
    "range": [
      5160,
      5164
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 5165,
    "end": 5170,
    "range": [
      5165,
      5170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5171,
    "end": 5172,
    "range": [
      5171,
      5172
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5173,
    "end": 5174,
    "range": [
      5173,
      5174
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5175,
    "end": 5179,
    "range": [
      5175,
      5179
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5179,
    "end": 5180,
    "range": [
      5179,
      5180
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5181,
    "end": 5187,
    "range": [
      5181,
      5187
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5187,
    "end": 5188,
    "range": [
      5187,
      5188
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 5188,
    "end": 5189,
    "range": [
      5188,
      5189
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5190,
    "end": 5191,
    "range": [
      5190,
      5191
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 5192,
    "end": 5193,
    "range": [
      5192,
      5193
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5194,
    "end": 5195,
    "range": [
      5194,
      5195
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5195,
    "end": 5196,
    "range": [
      5195,
      5196
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5197,
    "end": 5199,
    "range": [
      5197,
      5199
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5199,
    "end": 5200,
    "range": [
      5199,
      5200
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5200,
    "end": 5201,
    "range": [
      5200,
      5201
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5202,
    "end": 5211,
    "range": [
      5202,
      5211
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5212,
    "end": 5213,
    "range": [
      5212,
      5213
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5214,
    "end": 5215,
    "range": [
      5214,
      5215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5216,
    "end": 5217,
    "range": [
      5216,
      5217
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5218,
    "end": 5220,
    "range": [
      5218,
      5220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5220,
    "end": 5221,
    "range": [
      5220,
      5221
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5222,
    "end": 5228,
    "range": [
      5222,
      5228
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5229,
    "end": 5230,
    "range": [
      5229,
      5230
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5230,
    "end": 5231,
    "range": [
      5230,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5242,
    "end": 5246,
    "range": [
      5242,
      5246
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 5247,
    "end": 5253,
    "range": [
      5247,
      5253
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5254,
    "end": 5255,
    "range": [
      5254,
      5255
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeA",
    "start": 5256,
    "end": 5261,
    "range": [
      5256,
      5261
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5262,
    "end": 5263,
    "range": [
      5262,
      5263
    ]
  },
  {
    "type": "Identifier",
    "value": "TypeB",
    "start": 5264,
    "end": 5269,
    "range": [
      5264,
      5269
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5269,
    "end": 5270,
    "range": [
      5269,
      5270
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5280,
    "end": 5288,
    "range": [
      5280,
      5288
    ]
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 5289,
    "end": 5298,
    "range": [
      5289,
      5298
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5298,
    "end": 5299,
    "range": [
      5298,
      5299
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5299,
    "end": 5300,
    "range": [
      5299,
      5300
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5300,
    "end": 5301,
    "range": [
      5300,
      5301
    ]
  },
  {
    "type": "Identifier",
    "value": "MyType",
    "start": 5302,
    "end": 5308,
    "range": [
      5302,
      5308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5308,
    "end": 5309,
    "range": [
      5308,
      5309
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5309,
    "end": 5310,
    "range": [
      5309,
      5310
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5311,
    "end": 5315,
    "range": [
      5311,
      5315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5316,
    "end": 5317,
    "range": [
      5316,
      5317
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5317,
    "end": 5318,
    "range": [
      5317,
      5318
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5328,
    "end": 5336,
    "range": [
      5328,
      5336
    ]
  },
  {
    "type": "Identifier",
    "value": "indirect",
    "start": 5337,
    "end": 5345,
    "range": [
      5337,
      5345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5345,
    "end": 5346,
    "range": [
      5345,
      5346
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5346,
    "end": 5350,
    "range": [
      5346,
      5350
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5350,
    "end": 5351,
    "range": [
      5350,
      5351
    ]
  },
  {
    "type": "Identifier",
    "value": "MyEnum",
    "start": 5352,
    "end": 5358,
    "range": [
      5352,
      5358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5358,
    "end": 5359,
    "range": [
      5358,
      5359
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5360,
    "end": 5362,
    "range": [
      5360,
      5362
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 5362,
    "end": 5363,
    "range": [
      5362,
      5363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5363,
    "end": 5364,
    "range": [
      5363,
      5364
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5365,
    "end": 5371,
    "range": [
      5365,
      5371
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5371,
    "end": 5372,
    "range": [
      5371,
      5372
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5372,
    "end": 5373,
    "range": [
      5372,
      5373
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5374,
    "end": 5378,
    "range": [
      5374,
      5378
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5379,
    "end": 5380,
    "range": [
      5379,
      5380
    ]
  },
  {
    "type": "Identifier",
    "value": "something",
    "start": 5389,
    "end": 5398,
    "range": [
      5389,
      5398
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5398,
    "end": 5399,
    "range": [
      5398,
      5399
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5399,
    "end": 5400,
    "range": [
      5399,
      5400
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5401,
    "end": 5405,
    "range": [
      5401,
      5405
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5405,
    "end": 5406,
    "range": [
      5405,
      5406
    ]
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 5407,
    "end": 5409,
    "range": [
      5407,
      5409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5410,
    "end": 5411,
    "range": [
      5410,
      5411
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5412,
    "end": 5413,
    "range": [
      5412,
      5413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5418,
    "end": 5419,
    "range": [
      5418,
      5419
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5429,
    "end": 5433,
    "range": [
      5429,
      5433
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5434,
    "end": 5437,
    "range": [
      5434,
      5437
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5440,
    "end": 5441,
    "range": [
      5440,
      5441
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5442,
    "end": 5446,
    "range": [
      5442,
      5446
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5446,
    "end": 5447,
    "range": [
      5446,
      5447
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5448,
    "end": 5451,
    "range": [
      5448,
      5451
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5452,
    "end": 5453,
    "range": [
      5452,
      5453
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5454,
    "end": 5457,
    "range": [
      5454,
      5457
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5457,
    "end": 5458,
    "range": [
      5457,
      5458
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5459,
    "end": 5464,
    "range": [
      5459,
      5464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5464,
    "end": 5465,
    "range": [
      5464,
      5465
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5466,
    "end": 5472,
    "range": [
      5466,
      5472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5473,
    "end": 5474,
    "range": [
      5473,
      5474
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5475,
    "end": 5476,
    "range": [
      5475,
      5476
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5477,
    "end": 5478,
    "range": [
      5477,
      5478
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5479,
    "end": 5483,
    "range": [
      5479,
      5483
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5483,
    "end": 5484,
    "range": [
      5483,
      5484
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5485,
    "end": 5488,
    "range": [
      5485,
      5488
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5488,
    "end": 5489,
    "range": [
      5488,
      5489
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5490,
    "end": 5495,
    "range": [
      5490,
      5495
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5495,
    "end": 5496,
    "range": [
      5495,
      5496
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5497,
    "end": 5506,
    "range": [
      5497,
      5506
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5507,
    "end": 5508,
    "range": [
      5507,
      5508
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5509,
    "end": 5510,
    "range": [
      5509,
      5510
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5511,
    "end": 5512,
    "range": [
      5511,
      5512
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5513,
    "end": 5517,
    "range": [
      5513,
      5517
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5517,
    "end": 5518,
    "range": [
      5517,
      5518
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5519,
    "end": 5522,
    "range": [
      5519,
      5522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5522,
    "end": 5523,
    "range": [
      5522,
      5523
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5524,
    "end": 5529,
    "range": [
      5524,
      5529
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5529,
    "end": 5530,
    "range": [
      5529,
      5530
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5531,
    "end": 5540,
    "range": [
      5531,
      5540
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5541,
    "end": 5542,
    "range": [
      5541,
      5542
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5542,
    "end": 5543,
    "range": [
      5542,
      5543
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 5553,
    "end": 5561,
    "range": [
      5553,
      5561
    ]
  },
  {
    "type": "Identifier",
    "value": "test",
    "start": 5562,
    "end": 5566,
    "range": [
      5562,
      5566
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5566,
    "end": 5567,
    "range": [
      5566,
      5567
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5567,
    "end": 5570,
    "range": [
      5567,
      5570
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5570,
    "end": 5571,
    "range": [
      5570,
      5571
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5572,
    "end": 5573,
    "range": [
      5572,
      5573
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5574,
    "end": 5578,
    "range": [
      5574,
      5578
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5578,
    "end": 5579,
    "range": [
      5578,
      5579
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 5580,
    "end": 5583,
    "range": [
      5580,
      5583
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5584,
    "end": 5585,
    "range": [
      5584,
      5585
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 5586,
    "end": 5589,
    "range": [
      5586,
      5589
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5589,
    "end": 5590,
    "range": [
      5589,
      5590
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5591,
    "end": 5596,
    "range": [
      5591,
      5596
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5596,
    "end": 5597,
    "range": [
      5596,
      5597
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5598,
    "end": 5604,
    "range": [
      5598,
      5604
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5605,
    "end": 5606,
    "range": [
      5605,
      5606
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 5607,
    "end": 5616,
    "range": [
      5607,
      5616
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5617,
    "end": 5618,
    "range": [
      5617,
      5618
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5618,
    "end": 5619,
    "range": [
      5618,
      5619
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5620,
    "end": 5621,
    "range": [
      5620,
      5621
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5630,
    "end": 5633,
    "range": [
      5630,
      5633
    ]
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 5634,
    "end": 5636,
    "range": [
      5634,
      5636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5636,
    "end": 5637,
    "range": [
      5636,
      5637
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5638,
    "end": 5641,
    "range": [
      5638,
      5641
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5642,
    "end": 5643,
    "range": [
      5642,
      5643
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5644,
    "end": 5647,
    "range": [
      5644,
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
    "type": "Keyword",
    "value": "let",
    "start": 5657,
    "end": 5660,
    "range": [
      5657,
      5660
    ]
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 5661,
    "end": 5663,
    "range": [
      5661,
      5663
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5663,
    "end": 5664,
    "range": [
      5663,
      5664
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 5665,
    "end": 5668,
    "range": [
      5665,
      5668
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5669,
    "end": 5670,
    "range": [
      5669,
      5670
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5671,
    "end": 5672,
    "range": [
      5671,
      5672
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5673,
    "end": 5677,
    "range": [
      5673,
      5677
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5677,
    "end": 5678,
    "range": [
      5677,
      5678
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5679,
    "end": 5682,
    "range": [
      5679,
      5682
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5682,
    "end": 5683,
    "range": [
      5682,
      5683
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 5683,
    "end": 5687,
    "range": [
      5683,
      5687
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5687,
    "end": 5688,
    "range": [
      5687,
      5688
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5689,
    "end": 5694,
    "range": [
      5689,
      5694
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5694,
    "end": 5695,
    "range": [
      5694,
      5695
    ]
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 5696,
    "end": 5699,
    "range": [
      5696,
      5699
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 5699,
    "end": 5700,
    "range": [
      5699,
      5700
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 5700,
    "end": 5705,
    "range": [
      5700,
      5705
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5706,
    "end": 5707,
    "range": [
      5706,
      5707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5707,
    "end": 5708,
    "range": [
      5707,
      5708
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5713,
    "end": 5714,
    "range": [
      5713,
      5714
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5715,
    "end": 5716,
    "range": [
      5715,
      5716
    ]
  }
]
```
