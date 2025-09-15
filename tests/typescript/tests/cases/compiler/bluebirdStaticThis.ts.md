__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 259
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "R",
                "optional": false,
                "typeAnnotation": null,
                "start": 260,
                "end": 261
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 260,
              "end": 261
            }
          ],
          "start": 259,
          "end": 262
        },
        "superClass": null,
        "superTypeArguments": null,
        "implements": [
          {
            "type": "TSClassImplements",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 281
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Thenable",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 290
              },
              "optional": false,
              "computed": false,
              "start": 274,
              "end": 290
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 291,
                    "end": 292
                  },
                  "typeArguments": null,
                  "start": 291,
                  "end": 292
                }
              ],
              "start": 290,
              "end": 293
            },
            "start": 274,
            "end": 293
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
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null,
                "start": 297,
                "end": 308
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "callback",
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
                            "name": "resolve",
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
                                    "name": "thenableOrResult",
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
                                              "name": "R",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 348,
                                              "end": 349
                                            },
                                            "typeArguments": null,
                                            "start": 348,
                                            "end": 349
                                          },
                                          {
                                            "type": "TSTypeReference",
                                            "typeName": {
                                              "type": "TSQualifiedName",
                                              "left": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Promise",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 352,
                                                "end": 359
                                              },
                                              "right": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "Thenable",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 360,
                                                "end": 368
                                              },
                                              "start": 352,
                                              "end": 368
                                            },
                                            "typeArguments": {
                                              "type": "TSTypeParameterInstantiation",
                                              "params": [
                                                {
                                                  "type": "TSTypeReference",
                                                  "typeName": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "R",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 369,
                                                    "end": 370
                                                  },
                                                  "typeArguments": null,
                                                  "start": 369,
                                                  "end": 370
                                                }
                                              ],
                                              "start": 368,
                                              "end": 371
                                            },
                                            "start": 352,
                                            "end": 371
                                          }
                                        ],
                                        "start": 348,
                                        "end": 371
                                      },
                                      "start": 346,
                                      "end": 371
                                    },
                                    "start": 330,
                                    "end": 371
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 376,
                                    "end": 380
                                  },
                                  "start": 373,
                                  "end": 380
                                },
                                "start": 329,
                                "end": 380
                              },
                              "start": 327,
                              "end": 380
                            },
                            "start": 320,
                            "end": 380
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "reject",
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
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSAnyKeyword",
                                        "start": 398,
                                        "end": 401
                                      },
                                      "start": 396,
                                      "end": 401
                                    },
                                    "start": 391,
                                    "end": 401
                                  }
                                ],
                                "returnType": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSVoidKeyword",
                                    "start": 406,
                                    "end": 410
                                  },
                                  "start": 403,
                                  "end": 410
                                },
                                "start": 390,
                                "end": 410
                              },
                              "start": 388,
                              "end": 410
                            },
                            "start": 382,
                            "end": 410
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 415,
                            "end": 419
                          },
                          "start": 412,
                          "end": 419
                        },
                        "start": 319,
                        "end": 419
                      },
                      "start": 317,
                      "end": 419
                    },
                    "start": 309,
                    "end": 419
                  }
                ],
                "returnType": null,
                "body": null,
                "expression": false,
                "start": 308,
                "end": 421
              },
              "kind": "constructor",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 297,
              "end": 421
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 433,
                "end": 436
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 437,
                        "end": 438
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 437,
                      "end": 438
                    }
                  ],
                  "start": 436,
                  "end": 439
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 452,
                          "end": 459
                        },
                        "typeArguments": null,
                        "start": 445,
                        "end": 459
                      },
                      "start": 443,
                      "end": 459
                    },
                    "start": 440,
                    "end": 459
                  },
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 471,
                                "end": 478
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 479,
                                "end": 487
                              },
                              "start": 471,
                              "end": 487
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 488,
                                    "end": 489
                                  },
                                  "typeArguments": null,
                                  "start": 488,
                                  "end": 489
                                }
                              ],
                              "start": 487,
                              "end": 490
                            },
                            "start": 471,
                            "end": 490
                          },
                          "start": 468,
                          "end": 490
                        },
                        "start": 465,
                        "end": 490
                      },
                      "start": 463,
                      "end": 490
                    },
                    "start": 461,
                    "end": 490
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 499,
                          "end": 502
                        },
                        "start": 499,
                        "end": 504
                      },
                      "start": 497,
                      "end": 504
                    },
                    "start": 492,
                    "end": 504
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 512,
                        "end": 515
                      },
                      "start": 510,
                      "end": 515
                    },
                    "start": 506,
                    "end": 515
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 518,
                      "end": 525
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 526,
                            "end": 527
                          },
                          "typeArguments": null,
                          "start": 526,
                          "end": 527
                        }
                      ],
                      "start": 525,
                      "end": 528
                    },
                    "start": 518,
                    "end": 528
                  },
                  "start": 516,
                  "end": 528
                },
                "body": null,
                "expression": false,
                "start": 436,
                "end": 529
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 426,
              "end": 529
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "try",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 544
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 545,
                        "end": 546
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 545,
                      "end": 546
                    }
                  ],
                  "start": 544,
                  "end": 547
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 560,
                          "end": 567
                        },
                        "typeArguments": null,
                        "start": 553,
                        "end": 567
                      },
                      "start": 551,
                      "end": 567
                    },
                    "start": 548,
                    "end": 567
                  },
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 579,
                              "end": 580
                            },
                            "typeArguments": null,
                            "start": 579,
                            "end": 580
                          },
                          "start": 576,
                          "end": 580
                        },
                        "start": 573,
                        "end": 580
                      },
                      "start": 571,
                      "end": 580
                    },
                    "start": 569,
                    "end": 580
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 589,
                          "end": 592
                        },
                        "start": 589,
                        "end": 594
                      },
                      "start": 587,
                      "end": 594
                    },
                    "start": 582,
                    "end": 594
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 602,
                        "end": 605
                      },
                      "start": 600,
                      "end": 605
                    },
                    "start": 596,
                    "end": 605
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 615
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 617
                          },
                          "typeArguments": null,
                          "start": 616,
                          "end": 617
                        }
                      ],
                      "start": 615,
                      "end": 618
                    },
                    "start": 608,
                    "end": 618
                  },
                  "start": 606,
                  "end": 618
                },
                "body": null,
                "expression": false,
                "start": 544,
                "end": 619
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 534,
              "end": 619
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 639
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 640,
                        "end": 641
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 640,
                      "end": 641
                    }
                  ],
                  "start": 639,
                  "end": 642
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 662
                        },
                        "typeArguments": null,
                        "start": 648,
                        "end": 662
                      },
                      "start": 646,
                      "end": 662
                    },
                    "start": 643,
                    "end": 662
                  },
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 674,
                                "end": 681
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 682,
                                "end": 690
                              },
                              "start": 674,
                              "end": 690
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 691,
                                    "end": 692
                                  },
                                  "typeArguments": null,
                                  "start": 691,
                                  "end": 692
                                }
                              ],
                              "start": 690,
                              "end": 693
                            },
                            "start": 674,
                            "end": 693
                          },
                          "start": 671,
                          "end": 693
                        },
                        "start": 668,
                        "end": 693
                      },
                      "start": 666,
                      "end": 693
                    },
                    "start": 664,
                    "end": 693
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 702,
                          "end": 705
                        },
                        "start": 702,
                        "end": 707
                      },
                      "start": 700,
                      "end": 707
                    },
                    "start": 695,
                    "end": 707
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 715,
                        "end": 718
                      },
                      "start": 713,
                      "end": 718
                    },
                    "start": 709,
                    "end": 718
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 728
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 729,
                            "end": 730
                          },
                          "typeArguments": null,
                          "start": 729,
                          "end": 730
                        }
                      ],
                      "start": 728,
                      "end": 731
                    },
                    "start": 721,
                    "end": 731
                  },
                  "start": 719,
                  "end": 731
                },
                "body": null,
                "expression": false,
                "start": 639,
                "end": 732
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 625,
              "end": 732
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "attempt",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 751
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 752,
                        "end": 753
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 752,
                      "end": 753
                    }
                  ],
                  "start": 751,
                  "end": 754
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 767,
                          "end": 774
                        },
                        "typeArguments": null,
                        "start": 760,
                        "end": 774
                      },
                      "start": 758,
                      "end": 774
                    },
                    "start": 755,
                    "end": 774
                  },
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
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 786,
                              "end": 787
                            },
                            "typeArguments": null,
                            "start": 786,
                            "end": 787
                          },
                          "start": 783,
                          "end": 787
                        },
                        "start": 780,
                        "end": 787
                      },
                      "start": 778,
                      "end": 787
                    },
                    "start": 776,
                    "end": 787
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 796,
                          "end": 799
                        },
                        "start": 796,
                        "end": 801
                      },
                      "start": 794,
                      "end": 801
                    },
                    "start": 789,
                    "end": 801
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ctx",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 809,
                        "end": 812
                      },
                      "start": 807,
                      "end": 812
                    },
                    "start": 803,
                    "end": 812
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 815,
                      "end": 822
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 823,
                            "end": 824
                          },
                          "typeArguments": null,
                          "start": 823,
                          "end": 824
                        }
                      ],
                      "start": 822,
                      "end": 825
                    },
                    "start": 815,
                    "end": 825
                  },
                  "start": 813,
                  "end": 825
                },
                "body": null,
                "expression": false,
                "start": 751,
                "end": 826
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 737,
              "end": 826
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null,
                "start": 839,
                "end": 845
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 858,
                          "end": 865
                        },
                        "typeArguments": null,
                        "start": 851,
                        "end": 865
                      },
                      "start": 849,
                      "end": 865
                    },
                    "start": 846,
                    "end": 865
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "fn",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 871,
                          "end": 879
                        },
                        "typeArguments": null,
                        "start": 871,
                        "end": 879
                      },
                      "start": 869,
                      "end": 879
                    },
                    "start": 867,
                    "end": 879
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 882,
                      "end": 890
                    },
                    "typeArguments": null,
                    "start": 882,
                    "end": 890
                  },
                  "start": 880,
                  "end": 890
                },
                "body": null,
                "expression": false,
                "start": 845,
                "end": 891
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 832,
              "end": 891
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 904,
                "end": 911
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 924,
                          "end": 931
                        },
                        "typeArguments": null,
                        "start": 917,
                        "end": 931
                      },
                      "start": 915,
                      "end": 931
                    },
                    "start": 912,
                    "end": 931
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 934,
                      "end": 941
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 942,
                          "end": 946
                        }
                      ],
                      "start": 941,
                      "end": 947
                    },
                    "start": 934,
                    "end": 947
                  },
                  "start": 932,
                  "end": 947
                },
                "body": null,
                "expression": false,
                "start": 911,
                "end": 948
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 897,
              "end": 948
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 960,
                "end": 967
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 968,
                        "end": 969
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 968,
                      "end": 969
                    }
                  ],
                  "start": 967,
                  "end": 970
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 983,
                          "end": 990
                        },
                        "typeArguments": null,
                        "start": 976,
                        "end": 990
                      },
                      "start": 974,
                      "end": 990
                    },
                    "start": 971,
                    "end": 990
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 999,
                            "end": 1006
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1007,
                            "end": 1015
                          },
                          "start": 999,
                          "end": 1015
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1016,
                                "end": 1017
                              },
                              "typeArguments": null,
                              "start": 1016,
                              "end": 1017
                            }
                          ],
                          "start": 1015,
                          "end": 1018
                        },
                        "start": 999,
                        "end": 1018
                      },
                      "start": 997,
                      "end": 1018
                    },
                    "start": 992,
                    "end": 1018
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1021,
                      "end": 1028
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1029,
                            "end": 1030
                          },
                          "typeArguments": null,
                          "start": 1029,
                          "end": 1030
                        }
                      ],
                      "start": 1028,
                      "end": 1031
                    },
                    "start": 1021,
                    "end": 1031
                  },
                  "start": 1019,
                  "end": 1031
                },
                "body": null,
                "expression": false,
                "start": 967,
                "end": 1032
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 953,
              "end": 1032
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "resolve",
                "optional": false,
                "typeAnnotation": null,
                "start": 1044,
                "end": 1051
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1052,
                        "end": 1053
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1052,
                      "end": 1053
                    }
                  ],
                  "start": 1051,
                  "end": 1054
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1067,
                          "end": 1074
                        },
                        "typeArguments": null,
                        "start": 1060,
                        "end": 1074
                      },
                      "start": 1058,
                      "end": 1074
                    },
                    "start": 1055,
                    "end": 1074
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1083,
                          "end": 1084
                        },
                        "typeArguments": null,
                        "start": 1083,
                        "end": 1084
                      },
                      "start": 1081,
                      "end": 1084
                    },
                    "start": 1076,
                    "end": 1084
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1087,
                      "end": 1094
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1095,
                            "end": 1096
                          },
                          "typeArguments": null,
                          "start": 1095,
                          "end": 1096
                        }
                      ],
                      "start": 1094,
                      "end": 1097
                    },
                    "start": 1087,
                    "end": 1097
                  },
                  "start": 1085,
                  "end": 1097
                },
                "body": null,
                "expression": false,
                "start": 1051,
                "end": 1098
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1037,
              "end": 1098
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1111,
                "end": 1117
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1130,
                          "end": 1137
                        },
                        "typeArguments": null,
                        "start": 1123,
                        "end": 1137
                      },
                      "start": 1121,
                      "end": 1137
                    },
                    "start": 1118,
                    "end": 1137
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1147,
                        "end": 1150
                      },
                      "start": 1145,
                      "end": 1150
                    },
                    "start": 1139,
                    "end": 1150
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1153,
                      "end": 1160
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSAnyKeyword",
                          "start": 1161,
                          "end": 1164
                        }
                      ],
                      "start": 1160,
                      "end": 1165
                    },
                    "start": 1153,
                    "end": 1165
                  },
                  "start": 1151,
                  "end": 1165
                },
                "body": null,
                "expression": false,
                "start": 1117,
                "end": 1166
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1104,
              "end": 1166
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reject",
                "optional": false,
                "typeAnnotation": null,
                "start": 1178,
                "end": 1184
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1185,
                        "end": 1186
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1185,
                      "end": 1186
                    }
                  ],
                  "start": 1184,
                  "end": 1187
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1200,
                          "end": 1207
                        },
                        "typeArguments": null,
                        "start": 1193,
                        "end": 1207
                      },
                      "start": 1191,
                      "end": 1207
                    },
                    "start": 1188,
                    "end": 1207
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reason",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1217,
                        "end": 1220
                      },
                      "start": 1215,
                      "end": 1220
                    },
                    "start": 1209,
                    "end": 1220
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1223,
                      "end": 1230
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1231,
                            "end": 1232
                          },
                          "typeArguments": null,
                          "start": 1231,
                          "end": 1232
                        }
                      ],
                      "start": 1230,
                      "end": 1233
                    },
                    "start": 1223,
                    "end": 1233
                  },
                  "start": 1221,
                  "end": 1233
                },
                "body": null,
                "expression": false,
                "start": 1184,
                "end": 1234
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1171,
              "end": 1234
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "defer",
                "optional": false,
                "typeAnnotation": null,
                "start": 1247,
                "end": 1252
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1253,
                        "end": 1254
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1253,
                      "end": 1254
                    }
                  ],
                  "start": 1252,
                  "end": 1255
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1268,
                          "end": 1275
                        },
                        "typeArguments": null,
                        "start": 1261,
                        "end": 1275
                      },
                      "start": 1259,
                      "end": 1275
                    },
                    "start": 1256,
                    "end": 1275
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1278,
                        "end": 1285
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Resolver",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1286,
                        "end": 1294
                      },
                      "start": 1278,
                      "end": 1294
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1295,
                            "end": 1296
                          },
                          "typeArguments": null,
                          "start": 1295,
                          "end": 1296
                        }
                      ],
                      "start": 1294,
                      "end": 1297
                    },
                    "start": 1278,
                    "end": 1297
                  },
                  "start": 1276,
                  "end": 1297
                },
                "body": null,
                "expression": false,
                "start": 1252,
                "end": 1298
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1240,
              "end": 1298
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1311,
                "end": 1315
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1316,
                        "end": 1317
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1316,
                      "end": 1317
                    }
                  ],
                  "start": 1315,
                  "end": 1318
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1331,
                          "end": 1338
                        },
                        "typeArguments": null,
                        "start": 1324,
                        "end": 1338
                      },
                      "start": 1322,
                      "end": 1338
                    },
                    "start": 1319,
                    "end": 1338
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1347,
                            "end": 1354
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1355,
                            "end": 1363
                          },
                          "start": 1347,
                          "end": 1363
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1364,
                                "end": 1365
                              },
                              "typeArguments": null,
                              "start": 1364,
                              "end": 1365
                            }
                          ],
                          "start": 1363,
                          "end": 1366
                        },
                        "start": 1347,
                        "end": 1366
                      },
                      "start": 1345,
                      "end": 1366
                    },
                    "start": 1340,
                    "end": 1366
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1369,
                      "end": 1376
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1377,
                            "end": 1378
                          },
                          "typeArguments": null,
                          "start": 1377,
                          "end": 1378
                        }
                      ],
                      "start": 1376,
                      "end": 1379
                    },
                    "start": 1369,
                    "end": 1379
                  },
                  "start": 1367,
                  "end": 1379
                },
                "body": null,
                "expression": false,
                "start": 1315,
                "end": 1380
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1304,
              "end": 1380
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "cast",
                "optional": false,
                "typeAnnotation": null,
                "start": 1392,
                "end": 1396
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1397,
                        "end": 1398
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1397,
                      "end": 1398
                    }
                  ],
                  "start": 1396,
                  "end": 1399
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1412,
                          "end": 1419
                        },
                        "typeArguments": null,
                        "start": 1405,
                        "end": 1419
                      },
                      "start": 1403,
                      "end": 1419
                    },
                    "start": 1400,
                    "end": 1419
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1428,
                          "end": 1429
                        },
                        "typeArguments": null,
                        "start": 1428,
                        "end": 1429
                      },
                      "start": 1426,
                      "end": 1429
                    },
                    "start": 1421,
                    "end": 1429
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1432,
                      "end": 1439
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1440,
                            "end": 1441
                          },
                          "typeArguments": null,
                          "start": 1440,
                          "end": 1441
                        }
                      ],
                      "start": 1439,
                      "end": 1442
                    },
                    "start": 1432,
                    "end": 1442
                  },
                  "start": 1430,
                  "end": 1442
                },
                "body": null,
                "expression": false,
                "start": 1396,
                "end": 1443
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1385,
              "end": 1443
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "bind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1456,
                "end": 1460
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1473,
                          "end": 1480
                        },
                        "typeArguments": null,
                        "start": 1466,
                        "end": 1480
                      },
                      "start": 1464,
                      "end": 1480
                    },
                    "start": 1461,
                    "end": 1480
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "thisArg",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1491,
                        "end": 1494
                      },
                      "start": 1489,
                      "end": 1494
                    },
                    "start": 1482,
                    "end": 1494
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1497,
                      "end": 1504
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1505,
                          "end": 1509
                        }
                      ],
                      "start": 1504,
                      "end": 1510
                    },
                    "start": 1497,
                    "end": 1510
                  },
                  "start": 1495,
                  "end": 1510
                },
                "body": null,
                "expression": false,
                "start": 1460,
                "end": 1511
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1449,
              "end": 1511
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 1524,
                "end": 1526
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1539,
                          "end": 1546
                        },
                        "typeArguments": null,
                        "start": 1532,
                        "end": 1546
                      },
                      "start": 1530,
                      "end": 1546
                    },
                    "start": 1527,
                    "end": 1546
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1555,
                        "end": 1558
                      },
                      "start": 1553,
                      "end": 1558
                    },
                    "start": 1548,
                    "end": 1558
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1561,
                    "end": 1568
                  },
                  "start": 1559,
                  "end": 1568
                },
                "body": null,
                "expression": false,
                "start": 1526,
                "end": 1569
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1517,
              "end": 1569
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "longStackTraces",
                "optional": false,
                "typeAnnotation": null,
                "start": 1582,
                "end": 1597
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1610,
                          "end": 1617
                        },
                        "typeArguments": null,
                        "start": 1603,
                        "end": 1617
                      },
                      "start": 1601,
                      "end": 1617
                    },
                    "start": 1598,
                    "end": 1617
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1620,
                    "end": 1624
                  },
                  "start": 1618,
                  "end": 1624
                },
                "body": null,
                "expression": false,
                "start": 1597,
                "end": 1625
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1575,
              "end": 1625
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1638,
                "end": 1643
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1644,
                        "end": 1645
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1644,
                      "end": 1645
                    }
                  ],
                  "start": 1643,
                  "end": 1646
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1659,
                          "end": 1666
                        },
                        "typeArguments": null,
                        "start": 1652,
                        "end": 1666
                      },
                      "start": 1650,
                      "end": 1666
                    },
                    "start": 1647,
                    "end": 1666
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1675,
                            "end": 1682
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1683,
                            "end": 1691
                          },
                          "start": 1675,
                          "end": 1691
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "R",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1692,
                                "end": 1693
                              },
                              "typeArguments": null,
                              "start": 1692,
                              "end": 1693
                            }
                          ],
                          "start": 1691,
                          "end": 1694
                        },
                        "start": 1675,
                        "end": 1694
                      },
                      "start": 1673,
                      "end": 1694
                    },
                    "start": 1668,
                    "end": 1694
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1700,
                        "end": 1706
                      },
                      "start": 1698,
                      "end": 1706
                    },
                    "start": 1696,
                    "end": 1706
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1709,
                      "end": 1716
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1717,
                            "end": 1718
                          },
                          "typeArguments": null,
                          "start": 1717,
                          "end": 1718
                        }
                      ],
                      "start": 1716,
                      "end": 1719
                    },
                    "start": 1709,
                    "end": 1719
                  },
                  "start": 1707,
                  "end": 1719
                },
                "body": null,
                "expression": false,
                "start": 1643,
                "end": 1720
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1631,
              "end": 1720
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1732,
                "end": 1737
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1738,
                        "end": 1739
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 1738,
                      "end": 1739
                    }
                  ],
                  "start": 1737,
                  "end": 1740
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1753,
                          "end": 1760
                        },
                        "typeArguments": null,
                        "start": 1746,
                        "end": 1760
                      },
                      "start": 1744,
                      "end": 1760
                    },
                    "start": 1741,
                    "end": 1760
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1769,
                          "end": 1770
                        },
                        "typeArguments": null,
                        "start": 1769,
                        "end": 1770
                      },
                      "start": 1767,
                      "end": 1770
                    },
                    "start": 1762,
                    "end": 1770
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1776,
                        "end": 1782
                      },
                      "start": 1774,
                      "end": 1782
                    },
                    "start": 1772,
                    "end": 1782
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1785,
                      "end": 1792
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1793,
                            "end": 1794
                          },
                          "typeArguments": null,
                          "start": 1793,
                          "end": 1794
                        }
                      ],
                      "start": 1792,
                      "end": 1795
                    },
                    "start": 1785,
                    "end": 1795
                  },
                  "start": 1783,
                  "end": 1795
                },
                "body": null,
                "expression": false,
                "start": 1737,
                "end": 1796
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1725,
              "end": 1796
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "delay",
                "optional": false,
                "typeAnnotation": null,
                "start": 1808,
                "end": 1813
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1826,
                          "end": 1833
                        },
                        "typeArguments": null,
                        "start": 1819,
                        "end": 1833
                      },
                      "start": 1817,
                      "end": 1833
                    },
                    "start": 1814,
                    "end": 1833
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ms",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1839,
                        "end": 1845
                      },
                      "start": 1837,
                      "end": 1845
                    },
                    "start": 1835,
                    "end": 1845
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1848,
                      "end": 1855
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSVoidKeyword",
                          "start": 1856,
                          "end": 1860
                        }
                      ],
                      "start": 1855,
                      "end": 1861
                    },
                    "start": 1848,
                    "end": 1861
                  },
                  "start": 1846,
                  "end": 1861
                },
                "body": null,
                "expression": false,
                "start": 1813,
                "end": 1862
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1801,
              "end": 1862
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "promisify",
                "optional": false,
                "typeAnnotation": null,
                "start": 1875,
                "end": 1884
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1897,
                          "end": 1904
                        },
                        "typeArguments": null,
                        "start": 1890,
                        "end": 1904
                      },
                      "start": 1888,
                      "end": 1904
                    },
                    "start": 1885,
                    "end": 1904
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "nodeFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1920,
                          "end": 1928
                        },
                        "typeArguments": null,
                        "start": 1920,
                        "end": 1928
                      },
                      "start": 1918,
                      "end": 1928
                    },
                    "start": 1906,
                    "end": 1928
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "receiver",
                    "optional": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1941,
                        "end": 1944
                      },
                      "start": 1939,
                      "end": 1944
                    },
                    "start": 1930,
                    "end": 1944
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1947,
                      "end": 1955
                    },
                    "typeArguments": null,
                    "start": 1947,
                    "end": 1955
                  },
                  "start": 1945,
                  "end": 1955
                },
                "body": null,
                "expression": false,
                "start": 1884,
                "end": 1956
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1868,
              "end": 1956
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "promisifyAll",
                "optional": false,
                "typeAnnotation": null,
                "start": 1969,
                "end": 1981
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1994,
                          "end": 2001
                        },
                        "typeArguments": null,
                        "start": 1987,
                        "end": 2001
                      },
                      "start": 1985,
                      "end": 2001
                    },
                    "start": 1982,
                    "end": 2001
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "target",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2011,
                          "end": 2017
                        },
                        "typeArguments": null,
                        "start": 2011,
                        "end": 2017
                      },
                      "start": 2009,
                      "end": 2017
                    },
                    "start": 2003,
                    "end": 2017
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Object",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2020,
                      "end": 2026
                    },
                    "typeArguments": null,
                    "start": 2020,
                    "end": 2026
                  },
                  "start": 2018,
                  "end": 2026
                },
                "body": null,
                "expression": false,
                "start": 1981,
                "end": 2027
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1962,
              "end": 2027
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "coroutine",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2049
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2050,
                        "end": 2051
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2050,
                      "end": 2051
                    }
                  ],
                  "start": 2049,
                  "end": 2052
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2065,
                          "end": 2072
                        },
                        "typeArguments": null,
                        "start": 2058,
                        "end": 2072
                      },
                      "start": 2056,
                      "end": 2072
                    },
                    "start": 2053,
                    "end": 2072
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2093,
                          "end": 2101
                        },
                        "typeArguments": null,
                        "start": 2093,
                        "end": 2101
                      },
                      "start": 2091,
                      "end": 2101
                    },
                    "start": 2074,
                    "end": 2101
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Function",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2104,
                      "end": 2112
                    },
                    "typeArguments": null,
                    "start": 2104,
                    "end": 2112
                  },
                  "start": 2102,
                  "end": 2112
                },
                "body": null,
                "expression": false,
                "start": 2049,
                "end": 2113
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2033,
              "end": 2113
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "spawn",
                "optional": false,
                "typeAnnotation": null,
                "start": 2126,
                "end": 2131
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2132,
                        "end": 2133
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2132,
                      "end": 2133
                    }
                  ],
                  "start": 2131,
                  "end": 2134
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2147,
                          "end": 2154
                        },
                        "typeArguments": null,
                        "start": 2140,
                        "end": 2154
                      },
                      "start": 2138,
                      "end": 2154
                    },
                    "start": 2135,
                    "end": 2154
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "generatorFunction",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Function",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2175,
                          "end": 2183
                        },
                        "typeArguments": null,
                        "start": 2175,
                        "end": 2183
                      },
                      "start": 2173,
                      "end": 2183
                    },
                    "start": 2156,
                    "end": 2183
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2186,
                      "end": 2193
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2194,
                            "end": 2195
                          },
                          "typeArguments": null,
                          "start": 2194,
                          "end": 2195
                        }
                      ],
                      "start": 2193,
                      "end": 2196
                    },
                    "start": 2186,
                    "end": 2196
                  },
                  "start": 2184,
                  "end": 2196
                },
                "body": null,
                "expression": false,
                "start": 2131,
                "end": 2197
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2119,
              "end": 2197
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "noConflict",
                "optional": false,
                "typeAnnotation": null,
                "start": 2210,
                "end": 2220
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2233,
                          "end": 2240
                        },
                        "typeArguments": null,
                        "start": 2226,
                        "end": 2240
                      },
                      "start": 2224,
                      "end": 2240
                    },
                    "start": 2221,
                    "end": 2240
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "exprName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2250,
                      "end": 2257
                    },
                    "typeArguments": null,
                    "start": 2243,
                    "end": 2257
                  },
                  "start": 2241,
                  "end": 2257
                },
                "body": null,
                "expression": false,
                "start": 2220,
                "end": 2258
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2203,
              "end": 2258
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "onPossiblyUnhandledRejection",
                "optional": false,
                "typeAnnotation": null,
                "start": 2271,
                "end": 2299
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2312,
                          "end": 2319
                        },
                        "typeArguments": null,
                        "start": 2305,
                        "end": 2319
                      },
                      "start": 2303,
                      "end": 2319
                    },
                    "start": 2300,
                    "end": 2319
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "handler",
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
                            "name": "reason",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 2339,
                                "end": 2342
                              },
                              "start": 2337,
                              "end": 2342
                            },
                            "start": 2331,
                            "end": 2342
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 2347,
                            "end": 2350
                          },
                          "start": 2344,
                          "end": 2350
                        },
                        "start": 2330,
                        "end": 2350
                      },
                      "start": 2328,
                      "end": 2350
                    },
                    "start": 2321,
                    "end": 2350
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 2353,
                    "end": 2357
                  },
                  "start": 2351,
                  "end": 2357
                },
                "body": null,
                "expression": false,
                "start": 2299,
                "end": 2358
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2264,
              "end": 2358
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2371,
                "end": 2374
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2375,
                        "end": 2376
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2375,
                      "end": 2376
                    }
                  ],
                  "start": 2374,
                  "end": 2377
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2390,
                          "end": 2397
                        },
                        "typeArguments": null,
                        "start": 2383,
                        "end": 2397
                      },
                      "start": 2381,
                      "end": 2397
                    },
                    "start": 2378,
                    "end": 2397
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2407,
                            "end": 2414
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2415,
                            "end": 2423
                          },
                          "start": 2407,
                          "end": 2423
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2424,
                                    "end": 2431
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2432,
                                    "end": 2440
                                  },
                                  "start": 2424,
                                  "end": 2440
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2441,
                                        "end": 2442
                                      },
                                      "typeArguments": null,
                                      "start": 2441,
                                      "end": 2442
                                    }
                                  ],
                                  "start": 2440,
                                  "end": 2443
                                },
                                "start": 2424,
                                "end": 2443
                              },
                              "start": 2424,
                              "end": 2445
                            }
                          ],
                          "start": 2423,
                          "end": 2446
                        },
                        "start": 2407,
                        "end": 2446
                      },
                      "start": 2405,
                      "end": 2446
                    },
                    "start": 2399,
                    "end": 2446
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2449,
                      "end": 2456
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2457,
                              "end": 2458
                            },
                            "typeArguments": null,
                            "start": 2457,
                            "end": 2458
                          },
                          "start": 2457,
                          "end": 2460
                        }
                      ],
                      "start": 2456,
                      "end": 2461
                    },
                    "start": 2449,
                    "end": 2461
                  },
                  "start": 2447,
                  "end": 2461
                },
                "body": null,
                "expression": false,
                "start": 2374,
                "end": 2462
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2364,
              "end": 2462
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2474,
                "end": 2477
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2478,
                        "end": 2479
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2478,
                      "end": 2479
                    }
                  ],
                  "start": 2477,
                  "end": 2480
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2493,
                          "end": 2500
                        },
                        "typeArguments": null,
                        "start": 2486,
                        "end": 2500
                      },
                      "start": 2484,
                      "end": 2500
                    },
                    "start": 2481,
                    "end": 2500
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2510,
                            "end": 2517
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2518,
                            "end": 2526
                          },
                          "start": 2510,
                          "end": 2526
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2527,
                                  "end": 2528
                                },
                                "typeArguments": null,
                                "start": 2527,
                                "end": 2528
                              },
                              "start": 2527,
                              "end": 2530
                            }
                          ],
                          "start": 2526,
                          "end": 2531
                        },
                        "start": 2510,
                        "end": 2531
                      },
                      "start": 2508,
                      "end": 2531
                    },
                    "start": 2502,
                    "end": 2531
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2534,
                      "end": 2541
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2542,
                              "end": 2543
                            },
                            "typeArguments": null,
                            "start": 2542,
                            "end": 2543
                          },
                          "start": 2542,
                          "end": 2545
                        }
                      ],
                      "start": 2541,
                      "end": 2546
                    },
                    "start": 2534,
                    "end": 2546
                  },
                  "start": 2532,
                  "end": 2546
                },
                "body": null,
                "expression": false,
                "start": 2477,
                "end": 2547
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2467,
              "end": 2547
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2559,
                "end": 2562
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2563,
                        "end": 2564
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2563,
                      "end": 2564
                    }
                  ],
                  "start": 2562,
                  "end": 2565
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2578,
                          "end": 2585
                        },
                        "typeArguments": null,
                        "start": 2571,
                        "end": 2585
                      },
                      "start": 2569,
                      "end": 2585
                    },
                    "start": 2566,
                    "end": 2585
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2595,
                              "end": 2602
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2603,
                              "end": 2611
                            },
                            "start": 2595,
                            "end": 2611
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2612,
                                  "end": 2613
                                },
                                "typeArguments": null,
                                "start": 2612,
                                "end": 2613
                              }
                            ],
                            "start": 2611,
                            "end": 2614
                          },
                          "start": 2595,
                          "end": 2614
                        },
                        "start": 2595,
                        "end": 2616
                      },
                      "start": 2593,
                      "end": 2616
                    },
                    "start": 2587,
                    "end": 2616
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2619,
                      "end": 2626
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2627,
                              "end": 2628
                            },
                            "typeArguments": null,
                            "start": 2627,
                            "end": 2628
                          },
                          "start": 2627,
                          "end": 2630
                        }
                      ],
                      "start": 2626,
                      "end": 2631
                    },
                    "start": 2619,
                    "end": 2631
                  },
                  "start": 2617,
                  "end": 2631
                },
                "body": null,
                "expression": false,
                "start": 2562,
                "end": 2632
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2552,
              "end": 2632
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "all",
                "optional": false,
                "typeAnnotation": null,
                "start": 2644,
                "end": 2647
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2648,
                        "end": 2649
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2648,
                      "end": 2649
                    }
                  ],
                  "start": 2647,
                  "end": 2650
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2663,
                          "end": 2670
                        },
                        "typeArguments": null,
                        "start": 2656,
                        "end": 2670
                      },
                      "start": 2654,
                      "end": 2670
                    },
                    "start": 2651,
                    "end": 2670
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2680,
                            "end": 2681
                          },
                          "typeArguments": null,
                          "start": 2680,
                          "end": 2681
                        },
                        "start": 2680,
                        "end": 2683
                      },
                      "start": 2678,
                      "end": 2683
                    },
                    "start": 2672,
                    "end": 2683
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2686,
                      "end": 2693
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2694,
                              "end": 2695
                            },
                            "typeArguments": null,
                            "start": 2694,
                            "end": 2695
                          },
                          "start": 2694,
                          "end": 2697
                        }
                      ],
                      "start": 2693,
                      "end": 2698
                    },
                    "start": 2686,
                    "end": 2698
                  },
                  "start": 2684,
                  "end": 2698
                },
                "body": null,
                "expression": false,
                "start": 2647,
                "end": 2699
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2637,
              "end": 2699
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 2712,
                "end": 2717
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2730,
                          "end": 2737
                        },
                        "typeArguments": null,
                        "start": 2723,
                        "end": 2737
                      },
                      "start": 2721,
                      "end": 2737
                    },
                    "start": 2718,
                    "end": 2737
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2747,
                          "end": 2754
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2755,
                                "end": 2761
                              },
                              "typeArguments": null,
                              "start": 2755,
                              "end": 2761
                            }
                          ],
                          "start": 2754,
                          "end": 2762
                        },
                        "start": 2747,
                        "end": 2762
                      },
                      "start": 2745,
                      "end": 2762
                    },
                    "start": 2739,
                    "end": 2762
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2765,
                      "end": 2772
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2773,
                            "end": 2779
                          },
                          "typeArguments": null,
                          "start": 2773,
                          "end": 2779
                        }
                      ],
                      "start": 2772,
                      "end": 2780
                    },
                    "start": 2765,
                    "end": 2780
                  },
                  "start": 2763,
                  "end": 2780
                },
                "body": null,
                "expression": false,
                "start": 2717,
                "end": 2781
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2705,
              "end": 2781
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "props",
                "optional": false,
                "typeAnnotation": null,
                "start": 2793,
                "end": 2798
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2811,
                          "end": 2818
                        },
                        "typeArguments": null,
                        "start": 2804,
                        "end": 2818
                      },
                      "start": 2802,
                      "end": 2818
                    },
                    "start": 2799,
                    "end": 2818
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "object",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2828,
                          "end": 2834
                        },
                        "typeArguments": null,
                        "start": 2828,
                        "end": 2834
                      },
                      "start": 2826,
                      "end": 2834
                    },
                    "start": 2820,
                    "end": 2834
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2837,
                      "end": 2844
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Object",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2845,
                            "end": 2851
                          },
                          "typeArguments": null,
                          "start": 2845,
                          "end": 2851
                        }
                      ],
                      "start": 2844,
                      "end": 2852
                    },
                    "start": 2837,
                    "end": 2852
                  },
                  "start": 2835,
                  "end": 2852
                },
                "body": null,
                "expression": false,
                "start": 2798,
                "end": 2853
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2786,
              "end": 2853
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 2866,
                "end": 2872
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2873,
                        "end": 2874
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2873,
                      "end": 2874
                    }
                  ],
                  "start": 2872,
                  "end": 2875
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2888,
                          "end": 2895
                        },
                        "typeArguments": null,
                        "start": 2881,
                        "end": 2895
                      },
                      "start": 2879,
                      "end": 2895
                    },
                    "start": 2876,
                    "end": 2895
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2905,
                            "end": 2912
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2913,
                            "end": 2921
                          },
                          "start": 2905,
                          "end": 2921
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2922,
                                    "end": 2929
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2930,
                                    "end": 2938
                                  },
                                  "start": 2922,
                                  "end": 2938
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2939,
                                        "end": 2940
                                      },
                                      "typeArguments": null,
                                      "start": 2939,
                                      "end": 2940
                                    }
                                  ],
                                  "start": 2938,
                                  "end": 2941
                                },
                                "start": 2922,
                                "end": 2941
                              },
                              "start": 2922,
                              "end": 2943
                            }
                          ],
                          "start": 2921,
                          "end": 2944
                        },
                        "start": 2905,
                        "end": 2944
                      },
                      "start": 2903,
                      "end": 2944
                    },
                    "start": 2897,
                    "end": 2944
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2947,
                      "end": 2954
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2955,
                                "end": 2962
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2963,
                                "end": 2973
                              },
                              "start": 2955,
                              "end": 2973
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2974,
                                    "end": 2975
                                  },
                                  "typeArguments": null,
                                  "start": 2974,
                                  "end": 2975
                                }
                              ],
                              "start": 2973,
                              "end": 2976
                            },
                            "start": 2955,
                            "end": 2976
                          },
                          "start": 2955,
                          "end": 2978
                        }
                      ],
                      "start": 2954,
                      "end": 2979
                    },
                    "start": 2947,
                    "end": 2979
                  },
                  "start": 2945,
                  "end": 2979
                },
                "body": null,
                "expression": false,
                "start": 2872,
                "end": 2980
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2859,
              "end": 2980
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 2992,
                "end": 2998
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2999,
                        "end": 3000
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 2999,
                      "end": 3000
                    }
                  ],
                  "start": 2998,
                  "end": 3001
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3014,
                          "end": 3021
                        },
                        "typeArguments": null,
                        "start": 3007,
                        "end": 3021
                      },
                      "start": 3005,
                      "end": 3021
                    },
                    "start": 3002,
                    "end": 3021
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3031,
                            "end": 3038
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3039,
                            "end": 3047
                          },
                          "start": 3031,
                          "end": 3047
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3048,
                                  "end": 3049
                                },
                                "typeArguments": null,
                                "start": 3048,
                                "end": 3049
                              },
                              "start": 3048,
                              "end": 3051
                            }
                          ],
                          "start": 3047,
                          "end": 3052
                        },
                        "start": 3031,
                        "end": 3052
                      },
                      "start": 3029,
                      "end": 3052
                    },
                    "start": 3023,
                    "end": 3052
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3055,
                      "end": 3062
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3063,
                                "end": 3070
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3071,
                                "end": 3081
                              },
                              "start": 3063,
                              "end": 3081
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3082,
                                    "end": 3083
                                  },
                                  "typeArguments": null,
                                  "start": 3082,
                                  "end": 3083
                                }
                              ],
                              "start": 3081,
                              "end": 3084
                            },
                            "start": 3063,
                            "end": 3084
                          },
                          "start": 3063,
                          "end": 3086
                        }
                      ],
                      "start": 3062,
                      "end": 3087
                    },
                    "start": 3055,
                    "end": 3087
                  },
                  "start": 3053,
                  "end": 3087
                },
                "body": null,
                "expression": false,
                "start": 2998,
                "end": 3088
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 2985,
              "end": 3088
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 3100,
                "end": 3106
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3107,
                        "end": 3108
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3107,
                      "end": 3108
                    }
                  ],
                  "start": 3106,
                  "end": 3109
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3122,
                          "end": 3129
                        },
                        "typeArguments": null,
                        "start": 3115,
                        "end": 3129
                      },
                      "start": 3113,
                      "end": 3129
                    },
                    "start": 3110,
                    "end": 3129
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3139,
                              "end": 3146
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3147,
                              "end": 3155
                            },
                            "start": 3139,
                            "end": 3155
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3156,
                                  "end": 3157
                                },
                                "typeArguments": null,
                                "start": 3156,
                                "end": 3157
                              }
                            ],
                            "start": 3155,
                            "end": 3158
                          },
                          "start": 3139,
                          "end": 3158
                        },
                        "start": 3139,
                        "end": 3160
                      },
                      "start": 3137,
                      "end": 3160
                    },
                    "start": 3131,
                    "end": 3160
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3163,
                      "end": 3170
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3171,
                                "end": 3178
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3179,
                                "end": 3189
                              },
                              "start": 3171,
                              "end": 3189
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3190,
                                    "end": 3191
                                  },
                                  "typeArguments": null,
                                  "start": 3190,
                                  "end": 3191
                                }
                              ],
                              "start": 3189,
                              "end": 3192
                            },
                            "start": 3171,
                            "end": 3192
                          },
                          "start": 3171,
                          "end": 3194
                        }
                      ],
                      "start": 3170,
                      "end": 3195
                    },
                    "start": 3163,
                    "end": 3195
                  },
                  "start": 3161,
                  "end": 3195
                },
                "body": null,
                "expression": false,
                "start": 3106,
                "end": 3196
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3093,
              "end": 3196
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "settle",
                "optional": false,
                "typeAnnotation": null,
                "start": 3208,
                "end": 3214
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3215,
                        "end": 3216
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3215,
                      "end": 3216
                    }
                  ],
                  "start": 3214,
                  "end": 3217
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3230,
                          "end": 3237
                        },
                        "typeArguments": null,
                        "start": 3223,
                        "end": 3237
                      },
                      "start": 3221,
                      "end": 3237
                    },
                    "start": 3218,
                    "end": 3237
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3247,
                            "end": 3248
                          },
                          "typeArguments": null,
                          "start": 3247,
                          "end": 3248
                        },
                        "start": 3247,
                        "end": 3250
                      },
                      "start": 3245,
                      "end": 3250
                    },
                    "start": 3239,
                    "end": 3250
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3253,
                      "end": 3260
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3261,
                                "end": 3268
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Inspection",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3269,
                                "end": 3279
                              },
                              "start": 3261,
                              "end": 3279
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "R",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3280,
                                    "end": 3281
                                  },
                                  "typeArguments": null,
                                  "start": 3280,
                                  "end": 3281
                                }
                              ],
                              "start": 3279,
                              "end": 3282
                            },
                            "start": 3261,
                            "end": 3282
                          },
                          "start": 3261,
                          "end": 3284
                        }
                      ],
                      "start": 3260,
                      "end": 3285
                    },
                    "start": 3253,
                    "end": 3285
                  },
                  "start": 3251,
                  "end": 3285
                },
                "body": null,
                "expression": false,
                "start": 3214,
                "end": 3286
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3201,
              "end": 3286
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3299,
                "end": 3302
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3303,
                        "end": 3304
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3303,
                      "end": 3304
                    }
                  ],
                  "start": 3302,
                  "end": 3305
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3318,
                          "end": 3325
                        },
                        "typeArguments": null,
                        "start": 3311,
                        "end": 3325
                      },
                      "start": 3309,
                      "end": 3325
                    },
                    "start": 3306,
                    "end": 3325
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3335,
                            "end": 3342
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3343,
                            "end": 3351
                          },
                          "start": 3335,
                          "end": 3351
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3352,
                                    "end": 3359
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3360,
                                    "end": 3368
                                  },
                                  "start": 3352,
                                  "end": 3368
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3369,
                                        "end": 3370
                                      },
                                      "typeArguments": null,
                                      "start": 3369,
                                      "end": 3370
                                    }
                                  ],
                                  "start": 3368,
                                  "end": 3371
                                },
                                "start": 3352,
                                "end": 3371
                              },
                              "start": 3352,
                              "end": 3373
                            }
                          ],
                          "start": 3351,
                          "end": 3374
                        },
                        "start": 3335,
                        "end": 3374
                      },
                      "start": 3333,
                      "end": 3374
                    },
                    "start": 3327,
                    "end": 3374
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3377,
                      "end": 3384
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3385,
                            "end": 3386
                          },
                          "typeArguments": null,
                          "start": 3385,
                          "end": 3386
                        }
                      ],
                      "start": 3384,
                      "end": 3387
                    },
                    "start": 3377,
                    "end": 3387
                  },
                  "start": 3375,
                  "end": 3387
                },
                "body": null,
                "expression": false,
                "start": 3302,
                "end": 3388
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3292,
              "end": 3388
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3400,
                "end": 3403
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3404,
                        "end": 3405
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3404,
                      "end": 3405
                    }
                  ],
                  "start": 3403,
                  "end": 3406
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3419,
                          "end": 3426
                        },
                        "typeArguments": null,
                        "start": 3412,
                        "end": 3426
                      },
                      "start": 3410,
                      "end": 3426
                    },
                    "start": 3407,
                    "end": 3426
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3436,
                            "end": 3443
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3444,
                            "end": 3452
                          },
                          "start": 3436,
                          "end": 3452
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3453,
                                  "end": 3454
                                },
                                "typeArguments": null,
                                "start": 3453,
                                "end": 3454
                              },
                              "start": 3453,
                              "end": 3456
                            }
                          ],
                          "start": 3452,
                          "end": 3457
                        },
                        "start": 3436,
                        "end": 3457
                      },
                      "start": 3434,
                      "end": 3457
                    },
                    "start": 3428,
                    "end": 3457
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3460,
                      "end": 3467
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3468,
                            "end": 3469
                          },
                          "typeArguments": null,
                          "start": 3468,
                          "end": 3469
                        }
                      ],
                      "start": 3467,
                      "end": 3470
                    },
                    "start": 3460,
                    "end": 3470
                  },
                  "start": 3458,
                  "end": 3470
                },
                "body": null,
                "expression": false,
                "start": 3403,
                "end": 3471
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3393,
              "end": 3471
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3483,
                "end": 3486
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3487,
                        "end": 3488
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3487,
                      "end": 3488
                    }
                  ],
                  "start": 3486,
                  "end": 3489
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3502,
                          "end": 3509
                        },
                        "typeArguments": null,
                        "start": 3495,
                        "end": 3509
                      },
                      "start": 3493,
                      "end": 3509
                    },
                    "start": 3490,
                    "end": 3509
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3519,
                              "end": 3526
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3527,
                              "end": 3535
                            },
                            "start": 3519,
                            "end": 3535
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3536,
                                  "end": 3537
                                },
                                "typeArguments": null,
                                "start": 3536,
                                "end": 3537
                              }
                            ],
                            "start": 3535,
                            "end": 3538
                          },
                          "start": 3519,
                          "end": 3538
                        },
                        "start": 3519,
                        "end": 3540
                      },
                      "start": 3517,
                      "end": 3540
                    },
                    "start": 3511,
                    "end": 3540
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3543,
                      "end": 3550
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3551,
                            "end": 3552
                          },
                          "typeArguments": null,
                          "start": 3551,
                          "end": 3552
                        }
                      ],
                      "start": 3550,
                      "end": 3553
                    },
                    "start": 3543,
                    "end": 3553
                  },
                  "start": 3541,
                  "end": 3553
                },
                "body": null,
                "expression": false,
                "start": 3486,
                "end": 3554
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3476,
              "end": 3554
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "any",
                "optional": false,
                "typeAnnotation": null,
                "start": 3566,
                "end": 3569
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3570,
                        "end": 3571
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3570,
                      "end": 3571
                    }
                  ],
                  "start": 3569,
                  "end": 3572
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3585,
                          "end": 3592
                        },
                        "typeArguments": null,
                        "start": 3578,
                        "end": 3592
                      },
                      "start": 3576,
                      "end": 3592
                    },
                    "start": 3573,
                    "end": 3592
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3602,
                            "end": 3603
                          },
                          "typeArguments": null,
                          "start": 3602,
                          "end": 3603
                        },
                        "start": 3602,
                        "end": 3605
                      },
                      "start": 3600,
                      "end": 3605
                    },
                    "start": 3594,
                    "end": 3605
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3608,
                      "end": 3615
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3616,
                            "end": 3617
                          },
                          "typeArguments": null,
                          "start": 3616,
                          "end": 3617
                        }
                      ],
                      "start": 3615,
                      "end": 3618
                    },
                    "start": 3608,
                    "end": 3618
                  },
                  "start": 3606,
                  "end": 3618
                },
                "body": null,
                "expression": false,
                "start": 3569,
                "end": 3619
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3559,
              "end": 3619
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3632,
                "end": 3636
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3637,
                        "end": 3638
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3637,
                      "end": 3638
                    }
                  ],
                  "start": 3636,
                  "end": 3639
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3652,
                          "end": 3659
                        },
                        "typeArguments": null,
                        "start": 3645,
                        "end": 3659
                      },
                      "start": 3643,
                      "end": 3659
                    },
                    "start": 3640,
                    "end": 3659
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3669,
                            "end": 3676
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3677,
                            "end": 3685
                          },
                          "start": 3669,
                          "end": 3685
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3686,
                                    "end": 3693
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3694,
                                    "end": 3702
                                  },
                                  "start": 3686,
                                  "end": 3702
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3703,
                                        "end": 3704
                                      },
                                      "typeArguments": null,
                                      "start": 3703,
                                      "end": 3704
                                    }
                                  ],
                                  "start": 3702,
                                  "end": 3705
                                },
                                "start": 3686,
                                "end": 3705
                              },
                              "start": 3686,
                              "end": 3707
                            }
                          ],
                          "start": 3685,
                          "end": 3708
                        },
                        "start": 3669,
                        "end": 3708
                      },
                      "start": 3667,
                      "end": 3708
                    },
                    "start": 3661,
                    "end": 3708
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3711,
                      "end": 3718
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3719,
                            "end": 3720
                          },
                          "typeArguments": null,
                          "start": 3719,
                          "end": 3720
                        }
                      ],
                      "start": 3718,
                      "end": 3721
                    },
                    "start": 3711,
                    "end": 3721
                  },
                  "start": 3709,
                  "end": 3721
                },
                "body": null,
                "expression": false,
                "start": 3636,
                "end": 3722
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3625,
              "end": 3722
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3734,
                "end": 3738
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3739,
                        "end": 3740
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3739,
                      "end": 3740
                    }
                  ],
                  "start": 3738,
                  "end": 3741
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3754,
                          "end": 3761
                        },
                        "typeArguments": null,
                        "start": 3747,
                        "end": 3761
                      },
                      "start": 3745,
                      "end": 3761
                    },
                    "start": 3742,
                    "end": 3761
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3771,
                            "end": 3778
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3779,
                            "end": 3787
                          },
                          "start": 3771,
                          "end": 3787
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3788,
                                  "end": 3789
                                },
                                "typeArguments": null,
                                "start": 3788,
                                "end": 3789
                              },
                              "start": 3788,
                              "end": 3791
                            }
                          ],
                          "start": 3787,
                          "end": 3792
                        },
                        "start": 3771,
                        "end": 3792
                      },
                      "start": 3769,
                      "end": 3792
                    },
                    "start": 3763,
                    "end": 3792
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3795,
                      "end": 3802
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3803,
                            "end": 3804
                          },
                          "typeArguments": null,
                          "start": 3803,
                          "end": 3804
                        }
                      ],
                      "start": 3802,
                      "end": 3805
                    },
                    "start": 3795,
                    "end": 3805
                  },
                  "start": 3793,
                  "end": 3805
                },
                "body": null,
                "expression": false,
                "start": 3738,
                "end": 3806
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3727,
              "end": 3806
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3818,
                "end": 3822
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3823,
                        "end": 3824
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3823,
                      "end": 3824
                    }
                  ],
                  "start": 3822,
                  "end": 3825
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3838,
                          "end": 3845
                        },
                        "typeArguments": null,
                        "start": 3831,
                        "end": 3845
                      },
                      "start": 3829,
                      "end": 3845
                    },
                    "start": 3826,
                    "end": 3845
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3855,
                              "end": 3862
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3863,
                              "end": 3871
                            },
                            "start": 3855,
                            "end": 3871
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 3872,
                                  "end": 3873
                                },
                                "typeArguments": null,
                                "start": 3872,
                                "end": 3873
                              }
                            ],
                            "start": 3871,
                            "end": 3874
                          },
                          "start": 3855,
                          "end": 3874
                        },
                        "start": 3855,
                        "end": 3876
                      },
                      "start": 3853,
                      "end": 3876
                    },
                    "start": 3847,
                    "end": 3876
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3879,
                      "end": 3886
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3887,
                            "end": 3888
                          },
                          "typeArguments": null,
                          "start": 3887,
                          "end": 3888
                        }
                      ],
                      "start": 3886,
                      "end": 3889
                    },
                    "start": 3879,
                    "end": 3889
                  },
                  "start": 3877,
                  "end": 3889
                },
                "body": null,
                "expression": false,
                "start": 3822,
                "end": 3890
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3811,
              "end": 3890
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "race",
                "optional": false,
                "typeAnnotation": null,
                "start": 3902,
                "end": 3906
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3907,
                        "end": 3908
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3907,
                      "end": 3908
                    }
                  ],
                  "start": 3906,
                  "end": 3909
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3922,
                          "end": 3929
                        },
                        "typeArguments": null,
                        "start": 3915,
                        "end": 3929
                      },
                      "start": 3913,
                      "end": 3929
                    },
                    "start": 3910,
                    "end": 3929
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3939,
                            "end": 3940
                          },
                          "typeArguments": null,
                          "start": 3939,
                          "end": 3940
                        },
                        "start": 3939,
                        "end": 3942
                      },
                      "start": 3937,
                      "end": 3942
                    },
                    "start": 3931,
                    "end": 3942
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3945,
                      "end": 3952
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3953,
                            "end": 3954
                          },
                          "typeArguments": null,
                          "start": 3953,
                          "end": 3954
                        }
                      ],
                      "start": 3952,
                      "end": 3955
                    },
                    "start": 3945,
                    "end": 3955
                  },
                  "start": 3943,
                  "end": 3955
                },
                "body": null,
                "expression": false,
                "start": 3906,
                "end": 3956
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3895,
              "end": 3956
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 3969,
                "end": 3973
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3974,
                        "end": 3975
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 3974,
                      "end": 3975
                    }
                  ],
                  "start": 3973,
                  "end": 3976
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3989,
                          "end": 3996
                        },
                        "typeArguments": null,
                        "start": 3982,
                        "end": 3996
                      },
                      "start": 3980,
                      "end": 3996
                    },
                    "start": 3977,
                    "end": 3996
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4006,
                            "end": 4013
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4014,
                            "end": 4022
                          },
                          "start": 4006,
                          "end": 4022
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4023,
                                    "end": 4030
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4031,
                                    "end": 4039
                                  },
                                  "start": 4023,
                                  "end": 4039
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4040,
                                        "end": 4041
                                      },
                                      "typeArguments": null,
                                      "start": 4040,
                                      "end": 4041
                                    }
                                  ],
                                  "start": 4039,
                                  "end": 4042
                                },
                                "start": 4023,
                                "end": 4042
                              },
                              "start": 4023,
                              "end": 4044
                            }
                          ],
                          "start": 4022,
                          "end": 4045
                        },
                        "start": 4006,
                        "end": 4045
                      },
                      "start": 4004,
                      "end": 4045
                    },
                    "start": 3998,
                    "end": 4045
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4054,
                        "end": 4060
                      },
                      "start": 4052,
                      "end": 4060
                    },
                    "start": 4047,
                    "end": 4060
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4063,
                      "end": 4070
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4071,
                              "end": 4072
                            },
                            "typeArguments": null,
                            "start": 4071,
                            "end": 4072
                          },
                          "start": 4071,
                          "end": 4074
                        }
                      ],
                      "start": 4070,
                      "end": 4075
                    },
                    "start": 4063,
                    "end": 4075
                  },
                  "start": 4061,
                  "end": 4075
                },
                "body": null,
                "expression": false,
                "start": 3973,
                "end": 4076
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 3962,
              "end": 4076
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4088,
                "end": 4092
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4093,
                        "end": 4094
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4093,
                      "end": 4094
                    }
                  ],
                  "start": 4092,
                  "end": 4095
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4108,
                          "end": 4115
                        },
                        "typeArguments": null,
                        "start": 4101,
                        "end": 4115
                      },
                      "start": 4099,
                      "end": 4115
                    },
                    "start": 4096,
                    "end": 4115
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4125,
                            "end": 4132
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4133,
                            "end": 4141
                          },
                          "start": 4125,
                          "end": 4141
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4142,
                                  "end": 4143
                                },
                                "typeArguments": null,
                                "start": 4142,
                                "end": 4143
                              },
                              "start": 4142,
                              "end": 4145
                            }
                          ],
                          "start": 4141,
                          "end": 4146
                        },
                        "start": 4125,
                        "end": 4146
                      },
                      "start": 4123,
                      "end": 4146
                    },
                    "start": 4117,
                    "end": 4146
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4155,
                        "end": 4161
                      },
                      "start": 4153,
                      "end": 4161
                    },
                    "start": 4148,
                    "end": 4161
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4164,
                      "end": 4171
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4172,
                              "end": 4173
                            },
                            "typeArguments": null,
                            "start": 4172,
                            "end": 4173
                          },
                          "start": 4172,
                          "end": 4175
                        }
                      ],
                      "start": 4171,
                      "end": 4176
                    },
                    "start": 4164,
                    "end": 4176
                  },
                  "start": 4162,
                  "end": 4176
                },
                "body": null,
                "expression": false,
                "start": 4092,
                "end": 4177
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4081,
              "end": 4177
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4189,
                "end": 4193
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4194,
                        "end": 4195
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4194,
                      "end": 4195
                    }
                  ],
                  "start": 4193,
                  "end": 4196
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4209,
                          "end": 4216
                        },
                        "typeArguments": null,
                        "start": 4202,
                        "end": 4216
                      },
                      "start": 4200,
                      "end": 4216
                    },
                    "start": 4197,
                    "end": 4216
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4226,
                              "end": 4233
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4234,
                              "end": 4242
                            },
                            "start": 4226,
                            "end": 4242
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4243,
                                  "end": 4244
                                },
                                "typeArguments": null,
                                "start": 4243,
                                "end": 4244
                              }
                            ],
                            "start": 4242,
                            "end": 4245
                          },
                          "start": 4226,
                          "end": 4245
                        },
                        "start": 4226,
                        "end": 4247
                      },
                      "start": 4224,
                      "end": 4247
                    },
                    "start": 4218,
                    "end": 4247
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4256,
                        "end": 4262
                      },
                      "start": 4254,
                      "end": 4262
                    },
                    "start": 4249,
                    "end": 4262
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4265,
                      "end": 4272
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4273,
                              "end": 4274
                            },
                            "typeArguments": null,
                            "start": 4273,
                            "end": 4274
                          },
                          "start": 4273,
                          "end": 4276
                        }
                      ],
                      "start": 4272,
                      "end": 4277
                    },
                    "start": 4265,
                    "end": 4277
                  },
                  "start": 4263,
                  "end": 4277
                },
                "body": null,
                "expression": false,
                "start": 4193,
                "end": 4278
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4182,
              "end": 4278
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "some",
                "optional": false,
                "typeAnnotation": null,
                "start": 4290,
                "end": 4294
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4295,
                        "end": 4296
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4295,
                      "end": 4296
                    }
                  ],
                  "start": 4294,
                  "end": 4297
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4310,
                          "end": 4317
                        },
                        "typeArguments": null,
                        "start": 4303,
                        "end": 4317
                      },
                      "start": 4301,
                      "end": 4317
                    },
                    "start": 4298,
                    "end": 4317
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4327,
                            "end": 4328
                          },
                          "typeArguments": null,
                          "start": 4327,
                          "end": 4328
                        },
                        "start": 4327,
                        "end": 4330
                      },
                      "start": 4325,
                      "end": 4330
                    },
                    "start": 4319,
                    "end": 4330
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "count",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4339,
                        "end": 4345
                      },
                      "start": 4337,
                      "end": 4345
                    },
                    "start": 4332,
                    "end": 4345
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4348,
                      "end": 4355
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4356,
                              "end": 4357
                            },
                            "typeArguments": null,
                            "start": 4356,
                            "end": 4357
                          },
                          "start": 4356,
                          "end": 4359
                        }
                      ],
                      "start": 4355,
                      "end": 4360
                    },
                    "start": 4348,
                    "end": 4360
                  },
                  "start": 4346,
                  "end": 4360
                },
                "body": null,
                "expression": false,
                "start": 4294,
                "end": 4361
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4283,
              "end": 4361
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 4374,
                "end": 4378
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4379,
                        "end": 4380
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4379,
                      "end": 4380
                    }
                  ],
                  "start": 4378,
                  "end": 4381
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4394,
                          "end": 4401
                        },
                        "typeArguments": null,
                        "start": 4387,
                        "end": 4401
                      },
                      "start": 4385,
                      "end": 4401
                    },
                    "start": 4382,
                    "end": 4401
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4406,
                      "end": 4412
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4414,
                              "end": 4421
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4422,
                              "end": 4430
                            },
                            "start": 4414,
                            "end": 4430
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4431,
                                  "end": 4432
                                },
                                "typeArguments": null,
                                "start": 4431,
                                "end": 4432
                              }
                            ],
                            "start": 4430,
                            "end": 4433
                          },
                          "start": 4414,
                          "end": 4433
                        },
                        "start": 4414,
                        "end": 4435
                      },
                      "start": 4412,
                      "end": 4435
                    },
                    "value": null,
                    "start": 4403,
                    "end": 4435
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4438,
                      "end": 4445
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4446,
                              "end": 4447
                            },
                            "typeArguments": null,
                            "start": 4446,
                            "end": 4447
                          },
                          "start": 4446,
                          "end": 4449
                        }
                      ],
                      "start": 4445,
                      "end": 4450
                    },
                    "start": 4438,
                    "end": 4450
                  },
                  "start": 4436,
                  "end": 4450
                },
                "body": null,
                "expression": false,
                "start": 4378,
                "end": 4451
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4367,
              "end": 4451
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 4463,
                "end": 4467
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4468,
                        "end": 4469
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4468,
                      "end": 4469
                    }
                  ],
                  "start": 4467,
                  "end": 4470
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4483,
                          "end": 4490
                        },
                        "typeArguments": null,
                        "start": 4476,
                        "end": 4490
                      },
                      "start": 4474,
                      "end": 4490
                    },
                    "start": 4471,
                    "end": 4490
                  },
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "values",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4495,
                      "end": 4501
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4503,
                            "end": 4504
                          },
                          "typeArguments": null,
                          "start": 4503,
                          "end": 4504
                        },
                        "start": 4503,
                        "end": 4506
                      },
                      "start": 4501,
                      "end": 4506
                    },
                    "value": null,
                    "start": 4492,
                    "end": 4506
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4509,
                      "end": 4516
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4517,
                              "end": 4518
                            },
                            "typeArguments": null,
                            "start": 4517,
                            "end": 4518
                          },
                          "start": 4517,
                          "end": 4520
                        }
                      ],
                      "start": 4516,
                      "end": 4521
                    },
                    "start": 4509,
                    "end": 4521
                  },
                  "start": 4507,
                  "end": 4521
                },
                "body": null,
                "expression": false,
                "start": 4467,
                "end": 4522
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4456,
              "end": 4522
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4535,
                "end": 4538
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4539,
                        "end": 4540
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4539,
                      "end": 4540
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4542,
                        "end": 4543
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4542,
                      "end": 4543
                    }
                  ],
                  "start": 4538,
                  "end": 4544
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4557,
                          "end": 4564
                        },
                        "typeArguments": null,
                        "start": 4550,
                        "end": 4564
                      },
                      "start": 4548,
                      "end": 4564
                    },
                    "start": 4545,
                    "end": 4564
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4574,
                            "end": 4581
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4582,
                            "end": 4590
                          },
                          "start": 4574,
                          "end": 4590
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4591,
                                    "end": 4598
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4599,
                                    "end": 4607
                                  },
                                  "start": 4591,
                                  "end": 4607
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4608,
                                        "end": 4609
                                      },
                                      "typeArguments": null,
                                      "start": 4608,
                                      "end": 4609
                                    }
                                  ],
                                  "start": 4607,
                                  "end": 4610
                                },
                                "start": 4591,
                                "end": 4610
                              },
                              "start": 4591,
                              "end": 4612
                            }
                          ],
                          "start": 4590,
                          "end": 4613
                        },
                        "start": 4574,
                        "end": 4613
                      },
                      "start": 4572,
                      "end": 4613
                    },
                    "start": 4566,
                    "end": 4613
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4630,
                                  "end": 4631
                                },
                                "typeArguments": null,
                                "start": 4630,
                                "end": 4631
                              },
                              "start": 4628,
                              "end": 4631
                            },
                            "start": 4624,
                            "end": 4631
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4640,
                                "end": 4646
                              },
                              "start": 4638,
                              "end": 4646
                            },
                            "start": 4633,
                            "end": 4646
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4661,
                                "end": 4667
                              },
                              "start": 4659,
                              "end": 4667
                            },
                            "start": 4648,
                            "end": 4667
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4672,
                                "end": 4679
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4680,
                                "end": 4688
                              },
                              "start": 4672,
                              "end": 4688
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4689,
                                    "end": 4690
                                  },
                                  "typeArguments": null,
                                  "start": 4689,
                                  "end": 4690
                                }
                              ],
                              "start": 4688,
                              "end": 4691
                            },
                            "start": 4672,
                            "end": 4691
                          },
                          "start": 4669,
                          "end": 4691
                        },
                        "start": 4623,
                        "end": 4691
                      },
                      "start": 4621,
                      "end": 4691
                    },
                    "start": 4615,
                    "end": 4691
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4694,
                      "end": 4701
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4702,
                              "end": 4703
                            },
                            "typeArguments": null,
                            "start": 4702,
                            "end": 4703
                          },
                          "start": 4702,
                          "end": 4705
                        }
                      ],
                      "start": 4701,
                      "end": 4706
                    },
                    "start": 4694,
                    "end": 4706
                  },
                  "start": 4692,
                  "end": 4706
                },
                "body": null,
                "expression": false,
                "start": 4538,
                "end": 4707
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4528,
              "end": 4707
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4719,
                "end": 4722
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4723,
                        "end": 4724
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4723,
                      "end": 4724
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4726,
                        "end": 4727
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4726,
                      "end": 4727
                    }
                  ],
                  "start": 4722,
                  "end": 4728
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4741,
                          "end": 4748
                        },
                        "typeArguments": null,
                        "start": 4734,
                        "end": 4748
                      },
                      "start": 4732,
                      "end": 4748
                    },
                    "start": 4729,
                    "end": 4748
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4758,
                            "end": 4765
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4766,
                            "end": 4774
                          },
                          "start": 4758,
                          "end": 4774
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4775,
                                    "end": 4782
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4783,
                                    "end": 4791
                                  },
                                  "start": 4775,
                                  "end": 4791
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4792,
                                        "end": 4793
                                      },
                                      "typeArguments": null,
                                      "start": 4792,
                                      "end": 4793
                                    }
                                  ],
                                  "start": 4791,
                                  "end": 4794
                                },
                                "start": 4775,
                                "end": 4794
                              },
                              "start": 4775,
                              "end": 4796
                            }
                          ],
                          "start": 4774,
                          "end": 4797
                        },
                        "start": 4758,
                        "end": 4797
                      },
                      "start": 4756,
                      "end": 4797
                    },
                    "start": 4750,
                    "end": 4797
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4814,
                                  "end": 4815
                                },
                                "typeArguments": null,
                                "start": 4814,
                                "end": 4815
                              },
                              "start": 4812,
                              "end": 4815
                            },
                            "start": 4808,
                            "end": 4815
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4824,
                                "end": 4830
                              },
                              "start": 4822,
                              "end": 4830
                            },
                            "start": 4817,
                            "end": 4830
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4845,
                                "end": 4851
                              },
                              "start": 4843,
                              "end": 4851
                            },
                            "start": 4832,
                            "end": 4851
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
                              "start": 4856,
                              "end": 4857
                            },
                            "typeArguments": null,
                            "start": 4856,
                            "end": 4857
                          },
                          "start": 4853,
                          "end": 4857
                        },
                        "start": 4807,
                        "end": 4857
                      },
                      "start": 4805,
                      "end": 4857
                    },
                    "start": 4799,
                    "end": 4857
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4860,
                      "end": 4867
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4868,
                              "end": 4869
                            },
                            "typeArguments": null,
                            "start": 4868,
                            "end": 4869
                          },
                          "start": 4868,
                          "end": 4871
                        }
                      ],
                      "start": 4867,
                      "end": 4872
                    },
                    "start": 4860,
                    "end": 4872
                  },
                  "start": 4858,
                  "end": 4872
                },
                "body": null,
                "expression": false,
                "start": 4722,
                "end": 4873
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4712,
              "end": 4873
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 4885,
                "end": 4888
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4889,
                        "end": 4890
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4889,
                      "end": 4890
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 4892,
                        "end": 4893
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 4892,
                      "end": 4893
                    }
                  ],
                  "start": 4888,
                  "end": 4894
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4907,
                          "end": 4914
                        },
                        "typeArguments": null,
                        "start": 4900,
                        "end": 4914
                      },
                      "start": 4898,
                      "end": 4914
                    },
                    "start": 4895,
                    "end": 4914
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4924,
                            "end": 4931
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4932,
                            "end": 4940
                          },
                          "start": 4924,
                          "end": 4940
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4941,
                                  "end": 4942
                                },
                                "typeArguments": null,
                                "start": 4941,
                                "end": 4942
                              },
                              "start": 4941,
                              "end": 4944
                            }
                          ],
                          "start": 4940,
                          "end": 4945
                        },
                        "start": 4924,
                        "end": 4945
                      },
                      "start": 4922,
                      "end": 4945
                    },
                    "start": 4916,
                    "end": 4945
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4962,
                                  "end": 4963
                                },
                                "typeArguments": null,
                                "start": 4962,
                                "end": 4963
                              },
                              "start": 4960,
                              "end": 4963
                            },
                            "start": 4956,
                            "end": 4963
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4972,
                                "end": 4978
                              },
                              "start": 4970,
                              "end": 4978
                            },
                            "start": 4965,
                            "end": 4978
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 4993,
                                "end": 4999
                              },
                              "start": 4991,
                              "end": 4999
                            },
                            "start": 4980,
                            "end": 4999
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5004,
                                "end": 5011
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5012,
                                "end": 5020
                              },
                              "start": 5004,
                              "end": 5020
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5021,
                                    "end": 5022
                                  },
                                  "typeArguments": null,
                                  "start": 5021,
                                  "end": 5022
                                }
                              ],
                              "start": 5020,
                              "end": 5023
                            },
                            "start": 5004,
                            "end": 5023
                          },
                          "start": 5001,
                          "end": 5023
                        },
                        "start": 4955,
                        "end": 5023
                      },
                      "start": 4953,
                      "end": 5023
                    },
                    "start": 4947,
                    "end": 5023
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5026,
                      "end": 5033
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5034,
                              "end": 5035
                            },
                            "typeArguments": null,
                            "start": 5034,
                            "end": 5035
                          },
                          "start": 5034,
                          "end": 5037
                        }
                      ],
                      "start": 5033,
                      "end": 5038
                    },
                    "start": 5026,
                    "end": 5038
                  },
                  "start": 5024,
                  "end": 5038
                },
                "body": null,
                "expression": false,
                "start": 4888,
                "end": 5039
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4878,
              "end": 5039
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5051,
                "end": 5054
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5055,
                        "end": 5056
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5055,
                      "end": 5056
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5058,
                        "end": 5059
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5058,
                      "end": 5059
                    }
                  ],
                  "start": 5054,
                  "end": 5060
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5073,
                          "end": 5080
                        },
                        "typeArguments": null,
                        "start": 5066,
                        "end": 5080
                      },
                      "start": 5064,
                      "end": 5080
                    },
                    "start": 5061,
                    "end": 5080
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5090,
                            "end": 5097
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5098,
                            "end": 5106
                          },
                          "start": 5090,
                          "end": 5106
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5107,
                                  "end": 5108
                                },
                                "typeArguments": null,
                                "start": 5107,
                                "end": 5108
                              },
                              "start": 5107,
                              "end": 5110
                            }
                          ],
                          "start": 5106,
                          "end": 5111
                        },
                        "start": 5090,
                        "end": 5111
                      },
                      "start": 5088,
                      "end": 5111
                    },
                    "start": 5082,
                    "end": 5111
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5128,
                                  "end": 5129
                                },
                                "typeArguments": null,
                                "start": 5128,
                                "end": 5129
                              },
                              "start": 5126,
                              "end": 5129
                            },
                            "start": 5122,
                            "end": 5129
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5138,
                                "end": 5144
                              },
                              "start": 5136,
                              "end": 5144
                            },
                            "start": 5131,
                            "end": 5144
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5159,
                                "end": 5165
                              },
                              "start": 5157,
                              "end": 5165
                            },
                            "start": 5146,
                            "end": 5165
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
                              "start": 5170,
                              "end": 5171
                            },
                            "typeArguments": null,
                            "start": 5170,
                            "end": 5171
                          },
                          "start": 5167,
                          "end": 5171
                        },
                        "start": 5121,
                        "end": 5171
                      },
                      "start": 5119,
                      "end": 5171
                    },
                    "start": 5113,
                    "end": 5171
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5174,
                      "end": 5181
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5182,
                              "end": 5183
                            },
                            "typeArguments": null,
                            "start": 5182,
                            "end": 5183
                          },
                          "start": 5182,
                          "end": 5185
                        }
                      ],
                      "start": 5181,
                      "end": 5186
                    },
                    "start": 5174,
                    "end": 5186
                  },
                  "start": 5172,
                  "end": 5186
                },
                "body": null,
                "expression": false,
                "start": 5054,
                "end": 5187
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5044,
              "end": 5187
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5199,
                "end": 5202
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5203,
                        "end": 5204
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5203,
                      "end": 5204
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5206,
                        "end": 5207
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5206,
                      "end": 5207
                    }
                  ],
                  "start": 5202,
                  "end": 5208
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5221,
                          "end": 5228
                        },
                        "typeArguments": null,
                        "start": 5214,
                        "end": 5228
                      },
                      "start": 5212,
                      "end": 5228
                    },
                    "start": 5209,
                    "end": 5228
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5238,
                              "end": 5245
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5246,
                              "end": 5254
                            },
                            "start": 5238,
                            "end": 5254
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5255,
                                  "end": 5256
                                },
                                "typeArguments": null,
                                "start": 5255,
                                "end": 5256
                              }
                            ],
                            "start": 5254,
                            "end": 5257
                          },
                          "start": 5238,
                          "end": 5257
                        },
                        "start": 5238,
                        "end": 5259
                      },
                      "start": 5236,
                      "end": 5259
                    },
                    "start": 5230,
                    "end": 5259
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5276,
                                  "end": 5277
                                },
                                "typeArguments": null,
                                "start": 5276,
                                "end": 5277
                              },
                              "start": 5274,
                              "end": 5277
                            },
                            "start": 5270,
                            "end": 5277
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5286,
                                "end": 5292
                              },
                              "start": 5284,
                              "end": 5292
                            },
                            "start": 5279,
                            "end": 5292
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5307,
                                "end": 5313
                              },
                              "start": 5305,
                              "end": 5313
                            },
                            "start": 5294,
                            "end": 5313
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5318,
                                "end": 5325
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5326,
                                "end": 5334
                              },
                              "start": 5318,
                              "end": 5334
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5335,
                                    "end": 5336
                                  },
                                  "typeArguments": null,
                                  "start": 5335,
                                  "end": 5336
                                }
                              ],
                              "start": 5334,
                              "end": 5337
                            },
                            "start": 5318,
                            "end": 5337
                          },
                          "start": 5315,
                          "end": 5337
                        },
                        "start": 5269,
                        "end": 5337
                      },
                      "start": 5267,
                      "end": 5337
                    },
                    "start": 5261,
                    "end": 5337
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5340,
                      "end": 5347
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5348,
                              "end": 5349
                            },
                            "typeArguments": null,
                            "start": 5348,
                            "end": 5349
                          },
                          "start": 5348,
                          "end": 5351
                        }
                      ],
                      "start": 5347,
                      "end": 5352
                    },
                    "start": 5340,
                    "end": 5352
                  },
                  "start": 5338,
                  "end": 5352
                },
                "body": null,
                "expression": false,
                "start": 5202,
                "end": 5353
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5192,
              "end": 5353
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5365,
                "end": 5368
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5369,
                        "end": 5370
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5369,
                      "end": 5370
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5372,
                        "end": 5373
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5372,
                      "end": 5373
                    }
                  ],
                  "start": 5368,
                  "end": 5374
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5387,
                          "end": 5394
                        },
                        "typeArguments": null,
                        "start": 5380,
                        "end": 5394
                      },
                      "start": 5378,
                      "end": 5394
                    },
                    "start": 5375,
                    "end": 5394
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5404,
                              "end": 5411
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5412,
                              "end": 5420
                            },
                            "start": 5404,
                            "end": 5420
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5421,
                                  "end": 5422
                                },
                                "typeArguments": null,
                                "start": 5421,
                                "end": 5422
                              }
                            ],
                            "start": 5420,
                            "end": 5423
                          },
                          "start": 5404,
                          "end": 5423
                        },
                        "start": 5404,
                        "end": 5425
                      },
                      "start": 5402,
                      "end": 5425
                    },
                    "start": 5396,
                    "end": 5425
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5442,
                                  "end": 5443
                                },
                                "typeArguments": null,
                                "start": 5442,
                                "end": 5443
                              },
                              "start": 5440,
                              "end": 5443
                            },
                            "start": 5436,
                            "end": 5443
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5452,
                                "end": 5458
                              },
                              "start": 5450,
                              "end": 5458
                            },
                            "start": 5445,
                            "end": 5458
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5473,
                                "end": 5479
                              },
                              "start": 5471,
                              "end": 5479
                            },
                            "start": 5460,
                            "end": 5479
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
                              "start": 5484,
                              "end": 5485
                            },
                            "typeArguments": null,
                            "start": 5484,
                            "end": 5485
                          },
                          "start": 5481,
                          "end": 5485
                        },
                        "start": 5435,
                        "end": 5485
                      },
                      "start": 5433,
                      "end": 5485
                    },
                    "start": 5427,
                    "end": 5485
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5488,
                      "end": 5495
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5496,
                              "end": 5497
                            },
                            "typeArguments": null,
                            "start": 5496,
                            "end": 5497
                          },
                          "start": 5496,
                          "end": 5499
                        }
                      ],
                      "start": 5495,
                      "end": 5500
                    },
                    "start": 5488,
                    "end": 5500
                  },
                  "start": 5486,
                  "end": 5500
                },
                "body": null,
                "expression": false,
                "start": 5368,
                "end": 5501
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5358,
              "end": 5501
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5513,
                "end": 5516
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5517,
                        "end": 5518
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5517,
                      "end": 5518
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5520,
                        "end": 5521
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5520,
                      "end": 5521
                    }
                  ],
                  "start": 5516,
                  "end": 5522
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5535,
                          "end": 5542
                        },
                        "typeArguments": null,
                        "start": 5528,
                        "end": 5542
                      },
                      "start": 5526,
                      "end": 5542
                    },
                    "start": 5523,
                    "end": 5542
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5552,
                            "end": 5553
                          },
                          "typeArguments": null,
                          "start": 5552,
                          "end": 5553
                        },
                        "start": 5552,
                        "end": 5555
                      },
                      "start": 5550,
                      "end": 5555
                    },
                    "start": 5544,
                    "end": 5555
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5572,
                                  "end": 5573
                                },
                                "typeArguments": null,
                                "start": 5572,
                                "end": 5573
                              },
                              "start": 5570,
                              "end": 5573
                            },
                            "start": 5566,
                            "end": 5573
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5582,
                                "end": 5588
                              },
                              "start": 5580,
                              "end": 5588
                            },
                            "start": 5575,
                            "end": 5588
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5603,
                                "end": 5609
                              },
                              "start": 5601,
                              "end": 5609
                            },
                            "start": 5590,
                            "end": 5609
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5614,
                                "end": 5621
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5622,
                                "end": 5630
                              },
                              "start": 5614,
                              "end": 5630
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5631,
                                    "end": 5632
                                  },
                                  "typeArguments": null,
                                  "start": 5631,
                                  "end": 5632
                                }
                              ],
                              "start": 5630,
                              "end": 5633
                            },
                            "start": 5614,
                            "end": 5633
                          },
                          "start": 5611,
                          "end": 5633
                        },
                        "start": 5565,
                        "end": 5633
                      },
                      "start": 5563,
                      "end": 5633
                    },
                    "start": 5557,
                    "end": 5633
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5636,
                      "end": 5643
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5644,
                              "end": 5645
                            },
                            "typeArguments": null,
                            "start": 5644,
                            "end": 5645
                          },
                          "start": 5644,
                          "end": 5647
                        }
                      ],
                      "start": 5643,
                      "end": 5648
                    },
                    "start": 5636,
                    "end": 5648
                  },
                  "start": 5634,
                  "end": 5648
                },
                "body": null,
                "expression": false,
                "start": 5516,
                "end": 5649
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5506,
              "end": 5649
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "map",
                "optional": false,
                "typeAnnotation": null,
                "start": 5661,
                "end": 5664
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5665,
                        "end": 5666
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5665,
                      "end": 5666
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5668,
                        "end": 5669
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5668,
                      "end": 5669
                    }
                  ],
                  "start": 5664,
                  "end": 5670
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5683,
                          "end": 5690
                        },
                        "typeArguments": null,
                        "start": 5676,
                        "end": 5690
                      },
                      "start": 5674,
                      "end": 5690
                    },
                    "start": 5671,
                    "end": 5690
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5700,
                            "end": 5701
                          },
                          "typeArguments": null,
                          "start": 5700,
                          "end": 5701
                        },
                        "start": 5700,
                        "end": 5703
                      },
                      "start": 5698,
                      "end": 5703
                    },
                    "start": 5692,
                    "end": 5703
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "mapper",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5720,
                                  "end": 5721
                                },
                                "typeArguments": null,
                                "start": 5720,
                                "end": 5721
                              },
                              "start": 5718,
                              "end": 5721
                            },
                            "start": 5714,
                            "end": 5721
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5730,
                                "end": 5736
                              },
                              "start": 5728,
                              "end": 5736
                            },
                            "start": 5723,
                            "end": 5736
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5751,
                                "end": 5757
                              },
                              "start": 5749,
                              "end": 5757
                            },
                            "start": 5738,
                            "end": 5757
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
                              "start": 5762,
                              "end": 5763
                            },
                            "typeArguments": null,
                            "start": 5762,
                            "end": 5763
                          },
                          "start": 5759,
                          "end": 5763
                        },
                        "start": 5713,
                        "end": 5763
                      },
                      "start": 5711,
                      "end": 5763
                    },
                    "start": 5705,
                    "end": 5763
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5766,
                      "end": 5773
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5774,
                              "end": 5775
                            },
                            "typeArguments": null,
                            "start": 5774,
                            "end": 5775
                          },
                          "start": 5774,
                          "end": 5777
                        }
                      ],
                      "start": 5773,
                      "end": 5778
                    },
                    "start": 5766,
                    "end": 5778
                  },
                  "start": 5764,
                  "end": 5778
                },
                "body": null,
                "expression": false,
                "start": 5664,
                "end": 5779
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5654,
              "end": 5779
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 5792,
                "end": 5798
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5799,
                        "end": 5800
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5799,
                      "end": 5800
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 5802,
                        "end": 5803
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 5802,
                      "end": 5803
                    }
                  ],
                  "start": 5798,
                  "end": 5804
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 5817,
                          "end": 5824
                        },
                        "typeArguments": null,
                        "start": 5810,
                        "end": 5824
                      },
                      "start": 5808,
                      "end": 5824
                    },
                    "start": 5805,
                    "end": 5824
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5834,
                            "end": 5841
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5842,
                            "end": 5850
                          },
                          "start": 5834,
                          "end": 5850
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5851,
                                    "end": 5858
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5859,
                                    "end": 5867
                                  },
                                  "start": 5851,
                                  "end": 5867
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 5868,
                                        "end": 5869
                                      },
                                      "typeArguments": null,
                                      "start": 5868,
                                      "end": 5869
                                    }
                                  ],
                                  "start": 5867,
                                  "end": 5870
                                },
                                "start": 5851,
                                "end": 5870
                              },
                              "start": 5851,
                              "end": 5872
                            }
                          ],
                          "start": 5850,
                          "end": 5873
                        },
                        "start": 5834,
                        "end": 5873
                      },
                      "start": 5832,
                      "end": 5873
                    },
                    "start": 5826,
                    "end": 5873
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 5892,
                                  "end": 5893
                                },
                                "typeArguments": null,
                                "start": 5892,
                                "end": 5893
                              },
                              "start": 5890,
                              "end": 5893
                            },
                            "start": 5885,
                            "end": 5893
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5904,
                                  "end": 5905
                                },
                                "typeArguments": null,
                                "start": 5904,
                                "end": 5905
                              },
                              "start": 5902,
                              "end": 5905
                            },
                            "start": 5895,
                            "end": 5905
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5914,
                                "end": 5920
                              },
                              "start": 5912,
                              "end": 5920
                            },
                            "start": 5907,
                            "end": 5920
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 5935,
                                "end": 5941
                              },
                              "start": 5933,
                              "end": 5941
                            },
                            "start": 5922,
                            "end": 5941
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5946,
                                "end": 5953
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 5954,
                                "end": 5962
                              },
                              "start": 5946,
                              "end": 5962
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 5963,
                                    "end": 5964
                                  },
                                  "typeArguments": null,
                                  "start": 5963,
                                  "end": 5964
                                }
                              ],
                              "start": 5962,
                              "end": 5965
                            },
                            "start": 5946,
                            "end": 5965
                          },
                          "start": 5943,
                          "end": 5965
                        },
                        "start": 5884,
                        "end": 5965
                      },
                      "start": 5882,
                      "end": 5965
                    },
                    "start": 5875,
                    "end": 5965
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 5982,
                          "end": 5983
                        },
                        "typeArguments": null,
                        "start": 5982,
                        "end": 5983
                      },
                      "start": 5980,
                      "end": 5983
                    },
                    "start": 5967,
                    "end": 5983
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5986,
                      "end": 5993
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 5994,
                            "end": 5995
                          },
                          "typeArguments": null,
                          "start": 5994,
                          "end": 5995
                        }
                      ],
                      "start": 5993,
                      "end": 5996
                    },
                    "start": 5986,
                    "end": 5996
                  },
                  "start": 5984,
                  "end": 5996
                },
                "body": null,
                "expression": false,
                "start": 5798,
                "end": 5997
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 5785,
              "end": 5997
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6009,
                "end": 6015
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6016,
                        "end": 6017
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6016,
                      "end": 6017
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6019,
                        "end": 6020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6019,
                      "end": 6020
                    }
                  ],
                  "start": 6015,
                  "end": 6021
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6034,
                          "end": 6041
                        },
                        "typeArguments": null,
                        "start": 6027,
                        "end": 6041
                      },
                      "start": 6025,
                      "end": 6041
                    },
                    "start": 6022,
                    "end": 6041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6051,
                            "end": 6058
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6059,
                            "end": 6067
                          },
                          "start": 6051,
                          "end": 6067
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6068,
                                    "end": 6075
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6076,
                                    "end": 6084
                                  },
                                  "start": 6068,
                                  "end": 6084
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 6085,
                                        "end": 6086
                                      },
                                      "typeArguments": null,
                                      "start": 6085,
                                      "end": 6086
                                    }
                                  ],
                                  "start": 6084,
                                  "end": 6087
                                },
                                "start": 6068,
                                "end": 6087
                              },
                              "start": 6068,
                              "end": 6089
                            }
                          ],
                          "start": 6067,
                          "end": 6090
                        },
                        "start": 6051,
                        "end": 6090
                      },
                      "start": 6049,
                      "end": 6090
                    },
                    "start": 6043,
                    "end": 6090
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 6109,
                                  "end": 6110
                                },
                                "typeArguments": null,
                                "start": 6109,
                                "end": 6110
                              },
                              "start": 6107,
                              "end": 6110
                            },
                            "start": 6102,
                            "end": 6110
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6121,
                                  "end": 6122
                                },
                                "typeArguments": null,
                                "start": 6121,
                                "end": 6122
                              },
                              "start": 6119,
                              "end": 6122
                            },
                            "start": 6112,
                            "end": 6122
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6131,
                                "end": 6137
                              },
                              "start": 6129,
                              "end": 6137
                            },
                            "start": 6124,
                            "end": 6137
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6152,
                                "end": 6158
                              },
                              "start": 6150,
                              "end": 6158
                            },
                            "start": 6139,
                            "end": 6158
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
                              "start": 6163,
                              "end": 6164
                            },
                            "typeArguments": null,
                            "start": 6163,
                            "end": 6164
                          },
                          "start": 6160,
                          "end": 6164
                        },
                        "start": 6101,
                        "end": 6164
                      },
                      "start": 6099,
                      "end": 6164
                    },
                    "start": 6092,
                    "end": 6164
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 6181,
                          "end": 6182
                        },
                        "typeArguments": null,
                        "start": 6181,
                        "end": 6182
                      },
                      "start": 6179,
                      "end": 6182
                    },
                    "start": 6166,
                    "end": 6182
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6185,
                      "end": 6192
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6193,
                            "end": 6194
                          },
                          "typeArguments": null,
                          "start": 6193,
                          "end": 6194
                        }
                      ],
                      "start": 6192,
                      "end": 6195
                    },
                    "start": 6185,
                    "end": 6195
                  },
                  "start": 6183,
                  "end": 6195
                },
                "body": null,
                "expression": false,
                "start": 6015,
                "end": 6196
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6002,
              "end": 6196
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6209,
                "end": 6215
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6216,
                        "end": 6217
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6216,
                      "end": 6217
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6219,
                        "end": 6220
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6219,
                      "end": 6220
                    }
                  ],
                  "start": 6215,
                  "end": 6221
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6234,
                          "end": 6241
                        },
                        "typeArguments": null,
                        "start": 6227,
                        "end": 6241
                      },
                      "start": 6225,
                      "end": 6241
                    },
                    "start": 6222,
                    "end": 6241
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6251,
                            "end": 6258
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6259,
                            "end": 6267
                          },
                          "start": 6251,
                          "end": 6267
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6268,
                                  "end": 6269
                                },
                                "typeArguments": null,
                                "start": 6268,
                                "end": 6269
                              },
                              "start": 6268,
                              "end": 6271
                            }
                          ],
                          "start": 6267,
                          "end": 6272
                        },
                        "start": 6251,
                        "end": 6272
                      },
                      "start": 6249,
                      "end": 6272
                    },
                    "start": 6243,
                    "end": 6272
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 6291,
                                  "end": 6292
                                },
                                "typeArguments": null,
                                "start": 6291,
                                "end": 6292
                              },
                              "start": 6289,
                              "end": 6292
                            },
                            "start": 6284,
                            "end": 6292
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6303,
                                  "end": 6304
                                },
                                "typeArguments": null,
                                "start": 6303,
                                "end": 6304
                              },
                              "start": 6301,
                              "end": 6304
                            },
                            "start": 6294,
                            "end": 6304
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6313,
                                "end": 6319
                              },
                              "start": 6311,
                              "end": 6319
                            },
                            "start": 6306,
                            "end": 6319
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6334,
                                "end": 6340
                              },
                              "start": 6332,
                              "end": 6340
                            },
                            "start": 6321,
                            "end": 6340
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6345,
                                "end": 6352
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6353,
                                "end": 6361
                              },
                              "start": 6345,
                              "end": 6361
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6362,
                                    "end": 6363
                                  },
                                  "typeArguments": null,
                                  "start": 6362,
                                  "end": 6363
                                }
                              ],
                              "start": 6361,
                              "end": 6364
                            },
                            "start": 6345,
                            "end": 6364
                          },
                          "start": 6342,
                          "end": 6364
                        },
                        "start": 6283,
                        "end": 6364
                      },
                      "start": 6281,
                      "end": 6364
                    },
                    "start": 6274,
                    "end": 6364
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 6381,
                          "end": 6382
                        },
                        "typeArguments": null,
                        "start": 6381,
                        "end": 6382
                      },
                      "start": 6379,
                      "end": 6382
                    },
                    "start": 6366,
                    "end": 6382
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6385,
                      "end": 6392
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6393,
                            "end": 6394
                          },
                          "typeArguments": null,
                          "start": 6393,
                          "end": 6394
                        }
                      ],
                      "start": 6392,
                      "end": 6395
                    },
                    "start": 6385,
                    "end": 6395
                  },
                  "start": 6383,
                  "end": 6395
                },
                "body": null,
                "expression": false,
                "start": 6215,
                "end": 6396
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6202,
              "end": 6396
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6408,
                "end": 6414
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6415,
                        "end": 6416
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6415,
                      "end": 6416
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6418,
                        "end": 6419
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6418,
                      "end": 6419
                    }
                  ],
                  "start": 6414,
                  "end": 6420
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6433,
                          "end": 6440
                        },
                        "typeArguments": null,
                        "start": 6426,
                        "end": 6440
                      },
                      "start": 6424,
                      "end": 6440
                    },
                    "start": 6421,
                    "end": 6440
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6450,
                            "end": 6457
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6458,
                            "end": 6466
                          },
                          "start": 6450,
                          "end": 6466
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6467,
                                  "end": 6468
                                },
                                "typeArguments": null,
                                "start": 6467,
                                "end": 6468
                              },
                              "start": 6467,
                              "end": 6470
                            }
                          ],
                          "start": 6466,
                          "end": 6471
                        },
                        "start": 6450,
                        "end": 6471
                      },
                      "start": 6448,
                      "end": 6471
                    },
                    "start": 6442,
                    "end": 6471
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 6490,
                                  "end": 6491
                                },
                                "typeArguments": null,
                                "start": 6490,
                                "end": 6491
                              },
                              "start": 6488,
                              "end": 6491
                            },
                            "start": 6483,
                            "end": 6491
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6502,
                                  "end": 6503
                                },
                                "typeArguments": null,
                                "start": 6502,
                                "end": 6503
                              },
                              "start": 6500,
                              "end": 6503
                            },
                            "start": 6493,
                            "end": 6503
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6512,
                                "end": 6518
                              },
                              "start": 6510,
                              "end": 6518
                            },
                            "start": 6505,
                            "end": 6518
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6533,
                                "end": 6539
                              },
                              "start": 6531,
                              "end": 6539
                            },
                            "start": 6520,
                            "end": 6539
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
                              "start": 6544,
                              "end": 6545
                            },
                            "typeArguments": null,
                            "start": 6544,
                            "end": 6545
                          },
                          "start": 6541,
                          "end": 6545
                        },
                        "start": 6482,
                        "end": 6545
                      },
                      "start": 6480,
                      "end": 6545
                    },
                    "start": 6473,
                    "end": 6545
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 6562,
                          "end": 6563
                        },
                        "typeArguments": null,
                        "start": 6562,
                        "end": 6563
                      },
                      "start": 6560,
                      "end": 6563
                    },
                    "start": 6547,
                    "end": 6563
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6566,
                      "end": 6573
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6574,
                            "end": 6575
                          },
                          "typeArguments": null,
                          "start": 6574,
                          "end": 6575
                        }
                      ],
                      "start": 6573,
                      "end": 6576
                    },
                    "start": 6566,
                    "end": 6576
                  },
                  "start": 6564,
                  "end": 6576
                },
                "body": null,
                "expression": false,
                "start": 6414,
                "end": 6577
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6401,
              "end": 6577
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6590,
                "end": 6596
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6597,
                        "end": 6598
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6597,
                      "end": 6598
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6600,
                        "end": 6601
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6600,
                      "end": 6601
                    }
                  ],
                  "start": 6596,
                  "end": 6602
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6615,
                          "end": 6622
                        },
                        "typeArguments": null,
                        "start": 6608,
                        "end": 6622
                      },
                      "start": 6606,
                      "end": 6622
                    },
                    "start": 6603,
                    "end": 6622
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6632,
                              "end": 6639
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6640,
                              "end": 6648
                            },
                            "start": 6632,
                            "end": 6648
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6649,
                                  "end": 6650
                                },
                                "typeArguments": null,
                                "start": 6649,
                                "end": 6650
                              }
                            ],
                            "start": 6648,
                            "end": 6651
                          },
                          "start": 6632,
                          "end": 6651
                        },
                        "start": 6632,
                        "end": 6653
                      },
                      "start": 6630,
                      "end": 6653
                    },
                    "start": 6624,
                    "end": 6653
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 6672,
                                  "end": 6673
                                },
                                "typeArguments": null,
                                "start": 6672,
                                "end": 6673
                              },
                              "start": 6670,
                              "end": 6673
                            },
                            "start": 6665,
                            "end": 6673
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6684,
                                  "end": 6685
                                },
                                "typeArguments": null,
                                "start": 6684,
                                "end": 6685
                              },
                              "start": 6682,
                              "end": 6685
                            },
                            "start": 6675,
                            "end": 6685
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6694,
                                "end": 6700
                              },
                              "start": 6692,
                              "end": 6700
                            },
                            "start": 6687,
                            "end": 6700
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6715,
                                "end": 6721
                              },
                              "start": 6713,
                              "end": 6721
                            },
                            "start": 6702,
                            "end": 6721
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6726,
                                "end": 6733
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 6734,
                                "end": 6742
                              },
                              "start": 6726,
                              "end": 6742
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 6743,
                                    "end": 6744
                                  },
                                  "typeArguments": null,
                                  "start": 6743,
                                  "end": 6744
                                }
                              ],
                              "start": 6742,
                              "end": 6745
                            },
                            "start": 6726,
                            "end": 6745
                          },
                          "start": 6723,
                          "end": 6745
                        },
                        "start": 6664,
                        "end": 6745
                      },
                      "start": 6662,
                      "end": 6745
                    },
                    "start": 6655,
                    "end": 6745
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 6762,
                          "end": 6763
                        },
                        "typeArguments": null,
                        "start": 6762,
                        "end": 6763
                      },
                      "start": 6760,
                      "end": 6763
                    },
                    "start": 6747,
                    "end": 6763
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6766,
                      "end": 6773
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6774,
                            "end": 6775
                          },
                          "typeArguments": null,
                          "start": 6774,
                          "end": 6775
                        }
                      ],
                      "start": 6773,
                      "end": 6776
                    },
                    "start": 6766,
                    "end": 6776
                  },
                  "start": 6764,
                  "end": 6776
                },
                "body": null,
                "expression": false,
                "start": 6596,
                "end": 6777
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6583,
              "end": 6777
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6789,
                "end": 6795
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6796,
                        "end": 6797
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6796,
                      "end": 6797
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6799,
                        "end": 6800
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6799,
                      "end": 6800
                    }
                  ],
                  "start": 6795,
                  "end": 6801
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6814,
                          "end": 6821
                        },
                        "typeArguments": null,
                        "start": 6807,
                        "end": 6821
                      },
                      "start": 6805,
                      "end": 6821
                    },
                    "start": 6802,
                    "end": 6821
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6831,
                              "end": 6838
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6839,
                              "end": 6847
                            },
                            "start": 6831,
                            "end": 6847
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6848,
                                  "end": 6849
                                },
                                "typeArguments": null,
                                "start": 6848,
                                "end": 6849
                              }
                            ],
                            "start": 6847,
                            "end": 6850
                          },
                          "start": 6831,
                          "end": 6850
                        },
                        "start": 6831,
                        "end": 6852
                      },
                      "start": 6829,
                      "end": 6852
                    },
                    "start": 6823,
                    "end": 6852
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 6871,
                                  "end": 6872
                                },
                                "typeArguments": null,
                                "start": 6871,
                                "end": 6872
                              },
                              "start": 6869,
                              "end": 6872
                            },
                            "start": 6864,
                            "end": 6872
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6883,
                                  "end": 6884
                                },
                                "typeArguments": null,
                                "start": 6883,
                                "end": 6884
                              },
                              "start": 6881,
                              "end": 6884
                            },
                            "start": 6874,
                            "end": 6884
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6893,
                                "end": 6899
                              },
                              "start": 6891,
                              "end": 6899
                            },
                            "start": 6886,
                            "end": 6899
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 6914,
                                "end": 6920
                              },
                              "start": 6912,
                              "end": 6920
                            },
                            "start": 6901,
                            "end": 6920
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
                              "start": 6925,
                              "end": 6926
                            },
                            "typeArguments": null,
                            "start": 6925,
                            "end": 6926
                          },
                          "start": 6922,
                          "end": 6926
                        },
                        "start": 6863,
                        "end": 6926
                      },
                      "start": 6861,
                      "end": 6926
                    },
                    "start": 6854,
                    "end": 6926
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 6943,
                          "end": 6944
                        },
                        "typeArguments": null,
                        "start": 6943,
                        "end": 6944
                      },
                      "start": 6941,
                      "end": 6944
                    },
                    "start": 6928,
                    "end": 6944
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6947,
                      "end": 6954
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 6955,
                            "end": 6956
                          },
                          "typeArguments": null,
                          "start": 6955,
                          "end": 6956
                        }
                      ],
                      "start": 6954,
                      "end": 6957
                    },
                    "start": 6947,
                    "end": 6957
                  },
                  "start": 6945,
                  "end": 6957
                },
                "body": null,
                "expression": false,
                "start": 6795,
                "end": 6958
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6782,
              "end": 6958
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 6971,
                "end": 6977
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6978,
                        "end": 6979
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6978,
                      "end": 6979
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 6981,
                        "end": 6982
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 6981,
                      "end": 6982
                    }
                  ],
                  "start": 6977,
                  "end": 6983
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 6996,
                          "end": 7003
                        },
                        "typeArguments": null,
                        "start": 6989,
                        "end": 7003
                      },
                      "start": 6987,
                      "end": 7003
                    },
                    "start": 6984,
                    "end": 7003
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7013,
                            "end": 7014
                          },
                          "typeArguments": null,
                          "start": 7013,
                          "end": 7014
                        },
                        "start": 7013,
                        "end": 7016
                      },
                      "start": 7011,
                      "end": 7016
                    },
                    "start": 7005,
                    "end": 7016
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 7035,
                                  "end": 7036
                                },
                                "typeArguments": null,
                                "start": 7035,
                                "end": 7036
                              },
                              "start": 7033,
                              "end": 7036
                            },
                            "start": 7028,
                            "end": 7036
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7047,
                                  "end": 7048
                                },
                                "typeArguments": null,
                                "start": 7047,
                                "end": 7048
                              },
                              "start": 7045,
                              "end": 7048
                            },
                            "start": 7038,
                            "end": 7048
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7057,
                                "end": 7063
                              },
                              "start": 7055,
                              "end": 7063
                            },
                            "start": 7050,
                            "end": 7063
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7078,
                                "end": 7084
                              },
                              "start": 7076,
                              "end": 7084
                            },
                            "start": 7065,
                            "end": 7084
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7089,
                                "end": 7096
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7097,
                                "end": 7105
                              },
                              "start": 7089,
                              "end": 7105
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7106,
                                    "end": 7107
                                  },
                                  "typeArguments": null,
                                  "start": 7106,
                                  "end": 7107
                                }
                              ],
                              "start": 7105,
                              "end": 7108
                            },
                            "start": 7089,
                            "end": 7108
                          },
                          "start": 7086,
                          "end": 7108
                        },
                        "start": 7027,
                        "end": 7108
                      },
                      "start": 7025,
                      "end": 7108
                    },
                    "start": 7018,
                    "end": 7108
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 7125,
                          "end": 7126
                        },
                        "typeArguments": null,
                        "start": 7125,
                        "end": 7126
                      },
                      "start": 7123,
                      "end": 7126
                    },
                    "start": 7110,
                    "end": 7126
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7129,
                      "end": 7136
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7137,
                            "end": 7138
                          },
                          "typeArguments": null,
                          "start": 7137,
                          "end": 7138
                        }
                      ],
                      "start": 7136,
                      "end": 7139
                    },
                    "start": 7129,
                    "end": 7139
                  },
                  "start": 7127,
                  "end": 7139
                },
                "body": null,
                "expression": false,
                "start": 6977,
                "end": 7140
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 6964,
              "end": 7140
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 7152,
                "end": 7158
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7159,
                        "end": 7160
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7159,
                      "end": 7160
                    },
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7162,
                        "end": 7163
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7162,
                      "end": 7163
                    }
                  ],
                  "start": 7158,
                  "end": 7164
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7177,
                          "end": 7184
                        },
                        "typeArguments": null,
                        "start": 7170,
                        "end": 7184
                      },
                      "start": 7168,
                      "end": 7184
                    },
                    "start": 7165,
                    "end": 7184
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7194,
                            "end": 7195
                          },
                          "typeArguments": null,
                          "start": 7194,
                          "end": 7195
                        },
                        "start": 7194,
                        "end": 7197
                      },
                      "start": 7192,
                      "end": 7197
                    },
                    "start": 7186,
                    "end": 7197
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "reducer",
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
                            "name": "total",
                            "optional": false,
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
                                  "start": 7216,
                                  "end": 7217
                                },
                                "typeArguments": null,
                                "start": 7216,
                                "end": 7217
                              },
                              "start": 7214,
                              "end": 7217
                            },
                            "start": 7209,
                            "end": 7217
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "current",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7228,
                                  "end": 7229
                                },
                                "typeArguments": null,
                                "start": 7228,
                                "end": 7229
                              },
                              "start": 7226,
                              "end": 7229
                            },
                            "start": 7219,
                            "end": 7229
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7238,
                                "end": 7244
                              },
                              "start": 7236,
                              "end": 7244
                            },
                            "start": 7231,
                            "end": 7244
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7259,
                                "end": 7265
                              },
                              "start": 7257,
                              "end": 7265
                            },
                            "start": 7246,
                            "end": 7265
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
                              "start": 7270,
                              "end": 7271
                            },
                            "typeArguments": null,
                            "start": 7270,
                            "end": 7271
                          },
                          "start": 7267,
                          "end": 7271
                        },
                        "start": 7208,
                        "end": 7271
                      },
                      "start": 7206,
                      "end": 7271
                    },
                    "start": 7199,
                    "end": 7271
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "initialValue",
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
                          "start": 7288,
                          "end": 7289
                        },
                        "typeArguments": null,
                        "start": 7288,
                        "end": 7289
                      },
                      "start": 7286,
                      "end": 7289
                    },
                    "start": 7273,
                    "end": 7289
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7292,
                      "end": 7299
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7300,
                            "end": 7301
                          },
                          "typeArguments": null,
                          "start": 7300,
                          "end": 7301
                        }
                      ],
                      "start": 7299,
                      "end": 7302
                    },
                    "start": 7292,
                    "end": 7302
                  },
                  "start": 7290,
                  "end": 7302
                },
                "body": null,
                "expression": false,
                "start": 7158,
                "end": 7303
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7145,
              "end": 7303
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7316,
                "end": 7322
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7323,
                        "end": 7324
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7323,
                      "end": 7324
                    }
                  ],
                  "start": 7322,
                  "end": 7325
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7338,
                          "end": 7345
                        },
                        "typeArguments": null,
                        "start": 7331,
                        "end": 7345
                      },
                      "start": 7329,
                      "end": 7345
                    },
                    "start": 7326,
                    "end": 7345
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7355,
                            "end": 7362
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7363,
                            "end": 7371
                          },
                          "start": 7355,
                          "end": 7371
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7372,
                                    "end": 7379
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7380,
                                    "end": 7388
                                  },
                                  "start": 7372,
                                  "end": 7388
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7389,
                                        "end": 7390
                                      },
                                      "typeArguments": null,
                                      "start": 7389,
                                      "end": 7390
                                    }
                                  ],
                                  "start": 7388,
                                  "end": 7391
                                },
                                "start": 7372,
                                "end": 7391
                              },
                              "start": 7372,
                              "end": 7393
                            }
                          ],
                          "start": 7371,
                          "end": 7394
                        },
                        "start": 7355,
                        "end": 7394
                      },
                      "start": 7353,
                      "end": 7394
                    },
                    "start": 7347,
                    "end": 7394
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7413,
                                  "end": 7414
                                },
                                "typeArguments": null,
                                "start": 7413,
                                "end": 7414
                              },
                              "start": 7411,
                              "end": 7414
                            },
                            "start": 7407,
                            "end": 7414
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7423,
                                "end": 7429
                              },
                              "start": 7421,
                              "end": 7429
                            },
                            "start": 7416,
                            "end": 7429
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7444,
                                "end": 7450
                              },
                              "start": 7442,
                              "end": 7450
                            },
                            "start": 7431,
                            "end": 7450
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7455,
                                "end": 7462
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7463,
                                "end": 7471
                              },
                              "start": 7455,
                              "end": 7471
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7472,
                                  "end": 7479
                                }
                              ],
                              "start": 7471,
                              "end": 7480
                            },
                            "start": 7455,
                            "end": 7480
                          },
                          "start": 7452,
                          "end": 7480
                        },
                        "start": 7406,
                        "end": 7480
                      },
                      "start": 7404,
                      "end": 7480
                    },
                    "start": 7396,
                    "end": 7480
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7483,
                      "end": 7490
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7491,
                              "end": 7492
                            },
                            "typeArguments": null,
                            "start": 7491,
                            "end": 7492
                          },
                          "start": 7491,
                          "end": 7494
                        }
                      ],
                      "start": 7490,
                      "end": 7495
                    },
                    "start": 7483,
                    "end": 7495
                  },
                  "start": 7481,
                  "end": 7495
                },
                "body": null,
                "expression": false,
                "start": 7322,
                "end": 7496
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7309,
              "end": 7496
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7508,
                "end": 7514
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7515,
                        "end": 7516
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7515,
                      "end": 7516
                    }
                  ],
                  "start": 7514,
                  "end": 7517
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7530,
                          "end": 7537
                        },
                        "typeArguments": null,
                        "start": 7523,
                        "end": 7537
                      },
                      "start": 7521,
                      "end": 7537
                    },
                    "start": 7518,
                    "end": 7537
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7547,
                            "end": 7554
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7555,
                            "end": 7563
                          },
                          "start": 7547,
                          "end": 7563
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7564,
                                    "end": 7571
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 7572,
                                    "end": 7580
                                  },
                                  "start": 7564,
                                  "end": 7580
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 7581,
                                        "end": 7582
                                      },
                                      "typeArguments": null,
                                      "start": 7581,
                                      "end": 7582
                                    }
                                  ],
                                  "start": 7580,
                                  "end": 7583
                                },
                                "start": 7564,
                                "end": 7583
                              },
                              "start": 7564,
                              "end": 7585
                            }
                          ],
                          "start": 7563,
                          "end": 7586
                        },
                        "start": 7547,
                        "end": 7586
                      },
                      "start": 7545,
                      "end": 7586
                    },
                    "start": 7539,
                    "end": 7586
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7605,
                                  "end": 7606
                                },
                                "typeArguments": null,
                                "start": 7605,
                                "end": 7606
                              },
                              "start": 7603,
                              "end": 7606
                            },
                            "start": 7599,
                            "end": 7606
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7615,
                                "end": 7621
                              },
                              "start": 7613,
                              "end": 7621
                            },
                            "start": 7608,
                            "end": 7621
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7636,
                                "end": 7642
                              },
                              "start": 7634,
                              "end": 7642
                            },
                            "start": 7623,
                            "end": 7642
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7647,
                            "end": 7654
                          },
                          "start": 7644,
                          "end": 7654
                        },
                        "start": 7598,
                        "end": 7654
                      },
                      "start": 7596,
                      "end": 7654
                    },
                    "start": 7588,
                    "end": 7654
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7657,
                      "end": 7664
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7665,
                              "end": 7666
                            },
                            "typeArguments": null,
                            "start": 7665,
                            "end": 7666
                          },
                          "start": 7665,
                          "end": 7668
                        }
                      ],
                      "start": 7664,
                      "end": 7669
                    },
                    "start": 7657,
                    "end": 7669
                  },
                  "start": 7655,
                  "end": 7669
                },
                "body": null,
                "expression": false,
                "start": 7514,
                "end": 7670
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7501,
              "end": 7670
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7682,
                "end": 7688
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7689,
                        "end": 7690
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7689,
                      "end": 7690
                    }
                  ],
                  "start": 7688,
                  "end": 7691
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7704,
                          "end": 7711
                        },
                        "typeArguments": null,
                        "start": 7697,
                        "end": 7711
                      },
                      "start": 7695,
                      "end": 7711
                    },
                    "start": 7692,
                    "end": 7711
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7721,
                            "end": 7728
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7729,
                            "end": 7737
                          },
                          "start": 7721,
                          "end": 7737
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7738,
                                  "end": 7739
                                },
                                "typeArguments": null,
                                "start": 7738,
                                "end": 7739
                              },
                              "start": 7738,
                              "end": 7741
                            }
                          ],
                          "start": 7737,
                          "end": 7742
                        },
                        "start": 7721,
                        "end": 7742
                      },
                      "start": 7719,
                      "end": 7742
                    },
                    "start": 7713,
                    "end": 7742
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7761,
                                  "end": 7762
                                },
                                "typeArguments": null,
                                "start": 7761,
                                "end": 7762
                              },
                              "start": 7759,
                              "end": 7762
                            },
                            "start": 7755,
                            "end": 7762
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7771,
                                "end": 7777
                              },
                              "start": 7769,
                              "end": 7777
                            },
                            "start": 7764,
                            "end": 7777
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7792,
                                "end": 7798
                              },
                              "start": 7790,
                              "end": 7798
                            },
                            "start": 7779,
                            "end": 7798
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7803,
                                "end": 7810
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7811,
                                "end": 7819
                              },
                              "start": 7803,
                              "end": 7819
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 7820,
                                  "end": 7827
                                }
                              ],
                              "start": 7819,
                              "end": 7828
                            },
                            "start": 7803,
                            "end": 7828
                          },
                          "start": 7800,
                          "end": 7828
                        },
                        "start": 7754,
                        "end": 7828
                      },
                      "start": 7752,
                      "end": 7828
                    },
                    "start": 7744,
                    "end": 7828
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7831,
                      "end": 7838
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7839,
                              "end": 7840
                            },
                            "typeArguments": null,
                            "start": 7839,
                            "end": 7840
                          },
                          "start": 7839,
                          "end": 7842
                        }
                      ],
                      "start": 7838,
                      "end": 7843
                    },
                    "start": 7831,
                    "end": 7843
                  },
                  "start": 7829,
                  "end": 7843
                },
                "body": null,
                "expression": false,
                "start": 7688,
                "end": 7844
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7675,
              "end": 7844
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 7856,
                "end": 7862
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7863,
                        "end": 7864
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 7863,
                      "end": 7864
                    }
                  ],
                  "start": 7862,
                  "end": 7865
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7878,
                          "end": 7885
                        },
                        "typeArguments": null,
                        "start": 7871,
                        "end": 7885
                      },
                      "start": 7869,
                      "end": 7885
                    },
                    "start": 7866,
                    "end": 7885
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7895,
                            "end": 7902
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7903,
                            "end": 7911
                          },
                          "start": 7895,
                          "end": 7911
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7912,
                                  "end": 7913
                                },
                                "typeArguments": null,
                                "start": 7912,
                                "end": 7913
                              },
                              "start": 7912,
                              "end": 7915
                            }
                          ],
                          "start": 7911,
                          "end": 7916
                        },
                        "start": 7895,
                        "end": 7916
                      },
                      "start": 7893,
                      "end": 7916
                    },
                    "start": 7887,
                    "end": 7916
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7935,
                                  "end": 7936
                                },
                                "typeArguments": null,
                                "start": 7935,
                                "end": 7936
                              },
                              "start": 7933,
                              "end": 7936
                            },
                            "start": 7929,
                            "end": 7936
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7945,
                                "end": 7951
                              },
                              "start": 7943,
                              "end": 7951
                            },
                            "start": 7938,
                            "end": 7951
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 7966,
                                "end": 7972
                              },
                              "start": 7964,
                              "end": 7972
                            },
                            "start": 7953,
                            "end": 7972
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 7977,
                            "end": 7984
                          },
                          "start": 7974,
                          "end": 7984
                        },
                        "start": 7928,
                        "end": 7984
                      },
                      "start": 7926,
                      "end": 7984
                    },
                    "start": 7918,
                    "end": 7984
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7987,
                      "end": 7994
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 7995,
                              "end": 7996
                            },
                            "typeArguments": null,
                            "start": 7995,
                            "end": 7996
                          },
                          "start": 7995,
                          "end": 7998
                        }
                      ],
                      "start": 7994,
                      "end": 7999
                    },
                    "start": 7987,
                    "end": 7999
                  },
                  "start": 7985,
                  "end": 7999
                },
                "body": null,
                "expression": false,
                "start": 7862,
                "end": 8000
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 7849,
              "end": 8000
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8012,
                "end": 8018
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8019,
                        "end": 8020
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8019,
                      "end": 8020
                    }
                  ],
                  "start": 8018,
                  "end": 8021
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8034,
                          "end": 8041
                        },
                        "typeArguments": null,
                        "start": 8027,
                        "end": 8041
                      },
                      "start": 8025,
                      "end": 8041
                    },
                    "start": 8022,
                    "end": 8041
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8051,
                              "end": 8058
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8059,
                              "end": 8067
                            },
                            "start": 8051,
                            "end": 8067
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8068,
                                  "end": 8069
                                },
                                "typeArguments": null,
                                "start": 8068,
                                "end": 8069
                              }
                            ],
                            "start": 8067,
                            "end": 8070
                          },
                          "start": 8051,
                          "end": 8070
                        },
                        "start": 8051,
                        "end": 8072
                      },
                      "start": 8049,
                      "end": 8072
                    },
                    "start": 8043,
                    "end": 8072
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8091,
                                  "end": 8092
                                },
                                "typeArguments": null,
                                "start": 8091,
                                "end": 8092
                              },
                              "start": 8089,
                              "end": 8092
                            },
                            "start": 8085,
                            "end": 8092
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8101,
                                "end": 8107
                              },
                              "start": 8099,
                              "end": 8107
                            },
                            "start": 8094,
                            "end": 8107
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8122,
                                "end": 8128
                              },
                              "start": 8120,
                              "end": 8128
                            },
                            "start": 8109,
                            "end": 8128
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8133,
                                "end": 8140
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8141,
                                "end": 8149
                              },
                              "start": 8133,
                              "end": 8149
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8150,
                                  "end": 8157
                                }
                              ],
                              "start": 8149,
                              "end": 8158
                            },
                            "start": 8133,
                            "end": 8158
                          },
                          "start": 8130,
                          "end": 8158
                        },
                        "start": 8084,
                        "end": 8158
                      },
                      "start": 8082,
                      "end": 8158
                    },
                    "start": 8074,
                    "end": 8158
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8161,
                      "end": 8168
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8169,
                              "end": 8170
                            },
                            "typeArguments": null,
                            "start": 8169,
                            "end": 8170
                          },
                          "start": 8169,
                          "end": 8172
                        }
                      ],
                      "start": 8168,
                      "end": 8173
                    },
                    "start": 8161,
                    "end": 8173
                  },
                  "start": 8159,
                  "end": 8173
                },
                "body": null,
                "expression": false,
                "start": 8018,
                "end": 8174
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8005,
              "end": 8174
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8186,
                "end": 8192
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8193,
                        "end": 8194
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8193,
                      "end": 8194
                    }
                  ],
                  "start": 8192,
                  "end": 8195
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8208,
                          "end": 8215
                        },
                        "typeArguments": null,
                        "start": 8201,
                        "end": 8215
                      },
                      "start": 8199,
                      "end": 8215
                    },
                    "start": 8196,
                    "end": 8215
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Promise",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8225,
                              "end": 8232
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Thenable",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8233,
                              "end": 8241
                            },
                            "start": 8225,
                            "end": 8241
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8242,
                                  "end": 8243
                                },
                                "typeArguments": null,
                                "start": 8242,
                                "end": 8243
                              }
                            ],
                            "start": 8241,
                            "end": 8244
                          },
                          "start": 8225,
                          "end": 8244
                        },
                        "start": 8225,
                        "end": 8246
                      },
                      "start": 8223,
                      "end": 8246
                    },
                    "start": 8217,
                    "end": 8246
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8265,
                                  "end": 8266
                                },
                                "typeArguments": null,
                                "start": 8265,
                                "end": 8266
                              },
                              "start": 8263,
                              "end": 8266
                            },
                            "start": 8259,
                            "end": 8266
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8275,
                                "end": 8281
                              },
                              "start": 8273,
                              "end": 8281
                            },
                            "start": 8268,
                            "end": 8281
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8296,
                                "end": 8302
                              },
                              "start": 8294,
                              "end": 8302
                            },
                            "start": 8283,
                            "end": 8302
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8307,
                            "end": 8314
                          },
                          "start": 8304,
                          "end": 8314
                        },
                        "start": 8258,
                        "end": 8314
                      },
                      "start": 8256,
                      "end": 8314
                    },
                    "start": 8248,
                    "end": 8314
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8317,
                      "end": 8324
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8325,
                              "end": 8326
                            },
                            "typeArguments": null,
                            "start": 8325,
                            "end": 8326
                          },
                          "start": 8325,
                          "end": 8328
                        }
                      ],
                      "start": 8324,
                      "end": 8329
                    },
                    "start": 8317,
                    "end": 8329
                  },
                  "start": 8315,
                  "end": 8329
                },
                "body": null,
                "expression": false,
                "start": 8192,
                "end": 8330
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8179,
              "end": 8330
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8342,
                "end": 8348
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8349,
                        "end": 8350
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8349,
                      "end": 8350
                    }
                  ],
                  "start": 8348,
                  "end": 8351
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8364,
                          "end": 8371
                        },
                        "typeArguments": null,
                        "start": 8357,
                        "end": 8371
                      },
                      "start": 8355,
                      "end": 8371
                    },
                    "start": 8352,
                    "end": 8371
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8381,
                            "end": 8382
                          },
                          "typeArguments": null,
                          "start": 8381,
                          "end": 8382
                        },
                        "start": 8381,
                        "end": 8384
                      },
                      "start": 8379,
                      "end": 8384
                    },
                    "start": 8373,
                    "end": 8384
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8403,
                                  "end": 8404
                                },
                                "typeArguments": null,
                                "start": 8403,
                                "end": 8404
                              },
                              "start": 8401,
                              "end": 8404
                            },
                            "start": 8397,
                            "end": 8404
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8413,
                                "end": 8419
                              },
                              "start": 8411,
                              "end": 8419
                            },
                            "start": 8406,
                            "end": 8419
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8434,
                                "end": 8440
                              },
                              "start": 8432,
                              "end": 8440
                            },
                            "start": 8421,
                            "end": 8440
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Promise",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8445,
                                "end": 8452
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Thenable",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 8453,
                                "end": 8461
                              },
                              "start": 8445,
                              "end": 8461
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "params": [
                                {
                                  "type": "TSBooleanKeyword",
                                  "start": 8462,
                                  "end": 8469
                                }
                              ],
                              "start": 8461,
                              "end": 8470
                            },
                            "start": 8445,
                            "end": 8470
                          },
                          "start": 8442,
                          "end": 8470
                        },
                        "start": 8396,
                        "end": 8470
                      },
                      "start": 8394,
                      "end": 8470
                    },
                    "start": 8386,
                    "end": 8470
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8473,
                      "end": 8480
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8481,
                              "end": 8482
                            },
                            "typeArguments": null,
                            "start": 8481,
                            "end": 8482
                          },
                          "start": 8481,
                          "end": 8484
                        }
                      ],
                      "start": 8480,
                      "end": 8485
                    },
                    "start": 8473,
                    "end": 8485
                  },
                  "start": 8471,
                  "end": 8485
                },
                "body": null,
                "expression": false,
                "start": 8348,
                "end": 8486
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8335,
              "end": 8486
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "filter",
                "optional": false,
                "typeAnnotation": null,
                "start": 8498,
                "end": 8504
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
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
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8505,
                        "end": 8506
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8505,
                      "end": 8506
                    }
                  ],
                  "start": 8504,
                  "end": 8507
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dit",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Promise",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 8520,
                          "end": 8527
                        },
                        "typeArguments": null,
                        "start": 8513,
                        "end": 8527
                      },
                      "start": 8511,
                      "end": 8527
                    },
                    "start": 8508,
                    "end": 8527
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "values",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "R",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8537,
                            "end": 8538
                          },
                          "typeArguments": null,
                          "start": 8537,
                          "end": 8538
                        },
                        "start": 8537,
                        "end": 8540
                      },
                      "start": 8535,
                      "end": 8540
                    },
                    "start": 8529,
                    "end": 8540
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "filterer",
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
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "R",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8559,
                                  "end": 8560
                                },
                                "typeArguments": null,
                                "start": 8559,
                                "end": 8560
                              },
                              "start": 8557,
                              "end": 8560
                            },
                            "start": 8553,
                            "end": 8560
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8569,
                                "end": 8575
                              },
                              "start": 8567,
                              "end": 8575
                            },
                            "start": 8562,
                            "end": 8575
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arrayLength",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 8590,
                                "end": 8596
                              },
                              "start": 8588,
                              "end": 8596
                            },
                            "start": 8577,
                            "end": 8596
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 8601,
                            "end": 8608
                          },
                          "start": 8598,
                          "end": 8608
                        },
                        "start": 8552,
                        "end": 8608
                      },
                      "start": 8550,
                      "end": 8608
                    },
                    "start": 8542,
                    "end": 8608
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8611,
                      "end": 8618
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSArrayType",
                          "elementType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 8619,
                              "end": 8620
                            },
                            "typeArguments": null,
                            "start": 8619,
                            "end": 8620
                          },
                          "start": 8619,
                          "end": 8622
                        }
                      ],
                      "start": 8618,
                      "end": 8623
                    },
                    "start": 8611,
                    "end": 8623
                  },
                  "start": 8609,
                  "end": 8623
                },
                "body": null,
                "expression": false,
                "start": 8504,
                "end": 8624
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 8491,
              "end": 8624
            }
          ],
          "start": 294,
          "end": 8626
        },
        "abstract": false,
        "declare": true,
        "start": 238,
        "end": 8626
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 231,
      "end": 8626
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Promise",
          "optional": false,
          "typeAnnotation": null,
          "start": 8653,
          "end": 8660
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Thenable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8681,
                  "end": 8689
                },
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "R",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8690,
                        "end": 8691
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 8690,
                      "end": 8691
                    }
                  ],
                  "start": 8689,
                  "end": 8692
                },
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8697,
                        "end": 8701
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
                              "start": 8702,
                              "end": 8703
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8702,
                            "end": 8703
                          }
                        ],
                        "start": 8701,
                        "end": 8704
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8726,
                                        "end": 8727
                                      },
                                      "typeArguments": null,
                                      "start": 8726,
                                      "end": 8727
                                    },
                                    "start": 8724,
                                    "end": 8727
                                  },
                                  "start": 8719,
                                  "end": 8727
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8732,
                                    "end": 8740
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8741,
                                          "end": 8742
                                        },
                                        "typeArguments": null,
                                        "start": 8741,
                                        "end": 8742
                                      }
                                    ],
                                    "start": 8740,
                                    "end": 8743
                                  },
                                  "start": 8732,
                                  "end": 8743
                                },
                                "start": 8729,
                                "end": 8743
                              },
                              "start": 8718,
                              "end": 8743
                            },
                            "start": 8716,
                            "end": 8743
                          },
                          "start": 8705,
                          "end": 8743
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
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
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8765,
                                      "end": 8768
                                    },
                                    "start": 8763,
                                    "end": 8768
                                  },
                                  "start": 8758,
                                  "end": 8768
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8773,
                                    "end": 8781
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8782,
                                          "end": 8783
                                        },
                                        "typeArguments": null,
                                        "start": 8782,
                                        "end": 8783
                                      }
                                    ],
                                    "start": 8781,
                                    "end": 8784
                                  },
                                  "start": 8773,
                                  "end": 8784
                                },
                                "start": 8770,
                                "end": 8784
                              },
                              "start": 8757,
                              "end": 8784
                            },
                            "start": 8755,
                            "end": 8784
                          },
                          "start": 8745,
                          "end": 8784
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8787,
                            "end": 8795
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8796,
                                  "end": 8797
                                },
                                "typeArguments": null,
                                "start": 8796,
                                "end": 8797
                              }
                            ],
                            "start": 8795,
                            "end": 8798
                          },
                          "start": 8787,
                          "end": 8798
                        },
                        "start": 8785,
                        "end": 8798
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8697,
                      "end": 8799
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8802,
                        "end": 8806
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
                              "start": 8807,
                              "end": 8808
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8807,
                            "end": 8808
                          }
                        ],
                        "start": 8806,
                        "end": 8809
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8831,
                                        "end": 8832
                                      },
                                      "typeArguments": null,
                                      "start": 8831,
                                      "end": 8832
                                    },
                                    "start": 8829,
                                    "end": 8832
                                  },
                                  "start": 8824,
                                  "end": 8832
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8837,
                                    "end": 8845
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8846,
                                          "end": 8847
                                        },
                                        "typeArguments": null,
                                        "start": 8846,
                                        "end": 8847
                                      }
                                    ],
                                    "start": 8845,
                                    "end": 8848
                                  },
                                  "start": 8837,
                                  "end": 8848
                                },
                                "start": 8834,
                                "end": 8848
                              },
                              "start": 8823,
                              "end": 8848
                            },
                            "start": 8821,
                            "end": 8848
                          },
                          "start": 8810,
                          "end": 8848
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8871,
                                      "end": 8874
                                    },
                                    "start": 8869,
                                    "end": 8874
                                  },
                                  "start": 8864,
                                  "end": 8874
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
                                    "start": 8879,
                                    "end": 8880
                                  },
                                  "typeArguments": null,
                                  "start": 8879,
                                  "end": 8880
                                },
                                "start": 8876,
                                "end": 8880
                              },
                              "start": 8863,
                              "end": 8880
                            },
                            "start": 8861,
                            "end": 8880
                          },
                          "start": 8850,
                          "end": 8880
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8883,
                            "end": 8891
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8892,
                                  "end": 8893
                                },
                                "typeArguments": null,
                                "start": 8892,
                                "end": 8893
                              }
                            ],
                            "start": 8891,
                            "end": 8894
                          },
                          "start": 8883,
                          "end": 8894
                        },
                        "start": 8881,
                        "end": 8894
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8802,
                      "end": 8895
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8898,
                        "end": 8902
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
                              "start": 8903,
                              "end": 8904
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8903,
                            "end": 8904
                          }
                        ],
                        "start": 8902,
                        "end": 8905
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
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
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 8927,
                                        "end": 8928
                                      },
                                      "typeArguments": null,
                                      "start": 8927,
                                      "end": 8928
                                    },
                                    "start": 8925,
                                    "end": 8928
                                  },
                                  "start": 8920,
                                  "end": 8928
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
                                    "start": 8933,
                                    "end": 8934
                                  },
                                  "typeArguments": null,
                                  "start": 8933,
                                  "end": 8934
                                },
                                "start": 8930,
                                "end": 8934
                              },
                              "start": 8919,
                              "end": 8934
                            },
                            "start": 8917,
                            "end": 8934
                          },
                          "start": 8906,
                          "end": 8934
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
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
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 8956,
                                      "end": 8959
                                    },
                                    "start": 8954,
                                    "end": 8959
                                  },
                                  "start": 8949,
                                  "end": 8959
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thenable",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 8964,
                                    "end": 8972
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 8973,
                                          "end": 8974
                                        },
                                        "typeArguments": null,
                                        "start": 8973,
                                        "end": 8974
                                      }
                                    ],
                                    "start": 8972,
                                    "end": 8975
                                  },
                                  "start": 8964,
                                  "end": 8975
                                },
                                "start": 8961,
                                "end": 8975
                              },
                              "start": 8948,
                              "end": 8975
                            },
                            "start": 8946,
                            "end": 8975
                          },
                          "start": 8936,
                          "end": 8975
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 8978,
                            "end": 8986
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8987,
                                  "end": 8988
                                },
                                "typeArguments": null,
                                "start": 8987,
                                "end": 8988
                              }
                            ],
                            "start": 8986,
                            "end": 8989
                          },
                          "start": 8978,
                          "end": 8989
                        },
                        "start": 8976,
                        "end": 8989
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8898,
                      "end": 8990
                    },
                    {
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "then",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8993,
                        "end": 8997
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
                              "start": 8998,
                              "end": 8999
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 8998,
                            "end": 8999
                          }
                        ],
                        "start": 8997,
                        "end": 9000
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onFulfilled",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "R",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 9023,
                                        "end": 9024
                                      },
                                      "typeArguments": null,
                                      "start": 9023,
                                      "end": 9024
                                    },
                                    "start": 9021,
                                    "end": 9024
                                  },
                                  "start": 9016,
                                  "end": 9024
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
                                    "start": 9029,
                                    "end": 9030
                                  },
                                  "typeArguments": null,
                                  "start": 9029,
                                  "end": 9030
                                },
                                "start": 9026,
                                "end": 9030
                              },
                              "start": 9015,
                              "end": 9030
                            },
                            "start": 9013,
                            "end": 9030
                          },
                          "start": 9001,
                          "end": 9030
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "onRejected",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 9053,
                                      "end": 9056
                                    },
                                    "start": 9051,
                                    "end": 9056
                                  },
                                  "start": 9046,
                                  "end": 9056
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
                                    "start": 9061,
                                    "end": 9062
                                  },
                                  "typeArguments": null,
                                  "start": 9061,
                                  "end": 9062
                                },
                                "start": 9058,
                                "end": 9062
                              },
                              "start": 9045,
                              "end": 9062
                            },
                            "start": 9043,
                            "end": 9062
                          },
                          "start": 9032,
                          "end": 9062
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Thenable",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9065,
                            "end": 9073
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 9074,
                                  "end": 9075
                                },
                                "typeArguments": null,
                                "start": 9074,
                                "end": 9075
                              }
                            ],
                            "start": 9073,
                            "end": 9076
                          },
                          "start": 9065,
                          "end": 9076
                        },
                        "start": 9063,
                        "end": 9076
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 8993,
                      "end": 9077
                    }
                  ],
                  "start": 8693,
                  "end": 9080
                },
                "declare": false,
                "start": 8671,
                "end": 9080
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 8664,
              "end": 9080
            }
          ],
          "start": 8661,
          "end": 9083
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 8635,
        "end": 9083
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 8628,
      "end": 9083
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9095,
        "end": 9098
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
              "start": 9105,
              "end": 9106
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 9108,
                "end": 9114
              },
              "start": 9106,
              "end": 9114
            },
            "accessibility": null,
            "static": false,
            "start": 9105,
            "end": 9115
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
              "start": 9120,
              "end": 9121
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 9123,
                "end": 9129
              },
              "start": 9121,
              "end": 9129
            },
            "accessibility": null,
            "static": false,
            "start": 9120,
            "end": 9130
          }
        ],
        "start": 9099,
        "end": 9132
      },
      "declare": false,
      "start": 9085,
      "end": 9132
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
                "type": "TSAnyKeyword",
                "start": 9140,
                "end": 9143
              },
              "start": 9138,
              "end": 9143
            },
            "start": 9137,
            "end": 9143
          },
          "init": null,
          "definite": false,
          "start": 9137,
          "end": 9143
        }
      ],
      "declare": false,
      "start": 9133,
      "end": 9144
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
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 9154,
                  "end": 9157
                },
                "start": 9154,
                "end": 9159
              },
              "start": 9152,
              "end": 9159
            },
            "start": 9149,
            "end": 9159
          },
          "init": null,
          "definite": false,
          "start": 9149,
          "end": 9159
        }
      ],
      "declare": false,
      "start": 9145,
      "end": 9160
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
            "name": "foo",
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
                  "start": 9170,
                  "end": 9173
                },
                "typeArguments": null,
                "start": 9170,
                "end": 9173
              },
              "start": 9168,
              "end": 9173
            },
            "start": 9165,
            "end": 9173
          },
          "init": null,
          "definite": false,
          "start": 9165,
          "end": 9173
        }
      ],
      "declare": false,
      "start": 9161,
      "end": 9174
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
            "name": "fooProm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9188,
                  "end": 9195
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9196,
                        "end": 9199
                      },
                      "typeArguments": null,
                      "start": 9196,
                      "end": 9199
                    }
                  ],
                  "start": 9195,
                  "end": 9200
                },
                "start": 9188,
                "end": 9200
              },
              "start": 9186,
              "end": 9200
            },
            "start": 9179,
            "end": 9200
          },
          "init": null,
          "definite": false,
          "start": 9179,
          "end": 9200
        }
      ],
      "declare": false,
      "start": 9175,
      "end": 9201
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9203,
          "end": 9210
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9213,
              "end": 9220
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9221,
              "end": 9224
            },
            "optional": false,
            "computed": false,
            "start": 9213,
            "end": 9224
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9225,
              "end": 9232
            },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9250,
                      "end": 9253
                    },
                    "start": 9243,
                    "end": 9254
                  }
                ],
                "start": 9240,
                "end": 9256
              },
              "id": null,
              "generator": false,
              "start": 9234,
              "end": 9256
            }
          ],
          "optional": false,
          "start": 9213,
          "end": 9257
        },
        "start": 9203,
        "end": 9257
      },
      "directive": null,
      "start": 9203,
      "end": 9258
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9259,
          "end": 9266
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9269,
              "end": 9276
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9277,
              "end": 9280
            },
            "optional": false,
            "computed": false,
            "start": 9269,
            "end": 9280
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9281,
              "end": 9288
            },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9306,
                      "end": 9309
                    },
                    "start": 9299,
                    "end": 9310
                  }
                ],
                "start": 9296,
                "end": 9312
              },
              "id": null,
              "generator": false,
              "start": 9290,
              "end": 9312
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 9314,
              "end": 9317
            }
          ],
          "optional": false,
          "start": 9269,
          "end": 9318
        },
        "start": 9259,
        "end": 9318
      },
      "directive": null,
      "start": 9259,
      "end": 9319
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "fooProm",
          "optional": false,
          "typeAnnotation": null,
          "start": 9320,
          "end": 9327
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9330,
              "end": 9337
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "try",
              "optional": false,
              "typeAnnotation": null,
              "start": 9338,
              "end": 9341
            },
            "optional": false,
            "computed": false,
            "start": 9330,
            "end": 9341
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "Promise",
              "optional": false,
              "typeAnnotation": null,
              "start": 9342,
              "end": 9349
            },
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9367,
                      "end": 9370
                    },
                    "start": 9360,
                    "end": 9371
                  }
                ],
                "start": 9357,
                "end": 9373
              },
              "id": null,
              "generator": false,
              "start": 9351,
              "end": 9373
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 9375,
              "end": 9378
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 9380,
              "end": 9381
            }
          ],
          "optional": false,
          "start": 9330,
          "end": 9382
        },
        "start": 9320,
        "end": 9382
      },
      "directive": null,
      "start": 9320,
      "end": 9383
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 231,
  "end": 9383
}
```
