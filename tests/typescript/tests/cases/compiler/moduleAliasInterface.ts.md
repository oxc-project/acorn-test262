__ESTREE_TEST__:AST:
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
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9,
    "range": [
      0,
      9
    ]
  },
  {
    "type": "Identifier",
    "value": "_modes",
    "start": 10,
    "end": 16,
    "range": [
      10,
      16
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 17,
    "end": 18,
    "range": [
      17,
      18
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26,
    "range": [
      20,
      26
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36,
    "range": [
      27,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 37,
    "end": 42,
    "range": [
      37,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44,
    "range": [
      43,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60,
    "range": [
      54,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 61,
    "end": 66,
    "range": [
      61,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 67,
    "end": 71,
    "range": [
      67,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 161,
    "end": 170,
    "range": [
      161,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "editor",
    "start": 171,
    "end": 177,
    "range": [
      171,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 181,
    "end": 187,
    "range": [
      181,
      187
    ]
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195,
    "range": [
      194,
      195
    ]
  },
  {
    "type": "Identifier",
    "value": "_modes",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 207,
    "end": 210,
    "range": [
      207,
      210
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 215,
    "end": 220,
    "range": [
      215,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 221,
    "end": 226,
    "range": [
      221,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 307,
    "end": 312,
    "range": [
      307,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 313,
    "end": 316,
    "range": [
      313,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 322,
    "end": 333,
    "range": [
      322,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 334,
    "end": 336,
    "range": [
      334,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 338,
    "end": 343,
    "range": [
      338,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 343,
    "end": 344,
    "range": [
      343,
      344
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 344,
    "end": 349,
    "range": [
      344,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 351,
    "end": 353,
    "range": [
      351,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 355,
    "end": 360,
    "range": [
      355,
      360
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 360,
    "end": 361,
    "range": [
      360,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 361,
    "end": 365,
    "range": [
      361,
      365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 420,
    "end": 426,
    "range": [
      420,
      426
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 427,
    "end": 430,
    "range": [
      427,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 431,
    "end": 433,
    "range": [
      431,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434,
    "range": [
      433,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "modes",
    "start": 434,
    "end": 439,
    "range": [
      434,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 439,
    "end": 440,
    "range": [
      439,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448,
    "range": [
      447,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 471,
    "end": 481,
    "range": [
      471,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "_modes",
    "start": 484,
    "end": 490,
    "range": [
      484,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 492,
    "end": 501,
    "range": [
      492,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "editor2",
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
    "type": "Keyword",
    "value": "var",
    "start": 515,
    "end": 518,
    "range": [
      515,
      518
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 523,
    "end": 533,
    "range": [
      523,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 534,
    "end": 539,
    "range": [
      534,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540,
    "range": [
      539,
      540
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 544,
    "end": 549,
    "range": [
      544,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "Bug",
    "start": 550,
    "end": 553,
    "range": [
      550,
      553
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 561,
    "end": 572,
    "range": [
      561,
      572
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 572,
    "end": 573,
    "range": [
      572,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 573,
    "end": 575,
    "range": [
      573,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 577,
    "end": 587,
    "range": [
      577,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "IMode",
    "start": 588,
    "end": 593,
    "range": [
      588,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 595,
    "end": 597,
    "range": [
      595,
      597
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 597,
    "end": 598,
    "range": [
      597,
      598
    ]
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 599,
    "end": 609,
    "range": [
      599,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 610,
    "end": 614,
    "range": [
      610,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 614,
    "end": 615,
    "range": [
      614,
      615
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 687,
    "end": 696,
    "range": [
      687,
      696
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 697,
    "end": 700,
    "range": [
      697,
      700
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 701,
    "end": 702,
    "range": [
      701,
      702
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 703,
    "end": 709,
    "range": [
      703,
      709
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 710,
    "end": 715,
    "range": [
      710,
      715
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 716,
    "end": 719,
    "range": [
      716,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 722,
    "end": 723,
    "range": [
      722,
      723
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 728,
    "end": 733,
    "range": [
      728,
      733
    ]
  },
  {
    "type": "Identifier",
    "value": "Bug2",
    "start": 734,
    "end": 738,
    "range": [
      734,
      738
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 739,
    "end": 740,
    "range": [
      739,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 747,
    "end": 758,
    "range": [
      747,
      758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 758,
    "end": 759,
    "range": [
      758,
      759
    ]
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 759,
    "end": 761,
    "range": [
      759,
      761
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 761,
    "end": 762,
    "range": [
      761,
      762
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 763,
    "end": 766,
    "range": [
      763,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 767,
    "end": 770,
    "range": [
      767,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 772,
    "end": 774,
    "range": [
      772,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 774,
    "end": 775,
    "range": [
      774,
      775
    ]
  },
  {
    "type": "Identifier",
    "value": "modesOuter",
    "start": 776,
    "end": 786,
    "range": [
      776,
      786
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Identifier",
    "value": "Mode",
    "start": 787,
    "end": 791,
    "range": [
      787,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800,
    "range": [
      799,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 804,
    "end": 813,
    "range": [
      804,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 817,
    "end": 818,
    "range": [
      817,
      818
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 823,
    "end": 829,
    "range": [
      823,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 830,
    "end": 839,
    "range": [
      830,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "A1I1",
    "start": 840,
    "end": 844,
    "range": [
      840,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 852,
    "end": 858,
    "range": [
      852,
      858
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 859,
    "end": 864,
    "range": [
      859,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "A1C1",
    "start": 865,
    "end": 869,
    "range": [
      865,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 871,
    "end": 872,
    "range": [
      871,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 873,
    "end": 874,
    "range": [
      873,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 876,
    "end": 885,
    "range": [
      876,
      885
    ]
  },
  {
    "type": "Identifier",
    "value": "B1",
    "start": 886,
    "end": 888,
    "range": [
      886,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 895,
    "end": 901,
    "range": [
      895,
      901
    ]
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 902,
    "end": 910,
    "range": [
      902,
      910
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912,
    "range": [
      911,
      912
    ]
  },
  {
    "type": "Identifier",
    "value": "A1",
    "start": 913,
    "end": 915,
    "range": [
      913,
      915
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 915,
    "end": 916,
    "range": [
      915,
      916
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 926,
    "end": 929,
    "range": [
      926,
      929
    ]
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 930,
    "end": 931,
    "range": [
      930,
      931
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 934,
    "end": 942,
    "range": [
      934,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "A1I1",
    "start": 943,
    "end": 947,
    "range": [
      943,
      947
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948,
    "range": [
      947,
      948
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 956,
    "end": 959,
    "range": [
      956,
      959
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 962,
    "end": 963,
    "range": [
      962,
      963
    ]
  },
  {
    "type": "Identifier",
    "value": "A1Alias1",
    "start": 964,
    "end": 972,
    "range": [
      964,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 972,
    "end": 973,
    "range": [
      972,
      973
    ]
  },
  {
    "type": "Identifier",
    "value": "A1C1",
    "start": 973,
    "end": 977,
    "range": [
      973,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 979,
    "end": 980,
    "range": [
      979,
      980
    ]
  }
]
```
