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
        "name": "Test",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 14
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IState",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 38,
              "end": 45
            },
            "declare": false,
            "start": 21,
            "end": 45
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
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
                    "name": "startIndex",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 77,
                    "end": 87
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 89,
                      "end": 95
                    },
                    "start": 87,
                    "end": 95
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 77,
                  "end": 96
                }
              ],
              "start": 67,
              "end": 102
            },
            "declare": false,
            "start": 50,
            "end": 102
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IStateToken",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 128
            },
            "typeParameters": null,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "expression": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IToken",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 137,
                  "end": 143
                },
                "typeArguments": null,
                "start": 137,
                "end": 143
              }
            ],
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
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 154,
                    "end": 159
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 161,
                        "end": 167
                      },
                      "typeArguments": null,
                      "start": 161,
                      "end": 167
                    },
                    "start": 159,
                    "end": 167
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 154,
                  "end": 168
                }
              ],
              "start": 144,
              "end": 174
            },
            "declare": false,
            "start": 107,
            "end": 174
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ILineTokens",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 200
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
                    "name": "tokens",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 211,
                    "end": 217
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IToken",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 219,
                          "end": 225
                        },
                        "typeArguments": null,
                        "start": 219,
                        "end": 225
                      },
                      "start": 219,
                      "end": 227
                    },
                    "start": 217,
                    "end": 227
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 211,
                  "end": 228
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "endState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 237,
                    "end": 245
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IState",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 253
                      },
                      "typeArguments": null,
                      "start": 247,
                      "end": 253
                    },
                    "start": 245,
                    "end": 253
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 237,
                  "end": 254
                }
              ],
              "start": 201,
              "end": 260
            },
            "declare": false,
            "start": 179,
            "end": 260
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IAction",
              "optional": false,
              "typeAnnotation": null,
              "start": 275,
              "end": 282
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [],
              "start": 283,
              "end": 290
            },
            "declare": false,
            "start": 265,
            "end": 290
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "IMode",
              "optional": false,
              "typeAnnotation": null,
              "start": 305,
              "end": 310
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
                    "name": "onEnter",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 321,
                    "end": 328
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 334,
                          "end": 340
                        },
                        "start": 333,
                        "end": 340
                      },
                      "start": 329,
                      "end": 340
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 348,
                            "end": 354
                          },
                          "typeArguments": null,
                          "start": 348,
                          "end": 354
                        },
                        "start": 347,
                        "end": 354
                      },
                      "start": 342,
                      "end": 354
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "offset",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 363,
                          "end": 369
                        },
                        "start": 362,
                        "end": 369
                      },
                      "start": 356,
                      "end": 369
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAction",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 371,
                        "end": 378
                      },
                      "typeArguments": null,
                      "start": 371,
                      "end": 378
                    },
                    "start": 370,
                    "end": 378
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 321,
                  "end": 379
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "tokenize",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 388,
                    "end": 396
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "line",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 402,
                          "end": 408
                        },
                        "start": 401,
                        "end": 408
                      },
                      "start": 397,
                      "end": 408
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "state",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 416,
                            "end": 422
                          },
                          "typeArguments": null,
                          "start": 416,
                          "end": 422
                        },
                        "start": 415,
                        "end": 422
                      },
                      "start": 410,
                      "end": 422
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "includeStates",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 438,
                          "end": 445
                        },
                        "start": 437,
                        "end": 445
                      },
                      "start": 424,
                      "end": 445
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ILineTokens",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 447,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 447,
                      "end": 458
                    },
                    "start": 446,
                    "end": 458
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 388,
                  "end": 459
                }
              ],
              "start": 311,
              "end": 465
            },
            "declare": false,
            "start": 295,
            "end": 465
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Bug",
                "optional": false,
                "typeAnnotation": null,
                "start": 483,
                "end": 486
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
                    "name": "IMode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 498,
                    "end": 503
                  },
                  "typeArguments": null,
                  "start": 498,
                  "end": 503
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
                      "name": "onEnter",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 521,
                      "end": 528
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 534,
                              "end": 540
                            },
                            "start": 533,
                            "end": 540
                          },
                          "start": 529,
                          "end": 540
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 548,
                                "end": 554
                              },
                              "typeArguments": null,
                              "start": 548,
                              "end": 554
                            },
                            "start": 547,
                            "end": 554
                          },
                          "start": 542,
                          "end": 554
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "offset",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 563,
                              "end": 569
                            },
                            "start": 562,
                            "end": 569
                          },
                          "start": 556,
                          "end": 569
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IAction",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 571,
                            "end": 578
                          },
                          "typeArguments": null,
                          "start": 571,
                          "end": 578
                        },
                        "start": 570,
                        "end": 578
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
                                  "name": "lineTokens",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ILineTokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 608,
                                        "end": 619
                                      },
                                      "typeArguments": null,
                                      "start": 608,
                                      "end": 619
                                    },
                                    "start": 607,
                                    "end": 619
                                  },
                                  "start": 597,
                                  "end": 619
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 621,
                                      "end": 625
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "tokenize",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 626,
                                      "end": 634
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 621,
                                    "end": 634
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "line",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 635,
                                      "end": 639
                                    },
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "state",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 641,
                                      "end": 646
                                    },
                                    {
                                      "type": "Literal",
                                      "value": true,
                                      "raw": "true",
                                      "start": 648,
                                      "end": 652
                                    }
                                  ],
                                  "optional": false,
                                  "start": 621,
                                  "end": 653
                                },
                                "definite": false,
                                "start": 597,
                                "end": 653
                              }
                            ],
                            "declare": false,
                            "start": 593,
                            "end": 654
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
                                  "name": "tokens",
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
                                          "name": "IStateToken",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 678,
                                          "end": 689
                                        },
                                        "typeArguments": null,
                                        "start": 678,
                                        "end": 689
                                      },
                                      "start": 678,
                                      "end": 691
                                    },
                                    "start": 677,
                                    "end": 691
                                  },
                                  "start": 671,
                                  "end": 691
                                },
                                "init": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "lineTokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 693,
                                    "end": 703
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "tokens",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 704,
                                    "end": 710
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 693,
                                  "end": 710
                                },
                                "definite": false,
                                "start": 671,
                                "end": 710
                              }
                            ],
                            "declare": false,
                            "start": 667,
                            "end": 711
                          },
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "tokens",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 728,
                                  "end": 734
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "length",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 735,
                                  "end": 741
                                },
                                "optional": false,
                                "computed": false,
                                "start": 728,
                                "end": 741
                              },
                              "operator": "===",
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 746,
                                "end": 747
                              },
                              "start": 728,
                              "end": 747
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 774,
                                        "end": 778
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "onEnter",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 779,
                                        "end": 786
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 774,
                                      "end": 786
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "line",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 787,
                                        "end": 791
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "tokens",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 793,
                                        "end": 799
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "offset",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 801,
                                        "end": 807
                                      }
                                    ],
                                    "optional": false,
                                    "start": 774,
                                    "end": 808
                                  },
                                  "start": 767,
                                  "end": 809
                                }
                              ],
                              "start": 749,
                              "end": 935
                            },
                            "alternate": null,
                            "start": 724,
                            "end": 935
                          }
                        ],
                        "start": 579,
                        "end": 945
                      },
                      "expression": false,
                      "start": 528,
                      "end": 945
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 514,
                    "end": 945
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "tokenize",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 961,
                      "end": 969
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
                          "name": "line",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 975,
                              "end": 981
                            },
                            "start": 974,
                            "end": 981
                          },
                          "start": 970,
                          "end": 981
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "state",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 989,
                                "end": 995
                              },
                              "typeArguments": null,
                              "start": 989,
                              "end": 995
                            },
                            "start": 988,
                            "end": 995
                          },
                          "start": 983,
                          "end": 995
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "includeStates",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 1011,
                              "end": 1018
                            },
                            "start": 1010,
                            "end": 1018
                          },
                          "start": 997,
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
                            "name": "ILineTokens",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1020,
                            "end": 1031
                          },
                          "typeArguments": null,
                          "start": 1020,
                          "end": 1031
                        },
                        "start": 1019,
                        "end": 1031
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
                              "start": 1053,
                              "end": 1057
                            },
                            "start": 1046,
                            "end": 1058
                          }
                        ],
                        "start": 1032,
                        "end": 1068
                      },
                      "expression": false,
                      "start": 969,
                      "end": 1068
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 954,
                    "end": 1068
                  }
                ],
                "start": 504,
                "end": 1074
              },
              "abstract": false,
              "declare": false,
              "start": 477,
              "end": 1074
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 470,
            "end": 1074
          }
        ],
        "start": 15,
        "end": 1076
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1076
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1076
}
```
