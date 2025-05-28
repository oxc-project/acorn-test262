__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 91,
  "end": 136,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 91,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 111,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 113,
        "end": 119,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 115,
          "end": 119
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 121,
      "end": 134,
      "expression": {
        "type": "Identifier",
        "start": 130,
        "end": 133,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 796,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 64,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 36,
        "decorators": [],
        "name": "IllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 37,
        "end": 64,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 43,
            "end": 62,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 50,
              "end": 62,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 56,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "decorators": [],
                    "name": "m",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 60,
                    "end": 61,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 66,
      "end": 142,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 106,
        "decorators": [],
        "name": "AlsoIllegalBecauseInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 107,
        "end": 142,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 113,
            "end": 140,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 131,
              "decorators": [],
              "name": "PrivateClass",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 132,
              "end": 140,
              "body": []
            },
            "abstract": false,
            "declare": false
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 144,
      "end": 175,
      "id": {
        "type": "Identifier",
        "start": 149,
        "end": 161,
        "decorators": [],
        "name": "NotLegalEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 162,
        "end": 175,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 168,
            "end": 173,
            "id": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 172,
              "end": 173,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 177,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 195,
        "decorators": [],
        "name": "NoGoodAlias",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 198,
        "end": 212,
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 210,
          "decorators": [],
          "name": "NotLegalEnum",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSEnumDeclaration",
      "start": 215,
      "end": 257,
      "id": {
        "type": "Identifier",
        "start": 226,
        "end": 243,
        "decorators": [],
        "name": "NotLegalConstEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 244,
        "end": 257,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 250,
            "end": 255,
            "id": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 254,
              "end": 255,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 374,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 304,
        "decorators": [],
        "name": "MyClassOk",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 374,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 347,
            "end": 372,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 358,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 358,
              "end": 372,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 359,
                  "end": 370,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 364,
                      "end": 370
                    }
                  }
                }
              ],
              "returnType": null,
              "body": null,
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 375,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 400,
        "decorators": [],
        "name": "NotInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 401,
        "end": 479,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 407,
            "end": 437,
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "start": 414,
              "end": 437,
              "id": {
                "type": "Identifier",
                "start": 424,
                "end": 433,
                "decorators": [],
                "name": "JustAType",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "start": 434,
                "end": 437,
                "body": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 442,
            "end": 477,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 449,
              "end": 477,
              "id": {
                "type": "Identifier",
                "start": 454,
                "end": 471,
                "decorators": [],
                "name": "ATypeInANamespace",
                "optional": false,
                "typeAnnotation": null
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 474,
                "end": 476,
                "members": []
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 480,
      "end": 557,
      "id": {
        "type": "Identifier",
        "start": 498,
        "end": 522,
        "decorators": [],
        "name": "AmbientIsNotInstantiated",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 523,
        "end": 557,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 529,
            "end": 555,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 536,
              "end": 555,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 542,
                  "end": 554,
                  "id": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 549,
                    "decorators": [],
                    "name": "stillOk",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 552,
                    "end": 554,
                    "value": 12,
                    "raw": "12"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 559,
      "end": 595,
      "id": {
        "type": "Identifier",
        "start": 572,
        "end": 581,
        "decorators": [],
        "name": "LegalEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 582,
        "end": 595,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 588,
            "end": 593,
            "id": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 592,
              "end": 593,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    },
    {
      "type": "TSModuleDeclaration",
      "start": 597,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 627,
        "decorators": [],
        "name": "AmbientStuff",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 628,
        "end": 795,
        "body": [
          {
            "type": "TSModuleDeclaration",
            "start": 634,
            "end": 693,
            "id": {
              "type": "Identifier",
              "start": 644,
              "end": 650,
              "decorators": [],
              "name": "Nested",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSModuleBlock",
              "start": 651,
              "end": 693,
              "body": [
                {
                  "type": "ExportNamedDeclaration",
                  "start": 661,
                  "end": 687,
                  "declaration": {
                    "type": "VariableDeclaration",
                    "start": 668,
                    "end": 687,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 674,
                        "end": 686,
                        "id": {
                          "type": "Identifier",
                          "start": 674,
                          "end": 681,
                          "decorators": [],
                          "name": "stillOk",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "Literal",
                          "start": 684,
                          "end": 686,
                          "value": 12,
                          "raw": "12"
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": []
                }
              ]
            },
            "kind": "namespace",
            "declare": false,
            "global": false
          },
          {
            "type": "TSEnumDeclaration",
            "start": 698,
            "end": 745,
            "id": {
              "type": "Identifier",
              "start": 703,
              "end": 723,
              "decorators": [],
              "name": "EnumInAmbientContext",
              "optional": false,
              "typeAnnotation": null
            },
            "body": {
              "type": "TSEnumBody",
              "start": 724,
              "end": 745,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 734,
                  "end": 739,
                  "id": {
                    "type": "Identifier",
                    "start": 734,
                    "end": 735,
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "initializer": {
                    "type": "Literal",
                    "start": 738,
                    "end": 739,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": false
                }
              ]
            },
            "const": false,
            "declare": false
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 751,
            "end": 793,
            "id": {
              "type": "Identifier",
              "start": 758,
              "end": 767,
              "decorators": [],
              "name": "FineAlias",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 770,
              "end": 792,
              "left": {
                "type": "Identifier",
                "start": 770,
                "end": 790,
                "decorators": [],
                "name": "EnumInAmbientContext",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 791,
                "end": 792,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "importKind": "value"
          }
        ]
      },
      "kind": "namespace",
      "declare": true,
      "global": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 36,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 13,
        "end": 35,
        "expression": {
          "type": "Literal",
          "start": 21,
          "end": 34,
          "value": "./other.cjs",
          "raw": "\"./other.cjs\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 37,
      "end": 50,
      "expression": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 29,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 22,
        "end": 28,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 24,
          "end": 28
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSExportAssignment",
      "start": 30,
      "end": 43,
      "expression": {
        "type": "Identifier",
        "start": 39,
        "end": 42,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 45,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 17,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 20,
            "end": 24,
            "value": 1234,
            "raw": "1234"
          },
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 26,
      "end": 45,
      "declaration": {
        "type": "Identifier",
        "start": 41,
        "end": 44,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
