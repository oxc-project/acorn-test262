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
        "name": "JustStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 225
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 239
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 242,
                    "end": 245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
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
                  "start": 242,
                  "end": 254
                }
              ],
              "start": 240,
              "end": 256
            },
            "abstract": false,
            "declare": false,
            "start": 232,
            "end": 256
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 268
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
                    "type": "Literal",
                    "value": "1.",
                    "raw": "'1.'",
                    "start": 271,
                    "end": 275
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 277,
                      "end": 283
                    },
                    "start": 275,
                    "end": 283
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
                  "start": 271,
                  "end": 284
                }
              ],
              "start": 269,
              "end": 286
            },
            "abstract": false,
            "declare": false,
            "start": 261,
            "end": 286
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
                        "start": 298,
                        "end": 299
                      },
                      "typeArguments": null,
                      "start": 298,
                      "end": 299
                    },
                    "start": 296,
                    "end": 299
                  },
                  "start": 295,
                  "end": 299
                },
                "init": null,
                "definite": false,
                "start": 295,
                "end": 299
              }
            ],
            "declare": false,
            "start": 291,
            "end": 300
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
                        "start": 312,
                        "end": 313
                      },
                      "typeArguments": null,
                      "start": 312,
                      "end": 313
                    },
                    "start": 310,
                    "end": 313
                  },
                  "start": 309,
                  "end": 313
                },
                "init": null,
                "definite": false,
                "start": 309,
                "end": 313
              }
            ],
            "declare": false,
            "start": 305,
            "end": 314
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 332
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 335,
                    "end": 338
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 340,
                      "end": 346
                    },
                    "start": 338,
                    "end": 346
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 335,
                  "end": 347
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 348,
                    "end": 351
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 354,
                      "end": 360
                    },
                    "start": 352,
                    "end": 360
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 348,
                  "end": 360
                }
              ],
              "start": 333,
              "end": 362
            },
            "declare": false,
            "start": 320,
            "end": 362
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 377,
              "end": 379
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
                    "type": "Literal",
                    "value": "1.0",
                    "raw": "'1.0'",
                    "start": 382,
                    "end": 387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 389,
                      "end": 395
                    },
                    "start": 387,
                    "end": 395
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 382,
                  "end": 396
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 400
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 403,
                      "end": 409
                    },
                    "start": 401,
                    "end": 409
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 397,
                  "end": 409
                }
              ],
              "start": 380,
              "end": 411
            },
            "declare": false,
            "start": 367,
            "end": 411
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
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 426
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 426
                    },
                    "start": 422,
                    "end": 426
                  },
                  "start": 420,
                  "end": 426
                },
                "init": null,
                "definite": false,
                "start": 420,
                "end": 426
              }
            ],
            "declare": false,
            "start": 416,
            "end": 427
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 440,
                        "end": 442
                      },
                      "typeArguments": null,
                      "start": 440,
                      "end": 442
                    },
                    "start": 438,
                    "end": 442
                  },
                  "start": 436,
                  "end": 442
                },
                "init": null,
                "definite": false,
                "start": 436,
                "end": 442
              }
            ],
            "declare": false,
            "start": 432,
            "end": 443
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
                            "type": "Literal",
                            "value": "1.",
                            "raw": "'1.'",
                            "start": 458,
                            "end": 462
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 464,
                              "end": 470
                            },
                            "start": 462,
                            "end": 470
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 458,
                          "end": 471
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 472,
                            "end": 475
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 478,
                              "end": 484
                            },
                            "start": 476,
                            "end": 484
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 472,
                          "end": 484
                        }
                      ],
                      "start": 456,
                      "end": 486
                    },
                    "start": 454,
                    "end": 486
                  },
                  "start": 453,
                  "end": 486
                },
                "init": null,
                "definite": false,
                "start": 453,
                "end": 486
              }
            ],
            "declare": false,
            "start": 449,
            "end": 486
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": "1.0",
                            "raw": "'1.0'",
                            "start": 500,
                            "end": 505
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 507,
                              "end": 513
                            },
                            "start": 505,
                            "end": 513
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 500,
                          "end": 514
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 515,
                            "end": 518
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 521,
                              "end": 527
                            },
                            "start": 519,
                            "end": 527
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 515,
                          "end": 527
                        }
                      ],
                      "start": 498,
                      "end": 529
                    },
                    "start": 496,
                    "end": 529
                  },
                  "start": 495,
                  "end": 529
                },
                "init": null,
                "definite": false,
                "start": 495,
                "end": 529
              }
            ],
            "declare": false,
            "start": 491,
            "end": 529
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 539,
                  "end": 541
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1.0",
                        "raw": "'1.0'",
                        "start": 546,
                        "end": 551
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 553,
                        "end": 555
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 546,
                      "end": 555
                    }
                  ],
                  "start": 544,
                  "end": 557
                },
                "definite": false,
                "start": 539,
                "end": 557
              }
            ],
            "declare": false,
            "start": 535,
            "end": 558
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 567,
                  "end": 569
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1",
                        "raw": "'1'",
                        "start": 574,
                        "end": 577
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 579,
                        "end": 581
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 574,
                      "end": 581
                    }
                  ],
                  "start": 572,
                  "end": 583
                },
                "definite": false,
                "start": 567,
                "end": 583
              }
            ],
            "declare": false,
            "start": 563,
            "end": 584
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 590,
                "end": 591
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 594,
                "end": 595
              },
              "start": 590,
              "end": 595
            },
            "directive": null,
            "start": 590,
            "end": 596
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
                "start": 601,
                "end": 602
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 605,
                "end": 606
              },
              "start": 601,
              "end": 606
            },
            "directive": null,
            "start": 601,
            "end": 607
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 613
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 618
              },
              "start": 612,
              "end": 618
            },
            "directive": null,
            "start": 612,
            "end": 619
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 634,
                "end": 636
              },
              "start": 630,
              "end": 636
            },
            "directive": null,
            "start": 630,
            "end": 637
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 645
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 648,
                "end": 650
              },
              "start": 643,
              "end": 650
            },
            "directive": null,
            "start": 643,
            "end": 651
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 656,
                "end": 658
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 661,
                "end": 663
              },
              "start": 656,
              "end": 663
            },
            "directive": null,
            "start": 656,
            "end": 664
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 669,
                "end": 671
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 674,
                "end": 675
              },
              "start": 669,
              "end": 675
            },
            "directive": null,
            "start": 669,
            "end": 676
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 681,
                "end": 683
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 686,
                "end": 687
              },
              "start": 681,
              "end": 687
            },
            "directive": null,
            "start": 681,
            "end": 688
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 693,
                "end": 695
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 700
              },
              "start": 693,
              "end": 700
            },
            "directive": null,
            "start": 693,
            "end": 701
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 707,
                "end": 708
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 711,
                "end": 712
              },
              "start": 707,
              "end": 712
            },
            "directive": null,
            "start": 707,
            "end": 713
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
                "start": 718,
                "end": 719
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 722,
                "end": 723
              },
              "start": 718,
              "end": 723
            },
            "directive": null,
            "start": 718,
            "end": 724
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 729,
                "end": 730
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 733,
                "end": 734
              },
              "start": 729,
              "end": 734
            },
            "directive": null,
            "start": 729,
            "end": 735
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 741
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 746
              },
              "start": 740,
              "end": 746
            },
            "directive": null,
            "start": 740,
            "end": 747
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 752,
                "end": 753
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 758
              },
              "start": 752,
              "end": 758
            },
            "directive": null,
            "start": 752,
            "end": 759
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 765,
                "end": 767
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 772
              },
              "start": 765,
              "end": 772
            },
            "directive": null,
            "start": 765,
            "end": 773
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 778,
                "end": 780
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 785
              },
              "start": 778,
              "end": 785
            },
            "directive": null,
            "start": 778,
            "end": 786
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 793
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 797
              },
              "start": 791,
              "end": 797
            },
            "directive": null,
            "start": 791,
            "end": 798
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 809,
                "end": 811
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 814,
                "end": 816
              },
              "start": 809,
              "end": 816
            },
            "directive": null,
            "start": 809,
            "end": 817
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 828,
                "end": 830
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 833,
                "end": 834
              },
              "start": 828,
              "end": 834
            },
            "directive": null,
            "start": 828,
            "end": 835
          }
        ],
        "start": 226,
        "end": 837
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 204,
      "end": 837
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumbersAndStrings",
        "optional": false,
        "typeAnnotation": null,
        "start": 849,
        "end": 866
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 879,
              "end": 880
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 883,
                    "end": 886
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 888,
                      "end": 894
                    },
                    "start": 886,
                    "end": 894
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
                  "start": 883,
                  "end": 895
                }
              ],
              "start": 881,
              "end": 897
            },
            "abstract": false,
            "declare": false,
            "start": 873,
            "end": 897
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 908,
              "end": 909
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 912,
                    "end": 913
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 915,
                      "end": 921
                    },
                    "start": 913,
                    "end": 921
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
                  "start": 912,
                  "end": 922
                }
              ],
              "start": 910,
              "end": 924
            },
            "abstract": false,
            "declare": false,
            "start": 902,
            "end": 924
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
                        "start": 936,
                        "end": 937
                      },
                      "typeArguments": null,
                      "start": 936,
                      "end": 937
                    },
                    "start": 934,
                    "end": 937
                  },
                  "start": 933,
                  "end": 937
                },
                "init": null,
                "definite": false,
                "start": 933,
                "end": 937
              }
            ],
            "declare": false,
            "start": 929,
            "end": 938
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
                        "start": 950,
                        "end": 951
                      },
                      "typeArguments": null,
                      "start": 950,
                      "end": 951
                    },
                    "start": 948,
                    "end": 951
                  },
                  "start": 947,
                  "end": 951
                },
                "init": null,
                "definite": false,
                "start": 947,
                "end": 951
              }
            ],
            "declare": false,
            "start": 943,
            "end": 952
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 968,
              "end": 970
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
                    "type": "Literal",
                    "value": "1",
                    "raw": "'1'",
                    "start": 973,
                    "end": 976
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 978,
                      "end": 984
                    },
                    "start": 976,
                    "end": 984
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 973,
                  "end": 985
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 986,
                    "end": 989
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 992,
                      "end": 998
                    },
                    "start": 990,
                    "end": 998
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 986,
                  "end": 998
                }
              ],
              "start": 971,
              "end": 1000
            },
            "declare": false,
            "start": 958,
            "end": 1000
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1015,
              "end": 1017
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
                    "type": "Literal",
                    "value": 1,
                    "raw": "1.0",
                    "start": 1020,
                    "end": 1023
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1025,
                      "end": 1031
                    },
                    "start": 1023,
                    "end": 1031
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1020,
                  "end": 1032
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1033,
                    "end": 1036
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1039,
                      "end": 1045
                    },
                    "start": 1037,
                    "end": 1045
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1033,
                  "end": 1045
                }
              ],
              "start": 1018,
              "end": 1047
            },
            "declare": false,
            "start": 1005,
            "end": 1047
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
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "S2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1060,
                        "end": 1062
                      },
                      "typeArguments": null,
                      "start": 1060,
                      "end": 1062
                    },
                    "start": 1058,
                    "end": 1062
                  },
                  "start": 1056,
                  "end": 1062
                },
                "init": null,
                "definite": false,
                "start": 1056,
                "end": 1062
              }
            ],
            "declare": false,
            "start": 1052,
            "end": 1063
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
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1076,
                        "end": 1078
                      },
                      "typeArguments": null,
                      "start": 1076,
                      "end": 1078
                    },
                    "start": 1074,
                    "end": 1078
                  },
                  "start": 1072,
                  "end": 1078
                },
                "init": null,
                "definite": false,
                "start": 1072,
                "end": 1078
              }
            ],
            "declare": false,
            "start": 1068,
            "end": 1079
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
                            "type": "Literal",
                            "value": "1.",
                            "raw": "'1.'",
                            "start": 1094,
                            "end": 1098
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1100,
                              "end": 1106
                            },
                            "start": 1098,
                            "end": 1106
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1094,
                          "end": 1107
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "bar",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1108,
                            "end": 1111
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1114,
                              "end": 1120
                            },
                            "start": 1112,
                            "end": 1120
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1108,
                          "end": 1120
                        }
                      ],
                      "start": 1092,
                      "end": 1122
                    },
                    "start": 1090,
                    "end": 1122
                  },
                  "start": 1089,
                  "end": 1122
                },
                "init": null,
                "definite": false,
                "start": 1089,
                "end": 1122
              }
            ],
            "declare": false,
            "start": 1085,
            "end": 1122
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
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1.0",
                            "start": 1136,
                            "end": 1139
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1141,
                              "end": 1147
                            },
                            "start": 1139,
                            "end": 1147
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1136,
                          "end": 1148
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "baz",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1149,
                            "end": 1152
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1155,
                              "end": 1161
                            },
                            "start": 1153,
                            "end": 1161
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1149,
                          "end": 1161
                        }
                      ],
                      "start": 1134,
                      "end": 1163
                    },
                    "start": 1132,
                    "end": 1163
                  },
                  "start": 1131,
                  "end": 1163
                },
                "init": null,
                "definite": false,
                "start": 1131,
                "end": 1163
              }
            ],
            "declare": false,
            "start": 1127,
            "end": 1163
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
                  "name": "a2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1173,
                  "end": 1175
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": "1.0",
                        "raw": "'1.0'",
                        "start": 1180,
                        "end": 1185
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1187,
                        "end": 1189
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1180,
                      "end": 1189
                    }
                  ],
                  "start": 1178,
                  "end": 1191
                },
                "definite": false,
                "start": 1173,
                "end": 1191
              }
            ],
            "declare": false,
            "start": 1169,
            "end": 1192
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
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1201,
                  "end": 1203
                },
                "init": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1.",
                        "start": 1208,
                        "end": 1210
                      },
                      "value": {
                        "type": "Literal",
                        "value": "",
                        "raw": "''",
                        "start": 1212,
                        "end": 1214
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1208,
                      "end": 1214
                    }
                  ],
                  "start": 1206,
                  "end": 1216
                },
                "definite": false,
                "start": 1201,
                "end": 1216
              }
            ],
            "declare": false,
            "start": 1197,
            "end": 1217
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1224
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1227,
                "end": 1228
              },
              "start": 1223,
              "end": 1228
            },
            "directive": null,
            "start": 1223,
            "end": 1229
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
                "start": 1240,
                "end": 1241
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1244,
                "end": 1245
              },
              "start": 1240,
              "end": 1245
            },
            "directive": null,
            "start": 1240,
            "end": 1246
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1258
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1261,
                "end": 1263
              },
              "start": 1257,
              "end": 1263
            },
            "directive": null,
            "start": 1257,
            "end": 1264
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1275,
                "end": 1276
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1279,
                "end": 1281
              },
              "start": 1275,
              "end": 1281
            },
            "directive": null,
            "start": 1275,
            "end": 1282
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1297,
                "end": 1299
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1302,
                "end": 1304
              },
              "start": 1297,
              "end": 1304
            },
            "directive": null,
            "start": 1297,
            "end": 1305
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1316,
                "end": 1318
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1321,
                "end": 1323
              },
              "start": 1316,
              "end": 1323
            },
            "directive": null,
            "start": 1316,
            "end": 1324
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1335,
                "end": 1337
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1341
              },
              "start": 1335,
              "end": 1341
            },
            "directive": null,
            "start": 1335,
            "end": 1342
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1354,
                "end": 1356
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1359,
                "end": 1360
              },
              "start": 1354,
              "end": 1360
            },
            "directive": null,
            "start": 1354,
            "end": 1361
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1372,
                "end": 1374
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1377,
                "end": 1379
              },
              "start": 1372,
              "end": 1379
            },
            "directive": null,
            "start": 1372,
            "end": 1380
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1395,
                "end": 1396
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1399,
                "end": 1400
              },
              "start": 1395,
              "end": 1400
            },
            "directive": null,
            "start": 1395,
            "end": 1401
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
                "start": 1415,
                "end": 1416
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1419,
                "end": 1420
              },
              "start": 1415,
              "end": 1420
            },
            "directive": null,
            "start": 1415,
            "end": 1421
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1435,
                "end": 1436
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1439,
                "end": 1440
              },
              "start": 1435,
              "end": 1440
            },
            "directive": null,
            "start": 1435,
            "end": 1441
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1455,
                "end": 1456
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1459,
                "end": 1461
              },
              "start": 1455,
              "end": 1461
            },
            "directive": null,
            "start": 1455,
            "end": 1462
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1476,
                "end": 1477
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1480,
                "end": 1482
              },
              "start": 1476,
              "end": 1482
            },
            "directive": null,
            "start": 1476,
            "end": 1483
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1497,
                "end": 1498
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1501,
                "end": 1503
              },
              "start": 1497,
              "end": 1503
            },
            "directive": null,
            "start": 1497,
            "end": 1504
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1519,
                "end": 1521
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1526
              },
              "start": 1519,
              "end": 1526
            },
            "directive": null,
            "start": 1519,
            "end": 1527
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1541,
                "end": 1543
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1546,
                "end": 1548
              },
              "start": 1541,
              "end": 1548
            },
            "directive": null,
            "start": 1541,
            "end": 1549
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1563,
                "end": 1565
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1568,
                "end": 1569
              },
              "start": 1563,
              "end": 1569
            },
            "directive": null,
            "start": 1563,
            "end": 1570
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1584,
                "end": 1586
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1589,
                "end": 1591
              },
              "start": 1584,
              "end": 1591
            },
            "directive": null,
            "start": 1584,
            "end": 1592
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1606,
                "end": 1608
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1611,
                "end": 1612
              },
              "start": 1606,
              "end": 1612
            },
            "directive": null,
            "start": 1606,
            "end": 1613
          }
        ],
        "start": 867,
        "end": 1624
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 839,
      "end": 1624
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 204,
  "end": 1624
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "JustStrings",
    "start": 214,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 226,
    "end": 227
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 232,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 238,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 240,
    "end": 241
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 242,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 247,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 255,
    "end": 256
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 261,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 269,
    "end": 270
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 271,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 277,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 291,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 305,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 320,
    "end": 329
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 330,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 333,
    "end": 334
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 335,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 340,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 348,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 351,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 354,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 367,
    "end": 376
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 377,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 389,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 397,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 403,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 416,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 420,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 424,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 426,
    "end": 427
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 432,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 436,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 440,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 449,
    "end": 452
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 453,
    "end": 454
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 472,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 475,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 476,
    "end": 477
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 478,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 485,
    "end": 486
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 491,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 498,
    "end": 499
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 500,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 505,
    "end": 506
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 507,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 515,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 521,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 535,
    "end": 538
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 539,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 544,
    "end": 545
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 551,
    "end": 552
  },
  {
    "type": "String",
    "value": "''",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 563,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 567,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 572,
    "end": 573
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 574,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "String",
    "value": "''",
    "start": 579,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 592,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 595,
    "end": 596
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 606,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 616,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 630,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 634,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 636,
    "end": 637
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 643,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 648,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 650,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 656,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 661,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 675,
    "end": 676
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 681,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 684,
    "end": 685
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 686,
    "end": 687
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 687,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 693,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 698,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 709,
    "end": 710
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 718,
    "end": 719
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 733,
    "end": 734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 744,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 746,
    "end": 747
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 752,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 754,
    "end": 755
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 756,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 758,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 765,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 770,
    "end": 772
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 772,
    "end": 773
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 778,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 783,
    "end": 785
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 785,
    "end": 786
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 794,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 796,
    "end": 797
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 797,
    "end": 798
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 809,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 812,
    "end": 813
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 814,
    "end": 816
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 816,
    "end": 817
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 831,
    "end": 832
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 834,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 836,
    "end": 837
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 839,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "NumbersAndStrings",
    "start": 849,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 873,
    "end": 878
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 879,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 883,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 886,
    "end": 887
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 888,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 894,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 896,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 902,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 908,
    "end": 909
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 910,
    "end": 911
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 912,
    "end": 913
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 915,
    "end": 921
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 921,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 923,
    "end": 924
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 929,
    "end": 932
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 934,
    "end": 935
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 937,
    "end": 938
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 943,
    "end": 946
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 958,
    "end": 967
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 968,
    "end": 970
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 971,
    "end": 972
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 973,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 978,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 984,
    "end": 985
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 986,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 992,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1005,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1015,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 1020,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1025,
    "end": 1031
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1031,
    "end": 1032
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1033,
    "end": 1036
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1036,
    "end": 1037
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1037,
    "end": 1038
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1039,
    "end": 1045
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1046,
    "end": 1047
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1052,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1056,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1060,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1068,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1072,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1076,
    "end": 1078
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1078,
    "end": 1079
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1085,
    "end": 1088
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "String",
    "value": "'1.'",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1100,
    "end": 1106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1106,
    "end": 1107
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1111,
    "end": 1112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1114,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1121,
    "end": 1122
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1127,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1132,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1134,
    "end": 1135
  },
  {
    "type": "Numeric",
    "value": "1.0",
    "start": 1136,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1141,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1149,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1155,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1162,
    "end": 1163
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1178,
    "end": 1179
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 1180,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "String",
    "value": "''",
    "start": 1187,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1197,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1201,
    "end": 1203
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1204,
    "end": 1205
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Numeric",
    "value": "1.",
    "start": 1208,
    "end": 1210
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "String",
    "value": "''",
    "start": 1212,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1216,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1223,
    "end": 1224
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1279,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1297,
    "end": 1299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1300,
    "end": 1301
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1302,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1316,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1321,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1335,
    "end": 1337
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1354,
    "end": 1356
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1357,
    "end": 1358
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1359,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1360,
    "end": 1361
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1372,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1375,
    "end": 1376
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1377,
    "end": 1379
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1379,
    "end": 1380
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1399,
    "end": 1400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1415,
    "end": 1416
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1419,
    "end": 1420
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1435,
    "end": 1436
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1439,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1476,
    "end": 1477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1478,
    "end": 1479
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1480,
    "end": 1482
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1482,
    "end": 1483
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1497,
    "end": 1498
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1499,
    "end": 1500
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1501,
    "end": 1503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1519,
    "end": 1521
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1522,
    "end": 1523
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1524,
    "end": 1526
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1526,
    "end": 1527
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1541,
    "end": 1543
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1544,
    "end": 1545
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1546,
    "end": 1548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1548,
    "end": 1549
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1563,
    "end": 1565
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1568,
    "end": 1569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1569,
    "end": 1570
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1584,
    "end": 1586
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1589,
    "end": 1591
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1591,
    "end": 1592
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1606,
    "end": 1608
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1609,
    "end": 1610
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1611,
    "end": 1612
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1612,
    "end": 1613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1623,
    "end": 1624
  }
]
```
