__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 144,
  "end": 1878,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 144,
      "end": 565,
      "id": {
        "type": "TSQualifiedName",
        "start": 159,
        "end": 171,
        "left": {
          "type": "Identifier",
          "start": 159,
          "end": 165,
          "decorators": [],
          "name": "Sample",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 171,
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 172,
        "end": 565,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 176,
            "end": 293,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 183,
              "end": 293,
              "id": {
                "type": "Identifier",
                "start": 193,
                "end": 200,
                "decorators": [],
                "name": "IWidget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 201,
                "end": 293,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 205,
                    "end": 223,
                    "key": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 215,
                      "decorators": [],
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 217,
                      "end": 222,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 219,
                        "end": 222
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 226,
                    "end": 236,
                    "key": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 233,
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 239,
                    "end": 290,
                    "key": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 242,
                      "decorators": [],
                      "name": "gar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 243,
                        "end": 284,
                        "decorators": [],
                        "name": "runner",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 249,
                          "end": 284,
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "start": 250,
                            "end": 284,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 251,
                                "end": 278,
                                "decorators": [],
                                "name": "widget",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 257,
                                  "end": 278,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 258,
                                    "end": 278,
                                    "typeName": {
                                      "type": "TSQualifiedName",
                                      "start": 258,
                                      "end": 278,
                                      "left": {
                                        "type": "TSQualifiedName",
                                        "start": 258,
                                        "end": 270,
                                        "left": {
                                          "type": "Identifier",
                                          "start": 258,
                                          "end": 264,
                                          "decorators": [],
                                          "name": "Sample",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 265,
                                          "end": 270,
                                          "decorators": [],
                                          "name": "Thing",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "start": 271,
                                        "end": 278,
                                        "decorators": [],
                                        "name": "IWidget",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    "typeArguments": null
                                  }
                                }
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "start": 279,
                              "end": 284,
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 281,
                                "end": 284
                              }
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 285,
                      "end": 289,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 286,
                        "end": 289
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 296,
            "end": 479,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 303,
              "end": 479,
              "id": {
                "type": "Identifier",
                "start": 313,
                "end": 323,
                "decorators": [],
                "name": "ICodeThing",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 324,
                "end": 479,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 333,
                    "end": 355,
                    "key": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 343,
                      "decorators": [],
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 345,
                      "end": 354,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 347,
                        "end": 354,
                        "typeName": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 354,
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 361,
                    "end": 404,
                    "key": {
                      "type": "Identifier",
                      "start": 361,
                      "end": 370,
                      "decorators": [],
                      "name": "addWidget",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 386,
                        "decorators": [],
                        "name": "widgetId",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 379,
                          "end": 386,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 380,
                            "end": 386
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 388,
                        "end": 402,
                        "decorators": [],
                        "name": "widget",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 394,
                          "end": 402,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 395,
                            "end": 402,
                            "typeName": {
                              "type": "Identifier",
                              "start": 395,
                              "end": 402,
                              "decorators": [],
                              "name": "IWidget",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 411,
                    "end": 419,
                    "key": {
                      "type": "Identifier",
                      "start": 411,
                      "end": 416,
                      "decorators": [],
                      "name": "focus",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 482,
            "end": 562,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 489,
              "end": 562,
              "id": {
                "type": "Identifier",
                "start": 499,
                "end": 506,
                "decorators": [],
                "name": "IAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 507,
                "end": 562,
                "body": [
                  {
                    "type": "TSMethodSignature",
                    "start": 511,
                    "end": 541,
                    "key": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 514,
                      "decorators": [],
                      "name": "run",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 515,
                        "end": 531,
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 520,
                          "end": 531,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 521,
                            "end": 531,
                            "typeName": {
                              "type": "Identifier",
                              "start": 521,
                              "end": 531,
                              "decorators": [],
                              "name": "ICodeThing",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 532,
                      "end": 540,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 533,
                        "end": 540
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 544,
                    "end": 559,
                    "key": {
                      "type": "Identifier",
                      "start": 544,
                      "end": 549,
                      "decorators": [],
                      "name": "getId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 551,
                      "end": 558,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 552,
                        "end": 558
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 567,
      "end": 785,
      "id": {
        "type": "TSQualifiedName",
        "start": 574,
        "end": 599,
        "left": {
          "type": "TSQualifiedName",
          "start": 574,
          "end": 594,
          "left": {
            "type": "TSQualifiedName",
            "start": 574,
            "end": 588,
            "left": {
              "type": "Identifier",
              "start": 574,
              "end": 580,
              "decorators": [],
              "name": "Sample",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 581,
              "end": 588,
              "decorators": [],
              "name": "Actions",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 589,
            "end": 594,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 595,
          "end": 599,
          "decorators": [],
          "name": "Find",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 600,
        "end": 785,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 603,
            "end": 783,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 610,
              "end": 783,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 616,
                "end": 631,
                "decorators": [],
                "name": "StartFindAction",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 643,
                  "end": 663,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 643,
                    "end": 663,
                    "object": {
                      "type": "MemberExpression",
                      "start": 643,
                      "end": 655,
                      "object": {
                        "type": "Identifier",
                        "start": 643,
                        "end": 649,
                        "decorators": [],
                        "name": "Sample",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 650,
                        "end": 655,
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 656,
                      "end": 663,
                      "decorators": [],
                      "name": "IAction",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 664,
                "end": 783,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 671,
                    "end": 702,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 678,
                      "end": 683,
                      "decorators": [],
                      "name": "getId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 683,
                      "end": 702,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 686,
                        "end": 702,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 688,
                            "end": 700,
                            "argument": {
                              "type": "Literal",
                              "start": 695,
                              "end": 699,
                              "value": "yo",
                              "raw": "\"yo\""
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 708,
                    "end": 780,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 715,
                      "end": 718,
                      "decorators": [],
                      "name": "run",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 718,
                      "end": 780,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 719,
                          "end": 748,
                          "decorators": [],
                          "name": "Thing",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 724,
                            "end": 748,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 725,
                              "end": 748,
                              "typeName": {
                                "type": "TSQualifiedName",
                                "start": 725,
                                "end": 748,
                                "left": {
                                  "type": "TSQualifiedName",
                                  "start": 725,
                                  "end": 737,
                                  "left": {
                                    "type": "Identifier",
                                    "start": 725,
                                    "end": 731,
                                    "decorators": [],
                                    "name": "Sample",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 732,
                                    "end": 737,
                                    "decorators": [],
                                    "name": "Thing",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "start": 738,
                                  "end": 748,
                                  "decorators": [],
                                  "name": "ICodeThing",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 749,
                        "end": 757,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 750,
                          "end": 757
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 758,
                        "end": 780,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 764,
                            "end": 776,
                            "argument": {
                              "type": "Literal",
                              "start": 771,
                              "end": 775,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 787,
      "end": 1217,
      "id": {
        "type": "TSQualifiedName",
        "start": 794,
        "end": 814,
        "left": {
          "type": "TSQualifiedName",
          "start": 794,
          "end": 806,
          "left": {
            "type": "Identifier",
            "start": 794,
            "end": 800,
            "decorators": [],
            "name": "Sample",
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Identifier",
            "start": 801,
            "end": 806,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 807,
          "end": 814,
          "decorators": [],
          "name": "Widgets",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 815,
        "end": 1217,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 818,
            "end": 1215,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 825,
              "end": 1215,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 831,
                "end": 841,
                "decorators": [],
                "name": "FindWidget",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 853,
                  "end": 873,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 853,
                    "end": 873,
                    "object": {
                      "type": "MemberExpression",
                      "start": 853,
                      "end": 865,
                      "object": {
                        "type": "Identifier",
                        "start": 853,
                        "end": 859,
                        "decorators": [],
                        "name": "Sample",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 860,
                        "end": 865,
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 866,
                      "end": 873,
                      "decorators": [],
                      "name": "IWidget",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 874,
                "end": 1215,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 879,
                    "end": 968,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 889,
                      "decorators": [],
                      "name": "gar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 889,
                      "end": 968,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 890,
                          "end": 931,
                          "decorators": [],
                          "name": "runner",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 896,
                            "end": 931,
                            "typeAnnotation": {
                              "type": "TSFunctionType",
                              "start": 897,
                              "end": 931,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "start": 898,
                                  "end": 925,
                                  "decorators": [],
                                  "name": "widget",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 904,
                                    "end": 925,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 905,
                                      "end": 925,
                                      "typeName": {
                                        "type": "TSQualifiedName",
                                        "start": 905,
                                        "end": 925,
                                        "left": {
                                          "type": "TSQualifiedName",
                                          "start": 905,
                                          "end": 917,
                                          "left": {
                                            "type": "Identifier",
                                            "start": 905,
                                            "end": 911,
                                            "decorators": [],
                                            "name": "Sample",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "start": 912,
                                            "end": 917,
                                            "decorators": [],
                                            "name": "Thing",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "start": 918,
                                          "end": 925,
                                          "decorators": [],
                                          "name": "IWidget",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "start": 926,
                                "end": 931,
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 928,
                                  "end": 931
                                }
                              }
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 933,
                        "end": 968,
                        "body": [
                          {
                            "type": "IfStatement",
                            "start": 935,
                            "end": 967,
                            "test": {
                              "type": "Literal",
                              "start": 939,
                              "end": 943,
                              "value": true,
                              "raw": "true"
                            },
                            "consequent": {
                              "type": "BlockStatement",
                              "start": 945,
                              "end": 967,
                              "body": [
                                {
                                  "type": "ReturnStatement",
                                  "start": 946,
                                  "end": 966,
                                  "argument": {
                                    "type": "CallExpression",
                                    "start": 953,
                                    "end": 965,
                                    "callee": {
                                      "type": "Identifier",
                                      "start": 953,
                                      "end": 959,
                                      "decorators": [],
                                      "name": "runner",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "ThisExpression",
                                        "start": 960,
                                        "end": 964
                                      }
                                    ],
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 975,
                    "end": 1002,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 990,
                      "decorators": [],
                      "name": "domNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 990,
                      "end": 994,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 991,
                        "end": 994
                      }
                    },
                    "value": {
                      "type": "Literal",
                      "start": 997,
                      "end": 1001,
                      "value": null,
                      "raw": "null"
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "private"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1005,
                    "end": 1132,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1005,
                      "end": 1016,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1016,
                      "end": 1132,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1017,
                          "end": 1059,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1025,
                            "end": 1059,
                            "decorators": [],
                            "name": "codeThing",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1034,
                              "end": 1059,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1036,
                                "end": 1059,
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "start": 1036,
                                  "end": 1059,
                                  "left": {
                                    "type": "TSQualifiedName",
                                    "start": 1036,
                                    "end": 1048,
                                    "left": {
                                      "type": "Identifier",
                                      "start": 1036,
                                      "end": 1042,
                                      "decorators": [],
                                      "name": "Sample",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "start": 1043,
                                      "end": 1048,
                                      "decorators": [],
                                      "name": "Thing",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 1049,
                                    "end": 1059,
                                    "decorators": [],
                                    "name": "ICodeThing",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1061,
                        "end": 1132,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 1089,
                            "end": 1128,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1089,
                              "end": 1127,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1089,
                                "end": 1108,
                                "object": {
                                  "type": "Identifier",
                                  "start": 1089,
                                  "end": 1098,
                                  "decorators": [],
                                  "name": "codeThing",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1099,
                                  "end": 1108,
                                  "decorators": [],
                                  "name": "addWidget",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 1109,
                                  "end": 1120,
                                  "value": "addWidget",
                                  "raw": "\"addWidget\""
                                },
                                {
                                  "type": "ThisExpression",
                                  "start": 1122,
                                  "end": 1126
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1138,
                    "end": 1182,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1145,
                      "end": 1155,
                      "decorators": [],
                      "name": "getDomNode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1155,
                      "end": 1182,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1158,
                        "end": 1182,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1163,
                            "end": 1178,
                            "argument": {
                              "type": "Identifier",
                              "start": 1170,
                              "end": 1177,
                              "decorators": [],
                              "name": "domNode",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1188,
                    "end": 1211,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1195,
                      "end": 1202,
                      "decorators": [],
                      "name": "destroy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1202,
                      "end": 1211,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1205,
                        "end": 1211,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1219,
      "end": 1264,
      "id": {
        "type": "Identifier",
        "start": 1229,
        "end": 1234,
        "decorators": [],
        "name": "IMode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1235,
        "end": 1264,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1237,
            "end": 1263,
            "key": {
              "type": "Identifier",
              "start": 1237,
              "end": 1252,
              "decorators": [],
              "name": "getInitialState",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1254,
              "end": 1262,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1256,
                "end": 1262,
                "typeName": {
                  "type": "Identifier",
                  "start": 1256,
                  "end": 1262,
                  "decorators": [],
                  "name": "IState",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1266,
      "end": 1354,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1272,
        "end": 1284,
        "decorators": [],
        "name": "AbstractMode",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 1296,
          "end": 1301,
          "expression": {
            "type": "Identifier",
            "start": 1296,
            "end": 1301,
            "decorators": [],
            "name": "IMode",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "ClassBody",
        "start": 1302,
        "end": 1354,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 1304,
            "end": 1352,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1311,
              "end": 1326,
              "decorators": [],
              "name": "getInitialState",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1326,
              "end": 1352,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1328,
                "end": 1336,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1330,
                  "end": 1336,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1330,
                    "end": 1336,
                    "decorators": [],
                    "name": "IState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1337,
                "end": 1352,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1339,
                    "end": 1351,
                    "argument": {
                      "type": "Literal",
                      "start": 1346,
                      "end": 1350,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1356,
      "end": 1375,
      "id": {
        "type": "Identifier",
        "start": 1366,
        "end": 1372,
        "decorators": [],
        "name": "IState",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1373,
        "end": 1375,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1377,
      "end": 1417,
      "id": {
        "type": "Identifier",
        "start": 1387,
        "end": 1393,
        "decorators": [],
        "name": "Window",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1394,
        "end": 1417,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1400,
            "end": 1415,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1400,
              "end": 1406,
              "decorators": [],
              "name": "opener",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1406,
              "end": 1414,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1408,
                "end": 1414,
                "typeName": {
                  "type": "Identifier",
                  "start": 1408,
                  "end": 1414,
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1418,
      "end": 1443,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1430,
          "end": 1442,
          "id": {
            "type": "Identifier",
            "start": 1430,
            "end": 1442,
            "decorators": [],
            "name": "self",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1434,
              "end": 1442,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1436,
                "end": 1442,
                "typeName": {
                  "type": "Identifier",
                  "start": 1436,
                  "end": 1442,
                  "decorators": [],
                  "name": "Window",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1445,
      "end": 1877,
      "id": {
        "type": "TSQualifiedName",
        "start": 1452,
        "end": 1484,
        "left": {
          "type": "TSQualifiedName",
          "start": 1452,
          "end": 1474,
          "left": {
            "type": "TSQualifiedName",
            "start": 1452,
            "end": 1464,
            "left": {
              "type": "Identifier",
              "start": 1452,
              "end": 1458,
              "decorators": [],
              "name": "Sample",
              "optional": false,
              "typeAnnotation": null
            },
            "right": {
              "type": "Identifier",
              "start": 1459,
              "end": 1464,
              "decorators": [],
              "name": "Thing",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "right": {
            "type": "Identifier",
            "start": 1465,
            "end": 1474,
            "decorators": [],
            "name": "Languages",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Identifier",
          "start": 1475,
          "end": 1484,
          "decorators": [],
          "name": "PlainText",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 1485,
        "end": 1877,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1490,
            "end": 1741,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1497,
              "end": 1741,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1503,
                "end": 1508,
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [
                {
                  "type": "TSClassImplements",
                  "start": 1520,
                  "end": 1526,
                  "expression": {
                    "type": "Identifier",
                    "start": 1520,
                    "end": 1526,
                    "decorators": [],
                    "name": "IState",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ],
              "body": {
                "type": "ClassBody",
                "start": 1527,
                "end": 1741,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1539,
                    "end": 1575,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1539,
                      "end": 1550,
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1550,
                      "end": 1575,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "TSParameterProperty",
                          "start": 1551,
                          "end": 1570,
                          "accessibility": "private",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "start": 1559,
                            "end": 1570,
                            "decorators": [],
                            "name": "mode",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 1563,
                              "end": 1570,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 1565,
                                "end": 1570,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1565,
                                  "end": 1570,
                                  "decorators": [],
                                  "name": "IMode",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          "readonly": false,
                          "static": false
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1572,
                        "end": 1575,
                        "body": []
                      },
                      "expression": false
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1578,
                    "end": 1621,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1585,
                      "end": 1590,
                      "decorators": [],
                      "name": "clone",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1590,
                      "end": 1621,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1592,
                        "end": 1599,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1593,
                          "end": 1599,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1593,
                            "end": 1599,
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1600,
                        "end": 1621,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1605,
                            "end": 1617,
                            "argument": {
                              "type": "ThisExpression",
                              "start": 1612,
                              "end": 1616
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1625,
                    "end": 1692,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1632,
                      "end": 1638,
                      "decorators": [],
                      "name": "equals",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1638,
                      "end": 1692,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 1639,
                          "end": 1651,
                          "decorators": [],
                          "name": "other",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 1644,
                            "end": 1651,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 1645,
                              "end": 1651,
                              "typeName": {
                                "type": "Identifier",
                                "start": 1645,
                                "end": 1651,
                                "decorators": [],
                                "name": "IState",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1652,
                        "end": 1660,
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 1653,
                          "end": 1660
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1661,
                        "end": 1692,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1666,
                            "end": 1688,
                            "argument": {
                              "type": "BinaryExpression",
                              "start": 1673,
                              "end": 1687,
                              "left": {
                                "type": "ThisExpression",
                                "start": 1673,
                                "end": 1677
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "start": 1682,
                                "end": 1687,
                                "decorators": [],
                                "name": "other",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  },
                  {
                    "type": "MethodDefinition",
                    "start": 1698,
                    "end": 1738,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1705,
                      "end": 1712,
                      "decorators": [],
                      "name": "getMode",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1712,
                      "end": 1738,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1714,
                        "end": 1721,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1716,
                          "end": 1721,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1716,
                            "end": 1721,
                            "decorators": [],
                            "name": "IMode",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1722,
                        "end": 1738,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1724,
                            "end": 1736,
                            "argument": {
                              "type": "Identifier",
                              "start": 1731,
                              "end": 1735,
                              "decorators": [],
                              "name": "mode",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1745,
            "end": 1875,
            "declaration": {
              "type": "ClassDeclaration",
              "start": 1752,
              "end": 1875,
              "decorators": [],
              "id": {
                "type": "Identifier",
                "start": 1758,
                "end": 1762,
                "decorators": [],
                "name": "Mode",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "superClass": {
                "type": "Identifier",
                "start": 1771,
                "end": 1783,
                "decorators": [],
                "name": "AbstractMode",
                "optional": false,
                "typeAnnotation": null
              },
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 1784,
                "end": 1875,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 1805,
                    "end": 1870,
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "start": 1812,
                      "end": 1827,
                      "decorators": [],
                      "name": "getInitialState",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "start": 1827,
                      "end": 1870,
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 1829,
                        "end": 1837,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1831,
                          "end": 1837,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1831,
                            "end": 1837,
                            "decorators": [],
                            "name": "IState",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 1838,
                        "end": 1870,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1843,
                            "end": 1866,
                            "argument": {
                              "type": "NewExpression",
                              "start": 1850,
                              "end": 1865,
                              "callee": {
                                "type": "Identifier",
                                "start": 1854,
                                "end": 1859,
                                "decorators": [],
                                "name": "State",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1860,
                                  "end": 1864,
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "expression": false
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public"
                  }
                ]
              },
              "abstract": false,
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
