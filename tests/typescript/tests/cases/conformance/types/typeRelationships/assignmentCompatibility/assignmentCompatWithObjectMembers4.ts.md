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
        "name": "OnlyDerived",
        "optional": false,
        "typeAnnotation": null,
        "start": 131,
        "end": 142
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
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 159
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 162,
                    "end": 165
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 167,
                      "end": 173
                    },
                    "start": 165,
                    "end": 173
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
                  "start": 162,
                  "end": 174
                }
              ],
              "start": 160,
              "end": 176
            },
            "abstract": false,
            "declare": false,
            "start": 149,
            "end": 176
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 187,
              "end": 194
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 207
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 210,
                    "end": 213
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 215,
                      "end": 221
                    },
                    "start": 213,
                    "end": 221
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
                  "start": 210,
                  "end": 222
                }
              ],
              "start": 208,
              "end": 224
            },
            "abstract": false,
            "declare": false,
            "start": 181,
            "end": 224
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
              "start": 235,
              "end": 243
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 256
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 259,
                    "end": 262
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 264,
                      "end": 270
                    },
                    "start": 262,
                    "end": 270
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
                  "start": 259,
                  "end": 271
                }
              ],
              "start": 257,
              "end": 273
            },
            "abstract": false,
            "declare": false,
            "start": 229,
            "end": 273
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 286
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 289,
                    "end": 292
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 294,
                        "end": 301
                      },
                      "typeArguments": null,
                      "start": 294,
                      "end": 301
                    },
                    "start": 292,
                    "end": 301
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
                  "start": 289,
                  "end": 302
                }
              ],
              "start": 287,
              "end": 304
            },
            "abstract": false,
            "declare": false,
            "start": 279,
            "end": 304
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
              "start": 315,
              "end": 316
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 319,
                    "end": 322
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 324,
                        "end": 332
                      },
                      "typeArguments": null,
                      "start": 324,
                      "end": 332
                    },
                    "start": 322,
                    "end": 332
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
                  "start": 319,
                  "end": 333
                }
              ],
              "start": 317,
              "end": 335
            },
            "abstract": false,
            "declare": false,
            "start": 309,
            "end": 335
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
                        "start": 347,
                        "end": 348
                      },
                      "typeArguments": null,
                      "start": 347,
                      "end": 348
                    },
                    "start": 345,
                    "end": 348
                  },
                  "start": 344,
                  "end": 348
                },
                "init": null,
                "definite": false,
                "start": 344,
                "end": 348
              }
            ],
            "declare": false,
            "start": 340,
            "end": 349
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
                        "start": 361,
                        "end": 362
                      },
                      "typeArguments": null,
                      "start": 361,
                      "end": 362
                    },
                    "start": 359,
                    "end": 362
                  },
                  "start": 358,
                  "end": 362
                },
                "init": null,
                "definite": false,
                "start": 358,
                "end": 362
              }
            ],
            "declare": false,
            "start": 354,
            "end": 363
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 381
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 387
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 396
                      },
                      "typeArguments": null,
                      "start": 389,
                      "end": 396
                    },
                    "start": 387,
                    "end": 396
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 384,
                  "end": 397
                }
              ],
              "start": 382,
              "end": 399
            },
            "declare": false,
            "start": 369,
            "end": 399
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 416
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 419,
                    "end": 422
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 424,
                        "end": 432
                      },
                      "typeArguments": null,
                      "start": 424,
                      "end": 432
                    },
                    "start": 422,
                    "end": 432
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 419,
                  "end": 433
                }
              ],
              "start": 417,
              "end": 435
            },
            "declare": false,
            "start": 404,
            "end": 435
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
                        "start": 448,
                        "end": 450
                      },
                      "typeArguments": null,
                      "start": 448,
                      "end": 450
                    },
                    "start": 446,
                    "end": 450
                  },
                  "start": 444,
                  "end": 450
                },
                "init": null,
                "definite": false,
                "start": 444,
                "end": 450
              }
            ],
            "declare": false,
            "start": 440,
            "end": 451
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
                        "start": 464,
                        "end": 466
                      },
                      "typeArguments": null,
                      "start": 464,
                      "end": 466
                    },
                    "start": 462,
                    "end": 466
                  },
                  "start": 460,
                  "end": 466
                },
                "init": null,
                "definite": false,
                "start": 460,
                "end": 466
              }
            ],
            "declare": false,
            "start": 456,
            "end": 467
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 482,
                            "end": 485
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 487,
                                "end": 494
                              },
                              "typeArguments": null,
                              "start": 487,
                              "end": 494
                            },
                            "start": 485,
                            "end": 494
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 482,
                          "end": 495
                        }
                      ],
                      "start": 480,
                      "end": 497
                    },
                    "start": 478,
                    "end": 497
                  },
                  "start": 477,
                  "end": 497
                },
                "init": null,
                "definite": false,
                "start": 477,
                "end": 497
              }
            ],
            "declare": false,
            "start": 473,
            "end": 497
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 511,
                            "end": 514
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 516,
                                "end": 524
                              },
                              "typeArguments": null,
                              "start": 516,
                              "end": 524
                            },
                            "start": 514,
                            "end": 524
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 511,
                          "end": 525
                        }
                      ],
                      "start": 509,
                      "end": 527
                    },
                    "start": 507,
                    "end": 527
                  },
                  "start": 506,
                  "end": 527
                },
                "init": null,
                "definite": false,
                "start": 506,
                "end": 527
              }
            ],
            "declare": false,
            "start": 502,
            "end": 527
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
                  "start": 537,
                  "end": 539
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 544,
                        "end": 547
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 560
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 549,
                        "end": 562
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 544,
                      "end": 562
                    }
                  ],
                  "start": 542,
                  "end": 564
                },
                "definite": false,
                "start": 537,
                "end": 564
              }
            ],
            "declare": false,
            "start": 533,
            "end": 565
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
                  "start": 574,
                  "end": 576
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 581,
                        "end": 584
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 590,
                          "end": 598
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 586,
                        "end": 600
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 581,
                      "end": 600
                    }
                  ],
                  "start": 579,
                  "end": 602
                },
                "definite": false,
                "start": 574,
                "end": 602
              }
            ],
            "declare": false,
            "start": 570,
            "end": 603
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
                "start": 609,
                "end": 610
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 614
              },
              "start": 609,
              "end": 614
            },
            "directive": null,
            "start": 609,
            "end": 615
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
                "start": 629,
                "end": 630
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 633,
                "end": 634
              },
              "start": 629,
              "end": 634
            },
            "directive": null,
            "start": 629,
            "end": 635
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
                "start": 649,
                "end": 650
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 655
              },
              "start": 649,
              "end": 655
            },
            "directive": null,
            "start": 649,
            "end": 656
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
                "start": 667,
                "end": 668
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 671,
                "end": 673
              },
              "start": 667,
              "end": 673
            },
            "directive": null,
            "start": 667,
            "end": 674
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
                "start": 686,
                "end": 688
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 691,
                "end": 693
              },
              "start": 686,
              "end": 693
            },
            "directive": null,
            "start": 686,
            "end": 694
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
                "start": 708,
                "end": 710
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 713,
                "end": 715
              },
              "start": 708,
              "end": 715
            },
            "directive": null,
            "start": 708,
            "end": 716
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
                "start": 730,
                "end": 732
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 735,
                "end": 736
              },
              "start": 730,
              "end": 736
            },
            "directive": null,
            "start": 730,
            "end": 737
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
                "start": 751,
                "end": 753
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 756,
                "end": 757
              },
              "start": 751,
              "end": 757
            },
            "directive": null,
            "start": 751,
            "end": 758
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
                "start": 772,
                "end": 774
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 777,
                "end": 779
              },
              "start": 772,
              "end": 779
            },
            "directive": null,
            "start": 772,
            "end": 780
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
                "start": 792,
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
              "start": 792,
              "end": 797
            },
            "directive": null,
            "start": 792,
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
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 812,
                "end": 813
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 816,
                "end": 817
              },
              "start": 812,
              "end": 817
            },
            "directive": null,
            "start": 812,
            "end": 818
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
                "start": 832,
                "end": 833
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 836,
                "end": 837
              },
              "start": 832,
              "end": 837
            },
            "directive": null,
            "start": 832,
            "end": 838
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
                "start": 849,
                "end": 850
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 853,
                "end": 855
              },
              "start": 849,
              "end": 855
            },
            "directive": null,
            "start": 849,
            "end": 856
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
                "start": 867,
                "end": 868
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 871,
                "end": 873
              },
              "start": 867,
              "end": 873
            },
            "directive": null,
            "start": 867,
            "end": 874
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
                "start": 886,
                "end": 888
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 891,
                "end": 893
              },
              "start": 886,
              "end": 893
            },
            "directive": null,
            "start": 886,
            "end": 894
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
                "start": 908,
                "end": 910
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 913,
                "end": 915
              },
              "start": 908,
              "end": 915
            },
            "directive": null,
            "start": 908,
            "end": 916
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
                "start": 930,
                "end": 932
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 935,
                "end": 936
              },
              "start": 930,
              "end": 936
            },
            "directive": null,
            "start": 930,
            "end": 937
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
                "start": 951,
                "end": 953
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 956,
                "end": 958
              },
              "start": 951,
              "end": 958
            },
            "directive": null,
            "start": 951,
            "end": 959
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
                "start": 973,
                "end": 975
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 978,
                "end": 979
              },
              "start": 973,
              "end": 979
            },
            "directive": null,
            "start": 973,
            "end": 980
          }
        ],
        "start": 143,
        "end": 991
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 121,
      "end": 991
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WithBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 1003,
        "end": 1011
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
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1024,
              "end": 1028
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1031,
                    "end": 1034
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1036,
                      "end": 1042
                    },
                    "start": 1034,
                    "end": 1042
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
                  "start": 1031,
                  "end": 1043
                }
              ],
              "start": 1029,
              "end": 1045
            },
            "abstract": false,
            "declare": false,
            "start": 1018,
            "end": 1045
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Derived",
              "optional": false,
              "typeAnnotation": null,
              "start": 1056,
              "end": 1063
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1072,
              "end": 1076
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1079,
                    "end": 1082
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1084,
                      "end": 1090
                    },
                    "start": 1082,
                    "end": 1090
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
                  "start": 1079,
                  "end": 1091
                }
              ],
              "start": 1077,
              "end": 1093
            },
            "abstract": false,
            "declare": false,
            "start": 1050,
            "end": 1093
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
              "start": 1104,
              "end": 1112
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "decorators": [],
              "name": "Base",
              "optional": false,
              "typeAnnotation": null,
              "start": 1121,
              "end": 1125
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
                    "name": "baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1128,
                    "end": 1131
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 1133,
                      "end": 1139
                    },
                    "start": 1131,
                    "end": 1139
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
                  "start": 1128,
                  "end": 1140
                }
              ],
              "start": 1126,
              "end": 1142
            },
            "abstract": false,
            "declare": false,
            "start": 1098,
            "end": 1142
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 1154,
              "end": 1155
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1158,
                    "end": 1161
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1163,
                        "end": 1167
                      },
                      "typeArguments": null,
                      "start": 1163,
                      "end": 1167
                    },
                    "start": 1161,
                    "end": 1167
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
                  "start": 1158,
                  "end": 1168
                }
              ],
              "start": 1156,
              "end": 1170
            },
            "abstract": false,
            "declare": false,
            "start": 1148,
            "end": 1170
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
              "start": 1181,
              "end": 1182
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1188
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1190,
                        "end": 1198
                      },
                      "typeArguments": null,
                      "start": 1190,
                      "end": 1198
                    },
                    "start": 1188,
                    "end": 1198
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
                  "start": 1185,
                  "end": 1199
                }
              ],
              "start": 1183,
              "end": 1201
            },
            "abstract": false,
            "declare": false,
            "start": 1175,
            "end": 1201
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
                        "start": 1213,
                        "end": 1214
                      },
                      "typeArguments": null,
                      "start": 1213,
                      "end": 1214
                    },
                    "start": 1211,
                    "end": 1214
                  },
                  "start": 1210,
                  "end": 1214
                },
                "init": null,
                "definite": false,
                "start": 1210,
                "end": 1214
              }
            ],
            "declare": false,
            "start": 1206,
            "end": 1215
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
                        "start": 1227,
                        "end": 1228
                      },
                      "typeArguments": null,
                      "start": 1227,
                      "end": 1228
                    },
                    "start": 1225,
                    "end": 1228
                  },
                  "start": 1224,
                  "end": 1228
                },
                "init": null,
                "definite": false,
                "start": 1224,
                "end": 1228
              }
            ],
            "declare": false,
            "start": 1220,
            "end": 1229
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "S2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1245,
              "end": 1247
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1250,
                    "end": 1253
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1255,
                        "end": 1259
                      },
                      "typeArguments": null,
                      "start": 1255,
                      "end": 1259
                    },
                    "start": 1253,
                    "end": 1259
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1250,
                  "end": 1260
                }
              ],
              "start": 1248,
              "end": 1262
            },
            "declare": false,
            "start": 1235,
            "end": 1262
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 1277,
              "end": 1279
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
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1282,
                    "end": 1285
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1287,
                        "end": 1295
                      },
                      "typeArguments": null,
                      "start": 1287,
                      "end": 1295
                    },
                    "start": 1285,
                    "end": 1295
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1282,
                  "end": 1296
                }
              ],
              "start": 1280,
              "end": 1298
            },
            "declare": false,
            "start": 1267,
            "end": 1298
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
                        "start": 1311,
                        "end": 1313
                      },
                      "typeArguments": null,
                      "start": 1311,
                      "end": 1313
                    },
                    "start": 1309,
                    "end": 1313
                  },
                  "start": 1307,
                  "end": 1313
                },
                "init": null,
                "definite": false,
                "start": 1307,
                "end": 1313
              }
            ],
            "declare": false,
            "start": 1303,
            "end": 1314
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
                        "start": 1327,
                        "end": 1329
                      },
                      "typeArguments": null,
                      "start": 1327,
                      "end": 1329
                    },
                    "start": 1325,
                    "end": 1329
                  },
                  "start": 1323,
                  "end": 1329
                },
                "init": null,
                "definite": false,
                "start": 1323,
                "end": 1329
              }
            ],
            "declare": false,
            "start": 1319,
            "end": 1330
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1345,
                            "end": 1348
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Base",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1350,
                                "end": 1354
                              },
                              "typeArguments": null,
                              "start": 1350,
                              "end": 1354
                            },
                            "start": 1348,
                            "end": 1354
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1345,
                          "end": 1355
                        }
                      ],
                      "start": 1343,
                      "end": 1357
                    },
                    "start": 1341,
                    "end": 1357
                  },
                  "start": 1340,
                  "end": 1357
                },
                "init": null,
                "definite": false,
                "start": 1340,
                "end": 1357
              }
            ],
            "declare": false,
            "start": 1336,
            "end": 1357
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1371,
                            "end": 1374
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1376,
                                "end": 1384
                              },
                              "typeArguments": null,
                              "start": 1376,
                              "end": 1384
                            },
                            "start": 1374,
                            "end": 1384
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1371,
                          "end": 1385
                        }
                      ],
                      "start": 1369,
                      "end": 1387
                    },
                    "start": 1367,
                    "end": 1387
                  },
                  "start": 1366,
                  "end": 1387
                },
                "init": null,
                "definite": false,
                "start": 1366,
                "end": 1387
              }
            ],
            "declare": false,
            "start": 1362,
            "end": 1387
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
                  "start": 1397,
                  "end": 1399
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1404,
                        "end": 1407
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Base",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1413,
                          "end": 1417
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1409,
                        "end": 1419
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1404,
                      "end": 1419
                    }
                  ],
                  "start": 1402,
                  "end": 1421
                },
                "definite": false,
                "start": 1397,
                "end": 1421
              }
            ],
            "declare": false,
            "start": 1393,
            "end": 1422
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
                  "start": 1431,
                  "end": 1433
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
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1441
                      },
                      "value": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1447,
                          "end": 1455
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 1443,
                        "end": 1457
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1438,
                      "end": 1457
                    }
                  ],
                  "start": 1436,
                  "end": 1459
                },
                "definite": false,
                "start": 1431,
                "end": 1459
              }
            ],
            "declare": false,
            "start": 1427,
            "end": 1460
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
                "start": 1466,
                "end": 1467
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1470,
                "end": 1471
              },
              "start": 1466,
              "end": 1471
            },
            "directive": null,
            "start": 1466,
            "end": 1472
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
                "start": 1483,
                "end": 1484
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1487,
                "end": 1488
              },
              "start": 1483,
              "end": 1488
            },
            "directive": null,
            "start": 1483,
            "end": 1489
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
                "start": 1503,
                "end": 1504
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1507,
                "end": 1509
              },
              "start": 1503,
              "end": 1509
            },
            "directive": null,
            "start": 1503,
            "end": 1510
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
                "start": 1521,
                "end": 1522
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1525,
                "end": 1527
              },
              "start": 1521,
              "end": 1527
            },
            "directive": null,
            "start": 1521,
            "end": 1528
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
                "start": 1540,
                "end": 1542
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1545,
                "end": 1547
              },
              "start": 1540,
              "end": 1547
            },
            "directive": null,
            "start": 1540,
            "end": 1548
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
                "start": 1559,
                "end": 1561
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1564,
                "end": 1566
              },
              "start": 1559,
              "end": 1566
            },
            "directive": null,
            "start": 1559,
            "end": 1567
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
                "start": 1581,
                "end": 1583
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1586,
                "end": 1587
              },
              "start": 1581,
              "end": 1587
            },
            "directive": null,
            "start": 1581,
            "end": 1588
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
                "start": 1599,
                "end": 1601
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1604,
                "end": 1605
              },
              "start": 1599,
              "end": 1605
            },
            "directive": null,
            "start": 1599,
            "end": 1606
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
                "start": 1617,
                "end": 1619
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1622,
                "end": 1624
              },
              "start": 1617,
              "end": 1624
            },
            "directive": null,
            "start": 1617,
            "end": 1625
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
                "start": 1637,
                "end": 1638
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1641,
                "end": 1642
              },
              "start": 1637,
              "end": 1642
            },
            "directive": null,
            "start": 1637,
            "end": 1643
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
                "start": 1654,
                "end": 1655
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1658,
                "end": 1659
              },
              "start": 1654,
              "end": 1659
            },
            "directive": null,
            "start": 1654,
            "end": 1660
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
                "start": 1674,
                "end": 1675
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 1678,
                "end": 1679
              },
              "start": 1674,
              "end": 1679
            },
            "directive": null,
            "start": 1674,
            "end": 1680
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
                "start": 1691,
                "end": 1692
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "s2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1697
              },
              "start": 1691,
              "end": 1697
            },
            "directive": null,
            "start": 1691,
            "end": 1698
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
                "start": 1709,
                "end": 1710
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1713,
                "end": 1715
              },
              "start": 1709,
              "end": 1715
            },
            "directive": null,
            "start": 1709,
            "end": 1716
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
                "start": 1728,
                "end": 1730
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1733,
                "end": 1735
              },
              "start": 1728,
              "end": 1735
            },
            "directive": null,
            "start": 1728,
            "end": 1736
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
                "start": 1747,
                "end": 1749
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1752,
                "end": 1754
              },
              "start": 1747,
              "end": 1754
            },
            "directive": null,
            "start": 1747,
            "end": 1755
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
                "start": 1769,
                "end": 1771
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1774,
                "end": 1775
              },
              "start": 1769,
              "end": 1775
            },
            "directive": null,
            "start": 1769,
            "end": 1776
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
                "start": 1787,
                "end": 1789
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1792,
                "end": 1794
              },
              "start": 1787,
              "end": 1794
            },
            "directive": null,
            "start": 1787,
            "end": 1795
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
                "start": 1806,
                "end": 1808
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 1811,
                "end": 1812
              },
              "start": 1806,
              "end": 1812
            },
            "directive": null,
            "start": 1806,
            "end": 1813
          }
        ],
        "start": 1012,
        "end": 1821
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 993,
      "end": 1821
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 121,
  "end": 1821
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "OnlyDerived",
    "start": 131,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 149,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 160,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 162,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 167,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 181,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 187,
    "end": 194
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 195,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 203,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 208,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 210,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 215,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 235,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 244,
    "end": 251
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 252,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 264,
    "end": 270
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 270,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 279,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 289,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 294,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 303,
    "end": 304
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 309,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 319,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 324,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 334,
    "end": 335
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 340,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 344,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 348,
    "end": 349
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 354,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 369,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 379,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 384,
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
    "value": "Derived",
    "start": 389,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 398,
    "end": 399
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 404,
    "end": 413
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 414,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 419,
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
    "value": "Derived2",
    "start": 424,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 434,
    "end": 435
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 440,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 444,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 446,
    "end": 447
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 448,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 450,
    "end": 451
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 456,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 460,
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
    "value": "T2",
    "start": 464,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 473,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 480,
    "end": 481
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 482,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 487,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 511,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 514,
    "end": 515
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 516,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 524,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 533,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 537,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 553,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 560,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 570,
    "end": 573
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 574,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 577,
    "end": 578
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 579,
    "end": 580
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 581,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 590,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 611,
    "end": 612
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 649,
    "end": 650
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 653,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 667,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 671,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 686,
    "end": 688
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 689,
    "end": 690
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 708,
    "end": 710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 711,
    "end": 712
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 713,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 730,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 735,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 736,
    "end": 737
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 751,
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
    "value": "b",
    "start": 756,
    "end": 757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 757,
    "end": 758
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 772,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 777,
    "end": 779
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 779,
    "end": 780
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 792,
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
    "value": "b",
    "start": 812,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 814,
    "end": 815
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 816,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 817,
    "end": 818
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 834,
    "end": 835
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 837,
    "end": 838
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 849,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 851,
    "end": 852
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 853,
    "end": 855
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 869,
    "end": 870
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 871,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 873,
    "end": 874
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 886,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 891,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 908,
    "end": 910
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 913,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 930,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 951,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 956,
    "end": 958
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 958,
    "end": 959
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 973,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 978,
    "end": 979
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 979,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 990,
    "end": 991
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 993,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "WithBase",
    "start": 1003,
    "end": 1011
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1012,
    "end": 1013
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1018,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1024,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1031,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1036,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1044,
    "end": 1045
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1050,
    "end": 1055
  },
  {
    "type": "Identifier",
    "value": "Derived",
    "start": 1056,
    "end": 1063
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1064,
    "end": 1071
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1072,
    "end": 1076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 1079,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1084,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1098,
    "end": 1103
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1104,
    "end": 1112
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1113,
    "end": 1120
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1121,
    "end": 1125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Identifier",
    "value": "baz",
    "start": 1128,
    "end": 1131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1133,
    "end": 1139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1139,
    "end": 1140
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1141,
    "end": 1142
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1148,
    "end": 1153
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1154,
    "end": 1155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1158,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1163,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1169,
    "end": 1170
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1175,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1185,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1190,
    "end": 1198
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1198,
    "end": 1199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1200,
    "end": 1201
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1206,
    "end": 1209
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1210,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1214,
    "end": 1215
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1220,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1224,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "interface",
    "start": 1235,
    "end": 1244
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1245,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1248,
    "end": 1249
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1250,
    "end": 1253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1253,
    "end": 1254
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1255,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1267,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1277,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1282,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1287,
    "end": 1295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1295,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1303,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1309,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "S2",
    "start": 1311,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1319,
    "end": 1322
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1323,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 1327,
    "end": 1329
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1336,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1340,
    "end": 1341
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1341,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1345,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1348,
    "end": 1349
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1350,
    "end": 1354
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1354,
    "end": 1355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1356,
    "end": 1357
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1362,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1366,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1371,
    "end": 1374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1374,
    "end": 1375
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1376,
    "end": 1384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1384,
    "end": 1385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1393,
    "end": 1396
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1397,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1402,
    "end": 1403
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1404,
    "end": 1407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1407,
    "end": 1408
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1409,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 1413,
    "end": 1417
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1417,
    "end": 1418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1418,
    "end": 1419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1420,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1421,
    "end": 1422
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1427,
    "end": 1430
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1431,
    "end": 1433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1434,
    "end": 1435
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1436,
    "end": 1437
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1438,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1443,
    "end": 1446
  },
  {
    "type": "Identifier",
    "value": "Derived2",
    "start": 1447,
    "end": 1455
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1455,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1466,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1471,
    "end": 1472
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1483,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1485,
    "end": 1486
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1487,
    "end": 1488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1488,
    "end": 1489
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1503,
    "end": 1504
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1507,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1509,
    "end": 1510
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1521,
    "end": 1522
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1523,
    "end": 1524
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1525,
    "end": 1527
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1527,
    "end": 1528
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1540,
    "end": 1542
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1543,
    "end": 1544
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1545,
    "end": 1547
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1547,
    "end": 1548
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1559,
    "end": 1561
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1562,
    "end": 1563
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1564,
    "end": 1566
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1566,
    "end": 1567
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1581,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1584,
    "end": 1585
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1586,
    "end": 1587
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1587,
    "end": 1588
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1599,
    "end": 1601
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1605,
    "end": 1606
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1617,
    "end": 1619
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1620,
    "end": 1621
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1622,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1637,
    "end": 1638
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1641,
    "end": 1642
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1654,
    "end": 1655
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1656,
    "end": 1657
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1659,
    "end": 1660
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1674,
    "end": 1675
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1676,
    "end": 1677
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 1678,
    "end": 1679
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1679,
    "end": 1680
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1693,
    "end": 1694
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 1695,
    "end": 1697
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1697,
    "end": 1698
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1709,
    "end": 1710
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1711,
    "end": 1712
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1713,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1728,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1731,
    "end": 1732
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1733,
    "end": 1735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1735,
    "end": 1736
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 1747,
    "end": 1749
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1750,
    "end": 1751
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1752,
    "end": 1754
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1769,
    "end": 1771
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1772,
    "end": 1773
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1774,
    "end": 1775
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1775,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1787,
    "end": 1789
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1790,
    "end": 1791
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 1792,
    "end": 1794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1794,
    "end": 1795
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 1806,
    "end": 1808
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1809,
    "end": 1810
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1811,
    "end": 1812
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1820,
    "end": 1821
  }
]
```
