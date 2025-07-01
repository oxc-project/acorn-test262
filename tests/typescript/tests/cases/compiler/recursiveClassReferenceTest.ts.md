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
          "start": 159,
          "end": 165
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 166,
          "end": 171
        },
        "start": 159,
        "end": 171
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
                "start": 193,
                "end": 200
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
                      "start": 205,
                      "end": 215
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
                        "start": 219,
                        "end": 222
                      },
                      "start": 217,
                      "end": 222
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 205,
                    "end": 223
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 226,
                      "end": 233
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
                    "start": 226,
                    "end": 236
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "gar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 242
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
                                          "start": 258,
                                          "end": 264
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Thing",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 265,
                                          "end": 270
                                        },
                                        "start": 258,
                                        "end": 270
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "IWidget",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 271,
                                        "end": 278
                                      },
                                      "start": 258,
                                      "end": 278
                                    },
                                    "typeArguments": null,
                                    "start": 258,
                                    "end": 278
                                  },
                                  "start": 257,
                                  "end": 278
                                },
                                "start": 251,
                                "end": 278
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 281,
                                "end": 284
                              },
                              "start": 279,
                              "end": 284
                            },
                            "start": 250,
                            "end": 284
                          },
                          "start": 249,
                          "end": 284
                        },
                        "start": 243,
                        "end": 284
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 286,
                        "end": 289
                      },
                      "start": 285,
                      "end": 289
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 239,
                    "end": 290
                  }
                ],
                "start": 201,
                "end": 293
              },
              "declare": false,
              "start": 183,
              "end": 293
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 176,
            "end": 293
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
                "start": 313,
                "end": 323
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
                      "start": 333,
                      "end": 343
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
                          "start": 347,
                          "end": 354
                        },
                        "typeArguments": null,
                        "start": 347,
                        "end": 354
                      },
                      "start": 345,
                      "end": 354
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 333,
                    "end": 355
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addWidget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 361,
                      "end": 370
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
                            "start": 380,
                            "end": 386
                          },
                          "start": 379,
                          "end": 386
                        },
                        "start": 371,
                        "end": 386
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
                              "start": 395,
                              "end": 402
                            },
                            "typeArguments": null,
                            "start": 395,
                            "end": 402
                          },
                          "start": 394,
                          "end": 402
                        },
                        "start": 388,
                        "end": 402
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 361,
                    "end": 404
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "focus",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 411,
                      "end": 416
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
                    "start": 411,
                    "end": 419
                  }
                ],
                "start": 324,
                "end": 479
              },
              "declare": false,
              "start": 303,
              "end": 479
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 296,
            "end": 479
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
                "start": 499,
                "end": 506
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
                      "start": 511,
                      "end": 514
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
                              "start": 521,
                              "end": 531
                            },
                            "typeArguments": null,
                            "start": 521,
                            "end": 531
                          },
                          "start": 520,
                          "end": 531
                        },
                        "start": 515,
                        "end": 531
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 533,
                        "end": 540
                      },
                      "start": 532,
                      "end": 540
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 511,
                    "end": 541
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 544,
                      "end": 549
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
                        "start": 552,
                        "end": 558
                      },
                      "start": 551,
                      "end": 558
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 544,
                    "end": 559
                  }
                ],
                "start": 507,
                "end": 562
              },
              "declare": false,
              "start": 489,
              "end": 562
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 482,
            "end": 562
          }
        ],
        "start": 172,
        "end": 565
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 144,
      "end": 565
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
              "start": 574,
              "end": 580
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 588
            },
            "start": 574,
            "end": 588
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 594
          },
          "start": 574,
          "end": 594
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Find",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 599
        },
        "start": 574,
        "end": 599
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
                "start": 616,
                "end": 631
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
                        "start": 643,
                        "end": 649
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 650,
                        "end": 655
                      },
                      "optional": false,
                      "computed": false,
                      "start": 643,
                      "end": 655
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IAction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 656,
                      "end": 663
                    },
                    "optional": false,
                    "computed": false,
                    "start": 643,
                    "end": 663
                  },
                  "typeArguments": null,
                  "start": 643,
                  "end": 663
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
                      "start": 678,
                      "end": 683
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
                              "start": 695,
                              "end": 699
                            },
                            "start": 688,
                            "end": 700
                          }
                        ],
                        "start": 686,
                        "end": 702
                      },
                      "expression": false,
                      "start": 683,
                      "end": 702
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 671,
                    "end": 702
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
                      "start": 715,
                      "end": 718
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
                                    "start": 725,
                                    "end": 731
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Thing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 732,
                                    "end": 737
                                  },
                                  "start": 725,
                                  "end": 737
                                },
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ICodeThing",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 738,
                                  "end": 748
                                },
                                "start": 725,
                                "end": 748
                              },
                              "typeArguments": null,
                              "start": 725,
                              "end": 748
                            },
                            "start": 724,
                            "end": 748
                          },
                          "start": 719,
                          "end": 748
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 750,
                          "end": 757
                        },
                        "start": 749,
                        "end": 757
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
                              "start": 771,
                              "end": 775
                            },
                            "start": 764,
                            "end": 776
                          }
                        ],
                        "start": 758,
                        "end": 780
                      },
                      "expression": false,
                      "start": 718,
                      "end": 780
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 708,
                    "end": 780
                  }
                ],
                "start": 664,
                "end": 783
              },
              "abstract": false,
              "declare": false,
              "start": 610,
              "end": 783
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 603,
            "end": 783
          }
        ],
        "start": 600,
        "end": 785
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 567,
      "end": 785
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
            "start": 794,
            "end": 800
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 806
          },
          "start": 794,
          "end": 806
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Widgets",
          "optional": false,
          "typeAnnotation": null,
          "start": 807,
          "end": 814
        },
        "start": 794,
        "end": 814
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
                "start": 831,
                "end": 841
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
                        "start": 853,
                        "end": 859
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 860,
                        "end": 865
                      },
                      "optional": false,
                      "computed": false,
                      "start": 853,
                      "end": 865
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IWidget",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 866,
                      "end": 873
                    },
                    "optional": false,
                    "computed": false,
                    "start": 853,
                    "end": 873
                  },
                  "typeArguments": null,
                  "start": 853,
                  "end": 873
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
                      "start": 886,
                      "end": 889
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
                                            "start": 905,
                                            "end": 911
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Thing",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 912,
                                            "end": 917
                                          },
                                          "start": 905,
                                          "end": 917
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "IWidget",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 918,
                                          "end": 925
                                        },
                                        "start": 905,
                                        "end": 925
                                      },
                                      "typeArguments": null,
                                      "start": 905,
                                      "end": 925
                                    },
                                    "start": 904,
                                    "end": 925
                                  },
                                  "start": 898,
                                  "end": 925
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 928,
                                  "end": 931
                                },
                                "start": 926,
                                "end": 931
                              },
                              "start": 897,
                              "end": 931
                            },
                            "start": 896,
                            "end": 931
                          },
                          "start": 890,
                          "end": 931
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
                              "start": 939,
                              "end": 943
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
                                      "start": 953,
                                      "end": 959
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ThisExpression",
                                        "start": 960,
                                        "end": 964
                                      }
                                    ],
                                    "optional": false,
                                    "start": 953,
                                    "end": 965
                                  },
                                  "start": 946,
                                  "end": 966
                                }
                              ],
                              "start": 945,
                              "end": 967
                            },
                            "alternate": null,
                            "start": 935,
                            "end": 967
                          }
                        ],
                        "start": 933,
                        "end": 968
                      },
                      "expression": false,
                      "start": 889,
                      "end": 968
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 879,
                    "end": 968
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
                      "start": 983,
                      "end": 990
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 991,
                        "end": 994
                      },
                      "start": 990,
                      "end": 994
                    },
                    "value": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 997,
                      "end": 1001
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private",
                    "start": 975,
                    "end": 1002
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
                      "start": 1005,
                      "end": 1016
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
                                      "start": 1036,
                                      "end": 1042
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Thing",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1043,
                                      "end": 1048
                                    },
                                    "start": 1036,
                                    "end": 1048
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "ICodeThing",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1049,
                                    "end": 1059
                                  },
                                  "start": 1036,
                                  "end": 1059
                                },
                                "typeArguments": null,
                                "start": 1036,
                                "end": 1059
                              },
                              "start": 1034,
                              "end": 1059
                            },
                            "start": 1025,
                            "end": 1059
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1017,
                          "end": 1059
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
                                  "start": 1089,
                                  "end": 1098
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "addWidget",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1099,
                                  "end": 1108
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1089,
                                "end": 1108
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "addWidget",
                                  "raw": "\"addWidget\"",
                                  "start": 1109,
                                  "end": 1120
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1122,
                                  "end": 1126
                                }
                              ],
                              "optional": false,
                              "start": 1089,
                              "end": 1127
                            },
                            "directive": null,
                            "start": 1089,
                            "end": 1128
                          }
                        ],
                        "start": 1061,
                        "end": 1132
                      },
                      "expression": false,
                      "start": 1016,
                      "end": 1132
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1005,
                    "end": 1132
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
                      "start": 1145,
                      "end": 1155
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
                              "start": 1170,
                              "end": 1177
                            },
                            "start": 1163,
                            "end": 1178
                          }
                        ],
                        "start": 1158,
                        "end": 1182
                      },
                      "expression": false,
                      "start": 1155,
                      "end": 1182
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1138,
                    "end": 1182
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
                      "start": 1195,
                      "end": 1202
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
                        "start": 1205,
                        "end": 1211
                      },
                      "expression": false,
                      "start": 1202,
                      "end": 1211
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1188,
                    "end": 1211
                  }
                ],
                "start": 874,
                "end": 1215
              },
              "abstract": false,
              "declare": false,
              "start": 825,
              "end": 1215
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 818,
            "end": 1215
          }
        ],
        "start": 815,
        "end": 1217
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 787,
      "end": 1217
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IMode",
        "optional": false,
        "typeAnnotation": null,
        "start": 1229,
        "end": 1234
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
              "start": 1237,
              "end": 1252
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
                  "start": 1256,
                  "end": 1262
                },
                "typeArguments": null,
                "start": 1256,
                "end": 1262
              },
              "start": 1254,
              "end": 1262
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1237,
            "end": 1263
          }
        ],
        "start": 1235,
        "end": 1264
      },
      "declare": false,
      "start": 1219,
      "end": 1264
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
        "start": 1272,
        "end": 1284
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
            "start": 1296,
            "end": 1301
          },
          "typeArguments": null,
          "start": 1296,
          "end": 1301
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
              "start": 1311,
              "end": 1326
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
                    "start": 1330,
                    "end": 1336
                  },
                  "typeArguments": null,
                  "start": 1330,
                  "end": 1336
                },
                "start": 1328,
                "end": 1336
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
                      "start": 1346,
                      "end": 1350
                    },
                    "start": 1339,
                    "end": 1351
                  }
                ],
                "start": 1337,
                "end": 1352
              },
              "expression": false,
              "start": 1326,
              "end": 1352
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1304,
            "end": 1352
          }
        ],
        "start": 1302,
        "end": 1354
      },
      "abstract": false,
      "declare": false,
      "start": 1266,
      "end": 1354
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1366,
        "end": 1372
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 1373,
        "end": 1375
      },
      "declare": false,
      "start": 1356,
      "end": 1375
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null,
        "start": 1387,
        "end": 1393
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
              "start": 1400,
              "end": 1406
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
                  "start": 1408,
                  "end": 1414
                },
                "typeArguments": null,
                "start": 1408,
                "end": 1414
              },
              "start": 1406,
              "end": 1414
            },
            "accessibility": null,
            "static": false,
            "start": 1400,
            "end": 1415
          }
        ],
        "start": 1394,
        "end": 1417
      },
      "declare": false,
      "start": 1377,
      "end": 1417
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
                  "start": 1436,
                  "end": 1442
                },
                "typeArguments": null,
                "start": 1436,
                "end": 1442
              },
              "start": 1434,
              "end": 1442
            },
            "start": 1430,
            "end": 1442
          },
          "init": null,
          "definite": false,
          "start": 1430,
          "end": 1442
        }
      ],
      "declare": true,
      "start": 1418,
      "end": 1443
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
              "start": 1452,
              "end": 1458
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 1459,
              "end": 1464
            },
            "start": 1452,
            "end": 1464
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Languages",
            "optional": false,
            "typeAnnotation": null,
            "start": 1465,
            "end": 1474
          },
          "start": 1452,
          "end": 1474
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "PlainText",
          "optional": false,
          "typeAnnotation": null,
          "start": 1475,
          "end": 1484
        },
        "start": 1452,
        "end": 1484
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
                "start": 1503,
                "end": 1508
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
                    "start": 1520,
                    "end": 1526
                  },
                  "typeArguments": null,
                  "start": 1520,
                  "end": 1526
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
                      "start": 1539,
                      "end": 1550
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
                                  "start": 1565,
                                  "end": 1570
                                },
                                "typeArguments": null,
                                "start": 1565,
                                "end": 1570
                              },
                              "start": 1563,
                              "end": 1570
                            },
                            "start": 1559,
                            "end": 1570
                          },
                          "readonly": false,
                          "static": false,
                          "start": 1551,
                          "end": 1570
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1572,
                        "end": 1575
                      },
                      "expression": false,
                      "start": 1550,
                      "end": 1575
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1539,
                    "end": 1575
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
                      "start": 1585,
                      "end": 1590
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
                            "start": 1593,
                            "end": 1599
                          },
                          "typeArguments": null,
                          "start": 1593,
                          "end": 1599
                        },
                        "start": 1592,
                        "end": 1599
                      },
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ThisExpression",
                              "start": 1612,
                              "end": 1616
                            },
                            "start": 1605,
                            "end": 1617
                          }
                        ],
                        "start": 1600,
                        "end": 1621
                      },
                      "expression": false,
                      "start": 1590,
                      "end": 1621
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1578,
                    "end": 1621
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
                      "start": 1632,
                      "end": 1638
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
                                "start": 1645,
                                "end": 1651
                              },
                              "typeArguments": null,
                              "start": 1645,
                              "end": 1651
                            },
                            "start": 1644,
                            "end": 1651
                          },
                          "start": 1639,
                          "end": 1651
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1653,
                          "end": 1660
                        },
                        "start": 1652,
                        "end": 1660
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
                                "start": 1673,
                                "end": 1677
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1682,
                                "end": 1687
                              },
                              "start": 1673,
                              "end": 1687
                            },
                            "start": 1666,
                            "end": 1688
                          }
                        ],
                        "start": 1661,
                        "end": 1692
                      },
                      "expression": false,
                      "start": 1638,
                      "end": 1692
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1625,
                    "end": 1692
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
                      "start": 1705,
                      "end": 1712
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
                            "start": 1716,
                            "end": 1721
                          },
                          "typeArguments": null,
                          "start": 1716,
                          "end": 1721
                        },
                        "start": 1714,
                        "end": 1721
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
                              "start": 1731,
                              "end": 1735
                            },
                            "start": 1724,
                            "end": 1736
                          }
                        ],
                        "start": 1722,
                        "end": 1738
                      },
                      "expression": false,
                      "start": 1712,
                      "end": 1738
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1698,
                    "end": 1738
                  }
                ],
                "start": 1527,
                "end": 1741
              },
              "abstract": false,
              "declare": false,
              "start": 1497,
              "end": 1741
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1490,
            "end": 1741
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
                "start": 1758,
                "end": 1762
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "decorators": [],
                "name": "AbstractMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 1771,
                "end": 1783
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
                      "start": 1812,
                      "end": 1827
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
                            "start": 1831,
                            "end": 1837
                          },
                          "typeArguments": null,
                          "start": 1831,
                          "end": 1837
                        },
                        "start": 1829,
                        "end": 1837
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
                                "start": 1854,
                                "end": 1859
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1860,
                                  "end": 1864
                                }
                              ],
                              "start": 1850,
                              "end": 1865
                            },
                            "start": 1843,
                            "end": 1866
                          }
                        ],
                        "start": 1838,
                        "end": 1870
                      },
                      "expression": false,
                      "start": 1827,
                      "end": 1870
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1805,
                    "end": 1870
                  }
                ],
                "start": 1784,
                "end": 1875
              },
              "abstract": false,
              "declare": false,
              "start": 1752,
              "end": 1875
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1745,
            "end": 1875
          }
        ],
        "start": 1485,
        "end": 1877
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 1445,
      "end": 1877
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 144,
  "end": 1878
}
```
