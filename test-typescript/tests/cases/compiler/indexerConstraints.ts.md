__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 555,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 26,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 26,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 24,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 63,
      "body": {
        "type": "TSInterfaceBody",
        "start": 49,
        "end": 63,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 51,
            "end": 61,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 47,
          "end": 48,
          "expression": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 38,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 113,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 113,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 96,
            "end": 111,
            "parameters": [
              {
                "type": "Identifier",
                "start": 97,
                "end": 106,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 98,
                  "end": 106,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 100,
                    "end": 106
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 110,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 110,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 88,
        "end": 89,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 114,
      "end": 149,
      "body": {
        "type": "TSInterfaceBody",
        "start": 126,
        "end": 149,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 132,
            "end": 147,
            "parameters": [
              {
                "type": "Identifier",
                "start": 133,
                "end": 142,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 134,
                  "end": 142,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 136,
                    "end": 142
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 125,
        "decorators": [],
        "name": "D",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 163,
      "end": 198,
      "body": {
        "type": "TSInterfaceBody",
        "start": 175,
        "end": 198,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 181,
            "end": 196,
            "parameters": [
              {
                "type": "Identifier",
                "start": 182,
                "end": 191,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 183,
                  "end": 191,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 185,
                    "end": 191
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 192,
              "end": 195,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 194,
                "end": 195,
                "typeName": {
                  "type": "Identifier",
                  "start": 194,
                  "end": 195,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 173,
        "end": 174,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 199,
      "end": 234,
      "body": {
        "type": "TSInterfaceBody",
        "start": 211,
        "end": 234,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 217,
            "end": 232,
            "parameters": [
              {
                "type": "Identifier",
                "start": 218,
                "end": 227,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 219,
                  "end": 227,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 221,
                    "end": 227
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 228,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 209,
        "end": 210,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 251,
      "end": 286,
      "body": {
        "type": "TSInterfaceBody",
        "start": 263,
        "end": 286,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 269,
            "end": 284,
            "parameters": [
              {
                "type": "Identifier",
                "start": 270,
                "end": 279,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 271,
                  "end": 279,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 273,
                    "end": 279
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 283,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 282,
                "end": 283,
                "typeName": {
                  "type": "Identifier",
                  "start": 282,
                  "end": 283,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 262,
        "decorators": [],
        "name": "F",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 287,
      "end": 332,
      "body": {
        "type": "TSInterfaceBody",
        "start": 309,
        "end": 332,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 315,
            "end": 330,
            "parameters": [
              {
                "type": "Identifier",
                "start": 316,
                "end": 325,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 319,
                    "end": 325
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 326,
              "end": 329,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 328,
                "end": 329,
                "typeName": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 307,
          "end": 308,
          "expression": {
            "type": "Identifier",
            "start": 307,
            "end": 308,
            "decorators": [],
            "name": "F",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 297,
        "end": 298,
        "decorators": [],
        "name": "G",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 347,
      "end": 382,
      "body": {
        "type": "TSInterfaceBody",
        "start": 359,
        "end": 382,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 365,
            "end": 380,
            "parameters": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 375,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 367,
                  "end": 375,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 369,
                    "end": 375
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 376,
              "end": 379,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 378,
                "end": 379,
                "typeName": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 379,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 357,
        "end": 358,
        "decorators": [],
        "name": "H",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 383,
      "end": 428,
      "body": {
        "type": "TSInterfaceBody",
        "start": 405,
        "end": 428,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 411,
            "end": 426,
            "parameters": [
              {
                "type": "Identifier",
                "start": 412,
                "end": 421,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 413,
                  "end": 421,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 425,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 424,
                "end": 425,
                "typeName": {
                  "type": "Identifier",
                  "start": 424,
                  "end": 425,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 403,
          "end": 404,
          "expression": {
            "type": "Identifier",
            "start": 403,
            "end": 404,
            "decorators": [],
            "name": "H",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 393,
        "end": 394,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 453,
      "end": 489,
      "body": {
        "type": "TSInterfaceBody",
        "start": 465,
        "end": 489,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 471,
            "end": 487,
            "parameters": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 481,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 473,
                  "end": 481,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 475,
                    "end": 481
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 482,
              "end": 486,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 484,
                "end": 486,
                "members": []
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 464,
        "decorators": [],
        "name": "J",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 490,
      "end": 555,
      "body": {
        "type": "TSInterfaceBody",
        "start": 512,
        "end": 555,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 518,
            "end": 533,
            "parameters": [
              {
                "type": "Identifier",
                "start": 519,
                "end": 528,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 520,
                  "end": 528,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 522,
                    "end": 528
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 529,
              "end": 532,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 531,
                "end": 532,
                "typeName": {
                  "type": "Identifier",
                  "start": 531,
                  "end": 532,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSIndexSignature",
            "start": 538,
            "end": 553,
            "parameters": [
              {
                "type": "Identifier",
                "start": 539,
                "end": 548,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 540,
                  "end": 548,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 542,
                    "end": 548
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 552,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 551,
                "end": 552,
                "typeName": {
                  "type": "Identifier",
                  "start": 551,
                  "end": 552,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 510,
          "end": 511,
          "expression": {
            "type": "Identifier",
            "start": 510,
            "end": 511,
            "decorators": [],
            "name": "J",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 501,
        "decorators": [],
        "name": "K",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
