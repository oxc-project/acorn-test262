__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "require",
          "optional": false,
          "typeAnnotation": null,
          "start": 25,
          "end": 32
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
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 56,
                  "end": 57
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 58,
                  "end": 65
                },
                "declare": false,
                "start": 46,
                "end": 65
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 39,
              "end": 65
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
                  "start": 83,
                  "end": 84
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 85,
                  "end": 92
                },
                "abstract": false,
                "declare": false,
                "start": 77,
                "end": 92
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 70,
              "end": 92
            }
          ],
          "start": 33,
          "end": 94
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 7,
        "end": 94
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 94
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 114
        },
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
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 118,
                "end": 125
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 126,
                "end": 127
              },
              "start": 118,
              "end": 127
            },
            "typeArguments": null,
            "start": 118,
            "end": 127
          },
          "start": 116,
          "end": 127
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
                "start": 141,
                "end": 145
              },
              "start": 134,
              "end": 146
            }
          ],
          "start": 128,
          "end": 148
        },
        "expression": false,
        "start": 102,
        "end": 148
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 95,
      "end": 148
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "exports",
          "optional": false,
          "typeAnnotation": null,
          "start": 174,
          "end": 181
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
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 205,
                  "end": 206
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 207,
                  "end": 214
                },
                "declare": false,
                "start": 195,
                "end": 214
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 188,
              "end": 214
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
                  "start": 232,
                  "end": 233
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 234,
                  "end": 241
                },
                "abstract": false,
                "declare": false,
                "start": 226,
                "end": 241
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 219,
              "end": 241
            }
          ],
          "start": 182,
          "end": 243
        },
        "kind": "namespace",
        "declare": true,
        "global": false,
        "start": 156,
        "end": 243
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 149,
      "end": 243
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 260,
          "end": 264
        },
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
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 268,
                "end": 275
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 277
              },
              "start": 268,
              "end": 277
            },
            "typeArguments": null,
            "start": 268,
            "end": 277
          },
          "start": 266,
          "end": 277
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
                "start": 291,
                "end": 295
              },
              "start": 284,
              "end": 296
            }
          ],
          "start": 278,
          "end": 298
        },
        "expression": false,
        "start": 251,
        "end": 298
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 244,
      "end": 298
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 319
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 343
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 372
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 373,
                      "end": 384
                    },
                    "declare": false,
                    "start": 361,
                    "end": 384
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 354,
                  "end": 384
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
                      "start": 406,
                      "end": 407
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 408,
                      "end": 419
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 400,
                    "end": 419
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 393,
                  "end": 419
                }
              ],
              "start": 344,
              "end": 425
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 326,
            "end": 425
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 440,
              "end": 447
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 475,
                      "end": 476
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 477,
                      "end": 488
                    },
                    "declare": false,
                    "start": 465,
                    "end": 488
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 458,
                  "end": 488
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
                      "start": 510,
                      "end": 511
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 512,
                      "end": 523
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 504,
                    "end": 523
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 497,
                  "end": 523
                }
              ],
              "start": 448,
              "end": 529
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 430,
            "end": 529
          }
        ],
        "start": 320,
        "end": 531
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 299,
      "end": 531
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m2",
        "optional": false,
        "typeAnnotation": null,
        "start": 542,
        "end": 544
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
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 576,
                "end": 583
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
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 611,
                        "end": 612
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 613,
                        "end": 624
                      },
                      "declare": false,
                      "start": 601,
                      "end": 624
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 594,
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
                        "start": 646,
                        "end": 647
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 648,
                        "end": 659
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 640,
                      "end": 659
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 633,
                    "end": 659
                  }
                ],
                "start": 584,
                "end": 665
              },
              "kind": "namespace",
              "declare": true,
              "global": false,
              "start": 558,
              "end": 665
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 551,
            "end": 665
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 695,
                "end": 702
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
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 730,
                        "end": 731
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 732,
                        "end": 743
                      },
                      "declare": false,
                      "start": 720,
                      "end": 743
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 713,
                    "end": 743
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
                        "start": 765,
                        "end": 766
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 767,
                        "end": 778
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 759,
                      "end": 778
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 752,
                    "end": 778
                  }
                ],
                "start": 703,
                "end": 784
              },
              "kind": "namespace",
              "declare": true,
              "global": false,
              "start": 677,
              "end": 784
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 670,
            "end": 784
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 793,
                  "end": 794
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 797,
                  "end": 799
                },
                "definite": false,
                "start": 793,
                "end": 799
              }
            ],
            "declare": false,
            "start": 789,
            "end": 800
          }
        ],
        "start": 545,
        "end": 802
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 532,
      "end": 802
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 803
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14,
    "range": [
      7,
      14
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 15,
    "end": 24,
    "range": [
      15,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 25,
    "end": 32,
    "range": [
      25,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 39,
    "end": 45,
    "range": [
      39,
      45
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 46,
    "end": 55,
    "range": [
      46,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65,
    "range": [
      64,
      65
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 70,
    "end": 76,
    "range": [
      70,
      76
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 77,
    "end": 82,
    "range": [
      77,
      82
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92,
    "range": [
      91,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 95,
    "end": 101,
    "range": [
      95,
      101
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 102,
    "end": 110,
    "range": [
      102,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 111,
    "end": 114,
    "range": [
      111,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 118,
    "end": 125,
    "range": [
      118,
      125
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 134,
    "end": 140,
    "range": [
      134,
      140
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 141,
    "end": 145,
    "range": [
      141,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 156,
    "end": 163,
    "range": [
      156,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 164,
    "end": 173,
    "range": [
      164,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 174,
    "end": 181,
    "range": [
      174,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 182,
    "end": 183,
    "range": [
      182,
      183
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 188,
    "end": 194,
    "range": [
      188,
      194
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 195,
    "end": 204,
    "range": [
      195,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 219,
    "end": 225,
    "range": [
      219,
      225
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 226,
    "end": 231,
    "range": [
      226,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 244,
    "end": 250,
    "range": [
      244,
      250
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 251,
    "end": 259,
    "range": [
      251,
      259
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 260,
    "end": 264,
    "range": [
      260,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265,
    "range": [
      264,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 266,
    "end": 267,
    "range": [
      266,
      267
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 268,
    "end": 275,
    "range": [
      268,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 275,
    "end": 276,
    "range": [
      275,
      276
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 284,
    "end": 290,
    "range": [
      284,
      290
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 291,
    "end": 295,
    "range": [
      291,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 299,
    "end": 306,
    "range": [
      299,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 307,
    "end": 316,
    "range": [
      307,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 317,
    "end": 319,
    "range": [
      317,
      319
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 326,
    "end": 335,
    "range": [
      326,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 336,
    "end": 343,
    "range": [
      336,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 354,
    "end": 360,
    "range": [
      354,
      360
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 361,
    "end": 370,
    "range": [
      361,
      370
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 393,
    "end": 399,
    "range": [
      393,
      399
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 400,
    "end": 405,
    "range": [
      400,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 430,
    "end": 439,
    "range": [
      430,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 440,
    "end": 447,
    "range": [
      440,
      447
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 458,
    "end": 464,
    "range": [
      458,
      464
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 465,
    "end": 474,
    "range": [
      465,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 477,
    "end": 478,
    "range": [
      477,
      478
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488,
    "range": [
      487,
      488
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 497,
    "end": 503,
    "range": [
      497,
      503
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 504,
    "end": 509,
    "range": [
      504,
      509
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513,
    "range": [
      512,
      513
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529,
    "range": [
      528,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 532,
    "end": 541,
    "range": [
      532,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 542,
    "end": 544,
    "range": [
      542,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 545,
    "end": 546,
    "range": [
      545,
      546
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 551,
    "end": 557,
    "range": [
      551,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 558,
    "end": 565,
    "range": [
      558,
      565
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 566,
    "end": 575,
    "range": [
      566,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 576,
    "end": 583,
    "range": [
      576,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 584,
    "end": 585,
    "range": [
      584,
      585
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 594,
    "end": 600,
    "range": [
      594,
      600
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 601,
    "end": 610,
    "range": [
      601,
      610
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 613,
    "end": 614,
    "range": [
      613,
      614
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 633,
    "end": 639,
    "range": [
      633,
      639
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 640,
    "end": 645,
    "range": [
      640,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 648,
    "end": 649,
    "range": [
      648,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 670,
    "end": 676,
    "range": [
      670,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 677,
    "end": 684,
    "range": [
      677,
      684
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 685,
    "end": 694,
    "range": [
      685,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 695,
    "end": 702,
    "range": [
      695,
      702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 713,
    "end": 719,
    "range": [
      713,
      719
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 720,
    "end": 729,
    "range": [
      720,
      729
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743,
    "range": [
      742,
      743
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 752,
    "end": 758,
    "range": [
      752,
      758
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 759,
    "end": 764,
    "range": [
      759,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 789,
    "end": 792,
    "range": [
      789,
      792
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 797,
    "end": 799,
    "range": [
      797,
      799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
  }
]
```
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
        "name": "require",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 25
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 50
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 51,
                "end": 58
              },
              "declare": false,
              "start": 39,
              "end": 58
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 32,
            "end": 58
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
                "start": 76,
                "end": 77
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 78,
                "end": 85
              },
              "abstract": false,
              "declare": false,
              "start": 70,
              "end": 85
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 63,
            "end": 85
          }
        ],
        "start": 26,
        "end": 87
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "exports",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 113
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
                "name": "I",
                "optional": false,
                "typeAnnotation": null,
                "start": 137,
                "end": 138
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 139,
                "end": 146
              },
              "declare": false,
              "start": 127,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 120,
            "end": 146
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
                "start": 164,
                "end": 165
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [],
                "start": 166,
                "end": 173
              },
              "abstract": false,
              "declare": false,
              "start": 158,
              "end": 173
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 151,
            "end": 173
          }
        ],
        "start": 114,
        "end": 175
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 88,
      "end": 175
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m3",
        "optional": false,
        "typeAnnotation": null,
        "start": 194,
        "end": 196
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "require",
              "optional": false,
              "typeAnnotation": null,
              "start": 213,
              "end": 220
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 248,
                      "end": 249
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 250,
                      "end": 261
                    },
                    "declare": false,
                    "start": 238,
                    "end": 261
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 231,
                  "end": 261
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
                      "start": 283,
                      "end": 284
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 285,
                      "end": 296
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 277,
                    "end": 296
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 270,
                  "end": 296
                }
              ],
              "start": 221,
              "end": 302
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 203,
            "end": 302
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exports",
              "optional": false,
              "typeAnnotation": null,
              "start": 317,
              "end": 324
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
                      "name": "I",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 352,
                      "end": 353
                    },
                    "typeParameters": null,
                    "extends": [],
                    "body": {
                      "type": "TSInterfaceBody",
                      "body": [],
                      "start": 354,
                      "end": 365
                    },
                    "declare": false,
                    "start": 342,
                    "end": 365
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "type",
                  "attributes": [],
                  "start": 335,
                  "end": 365
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
                      "start": 387,
                      "end": 388
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 389,
                      "end": 400
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 381,
                    "end": 400
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 374,
                  "end": 400
                }
              ],
              "start": 325,
              "end": 406
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 307,
            "end": 406
          }
        ],
        "start": 197,
        "end": 408
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 176,
      "end": 408
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m4",
        "optional": false,
        "typeAnnotation": null,
        "start": 419,
        "end": 421
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
                "name": "require",
                "optional": false,
                "typeAnnotation": null,
                "start": 453,
                "end": 460
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
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 488,
                        "end": 489
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 490,
                        "end": 501
                      },
                      "declare": false,
                      "start": 478,
                      "end": 501
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 471,
                    "end": 501
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
                        "start": 523,
                        "end": 524
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 525,
                        "end": 536
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 517,
                      "end": 536
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 510,
                    "end": 536
                  }
                ],
                "start": 461,
                "end": 542
              },
              "kind": "namespace",
              "declare": true,
              "global": false,
              "start": 435,
              "end": 542
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 428,
            "end": 542
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "exports",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 579
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
                        "name": "I",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 607,
                        "end": 608
                      },
                      "typeParameters": null,
                      "extends": [],
                      "body": {
                        "type": "TSInterfaceBody",
                        "body": [],
                        "start": 609,
                        "end": 620
                      },
                      "declare": false,
                      "start": 597,
                      "end": 620
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "type",
                    "attributes": [],
                    "start": 590,
                    "end": 620
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
                        "body": [],
                        "start": 644,
                        "end": 655
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 636,
                      "end": 655
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 629,
                    "end": 655
                  }
                ],
                "start": 580,
                "end": 661
              },
              "kind": "namespace",
              "declare": true,
              "global": false,
              "start": 554,
              "end": 661
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 547,
            "end": 661
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 672
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 675,
                  "end": 677
                },
                "definite": false,
                "start": 671,
                "end": 677
              }
            ],
            "declare": false,
            "start": 667,
            "end": 678
          }
        ],
        "start": 422,
        "end": 680
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 409,
      "end": 680
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 680
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17,
    "range": [
      8,
      17
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 18,
    "end": 25,
    "range": [
      18,
      25
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 39,
    "end": 48,
    "range": [
      39,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 63,
    "end": 69,
    "range": [
      63,
      69
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 70,
    "end": 75,
    "range": [
      70,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
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
    "start": 84,
    "end": 85,
    "range": [
      84,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 88,
    "end": 95,
    "range": [
      88,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 96,
    "end": 105,
    "range": [
      96,
      105
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 106,
    "end": 113,
    "range": [
      106,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 120,
    "end": 126,
    "range": [
      120,
      126
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 127,
    "end": 136,
    "range": [
      127,
      136
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146,
    "range": [
      145,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 151,
    "end": 157,
    "range": [
      151,
      157
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 158,
    "end": 163,
    "range": [
      158,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 174,
    "end": 175,
    "range": [
      174,
      175
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 176,
    "end": 183,
    "range": [
      176,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 184,
    "end": 193,
    "range": [
      184,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 194,
    "end": 196,
    "range": [
      194,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 197,
    "end": 198,
    "range": [
      197,
      198
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 203,
    "end": 212,
    "range": [
      203,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 213,
    "end": 220,
    "range": [
      213,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 231,
    "end": 237,
    "range": [
      231,
      237
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 238,
    "end": 247,
    "range": [
      238,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 270,
    "end": 276,
    "range": [
      270,
      276
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 277,
    "end": 282,
    "range": [
      277,
      282
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 283,
    "end": 284,
    "range": [
      283,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296,
    "range": [
      295,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 307,
    "end": 316,
    "range": [
      307,
      316
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 317,
    "end": 324,
    "range": [
      317,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 335,
    "end": 341,
    "range": [
      335,
      341
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 342,
    "end": 351,
    "range": [
      342,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 352,
    "end": 353,
    "range": [
      352,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 374,
    "end": 380,
    "range": [
      374,
      380
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 381,
    "end": 386,
    "range": [
      381,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 389,
    "end": 390,
    "range": [
      389,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 405,
    "end": 406,
    "range": [
      405,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 409,
    "end": 418,
    "range": [
      409,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "m4",
    "start": 419,
    "end": 421,
    "range": [
      419,
      421
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 428,
    "end": 434,
    "range": [
      428,
      434
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 435,
    "end": 442,
    "range": [
      435,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 443,
    "end": 452,
    "range": [
      443,
      452
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 453,
    "end": 460,
    "range": [
      453,
      460
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 471,
    "end": 477,
    "range": [
      471,
      477
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 478,
    "end": 487,
    "range": [
      478,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 500,
    "end": 501,
    "range": [
      500,
      501
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 510,
    "end": 516,
    "range": [
      510,
      516
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 517,
    "end": 522,
    "range": [
      517,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 535,
    "end": 536,
    "range": [
      535,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 547,
    "end": 553,
    "range": [
      547,
      553
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 554,
    "end": 561,
    "range": [
      554,
      561
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 562,
    "end": 571,
    "range": [
      562,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 572,
    "end": 579,
    "range": [
      572,
      579
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 590,
    "end": 596,
    "range": [
      590,
      596
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 597,
    "end": 606,
    "range": [
      597,
      606
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 629,
    "end": 635,
    "range": [
      629,
      635
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 636,
    "end": 641,
    "range": [
      636,
      641
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 642,
    "end": 643,
    "range": [
      642,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645,
    "range": [
      644,
      645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 667,
    "end": 670,
    "range": [
      667,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 673,
    "end": 674,
    "range": [
      673,
      674
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 675,
    "end": 677,
    "range": [
      675,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  }
]
```
