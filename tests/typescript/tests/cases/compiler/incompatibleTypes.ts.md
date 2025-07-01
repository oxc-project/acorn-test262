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
        "name": "IFoo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 24
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 22,
            "end": 35
          }
        ],
        "start": 16,
        "end": 37
      },
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 45,
        "end": 47
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
            "name": "IFoo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 64
          },
          "typeArguments": null,
          "start": 59,
          "end": 64
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 113,
              "end": 115
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
                      "value": "s",
                      "raw": "\"s\"",
                      "start": 135,
                      "end": 138
                    },
                    "start": 128,
                    "end": 139
                  }
                ],
                "start": 118,
                "end": 145
              },
              "expression": false,
              "start": 115,
              "end": 145
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 106,
            "end": 145
          }
        ],
        "start": 65,
        "end": 147
      },
      "abstract": false,
      "declare": false,
      "start": 39,
      "end": 147
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 164
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 173
            },
            "computed": false,
            "optional": false,
            "kind": "method",
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
                    "type": "TSStringKeyword",
                    "start": 176,
                    "end": 182
                  },
                  "start": 175,
                  "end": 182
                },
                "start": 174,
                "end": 182
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 185,
                "end": 191
              },
              "start": 183,
              "end": 191
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 171,
            "end": 192
          }
        ],
        "start": 165,
        "end": 194
      },
      "declare": false,
      "start": 149,
      "end": 194
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
        "start": 202,
        "end": 204
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
            "name": "IFoo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 216,
            "end": 221
          },
          "typeArguments": null,
          "start": 216,
          "end": 221
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 269,
              "end": 271
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
                  "name": "n",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 274,
                      "end": 280
                    },
                    "start": 273,
                    "end": 280
                  },
                  "start": 272,
                  "end": 280
                }
              ],
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
                      "start": 299,
                      "end": 300
                    },
                    "start": 292,
                    "end": 301
                  }
                ],
                "start": 282,
                "end": 307
              },
              "expression": false,
              "start": 271,
              "end": 307
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 262,
            "end": 307
          }
        ],
        "start": 222,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 196,
      "end": 309
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 321,
        "end": 326
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 333,
              "end": 335
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 337,
                "end": 343
              },
              "start": 335,
              "end": 343
            },
            "accessibility": null,
            "static": false,
            "start": 333,
            "end": 344
          }
        ],
        "start": 327,
        "end": 346
      },
      "declare": false,
      "start": 311,
      "end": 346
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 354,
        "end": 356
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
            "name": "IFoo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 368,
            "end": 373
          },
          "typeArguments": null,
          "start": 368,
          "end": 373
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 424,
              "end": 426
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 428,
                "end": 434
              },
              "start": 426,
              "end": 434
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 417,
            "end": 435
          }
        ],
        "start": 374,
        "end": 437
      },
      "abstract": false,
      "declare": false,
      "start": 348,
      "end": 437
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IFoo4",
        "optional": false,
        "typeAnnotation": null,
        "start": 449,
        "end": 454
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 461,
              "end": 463
            },
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
                      "start": 467,
                      "end": 468
                    },
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
                              "start": 472,
                              "end": 473
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 475,
                                "end": 481
                              },
                              "start": 473,
                              "end": 481
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 472,
                            "end": 482
                          }
                        ],
                        "start": 470,
                        "end": 484
                      },
                      "start": 468,
                      "end": 484
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 467,
                    "end": 485
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
                      "start": 486,
                      "end": 487
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 489,
                        "end": 495
                      },
                      "start": 487,
                      "end": 495
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 486,
                    "end": 496
                  }
                ],
                "start": 465,
                "end": 498
              },
              "start": 463,
              "end": 498
            },
            "accessibility": null,
            "static": false,
            "start": 461,
            "end": 499
          }
        ],
        "start": 455,
        "end": 501
      },
      "declare": false,
      "start": 439,
      "end": 501
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
        "start": 509,
        "end": 511
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
            "name": "IFoo4",
            "optional": false,
            "typeAnnotation": null,
            "start": 523,
            "end": 528
          },
          "typeArguments": null,
          "start": 523,
          "end": 528
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
              "name": "p1",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 581
            },
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
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 585,
                      "end": 586
                    },
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
                              "start": 590,
                              "end": 591
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 593,
                                "end": 599
                              },
                              "start": 591,
                              "end": 599
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 590,
                            "end": 600
                          }
                        ],
                        "start": 588,
                        "end": 602
                      },
                      "start": 586,
                      "end": 602
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 585,
                    "end": 603
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 605
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 607,
                        "end": 613
                      },
                      "start": 605,
                      "end": 613
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 604,
                    "end": 614
                  }
                ],
                "start": 583,
                "end": 616
              },
              "start": 581,
              "end": 616
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 572,
            "end": 617
          }
        ],
        "start": 529,
        "end": 619
      },
      "abstract": false,
      "declare": false,
      "start": 503,
      "end": 619
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 630,
        "end": 633
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "IFoo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 642
              },
              "typeArguments": null,
              "start": 637,
              "end": 642
            },
            "start": 635,
            "end": 642
          },
          "start": 634,
          "end": 642
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 645,
          "end": 649
        },
        "start": 643,
        "end": 649
      },
      "body": null,
      "expression": false,
      "start": 621,
      "end": 650
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 660,
        "end": 663
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
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
                "name": "IFoo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 667,
                "end": 672
              },
              "typeArguments": null,
              "start": 667,
              "end": 672
            },
            "start": 665,
            "end": 672
          },
          "start": 664,
          "end": 672
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 675,
          "end": 679
        },
        "start": 673,
        "end": 679
      },
      "body": null,
      "expression": false,
      "start": 651,
      "end": 680
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "if1",
        "optional": false,
        "typeAnnotation": null,
        "start": 690,
        "end": 693
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
              "type": "TSAnyKeyword",
              "start": 697,
              "end": 700
            },
            "start": 695,
            "end": 700
          },
          "start": 694,
          "end": 700
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 702,
        "end": 705
      },
      "expression": false,
      "start": 681,
      "end": 705
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 716
                },
                "typeArguments": null,
                "start": 714,
                "end": 716
              },
              "start": 712,
              "end": 716
            },
            "start": 710,
            "end": 716
          },
          "init": null,
          "definite": false,
          "start": 710,
          "end": 716
        }
      ],
      "declare": false,
      "start": 706,
      "end": 717
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
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 728
                },
                "typeArguments": null,
                "start": 726,
                "end": 728
              },
              "start": 724,
              "end": 728
            },
            "start": 722,
            "end": 728
          },
          "init": null,
          "definite": false,
          "start": 722,
          "end": 728
        }
      ],
      "declare": false,
      "start": 718,
      "end": 729
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "if1",
          "optional": false,
          "typeAnnotation": null,
          "start": 730,
          "end": 733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 736
          }
        ],
        "optional": false,
        "start": 730,
        "end": 737
      },
      "directive": null,
      "start": 730,
      "end": 738
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 750,
        "end": 753
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
                    "start": 759,
                    "end": 760
                  },
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
                            "start": 764,
                            "end": 765
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 767,
                              "end": 773
                            },
                            "start": 765,
                            "end": 773
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 764,
                          "end": 774
                        }
                      ],
                      "start": 762,
                      "end": 776
                    },
                    "start": 760,
                    "end": 776
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 759,
                  "end": 777
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
                    "start": 778,
                    "end": 779
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 781,
                      "end": 787
                    },
                    "start": 779,
                    "end": 787
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 778,
                  "end": 788
                }
              ],
              "start": 757,
              "end": 790
            },
            "start": 755,
            "end": 790
          },
          "start": 754,
          "end": 790
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 793,
          "end": 799
        },
        "start": 791,
        "end": 799
      },
      "body": null,
      "expression": false,
      "start": 741,
      "end": 800
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 810,
        "end": 813
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
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 819,
                    "end": 820
                  },
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
                            "start": 824,
                            "end": 825
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 827,
                              "end": 833
                            },
                            "start": 825,
                            "end": 833
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 824,
                          "end": 834
                        }
                      ],
                      "start": 822,
                      "end": 836
                    },
                    "start": 820,
                    "end": 836
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 819,
                  "end": 837
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 838,
                    "end": 839
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 841,
                      "end": 847
                    },
                    "start": 839,
                    "end": 847
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 838,
                  "end": 848
                }
              ],
              "start": 817,
              "end": 850
            },
            "start": 815,
            "end": 850
          },
          "start": 814,
          "end": 850
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 853,
          "end": 859
        },
        "start": 851,
        "end": 859
      },
      "body": null,
      "expression": false,
      "start": 801,
      "end": 860
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "of1",
        "optional": false,
        "typeAnnotation": null,
        "start": 870,
        "end": 873
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
              "type": "TSAnyKeyword",
              "start": 877,
              "end": 880
            },
            "start": 875,
            "end": 880
          },
          "start": 874,
          "end": 880
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 891,
              "end": 895
            },
            "start": 884,
            "end": 896
          }
        ],
        "start": 882,
        "end": 898
      },
      "expression": false,
      "start": 861,
      "end": 898
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "of1",
          "optional": false,
          "typeAnnotation": null,
          "start": 900,
          "end": 903
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 906,
                  "end": 907
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 909,
                  "end": 910
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 906,
                "end": 910
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
                  "start": 912,
                  "end": 913
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 915,
                  "end": 916
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 912,
                "end": 916
              }
            ],
            "start": 904,
            "end": 918
          }
        ],
        "optional": false,
        "start": 900,
        "end": 919
      },
      "directive": null,
      "start": 900,
      "end": 920
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 932,
        "end": 936
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 945,
                    "end": 951
                  },
                  "start": 944,
                  "end": 951
                },
                "start": 941,
                "end": 951
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 953,
                "end": 959
              },
              "start": 952,
              "end": 959
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 940,
            "end": 960
          }
        ],
        "start": 937,
        "end": 962
      },
      "declare": false,
      "start": 922,
      "end": 962
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 973,
        "end": 976
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 986,
                  "end": 990
                },
                "start": 983,
                "end": 990
              },
              "start": 980,
              "end": 990
            },
            "start": 979,
            "end": 990
          },
          "start": 977,
          "end": 990
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 992,
        "end": 997
      },
      "expression": false,
      "start": 964,
      "end": 997
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 1008,
        "end": 1011
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
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IMap",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1025,
                        "end": 1029
                      },
                      "typeArguments": null,
                      "start": 1025,
                      "end": 1029
                    },
                    "start": 1024,
                    "end": 1029
                  },
                  "start": 1021,
                  "end": 1029
                },
                "init": null,
                "definite": false,
                "start": 1021,
                "end": 1029
              }
            ],
            "declare": false,
            "start": 1017,
            "end": 1030
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
                "start": 1032,
                "end": 1035
              },
              "typeArguments": null,
              "arguments": [
                {
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
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1046,
                            "end": 1049
                          },
                          "right": {
                            "type": "ObjectExpression",
                            "properties": [],
                            "start": 1052,
                            "end": 1054
                          },
                          "start": 1046,
                          "end": 1054
                        },
                        "directive": null,
                        "start": 1046,
                        "end": 1055
                      }
                    ],
                    "start": 1042,
                    "end": 1058
                  },
                  "id": null,
                  "generator": false,
                  "start": 1036,
                  "end": 1058
                }
              ],
              "optional": false,
              "start": 1032,
              "end": 1059
            },
            "directive": null,
            "start": 1032,
            "end": 1060
          }
        ],
        "start": 1014,
        "end": 1062
      },
      "expression": false,
      "start": 999,
      "end": 1062
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
            "name": "o1",
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
                      "start": 1074,
                      "end": 1075
                    },
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
                              "start": 1079,
                              "end": 1080
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 1082,
                                "end": 1088
                              },
                              "start": 1080,
                              "end": 1088
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 1079,
                            "end": 1089
                          }
                        ],
                        "start": 1077,
                        "end": 1091
                      },
                      "start": 1075,
                      "end": 1091
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1074,
                    "end": 1092
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
                      "start": 1093,
                      "end": 1094
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1096,
                        "end": 1102
                      },
                      "start": 1094,
                      "end": 1102
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1093,
                    "end": 1103
                  }
                ],
                "start": 1072,
                "end": 1105
              },
              "start": 1070,
              "end": 1105
            },
            "start": 1068,
            "end": 1105
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
                  "name": "e",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1111
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1113,
                  "end": 1114
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1110,
                "end": 1114
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
                  "start": 1116,
                  "end": 1117
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1119,
                  "end": 1120
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1116,
                "end": 1120
              }
            ],
            "start": 1108,
            "end": 1122
          },
          "definite": false,
          "start": 1068,
          "end": 1122
        }
      ],
      "declare": false,
      "start": 1064,
      "end": 1123
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1129,
            "end": 1131
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1137,
                      "end": 1138
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1140,
                      "end": 1141
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1137,
                    "end": 1141
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
                      "start": 1143,
                      "end": 1144
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1146,
                      "end": 1147
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1143,
                    "end": 1147
                  }
                ],
                "start": 1135,
                "end": 1149
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1154
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1156,
                      "end": 1157
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1153,
                    "end": 1157
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
                      "start": 1159,
                      "end": 1160
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1162,
                      "end": 1163
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1159,
                    "end": 1163
                  }
                ],
                "start": 1151,
                "end": 1165
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "e",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1172,
                      "end": 1173
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1169,
                    "end": 1173
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1175,
                      "end": 1176
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1178,
                      "end": 1179
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1175,
                    "end": 1179
                  }
                ],
                "start": 1167,
                "end": 1181
              }
            ],
            "start": 1134,
            "end": 1182
          },
          "definite": false,
          "start": 1129,
          "end": 1182
        }
      ],
      "declare": false,
      "start": 1125,
      "end": 1183
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
            "name": "i1c1",
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
                        "type": "TSStringKeyword",
                        "start": 1203,
                        "end": 1209
                      },
                      "start": 1201,
                      "end": 1209
                    },
                    "start": 1199,
                    "end": 1210
                  }
                ],
                "start": 1197,
                "end": 1212
              },
              "start": 1195,
              "end": 1212
            },
            "start": 1191,
            "end": 1212
          },
          "init": {
            "type": "Literal",
            "value": 5,
            "raw": "5",
            "start": 1215,
            "end": 1216
          },
          "definite": false,
          "start": 1191,
          "end": 1216
        }
      ],
      "declare": false,
      "start": 1187,
      "end": 1217
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
            "name": "fp1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 1233,
                    "end": 1236
                  },
                  "start": 1231,
                  "end": 1236
                },
                "start": 1228,
                "end": 1236
              },
              "start": 1226,
              "end": 1236
            },
            "start": 1223,
            "end": 1236
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
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1239,
                "end": 1240
              }
            ],
            "returnType": null,
            "body": {
              "type": "Literal",
              "value": 0,
              "raw": "0",
              "start": 1244,
              "end": 1245
            },
            "id": null,
            "generator": false,
            "start": 1239,
            "end": 1245
          },
          "definite": false,
          "start": 1223,
          "end": 1245
        }
      ],
      "declare": false,
      "start": 1219,
      "end": 1246
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1246
}
```
