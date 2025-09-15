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
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 38
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 69
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 74,
                                "end": 76
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 76
                            },
                            "start": 72,
                            "end": 76
                          },
                          "start": 70,
                          "end": 76
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 78,
                        "end": 89
                      },
                      "expression": false,
                      "start": 58,
                      "end": 89
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 51,
                    "end": 89
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "FunctionDeclaration",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "f2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 116
                      },
                      "generator": false,
                      "async": false,
                      "declare": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 121,
                                "end": 123
                              },
                              "typeArguments": null,
                              "start": 121,
                              "end": 123
                            },
                            "start": 119,
                            "end": 123
                          },
                          "start": 117,
                          "end": 123
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 125,
                        "end": 136
                      },
                      "expression": false,
                      "start": 105,
                      "end": 136
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 98,
                    "end": 136
                  },
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "C2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 159,
                        "end": 161
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 175
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i3",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 176,
                              "end": 178
                            },
                            "optional": false,
                            "computed": false,
                            "start": 173,
                            "end": 178
                          },
                          "typeArguments": null,
                          "start": 173,
                          "end": 178
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
                              "name": "p1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 204,
                              "end": 206
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
                                  "name": "arg",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 207,
                                  "end": 210
                                }
                              ],
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
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 241,
                                        "end": 243
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 237,
                                      "end": 245
                                    },
                                    "start": 230,
                                    "end": 246
                                  }
                                ],
                                "start": 212,
                                "end": 260
                              },
                              "expression": false,
                              "start": 206,
                              "end": 260
                            },
                            "kind": "get",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 193,
                            "end": 260
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "p1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 285,
                              "end": 287
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
                                  "name": "arg1",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "typeName": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "C1",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 294,
                                        "end": 296
                                      },
                                      "typeArguments": null,
                                      "start": 294,
                                      "end": 296
                                    },
                                    "start": 292,
                                    "end": 296
                                  },
                                  "start": 288,
                                  "end": 296
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 298,
                                "end": 313
                              },
                              "expression": false,
                              "start": 287,
                              "end": 313
                            },
                            "kind": "set",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 274,
                            "end": 313
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f55",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 334,
                              "end": 337
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
                                      "value": "Hello world",
                                      "raw": "\"Hello world\"",
                                      "start": 365,
                                      "end": 378
                                    },
                                    "start": 358,
                                    "end": 379
                                  }
                                ],
                                "start": 340,
                                "end": 393
                              },
                              "expression": false,
                              "start": 337,
                              "end": 393
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": "public",
                            "start": 327,
                            "end": 393
                          }
                        ],
                        "start": 179,
                        "end": 403
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 153,
                      "end": 403
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 146,
                    "end": 403
                  }
                ],
                "start": 39,
                "end": 409
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 409
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 409
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f2",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 433
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": true,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 442,
                            "end": 443
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 446,
                                "end": 448
                              },
                              "typeArguments": null,
                              "start": 446,
                              "end": 448
                            },
                            "start": 444,
                            "end": 448
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 442,
                          "end": 449
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 450,
                            "end": 451
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 453,
                              "end": 459
                            },
                            "start": 451,
                            "end": 459
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 450,
                          "end": 459
                        }
                      ],
                      "start": 440,
                      "end": 461
                    },
                    "start": 438,
                    "end": 461
                  },
                  "start": 434,
                  "end": 461
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 463,
                "end": 470
              },
              "expression": false,
              "start": 422,
              "end": 470
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 415,
            "end": 470
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f3",
                "optional": false,
                "typeAnnotation": null,
                "start": 492,
                "end": 494
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "members": [
                    {
                      "type": "TSCallSignatureDeclaration",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 512,
                              "end": 518
                            },
                            "start": 510,
                            "end": 518
                          },
                          "start": 509,
                          "end": 518
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 524
                          },
                          "typeArguments": null,
                          "start": 522,
                          "end": 524
                        },
                        "start": 520,
                        "end": 524
                      },
                      "start": 508,
                      "end": 525
                    }
                  ],
                  "start": 498,
                  "end": 531
                },
                "start": 496,
                "end": 531
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
                      "start": 549,
                      "end": 553
                    },
                    "start": 542,
                    "end": 554
                  }
                ],
                "start": 532,
                "end": 560
              },
              "expression": false,
              "start": 483,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 476,
            "end": 560
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f4",
                "optional": false,
                "typeAnnotation": null,
                "start": 582,
                "end": 584
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": true,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "number",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 603,
                            "end": 609
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 614
                              },
                              "typeArguments": null,
                              "start": 612,
                              "end": 614
                            },
                            "start": 610,
                            "end": 614
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 602,
                          "end": 615
                        }
                      ],
                      "start": 596,
                      "end": 674
                    },
                    "start": 589,
                    "end": 674
                  },
                  "start": 585,
                  "end": 674
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 676,
                "end": 683
              },
              "expression": false,
              "start": 573,
              "end": 683
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 566,
            "end": 683
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "f5",
                "optional": false,
                "typeAnnotation": null,
                "start": 706,
                "end": 708
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "arg1",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "C1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 736,
                                    "end": 738
                                  },
                                  "typeArguments": null,
                                  "start": 736,
                                  "end": 738
                                },
                                "start": 734,
                                "end": 738
                              },
                              "start": 730,
                              "end": 738
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "C1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 742,
                                "end": 744
                              },
                              "typeArguments": null,
                              "start": 742,
                              "end": 744
                            },
                            "start": 740,
                            "end": 744
                          },
                          "start": 725,
                          "end": 744
                        }
                      ],
                      "start": 715,
                      "end": 750
                    },
                    "start": 713,
                    "end": 750
                  },
                  "start": 709,
                  "end": 750
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 752,
                "end": 759
              },
              "expression": false,
              "start": 697,
              "end": 759
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 690,
            "end": 759
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 774,
              "end": 776
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "f2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 796,
                    "end": 798
                  },
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 803,
                            "end": 805
                          },
                          "typeArguments": null,
                          "start": 803,
                          "end": 805
                        },
                        "start": 801,
                        "end": 805
                      },
                      "start": 799,
                      "end": 805
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 807,
                    "end": 818
                  },
                  "expression": false,
                  "start": 787,
                  "end": 818
                },
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "TSInterfaceDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 845,
                      "end": 847
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
                            "name": "f55",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 865
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
                              "start": 869,
                              "end": 875
                            },
                            "start": 867,
                            "end": 875
                          },
                          "accessibility": null,
                          "readonly": false,
                          "static": false,
                          "start": 862,
                          "end": 876
                        }
                      ],
                      "start": 848,
                      "end": 886
                    },
                    "declare": false,
                    "start": 835,
                    "end": 886
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 828,
                  "end": 886
                }
              ],
              "start": 777,
              "end": 892
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 764,
            "end": 892
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C1",
              "optional": false,
              "typeAnnotation": null,
              "start": 904,
              "end": 906
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 907,
              "end": 914
            },
            "abstract": false,
            "declare": false,
            "start": 898,
            "end": 914
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null,
              "start": 930,
              "end": 931
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 942,
                    "end": 943
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 945,
                      "end": 951
                    },
                    "start": 943,
                    "end": 951
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 942,
                  "end": 952
                }
              ],
              "start": 932,
              "end": 958
            },
            "declare": false,
            "start": 920,
            "end": 958
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C5",
                "optional": false,
                "typeAnnotation": null,
                "start": 977,
                "end": 979
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
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 992
                  },
                  "typeArguments": null,
                  "start": 991,
                  "end": 992
                }
              ],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1010,
                      "end": 1011
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1013,
                        "end": 1019
                      },
                      "start": 1011,
                      "end": 1019
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 1003,
                    "end": 1020
                  }
                ],
                "start": 993,
                "end": 1026
              },
              "abstract": false,
              "declare": false,
              "start": 971,
              "end": 1026
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 964,
            "end": 1026
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "v2",
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
                            "name": "C1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1047,
                            "end": 1049
                          },
                          "typeArguments": null,
                          "start": 1047,
                          "end": 1049
                        },
                        "start": 1047,
                        "end": 1051
                      },
                      "start": 1045,
                      "end": 1051
                    },
                    "start": 1043,
                    "end": 1051
                  },
                  "init": null,
                  "definite": false,
                  "start": 1043,
                  "end": 1051
                }
              ],
              "declare": false,
              "start": 1039,
              "end": 1052
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1032,
            "end": 1052
          }
        ],
        "start": 13,
        "end": 1054
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 1054
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1062,
        "end": 1064
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 1065,
        "end": 1068
      },
      "abstract": false,
      "declare": false,
      "start": 1056,
      "end": 1068
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1080,
        "end": 1082
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1106,
                "end": 1108
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
                        "name": "c_pr",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1133,
                        "end": 1137
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
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mglo5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1150,
                              "end": 1155
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1156,
                              "end": 1158
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1150,
                            "end": 1158
                          },
                          "typeArguments": null,
                          "start": 1150,
                          "end": 1158
                        },
                        {
                          "type": "TSClassImplements",
                          "expression": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "mglo5",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1160,
                              "end": 1165
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "i6",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1166,
                              "end": 1168
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1160,
                            "end": 1168
                          },
                          "typeArguments": null,
                          "start": 1160,
                          "end": 1168
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
                              "name": "f1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1183,
                              "end": 1185
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
                                      "value": "Hello",
                                      "raw": "\"Hello\"",
                                      "start": 1213,
                                      "end": 1220
                                    },
                                    "start": 1206,
                                    "end": 1221
                                  }
                                ],
                                "start": 1188,
                                "end": 1235
                              },
                              "expression": false,
                              "start": 1185,
                              "end": 1235
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 1183,
                            "end": 1235
                          }
                        ],
                        "start": 1169,
                        "end": 1245
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 1127,
                      "end": 1245
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 1120,
                    "end": 1245
                  },
                  {
                    "type": "TSModuleDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "m4",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1273,
                      "end": 1275
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
                            "name": "C",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1296,
                            "end": 1297
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 1298,
                            "end": 1313
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 1290,
                          "end": 1313
                        },
                        {
                          "type": "TSModuleDeclaration",
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "m5",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1336,
                            "end": 1338
                          },
                          "body": {
                            "type": "TSModuleBlock",
                            "body": [
                              {
                                "type": "ExportNamedDeclaration",
                                "declaration": {
                                  "type": "TSModuleDeclaration",
                                  "id": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m6",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1391,
                                    "end": 1393
                                  },
                                  "body": {
                                    "type": "TSModuleBlock",
                                    "body": [
                                      {
                                        "type": "FunctionDeclaration",
                                        "id": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "f1",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 1425,
                                          "end": 1427
                                        },
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
                                                  "name": "C",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1467,
                                                  "end": 1468
                                                },
                                                "typeArguments": null,
                                                "arguments": [],
                                                "start": 1463,
                                                "end": 1470
                                              },
                                              "start": 1456,
                                              "end": 1471
                                            }
                                          ],
                                          "start": 1430,
                                          "end": 1493
                                        },
                                        "expression": false,
                                        "start": 1416,
                                        "end": 1493
                                      }
                                    ],
                                    "start": 1394,
                                    "end": 1511
                                  },
                                  "kind": "namespace",
                                  "declare": false,
                                  "global": false,
                                  "start": 1381,
                                  "end": 1511
                                },
                                "specifiers": [],
                                "source": null,
                                "exportKind": "value",
                                "attributes": [],
                                "start": 1374,
                                "end": 1511
                              }
                            ],
                            "start": 1339,
                            "end": 1525
                          },
                          "kind": "namespace",
                          "declare": false,
                          "global": false,
                          "start": 1326,
                          "end": 1525
                        }
                      ],
                      "start": 1276,
                      "end": 1535
                    },
                    "kind": "namespace",
                    "declare": false,
                    "global": false,
                    "start": 1263,
                    "end": 1535
                  }
                ],
                "start": 1109,
                "end": 1542
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 1096,
              "end": 1542
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1089,
            "end": 1542
          }
        ],
        "start": 1083,
        "end": 1544
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1070,
      "end": 1544
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mglo5",
        "optional": false,
        "typeAnnotation": null,
        "start": 1556,
        "end": 1561
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
                "name": "i5",
                "optional": false,
                "typeAnnotation": null,
                "start": 1585,
                "end": 1587
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
                      "name": "f1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1598,
                      "end": 1600
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
                        "start": 1604,
                        "end": 1610
                      },
                      "start": 1602,
                      "end": 1610
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 1598,
                    "end": 1611
                  }
                ],
                "start": 1588,
                "end": 1617
              },
              "declare": false,
              "start": 1575,
              "end": 1617
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 1568,
            "end": 1617
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "i6",
              "optional": false,
              "typeAnnotation": null,
              "start": 1633,
              "end": 1635
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
                    "name": "f6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1646,
                    "end": 1648
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 1652,
                      "end": 1658
                    },
                    "start": 1650,
                    "end": 1658
                  },
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 1646,
                  "end": 1659
                }
              ],
              "start": 1636,
              "end": 1665
            },
            "declare": false,
            "start": 1623,
            "end": 1665
          }
        ],
        "start": 1562,
        "end": 1667
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1546,
      "end": 1667
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1667
}
```
