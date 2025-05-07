__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 2539,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 23,
      "end": 70,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 29,
        "decorators": [],
        "name": "O",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 32,
        "end": 69,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 34,
            "end": 45,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 56,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 47,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 55,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 49,
                "end": 55
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 57,
            "end": 67,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 58,
              "end": 66,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 60,
                "end": 66
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 71,
      "end": 102,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 76,
        "end": 78,
        "decorators": [],
        "name": "F1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 81,
        "end": 101,
        "params": [
          {
            "type": "Identifier",
            "start": 82,
            "end": 93,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 93,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 87,
                "end": 93
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 95,
          "end": 101,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 98,
            "end": 101
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 109,
      "end": 145,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "decorators": [],
        "name": "F2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 119,
        "end": 144,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 120,
            "end": 136,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 122,
                "end": 131,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 125,
                  "end": 131,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 133,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 135,
                "end": 136,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 135,
                  "end": 136,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 138,
          "end": 144,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 141,
            "end": 144
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 155,
      "end": 197,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 160,
        "end": 162,
        "decorators": [],
        "name": "F3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 165,
        "end": 196,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 166,
            "end": 188,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 168,
                "end": 177,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 177,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 179,
                "end": 180,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 179,
                  "end": 180,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 182,
                "end": 183,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 182,
                  "end": 183,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 188,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 187,
                "end": 188,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 190,
          "end": 196,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 193,
            "end": 196
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 207,
      "end": 243,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 214,
        "decorators": [],
        "name": "F4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 217,
        "end": 242,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 218,
            "end": 234,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 220,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 220,
                  "end": 221,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 229,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 231,
              "end": 234,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 233,
                "end": 234,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 236,
          "end": 242,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 239,
            "end": 242
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 253,
      "end": 295,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 260,
        "decorators": [],
        "name": "F5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 263,
        "end": 294,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 264,
            "end": 286,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 266,
                "end": 275,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 267,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 275,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 277,
                "end": 278,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 278,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 278,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 280,
                "end": 281,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 283,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 285,
                "end": 286,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 286,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 288,
          "end": 294,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 291,
            "end": 294
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 305,
      "end": 348,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 310,
        "end": 312,
        "decorators": [],
        "name": "F6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 315,
        "end": 347,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 316,
            "end": 329,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 318,
                "end": 327,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 319,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 321,
                  "end": 327,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 331,
          "end": 347,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 334,
            "end": 347,
            "exprName": {
              "type": "Identifier",
              "start": 341,
              "end": 347,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 355,
      "end": 409,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 360,
        "end": 362,
        "decorators": [],
        "name": "F7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 365,
        "end": 408,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 366,
            "end": 390,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 368,
                "end": 377,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 368,
                  "end": 369,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 371,
                  "end": 377,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 379,
                "end": 388,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 379,
                  "end": 380,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 388,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 392,
          "end": 408,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 395,
            "end": 408,
            "exprName": {
              "type": "Identifier",
              "start": 402,
              "end": 408,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 419,
      "end": 465,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 426,
        "decorators": [],
        "name": "F8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 429,
        "end": 464,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 430,
            "end": 446,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 432,
                "end": 433,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 433,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 435,
                "end": 444,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 435,
                  "end": 436,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 438,
                  "end": 444,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 448,
          "end": 464,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 451,
            "end": 464,
            "exprName": {
              "type": "Identifier",
              "start": 458,
              "end": 464,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 472,
      "end": 502,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 477,
        "end": 479,
        "decorators": [],
        "name": "F9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 482,
        "end": 501,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 483,
            "end": 492,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 484,
                "end": 485,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 487,
                "end": 488,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 490,
                "end": 491,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 494,
          "end": 501,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 497,
            "end": 501
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 510,
      "end": 545,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 515,
        "end": 517,
        "decorators": [],
        "name": "G1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 520,
        "end": 544,
        "abstract": false,
        "params": [
          {
            "type": "Identifier",
            "start": 525,
            "end": 536,
            "decorators": [],
            "name": "arg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 528,
              "end": 536,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 530,
                "end": 536
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 538,
          "end": 544,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 541,
            "end": 544
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 552,
      "end": 592,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 557,
        "end": 559,
        "decorators": [],
        "name": "G2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 562,
        "end": 591,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 567,
            "end": 583,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 569,
                "end": 578,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 569,
                  "end": 570,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 572,
                  "end": 578,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 580,
              "end": 583,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 582,
                "end": 583,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 583,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 585,
          "end": 591,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 588,
            "end": 591
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 602,
      "end": 648,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 607,
        "end": 609,
        "decorators": [],
        "name": "G3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 612,
        "end": 647,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 617,
            "end": 639,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 619,
                "end": 628,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 619,
                  "end": 620,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 622,
                  "end": 628,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 630,
                "end": 631,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 630,
                  "end": 631,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 633,
                "end": 634,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 634,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 633,
                  "end": 634,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 636,
              "end": 639,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 638,
                "end": 639,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 638,
                  "end": 639,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 641,
          "end": 647,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 644,
            "end": 647
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 658,
      "end": 698,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 663,
        "end": 665,
        "decorators": [],
        "name": "G4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 668,
        "end": 697,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 673,
            "end": 689,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 675,
                "end": 684,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 675,
                  "end": 676,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 678,
                  "end": 684,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 686,
              "end": 689,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 688,
                "end": 689,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 689,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 691,
          "end": 697,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 694,
            "end": 697
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 708,
      "end": 754,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 715,
        "decorators": [],
        "name": "G5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 718,
        "end": 753,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 723,
            "end": 745,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 725,
                "end": 734,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 725,
                  "end": 726,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 734,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 736,
                "end": 737,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 737,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 739,
                "end": 740,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 739,
                  "end": 740,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 742,
              "end": 745,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 744,
                "end": 745,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 744,
                  "end": 745,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 747,
          "end": 753,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 750,
            "end": 753
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 764,
      "end": 811,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 769,
        "end": 771,
        "decorators": [],
        "name": "G6",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 774,
        "end": 810,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 779,
            "end": 792,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 781,
                "end": 790,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 784,
                  "end": 790,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 794,
          "end": 810,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 797,
            "end": 810,
            "exprName": {
              "type": "Identifier",
              "start": 804,
              "end": 810,
              "decorators": [],
              "name": "string",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 818,
      "end": 876,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 823,
        "end": 825,
        "decorators": [],
        "name": "G7",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 828,
        "end": 875,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 833,
            "end": 857,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 835,
                "end": 844,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 835,
                  "end": 836,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 844,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 846,
                "end": 855,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 847,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 849,
                  "end": 855,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 859,
          "end": 875,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 862,
            "end": 875,
            "exprName": {
              "type": "Identifier",
              "start": 869,
              "end": 875,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 886,
      "end": 936,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 891,
        "end": 893,
        "decorators": [],
        "name": "G8",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 896,
        "end": 935,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 901,
            "end": 917,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 903,
                "end": 904,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 904,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 903,
                  "end": 904,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Property",
                "start": 906,
                "end": 915,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 906,
                  "end": 907,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 909,
                  "end": 915,
                  "decorators": [],
                  "name": "number",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 919,
          "end": 935,
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "start": 922,
            "end": 935,
            "exprName": {
              "type": "Identifier",
              "start": 929,
              "end": 935,
              "decorators": [],
              "name": "number",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 943,
      "end": 977,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 948,
        "end": 950,
        "decorators": [],
        "name": "G9",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 953,
        "end": 976,
        "abstract": false,
        "params": [
          {
            "type": "ArrayPattern",
            "start": 958,
            "end": 967,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 959,
                "end": 960,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 962,
                "end": 963,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 965,
                "end": 966,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 969,
          "end": 976,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 972,
            "end": 976
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1099,
      "end": 1136,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1104,
        "end": 1107,
        "decorators": [],
        "name": "F10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1110,
        "end": 1135,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1111,
            "end": 1126,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1113,
                "end": 1124,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1113,
                  "end": 1116,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1124,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1128,
          "end": 1135,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1131,
            "end": 1135
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1146,
      "end": 1181,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1151,
        "end": 1154,
        "decorators": [],
        "name": "F11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1157,
        "end": 1180,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1158,
            "end": 1171,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1160,
                "end": 1169,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1160,
                  "end": 1161,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1163,
                  "end": 1169,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1173,
          "end": 1180,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1176,
            "end": 1180
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1191,
      "end": 1233,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1196,
        "end": 1199,
        "decorators": [],
        "name": "F12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1202,
        "end": 1232,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1203,
            "end": 1223,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1205,
                "end": 1218,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 1206,
                  "end": 1209,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1212,
                  "end": 1218,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1220,
              "end": 1223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1222,
                "end": 1223,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1222,
                  "end": 1223,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1225,
          "end": 1232,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1228,
            "end": 1232
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1243,
      "end": 1280,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1248,
        "end": 1251,
        "decorators": [],
        "name": "F13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 1254,
        "end": 1279,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1255,
            "end": 1270,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1257,
                "end": 1268,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 1258,
                  "end": 1259,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1262,
                  "end": 1268,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1272,
          "end": 1279,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1275,
            "end": 1279
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1290,
      "end": 1331,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1295,
        "end": 1298,
        "decorators": [],
        "name": "G10",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 1301,
        "end": 1330,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1306,
            "end": 1321,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1308,
                "end": 1319,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1308,
                  "end": 1311,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1319,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1323,
          "end": 1330,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1326,
            "end": 1330
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1341,
      "end": 1380,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1346,
        "end": 1349,
        "decorators": [],
        "name": "G11",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 1352,
        "end": 1379,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1357,
            "end": 1370,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1359,
                "end": 1368,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 1359,
                  "end": 1360,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1368,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1372,
          "end": 1379,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1375,
            "end": 1379
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1390,
      "end": 1436,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1395,
        "end": 1398,
        "decorators": [],
        "name": "G12",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 1401,
        "end": 1435,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1406,
            "end": 1426,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1408,
                "end": 1421,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 1409,
                  "end": 1412,
                  "raw": "\"a\"",
                  "value": "a",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1415,
                  "end": 1421,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1423,
              "end": 1426,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1425,
                "end": 1426,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1426,
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1428,
          "end": 1435,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1431,
            "end": 1435
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1446,
      "end": 1487,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1454,
        "decorators": [],
        "name": "G13",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConstructorType",
        "start": 1457,
        "end": 1486,
        "abstract": false,
        "params": [
          {
            "type": "ObjectPattern",
            "start": 1462,
            "end": 1477,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 1464,
                "end": 1475,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 1465,
                  "end": 1466,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 1469,
                  "end": 1475,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 1479,
          "end": 1486,
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 1482,
            "end": 1486
          }
        },
        "typeParameters": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1498,
      "end": 1720,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1510,
        "end": 1720,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1514,
            "end": 1540,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1514,
              "end": 1521,
              "decorators": [],
              "name": "method1",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 1522,
                "end": 1533,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1525,
                  "end": 1533,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1527,
                    "end": 1533
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1534,
              "end": 1539,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1536,
                "end": 1539
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSMethodSignature",
            "start": 1549,
            "end": 1577,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1549,
              "end": 1556,
              "decorators": [],
              "name": "method2",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1557,
                "end": 1570,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1559,
                    "end": 1568,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1559,
                      "end": 1560,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1562,
                      "end": 1568,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1571,
              "end": 1576,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1573,
                "end": 1576
              }
            },
            "static": false,
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1590,
            "end": 1609,
            "params": [
              {
                "type": "Identifier",
                "start": 1591,
                "end": 1602,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1594,
                  "end": 1602,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1596,
                    "end": 1602
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1603,
              "end": 1608,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1605,
                "end": 1608
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 1618,
            "end": 1639,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1619,
                "end": 1632,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1621,
                    "end": 1630,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1621,
                      "end": 1622,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1624,
                      "end": 1630,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1633,
              "end": 1638,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1635,
                "end": 1638
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1652,
            "end": 1675,
            "params": [
              {
                "type": "Identifier",
                "start": 1657,
                "end": 1668,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1660,
                  "end": 1668,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1662,
                    "end": 1668
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1669,
              "end": 1674,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1671,
                "end": 1674
              }
            },
            "typeParameters": null
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 1684,
            "end": 1709,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1689,
                "end": 1702,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1691,
                    "end": 1700,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1691,
                      "end": 1692,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1694,
                      "end": 1700,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1703,
              "end": 1708,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1705,
                "end": 1708
              }
            },
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 1508,
        "end": 1509,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1791,
      "end": 1824,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1821,
        "end": 1824,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1800,
        "end": 1802,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 1803,
          "end": 1819,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 1805,
              "end": 1814,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1805,
                "end": 1806,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 1808,
                "end": 1814,
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1816,
            "end": 1819,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1818,
              "end": 1819,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1818,
                "end": 1819,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1825,
      "end": 1867,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1831,
          "end": 1866,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1831,
            "end": 1833,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1836,
            "end": 1866,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1863,
              "end": 1866,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1845,
                "end": 1861,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1847,
                    "end": 1856,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1847,
                      "end": 1848,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1856,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1858,
                  "end": 1861,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1860,
                    "end": 1861,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1860,
                      "end": 1861,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1868,
      "end": 1911,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1874,
          "end": 1910,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1874,
            "end": 1876,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1879,
            "end": 1910,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1907,
              "end": 1910,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1880,
                "end": 1902,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1882,
                    "end": 1891,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1882,
                      "end": 1883,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1885,
                      "end": 1891,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1893,
                    "end": 1894,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1893,
                      "end": 1894,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1893,
                      "end": 1894,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 1896,
                    "end": 1897,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1896,
                      "end": 1897,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 1896,
                      "end": 1897,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1899,
                  "end": 1902,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1901,
                    "end": 1902,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1901,
                      "end": 1902,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1912,
      "end": 1984,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1918,
          "end": 1983,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1918,
            "end": 1920,
            "decorators": [],
            "name": "f4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "FunctionExpression",
            "start": 1923,
            "end": 1983,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 1965,
              "end": 1983,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1967,
                  "end": 1981,
                  "argument": {
                    "type": "Identifier",
                    "start": 1974,
                    "end": 1980,
                    "decorators": [],
                    "name": "string",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1932,
                "end": 1948,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1934,
                    "end": 1943,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1934,
                      "end": 1935,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 1937,
                      "end": 1943,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1945,
                  "end": 1948,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1947,
                    "end": 1948,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1947,
                      "end": 1948,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1949,
              "end": 1964,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 1951,
                "end": 1964,
                "exprName": {
                  "type": "Identifier",
                  "start": 1958,
                  "end": 1964,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 1985,
      "end": 2042,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1991,
          "end": 2041,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1991,
            "end": 1993,
            "decorators": [],
            "name": "f5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1996,
            "end": 2041,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 2039,
              "end": 2041,
              "raw": "''",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 1997,
                "end": 2019,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1999,
                    "end": 2008,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1999,
                      "end": 2000,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 2002,
                      "end": 2008,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2010,
                    "end": 2011,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2010,
                      "end": 2011,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 2010,
                      "end": 2011,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2013,
                    "end": 2014,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2013,
                      "end": 2014,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 2013,
                      "end": 2014,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2016,
                  "end": 2019,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2018,
                    "end": 2019,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2018,
                      "end": 2019,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2020,
              "end": 2035,
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "start": 2022,
                "end": 2035,
                "exprName": {
                  "type": "Identifier",
                  "start": 2029,
                  "end": 2035,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2043,
      "end": 2091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2049,
          "end": 2090,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2049,
            "end": 2053,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2056,
            "end": 2090,
            "properties": [
              {
                "type": "Property",
                "start": 2060,
                "end": 2088,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2060,
                  "end": 2066,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2066,
                  "end": 2088,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2085,
                    "end": 2088,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 2067,
                      "end": 2083,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2069,
                          "end": 2078,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2069,
                            "end": 2070,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 2072,
                            "end": 2078,
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2080,
                        "end": 2083,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2082,
                          "end": 2083,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2082,
                            "end": 2083,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2092,
      "end": 2170,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2098,
          "end": 2169,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2098,
            "end": 2102,
            "decorators": [],
            "name": "obj2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2105,
            "end": 2169,
            "properties": [
              {
                "type": "Property",
                "start": 2109,
                "end": 2167,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 2109,
                  "end": 2115,
                  "decorators": [],
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 2115,
                  "end": 2167,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 2149,
                    "end": 2167,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 2151,
                        "end": 2165,
                        "argument": {
                          "type": "Identifier",
                          "start": 2158,
                          "end": 2164,
                          "decorators": [],
                          "name": "string",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "ObjectPattern",
                      "start": 2116,
                      "end": 2132,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2118,
                          "end": 2127,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2118,
                            "end": 2119,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 2121,
                            "end": 2127,
                            "decorators": [],
                            "name": "string",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2129,
                        "end": 2132,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2131,
                          "end": 2132,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2131,
                            "end": 2132,
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 2133,
                    "end": 2148,
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 2135,
                      "end": 2148,
                      "exprName": {
                        "type": "Identifier",
                        "start": 2142,
                        "end": 2148,
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "typeParameters": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2171,
      "end": 2209,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2206,
        "end": 2209,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2180,
        "end": 2182,
        "decorators": [],
        "name": "f6",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2183,
          "end": 2204,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 2185,
              "end": 2199,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2185,
                "end": 2186,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 2188,
                "end": 2199,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 2188,
                  "end": 2194,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 2197,
                  "end": 2199,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2201,
            "end": 2204,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2203,
              "end": 2204,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2203,
                "end": 2204,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2210,
      "end": 2258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2216,
          "end": 2257,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2216,
            "end": 2218,
            "decorators": [],
            "name": "f7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2221,
            "end": 2257,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2254,
              "end": 2257,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2222,
                "end": 2249,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2224,
                    "end": 2238,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2224,
                      "end": 2225,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 2227,
                      "end": 2238,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 2227,
                        "end": 2233,
                        "decorators": [],
                        "name": "string",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 2236,
                        "end": 2238,
                        "raw": "\"\"",
                        "value": "",
                        "regex": null,
                        "bigint": null
                      },
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2240,
                    "end": 2241,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2240,
                      "end": 2241,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 2240,
                      "end": 2241,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 2243,
                    "end": 2244,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2243,
                      "end": 2244,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 2243,
                      "end": 2244,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2246,
                  "end": 2249,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2248,
                    "end": 2249,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2248,
                      "end": 2249,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 2259,
      "end": 2298,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2265,
          "end": 2297,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2265,
            "end": 2267,
            "decorators": [],
            "name": "f8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2270,
            "end": 2297,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2294,
              "end": 2297,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2271,
                "end": 2289,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2273,
                    "end": 2284,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 2273,
                      "end": 2276,
                      "raw": "\"a\"",
                      "value": "a",
                      "regex": null,
                      "bigint": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 2278,
                      "end": 2284,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2286,
                  "end": 2289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2288,
                    "end": 2289,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2288,
                      "end": 2289,
                      "decorators": [],
                      "name": "O",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2299,
      "end": 2330,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2327,
        "end": 2330,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2308,
        "end": 2310,
        "decorators": [],
        "name": "f9",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2312,
          "end": 2325,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 2314,
              "end": 2323,
              "computed": false,
              "key": {
                "type": "Literal",
                "start": 2314,
                "end": 2315,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 2317,
                "end": 2323,
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 2330,
      "end": 2331
    },
    {
      "type": "FunctionDeclaration",
      "start": 2332,
      "end": 2371,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2368,
        "end": 2371,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2341,
        "end": 2344,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2346,
          "end": 2366,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 2348,
              "end": 2361,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 2349,
                "end": 2352,
                "raw": "\"a\"",
                "value": "a",
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 2355,
                "end": 2361,
                "decorators": [],
                "name": "string",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2363,
            "end": 2366,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2365,
              "end": 2366,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2365,
                "end": 2366,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 2371,
      "end": 2372
    },
    {
      "type": "VariableDeclaration",
      "start": 2373,
      "end": 2411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2379,
          "end": 2410,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2379,
            "end": 2382,
            "decorators": [],
            "name": "f11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 2386,
            "end": 2410,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 2407,
              "end": 2410,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 2387,
                "end": 2402,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 2389,
                    "end": 2400,
                    "computed": true,
                    "key": {
                      "type": "Literal",
                      "start": 2390,
                      "end": 2391,
                      "raw": "2",
                      "value": 2,
                      "regex": null,
                      "bigint": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 2394,
                      "end": 2400,
                      "decorators": [],
                      "name": "string",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 2473,
      "end": 2539,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2524,
        "end": 2539,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2526,
            "end": 2537,
            "argument": {
              "type": "Literal",
              "start": 2533,
              "end": 2536,
              "raw": "\"a\"",
              "value": "a",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2482,
        "end": 2485,
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2486,
          "end": 2507,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 2488,
              "end": 2502,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2488,
                "end": 2489,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "AssignmentPattern",
                "start": 2491,
                "end": 2502,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 2491,
                  "end": 2497,
                  "decorators": [],
                  "name": "string",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 2500,
                  "end": 2502,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                },
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2504,
            "end": 2507,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2506,
              "end": 2507,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 2506,
                "end": 2507,
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2508,
        "end": 2523,
        "typeAnnotation": {
          "type": "TSTypeQuery",
          "start": 2510,
          "end": 2523,
          "exprName": {
            "type": "Identifier",
            "start": 2517,
            "end": 2523,
            "decorators": [],
            "name": "string",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
