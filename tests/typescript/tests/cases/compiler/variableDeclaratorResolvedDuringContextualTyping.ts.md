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
        "start": 7,
        "end": 12
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
                "start": 36,
                "end": 49
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
                            "start": 68,
                            "end": 71
                          },
                          "start": 66,
                          "end": 71
                        },
                        "start": 61,
                        "end": 71
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 74,
                        "end": 77
                      },
                      "start": 72,
                      "end": 77
                    },
                    "start": 60,
                    "end": 78
                  }
                ],
                "start": 50,
                "end": 84
              },
              "declare": false,
              "start": 26,
              "end": 84
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 19,
            "end": 84
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
                "start": 107,
                "end": 120
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
                            "start": 139,
                            "end": 142
                          },
                          "start": 137,
                          "end": 142
                        },
                        "start": 132,
                        "end": 142
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 145,
                        "end": 149
                      },
                      "start": 143,
                      "end": 149
                    },
                    "start": 131,
                    "end": 150
                  }
                ],
                "start": 121,
                "end": 156
              },
              "declare": false,
              "start": 97,
              "end": 156
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 90,
            "end": 156
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
                "start": 179,
                "end": 192
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
                            "start": 211,
                            "end": 214
                          },
                          "start": 209,
                          "end": 214
                        },
                        "start": 204,
                        "end": 214
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 217,
                        "end": 220
                      },
                      "start": 215,
                      "end": 220
                    },
                    "start": 203,
                    "end": 221
                  }
                ],
                "start": 193,
                "end": 227
              },
              "declare": false,
              "start": 169,
              "end": 227
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 162,
            "end": 227
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
                "start": 250,
                "end": 266
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
                            "start": 288,
                            "end": 291
                          },
                          "start": 286,
                          "end": 291
                        },
                        "start": 278,
                        "end": 291
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 294,
                        "end": 297
                      },
                      "start": 292,
                      "end": 297
                    },
                    "start": 277,
                    "end": 298
                  }
                ],
                "start": 267,
                "end": 304
              },
              "declare": false,
              "start": 240,
              "end": 304
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 233,
            "end": 304
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
                "start": 331,
                "end": 338
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
                      "start": 349,
                      "end": 360
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
                                        "start": 378,
                                        "end": 391
                                      },
                                      "typeArguments": null,
                                      "start": 378,
                                      "end": 391
                                    },
                                    "start": 376,
                                    "end": 391
                                  },
                                  "start": 368,
                                  "end": 391
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
                                        "start": 400,
                                        "end": 413
                                      },
                                      "typeArguments": null,
                                      "start": 400,
                                      "end": 413
                                    },
                                    "start": 398,
                                    "end": 413
                                  },
                                  "start": 393,
                                  "end": 413
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
                                        "start": 425,
                                        "end": 441
                                      },
                                      "typeArguments": null,
                                      "start": 425,
                                      "end": 441
                                    },
                                    "start": 423,
                                    "end": 441
                                  },
                                  "start": 415,
                                  "end": 441
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 446,
                                  "end": 450
                                },
                                "start": 443,
                                "end": 450
                              },
                              "start": 367,
                              "end": 450
                            },
                            "start": 365,
                            "end": 450
                          },
                          "start": 361,
                          "end": 450
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
                              "start": 463,
                              "end": 466
                            },
                            "start": 461,
                            "end": 466
                          },
                          "start": 452,
                          "end": 466
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 360,
                      "end": 468
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 349,
                    "end": 468
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
                      "start": 485,
                      "end": 487
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
                              "start": 495,
                              "end": 498
                            },
                            "start": 493,
                            "end": 498
                          },
                          "start": 488,
                          "end": 498
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
                            "start": 501,
                            "end": 508
                          },
                          "typeArguments": null,
                          "start": 501,
                          "end": 508
                        },
                        "start": 499,
                        "end": 508
                      },
                      "body": null,
                      "expression": false,
                      "start": 487,
                      "end": 509
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 478,
                    "end": 509
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
                      "start": 525,
                      "end": 529
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
                                          "start": 549,
                                          "end": 555
                                        },
                                        "start": 547,
                                        "end": 555
                                      },
                                      "start": 543,
                                      "end": 555
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
                                        "start": 558,
                                        "end": 565
                                      },
                                      "typeArguments": null,
                                      "start": 558,
                                      "end": 565
                                    },
                                    "start": 556,
                                    "end": 565
                                  },
                                  "readonly": false,
                                  "static": false,
                                  "accessibility": null,
                                  "start": 542,
                                  "end": 566
                                }
                              ],
                              "start": 540,
                              "end": 568
                            },
                            "start": 538,
                            "end": 568
                          },
                          "start": 530,
                          "end": 568
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
                            "start": 571,
                            "end": 578
                          },
                          "typeArguments": null,
                          "start": 571,
                          "end": 578
                        },
                        "start": 569,
                        "end": 578
                      },
                      "body": null,
                      "expression": false,
                      "start": 529,
                      "end": 579
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 518,
                    "end": 579
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
                      "start": 595,
                      "end": 599
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
                                  "start": 610,
                                  "end": 617
                                },
                                "typeArguments": null,
                                "start": 610,
                                "end": 617
                              },
                              "start": 610,
                              "end": 619
                            },
                            "start": 608,
                            "end": 619
                          },
                          "start": 600,
                          "end": 619
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
                            "start": 622,
                            "end": 629
                          },
                          "typeArguments": null,
                          "start": 622,
                          "end": 629
                        },
                        "start": 620,
                        "end": 629
                      },
                      "body": null,
                      "expression": false,
                      "start": 599,
                      "end": 630
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 588,
                    "end": 630
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
                      "start": 646,
                      "end": 649
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
                                  "start": 660,
                                  "end": 667
                                },
                                "typeArguments": null,
                                "start": 660,
                                "end": 667
                              },
                              "start": 660,
                              "end": 669
                            },
                            "start": 658,
                            "end": 669
                          },
                          "start": 650,
                          "end": 669
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
                            "start": 672,
                            "end": 679
                          },
                          "typeArguments": null,
                          "start": 672,
                          "end": 679
                        },
                        "start": 670,
                        "end": 679
                      },
                      "body": null,
                      "expression": false,
                      "start": 649,
                      "end": 680
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 639,
                    "end": 680
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
                      "start": 696,
                      "end": 703
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
                              "start": 711,
                              "end": 717
                            },
                            "start": 709,
                            "end": 717
                          },
                          "start": 704,
                          "end": 717
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
                            "start": 720,
                            "end": 727
                          },
                          "typeArguments": null,
                          "start": 720,
                          "end": 727
                        },
                        "start": 718,
                        "end": 727
                      },
                      "body": null,
                      "expression": false,
                      "start": 703,
                      "end": 728
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 689,
                    "end": 728
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
                      "start": 744,
                      "end": 753
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
                              "start": 761,
                              "end": 764
                            },
                            "start": 759,
                            "end": 764
                          },
                          "start": 754,
                          "end": 764
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
                            "start": 767,
                            "end": 774
                          },
                          "typeArguments": null,
                          "start": 767,
                          "end": 774
                        },
                        "start": 765,
                        "end": 774
                      },
                      "body": null,
                      "expression": false,
                      "start": 753,
                      "end": 775
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 737,
                    "end": 775
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
                      "start": 791,
                      "end": 793
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
                              "start": 801,
                              "end": 804
                            },
                            "start": 799,
                            "end": 804
                          },
                          "start": 794,
                          "end": 804
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSBooleanKeyword",
                          "start": 807,
                          "end": 814
                        },
                        "start": 805,
                        "end": 814
                      },
                      "body": null,
                      "expression": false,
                      "start": 793,
                      "end": 815
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 784,
                    "end": 815
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
                      "start": 831,
                      "end": 847
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
                              "start": 854,
                              "end": 860
                            },
                            "start": 852,
                            "end": 860
                          },
                          "start": 848,
                          "end": 860
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
                                "start": 866,
                                "end": 879
                              },
                              "typeArguments": null,
                              "start": 866,
                              "end": 879
                            },
                            "start": 864,
                            "end": 879
                          },
                          "start": 862,
                          "end": 879
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 847,
                      "end": 881
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 824,
                    "end": 881
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
                      "start": 898,
                      "end": 902
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
                                "start": 913,
                                "end": 926
                              },
                              "typeArguments": null,
                              "start": 913,
                              "end": 926
                            },
                            "start": 911,
                            "end": 926
                          },
                          "start": 903,
                          "end": 926
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
                                "start": 936,
                                "end": 949
                              },
                              "typeArguments": null,
                              "start": 936,
                              "end": 949
                            },
                            "start": 934,
                            "end": 949
                          },
                          "start": 928,
                          "end": 949
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
                                "start": 962,
                                "end": 978
                              },
                              "typeArguments": null,
                              "start": 962,
                              "end": 978
                            },
                            "start": 960,
                            "end": 978
                          },
                          "start": 951,
                          "end": 978
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
                            "start": 981,
                            "end": 988
                          },
                          "typeArguments": null,
                          "start": 981,
                          "end": 988
                        },
                        "start": 979,
                        "end": 988
                      },
                      "body": null,
                      "expression": false,
                      "start": 902,
                      "end": 989
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 891,
                    "end": 989
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
                      "start": 1005,
                      "end": 1009
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
                                "start": 1020,
                                "end": 1033
                              },
                              "typeArguments": null,
                              "start": 1020,
                              "end": 1033
                            },
                            "start": 1018,
                            "end": 1033
                          },
                          "start": 1010,
                          "end": 1033
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
                                "start": 1043,
                                "end": 1056
                              },
                              "typeArguments": null,
                              "start": 1043,
                              "end": 1056
                            },
                            "start": 1041,
                            "end": 1056
                          },
                          "start": 1035,
                          "end": 1056
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
                                "start": 1069,
                                "end": 1085
                              },
                              "typeArguments": null,
                              "start": 1069,
                              "end": 1085
                            },
                            "start": 1067,
                            "end": 1085
                          },
                          "start": 1058,
                          "end": 1085
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1088,
                          "end": 1092
                        },
                        "start": 1086,
                        "end": 1092
                      },
                      "body": null,
                      "expression": false,
                      "start": 1009,
                      "end": 1093
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 998,
                    "end": 1093
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
                      "start": 1109,
                      "end": 1115
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
                          "start": 1119,
                          "end": 1123
                        },
                        "start": 1117,
                        "end": 1123
                      },
                      "body": null,
                      "expression": false,
                      "start": 1115,
                      "end": 1124
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1102,
                    "end": 1124
                  }
                ],
                "start": 339,
                "end": 1130
              },
              "abstract": false,
              "declare": true,
              "start": 317,
              "end": 1130
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 310,
            "end": 1130
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
                "start": 1157,
                "end": 1165
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
                      "start": 1166,
                      "end": 1167
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1166,
                    "end": 1167
                  }
                ],
                "start": 1165,
                "end": 1168
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
                      "start": 1180,
                      "end": 1191
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
                                                "start": 1217,
                                                "end": 1218
                                              },
                                              "typeArguments": null,
                                              "start": 1217,
                                              "end": 1218
                                            },
                                            "start": 1215,
                                            "end": 1218
                                          },
                                          "start": 1210,
                                          "end": 1218
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1223,
                                          "end": 1227
                                        },
                                        "start": 1220,
                                        "end": 1227
                                      },
                                      "start": 1209,
                                      "end": 1227
                                    },
                                    "start": 1207,
                                    "end": 1227
                                  },
                                  "start": 1199,
                                  "end": 1227
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
                                              "start": 1242,
                                              "end": 1245
                                            },
                                            "start": 1240,
                                            "end": 1245
                                          },
                                          "start": 1237,
                                          "end": 1245
                                        }
                                      ],
                                      "returnType": {
                                        "type": "TSTypeAnnotation",
                                        "typeAnnotation": {
                                          "type": "TSVoidKeyword",
                                          "start": 1250,
                                          "end": 1254
                                        },
                                        "start": 1247,
                                        "end": 1254
                                      },
                                      "start": 1236,
                                      "end": 1254
                                    },
                                    "start": 1234,
                                    "end": 1254
                                  },
                                  "start": 1229,
                                  "end": 1254
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
                                        "start": 1266,
                                        "end": 1282
                                      },
                                      "typeArguments": null,
                                      "start": 1266,
                                      "end": 1282
                                    },
                                    "start": 1264,
                                    "end": 1282
                                  },
                                  "start": 1256,
                                  "end": 1282
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1287,
                                  "end": 1291
                                },
                                "start": 1284,
                                "end": 1291
                              },
                              "start": 1198,
                              "end": 1291
                            },
                            "start": 1196,
                            "end": 1291
                          },
                          "start": 1192,
                          "end": 1291
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
                              "start": 1304,
                              "end": 1307
                            },
                            "start": 1302,
                            "end": 1307
                          },
                          "start": 1293,
                          "end": 1307
                        }
                      ],
                      "returnType": null,
                      "body": null,
                      "expression": false,
                      "start": 1191,
                      "end": 1309
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 1180,
                    "end": 1309
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
                      "start": 1326,
                      "end": 1330
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
                              "start": 1331,
                              "end": 1332
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1331,
                            "end": 1332
                          }
                        ],
                        "start": 1330,
                        "end": 1333
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
                                        "start": 1352,
                                        "end": 1353
                                      },
                                      "typeArguments": null,
                                      "start": 1352,
                                      "end": 1353
                                    },
                                    "start": 1350,
                                    "end": 1353
                                  },
                                  "start": 1345,
                                  "end": 1353
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
                                    "start": 1358,
                                    "end": 1366
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
                                          "start": 1367,
                                          "end": 1368
                                        },
                                        "typeArguments": null,
                                        "start": 1367,
                                        "end": 1368
                                      }
                                    ],
                                    "start": 1366,
                                    "end": 1369
                                  },
                                  "start": 1358,
                                  "end": 1369
                                },
                                "start": 1355,
                                "end": 1369
                              },
                              "start": 1344,
                              "end": 1369
                            },
                            "start": 1342,
                            "end": 1369
                          },
                          "start": 1334,
                          "end": 1369
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
                                      "start": 1385,
                                      "end": 1388
                                    },
                                    "start": 1383,
                                    "end": 1388
                                  },
                                  "start": 1380,
                                  "end": 1388
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
                                    "start": 1393,
                                    "end": 1401
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
                                          "start": 1402,
                                          "end": 1403
                                        },
                                        "typeArguments": null,
                                        "start": 1402,
                                        "end": 1403
                                      }
                                    ],
                                    "start": 1401,
                                    "end": 1404
                                  },
                                  "start": 1393,
                                  "end": 1404
                                },
                                "start": 1390,
                                "end": 1404
                              },
                              "start": 1379,
                              "end": 1404
                            },
                            "start": 1377,
                            "end": 1404
                          },
                          "start": 1371,
                          "end": 1404
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
                                "start": 1417,
                                "end": 1433
                              },
                              "typeArguments": null,
                              "start": 1417,
                              "end": 1433
                            },
                            "start": 1415,
                            "end": 1433
                          },
                          "start": 1406,
                          "end": 1433
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
                            "start": 1436,
                            "end": 1444
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
                                  "start": 1445,
                                  "end": 1446
                                },
                                "typeArguments": null,
                                "start": 1445,
                                "end": 1446
                              }
                            ],
                            "start": 1444,
                            "end": 1447
                          },
                          "start": 1436,
                          "end": 1447
                        },
                        "start": 1434,
                        "end": 1447
                      },
                      "body": null,
                      "expression": false,
                      "start": 1330,
                      "end": 1448
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1319,
                    "end": 1448
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
                      "start": 1464,
                      "end": 1468
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
                              "start": 1469,
                              "end": 1470
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1469,
                            "end": 1470
                          }
                        ],
                        "start": 1468,
                        "end": 1471
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
                                        "start": 1490,
                                        "end": 1491
                                      },
                                      "typeArguments": null,
                                      "start": 1490,
                                      "end": 1491
                                    },
                                    "start": 1488,
                                    "end": 1491
                                  },
                                  "start": 1483,
                                  "end": 1491
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
                                    "start": 1496,
                                    "end": 1504
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
                                          "start": 1505,
                                          "end": 1506
                                        },
                                        "typeArguments": null,
                                        "start": 1505,
                                        "end": 1506
                                      }
                                    ],
                                    "start": 1504,
                                    "end": 1507
                                  },
                                  "start": 1496,
                                  "end": 1507
                                },
                                "start": 1493,
                                "end": 1507
                              },
                              "start": 1482,
                              "end": 1507
                            },
                            "start": 1480,
                            "end": 1507
                          },
                          "start": 1472,
                          "end": 1507
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
                                      "start": 1523,
                                      "end": 1526
                                    },
                                    "start": 1521,
                                    "end": 1526
                                  },
                                  "start": 1518,
                                  "end": 1526
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
                                    "start": 1531,
                                    "end": 1532
                                  },
                                  "typeArguments": null,
                                  "start": 1531,
                                  "end": 1532
                                },
                                "start": 1528,
                                "end": 1532
                              },
                              "start": 1517,
                              "end": 1532
                            },
                            "start": 1515,
                            "end": 1532
                          },
                          "start": 1509,
                          "end": 1532
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
                                "start": 1545,
                                "end": 1561
                              },
                              "typeArguments": null,
                              "start": 1545,
                              "end": 1561
                            },
                            "start": 1543,
                            "end": 1561
                          },
                          "start": 1534,
                          "end": 1561
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
                            "start": 1564,
                            "end": 1572
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
                                  "start": 1573,
                                  "end": 1574
                                },
                                "typeArguments": null,
                                "start": 1573,
                                "end": 1574
                              }
                            ],
                            "start": 1572,
                            "end": 1575
                          },
                          "start": 1564,
                          "end": 1575
                        },
                        "start": 1562,
                        "end": 1575
                      },
                      "body": null,
                      "expression": false,
                      "start": 1468,
                      "end": 1576
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1457,
                    "end": 1576
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
                      "start": 1592,
                      "end": 1596
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
                              "start": 1597,
                              "end": 1598
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1597,
                            "end": 1598
                          }
                        ],
                        "start": 1596,
                        "end": 1599
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
                                        "start": 1618,
                                        "end": 1619
                                      },
                                      "typeArguments": null,
                                      "start": 1618,
                                      "end": 1619
                                    },
                                    "start": 1616,
                                    "end": 1619
                                  },
                                  "start": 1611,
                                  "end": 1619
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
                                    "start": 1624,
                                    "end": 1625
                                  },
                                  "typeArguments": null,
                                  "start": 1624,
                                  "end": 1625
                                },
                                "start": 1621,
                                "end": 1625
                              },
                              "start": 1610,
                              "end": 1625
                            },
                            "start": 1608,
                            "end": 1625
                          },
                          "start": 1600,
                          "end": 1625
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
                                      "start": 1641,
                                      "end": 1644
                                    },
                                    "start": 1639,
                                    "end": 1644
                                  },
                                  "start": 1636,
                                  "end": 1644
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
                                    "start": 1649,
                                    "end": 1657
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
                                          "start": 1658,
                                          "end": 1659
                                        },
                                        "typeArguments": null,
                                        "start": 1658,
                                        "end": 1659
                                      }
                                    ],
                                    "start": 1657,
                                    "end": 1660
                                  },
                                  "start": 1649,
                                  "end": 1660
                                },
                                "start": 1646,
                                "end": 1660
                              },
                              "start": 1635,
                              "end": 1660
                            },
                            "start": 1633,
                            "end": 1660
                          },
                          "start": 1627,
                          "end": 1660
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
                                "start": 1673,
                                "end": 1689
                              },
                              "typeArguments": null,
                              "start": 1673,
                              "end": 1689
                            },
                            "start": 1671,
                            "end": 1689
                          },
                          "start": 1662,
                          "end": 1689
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
                            "start": 1692,
                            "end": 1700
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
                                  "start": 1701,
                                  "end": 1702
                                },
                                "typeArguments": null,
                                "start": 1701,
                                "end": 1702
                              }
                            ],
                            "start": 1700,
                            "end": 1703
                          },
                          "start": 1692,
                          "end": 1703
                        },
                        "start": 1690,
                        "end": 1703
                      },
                      "body": null,
                      "expression": false,
                      "start": 1596,
                      "end": 1704
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1585,
                    "end": 1704
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
                      "start": 1720,
                      "end": 1724
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
                              "start": 1725,
                              "end": 1726
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1725,
                            "end": 1726
                          }
                        ],
                        "start": 1724,
                        "end": 1727
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
                                        "start": 1746,
                                        "end": 1747
                                      },
                                      "typeArguments": null,
                                      "start": 1746,
                                      "end": 1747
                                    },
                                    "start": 1744,
                                    "end": 1747
                                  },
                                  "start": 1739,
                                  "end": 1747
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
                                    "start": 1752,
                                    "end": 1753
                                  },
                                  "typeArguments": null,
                                  "start": 1752,
                                  "end": 1753
                                },
                                "start": 1749,
                                "end": 1753
                              },
                              "start": 1738,
                              "end": 1753
                            },
                            "start": 1736,
                            "end": 1753
                          },
                          "start": 1728,
                          "end": 1753
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
                                      "start": 1769,
                                      "end": 1772
                                    },
                                    "start": 1767,
                                    "end": 1772
                                  },
                                  "start": 1764,
                                  "end": 1772
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
                                    "start": 1777,
                                    "end": 1778
                                  },
                                  "typeArguments": null,
                                  "start": 1777,
                                  "end": 1778
                                },
                                "start": 1774,
                                "end": 1778
                              },
                              "start": 1763,
                              "end": 1778
                            },
                            "start": 1761,
                            "end": 1778
                          },
                          "start": 1755,
                          "end": 1778
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
                                "start": 1791,
                                "end": 1807
                              },
                              "typeArguments": null,
                              "start": 1791,
                              "end": 1807
                            },
                            "start": 1789,
                            "end": 1807
                          },
                          "start": 1780,
                          "end": 1807
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
                            "start": 1810,
                            "end": 1818
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
                                  "start": 1819,
                                  "end": 1820
                                },
                                "typeArguments": null,
                                "start": 1819,
                                "end": 1820
                              }
                            ],
                            "start": 1818,
                            "end": 1821
                          },
                          "start": 1810,
                          "end": 1821
                        },
                        "start": 1808,
                        "end": 1821
                      },
                      "body": null,
                      "expression": false,
                      "start": 1724,
                      "end": 1822
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1713,
                    "end": 1822
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
                      "start": 1839,
                      "end": 1843
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
                                        "start": 1862,
                                        "end": 1863
                                      },
                                      "typeArguments": null,
                                      "start": 1862,
                                      "end": 1863
                                    },
                                    "start": 1860,
                                    "end": 1863
                                  },
                                  "start": 1855,
                                  "end": 1863
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 1868,
                                  "end": 1872
                                },
                                "start": 1865,
                                "end": 1872
                              },
                              "start": 1854,
                              "end": 1872
                            },
                            "start": 1852,
                            "end": 1872
                          },
                          "start": 1844,
                          "end": 1872
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
                                      "start": 1888,
                                      "end": 1891
                                    },
                                    "start": 1886,
                                    "end": 1891
                                  },
                                  "start": 1883,
                                  "end": 1891
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSAnyKeyword",
                                  "start": 1896,
                                  "end": 1899
                                },
                                "start": 1893,
                                "end": 1899
                              },
                              "start": 1882,
                              "end": 1899
                            },
                            "start": 1880,
                            "end": 1899
                          },
                          "start": 1874,
                          "end": 1899
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
                                "start": 1912,
                                "end": 1928
                              },
                              "typeArguments": null,
                              "start": 1912,
                              "end": 1928
                            },
                            "start": 1910,
                            "end": 1928
                          },
                          "start": 1901,
                          "end": 1928
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 1931,
                          "end": 1935
                        },
                        "start": 1929,
                        "end": 1935
                      },
                      "body": null,
                      "expression": false,
                      "start": 1843,
                      "end": 1936
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1832,
                    "end": 1936
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
                      "start": 1952,
                      "end": 1958
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
                          "start": 1962,
                          "end": 1966
                        },
                        "start": 1960,
                        "end": 1966
                      },
                      "body": null,
                      "expression": false,
                      "start": 1958,
                      "end": 1967
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1945,
                    "end": 1967
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
                      "start": 1991,
                      "end": 1993
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
                              "start": 1994,
                              "end": 2003
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 1994,
                            "end": 2003
                          }
                        ],
                        "start": 1993,
                        "end": 2004
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
                                "start": 2012,
                                "end": 2021
                              },
                              "typeArguments": null,
                              "start": 2012,
                              "end": 2021
                            },
                            "start": 2010,
                            "end": 2021
                          },
                          "start": 2005,
                          "end": 2021
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
                            "start": 2024,
                            "end": 2032
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
                                  "start": 2033,
                                  "end": 2042
                                },
                                "typeArguments": null,
                                "start": 2033,
                                "end": 2042
                              }
                            ],
                            "start": 2032,
                            "end": 2043
                          },
                          "start": 2024,
                          "end": 2043
                        },
                        "start": 2022,
                        "end": 2043
                      },
                      "body": null,
                      "expression": false,
                      "start": 1993,
                      "end": 2044
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 1977,
                    "end": 2044
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
                      "start": 2067,
                      "end": 2074
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
                              "start": 2082,
                              "end": 2088
                            },
                            "start": 2080,
                            "end": 2088
                          },
                          "start": 2075,
                          "end": 2088
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
                            "start": 2091,
                            "end": 2099
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSVoidKeyword",
                                "start": 2100,
                                "end": 2104
                              }
                            ],
                            "start": 2099,
                            "end": 2105
                          },
                          "start": 2091,
                          "end": 2105
                        },
                        "start": 2089,
                        "end": 2105
                      },
                      "body": null,
                      "expression": false,
                      "start": 2074,
                      "end": 2106
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2053,
                    "end": 2106
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
                      "start": 2129,
                      "end": 2133
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
                              "start": 2134,
                              "end": 2143
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2134,
                            "end": 2143
                          }
                        ],
                        "start": 2133,
                        "end": 2144
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
                                  "start": 2155,
                                  "end": 2163
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
                                        "start": 2164,
                                        "end": 2173
                                      },
                                      "typeArguments": null,
                                      "start": 2164,
                                      "end": 2173
                                    }
                                  ],
                                  "start": 2163,
                                  "end": 2174
                                },
                                "start": 2155,
                                "end": 2174
                              },
                              "start": 2155,
                              "end": 2176
                            },
                            "start": 2153,
                            "end": 2176
                          },
                          "start": 2145,
                          "end": 2176
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
                            "start": 2179,
                            "end": 2187
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
                                    "start": 2188,
                                    "end": 2197
                                  },
                                  "typeArguments": null,
                                  "start": 2188,
                                  "end": 2197
                                },
                                "start": 2188,
                                "end": 2199
                              }
                            ],
                            "start": 2187,
                            "end": 2200
                          },
                          "start": 2179,
                          "end": 2200
                        },
                        "start": 2177,
                        "end": 2200
                      },
                      "body": null,
                      "expression": false,
                      "start": 2133,
                      "end": 2201
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2115,
                    "end": 2201
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
                      "start": 2224,
                      "end": 2227
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
                              "start": 2228,
                              "end": 2237
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2228,
                            "end": 2237
                          }
                        ],
                        "start": 2227,
                        "end": 2238
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
                                  "start": 2249,
                                  "end": 2257
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
                                        "start": 2258,
                                        "end": 2267
                                      },
                                      "typeArguments": null,
                                      "start": 2258,
                                      "end": 2267
                                    }
                                  ],
                                  "start": 2257,
                                  "end": 2268
                                },
                                "start": 2249,
                                "end": 2268
                              },
                              "start": 2249,
                              "end": 2270
                            },
                            "start": 2247,
                            "end": 2270
                          },
                          "start": 2239,
                          "end": 2270
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
                            "start": 2273,
                            "end": 2281
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
                                  "start": 2282,
                                  "end": 2291
                                },
                                "typeArguments": null,
                                "start": 2282,
                                "end": 2291
                              }
                            ],
                            "start": 2281,
                            "end": 2292
                          },
                          "start": 2273,
                          "end": 2292
                        },
                        "start": 2271,
                        "end": 2292
                      },
                      "body": null,
                      "expression": false,
                      "start": 2227,
                      "end": 2293
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2210,
                    "end": 2293
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
                      "start": 2316,
                      "end": 2325
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
                              "start": 2326,
                              "end": 2335
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false,
                            "start": 2326,
                            "end": 2335
                          }
                        ],
                        "start": 2325,
                        "end": 2336
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
                              "start": 2344,
                              "end": 2347
                            },
                            "start": 2342,
                            "end": 2347
                          },
                          "start": 2337,
                          "end": 2347
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
                            "start": 2350,
                            "end": 2358
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
                                  "start": 2359,
                                  "end": 2368
                                },
                                "typeArguments": null,
                                "start": 2359,
                                "end": 2368
                              }
                            ],
                            "start": 2358,
                            "end": 2369
                          },
                          "start": 2350,
                          "end": 2369
                        },
                        "start": 2348,
                        "end": 2369
                      },
                      "body": null,
                      "expression": false,
                      "start": 2325,
                      "end": 2370
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 2302,
                    "end": 2370
                  }
                ],
                "start": 1169,
                "end": 2376
              },
              "abstract": false,
              "declare": true,
              "start": 1143,
              "end": 2376
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1136,
            "end": 2376
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
                "start": 2399,
                "end": 2410
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
                      "start": 2421,
                      "end": 2425
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2428,
                        "end": 2434
                      },
                      "start": 2426,
                      "end": 2434
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2421,
                    "end": 2435
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
                      "start": 2444,
                      "end": 2447
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2450,
                        "end": 2456
                      },
                      "start": 2448,
                      "end": 2456
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2444,
                    "end": 2457
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
                      "start": 2466,
                      "end": 2470
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2473,
                        "end": 2479
                      },
                      "start": 2471,
                      "end": 2479
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2466,
                    "end": 2480
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
                      "start": 2489,
                      "end": 2497
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2500,
                        "end": 2506
                      },
                      "start": 2498,
                      "end": 2506
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2489,
                    "end": 2507
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
                      "start": 2516,
                      "end": 2528
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2531,
                        "end": 2537
                      },
                      "start": 2529,
                      "end": 2537
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2516,
                    "end": 2538
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
                      "start": 2547,
                      "end": 2554
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2557,
                        "end": 2560
                      },
                      "start": 2555,
                      "end": 2560
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2547,
                    "end": 2561
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
                      "start": 2570,
                      "end": 2594
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
                                "start": 2603,
                                "end": 2606
                              },
                              "start": 2601,
                              "end": 2606
                            },
                            "start": 2598,
                            "end": 2606
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 2611,
                            "end": 2615
                          },
                          "start": 2608,
                          "end": 2615
                        },
                        "start": 2597,
                        "end": 2615
                      },
                      "start": 2595,
                      "end": 2615
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2570,
                    "end": 2616
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
                      "start": 2625,
                      "end": 2629
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 2632,
                        "end": 2635
                      },
                      "start": 2630,
                      "end": 2635
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 2625,
                    "end": 2636
                  }
                ],
                "start": 2411,
                "end": 2642
              },
              "declare": false,
              "start": 2389,
              "end": 2642
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2382,
            "end": 2642
          }
        ],
        "start": 13,
        "end": 2644
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 2644
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Services",
        "optional": false,
        "typeAnnotation": null,
        "start": 2653,
        "end": 2661
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
                "start": 2685,
                "end": 2700
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
                      "start": 3022,
                      "end": 3035
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
                            "start": 3045,
                            "end": 3051
                          },
                          "start": 3043,
                          "end": 3051
                        },
                        "start": 3036,
                        "end": 3051
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
                            "start": 3060,
                            "end": 3066
                          },
                          "start": 3058,
                          "end": 3066
                        },
                        "start": 3053,
                        "end": 3066
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3069,
                        "end": 3075
                      },
                      "start": 3067,
                      "end": 3075
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3022,
                    "end": 3076
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "getRequestUrl",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3085,
                      "end": 3098
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
                            "start": 3108,
                            "end": 3114
                          },
                          "start": 3106,
                          "end": 3114
                        },
                        "start": 3099,
                        "end": 3114
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
                            "start": 3123,
                            "end": 3129
                          },
                          "start": 3121,
                          "end": 3129
                        },
                        "start": 3116,
                        "end": 3129
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
                            "start": 3142,
                            "end": 3149
                          },
                          "start": 3140,
                          "end": 3149
                        },
                        "start": 3131,
                        "end": 3149
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3152,
                        "end": 3158
                      },
                      "start": 3150,
                      "end": 3158
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3085,
                    "end": 3159
                  },
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "makeRequest",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3329,
                      "end": 3340
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
                                "start": 3350,
                                "end": 3355
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IXHROptions",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3356,
                                "end": 3367
                              },
                              "start": 3350,
                              "end": 3367
                            },
                            "typeArguments": null,
                            "start": 3350,
                            "end": 3367
                          },
                          "start": 3348,
                          "end": 3367
                        },
                        "start": 3341,
                        "end": 3367
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
                            "start": 3370,
                            "end": 3375
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Promise",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3376,
                            "end": 3383
                          },
                          "start": 3370,
                          "end": 3383
                        },
                        "typeArguments": null,
                        "start": 3370,
                        "end": 3383
                      },
                      "start": 3368,
                      "end": 3383
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 3329,
                    "end": 3384
                  }
                ],
                "start": 2701,
                "end": 3390
              },
              "declare": false,
              "start": 2675,
              "end": 3390
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 2668,
            "end": 3390
          }
        ],
        "start": 2662,
        "end": 3392
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 2646,
      "end": 3392
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Errors",
        "optional": false,
        "typeAnnotation": null,
        "start": 3401,
        "end": 3407
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
                "start": 3427,
                "end": 3442
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
                      "start": 3473,
                      "end": 3484
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
                                "start": 3494,
                                "end": 3508
                              },
                              "typeArguments": null,
                              "start": 3494,
                              "end": 3508
                            },
                            "start": 3492,
                            "end": 3508
                          },
                          "start": 3485,
                          "end": 3508
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 3510,
                        "end": 3521
                      },
                      "expression": false,
                      "start": 3484,
                      "end": 3521
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 3473,
                    "end": 3521
                  }
                ],
                "start": 3463,
                "end": 3527
              },
              "abstract": false,
              "declare": false,
              "start": 3421,
              "end": 3527
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 3414,
            "end": 3527
          }
        ],
        "start": 3408,
        "end": 3529
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3394,
      "end": 3529
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Files",
        "optional": false,
        "typeAnnotation": null,
        "start": 3538,
        "end": 3543
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
                "start": 3567,
                "end": 3580
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
                      "start": 3591,
                      "end": 3595
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3597,
                        "end": 3603
                      },
                      "start": 3595,
                      "end": 3603
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3591,
                    "end": 3604
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
                      "start": 3613,
                      "end": 3618
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 3620,
                        "end": 3627
                      },
                      "start": 3618,
                      "end": 3627
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 3613,
                    "end": 3628
                  }
                ],
                "start": 3581,
                "end": 3634
              },
              "declare": false,
              "start": 3557,
              "end": 3634
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 3550,
            "end": 3634
          }
        ],
        "start": 3544,
        "end": 3636
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 3531,
      "end": 3636
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "XMLHttpRequest",
        "optional": false,
        "typeAnnotation": null,
        "start": 3648,
        "end": 3662
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
              "start": 3669,
              "end": 3675
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 3677,
                "end": 3683
              },
              "start": 3675,
              "end": 3683
            },
            "accessibility": null,
            "static": false,
            "start": 3669,
            "end": 3684
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
              "start": 3689,
              "end": 3701
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3703,
                "end": 3709
              },
              "start": 3701,
              "end": 3709
            },
            "accessibility": null,
            "static": false,
            "start": 3689,
            "end": 3710
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
              "start": 3715,
              "end": 3725
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3727,
                "end": 3733
              },
              "start": 3725,
              "end": 3733
            },
            "accessibility": null,
            "static": false,
            "start": 3715,
            "end": 3734
          }
        ],
        "start": 3663,
        "end": 3737
      },
      "declare": false,
      "start": 3638,
      "end": 3737
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
        "start": 3745,
        "end": 3756
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
              "start": 3771,
              "end": 3785
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
                    "start": 3787,
                    "end": 3795
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IRequestService",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3796,
                    "end": 3811
                  },
                  "start": 3787,
                  "end": 3811
                },
                "typeArguments": null,
                "start": 3787,
                "end": 3811
              },
              "start": 3785,
              "end": 3811
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
            "start": 3763,
            "end": 3812
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
              "start": 3824,
              "end": 3834
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
                      "start": 3838,
                      "end": 3843
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPromise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3844,
                      "end": 3852
                    },
                    "start": 3838,
                    "end": 3852
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
                            "start": 3853,
                            "end": 3858
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "IUploadResult",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3859,
                            "end": 3872
                          },
                          "start": 3853,
                          "end": 3872
                        },
                        "typeArguments": null,
                        "start": 3853,
                        "end": 3872
                      }
                    ],
                    "start": 3852,
                    "end": 3873
                  },
                  "start": 3838,
                  "end": 3873
                },
                "start": 3836,
                "end": 3873
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
                          "start": 3888,
                          "end": 3892
                        },
                        "init": {
                          "type": "Literal",
                          "value": "",
                          "raw": "\"\"",
                          "start": 3895,
                          "end": 3897
                        },
                        "definite": false,
                        "start": 3888,
                        "end": 3897
                      }
                    ],
                    "declare": false,
                    "start": 3884,
                    "end": 3898
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
                                "start": 3914,
                                "end": 3918
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "requestService",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3919,
                                "end": 3933
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3914,
                              "end": 3933
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "makeRequest",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3934,
                              "end": 3945
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3914,
                            "end": 3945
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
                                    "start": 3960,
                                    "end": 3963
                                  },
                                  "value": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 3965,
                                          "end": 3969
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "requestService",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 3970,
                                          "end": 3984
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 3965,
                                        "end": 3984
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "getRequestUrl",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 3985,
                                        "end": 3998
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 3965,
                                      "end": 3998
                                    },
                                    "typeArguments": null,
                                    "arguments": [
                                      {
                                        "type": "Literal",
                                        "value": "root",
                                        "raw": "'root'",
                                        "start": 3999,
                                        "end": 4005
                                      },
                                      {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "path",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4007,
                                        "end": 4011
                                      }
                                    ],
                                    "optional": false,
                                    "start": 3965,
                                    "end": 4012
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 3960,
                                  "end": 4012
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
                                    "start": 4026,
                                    "end": 4030
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "POST",
                                    "raw": "'POST'",
                                    "start": 4032,
                                    "end": 4038
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4026,
                                  "end": 4038
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
                                    "start": 4052,
                                    "end": 4059
                                  },
                                  "value": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 4061,
                                    "end": 4063
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4052,
                                  "end": 4063
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
                                    "start": 4077,
                                    "end": 4081
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "someData",
                                    "raw": "\"someData\"",
                                    "start": 4083,
                                    "end": 4093
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 4077,
                                  "end": 4093
                                }
                              ],
                              "start": 3946,
                              "end": 4103
                            }
                          ],
                          "optional": false,
                          "start": 3914,
                          "end": 4104
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "then",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4105,
                          "end": 4109
                        },
                        "optional": false,
                        "computed": false,
                        "start": 3914,
                        "end": 4109
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
                                    "start": 4121,
                                    "end": 4135
                                  },
                                  "typeArguments": null,
                                  "start": 4121,
                                  "end": 4135
                                },
                                "start": 4119,
                                "end": 4135
                              },
                              "start": 4111,
                              "end": 4135
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
                                            "start": 4170,
                                            "end": 4183
                                          },
                                          "typeArguments": null,
                                          "start": 4170,
                                          "end": 4183
                                        },
                                        "start": 4168,
                                        "end": 4183
                                      },
                                      "start": 4162,
                                      "end": 4183
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
                                            "start": 4232,
                                            "end": 4236
                                          },
                                          "value": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "object": {
                                                "type": "ThisExpression",
                                                "start": 4238,
                                                "end": 4242
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "jsonToStat",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4243,
                                                "end": 4253
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4238,
                                              "end": 4253
                                            },
                                            "typeArguments": null,
                                            "arguments": [
                                              {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "newFilePath",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4254,
                                                "end": 4265
                                              },
                                              {
                                                "type": "Literal",
                                                "value": "someString",
                                                "raw": "\"someString\"",
                                                "start": 4267,
                                                "end": 4279
                                              }
                                            ],
                                            "optional": false,
                                            "start": 4238,
                                            "end": 4280
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 4232,
                                          "end": 4280
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
                                            "start": 4346,
                                            "end": 4351
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
                                                "start": 4353,
                                                "end": 4361
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "status",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 4362,
                                                "end": 4368
                                              },
                                              "optional": false,
                                              "computed": false,
                                              "start": 4353,
                                              "end": 4368
                                            },
                                            "operator": "===",
                                            "right": {
                                              "type": "Literal",
                                              "value": 201,
                                              "raw": "201",
                                              "start": 4373,
                                              "end": 4376
                                            },
                                            "start": 4353,
                                            "end": 4376
                                          },
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "optional": false,
                                          "start": 4346,
                                          "end": 4376
                                        }
                                      ],
                                      "start": 4186,
                                      "end": 4394
                                    },
                                    "definite": false,
                                    "start": 4162,
                                    "end": 4394
                                  }
                                ],
                                "declare": false,
                                "start": 4158,
                                "end": 4395
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
                                        "start": 4420,
                                        "end": 4425
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "TPromise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4426,
                                        "end": 4434
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4420,
                                      "end": 4434
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "as",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4435,
                                      "end": 4437
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4420,
                                    "end": 4437
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
                                            "start": 4438,
                                            "end": 4443
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "IUploadResult",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 4444,
                                            "end": 4457
                                          },
                                          "start": 4438,
                                          "end": 4457
                                        },
                                        "typeArguments": null,
                                        "start": 4438,
                                        "end": 4457
                                      }
                                    ],
                                    "start": 4437,
                                    "end": 4458
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4459,
                                      "end": 4465
                                    }
                                  ],
                                  "optional": false,
                                  "start": 4420,
                                  "end": 4466
                                },
                                "start": 4413,
                                "end": 4467
                              }
                            ],
                            "start": 4140,
                            "end": 4481
                          },
                          "id": null,
                          "generator": false,
                          "start": 4110,
                          "end": 4481
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
                                    "start": 4489,
                                    "end": 4503
                                  },
                                  "typeArguments": null,
                                  "start": 4489,
                                  "end": 4503
                                },
                                "start": 4487,
                                "end": 4503
                              },
                              "start": 4484,
                              "end": 4503
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
                                        "start": 4533,
                                        "end": 4538
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Promise",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 4539,
                                        "end": 4546
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 4533,
                                      "end": 4546
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "wrapError",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4547,
                                      "end": 4556
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4533,
                                    "end": 4556
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
                                          "start": 4561,
                                          "end": 4567
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "ConnectionError",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4568,
                                          "end": 4583
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 4561,
                                        "end": 4583
                                      },
                                      "typeArguments": null,
                                      "arguments": [
                                        {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "xhr",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 4584,
                                          "end": 4587
                                        }
                                      ],
                                      "start": 4557,
                                      "end": 4588
                                    }
                                  ],
                                  "optional": false,
                                  "start": 4533,
                                  "end": 4589
                                },
                                "start": 4526,
                                "end": 4590
                              }
                            ],
                            "start": 4508,
                            "end": 4604
                          },
                          "id": null,
                          "generator": false,
                          "start": 4483,
                          "end": 4604
                        }
                      ],
                      "optional": false,
                      "start": 3914,
                      "end": 4605
                    },
                    "start": 3907,
                    "end": 4606
                  }
                ],
                "start": 3874,
                "end": 4612
              },
              "expression": false,
              "start": 3834,
              "end": 4612
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 3817,
            "end": 4612
          }
        ],
        "start": 3757,
        "end": 4614
      },
      "abstract": false,
      "declare": false,
      "start": 3739,
      "end": 4614
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4614
}
```
