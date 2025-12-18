__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 111
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 115,
          "end": 119
        },
        "start": 113,
        "end": 119
      },
      "body": null,
      "expression": false,
      "start": 91,
      "end": 120
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 130,
        "end": 133
      },
      "start": 121,
      "end": 134
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 91,
  "end": 136
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 91,
    "end": 98,
    "range": [
      91,
      98
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 99,
    "end": 107,
    "range": [
      99,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 108,
    "end": 111,
    "range": [
      108,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 115,
    "end": 119,
    "range": [
      115,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 121,
    "end": 127,
    "range": [
      121,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 130,
    "end": 133,
    "range": [
      130,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
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
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 36
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 56,
                    "end": 57
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 60,
                    "end": 61
                  },
                  "definite": false,
                  "start": 56,
                  "end": 61
                }
              ],
              "declare": false,
              "start": 50,
              "end": 62
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 43,
            "end": 62
          }
        ],
        "start": 37,
        "end": 64
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 76,
        "end": 106
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
              "name": "PrivateClass",
              "optional": false,
              "typeAnnotation": null,
              "start": 119,
              "end": 131
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 132,
              "end": 140
            },
            "abstract": false,
            "declare": false,
            "start": 113,
            "end": 140
          }
        ],
        "start": 107,
        "end": 142
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 66,
      "end": 142
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 149,
        "end": 161
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 169
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 172,
              "end": 173
            },
            "computed": false,
            "start": 168,
            "end": 173
          }
        ],
        "start": 162,
        "end": 175
      },
      "const": false,
      "declare": false,
      "start": 144,
      "end": 175
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 195
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 210
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null,
          "start": 211,
          "end": 212
        },
        "start": 198,
        "end": 212
      },
      "importKind": "value",
      "start": 177,
      "end": 213
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 243
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "initializer": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 254,
              "end": 255
            },
            "computed": false,
            "start": 250,
            "end": 255
          }
        ],
        "start": 244,
        "end": 257
      },
      "const": true,
      "declare": false,
      "start": 215,
      "end": 257
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "typeAnnotation": null,
        "start": 295,
        "end": 304
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
              "start": 347,
              "end": 358
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 364,
                      "end": 370
                    },
                    "start": 362,
                    "end": 370
                  },
                  "start": 359,
                  "end": 370
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 358,
              "end": 372
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 347,
            "end": 372
          }
        ],
        "start": 305,
        "end": 374
      },
      "abstract": false,
      "declare": false,
      "start": 289,
      "end": 374
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 400
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
                "name": "JustAType",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 433
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 434,
                "end": 437
              },
              "declare": false,
              "start": 414,
              "end": 437
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 407,
            "end": 437
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "typeAnnotation": null,
                "start": 454,
                "end": 471
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [],
                "start": 474,
                "end": 476
              },
              "declare": false,
              "start": 449,
              "end": 477
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 442,
            "end": 477
          }
        ],
        "start": 401,
        "end": 479
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 375,
      "end": 479
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "typeAnnotation": null,
        "start": 498,
        "end": 522
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 542,
                    "end": 549
                  },
                  "init": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 552,
                    "end": 554
                  },
                  "definite": false,
                  "start": 542,
                  "end": 554
                }
              ],
              "declare": false,
              "start": 536,
              "end": 555
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 529,
            "end": 555
          }
        ],
        "start": 523,
        "end": 557
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 480,
      "end": 557
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 572,
        "end": 581
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 589
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 592,
              "end": 593
            },
            "computed": false,
            "start": 588,
            "end": 593
          }
        ],
        "start": 582,
        "end": 595
      },
      "const": false,
      "declare": true,
      "start": 559,
      "end": 595
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "typeAnnotation": null,
        "start": 615,
        "end": 627
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null,
              "start": 644,
              "end": 650
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "declaration": {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 674,
                          "end": 681
                        },
                        "init": {
                          "type": "Literal",
                          "value": 12,
                          "raw": "12",
                          "start": 684,
                          "end": 686
                        },
                        "definite": false,
                        "start": 674,
                        "end": 686
                      }
                    ],
                    "declare": false,
                    "start": 668,
                    "end": 687
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 661,
                  "end": 687
                }
              ],
              "start": 651,
              "end": 693
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 634,
            "end": 693
          },
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 703,
              "end": 723
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 734,
                    "end": 735
                  },
                  "initializer": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 738,
                    "end": 739
                  },
                  "computed": false,
                  "start": 734,
                  "end": 739
                }
              ],
              "start": 724,
              "end": 745
            },
            "const": false,
            "declare": false,
            "start": 698,
            "end": 745
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "typeAnnotation": null,
              "start": 758,
              "end": 767
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 770,
                "end": 790
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 792
              },
              "start": 770,
              "end": 792
            },
            "importKind": "value",
            "start": 751,
            "end": 793
          }
        ],
        "start": 628,
        "end": 795
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 597,
      "end": 795
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 796
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
    "value": "IllegalBecauseInstantiated",
    "start": 10,
    "end": 36,
    "range": [
      10,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 43,
    "end": 49,
    "range": [
      43,
      49
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 60,
    "end": 61,
    "range": [
      60,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 66,
    "end": 75,
    "range": [
      66,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "AlsoIllegalBecauseInstantiated",
    "start": 76,
    "end": 106,
    "range": [
      76,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 113,
    "end": 118,
    "range": [
      113,
      118
    ]
  },
  {
    "type": "Identifier",
    "value": "PrivateClass",
    "start": 119,
    "end": 131,
    "range": [
      119,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 144,
    "end": 148,
    "range": [
      144,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "NotLegalEnum",
    "start": 149,
    "end": 161,
    "range": [
      149,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
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
    "type": "Keyword",
    "value": "import",
    "start": 177,
    "end": 183,
    "range": [
      177,
      183
    ]
  },
  {
    "type": "Identifier",
    "value": "NoGoodAlias",
    "start": 184,
    "end": 195,
    "range": [
      184,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "NotLegalEnum",
    "start": 198,
    "end": 210,
    "range": [
      198,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 215,
    "end": 220,
    "range": [
      215,
      220
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 221,
    "end": 225,
    "range": [
      221,
      225
    ]
  },
  {
    "type": "Identifier",
    "value": "NotLegalConstEnum",
    "start": 226,
    "end": 243,
    "range": [
      226,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 289,
    "end": 294,
    "range": [
      289,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "MyClassOk",
    "start": 295,
    "end": 304,
    "range": [
      295,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 347,
    "end": 358,
    "range": [
      347,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 359,
    "end": 362,
    "range": [
      359,
      362
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 362,
    "end": 363,
    "range": [
      362,
      363
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 364,
    "end": 370,
    "range": [
      364,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 375,
    "end": 384,
    "range": [
      375,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "NotInstantiated",
    "start": 385,
    "end": 400,
    "range": [
      385,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 407,
    "end": 413,
    "range": [
      407,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 414,
    "end": 423,
    "range": [
      414,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "JustAType",
    "start": 424,
    "end": 433,
    "range": [
      424,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 442,
    "end": 448,
    "range": [
      442,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 449,
    "end": 453,
    "range": [
      449,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "ATypeInANamespace",
    "start": 454,
    "end": 471,
    "range": [
      454,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 478,
    "end": 479,
    "range": [
      478,
      479
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 480,
    "end": 487,
    "range": [
      480,
      487
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 488,
    "end": 497,
    "range": [
      488,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "AmbientIsNotInstantiated",
    "start": 498,
    "end": 522,
    "range": [
      498,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 529,
    "end": 535,
    "range": [
      529,
      535
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 536,
    "end": 541,
    "range": [
      536,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "stillOk",
    "start": 542,
    "end": 549,
    "range": [
      542,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 552,
    "end": 554,
    "range": [
      552,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555,
    "range": [
      554,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 559,
    "end": 566,
    "range": [
      559,
      566
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 567,
    "end": 571,
    "range": [
      567,
      571
    ]
  },
  {
    "type": "Identifier",
    "value": "LegalEnum",
    "start": 572,
    "end": 581,
    "range": [
      572,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 597,
    "end": 604,
    "range": [
      597,
      604
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 605,
    "end": 614,
    "range": [
      605,
      614
    ]
  },
  {
    "type": "Identifier",
    "value": "AmbientStuff",
    "start": 615,
    "end": 627,
    "range": [
      615,
      627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 634,
    "end": 643,
    "range": [
      634,
      643
    ]
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 644,
    "end": 650,
    "range": [
      644,
      650
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 651,
    "end": 652,
    "range": [
      651,
      652
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 661,
    "end": 667,
    "range": [
      661,
      667
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 668,
    "end": 673,
    "range": [
      668,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "stillOk",
    "start": 674,
    "end": 681,
    "range": [
      674,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 682,
    "end": 683,
    "range": [
      682,
      683
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 684,
    "end": 686,
    "range": [
      684,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 698,
    "end": 702,
    "range": [
      698,
      702
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumInAmbientContext",
    "start": 703,
    "end": 723,
    "range": [
      703,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 738,
    "end": 739,
    "range": [
      738,
      739
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 751,
    "end": 757,
    "range": [
      751,
      757
    ]
  },
  {
    "type": "Identifier",
    "value": "FineAlias",
    "start": 758,
    "end": 767,
    "range": [
      758,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "EnumInAmbientContext",
    "start": 770,
    "end": 790,
    "range": [
      770,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 792,
    "end": 793,
    "range": [
      792,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 794,
    "end": 795,
    "range": [
      794,
      795
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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 10
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./other.cjs",
          "raw": "\"./other.cjs\"",
          "start": 21,
          "end": 34
        },
        "start": 13,
        "end": 35
      },
      "importKind": "value",
      "start": 0,
      "end": 36
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 46,
        "end": 49
      },
      "start": 37,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 7,
    "end": 10,
    "range": [
      7,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 13,
    "end": 20,
    "range": [
      13,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "String",
    "value": "\"./other.cjs\"",
    "start": 21,
    "end": 34,
    "range": [
      21,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43,
    "range": [
      37,
      43
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 46,
    "end": 49,
    "range": [
      46,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
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
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        },
        "start": 22,
        "end": 28
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 29
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 42
      },
      "start": 30,
      "end": 43
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
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
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 22,
    "end": 23,
    "range": [
      22,
      23
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 24,
    "end": 28,
    "range": [
      24,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36,
    "range": [
      30,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 39,
    "end": 42,
    "range": [
      39,
      42
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
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
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 14,
            "end": 17
          },
          "init": {
            "type": "Literal",
            "value": 1234,
            "raw": "1234",
            "start": 20,
            "end": 24
          },
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 41,
        "end": 44
      },
      "exportKind": "value",
      "start": 26,
      "end": 45
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 45
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
    "type": "Keyword",
    "value": "const",
    "start": 8,
    "end": 13,
    "range": [
      8,
      13
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 14,
    "end": 17,
    "range": [
      14,
      17
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Numeric",
    "value": "1234",
    "start": 20,
    "end": 24,
    "range": [
      20,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32,
    "range": [
      26,
      32
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 33,
    "end": 40,
    "range": [
      33,
      40
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 41,
    "end": 44,
    "range": [
      41,
      44
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 44,
    "end": 45,
    "range": [
      44,
      45
    ]
  }
]
```
