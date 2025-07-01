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
        "name": "BugExhibition",
        "optional": false,
        "typeAnnotation": null,
        "start": 109,
        "end": 122
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
              "start": 123,
              "end": 124
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 123,
            "end": 124
          }
        ],
        "start": 122,
        "end": 125
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 149
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 184
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 187,
                      "end": 190
                    },
                    "expression": false,
                    "start": 162,
                    "end": 190
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 212,
                                      "end": 216
                                    },
                                    "start": 210,
                                    "end": 216
                                  },
                                  "start": 208,
                                  "end": 217
                                }
                              ],
                              "start": 206,
                              "end": 219
                            },
                            "start": 204,
                            "end": 219
                          },
                          "start": 203,
                          "end": 219
                        },
                        "init": null,
                        "definite": false,
                        "start": 203,
                        "end": 219
                      }
                    ],
                    "declare": false,
                    "start": 199,
                    "end": 220
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 230
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 233,
                        "end": 246
                      },
                      "start": 229,
                      "end": 246
                    },
                    "directive": null,
                    "start": 229,
                    "end": 247
                  }
                ],
                "start": 152,
                "end": 253
              },
              "expression": false,
              "start": 149,
              "end": 253
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 132,
            "end": 253
          }
        ],
        "start": 126,
        "end": 255
      },
      "abstract": false,
      "declare": false,
      "start": 103,
      "end": 255
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition2",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 277
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
              "start": 278,
              "end": 279
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 278,
            "end": 279
          }
        ],
        "start": 277,
        "end": 280
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 316
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 351
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 354,
                      "end": 357
                    },
                    "expression": false,
                    "start": 329,
                    "end": 357
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 379,
                                      "end": 383
                                    },
                                    "start": 377,
                                    "end": 383
                                  },
                                  "start": 375,
                                  "end": 384
                                }
                              ],
                              "start": 373,
                              "end": 386
                            },
                            "start": 371,
                            "end": 386
                          },
                          "start": 370,
                          "end": 386
                        },
                        "init": null,
                        "definite": false,
                        "start": 370,
                        "end": 386
                      }
                    ],
                    "declare": false,
                    "start": 366,
                    "end": 387
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 396,
                        "end": 397
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 400,
                        "end": 413
                      },
                      "start": 396,
                      "end": 413
                    },
                    "directive": null,
                    "start": 396,
                    "end": 414
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 430,
                      "end": 434
                    },
                    "start": 423,
                    "end": 435
                  }
                ],
                "start": 319,
                "end": 441
              },
              "expression": false,
              "start": 316,
              "end": 441
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 287,
            "end": 441
          }
        ],
        "start": 281,
        "end": 443
      },
      "abstract": false,
      "declare": false,
      "start": 257,
      "end": 443
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugExhibition3",
        "optional": false,
        "typeAnnotation": null,
        "start": 451,
        "end": 465
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
              "start": 466,
              "end": 467
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 466,
            "end": 467
          }
        ],
        "start": 465,
        "end": 468
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
              "name": "exhibitBug",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 492
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localGenericFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 534
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
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 535,
                            "end": 536
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 535,
                          "end": 536
                        }
                      ],
                      "start": 534,
                      "end": 537
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "u",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 542,
                              "end": 543
                            },
                            "typeArguments": null,
                            "start": 542,
                            "end": 543
                          },
                          "start": 540,
                          "end": 543
                        },
                        "start": 538,
                        "end": 543
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 545,
                      "end": 548
                    },
                    "expression": false,
                    "start": 505,
                    "end": 548
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 570,
                                      "end": 574
                                    },
                                    "start": 568,
                                    "end": 574
                                  },
                                  "start": 566,
                                  "end": 575
                                }
                              ],
                              "start": 564,
                              "end": 577
                            },
                            "start": 562,
                            "end": 577
                          },
                          "start": 561,
                          "end": 577
                        },
                        "init": null,
                        "definite": false,
                        "start": 561,
                        "end": 577
                      }
                    ],
                    "declare": false,
                    "start": 557,
                    "end": 578
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 587,
                        "end": 588
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localGenericFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 591,
                        "end": 611
                      },
                      "start": 587,
                      "end": 611
                    },
                    "directive": null,
                    "start": 587,
                    "end": 612
                  }
                ],
                "start": 495,
                "end": 618
              },
              "expression": false,
              "start": 492,
              "end": 618
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 475,
            "end": 618
          }
        ],
        "start": 469,
        "end": 620
      },
      "abstract": false,
      "declare": false,
      "start": 445,
      "end": 620
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
        "start": 628,
        "end": 629
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
              "name": "exhibit",
              "optional": false,
              "typeAnnotation": null,
              "start": 636,
              "end": 643
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
                          "name": "funcExpr",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 660,
                          "end": 668
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
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
                                  "start": 672,
                                  "end": 673
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false,
                                "start": 672,
                                "end": 673
                              }
                            ],
                            "start": 671,
                            "end": 674
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "u",
                              "optional": true,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 679,
                                    "end": 680
                                  },
                                  "typeArguments": null,
                                  "start": 679,
                                  "end": 680
                                },
                                "start": 677,
                                "end": 680
                              },
                              "start": 675,
                              "end": 680
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 685,
                            "end": 688
                          },
                          "id": null,
                          "generator": false,
                          "start": 671,
                          "end": 688
                        },
                        "definite": false,
                        "start": 660,
                        "end": 688
                      }
                    ],
                    "declare": false,
                    "start": 656,
                    "end": 689
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 711,
                                      "end": 715
                                    },
                                    "start": 709,
                                    "end": 715
                                  },
                                  "start": 707,
                                  "end": 716
                                }
                              ],
                              "start": 705,
                              "end": 718
                            },
                            "start": 703,
                            "end": 718
                          },
                          "start": 702,
                          "end": 718
                        },
                        "init": null,
                        "definite": false,
                        "start": 702,
                        "end": 718
                      }
                    ],
                    "declare": false,
                    "start": 698,
                    "end": 719
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 728,
                        "end": 729
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "funcExpr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 732,
                        "end": 740
                      },
                      "start": 728,
                      "end": 740
                    },
                    "directive": null,
                    "start": 728,
                    "end": 741
                  }
                ],
                "start": 646,
                "end": 747
              },
              "expression": false,
              "start": 643,
              "end": 747
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 636,
            "end": 747
          }
        ],
        "start": 630,
        "end": 749
      },
      "abstract": false,
      "declare": false,
      "start": 622,
      "end": 749
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 758,
        "end": 759
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exhibitBug",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 792
              },
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "localFunction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 814,
                      "end": 827
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 830,
                      "end": 833
                    },
                    "expression": false,
                    "start": 805,
                    "end": 833
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
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSCallSignatureDeclaration",
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSVoidKeyword",
                                      "start": 855,
                                      "end": 859
                                    },
                                    "start": 853,
                                    "end": 859
                                  },
                                  "start": 851,
                                  "end": 860
                                }
                              ],
                              "start": 849,
                              "end": 862
                            },
                            "start": 847,
                            "end": 862
                          },
                          "start": 846,
                          "end": 862
                        },
                        "init": null,
                        "definite": false,
                        "start": 846,
                        "end": 862
                      }
                    ],
                    "declare": false,
                    "start": 842,
                    "end": 863
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 872,
                        "end": 873
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 876,
                        "end": 889
                      },
                      "start": 872,
                      "end": 889
                    },
                    "directive": null,
                    "start": 872,
                    "end": 890
                  }
                ],
                "start": 795,
                "end": 896
              },
              "expression": false,
              "start": 773,
              "end": 896
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 766,
            "end": 896
          }
        ],
        "start": 760,
        "end": 898
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 751,
      "end": 898
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 905,
        "end": 906
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
              "start": 913,
              "end": 914
            },
            "initializer": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "localFunction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 943,
                        "end": 956
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 959,
                        "end": 962
                      },
                      "expression": false,
                      "start": 934,
                      "end": 962
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeLiteral",
                                "members": [
                                  {
                                    "type": "TSCallSignatureDeclaration",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSVoidKeyword",
                                        "start": 984,
                                        "end": 988
                                      },
                                      "start": 982,
                                      "end": 988
                                    },
                                    "start": 980,
                                    "end": 989
                                  }
                                ],
                                "start": 978,
                                "end": 991
                              },
                              "start": 976,
                              "end": 991
                            },
                            "start": 975,
                            "end": 991
                          },
                          "init": null,
                          "definite": false,
                          "start": 975,
                          "end": 991
                        }
                      ],
                      "declare": false,
                      "start": 971,
                      "end": 992
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1001,
                          "end": 1002
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "localFunction",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1005,
                          "end": 1018
                        },
                        "start": 1001,
                        "end": 1018
                      },
                      "directive": null,
                      "start": 1001,
                      "end": 1019
                    },
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 1035,
                        "end": 1036
                      },
                      "start": 1028,
                      "end": 1037
                    }
                  ],
                  "start": 924,
                  "end": 1043
                },
                "id": null,
                "generator": false,
                "start": 918,
                "end": 1043
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 917,
              "end": 1046
            },
            "computed": false,
            "start": 913,
            "end": 1046
          }
        ],
        "start": 907,
        "end": 1048
      },
      "const": false,
      "declare": false,
      "start": 900,
      "end": 1048
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 103,
  "end": 1048
}
```
