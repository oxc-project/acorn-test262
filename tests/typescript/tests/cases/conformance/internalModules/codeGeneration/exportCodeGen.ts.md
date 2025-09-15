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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 82
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 100,
                    "end": 101
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 104,
                    "end": 106
                  },
                  "definite": false,
                  "start": 100,
                  "end": 106
                }
              ],
              "declare": false,
              "start": 96,
              "end": 107
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 89,
            "end": 107
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lt12",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
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
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 149,
                      "end": 151
                    },
                    "start": 145,
                    "end": 151
                  },
                  "start": 138,
                  "end": 152
                }
              ],
              "start": 128,
              "end": 158
            },
            "expression": false,
            "start": 112,
            "end": 158
          }
        ],
        "start": 83,
        "end": 160
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 71,
      "end": 160
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 205,
        "end": 206
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
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 218
                },
                "init": {
                  "type": "Literal",
                  "value": 12,
                  "raw": "12",
                  "start": 221,
                  "end": 223
                },
                "definite": false,
                "start": 217,
                "end": 223
              }
            ],
            "declare": false,
            "start": 213,
            "end": 224
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "lt12",
              "optional": false,
              "typeAnnotation": null,
              "start": 238,
              "end": 242
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
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 262,
                      "end": 263
                    },
                    "operator": "<",
                    "right": {
                      "type": "Literal",
                      "value": 12,
                      "raw": "12",
                      "start": 266,
                      "end": 268
                    },
                    "start": 262,
                    "end": 268
                  },
                  "start": 255,
                  "end": 269
                }
              ],
              "start": 245,
              "end": 275
            },
            "expression": false,
            "start": 229,
            "end": 275
          }
        ],
        "start": 207,
        "end": 277
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 195,
      "end": 277
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 323,
        "end": 324
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "no",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 342
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
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 362,
                    "end": 367
                  },
                  "start": 355,
                  "end": 368
                }
              ],
              "start": 345,
              "end": 374
            },
            "expression": false,
            "start": 331,
            "end": 374
          }
        ],
        "start": 325,
        "end": 376
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 313,
      "end": 376
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 414,
        "end": 415
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
                "name": "yes",
                "optional": false,
                "typeAnnotation": null,
                "start": 438,
                "end": 441
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
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 461,
                      "end": 465
                    },
                    "start": 454,
                    "end": 466
                  }
                ],
                "start": 444,
                "end": 472
              },
              "expression": false,
              "start": 429,
              "end": 472
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 422,
            "end": 472
          }
        ],
        "start": 416,
        "end": 474
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 404,
      "end": 474
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 524,
        "end": 525
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 544,
                "end": 549
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 552,
                      "end": 555
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 552,
                    "end": 555
                  }
                ],
                "start": 550,
                "end": 557
              },
              "const": false,
              "declare": false,
              "start": 539,
              "end": 557
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 532,
            "end": 557
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 578,
                "end": 580
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 583,
                "end": 586
              },
              "expression": false,
              "start": 569,
              "end": 586
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 562,
            "end": 586
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 608,
                "end": 609
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
                      "name": "id",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 612,
                      "end": 614
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 616,
                        "end": 622
                      },
                      "start": 614,
                      "end": 622
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 612,
                    "end": 622
                  }
                ],
                "start": 610,
                "end": 624
              },
              "declare": false,
              "start": 598,
              "end": 624
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 591,
            "end": 624
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null,
                "start": 642,
                "end": 643
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 646,
                      "end": 650
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 652,
                        "end": 658
                      },
                      "start": 650,
                      "end": 658
                    },
                    "value": null,
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null,
                    "start": 646,
                    "end": 658
                  }
                ],
                "start": 644,
                "end": 660
              },
              "abstract": false,
              "declare": false,
              "start": 636,
              "end": 660
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 629,
            "end": 660
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 682,
                "end": 683
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 705,
                            "end": 706
                          },
                          "init": {
                            "type": "Literal",
                            "value": 42,
                            "raw": "42",
                            "start": 709,
                            "end": 711
                          },
                          "definite": false,
                          "start": 705,
                          "end": 711
                        }
                      ],
                      "declare": false,
                      "start": 701,
                      "end": 712
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 694,
                    "end": 712
                  }
                ],
                "start": 684,
                "end": 718
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 672,
              "end": 718
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 665,
            "end": 718
          }
        ],
        "start": 526,
        "end": 720
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 514,
      "end": 720
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "F",
        "optional": false,
        "typeAnnotation": null,
        "start": 797,
        "end": 798
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 815
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Red",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 818,
                    "end": 821
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 818,
                  "end": 821
                }
              ],
              "start": 816,
              "end": 823
            },
            "const": false,
            "declare": false,
            "start": 805,
            "end": 823
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null,
              "start": 837,
              "end": 839
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 842,
              "end": 845
            },
            "expression": false,
            "start": 828,
            "end": 845
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "I",
              "optional": false,
              "typeAnnotation": null,
              "start": 860,
              "end": 861
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
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 864,
                    "end": 866
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 868,
                      "end": 874
                    },
                    "start": 866,
                    "end": 874
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 864,
                  "end": 874
                }
              ],
              "start": 862,
              "end": 876
            },
            "declare": false,
            "start": 850,
            "end": 876
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 887,
              "end": 888
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
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 891,
                    "end": 895
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 897,
                      "end": 903
                    },
                    "start": 895,
                    "end": 903
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null,
                  "start": 891,
                  "end": 903
                }
              ],
              "start": 889,
              "end": 905
            },
            "abstract": false,
            "declare": false,
            "start": 881,
            "end": 905
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 920,
              "end": 921
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 937
                      },
                      "init": {
                        "type": "Literal",
                        "value": 42,
                        "raw": "42",
                        "start": 940,
                        "end": 942
                      },
                      "definite": false,
                      "start": 936,
                      "end": 942
                    }
                  ],
                  "declare": false,
                  "start": 932,
                  "end": 943
                }
              ],
              "start": 922,
              "end": 949
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 910,
            "end": 949
          }
        ],
        "start": 799,
        "end": 951
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 787,
      "end": 951
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 71,
  "end": 951
}
```
