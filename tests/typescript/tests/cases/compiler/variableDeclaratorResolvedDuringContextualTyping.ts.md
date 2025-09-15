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
        "name": "WinJS",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
                "name": "ValueCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 52
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSAnyKeyword",
                            "start": 71,
                            "end": 74
                          },
                          "start": 69,
                          "end": 74
                        },
                        "start": 64,
                        "end": 74
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 77,
                        "end": 80
                      },
                      "start": 75,
                      "end": 80
                    },
                    "start": 63,
                    "end": 81
                  }
                ],
                "start": 53,
                "end": 87
              },
              "declare": false,
              "start": 29,
              "end": 87
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 22,
            "end": 87
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "EventCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 123
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "type": "TSAnyKeyword",
                            "start": 142,
                            "end": 145
                          },
                          "start": 140,
                          "end": 145
                        },
                        "start": 135,
                        "end": 145
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 148,
                        "end": 152
                      },
                      "start": 146,
                      "end": 152
                    },
                    "start": 134,
                    "end": 153
                  }
                ],
                "start": 124,
                "end": 159
              },
              "declare": false,
              "start": 100,
              "end": 159
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 93,
            "end": 159
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ErrorCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 195
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
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
                            "start": 214,
                            "end": 217
                          },
                          "start": 212,
                          "end": 217
                        },
                        "start": 207,
                        "end": 217
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 220,
                        "end": 223
                      },
                      "start": 218,
                      "end": 223
                    },
                    "start": 206,
                    "end": 224
                  }
                ],
                "start": 196,
                "end": 230
              },
              "declare": false,
              "start": 172,
              "end": 230
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 165,
            "end": 230
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ProgressCallback",
                "optional": false,
                "typeAnnotation": null,
                "start": 253,
                "end": 269
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "progress",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 291,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        },
                        "start": 281,
                        "end": 294
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 297,
                        "end": 300
                      },
                      "start": 295,
                      "end": 300
                    },
                    "start": 280,
                    "end": 301
                  }
                ],
                "start": 270,
                "end": 307
              },
              "declare": false,
              "start": 243,
              "end": 307
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 236,
            "end": 307
          },
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
                "start": 334,
                "end": 341
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 363
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
                          "name": "init",
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
                                  "name": "complete",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ValueCallback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 381,
                                        "end": 394
                                      },
                                      "typeArguments": null,
                                      "start": 381,
                                      "end": 394
                                    },
                                    "start": 379,
                                    "end": 394
                                  },
                                  "start": 371,
                                  "end": 394
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ErrorCallback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 403,
                                        "end": 416
                                      },
                                      "typeArguments": null,
                                      "start": 403,
                                      "end": 416
                                    },
                                    "start": 401,
                                    "end": 416
                                  },
                                  "start": 396,
                                  "end": 416
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "progress",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ProgressCallback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 428,
                                        "end": 444
                                      },
                                      "typeArguments": null,
                                      "start": 428,
                                      "end": 444
                                    },
                                    "start": 426,
                                    "end": 444
                                  },
                                  "start": 418,
                                  "end": 444
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 449,
                                  "end": 453
                                },
                                "start": 446,
                                "end": 453
                              },
                              "start": 370,
                              "end": 453
                            },
                            "start": 368,
                            "end": 453
                          },
                          "start": 364,
                          "end": 453
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "oncancel",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 466,
                              "end": 469
                            },
                            "start": 464,
                            "end": 469
                          },
                          "start": 455,
                          "end": 469
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 363,
                      "end": 471
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 352,
                    "end": 471
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "as",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 488,
                      "end": 490
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 498,
                              "end": 501
                            },
                            "start": 496,
                            "end": 501
                          },
                          "start": 491,
                          "end": 501
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
                            "start": 504,
                            "end": 511
                          },
                          "typeArguments": null,
                          "start": 504,
                          "end": 511
                        },
                        "start": 502,
                        "end": 511
                      },
                      "body": null,
                      "expression": false,
                      "start": 490,
                      "end": 512
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 481,
                    "end": 512
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
                      "start": 528,
                      "end": 532
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
                          "name": "promises",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeLiteral",
                              "members": [
                                {
                                  "type": "TSIndexSignature",
                                  "parameters": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "name",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSStringKeyword",
                                          "start": 552,
                                          "end": 558
                                        },
                                        "start": 550,
                                        "end": 558
                                      },
                                      "start": 546,
                                      "end": 558
                                    }
                                  ],
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
                                        "start": 561,
                                        "end": 568
                                      },
                                      "typeArguments": null,
                                      "start": 561,
                                      "end": 568
                                    },
                                    "start": 559,
                                    "end": 568
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 545,
                                  "end": 569
                                }
                              ],
                              "start": 543,
                              "end": 571
                            },
                            "start": 541,
                            "end": 571
                          },
                          "start": 533,
                          "end": 571
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
                            "start": 574,
                            "end": 581
                          },
                          "typeArguments": null,
                          "start": 574,
                          "end": 581
                        },
                        "start": 572,
                        "end": 581
                      },
                      "body": null,
                      "expression": false,
                      "start": 532,
                      "end": 582
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 521,
                    "end": 582
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
                      "start": 598,
                      "end": 602
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
                          "name": "promises",
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
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 613,
                                  "end": 620
                                },
                                "typeArguments": null,
                                "start": 613,
                                "end": 620
                              },
                              "start": 613,
                              "end": 622
                            },
                            "start": 611,
                            "end": 622
                          },
                          "start": 603,
                          "end": 622
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
                            "start": 625,
                            "end": 632
                          },
                          "typeArguments": null,
                          "start": 625,
                          "end": 632
                        },
                        "start": 623,
                        "end": 632
                      },
                      "body": null,
                      "expression": false,
                      "start": 602,
                      "end": 633
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 591,
                    "end": 633
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
                      "start": 649,
                      "end": 652
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
                          "name": "promises",
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
                                  "name": "Promise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 663,
                                  "end": 670
                                },
                                "typeArguments": null,
                                "start": 663,
                                "end": 670
                              },
                              "start": 663,
                              "end": 672
                            },
                            "start": 661,
                            "end": 672
                          },
                          "start": 653,
                          "end": 672
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
                            "start": 675,
                            "end": 682
                          },
                          "typeArguments": null,
                          "start": 675,
                          "end": 682
                        },
                        "start": 673,
                        "end": 682
                      },
                      "body": null,
                      "expression": false,
                      "start": 652,
                      "end": 683
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 642,
                    "end": 683
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 699,
                      "end": 706
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
                          "name": "delay",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 714,
                              "end": 720
                            },
                            "start": 712,
                            "end": 720
                          },
                          "start": 707,
                          "end": 720
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
                            "start": 723,
                            "end": 730
                          },
                          "typeArguments": null,
                          "start": 723,
                          "end": 730
                        },
                        "start": 721,
                        "end": 730
                      },
                      "body": null,
                      "expression": false,
                      "start": 706,
                      "end": 731
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 692,
                    "end": 731
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 747,
                      "end": 756
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
                          "name": "error",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 764,
                              "end": 767
                            },
                            "start": 762,
                            "end": 767
                          },
                          "start": 757,
                          "end": 767
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
                            "start": 770,
                            "end": 777
                          },
                          "typeArguments": null,
                          "start": 770,
                          "end": 777
                        },
                        "start": 768,
                        "end": 777
                      },
                      "body": null,
                      "expression": false,
                      "start": 756,
                      "end": 778
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 740,
                    "end": 778
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
                      "start": 794,
                      "end": 796
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
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 804,
                              "end": 807
                            },
                            "start": 802,
                            "end": 807
                          },
                          "start": 797,
                          "end": 807
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 810,
                          "end": 817
                        },
                        "start": 808,
                        "end": 817
                      },
                      "body": null,
                      "expression": false,
                      "start": 796,
                      "end": 818
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 787,
                    "end": 818
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addEventListener",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 834,
                      "end": 850
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
                          "name": "type",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 857,
                              "end": 863
                            },
                            "start": 855,
                            "end": 863
                          },
                          "start": 851,
                          "end": 863
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
                                "name": "EventCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 869,
                                "end": 882
                              },
                              "typeArguments": null,
                              "start": 869,
                              "end": 882
                            },
                            "start": 867,
                            "end": 882
                          },
                          "start": 865,
                          "end": 882
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 850,
                      "end": 884
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 827,
                    "end": 884
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 901,
                      "end": 905
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
                          "name": "success",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ValueCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 916,
                                "end": 929
                              },
                              "typeArguments": null,
                              "start": 916,
                              "end": 929
                            },
                            "start": 914,
                            "end": 929
                          },
                          "start": 906,
                          "end": 929
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 939,
                                "end": 952
                              },
                              "typeArguments": null,
                              "start": 939,
                              "end": 952
                            },
                            "start": 937,
                            "end": 952
                          },
                          "start": 931,
                          "end": 952
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 965,
                                "end": 981
                              },
                              "typeArguments": null,
                              "start": 965,
                              "end": 981
                            },
                            "start": 963,
                            "end": 981
                          },
                          "start": 954,
                          "end": 981
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
                            "start": 984,
                            "end": 991
                          },
                          "typeArguments": null,
                          "start": 984,
                          "end": 991
                        },
                        "start": 982,
                        "end": 991
                      },
                      "body": null,
                      "expression": false,
                      "start": 905,
                      "end": 992
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 894,
                    "end": 992
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1008,
                      "end": 1012
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
                          "name": "success",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ValueCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1023,
                                "end": 1036
                              },
                              "typeArguments": null,
                              "start": 1023,
                              "end": 1036
                            },
                            "start": 1021,
                            "end": 1036
                          },
                          "start": 1013,
                          "end": 1036
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ErrorCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1046,
                                "end": 1059
                              },
                              "typeArguments": null,
                              "start": 1046,
                              "end": 1059
                            },
                            "start": 1044,
                            "end": 1059
                          },
                          "start": 1038,
                          "end": 1059
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1072,
                                "end": 1088
                              },
                              "typeArguments": null,
                              "start": 1072,
                              "end": 1088
                            },
                            "start": 1070,
                            "end": 1088
                          },
                          "start": 1061,
                          "end": 1088
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1091,
                          "end": 1095
                        },
                        "start": 1089,
                        "end": 1095
                      },
                      "body": null,
                      "expression": false,
                      "start": 1012,
                      "end": 1096
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1001,
                    "end": 1096
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1112,
                      "end": 1118
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1122,
                          "end": 1126
                        },
                        "start": 1120,
                        "end": 1126
                      },
                      "body": null,
                      "expression": false,
                      "start": 1118,
                      "end": 1127
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1105,
                    "end": 1127
                  }
                ],
                "start": 342,
                "end": 1133
              },
              "abstract": false,
              "declare": true,
              "start": 320,
              "end": 1133
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 313,
            "end": 1133
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TPromise",
                "optional": false,
                "typeAnnotation": null,
                "start": 1160,
                "end": 1168
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1169,
                      "end": 1170
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1169,
                    "end": 1170
                  }
                ],
                "start": 1168,
                "end": 1171
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
                      "start": 1183,
                      "end": 1194
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
                          "name": "init",
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
                                  "name": "complete",
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
                                                "name": "V",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1220,
                                                "end": 1221
                                              },
                                              "typeArguments": null,
                                              "start": 1220,
                                              "end": 1221
                                            },
                                            "start": 1218,
                                            "end": 1221
                                          },
                                          "start": 1213,
                                          "end": 1221
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1226,
                                          "end": 1230
                                        },
                                        "start": 1223,
                                        "end": 1230
                                      },
                                      "start": 1212,
                                      "end": 1230
                                    },
                                    "start": 1210,
                                    "end": 1230
                                  },
                                  "start": 1202,
                                  "end": 1230
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "error",
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
                                          "name": "err",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "typeAnnotation": {
                                              "type": "TSAnyKeyword",
                                              "start": 1245,
                                              "end": 1248
                                            },
                                            "start": 1243,
                                            "end": 1248
                                          },
                                          "start": 1240,
                                          "end": 1248
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1253,
                                          "end": 1257
                                        },
                                        "start": 1250,
                                        "end": 1257
                                      },
                                      "start": 1239,
                                      "end": 1257
                                    },
                                    "start": 1237,
                                    "end": 1257
                                  },
                                  "start": 1232,
                                  "end": 1257
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "progress",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ProgressCallback",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1269,
                                        "end": 1285
                                      },
                                      "typeArguments": null,
                                      "start": 1269,
                                      "end": 1285
                                    },
                                    "start": 1267,
                                    "end": 1285
                                  },
                                  "start": 1259,
                                  "end": 1285
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1290,
                                  "end": 1294
                                },
                                "start": 1287,
                                "end": 1294
                              },
                              "start": 1201,
                              "end": 1294
                            },
                            "start": 1199,
                            "end": 1294
                          },
                          "start": 1195,
                          "end": 1294
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "oncancel",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 1307,
                              "end": 1310
                            },
                            "start": 1305,
                            "end": 1310
                          },
                          "start": 1296,
                          "end": 1310
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1194,
                      "end": 1312
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1183,
                    "end": 1312
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1329,
                      "end": 1333
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1334,
                              "end": 1335
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1334,
                            "end": 1335
                          }
                        ],
                        "start": 1333,
                        "end": 1336
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "success",
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
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1355,
                                        "end": 1356
                                      },
                                      "typeArguments": null,
                                      "start": 1355,
                                      "end": 1356
                                    },
                                    "start": 1353,
                                    "end": 1356
                                  },
                                  "start": 1348,
                                  "end": 1356
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TPromise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1361,
                                    "end": 1369
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
                                          "start": 1370,
                                          "end": 1371
                                        },
                                        "typeArguments": null,
                                        "start": 1370,
                                        "end": 1371
                                      }
                                    ],
                                    "start": 1369,
                                    "end": 1372
                                  },
                                  "start": 1361,
                                  "end": 1372
                                },
                                "start": 1358,
                                "end": 1372
                              },
                              "start": 1347,
                              "end": 1372
                            },
                            "start": 1345,
                            "end": 1372
                          },
                          "start": 1337,
                          "end": 1372
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1388,
                                      "end": 1391
                                    },
                                    "start": 1386,
                                    "end": 1391
                                  },
                                  "start": 1383,
                                  "end": 1391
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TPromise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1396,
                                    "end": 1404
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
                                          "start": 1405,
                                          "end": 1406
                                        },
                                        "typeArguments": null,
                                        "start": 1405,
                                        "end": 1406
                                      }
                                    ],
                                    "start": 1404,
                                    "end": 1407
                                  },
                                  "start": 1396,
                                  "end": 1407
                                },
                                "start": 1393,
                                "end": 1407
                              },
                              "start": 1382,
                              "end": 1407
                            },
                            "start": 1380,
                            "end": 1407
                          },
                          "start": 1374,
                          "end": 1407
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1420,
                                "end": 1436
                              },
                              "typeArguments": null,
                              "start": 1420,
                              "end": 1436
                            },
                            "start": 1418,
                            "end": 1436
                          },
                          "start": 1409,
                          "end": 1436
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1439,
                            "end": 1447
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
                                  "start": 1448,
                                  "end": 1449
                                },
                                "typeArguments": null,
                                "start": 1448,
                                "end": 1449
                              }
                            ],
                            "start": 1447,
                            "end": 1450
                          },
                          "start": 1439,
                          "end": 1450
                        },
                        "start": 1437,
                        "end": 1450
                      },
                      "body": null,
                      "expression": false,
                      "start": 1333,
                      "end": 1451
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1322,
                    "end": 1451
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1467,
                      "end": 1471
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1472,
                              "end": 1473
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1472,
                            "end": 1473
                          }
                        ],
                        "start": 1471,
                        "end": 1474
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "success",
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
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1493,
                                        "end": 1494
                                      },
                                      "typeArguments": null,
                                      "start": 1493,
                                      "end": 1494
                                    },
                                    "start": 1491,
                                    "end": 1494
                                  },
                                  "start": 1486,
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
                                    "name": "TPromise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1499,
                                    "end": 1507
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
                                          "start": 1508,
                                          "end": 1509
                                        },
                                        "typeArguments": null,
                                        "start": 1508,
                                        "end": 1509
                                      }
                                    ],
                                    "start": 1507,
                                    "end": 1510
                                  },
                                  "start": 1499,
                                  "end": 1510
                                },
                                "start": 1496,
                                "end": 1510
                              },
                              "start": 1485,
                              "end": 1510
                            },
                            "start": 1483,
                            "end": 1510
                          },
                          "start": 1475,
                          "end": 1510
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1526,
                                      "end": 1529
                                    },
                                    "start": 1524,
                                    "end": 1529
                                  },
                                  "start": 1521,
                                  "end": 1529
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
                                    "start": 1534,
                                    "end": 1535
                                  },
                                  "typeArguments": null,
                                  "start": 1534,
                                  "end": 1535
                                },
                                "start": 1531,
                                "end": 1535
                              },
                              "start": 1520,
                              "end": 1535
                            },
                            "start": 1518,
                            "end": 1535
                          },
                          "start": 1512,
                          "end": 1535
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1548,
                                "end": 1564
                              },
                              "typeArguments": null,
                              "start": 1548,
                              "end": 1564
                            },
                            "start": 1546,
                            "end": 1564
                          },
                          "start": 1537,
                          "end": 1564
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1567,
                            "end": 1575
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
                                  "start": 1576,
                                  "end": 1577
                                },
                                "typeArguments": null,
                                "start": 1576,
                                "end": 1577
                              }
                            ],
                            "start": 1575,
                            "end": 1578
                          },
                          "start": 1567,
                          "end": 1578
                        },
                        "start": 1565,
                        "end": 1578
                      },
                      "body": null,
                      "expression": false,
                      "start": 1471,
                      "end": 1579
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1460,
                    "end": 1579
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1595,
                      "end": 1599
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1600,
                              "end": 1601
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1600,
                            "end": 1601
                          }
                        ],
                        "start": 1599,
                        "end": 1602
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "success",
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
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1621,
                                        "end": 1622
                                      },
                                      "typeArguments": null,
                                      "start": 1621,
                                      "end": 1622
                                    },
                                    "start": 1619,
                                    "end": 1622
                                  },
                                  "start": 1614,
                                  "end": 1622
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
                                    "start": 1627,
                                    "end": 1628
                                  },
                                  "typeArguments": null,
                                  "start": 1627,
                                  "end": 1628
                                },
                                "start": 1624,
                                "end": 1628
                              },
                              "start": 1613,
                              "end": 1628
                            },
                            "start": 1611,
                            "end": 1628
                          },
                          "start": 1603,
                          "end": 1628
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1644,
                                      "end": 1647
                                    },
                                    "start": 1642,
                                    "end": 1647
                                  },
                                  "start": 1639,
                                  "end": 1647
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "TPromise",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1652,
                                    "end": 1660
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
                                          "start": 1661,
                                          "end": 1662
                                        },
                                        "typeArguments": null,
                                        "start": 1661,
                                        "end": 1662
                                      }
                                    ],
                                    "start": 1660,
                                    "end": 1663
                                  },
                                  "start": 1652,
                                  "end": 1663
                                },
                                "start": 1649,
                                "end": 1663
                              },
                              "start": 1638,
                              "end": 1663
                            },
                            "start": 1636,
                            "end": 1663
                          },
                          "start": 1630,
                          "end": 1663
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1676,
                                "end": 1692
                              },
                              "typeArguments": null,
                              "start": 1676,
                              "end": 1692
                            },
                            "start": 1674,
                            "end": 1692
                          },
                          "start": 1665,
                          "end": 1692
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1695,
                            "end": 1703
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
                                  "start": 1704,
                                  "end": 1705
                                },
                                "typeArguments": null,
                                "start": 1704,
                                "end": 1705
                              }
                            ],
                            "start": 1703,
                            "end": 1706
                          },
                          "start": 1695,
                          "end": 1706
                        },
                        "start": 1693,
                        "end": 1706
                      },
                      "body": null,
                      "expression": false,
                      "start": 1599,
                      "end": 1707
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1588,
                    "end": 1707
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "then",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1723,
                      "end": 1727
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
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1728,
                              "end": 1729
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1728,
                            "end": 1729
                          }
                        ],
                        "start": 1727,
                        "end": 1730
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "success",
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
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1749,
                                        "end": 1750
                                      },
                                      "typeArguments": null,
                                      "start": 1749,
                                      "end": 1750
                                    },
                                    "start": 1747,
                                    "end": 1750
                                  },
                                  "start": 1742,
                                  "end": 1750
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
                                    "start": 1755,
                                    "end": 1756
                                  },
                                  "typeArguments": null,
                                  "start": 1755,
                                  "end": 1756
                                },
                                "start": 1752,
                                "end": 1756
                              },
                              "start": 1741,
                              "end": 1756
                            },
                            "start": 1739,
                            "end": 1756
                          },
                          "start": 1731,
                          "end": 1756
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1772,
                                      "end": 1775
                                    },
                                    "start": 1770,
                                    "end": 1775
                                  },
                                  "start": 1767,
                                  "end": 1775
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
                                    "start": 1780,
                                    "end": 1781
                                  },
                                  "typeArguments": null,
                                  "start": 1780,
                                  "end": 1781
                                },
                                "start": 1777,
                                "end": 1781
                              },
                              "start": 1766,
                              "end": 1781
                            },
                            "start": 1764,
                            "end": 1781
                          },
                          "start": 1758,
                          "end": 1781
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1794,
                                "end": 1810
                              },
                              "typeArguments": null,
                              "start": 1794,
                              "end": 1810
                            },
                            "start": 1792,
                            "end": 1810
                          },
                          "start": 1783,
                          "end": 1810
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1813,
                            "end": 1821
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
                                  "start": 1822,
                                  "end": 1823
                                },
                                "typeArguments": null,
                                "start": 1822,
                                "end": 1823
                              }
                            ],
                            "start": 1821,
                            "end": 1824
                          },
                          "start": 1813,
                          "end": 1824
                        },
                        "start": 1811,
                        "end": 1824
                      },
                      "body": null,
                      "expression": false,
                      "start": 1727,
                      "end": 1825
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1716,
                    "end": 1825
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "done",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1842,
                      "end": 1846
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
                          "name": "success",
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
                                        "name": "V",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1865,
                                        "end": 1866
                                      },
                                      "typeArguments": null,
                                      "start": 1865,
                                      "end": 1866
                                    },
                                    "start": 1863,
                                    "end": 1866
                                  },
                                  "start": 1858,
                                  "end": 1866
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1871,
                                  "end": 1875
                                },
                                "start": 1868,
                                "end": 1875
                              },
                              "start": 1857,
                              "end": 1875
                            },
                            "start": 1855,
                            "end": 1875
                          },
                          "start": 1847,
                          "end": 1875
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "error",
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
                                  "name": "err",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 1891,
                                      "end": 1894
                                    },
                                    "start": 1889,
                                    "end": 1894
                                  },
                                  "start": 1886,
                                  "end": 1894
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1899,
                                  "end": 1902
                                },
                                "start": 1896,
                                "end": 1902
                              },
                              "start": 1885,
                              "end": 1902
                            },
                            "start": 1883,
                            "end": 1902
                          },
                          "start": 1877,
                          "end": 1902
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "progress",
                          "optional": true,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "ProgressCallback",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1915,
                                "end": 1931
                              },
                              "typeArguments": null,
                              "start": 1915,
                              "end": 1931
                            },
                            "start": 1913,
                            "end": 1931
                          },
                          "start": 1904,
                          "end": 1931
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1934,
                          "end": 1938
                        },
                        "start": 1932,
                        "end": 1938
                      },
                      "body": null,
                      "expression": false,
                      "start": 1846,
                      "end": 1939
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1835,
                    "end": 1939
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cancel",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1955,
                      "end": 1961
                    },
                    "value": {
                      "type": "TSEmptyBodyFunctionExpression",
                      "id": null,
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1965,
                          "end": 1969
                        },
                        "start": 1963,
                        "end": 1969
                      },
                      "body": null,
                      "expression": false,
                      "start": 1961,
                      "end": 1970
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1948,
                    "end": 1970
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "as",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1994,
                      "end": 1996
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
                              "name": "ValueType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1997,
                              "end": 2006
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1997,
                            "end": 2006
                          }
                        ],
                        "start": 1996,
                        "end": 2007
                      },
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
                                "name": "ValueType",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2015,
                                "end": 2024
                              },
                              "typeArguments": null,
                              "start": 2015,
                              "end": 2024
                            },
                            "start": 2013,
                            "end": 2024
                          },
                          "start": 2008,
                          "end": 2024
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2027,
                            "end": 2035
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ValueType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2036,
                                  "end": 2045
                                },
                                "typeArguments": null,
                                "start": 2036,
                                "end": 2045
                              }
                            ],
                            "start": 2035,
                            "end": 2046
                          },
                          "start": 2027,
                          "end": 2046
                        },
                        "start": 2025,
                        "end": 2046
                      },
                      "body": null,
                      "expression": false,
                      "start": 1996,
                      "end": 2047
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1980,
                    "end": 2047
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "timeout",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2070,
                      "end": 2077
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
                          "name": "delay",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 2085,
                              "end": 2091
                            },
                            "start": 2083,
                            "end": 2091
                          },
                          "start": 2078,
                          "end": 2091
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2094,
                            "end": 2102
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 2103,
                                "end": 2107
                              }
                            ],
                            "start": 2102,
                            "end": 2108
                          },
                          "start": 2094,
                          "end": 2108
                        },
                        "start": 2092,
                        "end": 2108
                      },
                      "body": null,
                      "expression": false,
                      "start": 2077,
                      "end": 2109
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2056,
                    "end": 2109
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
                      "start": 2132,
                      "end": 2136
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
                              "name": "ValueType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2137,
                              "end": 2146
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2137,
                            "end": 2146
                          }
                        ],
                        "start": 2136,
                        "end": 2147
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "promises",
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
                                  "name": "TPromise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2158,
                                  "end": 2166
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ValueType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2167,
                                        "end": 2176
                                      },
                                      "typeArguments": null,
                                      "start": 2167,
                                      "end": 2176
                                    }
                                  ],
                                  "start": 2166,
                                  "end": 2177
                                },
                                "start": 2158,
                                "end": 2177
                              },
                              "start": 2158,
                              "end": 2179
                            },
                            "start": 2156,
                            "end": 2179
                          },
                          "start": 2148,
                          "end": 2179
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2182,
                            "end": 2190
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
                                    "name": "ValueType",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 2191,
                                    "end": 2200
                                  },
                                  "typeArguments": null,
                                  "start": 2191,
                                  "end": 2200
                                },
                                "start": 2191,
                                "end": 2202
                              }
                            ],
                            "start": 2190,
                            "end": 2203
                          },
                          "start": 2182,
                          "end": 2203
                        },
                        "start": 2180,
                        "end": 2203
                      },
                      "body": null,
                      "expression": false,
                      "start": 2136,
                      "end": 2204
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2118,
                    "end": 2204
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
                      "start": 2227,
                      "end": 2230
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
                              "name": "ValueType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2231,
                              "end": 2240
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2231,
                            "end": 2240
                          }
                        ],
                        "start": 2230,
                        "end": 2241
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "promises",
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
                                  "name": "TPromise",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2252,
                                  "end": 2260
                                },
                                "typeArguments": {
                                  "type": "TSTypeParameterInstantiation",
                                  "params": [
                                    {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "ValueType",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 2261,
                                        "end": 2270
                                      },
                                      "typeArguments": null,
                                      "start": 2261,
                                      "end": 2270
                                    }
                                  ],
                                  "start": 2260,
                                  "end": 2271
                                },
                                "start": 2252,
                                "end": 2271
                              },
                              "start": 2252,
                              "end": 2273
                            },
                            "start": 2250,
                            "end": 2273
                          },
                          "start": 2242,
                          "end": 2273
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2276,
                            "end": 2284
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ValueType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2285,
                                  "end": 2294
                                },
                                "typeArguments": null,
                                "start": 2285,
                                "end": 2294
                              }
                            ],
                            "start": 2284,
                            "end": 2295
                          },
                          "start": 2276,
                          "end": 2295
                        },
                        "start": 2274,
                        "end": 2295
                      },
                      "body": null,
                      "expression": false,
                      "start": 2230,
                      "end": 2296
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2213,
                    "end": 2296
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "wrapError",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2319,
                      "end": 2328
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
                              "name": "ValueType",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2329,
                              "end": 2338
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2329,
                            "end": 2338
                          }
                        ],
                        "start": 2328,
                        "end": 2339
                      },
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
                              "start": 2347,
                              "end": 2350
                            },
                            "start": 2345,
                            "end": 2350
                          },
                          "start": 2340,
                          "end": 2350
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "TPromise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2353,
                            "end": 2361
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ValueType",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 2362,
                                  "end": 2371
                                },
                                "typeArguments": null,
                                "start": 2362,
                                "end": 2371
                              }
                            ],
                            "start": 2361,
                            "end": 2372
                          },
                          "start": 2353,
                          "end": 2372
                        },
                        "start": 2351,
                        "end": 2372
                      },
                      "body": null,
                      "expression": false,
                      "start": 2328,
                      "end": 2373
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2305,
                    "end": 2373
                  }
                ],
                "start": 1172,
                "end": 2379
              },
              "abstract": false,
              "declare": true,
              "start": 1146,
              "end": 2379
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1139,
            "end": 2379
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IXHROptions",
                "optional": false,
                "typeAnnotation": null,
                "start": 2402,
                "end": 2413
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2424,
                      "end": 2428
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2431,
                        "end": 2437
                      },
                      "start": 2429,
                      "end": 2437
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2424,
                    "end": 2438
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "url",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2447,
                      "end": 2450
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2453,
                        "end": 2459
                      },
                      "start": 2451,
                      "end": 2459
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2447,
                    "end": 2460
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2469,
                      "end": 2473
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2476,
                        "end": 2482
                      },
                      "start": 2474,
                      "end": 2482
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2469,
                    "end": 2483
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "password",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2492,
                      "end": 2500
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2503,
                        "end": 2509
                      },
                      "start": 2501,
                      "end": 2509
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2492,
                    "end": 2510
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "responseType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2519,
                      "end": 2531
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2534,
                        "end": 2540
                      },
                      "start": 2532,
                      "end": 2540
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2519,
                    "end": 2541
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "headers",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2550,
                      "end": 2557
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2560,
                        "end": 2563
                      },
                      "start": 2558,
                      "end": 2563
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2550,
                    "end": 2564
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "customRequestInitializer",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2573,
                      "end": 2597
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "req",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSAnyKeyword",
                                "start": 2606,
                                "end": 2609
                              },
                              "start": 2604,
                              "end": 2609
                            },
                            "start": 2601,
                            "end": 2609
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2614,
                            "end": 2618
                          },
                          "start": 2611,
                          "end": 2618
                        },
                        "start": 2600,
                        "end": 2618
                      },
                      "start": 2598,
                      "end": 2618
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2573,
                    "end": 2619
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2628,
                      "end": 2632
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2635,
                        "end": 2638
                      },
                      "start": 2633,
                      "end": 2638
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2628,
                    "end": 2639
                  }
                ],
                "start": 2414,
                "end": 2645
              },
              "declare": false,
              "start": 2392,
              "end": 2645
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2385,
            "end": 2645
          }
        ],
        "start": 16,
        "end": 2647
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2647
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 2659,
        "end": 2667
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
                "name": "IRequestService",
                "optional": false,
                "typeAnnotation": null,
                "start": 2691,
                "end": 2706
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
                      "name": "getRequestUrl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3028,
                      "end": 3041
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "service",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3051,
                            "end": 3057
                          },
                          "start": 3049,
                          "end": 3057
                        },
                        "start": 3042,
                        "end": 3057
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3066,
                            "end": 3072
                          },
                          "start": 3064,
                          "end": 3072
                        },
                        "start": 3059,
                        "end": 3072
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3075,
                        "end": 3081
                      },
                      "start": 3073,
                      "end": 3081
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3028,
                    "end": 3082
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getRequestUrl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3091,
                      "end": 3104
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "service",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3114,
                            "end": 3120
                          },
                          "start": 3112,
                          "end": 3120
                        },
                        "start": 3105,
                        "end": 3120
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "path",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3129,
                            "end": 3135
                          },
                          "start": 3127,
                          "end": 3135
                        },
                        "start": 3122,
                        "end": 3135
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "absolute",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 3148,
                            "end": 3155
                          },
                          "start": 3146,
                          "end": 3155
                        },
                        "start": 3137,
                        "end": 3155
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3158,
                        "end": 3164
                      },
                      "start": 3156,
                      "end": 3164
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3091,
                    "end": 3165
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "makeRequest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3335,
                      "end": 3346
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "options",
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
                                "name": "WinJS",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3356,
                                "end": 3361
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IXHROptions",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3362,
                                "end": 3373
                              },
                              "start": 3356,
                              "end": 3373
                            },
                            "typeArguments": null,
                            "start": 3356,
                            "end": 3373
                          },
                          "start": 3354,
                          "end": 3373
                        },
                        "start": 3347,
                        "end": 3373
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
                            "name": "WinJS",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3376,
                            "end": 3381
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3382,
                            "end": 3389
                          },
                          "start": 3376,
                          "end": 3389
                        },
                        "typeArguments": null,
                        "start": 3376,
                        "end": 3389
                      },
                      "start": 3374,
                      "end": 3389
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3335,
                    "end": 3390
                  }
                ],
                "start": 2707,
                "end": 3396
              },
              "declare": false,
              "start": 2681,
              "end": 3396
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2674,
            "end": 3396
          }
        ],
        "start": 2668,
        "end": 3398
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 2649,
      "end": 3398
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 3410,
        "end": 3416
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
                "name": "ConnectionError",
                "optional": false,
                "typeAnnotation": null,
                "start": 3436,
                "end": 3451
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
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3482,
                      "end": 3493
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
                          "name": "request",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "XMLHttpRequest",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3503,
                                "end": 3517
                              },
                              "typeArguments": null,
                              "start": 3503,
                              "end": 3517
                            },
                            "start": 3501,
                            "end": 3517
                          },
                          "start": 3494,
                          "end": 3517
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3519,
                        "end": 3530
                      },
                      "expression": false,
                      "start": 3493,
                      "end": 3530
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3482,
                    "end": 3530
                  }
                ],
                "start": 3472,
                "end": 3536
              },
              "abstract": false,
              "declare": false,
              "start": 3430,
              "end": 3536
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3423,
            "end": 3536
          }
        ],
        "start": 3417,
        "end": 3538
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3400,
      "end": 3538
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Files",
        "optional": false,
        "typeAnnotation": null,
        "start": 3550,
        "end": 3555
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
                "name": "IUploadResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 3579,
                "end": 3592
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
                      "name": "stat",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3603,
                      "end": 3607
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3609,
                        "end": 3615
                      },
                      "start": 3607,
                      "end": 3615
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3603,
                    "end": 3616
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isNew",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3625,
                      "end": 3630
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3632,
                        "end": 3639
                      },
                      "start": 3630,
                      "end": 3639
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3625,
                    "end": 3640
                  }
                ],
                "start": 3593,
                "end": 3646
              },
              "declare": false,
              "start": 3569,
              "end": 3646
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3562,
            "end": 3646
          }
        ],
        "start": 3556,
        "end": 3648
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 3540,
      "end": 3648
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XMLHttpRequest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3660,
        "end": 3674
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
              "name": "status",
              "optional": false,
              "typeAnnotation": null,
              "start": 3681,
              "end": 3687
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3689,
                "end": 3695
              },
              "start": 3687,
              "end": 3695
            },
            "accessibility": null,
            "static": false,
            "start": 3681,
            "end": 3696
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "responseText",
              "optional": false,
              "typeAnnotation": null,
              "start": 3701,
              "end": 3713
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3715,
                "end": 3721
              },
              "start": 3713,
              "end": 3721
            },
            "accessibility": null,
            "static": false,
            "start": 3701,
            "end": 3722
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "statusText",
              "optional": false,
              "typeAnnotation": null,
              "start": 3727,
              "end": 3737
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3739,
                "end": 3745
              },
              "start": 3737,
              "end": 3745
            },
            "accessibility": null,
            "static": false,
            "start": 3727,
            "end": 3746
          }
        ],
        "start": 3675,
        "end": 3749
      },
      "declare": false,
      "start": 3650,
      "end": 3749
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FileService",
        "optional": false,
        "typeAnnotation": null,
        "start": 3757,
        "end": 3768
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
              "name": "requestService",
              "optional": false,
              "typeAnnotation": null,
              "start": 3783,
              "end": 3797
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Services",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3799,
                    "end": 3807
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRequestService",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3808,
                    "end": 3823
                  },
                  "start": 3799,
                  "end": 3823
                },
                "typeArguments": null,
                "start": 3799,
                "end": 3823
              },
              "start": 3797,
              "end": 3823
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 3775,
            "end": 3824
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uploadData",
              "optional": false,
              "typeAnnotation": null,
              "start": 3836,
              "end": 3846
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
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "WinJS",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3850,
                      "end": 3855
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3856,
                      "end": 3864
                    },
                    "start": 3850,
                    "end": 3864
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Files",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3865,
                            "end": 3870
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IUploadResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3871,
                            "end": 3884
                          },
                          "start": 3865,
                          "end": 3884
                        },
                        "typeArguments": null,
                        "start": 3865,
                        "end": 3884
                      }
                    ],
                    "start": 3864,
                    "end": 3885
                  },
                  "start": 3850,
                  "end": 3885
                },
                "start": 3848,
                "end": 3885
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
                          "name": "path",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3900,
                          "end": 3904
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 3907,
                          "end": 3909
                        },
                        "definite": false,
                        "start": 3900,
                        "end": 3909
                      }
                    ],
                    "declare": false,
                    "start": 3896,
                    "end": 3910
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 3926,
                                "end": 3930
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "requestService",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3931,
                                "end": 3945
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3926,
                              "end": 3945
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "makeRequest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3946,
                              "end": 3957
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3926,
                            "end": 3957
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "url",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 3972,
                                    "end": 3975
                                  },
                                  "value": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 3977,
                                          "end": 3981
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "requestService",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3982,
                                          "end": 3996
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3977,
                                        "end": 3996
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "getRequestUrl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3997,
                                        "end": 4010
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3977,
                                      "end": 4010
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "root",
                                        "raw": "'root'",
                                        "start": 4011,
                                        "end": 4017
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "path",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4019,
                                        "end": 4023
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3977,
                                    "end": 4024
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 3972,
                                  "end": 4024
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "type",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4038,
                                    "end": 4042
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "POST",
                                    "raw": "'POST'",
                                    "start": 4044,
                                    "end": 4050
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4038,
                                  "end": 4050
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "headers",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4064,
                                    "end": 4071
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 4073,
                                    "end": 4075
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4064,
                                  "end": 4075
                                },
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "data",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4089,
                                    "end": 4093
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "someData",
                                    "raw": "\"someData\"",
                                    "start": 4095,
                                    "end": 4105
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4089,
                                  "end": 4105
                                }
                              ],
                              "start": 3958,
                              "end": 4115
                            }
                          ],
                          "optional": false,
                          "start": 3926,
                          "end": 4116
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4117,
                          "end": 4121
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3926,
                        "end": 4121
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "response",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "XMLHttpRequest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4133,
                                    "end": 4147
                                  },
                                  "typeArguments": null,
                                  "start": 4133,
                                  "end": 4147
                                },
                                "start": 4131,
                                "end": 4147
                              },
                              "start": 4123,
                              "end": 4147
                            }
                          ],
                          "returnType": null,
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
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "typeName": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "IUploadResult",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4182,
                                            "end": 4195
                                          },
                                          "typeArguments": null,
                                          "start": 4182,
                                          "end": 4195
                                        },
                                        "start": 4180,
                                        "end": 4195
                                      },
                                      "start": 4174,
                                      "end": 4195
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
                                            "name": "stat",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4244,
                                            "end": 4248
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 4250,
                                                "end": 4254
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "jsonToStat",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4255,
                                                "end": 4265
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4250,
                                              "end": 4265
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "newFilePath",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4266,
                                                "end": 4277
                                              },
                                              {
                                                "type": "Literal",
                                                "value": "someString",
                                                "raw": "\"someString\"",
                                                "start": 4279,
                                                "end": 4291
                                              }
                                            ],
                                            "optional": false,
                                            "start": 4250,
                                            "end": 4292
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 4244,
                                          "end": 4292
                                        },
                                        {
                                          "type": "Property",
                                          "kind": "init",
                                          "key": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "isNew",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4358,
                                            "end": 4363
                                          },
                                          "value": {
                                            "type": "BinaryExpression",
                                            "left": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "response",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4365,
                                                "end": 4373
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "status",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4374,
                                                "end": 4380
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4365,
                                              "end": 4380
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": 201,
                                              "raw": "201",
                                              "start": 4385,
                                              "end": 4388
                                            },
                                            "start": 4365,
                                            "end": 4388
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 4358,
                                          "end": 4388
                                        }
                                      ],
                                      "start": 4198,
                                      "end": 4406
                                    },
                                    "definite": false,
                                    "start": 4174,
                                    "end": 4406
                                  }
                                ],
                                "declare": false,
                                "start": 4170,
                                "end": 4407
                              },
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "WinJS",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4432,
                                        "end": 4437
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TPromise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4438,
                                        "end": 4446
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4432,
                                      "end": 4446
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "as",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4447,
                                      "end": 4449
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4432,
                                    "end": 4449
                                  },
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "params": [
                                      {
                                        "type": "TSTypeReference",
                                        "typeName": {
                                          "type": "TSQualifiedName",
                                          "left": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "Files",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4450,
                                            "end": 4455
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "IUploadResult",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4456,
                                            "end": 4469
                                          },
                                          "start": 4450,
                                          "end": 4469
                                        },
                                        "typeArguments": null,
                                        "start": 4450,
                                        "end": 4469
                                      }
                                    ],
                                    "start": 4449,
                                    "end": 4470
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4471,
                                      "end": 4477
                                    }
                                  ],
                                  "optional": false,
                                  "start": 4432,
                                  "end": 4478
                                },
                                "start": 4425,
                                "end": 4479
                              }
                            ],
                            "start": 4152,
                            "end": 4493
                          },
                          "id": null,
                          "generator": false,
                          "start": 4122,
                          "end": 4493
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "expression": false,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "xhr",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "XMLHttpRequest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4501,
                                    "end": 4515
                                  },
                                  "typeArguments": null,
                                  "start": 4501,
                                  "end": 4515
                                },
                                "start": 4499,
                                "end": 4515
                              },
                              "start": 4496,
                              "end": 4515
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "WinJS",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4545,
                                        "end": 4550
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4551,
                                        "end": 4558
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4545,
                                      "end": 4558
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "wrapError",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4559,
                                      "end": 4568
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4545,
                                    "end": 4568
                                  },
                                  "typeArguments": null,
                                  "arguments": [
                                    {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "Errors",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4573,
                                          "end": 4579
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ConnectionError",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4580,
                                          "end": 4595
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 4573,
                                        "end": 4595
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "xhr",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4596,
                                          "end": 4599
                                        }
                                      ],
                                      "start": 4569,
                                      "end": 4600
                                    }
                                  ],
                                  "optional": false,
                                  "start": 4545,
                                  "end": 4601
                                },
                                "start": 4538,
                                "end": 4602
                              }
                            ],
                            "start": 4520,
                            "end": 4616
                          },
                          "id": null,
                          "generator": false,
                          "start": 4495,
                          "end": 4616
                        }
                      ],
                      "optional": false,
                      "start": 3926,
                      "end": 4617
                    },
                    "start": 3919,
                    "end": 4618
                  }
                ],
                "start": 3886,
                "end": 4624
              },
              "expression": false,
              "start": 3846,
              "end": 4624
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3829,
            "end": 4624
          }
        ],
        "start": 3769,
        "end": 4626
      },
      "abstract": false,
      "declare": false,
      "start": 3751,
      "end": 4626
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4626
}
```
