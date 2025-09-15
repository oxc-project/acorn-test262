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
        "start": 10,
        "end": 16
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
                "start": 37,
                "end": 42
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 43,
                "end": 50
              },
              "declare": false,
              "start": 27,
              "end": 50
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 50
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
                "start": 67,
                "end": 71
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 72,
                "end": 79
              },
              "abstract": false,
              "declare": false,
              "start": 61,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 54,
            "end": 79
          }
        ],
        "start": 17,
        "end": 81
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 81
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor",
        "optional": false,
        "typeAnnotation": null,
        "start": 171,
        "end": 177
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
              "start": 188,
              "end": 193
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "_modes",
              "optional": false,
              "typeAnnotation": null,
              "start": 196,
              "end": 202
            },
            "importKind": "value",
            "start": 181,
            "end": 203
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
                          "start": 215,
                          "end": 220
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 221,
                          "end": 226
                        },
                        "start": 215,
                        "end": 226
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 226
                    },
                    "start": 213,
                    "end": 226
                  },
                  "start": 211,
                  "end": 226
                },
                "init": null,
                "definite": false,
                "start": 211,
                "end": 226
              }
            ],
            "declare": false,
            "start": 207,
            "end": 227
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
              "start": 313,
              "end": 316
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
                    "start": 322,
                    "end": 333
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
                                "start": 338,
                                "end": 343
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 344,
                                "end": 349
                              },
                              "start": 338,
                              "end": 349
                            },
                            "typeArguments": null,
                            "start": 338,
                            "end": 349
                          },
                          "start": 336,
                          "end": 349
                        },
                        "start": 334,
                        "end": 349
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
                                "start": 355,
                                "end": 360
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 361,
                                "end": 365
                              },
                              "start": 355,
                              "end": 365
                            },
                            "typeArguments": null,
                            "start": 355,
                            "end": 365
                          },
                          "start": 353,
                          "end": 365
                        },
                        "start": 351,
                        "end": 365
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 367,
                      "end": 370
                    },
                    "expression": false,
                    "start": 333,
                    "end": 370
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 322,
                  "end": 370
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
                    "start": 427,
                    "end": 430
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
                                "start": 434,
                                "end": 439
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 440,
                                "end": 445
                              },
                              "start": 434,
                              "end": 445
                            },
                            "typeArguments": null,
                            "start": 434,
                            "end": 445
                          },
                          "start": 433,
                          "end": 445
                        },
                        "start": 431,
                        "end": 445
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 447,
                      "end": 456
                    },
                    "expression": false,
                    "start": 430,
                    "end": 456
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 420,
                  "end": 456
                }
              ],
              "start": 317,
              "end": 460
            },
            "abstract": false,
            "declare": false,
            "start": 307,
            "end": 460
          }
        ],
        "start": 178,
        "end": 462
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 161,
      "end": 462
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "modesOuter",
        "optional": false,
        "typeAnnotation": null,
        "start": 471,
        "end": 481
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "_modes",
        "optional": false,
        "typeAnnotation": null,
        "start": 484,
        "end": 490
      },
      "importKind": "value",
      "start": 464,
      "end": 491
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "editor2",
        "optional": false,
        "typeAnnotation": null,
        "start": 502,
        "end": 509
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
                          "start": 523,
                          "end": 533
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "IMode",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 539
                        },
                        "start": 523,
                        "end": 539
                      },
                      "typeArguments": null,
                      "start": 523,
                      "end": 539
                    },
                    "start": 521,
                    "end": 539
                  },
                  "start": 519,
                  "end": 539
                },
                "init": null,
                "definite": false,
                "start": 519,
                "end": 539
              }
            ],
            "declare": false,
            "start": 515,
            "end": 540
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
              "start": 550,
              "end": 553
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
                    "start": 561,
                    "end": 572
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
                                "start": 577,
                                "end": 587
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "IMode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 588,
                                "end": 593
                              },
                              "start": 577,
                              "end": 593
                            },
                            "typeArguments": null,
                            "start": 577,
                            "end": 593
                          },
                          "start": 575,
                          "end": 593
                        },
                        "start": 573,
                        "end": 593
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
                                "start": 599,
                                "end": 609
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 610,
                                "end": 614
                              },
                              "start": 599,
                              "end": 614
                            },
                            "typeArguments": null,
                            "start": 599,
                            "end": 614
                          },
                          "start": 597,
                          "end": 614
                        },
                        "start": 595,
                        "end": 614
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 616,
                      "end": 619
                    },
                    "expression": false,
                    "start": 572,
                    "end": 619
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 561,
                  "end": 619
                }
              ],
              "start": 554,
              "end": 682
            },
            "abstract": false,
            "declare": false,
            "start": 544,
            "end": 682
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 700
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
                      "start": 716,
                      "end": 719
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 719,
                      "end": 721
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 710,
                    "end": 721
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 703,
                  "end": 721
                }
              ],
              "start": 701,
              "end": 723
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 687,
            "end": 723
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
              "start": 734,
              "end": 738
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
                    "start": 747,
                    "end": 758
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
                                "start": 763,
                                "end": 766
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 767,
                                "end": 770
                              },
                              "start": 763,
                              "end": 770
                            },
                            "typeArguments": null,
                            "start": 763,
                            "end": 770
                          },
                          "start": 761,
                          "end": 770
                        },
                        "start": 759,
                        "end": 770
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
                                "start": 776,
                                "end": 786
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Mode",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 787,
                                "end": 791
                              },
                              "start": 776,
                              "end": 791
                            },
                            "typeArguments": null,
                            "start": 776,
                            "end": 791
                          },
                          "start": 774,
                          "end": 791
                        },
                        "start": 772,
                        "end": 791
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 793,
                      "end": 796
                    },
                    "expression": false,
                    "start": 758,
                    "end": 796
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 747,
                  "end": 796
                }
              ],
              "start": 739,
              "end": 800
            },
            "abstract": false,
            "declare": false,
            "start": 728,
            "end": 800
          }
        ],
        "start": 510,
        "end": 802
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 492,
      "end": 802
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null,
        "start": 814,
        "end": 816
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
                "start": 840,
                "end": 844
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 845,
                "end": 847
              },
              "declare": false,
              "start": 830,
              "end": 847
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 823,
            "end": 847
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
                "start": 865,
                "end": 869
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 870,
                "end": 872
              },
              "abstract": false,
              "declare": false,
              "start": 859,
              "end": 872
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 852,
            "end": 872
          }
        ],
        "start": 817,
        "end": 874
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 804,
      "end": 874
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null,
        "start": 886,
        "end": 888
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
              "start": 902,
              "end": 910
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null,
              "start": 913,
              "end": 915
            },
            "importKind": "value",
            "start": 895,
            "end": 916
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
                          "start": 934,
                          "end": 942
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1I1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 943,
                          "end": 947
                        },
                        "start": 934,
                        "end": 947
                      },
                      "typeArguments": null,
                      "start": 934,
                      "end": 947
                    },
                    "start": 932,
                    "end": 947
                  },
                  "start": 930,
                  "end": 947
                },
                "init": null,
                "definite": false,
                "start": 930,
                "end": 947
              }
            ],
            "declare": false,
            "start": 926,
            "end": 948
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
                          "start": 964,
                          "end": 972
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A1C1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 973,
                          "end": 977
                        },
                        "start": 964,
                        "end": 977
                      },
                      "typeArguments": null,
                      "start": 964,
                      "end": 977
                    },
                    "start": 962,
                    "end": 977
                  },
                  "start": 960,
                  "end": 977
                },
                "init": null,
                "definite": false,
                "start": 960,
                "end": 977
              }
            ],
            "declare": false,
            "start": 956,
            "end": 978
          }
        ],
        "start": 889,
        "end": 980
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 876,
      "end": 980
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 980
}
```
