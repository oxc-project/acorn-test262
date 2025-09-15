__ESTREE_TEST__:PASS:
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
