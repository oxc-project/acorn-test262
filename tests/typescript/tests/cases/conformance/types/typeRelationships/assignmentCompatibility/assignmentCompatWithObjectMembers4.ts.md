__ESTREE_TEST__:PASS:
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
