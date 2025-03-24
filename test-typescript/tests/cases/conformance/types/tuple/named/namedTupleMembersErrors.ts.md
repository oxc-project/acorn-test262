__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 897,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 48,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 20,
          "decorators": [],
          "name": "Segment1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 23,
          "end": 47,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 24,
              "end": 38,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "label": {
                "type": "Identifier",
                "start": 24,
                "end": 30,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSNumberKeyword",
              "start": 40,
              "end": 46
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 49,
      "end": 95,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 56,
        "end": 95,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 61,
          "end": 69,
          "decorators": [],
          "name": "Segment2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 72,
          "end": 94,
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 73,
              "end": 79
            },
            {
              "type": "TSNamedTupleMember",
              "start": 81,
              "end": 93,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              },
              "label": {
                "type": "Identifier",
                "start": 81,
                "end": 85,
                "decorators": [],
                "name": "size",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 136,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 104,
        "end": 136,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 109,
          "end": 113,
          "decorators": [],
          "name": "List",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 116,
          "end": 135,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 117,
              "end": 126,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              },
              "label": {
                "type": "Identifier",
                "start": 117,
                "end": 121,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSRestType",
              "start": 128,
              "end": 134,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 131,
                "end": 134
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 138,
      "end": 183,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 145,
        "end": 183,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 150,
          "end": 155,
          "decorators": [],
          "name": "List2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 158,
          "end": 182,
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 159,
              "end": 162
            },
            {
              "type": "TSRestType",
              "start": 164,
              "end": 181,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 167,
                "end": 181,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 178,
                  "end": 181
                },
                "label": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 176,
                  "decorators": [],
                  "name": "remainder",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 223,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 193,
        "end": 223,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 198,
          "end": 202,
          "decorators": [],
          "name": "Pair",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 205,
          "end": 222,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 206,
              "end": 215,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              },
              "label": {
                "type": "Identifier",
                "start": 206,
                "end": 210,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSOptionalType",
              "start": 217,
              "end": 221,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 217,
                "end": 220
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 225,
      "end": 263,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 232,
        "end": 263,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 237,
          "end": 242,
          "decorators": [],
          "name": "Pair2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 245,
          "end": 262,
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 246,
              "end": 249
            },
            {
              "type": "TSNamedTupleMember",
              "start": 251,
              "end": 261,
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 258,
                "end": 261
              },
              "label": {
                "type": "Identifier",
                "start": 251,
                "end": 255,
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": true
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 266,
      "end": 303,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 273,
        "end": 303,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 278,
          "end": 281,
          "decorators": [],
          "name": "Opt",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 284,
          "end": 302,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 285,
              "end": 301,
              "elementType": {
                "type": "TSOptionalType",
                "start": 294,
                "end": 301,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 294,
                  "end": 300
                }
              },
              "label": {
                "type": "Identifier",
                "start": 285,
                "end": 292,
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 344,
      "end": 402,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 351,
        "end": 402,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 356,
          "end": 364,
          "decorators": [],
          "name": "Trailing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 367,
          "end": 401,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 368,
              "end": 381,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 375,
                "end": 381
              },
              "label": {
                "type": "Identifier",
                "start": 368,
                "end": 373,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 383,
              "end": 400,
              "elementType": {
                "type": "TSRestType",
                "start": 389,
                "end": 400,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 392,
                  "end": 400,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 392,
                    "end": 398
                  }
                }
              },
              "label": {
                "type": "Identifier",
                "start": 383,
                "end": 387,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 434,
      "end": 496,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 441,
        "end": 496,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 446,
          "end": 457,
          "decorators": [],
          "name": "OptTrailing",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 460,
          "end": 495,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 461,
              "end": 474,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 468,
                "end": 474
              },
              "label": {
                "type": "Identifier",
                "start": 461,
                "end": 466,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSNamedTupleMember",
              "start": 476,
              "end": 494,
              "elementType": {
                "type": "TSRestType",
                "start": 482,
                "end": 494,
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "start": 485,
                  "end": 494,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 484,
                    "end": 493,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 485,
                      "end": 493,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 485,
                        "end": 491
                      }
                    }
                  },
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "postfix": true
                }
              },
              "label": {
                "type": "Identifier",
                "start": 476,
                "end": 480,
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 537,
      "end": 595,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 544,
        "end": 595,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 549,
          "end": 556,
          "decorators": [],
          "name": "OptRest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 559,
          "end": 594,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 560,
              "end": 573,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
              },
              "label": {
                "type": "Identifier",
                "start": 560,
                "end": 565,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSRestType",
              "start": 575,
              "end": 593,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 578,
                "end": 593,
                "elementType": {
                  "type": "TSArrayType",
                  "start": 585,
                  "end": 593,
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 578,
                  "end": 582,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 625,
      "end": 685,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 632,
        "end": 685,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 637,
          "end": 649,
          "decorators": [],
          "name": "NonArrayRest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 652,
          "end": 684,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 653,
              "end": 666,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
              },
              "label": {
                "type": "Identifier",
                "start": 653,
                "end": 658,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSRestType",
              "start": 668,
              "end": 683,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 671,
                "end": 683,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 677,
                  "end": 683
                },
                "label": {
                  "type": "Identifier",
                  "start": 671,
                  "end": 675,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 721,
      "end": 792,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 728,
        "end": 792,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 733,
          "end": 754,
          "decorators": [],
          "name": "RecusiveRestUnlabeled",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 757,
          "end": 791,
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 758,
              "end": 764
            },
            {
              "type": "TSRestType",
              "start": 766,
              "end": 790,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 769,
                "end": 790,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 790,
                  "decorators": [],
                  "name": "RecusiveRestUnlabeled",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 793,
      "end": 859,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 800,
        "end": 859,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 805,
          "end": 817,
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 820,
          "end": 858,
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "start": 821,
              "end": 834,
              "elementType": {
                "type": "TSStringKeyword",
                "start": 828,
                "end": 834
              },
              "label": {
                "type": "Identifier",
                "start": 821,
                "end": 826,
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false
            },
            {
              "type": "TSRestType",
              "start": 836,
              "end": 857,
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "start": 839,
                "end": 857,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 845,
                  "end": 857,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 845,
                    "end": 857,
                    "decorators": [],
                    "name": "RecusiveRest",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "label": {
                  "type": "Identifier",
                  "start": 839,
                  "end": 843,
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
