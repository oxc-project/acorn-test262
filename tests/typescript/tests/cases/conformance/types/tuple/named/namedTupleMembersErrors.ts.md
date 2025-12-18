__ESTREE_TEST__:AST:
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
    "value": "type",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "Segment1",
    "start": 12,
    "end": 20,
    "range": [
      12,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 24,
    "end": 30,
    "range": [
      24,
      30
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38,
    "range": [
      32,
      38
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 38,
    "end": 39,
    "range": [
      38,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 40,
    "end": 46,
    "range": [
      40,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 49,
    "end": 55,
    "range": [
      49,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 56,
    "end": 60,
    "range": [
      56,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "Segment2",
    "start": 61,
    "end": 69,
    "range": [
      61,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 73,
    "end": 79,
    "range": [
      73,
      79
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 79,
    "end": 80,
    "range": [
      79,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "size",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93,
    "range": [
      87,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 97,
    "end": 103,
    "range": [
      97,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 104,
    "end": 108,
    "range": [
      104,
      108
    ]
  },
  {
    "type": "Identifier",
    "value": "List",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117,
    "range": [
      116,
      117
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 117,
    "end": 121,
    "range": [
      117,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 123,
    "end": 126,
    "range": [
      123,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 128,
    "end": 131,
    "range": [
      128,
      131
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 131,
    "end": 134,
    "range": [
      131,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 135,
    "end": 136,
    "range": [
      135,
      136
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 138,
    "end": 144,
    "range": [
      138,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 145,
    "end": 149,
    "range": [
      145,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "List2",
    "start": 150,
    "end": 155,
    "range": [
      150,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 164,
    "end": 167,
    "range": [
      164,
      167
    ]
  },
  {
    "type": "Identifier",
    "value": "remainder",
    "start": 167,
    "end": 176,
    "range": [
      167,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 186,
    "end": 192,
    "range": [
      186,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 193,
    "end": 197,
    "range": [
      193,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "Pair",
    "start": 198,
    "end": 202,
    "range": [
      198,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 206,
    "end": 210,
    "range": [
      206,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 212,
    "end": 215,
    "range": [
      212,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 217,
    "end": 220,
    "range": [
      217,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 225,
    "end": 231,
    "range": [
      225,
      231
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 232,
    "end": 236,
    "range": [
      232,
      236
    ]
  },
  {
    "type": "Identifier",
    "value": "Pair2",
    "start": 237,
    "end": 242,
    "range": [
      237,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 243,
    "end": 244,
    "range": [
      243,
      244
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 246,
    "end": 249,
    "range": [
      246,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "last",
    "start": 251,
    "end": 255,
    "range": [
      251,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 256,
    "end": 257,
    "range": [
      256,
      257
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 258,
    "end": 261,
    "range": [
      258,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263,
    "range": [
      262,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 273,
    "end": 277,
    "range": [
      273,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "Opt",
    "start": 278,
    "end": 281,
    "range": [
      278,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "element",
    "start": 285,
    "end": 292,
    "range": [
      285,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293,
    "range": [
      292,
      293
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 294,
    "end": 300,
    "range": [
      294,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 302,
    "end": 303,
    "range": [
      302,
      303
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 344,
    "end": 350,
    "range": [
      344,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 351,
    "end": 355,
    "range": [
      351,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "Trailing",
    "start": 356,
    "end": 364,
    "range": [
      356,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 365,
    "end": 366,
    "range": [
      365,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 367,
    "end": 368,
    "range": [
      367,
      368
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 368,
    "end": 373,
    "range": [
      368,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 373,
    "end": 374,
    "range": [
      373,
      374
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 375,
    "end": 381,
    "range": [
      375,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 383,
    "end": 387,
    "range": [
      383,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 389,
    "end": 392,
    "range": [
      389,
      392
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 392,
    "end": 398,
    "range": [
      392,
      398
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 398,
    "end": 399,
    "range": [
      398,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 400,
    "end": 401,
    "range": [
      400,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "start": 434,
    "end": 440,
    "range": [
      434,
      440
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 441,
    "end": 445,
    "range": [
      441,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "OptTrailing",
    "start": 446,
    "end": 457,
    "range": [
      446,
      457
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 468,
    "end": 474,
    "range": [
      468,
      474
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 474,
    "end": 475,
    "range": [
      474,
      475
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 476,
    "end": 480,
    "range": [
      476,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 482,
    "end": 485,
    "range": [
      482,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 485,
    "end": 491,
    "range": [
      485,
      491
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 491,
    "end": 492,
    "range": [
      491,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 537,
    "end": 543,
    "range": [
      537,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 544,
    "end": 548,
    "range": [
      544,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "OptRest",
    "start": 549,
    "end": 556,
    "range": [
      549,
      556
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 560,
    "end": 565,
    "range": [
      560,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 565,
    "end": 566,
    "range": [
      565,
      566
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 567,
    "end": 573,
    "range": [
      567,
      573
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 573,
    "end": 574,
    "range": [
      573,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 575,
    "end": 578,
    "range": [
      575,
      578
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 578,
    "end": 582,
    "range": [
      578,
      582
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 582,
    "end": 583,
    "range": [
      582,
      583
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584,
    "range": [
      583,
      584
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 585,
    "end": 591,
    "range": [
      585,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 592,
    "end": 593,
    "range": [
      592,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 594,
    "end": 595,
    "range": [
      594,
      595
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 625,
    "end": 631,
    "range": [
      625,
      631
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 632,
    "end": 636,
    "range": [
      632,
      636
    ]
  },
  {
    "type": "Identifier",
    "value": "NonArrayRest",
    "start": 637,
    "end": 649,
    "range": [
      637,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 653,
    "end": 658,
    "range": [
      653,
      658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 660,
    "end": 666,
    "range": [
      660,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 668,
    "end": 671,
    "range": [
      668,
      671
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 671,
    "end": 675,
    "range": [
      671,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 675,
    "end": 676,
    "range": [
      675,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 677,
    "end": 683,
    "range": [
      677,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 721,
    "end": 727,
    "range": [
      721,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 728,
    "end": 732,
    "range": [
      728,
      732
    ]
  },
  {
    "type": "Identifier",
    "value": "RecusiveRestUnlabeled",
    "start": 733,
    "end": 754,
    "range": [
      733,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 757,
    "end": 758,
    "range": [
      757,
      758
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 758,
    "end": 764,
    "range": [
      758,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 766,
    "end": 769,
    "range": [
      766,
      769
    ]
  },
  {
    "type": "Identifier",
    "value": "RecusiveRestUnlabeled",
    "start": 769,
    "end": 790,
    "range": [
      769,
      790
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 790,
    "end": 791,
    "range": [
      790,
      791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 791,
    "end": 792,
    "range": [
      791,
      792
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 793,
    "end": 799,
    "range": [
      793,
      799
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 800,
    "end": 804,
    "range": [
      800,
      804
    ]
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 805,
    "end": 817,
    "range": [
      805,
      817
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "first",
    "start": 821,
    "end": 826,
    "range": [
      821,
      826
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 826,
    "end": 827,
    "range": [
      826,
      827
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 828,
    "end": 834,
    "range": [
      828,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 834,
    "end": 835,
    "range": [
      834,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 836,
    "end": 839,
    "range": [
      836,
      839
    ]
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 839,
    "end": 843,
    "range": [
      839,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Identifier",
    "value": "RecusiveRest",
    "start": 845,
    "end": 857,
    "range": [
      845,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 858,
    "end": 859,
    "range": [
      858,
      859
    ]
  }
]
```
