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
        "name": "IllegalBecauseInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 56,
                  "end": 61,
                  "id": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 57,
                    "name": "m",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "AlsoIllegalBecauseInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "id": {
              "type": "Identifier",
              "start": 119,
              "end": 131,
              "name": "PrivateClass",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 132,
              "end": 140,
              "body": []
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
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
        "name": "NotLegalEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 168,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 169,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 177,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 184,
        "end": 195,
        "name": "NoGoodAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 198,
        "end": 212,
        "left": {
          "type": "Identifier",
          "start": 198,
          "end": 210,
          "name": "NotLegalEnum",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 211,
          "end": 212,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "name": "NotLegalConstEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 250,
          "end": 255,
          "id": {
            "type": "Identifier",
            "start": 250,
            "end": 251,
            "name": "C",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": true,
      "declare": false,
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
              "name": "C",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 289,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 295,
        "end": 304,
        "name": "MyClassOk",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 305,
        "end": 374,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 347,
            "end": 372,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 347,
              "end": 358,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 358,
              "end": 372,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 359,
                  "end": 370,
                  "name": "foo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 362,
                    "end": 370,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 364,
                      "end": 370
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 375,
      "end": 479,
      "id": {
        "type": "Identifier",
        "start": 385,
        "end": 400,
        "name": "NotInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "JustAType",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "extends": [],
              "typeParameters": null,
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
            "attributes": [],
            "exportKind": "type"
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
                "name": "ATypeInANamespace",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "attributes": [],
            "exportKind": "type"
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
        "name": "AmbientIsNotInstantiated",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 542,
                  "end": 554,
                  "id": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 549,
                    "name": "stillOk",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
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
        "name": "LegalEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 588,
          "end": 593,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": true,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 597,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 615,
        "end": 627,
        "name": "AmbientStuff",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "name": "Nested",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 674,
                        "end": 686,
                        "id": {
                          "type": "Identifier",
                          "start": 674,
                          "end": 681,
                          "name": "stillOk",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                    "kind": "const",
                    "declare": false
                  },
                  "specifiers": [],
                  "source": null,
                  "attributes": [],
                  "exportKind": "value"
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
              "name": "EnumInAmbientContext",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 734,
                "end": 739,
                "id": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "name": "B",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
            ],
            "const": false,
            "declare": false,
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
                    "name": "B",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
            }
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 751,
            "end": 793,
            "id": {
              "type": "Identifier",
              "start": 758,
              "end": 767,
              "name": "FineAlias",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "start": 770,
              "end": 792,
              "left": {
                "type": "Identifier",
                "start": 770,
                "end": 790,
                "name": "EnumInAmbientContext",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 791,
                "end": 792,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
