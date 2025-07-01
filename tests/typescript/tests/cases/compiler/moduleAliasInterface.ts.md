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
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 13
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
                "name": "IMode",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 39
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 40,
                "end": 47
              },
              "declare": false,
              "start": 24,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 17,
            "end": 47
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
                "start": 64,
                "end": 68
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 69,
                "end": 76
              },
              "abstract": false,
              "declare": false,
              "start": 58,
              "end": 76
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 51,
            "end": 76
          }
        ],
        "start": 14,
        "end": 78
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 78
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 165,
        "end": 171
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 182,
              "end": 187
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 196
            },
            "importKind": "value",
            "start": 175,
            "end": 197
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
                  "name": "i",
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
                          "name": "modes",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 209,
                          "end": 214
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 215,
                          "end": 220
                        },
                        "start": 209,
                        "end": 220
                      },
                      "typeArguments": null,
                      "start": 209,
                      "end": 220
                    },
                    "start": 207,
                    "end": 220
                  },
                  "start": 205,
                  "end": 220
                },
                "init": null,
                "definite": false,
                "start": 205,
                "end": 220
              }
            ],
            "declare": false,
            "start": 201,
            "end": 221
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "typeAnnotation": null,
              "start": 307,
              "end": 310
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
                    "start": 316,
                    "end": 327
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
                        "name": "p1",
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
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 332,
                                "end": 337
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 343
                              },
                              "start": 332,
                              "end": 343
                            },
                            "typeArguments": null,
                            "start": 332,
                            "end": 343
                          },
                          "start": 330,
                          "end": 343
                        },
                        "start": 328,
                        "end": 343
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
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
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 349,
                                "end": 354
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 355,
                                "end": 359
                              },
                              "start": 349,
                              "end": 359
                            },
                            "typeArguments": null,
                            "start": 349,
                            "end": 359
                          },
                          "start": 347,
                          "end": 359
                        },
                        "start": 345,
                        "end": 359
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 361,
                      "end": 364
                    },
                    "expression": false,
                    "start": 327,
                    "end": 364
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 316,
                  "end": 364
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 424
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
                        "name": "p1",
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
                                "name": "modes",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 428,
                                "end": 433
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 434,
                                "end": 439
                              },
                              "start": 428,
                              "end": 439
                            },
                            "typeArguments": null,
                            "start": 428,
                            "end": 439
                          },
                          "start": 427,
                          "end": 439
                        },
                        "start": 425,
                        "end": 439
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 441,
                      "end": 450
                    },
                    "expression": false,
                    "start": 424,
                    "end": 450
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 414,
                  "end": 450
                }
              ],
              "start": 311,
              "end": 454
            },
            "abstract": false,
            "declare": false,
            "start": 301,
            "end": 454
          }
        ],
        "start": 172,
        "end": 456
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 158,
      "end": 456
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modesOuter",
        "optional": false,
        "typeAnnotation": null,
        "start": 465,
        "end": 475
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 478,
        "end": 484
      },
      "importKind": "value",
      "start": 458,
      "end": 485
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 493,
        "end": 500
      },
      "body": {
        "type": "TSModuleBlock",
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
                  "name": "i",
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
                          "name": "modesOuter",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 514,
                          "end": 524
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 525,
                          "end": 530
                        },
                        "start": 514,
                        "end": 530
                      },
                      "typeArguments": null,
                      "start": 514,
                      "end": 530
                    },
                    "start": 512,
                    "end": 530
                  },
                  "start": 510,
                  "end": 530
                },
                "init": null,
                "definite": false,
                "start": 510,
                "end": 530
              }
            ],
            "declare": false,
            "start": 506,
            "end": 531
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug",
              "optional": false,
              "typeAnnotation": null,
              "start": 541,
              "end": 544
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
                    "start": 552,
                    "end": 563
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
                        "name": "p1",
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
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 568,
                                "end": 578
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 579,
                                "end": 584
                              },
                              "start": 568,
                              "end": 584
                            },
                            "typeArguments": null,
                            "start": 568,
                            "end": 584
                          },
                          "start": 566,
                          "end": 584
                        },
                        "start": 564,
                        "end": 584
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
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
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 590,
                                "end": 600
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 601,
                                "end": 605
                              },
                              "start": 590,
                              "end": 605
                            },
                            "typeArguments": null,
                            "start": 590,
                            "end": 605
                          },
                          "start": 588,
                          "end": 605
                        },
                        "start": 586,
                        "end": 605
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 607,
                      "end": 610
                    },
                    "expression": false,
                    "start": 563,
                    "end": 610
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 552,
                  "end": 610
                }
              ],
              "start": 545,
              "end": 673
            },
            "abstract": false,
            "declare": false,
            "start": 535,
            "end": 673
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 688
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
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 707
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 707,
                      "end": 709
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 698,
                    "end": 709
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 691,
                  "end": 709
                }
              ],
              "start": 689,
              "end": 711
            },
            "kind": "module",
            "declare": false,
            "global": false,
            "start": 678,
            "end": 711
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bug2",
              "optional": false,
              "typeAnnotation": null,
              "start": 722,
              "end": 726
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
                    "start": 735,
                    "end": 746
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
                        "name": "p1",
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
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 751,
                                "end": 754
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 755,
                                "end": 758
                              },
                              "start": 751,
                              "end": 758
                            },
                            "typeArguments": null,
                            "start": 751,
                            "end": 758
                          },
                          "start": 749,
                          "end": 758
                        },
                        "start": 747,
                        "end": 758
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "p2",
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
                                "name": "modesOuter",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 764,
                                "end": 774
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 775,
                                "end": 779
                              },
                              "start": 764,
                              "end": 779
                            },
                            "typeArguments": null,
                            "start": 764,
                            "end": 779
                          },
                          "start": 762,
                          "end": 779
                        },
                        "start": 760,
                        "end": 779
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 781,
                      "end": 784
                    },
                    "expression": false,
                    "start": 746,
                    "end": 784
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 735,
                  "end": 784
                }
              ],
              "start": 727,
              "end": 788
            },
            "abstract": false,
            "declare": false,
            "start": 716,
            "end": 788
          }
        ],
        "start": 501,
        "end": 790
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 486,
      "end": 790
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 799,
        "end": 801
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
                "name": "A1I1",
                "optional": false,
                "typeAnnotation": null,
                "start": 825,
                "end": 829
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 830,
                "end": 832
              },
              "declare": false,
              "start": 815,
              "end": 832
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 808,
            "end": 832
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "A1C1",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 854
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 855,
                "end": 857
              },
              "abstract": false,
              "declare": false,
              "start": 844,
              "end": 857
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 837,
            "end": 857
          }
        ],
        "start": 802,
        "end": 859
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 792,
      "end": 859
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 868,
        "end": 870
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1Alias1",
              "optional": false,
              "typeAnnotation": null,
              "start": 884,
              "end": 892
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 897
            },
            "importKind": "value",
            "start": 877,
            "end": 898
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
                  "name": "i",
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
                          "name": "A1Alias1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 916,
                          "end": 924
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 925,
                          "end": 929
                        },
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
                  "start": 912,
                  "end": 929
                },
                "init": null,
                "definite": false,
                "start": 912,
                "end": 929
              }
            ],
            "declare": false,
            "start": 908,
            "end": 930
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
                  "name": "c",
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
                          "name": "A1Alias1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 946,
                          "end": 954
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1C1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 955,
                          "end": 959
                        },
                        "start": 946,
                        "end": 959
                      },
                      "typeArguments": null,
                      "start": 946,
                      "end": 959
                    },
                    "start": 944,
                    "end": 959
                  },
                  "start": 942,
                  "end": 959
                },
                "init": null,
                "definite": false,
                "start": 942,
                "end": 959
              }
            ],
            "declare": false,
            "start": 938,
            "end": 960
          }
        ],
        "start": 871,
        "end": 962
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 861,
      "end": 962
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 962
}
```
