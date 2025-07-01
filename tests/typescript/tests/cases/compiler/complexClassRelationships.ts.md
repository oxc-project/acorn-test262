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
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 55
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 64,
        "end": 68
      },
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
              "name": "createEmpty",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 100
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "Derived",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 111
                  },
                  "typeArguments": null,
                  "start": 104,
                  "end": 111
                },
                "start": 102,
                "end": 111
              },
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
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 126,
                          "end": 130
                        },
                        "init": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 137,
                            "end": 144
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 133,
                          "end": 146
                        },
                        "definite": false,
                        "start": 126,
                        "end": 146
                      }
                    ],
                    "declare": false,
                    "start": 122,
                    "end": 147
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 163,
                      "end": 167
                    },
                    "start": 156,
                    "end": 168
                  }
                ],
                "start": 112,
                "end": 174
              },
              "expression": false,
              "start": 100,
              "end": 174
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 75,
            "end": 174
          }
        ],
        "start": 69,
        "end": 176
      },
      "abstract": false,
      "declare": false,
      "start": 42,
      "end": 176
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BaseCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 183,
        "end": 197
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
              "start": 198,
              "end": 199
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 208,
                "end": 212
              },
              "typeArguments": null,
              "start": 208,
              "end": 212
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 198,
            "end": 212
          }
        ],
        "start": 197,
        "end": 213
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 231
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
                  "name": "f",
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
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 241,
                            "end": 242
                          },
                          "typeArguments": null,
                          "start": 241,
                          "end": 242
                        },
                        "start": 238,
                        "end": 242
                      },
                      "start": 235,
                      "end": 242
                    },
                    "start": 233,
                    "end": 242
                  },
                  "start": 232,
                  "end": 242
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
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
                                "name": "Thing",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 261,
                                "end": 266
                              },
                              "typeArguments": null,
                              "start": 261,
                              "end": 266
                            },
                            "start": 259,
                            "end": 266
                          },
                          "start": 255,
                          "end": 266
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ArrayExpression",
                              "elements": [
                                {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "item",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 281,
                                    "end": 285
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Components",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 286,
                                    "end": 296
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 281,
                                  "end": 296
                                }
                              ],
                              "start": 280,
                              "end": 297
                            },
                            "start": 273,
                            "end": 298
                          }
                        ],
                        "start": 271,
                        "end": 300
                      },
                      "id": null,
                      "generator": false,
                      "start": 254,
                      "end": 300
                    },
                    "directive": null,
                    "start": 254,
                    "end": 301
                  }
                ],
                "start": 244,
                "end": 307
              },
              "expression": false,
              "start": 231,
              "end": 307
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 220,
            "end": 307
          }
        ],
        "start": 214,
        "end": 309
      },
      "abstract": false,
      "declare": false,
      "start": 177,
      "end": 309
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 316,
        "end": 320
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
              "name": "ownerCollection",
              "optional": false,
              "typeAnnotation": null,
              "start": 327,
              "end": 342
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BaseCollection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 358
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 359,
                        "end": 363
                      },
                      "typeArguments": null,
                      "start": 359,
                      "end": 363
                    }
                  ],
                  "start": 358,
                  "end": 364
                },
                "start": 344,
                "end": 364
              },
              "start": 342,
              "end": 364
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
            "start": 327,
            "end": 365
          }
        ],
        "start": 321,
        "end": 367
      },
      "abstract": false,
      "declare": false,
      "start": 310,
      "end": 367
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Thing",
        "optional": false,
        "typeAnnotation": null,
        "start": 375,
        "end": 380
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
              "name": "Components",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 408
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "ComponentCollection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 412,
                    "end": 431
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSAnyKeyword",
                        "start": 432,
                        "end": 435
                      }
                    ],
                    "start": 431,
                    "end": 436
                  },
                  "start": 412,
                  "end": 436
                },
                "start": 410,
                "end": 436
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 446,
                      "end": 450
                    },
                    "start": 439,
                    "end": 450
                  }
                ],
                "start": 437,
                "end": 452
              },
              "expression": false,
              "start": 408,
              "end": 452
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 387,
            "end": 452
          }
        ],
        "start": 381,
        "end": 454
      },
      "abstract": false,
      "declare": false,
      "start": 369,
      "end": 454
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentCollection",
        "optional": false,
        "typeAnnotation": null,
        "start": 462,
        "end": 481
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
              "start": 482,
              "end": 483
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 482,
            "end": 483
          }
        ],
        "start": 481,
        "end": 484
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
              "name": "sortComponents",
              "optional": false,
              "typeAnnotation": null,
              "start": 506,
              "end": 520
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
                  "name": "p",
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
                        "start": 524,
                        "end": 527
                      },
                      "typeArguments": null,
                      "start": 524,
                      "end": 527
                    },
                    "start": 522,
                    "end": 527
                  },
                  "start": 521,
                  "end": 527
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 546,
                        "end": 547
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 553
                      },
                      "optional": false,
                      "computed": false,
                      "start": 546,
                      "end": 553
                    },
                    "start": 539,
                    "end": 554
                  }
                ],
                "start": 529,
                "end": 560
              },
              "expression": false,
              "start": 520,
              "end": 560
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 491,
            "end": 560
          }
        ],
        "start": 485,
        "end": 562
      },
      "abstract": false,
      "declare": false,
      "start": 456,
      "end": 562
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 570,
        "end": 573
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
              "name": "prop1",
              "optional": false,
              "typeAnnotation": null,
              "start": 591,
              "end": 596
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
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GenericType",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 620,
                        "end": 631
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSStringKeyword",
                            "start": 632,
                            "end": 638
                          }
                        ],
                        "start": 631,
                        "end": 639
                      },
                      "arguments": [
                        {
                          "type": "ThisExpression",
                          "start": 640,
                          "end": 644
                        }
                      ],
                      "start": 616,
                      "end": 645
                    },
                    "start": 609,
                    "end": 646
                  }
                ],
                "start": 599,
                "end": 652
              },
              "expression": false,
              "start": 596,
              "end": 652
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 580,
            "end": 652
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "populate",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 672
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
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 685,
                        "end": 689
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "prop2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 690,
                        "end": 695
                      },
                      "optional": false,
                      "computed": false,
                      "start": 685,
                      "end": 695
                    },
                    "directive": null,
                    "start": 685,
                    "end": 696
                  }
                ],
                "start": 675,
                "end": 702
              },
              "expression": false,
              "start": 672,
              "end": 702
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 657,
            "end": 702
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop2",
              "optional": false,
              "typeAnnotation": null,
              "start": 718,
              "end": 723
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "name": "BaseCollection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 727,
                    "end": 741
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 742,
                          "end": 749
                        },
                        "typeArguments": null,
                        "start": 742,
                        "end": 749
                      }
                    ],
                    "start": 741,
                    "end": 750
                  },
                  "start": 727,
                  "end": 750
                },
                "start": 725,
                "end": 750
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "BaseCollection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 772,
                        "end": 786
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Derived",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 787,
                              "end": 794
                            },
                            "typeArguments": null,
                            "start": 787,
                            "end": 794
                          }
                        ],
                        "start": 786,
                        "end": 795
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Derived",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 796,
                            "end": 803
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "createEmpty",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 804,
                            "end": 815
                          },
                          "optional": false,
                          "computed": false,
                          "start": 796,
                          "end": 815
                        }
                      ],
                      "start": 768,
                      "end": 816
                    },
                    "start": 761,
                    "end": 817
                  }
                ],
                "start": 751,
                "end": 823
              },
              "expression": false,
              "start": 723,
              "end": 823
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 707,
            "end": 823
          }
        ],
        "start": 574,
        "end": 825
      },
      "abstract": false,
      "declare": false,
      "start": 564,
      "end": 825
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericType",
        "optional": false,
        "typeAnnotation": null,
        "start": 833,
        "end": 844
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
              "start": 845,
              "end": 846
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 845,
            "end": 846
          }
        ],
        "start": 844,
        "end": 847
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
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 854,
              "end": 865
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
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "FooBase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 874,
                        "end": 881
                      },
                      "typeArguments": null,
                      "start": 874,
                      "end": 881
                    },
                    "start": 872,
                    "end": 881
                  },
                  "start": 866,
                  "end": 881
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 883,
                "end": 886
              },
              "expression": false,
              "start": 865,
              "end": 886
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 854,
            "end": 886
          }
        ],
        "start": 848,
        "end": 888
      },
      "abstract": false,
      "declare": false,
      "start": 827,
      "end": 888
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooBase",
        "optional": false,
        "typeAnnotation": null,
        "start": 896,
        "end": 903
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
              "name": "populate",
              "optional": false,
              "typeAnnotation": null,
              "start": 917,
              "end": 925
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
                "body": [],
                "start": 928,
                "end": 936
              },
              "expression": false,
              "start": 925,
              "end": 936
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 910,
            "end": 936
          }
        ],
        "start": 904,
        "end": 938
      },
      "abstract": false,
      "declare": false,
      "start": 890,
      "end": 938
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 42,
  "end": 938
}
```
