__ESTREE_TEST__:PASS:
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
__ESTREE_TEST__:PASS:
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
__ESTREE_TEST__:PASS:
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
__ESTREE_TEST__:PASS:
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
