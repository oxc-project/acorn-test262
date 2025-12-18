__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Sample",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 168
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 169,
          "end": 174
        },
        "start": 162,
        "end": 174
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
                "name": "IWidget",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 203
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
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 218
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 222,
                        "end": 225
                      },
                      "start": 220,
                      "end": 225
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 208,
                    "end": 226
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 229,
                      "end": 236
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 229,
                    "end": 239
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "gar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 245
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "runner",
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
                                "name": "widget",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Sample",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 261,
                                          "end": 267
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Thing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 268,
                                          "end": 273
                                        },
                                        "start": 261,
                                        "end": 273
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IWidget",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 274,
                                        "end": 281
                                      },
                                      "start": 261,
                                      "end": 281
                                    },
                                    "typeArguments": null,
                                    "start": 261,
                                    "end": 281
                                  },
                                  "start": 260,
                                  "end": 281
                                },
                                "start": 254,
                                "end": 281
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 284,
                                "end": 287
                              },
                              "start": 282,
                              "end": 287
                            },
                            "start": 253,
                            "end": 287
                          },
                          "start": 252,
                          "end": 287
                        },
                        "start": 246,
                        "end": 287
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 289,
                        "end": 292
                      },
                      "start": 288,
                      "end": 292
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 242,
                    "end": 293
                  }
                ],
                "start": 204,
                "end": 296
              },
              "declare": false,
              "start": 186,
              "end": 296
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 179,
            "end": 296
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ICodeThing",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 326
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
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 336,
                      "end": 346
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 357
                        },
                        "typeArguments": null,
                        "start": 350,
                        "end": 357
                      },
                      "start": 348,
                      "end": 357
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 336,
                    "end": 358
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addWidget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 364,
                      "end": 373
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "widgetId",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 383,
                            "end": 389
                          },
                          "start": 382,
                          "end": 389
                        },
                        "start": 374,
                        "end": 389
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "widget",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "IWidget",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 398,
                              "end": 405
                            },
                            "typeArguments": null,
                            "start": 398,
                            "end": 405
                          },
                          "start": 397,
                          "end": 405
                        },
                        "start": 391,
                        "end": 405
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 364,
                    "end": 407
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "focus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 414,
                      "end": 419
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 414,
                    "end": 422
                  }
                ],
                "start": 327,
                "end": 482
              },
              "declare": false,
              "start": 306,
              "end": 482
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 299,
            "end": 482
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 509
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
                      "name": "run",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 514,
                      "end": 517
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "ICodeThing",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 524,
                              "end": 534
                            },
                            "typeArguments": null,
                            "start": 524,
                            "end": 534
                          },
                          "start": 523,
                          "end": 534
                        },
                        "start": 518,
                        "end": 534
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 536,
                        "end": 543
                      },
                      "start": 535,
                      "end": 543
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 514,
                    "end": 544
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 547,
                      "end": 552
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 555,
                        "end": 561
                      },
                      "start": 554,
                      "end": 561
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 547,
                    "end": 562
                  }
                ],
                "start": 510,
                "end": 565
              },
              "declare": false,
              "start": 492,
              "end": 565
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 485,
            "end": 565
          }
        ],
        "start": 175,
        "end": 568
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 144,
      "end": 568
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sample",
              "optional": false,
              "typeAnnotation": null,
              "start": 580,
              "end": 586
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 587,
              "end": 594
            },
            "start": 580,
            "end": 594
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 595,
            "end": 600
          },
          "start": 580,
          "end": 600
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Find",
          "optional": false,
          "typeAnnotation": null,
          "start": 601,
          "end": 605
        },
        "start": 580,
        "end": 605
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "StartFindAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 637
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sample",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 655
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 656,
                        "end": 661
                      },
                      "optional": false,
                      "computed": false,
                      "start": 649,
                      "end": 661
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IAction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 662,
                      "end": 669
                    },
                    "optional": false,
                    "computed": false,
                    "start": 649,
                    "end": 669
                  },
                  "typeArguments": null,
                  "start": 649,
                  "end": 669
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
                      "name": "getId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 684,
                      "end": 689
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
                              "value": "yo",
                              "raw": "\"yo\"",
                              "start": 701,
                              "end": 705
                            },
                            "start": 694,
                            "end": 706
                          }
                        ],
                        "start": 692,
                        "end": 708
                      },
                      "expression": false,
                      "start": 689,
                      "end": 708
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 677,
                    "end": 708
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "run",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 721,
                      "end": 724
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
                          "name": "Thing",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "TSQualifiedName",
                                "left": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Sample",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 731,
                                    "end": 737
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 738,
                                    "end": 743
                                  },
                                  "start": 731,
                                  "end": 743
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ICodeThing",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 744,
                                  "end": 754
                                },
                                "start": 731,
                                "end": 754
                              },
                              "typeArguments": null,
                              "start": 731,
                              "end": 754
                            },
                            "start": 730,
                            "end": 754
                          },
                          "start": 725,
                          "end": 754
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 756,
                          "end": 763
                        },
                        "start": 755,
                        "end": 763
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 777,
                              "end": 781
                            },
                            "start": 770,
                            "end": 782
                          }
                        ],
                        "start": 764,
                        "end": 786
                      },
                      "expression": false,
                      "start": 724,
                      "end": 786
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 714,
                    "end": 786
                  }
                ],
                "start": 670,
                "end": 789
              },
              "abstract": false,
              "declare": false,
              "start": 616,
              "end": 789
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 609,
            "end": 789
          }
        ],
        "start": 606,
        "end": 791
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 570,
      "end": 791
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "Sample",
            "optional": false,
            "typeAnnotation": null,
            "start": 803,
            "end": 809
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 810,
            "end": 815
          },
          "start": 803,
          "end": 815
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Widgets",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 823
        },
        "start": 803,
        "end": 823
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "FindWidget",
                "optional": false,
                "typeAnnotation": null,
                "start": 840,
                "end": 850
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Sample",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 862,
                        "end": 868
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 869,
                        "end": 874
                      },
                      "optional": false,
                      "computed": false,
                      "start": 862,
                      "end": 874
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWidget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 875,
                      "end": 882
                    },
                    "optional": false,
                    "computed": false,
                    "start": 862,
                    "end": 882
                  },
                  "typeArguments": null,
                  "start": 862,
                  "end": 882
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
                      "name": "gar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 895,
                      "end": 898
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
                          "name": "runner",
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
                                  "name": "widget",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Sample",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 914,
                                            "end": 920
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Thing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 921,
                                            "end": 926
                                          },
                                          "start": 914,
                                          "end": 926
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IWidget",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 927,
                                          "end": 934
                                        },
                                        "start": 914,
                                        "end": 934
                                      },
                                      "typeArguments": null,
                                      "start": 914,
                                      "end": 934
                                    },
                                    "start": 913,
                                    "end": 934
                                  },
                                  "start": 907,
                                  "end": 934
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 937,
                                  "end": 940
                                },
                                "start": 935,
                                "end": 940
                              },
                              "start": 906,
                              "end": 940
                            },
                            "start": 905,
                            "end": 940
                          },
                          "start": 899,
                          "end": 940
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "IfStatement",
                            "test": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 948,
                              "end": 952
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "runner",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 962,
                                      "end": 968
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ThisExpression",
                                        "start": 969,
                                        "end": 973
                                      }
                                    ],
                                    "optional": false,
                                    "start": 962,
                                    "end": 974
                                  },
                                  "start": 955,
                                  "end": 975
                                }
                              ],
                              "start": 954,
                              "end": 976
                            },
                            "alternate": null,
                            "start": 944,
                            "end": 976
                          }
                        ],
                        "start": 942,
                        "end": 977
                      },
                      "expression": false,
                      "start": 898,
                      "end": 977
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 888,
                    "end": 977
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "domNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 992,
                      "end": 999
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 1000,
                        "end": 1003
                      },
                      "start": 999,
                      "end": 1003
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 1006,
                      "end": 1010
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 984,
                    "end": 1011
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1014,
                      "end": 1025
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
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "codeThing",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Sample",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1045,
                                      "end": 1051
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Thing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1052,
                                      "end": 1057
                                    },
                                    "start": 1045,
                                    "end": 1057
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ICodeThing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1058,
                                    "end": 1068
                                  },
                                  "start": 1045,
                                  "end": 1068
                                },
                                "typeArguments": null,
                                "start": 1045,
                                "end": 1068
                              },
                              "start": 1043,
                              "end": 1068
                            },
                            "start": 1034,
                            "end": 1068
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1026,
                          "end": 1068
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "codeThing",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1098,
                                  "end": 1107
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "addWidget",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1108,
                                  "end": 1117
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1098,
                                "end": 1117
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "addWidget",
                                  "raw": "\"addWidget\"",
                                  "start": 1118,
                                  "end": 1129
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1131,
                                  "end": 1135
                                }
                              ],
                              "optional": false,
                              "start": 1098,
                              "end": 1136
                            },
                            "directive": null,
                            "start": 1098,
                            "end": 1137
                          }
                        ],
                        "start": 1070,
                        "end": 1141
                      },
                      "expression": false,
                      "start": 1025,
                      "end": 1141
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1014,
                    "end": 1141
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1154,
                      "end": 1164
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "domNode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1179,
                              "end": 1186
                            },
                            "start": 1172,
                            "end": 1187
                          }
                        ],
                        "start": 1167,
                        "end": 1191
                      },
                      "expression": false,
                      "start": 1164,
                      "end": 1191
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1147,
                    "end": 1191
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1204,
                      "end": 1211
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
                        "start": 1214,
                        "end": 1220
                      },
                      "expression": false,
                      "start": 1211,
                      "end": 1220
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1197,
                    "end": 1220
                  }
                ],
                "start": 883,
                "end": 1224
              },
              "abstract": false,
              "declare": false,
              "start": 834,
              "end": 1224
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 827,
            "end": 1224
          }
        ],
        "start": 824,
        "end": 1226
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 793,
      "end": 1226
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1238,
        "end": 1243
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
              "name": "getInitialState",
              "optional": false,
              "typeAnnotation": null,
              "start": 1246,
              "end": 1261
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IState",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1265,
                  "end": 1271
                },
                "typeArguments": null,
                "start": 1265,
                "end": 1271
              },
              "start": 1263,
              "end": 1271
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1246,
            "end": 1272
          }
        ],
        "start": 1244,
        "end": 1273
      },
      "declare": false,
      "start": 1228,
      "end": 1273
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AbstractMode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1281,
        "end": 1293
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
            "start": 1305,
            "end": 1310
          },
          "typeArguments": null,
          "start": 1305,
          "end": 1310
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
              "name": "getInitialState",
              "optional": false,
              "typeAnnotation": null,
              "start": 1320,
              "end": 1335
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
                    "name": "IState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1339,
                    "end": 1345
                  },
                  "typeArguments": null,
                  "start": 1339,
                  "end": 1345
                },
                "start": 1337,
                "end": 1345
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
                      "start": 1355,
                      "end": 1359
                    },
                    "start": 1348,
                    "end": 1360
                  }
                ],
                "start": 1346,
                "end": 1361
              },
              "expression": false,
              "start": 1335,
              "end": 1361
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1313,
            "end": 1361
          }
        ],
        "start": 1311,
        "end": 1363
      },
      "abstract": false,
      "declare": false,
      "start": 1275,
      "end": 1363
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1375,
        "end": 1381
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1382,
        "end": 1384
      },
      "declare": false,
      "start": 1365,
      "end": 1384
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 1396,
        "end": 1402
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
              "name": "opener",
              "optional": false,
              "typeAnnotation": null,
              "start": 1409,
              "end": 1415
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1417,
                  "end": 1423
                },
                "typeArguments": null,
                "start": 1417,
                "end": 1423
              },
              "start": 1415,
              "end": 1423
            },
            "accessibility": null,
            "static": false,
            "start": 1409,
            "end": 1424
          }
        ],
        "start": 1403,
        "end": 1426
      },
      "declare": false,
      "start": 1386,
      "end": 1426
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
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1445,
                  "end": 1451
                },
                "typeArguments": null,
                "start": 1445,
                "end": 1451
              },
              "start": 1443,
              "end": 1451
            },
            "start": 1439,
            "end": 1451
          },
          "init": null,
          "definite": false,
          "start": 1439,
          "end": 1451
        }
      ],
      "declare": true,
      "start": 1427,
      "end": 1452
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "TSQualifiedName",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "Sample",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1470
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 1471,
              "end": 1476
            },
            "start": 1464,
            "end": 1476
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Languages",
            "optional": false,
            "typeAnnotation": null,
            "start": 1477,
            "end": 1486
          },
          "start": 1464,
          "end": 1486
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "PlainText",
          "optional": false,
          "typeAnnotation": null,
          "start": 1487,
          "end": 1496
        },
        "start": 1464,
        "end": 1496
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 1515,
                "end": 1520
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
                    "name": "IState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1532,
                    "end": 1538
                  },
                  "typeArguments": null,
                  "start": 1532,
                  "end": 1538
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
                      "start": 1551,
                      "end": 1562
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
                          "type": "TSParameterProperty",
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "mode",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "IMode",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1577,
                                  "end": 1582
                                },
                                "typeArguments": null,
                                "start": 1577,
                                "end": 1582
                              },
                              "start": 1575,
                              "end": 1582
                            },
                            "start": 1571,
                            "end": 1582
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1563,
                          "end": 1582
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1584,
                        "end": 1587
                      },
                      "expression": false,
                      "start": 1562,
                      "end": 1587
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1551,
                    "end": 1587
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "clone",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1597,
                      "end": 1602
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
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1605,
                            "end": 1611
                          },
                          "typeArguments": null,
                          "start": 1605,
                          "end": 1611
                        },
                        "start": 1604,
                        "end": 1611
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ThisExpression",
                              "start": 1624,
                              "end": 1628
                            },
                            "start": 1617,
                            "end": 1629
                          }
                        ],
                        "start": 1612,
                        "end": 1633
                      },
                      "expression": false,
                      "start": 1602,
                      "end": 1633
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1590,
                    "end": 1633
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "equals",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1644,
                      "end": 1650
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
                          "name": "other",
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
                                "start": 1657,
                                "end": 1663
                              },
                              "typeArguments": null,
                              "start": 1657,
                              "end": 1663
                            },
                            "start": 1656,
                            "end": 1663
                          },
                          "start": 1651,
                          "end": 1663
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1665,
                          "end": 1672
                        },
                        "start": 1664,
                        "end": 1672
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "BinaryExpression",
                              "left": {
                                "type": "ThisExpression",
                                "start": 1685,
                                "end": 1689
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1694,
                                "end": 1699
                              },
                              "start": 1685,
                              "end": 1699
                            },
                            "start": 1678,
                            "end": 1700
                          }
                        ],
                        "start": 1673,
                        "end": 1704
                      },
                      "expression": false,
                      "start": 1650,
                      "end": 1704
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1637,
                    "end": 1704
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getMode",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1717,
                      "end": 1724
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
                            "name": "IMode",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1728,
                            "end": 1733
                          },
                          "typeArguments": null,
                          "start": 1728,
                          "end": 1733
                        },
                        "start": 1726,
                        "end": 1733
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1743,
                              "end": 1747
                            },
                            "start": 1736,
                            "end": 1748
                          }
                        ],
                        "start": 1734,
                        "end": 1750
                      },
                      "expression": false,
                      "start": 1724,
                      "end": 1750
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1710,
                    "end": 1750
                  }
                ],
                "start": 1539,
                "end": 1753
              },
              "abstract": false,
              "declare": false,
              "start": 1509,
              "end": 1753
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1502,
            "end": 1753
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Mode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1770,
                "end": 1774
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1783,
                "end": 1795
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
                      "name": "getInitialState",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1824,
                      "end": 1839
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
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1843,
                            "end": 1849
                          },
                          "typeArguments": null,
                          "start": 1843,
                          "end": 1849
                        },
                        "start": 1841,
                        "end": 1849
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
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1866,
                                "end": 1871
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1872,
                                  "end": 1876
                                }
                              ],
                              "start": 1862,
                              "end": 1877
                            },
                            "start": 1855,
                            "end": 1878
                          }
                        ],
                        "start": 1850,
                        "end": 1882
                      },
                      "expression": false,
                      "start": 1839,
                      "end": 1882
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1817,
                    "end": 1882
                  }
                ],
                "start": 1796,
                "end": 1887
              },
              "abstract": false,
              "declare": false,
              "start": 1764,
              "end": 1887
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1757,
            "end": 1887
          }
        ],
        "start": 1497,
        "end": 1889
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1454,
      "end": 1889
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 144,
  "end": 1890
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 144,
    "end": 151,
    "range": [
      144,
      151
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 152,
    "end": 161,
    "range": [
      152,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 162,
    "end": 168,
    "range": [
      162,
      168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 169,
    "end": 174,
    "range": [
      169,
      174
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 179,
    "end": 185,
    "range": [
      179,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 186,
    "end": 195,
    "range": [
      186,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "IWidget",
    "start": 196,
    "end": 203,
    "range": [
      196,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Identifier",
    "value": "getDomNode",
    "start": 208,
    "end": 218,
    "range": [
      208,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 222,
    "end": 225,
    "range": [
      222,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Identifier",
    "value": "destroy",
    "start": 229,
    "end": 236,
    "range": [
      229,
      236
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 236,
    "end": 237,
    "range": [
      236,
      237
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238,
    "range": [
      237,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Identifier",
    "value": "gar",
    "start": 242,
    "end": 245,
    "range": [
      242,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "runner",
    "start": 246,
    "end": 252,
    "range": [
      246,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 253,
    "end": 254,
    "range": [
      253,
      254
    ]
  },
  {
    "type": "Identifier",
    "value": "widget",
    "start": 254,
    "end": 260,
    "range": [
      254,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 261,
    "end": 267,
    "range": [
      261,
      267
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 267,
    "end": 268,
    "range": [
      267,
      268
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 268,
    "end": 273,
    "range": [
      268,
      273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Identifier",
    "value": "IWidget",
    "start": 274,
    "end": 281,
    "range": [
      274,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 281,
    "end": 282,
    "range": [
      281,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 282,
    "end": 284,
    "range": [
      282,
      284
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 284,
    "end": 287,
    "range": [
      284,
      287
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 289,
    "end": 292,
    "range": [
      289,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 299,
    "end": 305,
    "range": [
      299,
      305
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 306,
    "end": 315,
    "range": [
      306,
      315
    ]
  },
  {
    "type": "Identifier",
    "value": "ICodeThing",
    "start": 316,
    "end": 326,
    "range": [
      316,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "getDomNode",
    "start": 336,
    "end": 346,
    "range": [
      336,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 350,
    "end": 357,
    "range": [
      350,
      357
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "addWidget",
    "start": 364,
    "end": 373,
    "range": [
      364,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "widgetId",
    "start": 374,
    "end": 382,
    "range": [
      374,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 383,
    "end": 389,
    "range": [
      383,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Identifier",
    "value": "widget",
    "start": 391,
    "end": 397,
    "range": [
      391,
      397
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 397,
    "end": 398,
    "range": [
      397,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "IWidget",
    "start": 398,
    "end": 405,
    "range": [
      398,
      405
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Identifier",
    "value": "focus",
    "start": 414,
    "end": 419,
    "range": [
      414,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 419,
    "end": 420,
    "range": [
      419,
      420
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 421,
    "end": 422,
    "range": [
      421,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 492,
    "end": 501,
    "range": [
      492,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "IAction",
    "start": 502,
    "end": 509,
    "range": [
      502,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 514,
    "end": 517,
    "range": [
      514,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 517,
    "end": 518,
    "range": [
      517,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 518,
    "end": 523,
    "range": [
      518,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "ICodeThing",
    "start": 524,
    "end": 534,
    "range": [
      524,
      534
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 534,
    "end": 535,
    "range": [
      534,
      535
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 536,
    "end": 543,
    "range": [
      536,
      543
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "getId",
    "start": 547,
    "end": 552,
    "range": [
      547,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554,
    "range": [
      553,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 555,
    "end": 561,
    "range": [
      555,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 570,
    "end": 579,
    "range": [
      570,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 580,
    "end": 586,
    "range": [
      580,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Identifier",
    "value": "Actions",
    "start": 587,
    "end": 594,
    "range": [
      587,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 595,
    "end": 600,
    "range": [
      595,
      600
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "Find",
    "start": 601,
    "end": 605,
    "range": [
      601,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 606,
    "end": 607,
    "range": [
      606,
      607
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 609,
    "end": 615,
    "range": [
      609,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Identifier",
    "value": "StartFindAction",
    "start": 622,
    "end": 637,
    "range": [
      622,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 638,
    "end": 648,
    "range": [
      638,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 649,
    "end": 655,
    "range": [
      649,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 656,
    "end": 661,
    "range": [
      656,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 661,
    "end": 662,
    "range": [
      661,
      662
    ]
  },
  {
    "type": "Identifier",
    "value": "IAction",
    "start": 662,
    "end": 669,
    "range": [
      662,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "getId",
    "start": 684,
    "end": 689,
    "range": [
      684,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 694,
    "end": 700,
    "range": [
      694,
      700
    ]
  },
  {
    "type": "String",
    "value": "\"yo\"",
    "start": 701,
    "end": 705,
    "range": [
      701,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 714,
    "end": 720,
    "range": [
      714,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "run",
    "start": 721,
    "end": 724,
    "range": [
      721,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 725,
    "end": 730,
    "range": [
      725,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 731,
    "end": 737,
    "range": [
      731,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 738,
    "end": 743,
    "range": [
      738,
      743
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 743,
    "end": 744,
    "range": [
      743,
      744
    ]
  },
  {
    "type": "Identifier",
    "value": "ICodeThing",
    "start": 744,
    "end": 754,
    "range": [
      744,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 754,
    "end": 755,
    "range": [
      754,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 756,
    "end": 763,
    "range": [
      756,
      763
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 770,
    "end": 776,
    "range": [
      770,
      776
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 777,
    "end": 781,
    "range": [
      777,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 793,
    "end": 802,
    "range": [
      793,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 803,
    "end": 809,
    "range": [
      803,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 810,
    "end": 815,
    "range": [
      810,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 815,
    "end": 816,
    "range": [
      815,
      816
    ]
  },
  {
    "type": "Identifier",
    "value": "Widgets",
    "start": 816,
    "end": 823,
    "range": [
      816,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 824,
    "end": 825,
    "range": [
      824,
      825
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 827,
    "end": 833,
    "range": [
      827,
      833
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 834,
    "end": 839,
    "range": [
      834,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "FindWidget",
    "start": 840,
    "end": 850,
    "range": [
      840,
      850
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 851,
    "end": 861,
    "range": [
      851,
      861
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 862,
    "end": 868,
    "range": [
      862,
      868
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 868,
    "end": 869,
    "range": [
      868,
      869
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 869,
    "end": 874,
    "range": [
      869,
      874
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "IWidget",
    "start": 875,
    "end": 882,
    "range": [
      875,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 888,
    "end": 894,
    "range": [
      888,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "gar",
    "start": 895,
    "end": 898,
    "range": [
      895,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "runner",
    "start": 899,
    "end": 905,
    "range": [
      899,
      905
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "widget",
    "start": 907,
    "end": 913,
    "range": [
      907,
      913
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 913,
    "end": 914,
    "range": [
      913,
      914
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 914,
    "end": 920,
    "range": [
      914,
      920
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 921,
    "end": 926,
    "range": [
      921,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "IWidget",
    "start": 927,
    "end": 934,
    "range": [
      927,
      934
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 934,
    "end": 935,
    "range": [
      934,
      935
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 935,
    "end": 937,
    "range": [
      935,
      937
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 937,
    "end": 940,
    "range": [
      937,
      940
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 944,
    "end": 946,
    "range": [
      944,
      946
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 948,
    "end": 952,
    "range": [
      948,
      952
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 954,
    "end": 955,
    "range": [
      954,
      955
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 955,
    "end": 961,
    "range": [
      955,
      961
    ]
  },
  {
    "type": "Identifier",
    "value": "runner",
    "start": 962,
    "end": 968,
    "range": [
      962,
      968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 969,
    "end": 973,
    "range": [
      969,
      973
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 975,
    "end": 976,
    "range": [
      975,
      976
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 984,
    "end": 991,
    "range": [
      984,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "domNode",
    "start": 992,
    "end": 999,
    "range": [
      992,
      999
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 999,
    "end": 1000,
    "range": [
      999,
      1000
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1000,
    "end": 1003,
    "range": [
      1000,
      1003
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1004,
    "end": 1005,
    "range": [
      1004,
      1005
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1006,
    "end": 1010,
    "range": [
      1006,
      1010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1014,
    "end": 1025,
    "range": [
      1014,
      1025
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1025,
    "end": 1026,
    "range": [
      1025,
      1026
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1026,
    "end": 1033,
    "range": [
      1026,
      1033
    ]
  },
  {
    "type": "Identifier",
    "value": "codeThing",
    "start": 1034,
    "end": 1043,
    "range": [
      1034,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 1045,
    "end": 1051,
    "range": [
      1045,
      1051
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052,
    "range": [
      1051,
      1052
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1052,
    "end": 1057,
    "range": [
      1052,
      1057
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Identifier",
    "value": "ICodeThing",
    "start": 1058,
    "end": 1068,
    "range": [
      1058,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "codeThing",
    "start": 1098,
    "end": 1107,
    "range": [
      1098,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1107,
    "end": 1108,
    "range": [
      1107,
      1108
    ]
  },
  {
    "type": "Identifier",
    "value": "addWidget",
    "start": 1108,
    "end": 1117,
    "range": [
      1108,
      1117
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1117,
    "end": 1118,
    "range": [
      1117,
      1118
    ]
  },
  {
    "type": "String",
    "value": "\"addWidget\"",
    "start": 1118,
    "end": 1129,
    "range": [
      1118,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1131,
    "end": 1135,
    "range": [
      1131,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1140,
    "end": 1141,
    "range": [
      1140,
      1141
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1147,
    "end": 1153,
    "range": [
      1147,
      1153
    ]
  },
  {
    "type": "Identifier",
    "value": "getDomNode",
    "start": 1154,
    "end": 1164,
    "range": [
      1154,
      1164
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1164,
    "end": 1165,
    "range": [
      1164,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1172,
    "end": 1178,
    "range": [
      1172,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "domNode",
    "start": 1179,
    "end": 1186,
    "range": [
      1179,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1197,
    "end": 1203,
    "range": [
      1197,
      1203
    ]
  },
  {
    "type": "Identifier",
    "value": "destroy",
    "start": 1204,
    "end": 1211,
    "range": [
      1204,
      1211
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212,
    "range": [
      1211,
      1212
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1212,
    "end": 1213,
    "range": [
      1212,
      1213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1219,
    "end": 1220,
    "range": [
      1219,
      1220
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1223,
    "end": 1224,
    "range": [
      1223,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1225,
    "end": 1226,
    "range": [
      1225,
      1226
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1228,
    "end": 1237,
    "range": [
      1228,
      1237
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 1238,
    "end": 1243,
    "range": [
      1238,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "getInitialState",
    "start": 1246,
    "end": 1261,
    "range": [
      1246,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1263,
    "end": 1264,
    "range": [
      1263,
      1264
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1265,
    "end": 1271,
    "range": [
      1265,
      1271
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1271,
    "end": 1272,
    "range": [
      1271,
      1272
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1272,
    "end": 1273,
    "range": [
      1272,
      1273
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1275,
    "end": 1280,
    "range": [
      1275,
      1280
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractMode",
    "start": 1281,
    "end": 1293,
    "range": [
      1281,
      1293
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1294,
    "end": 1304,
    "range": [
      1294,
      1304
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 1305,
    "end": 1310,
    "range": [
      1305,
      1310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Identifier",
    "value": "getInitialState",
    "start": 1320,
    "end": 1335,
    "range": [
      1320,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1336,
    "end": 1337,
    "range": [
      1336,
      1337
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1337,
    "end": 1338,
    "range": [
      1337,
      1338
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1339,
    "end": 1345,
    "range": [
      1339,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1348,
    "end": 1354,
    "range": [
      1348,
      1354
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1355,
    "end": 1359,
    "range": [
      1355,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1362,
    "end": 1363,
    "range": [
      1362,
      1363
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1365,
    "end": 1374,
    "range": [
      1365,
      1374
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1375,
    "end": 1381,
    "range": [
      1375,
      1381
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1386,
    "end": 1395,
    "range": [
      1386,
      1395
    ]
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1396,
    "end": 1402,
    "range": [
      1396,
      1402
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Identifier",
    "value": "opener",
    "start": 1409,
    "end": 1415,
    "range": [
      1409,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1417,
    "end": 1423,
    "range": [
      1417,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1423,
    "end": 1424,
    "range": [
      1423,
      1424
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1425,
    "end": 1426,
    "range": [
      1425,
      1426
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1427,
    "end": 1434,
    "range": [
      1427,
      1434
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1435,
    "end": 1438,
    "range": [
      1435,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1439,
    "end": 1443,
    "range": [
      1439,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Identifier",
    "value": "Window",
    "start": 1445,
    "end": 1451,
    "range": [
      1445,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1451,
    "end": 1452,
    "range": [
      1451,
      1452
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1454,
    "end": 1463,
    "range": [
      1454,
      1463
    ]
  },
  {
    "type": "Identifier",
    "value": "Sample",
    "start": 1464,
    "end": 1470,
    "range": [
      1464,
      1470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1470,
    "end": 1471,
    "range": [
      1470,
      1471
    ]
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 1471,
    "end": 1476,
    "range": [
      1471,
      1476
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "Languages",
    "start": 1477,
    "end": 1486,
    "range": [
      1477,
      1486
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "PlainText",
    "start": 1487,
    "end": 1496,
    "range": [
      1487,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1497,
    "end": 1498,
    "range": [
      1497,
      1498
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1502,
    "end": 1508,
    "range": [
      1502,
      1508
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1509,
    "end": 1514,
    "range": [
      1509,
      1514
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1515,
    "end": 1520,
    "range": [
      1515,
      1520
    ]
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 1521,
    "end": 1531,
    "range": [
      1521,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1532,
    "end": 1538,
    "range": [
      1532,
      1538
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1539,
    "end": 1540,
    "range": [
      1539,
      1540
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 1551,
    "end": 1562,
    "range": [
      1551,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 1563,
    "end": 1570,
    "range": [
      1563,
      1570
    ]
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 1571,
    "end": 1575,
    "range": [
      1571,
      1575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1575,
    "end": 1576,
    "range": [
      1575,
      1576
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 1577,
    "end": 1582,
    "range": [
      1577,
      1582
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1582,
    "end": 1583,
    "range": [
      1582,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1590,
    "end": 1596,
    "range": [
      1590,
      1596
    ]
  },
  {
    "type": "Identifier",
    "value": "clone",
    "start": 1597,
    "end": 1602,
    "range": [
      1597,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1605,
    "end": 1611,
    "range": [
      1605,
      1611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1612,
    "end": 1613,
    "range": [
      1612,
      1613
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1617,
    "end": 1623,
    "range": [
      1617,
      1623
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1624,
    "end": 1628,
    "range": [
      1624,
      1628
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1628,
    "end": 1629,
    "range": [
      1628,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1637,
    "end": 1643,
    "range": [
      1637,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "equals",
    "start": 1644,
    "end": 1650,
    "range": [
      1644,
      1650
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1651,
    "end": 1656,
    "range": [
      1651,
      1656
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1656,
    "end": 1657,
    "range": [
      1656,
      1657
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1657,
    "end": 1663,
    "range": [
      1657,
      1663
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1664,
    "end": 1665,
    "range": [
      1664,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1665,
    "end": 1672,
    "range": [
      1665,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1678,
    "end": 1684,
    "range": [
      1678,
      1684
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1685,
    "end": 1689,
    "range": [
      1685,
      1689
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1690,
    "end": 1693,
    "range": [
      1690,
      1693
    ]
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 1694,
    "end": 1699,
    "range": [
      1694,
      1699
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1703,
    "end": 1704,
    "range": [
      1703,
      1704
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1710,
    "end": 1716,
    "range": [
      1710,
      1716
    ]
  },
  {
    "type": "Identifier",
    "value": "getMode",
    "start": 1717,
    "end": 1724,
    "range": [
      1717,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1725,
    "end": 1726,
    "range": [
      1725,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1726,
    "end": 1727,
    "range": [
      1726,
      1727
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 1728,
    "end": 1733,
    "range": [
      1728,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1736,
    "end": 1742,
    "range": [
      1736,
      1742
    ]
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 1743,
    "end": 1747,
    "range": [
      1743,
      1747
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1749,
    "end": 1750,
    "range": [
      1749,
      1750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1757,
    "end": 1763,
    "range": [
      1757,
      1763
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1764,
    "end": 1769,
    "range": [
      1764,
      1769
    ]
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 1770,
    "end": 1774,
    "range": [
      1770,
      1774
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1775,
    "end": 1782,
    "range": [
      1775,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "AbstractMode",
    "start": 1783,
    "end": 1795,
    "range": [
      1783,
      1795
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1796,
    "end": 1797,
    "range": [
      1796,
      1797
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 1817,
    "end": 1823,
    "range": [
      1817,
      1823
    ]
  },
  {
    "type": "Identifier",
    "value": "getInitialState",
    "start": 1824,
    "end": 1839,
    "range": [
      1824,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1841,
    "end": 1842,
    "range": [
      1841,
      1842
    ]
  },
  {
    "type": "Identifier",
    "value": "IState",
    "start": 1843,
    "end": 1849,
    "range": [
      1843,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1855,
    "end": 1861,
    "range": [
      1855,
      1861
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 1862,
    "end": 1865,
    "range": [
      1862,
      1865
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 1866,
    "end": 1871,
    "range": [
      1866,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1872,
    "end": 1876,
    "range": [
      1872,
      1876
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1876,
    "end": 1877,
    "range": [
      1876,
      1877
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1877,
    "end": 1878,
    "range": [
      1877,
      1878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1881,
    "end": 1882,
    "range": [
      1881,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  }
]
```
