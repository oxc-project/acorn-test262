__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment1",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 20
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 24,
                "end": 30
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "optional": false,
              "start": 24,
              "end": 38
            },
            {
              "type": "TSNumberKeyword",
              "start": 40,
              "end": 46
            }
          ],
          "start": 23,
          "end": 47
        },
        "declare": false,
        "start": 7,
        "end": 48
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 48
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Segment2",
          "optional": false,
          "typeAnnotation": null,
          "start": 61,
          "end": 69
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNumberKeyword",
              "start": 73,
              "end": 79
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "size",
                "optional": false,
                "typeAnnotation": null,
                "start": 81,
                "end": 85
              },
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              },
              "optional": false,
              "start": 81,
              "end": 93
            }
          ],
          "start": 72,
          "end": 94
        },
        "declare": false,
        "start": 56,
        "end": 95
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 49,
      "end": 95
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 113
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 121
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 123,
                "end": 126
              },
              "optional": false,
              "start": 117,
              "end": 126
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 131,
                "end": 134
              },
              "start": 128,
              "end": 134
            }
          ],
          "start": 116,
          "end": 135
        },
        "declare": false,
        "start": 104,
        "end": 136
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 97,
      "end": 136
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "List2",
          "optional": false,
          "typeAnnotation": null,
          "start": 150,
          "end": 155
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 159,
              "end": 162
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "remainder",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 167,
                  "end": 176
                },
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 178,
                  "end": 181
                },
                "optional": false,
                "start": 167,
                "end": 181
              },
              "start": 164,
              "end": 181
            }
          ],
          "start": 158,
          "end": 182
        },
        "declare": false,
        "start": 145,
        "end": 183
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 138,
      "end": 183
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pair",
          "optional": false,
          "typeAnnotation": null,
          "start": 198,
          "end": 202
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 210
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              },
              "optional": false,
              "start": 206,
              "end": 215
            },
            {
              "type": "TSOptionalType",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 217,
                "end": 220
              },
              "start": 217,
              "end": 221
            }
          ],
          "start": 205,
          "end": 222
        },
        "declare": false,
        "start": 193,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 186,
      "end": 223
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Pair2",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 242
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSAnyKeyword",
              "start": 246,
              "end": 249
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "last",
                "optional": false,
                "typeAnnotation": null,
                "start": 251,
                "end": 255
              },
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 258,
                "end": 261
              },
              "optional": true,
              "start": 251,
              "end": 261
            }
          ],
          "start": 245,
          "end": 262
        },
        "declare": false,
        "start": 232,
        "end": 263
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 225,
      "end": 263
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Opt",
          "optional": false,
          "typeAnnotation": null,
          "start": 278,
          "end": 281
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "element",
                "optional": false,
                "typeAnnotation": null,
                "start": 285,
                "end": 292
              },
              "elementType": {
                "type": "TSOptionalType",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 294,
                  "end": 300
                },
                "start": 294,
                "end": 301
              },
              "optional": false,
              "start": 285,
              "end": 301
            }
          ],
          "start": 284,
          "end": 302
        },
        "declare": false,
        "start": 273,
        "end": 303
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 266,
      "end": 303
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Trailing",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 364
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 373
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 375,
                "end": 381
              },
              "optional": false,
              "start": 368,
              "end": 381
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 387
              },
              "elementType": {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 392,
                    "end": 398
                  },
                  "start": 392,
                  "end": 400
                },
                "start": 389,
                "end": 400
              },
              "optional": false,
              "start": 383,
              "end": 400
            }
          ],
          "start": 367,
          "end": 401
        },
        "declare": false,
        "start": 351,
        "end": 402
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 344,
      "end": 402
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptTrailing",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 457
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 466
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 468,
                "end": 474
              },
              "optional": false,
              "start": 461,
              "end": 474
            },
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "rest",
                "optional": false,
                "typeAnnotation": null,
                "start": 476,
                "end": 480
              },
              "elementType": {
                "type": "TSRestType",
                "typeAnnotation": {
                  "type": "TSJSDocNullableType",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 485,
                        "end": 491
                      },
                      "start": 485,
                      "end": 493
                    },
                    "start": 484,
                    "end": 493
                  },
                  "postfix": true,
                  "id": 0,
                  "original": null,
                  "emitNode": null,
                  "start": 485,
                  "end": 494
                },
                "start": 482,
                "end": 494
              },
              "optional": false,
              "start": 476,
              "end": 494
            }
          ],
          "start": 460,
          "end": 495
        },
        "declare": false,
        "start": 441,
        "end": 496
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 434,
      "end": 496
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "OptRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 549,
          "end": 556
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 560,
                "end": 565
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 567,
                "end": 573
              },
              "optional": false,
              "start": 560,
              "end": 573
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 582
                },
                "elementType": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 585,
                    "end": 591
                  },
                  "start": 585,
                  "end": 593
                },
                "optional": true,
                "start": 578,
                "end": 593
              },
              "start": 575,
              "end": 593
            }
          ],
          "start": 559,
          "end": 594
        },
        "declare": false,
        "start": 544,
        "end": 595
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 537,
      "end": 595
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "NonArrayRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 637,
          "end": 649
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 653,
                "end": 658
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 660,
                "end": 666
              },
              "optional": false,
              "start": 653,
              "end": 666
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 671,
                  "end": 675
                },
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 677,
                  "end": 683
                },
                "optional": false,
                "start": 671,
                "end": 683
              },
              "start": 668,
              "end": 683
            }
          ],
          "start": 652,
          "end": 684
        },
        "declare": false,
        "start": 632,
        "end": 685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 625,
      "end": 685
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRestUnlabeled",
          "optional": false,
          "typeAnnotation": null,
          "start": 733,
          "end": 754
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSStringKeyword",
              "start": 758,
              "end": 764
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RecusiveRestUnlabeled",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 790
                },
                "typeArguments": null,
                "start": 769,
                "end": 790
              },
              "start": 766,
              "end": 790
            }
          ],
          "start": 757,
          "end": 791
        },
        "declare": false,
        "start": 728,
        "end": 792
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 721,
      "end": 792
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "RecusiveRest",
          "optional": false,
          "typeAnnotation": null,
          "start": 805,
          "end": 817
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSNamedTupleMember",
              "label": {
                "type": "Identifier",
                "decorators": [],
                "name": "first",
                "optional": false,
                "typeAnnotation": null,
                "start": 821,
                "end": 826
              },
              "elementType": {
                "type": "TSStringKeyword",
                "start": 828,
                "end": 834
              },
              "optional": false,
              "start": 821,
              "end": 834
            },
            {
              "type": "TSRestType",
              "typeAnnotation": {
                "type": "TSNamedTupleMember",
                "label": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 839,
                  "end": 843
                },
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RecusiveRest",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 845,
                    "end": 857
                  },
                  "typeArguments": null,
                  "start": 845,
                  "end": 857
                },
                "optional": false,
                "start": 839,
                "end": 857
              },
              "start": 836,
              "end": 857
            }
          ],
          "start": 820,
          "end": 858
        },
        "declare": false,
        "start": 800,
        "end": 859
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 793,
      "end": 859
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 897
}
```
