intersectionTypeNormalization.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2147,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 25,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 25,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 14,
            "end": 23,
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
                "type": "TSStringKeyword",
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
      "start": 26,
      "end": 51,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 51,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 41,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 36,
        "end": 37,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 52,
      "end": 77,
      "body": {
        "type": "TSInterfaceBody",
        "start": 64,
        "end": 77,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 66,
            "end": 75,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 67,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 75,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 69,
                "end": 75
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 63,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 78,
      "end": 103,
      "body": {
        "type": "TSInterfaceBody",
        "start": 90,
        "end": 103,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 92,
            "end": 101,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 92,
              "end": 93,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 101,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 95,
                "end": 101
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
      "type": "TSTypeAliasDeclaration",
      "start": 148,
      "end": 176,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 153,
        "end": 155,
        "decorators": [],
        "name": "X1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 158,
        "end": 175,
        "types": [
          {
            "type": "TSUnionType",
            "start": 159,
            "end": 164,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 159,
                "end": 160,
                "typeName": {
                  "type": "Identifier",
                  "start": 159,
                  "end": 160,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 163,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 163,
                  "end": 164,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 169,
            "end": 174,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 169,
                "end": 170,
                "typeName": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 170,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 173,
                "end": 174,
                "typeName": {
                  "type": "Identifier",
                  "start": 173,
                  "end": 174,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 177,
      "end": 212,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 182,
        "end": 184,
        "decorators": [],
        "name": "X2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 187,
        "end": 212,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 187,
            "end": 198,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 187,
                "end": 188,
                "typeName": {
                  "type": "Identifier",
                  "start": 187,
                  "end": 188,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 192,
                "end": 197,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 192,
                    "end": 193,
                    "typeName": {
                      "type": "Identifier",
                      "start": 192,
                      "end": 193,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 197,
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 197,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 201,
            "end": 212,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 206,
                "end": 211,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 206,
                    "end": 207,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 210,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 213,
      "end": 253,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 218,
        "end": 220,
        "decorators": [],
        "name": "X3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 223,
        "end": 252,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 223,
            "end": 228,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 227,
                "end": 228,
                "typeName": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 228,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 231,
            "end": 236,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 235,
                "end": 236,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 239,
            "end": 244,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 239,
                "end": 240,
                "typeName": {
                  "type": "Identifier",
                  "start": 239,
                  "end": 240,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 247,
            "end": 252,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 247,
                "end": 248,
                "typeName": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 248,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 251,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 255,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 259,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 259,
            "end": 264,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 260,
              "end": 264,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 264,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 264,
                  "decorators": [],
                  "name": "X1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 276,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 270,
          "end": 275,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 270,
            "end": 275,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 271,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 273,
                "end": 275,
                "typeName": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 275,
                  "decorators": [],
                  "name": "X2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 277,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 281,
          "end": 286,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 281,
            "end": 286,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 286,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 286,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 286,
                  "decorators": [],
                  "name": "X3",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 289,
      "end": 314,
      "body": {
        "type": "TSInterfaceBody",
        "start": 301,
        "end": 314,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 303,
            "end": 312,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 303,
              "end": 304,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 312,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 306,
                "end": 312
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 299,
        "end": 300,
        "decorators": [],
        "name": "X",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 315,
      "end": 340,
      "body": {
        "type": "TSInterfaceBody",
        "start": 327,
        "end": 340,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 329,
            "end": 338,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 330,
              "end": 338,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 332,
                "end": 338
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 326,
        "decorators": [],
        "name": "Y",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 385,
      "end": 417,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 390,
        "end": 392,
        "decorators": [],
        "name": "Y1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 395,
        "end": 416,
        "types": [
          {
            "type": "TSUnionType",
            "start": 396,
            "end": 405,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 396,
                "end": 397,
                "typeName": {
                  "type": "Identifier",
                  "start": 396,
                  "end": 397,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSIntersectionType",
                "start": 400,
                "end": 405,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 400,
                    "end": 401,
                    "typeName": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 401,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 404,
                    "end": 405,
                    "typeName": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "Y",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 410,
            "end": 415,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 410,
                "end": 411,
                "typeName": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 411,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 414,
                "end": 415,
                "typeName": {
                  "type": "Identifier",
                  "start": 414,
                  "end": 415,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 418,
      "end": 457,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 425,
        "decorators": [],
        "name": "Y2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 428,
        "end": 457,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 428,
            "end": 439,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 428,
                "end": 429,
                "typeName": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 433,
                "end": 438,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 433,
                    "end": 434,
                    "typeName": {
                      "type": "Identifier",
                      "start": 433,
                      "end": 434,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 437,
                    "end": 438,
                    "typeName": {
                      "type": "Identifier",
                      "start": 437,
                      "end": 438,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 442,
            "end": 457,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 442,
                "end": 443,
                "typeName": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 443,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 446,
                "end": 447,
                "typeName": {
                  "type": "Identifier",
                  "start": 446,
                  "end": 447,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 451,
                "end": 456,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 451,
                    "end": 452,
                    "typeName": {
                      "type": "Identifier",
                      "start": 451,
                      "end": 452,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 455,
                    "end": 456,
                    "typeName": {
                      "type": "Identifier",
                      "start": 455,
                      "end": 456,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 458,
      "end": 506,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 465,
        "decorators": [],
        "name": "Y3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 468,
        "end": 505,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 468,
            "end": 473,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 468,
                "end": 469,
                "typeName": {
                  "type": "Identifier",
                  "start": 468,
                  "end": 469,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 472,
                "end": 473,
                "typeName": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 476,
            "end": 481,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 476,
                "end": 477,
                "typeName": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 480,
                "end": 481,
                "typeName": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 481,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 484,
            "end": 493,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 484,
                "end": 485,
                "typeName": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 488,
                "end": 489,
                "typeName": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 489,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 492,
                "end": 493,
                "typeName": {
                  "type": "Identifier",
                  "start": 492,
                  "end": 493,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 496,
            "end": 505,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 496,
                "end": 497,
                "typeName": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 497,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 500,
                "end": 501,
                "typeName": {
                  "type": "Identifier",
                  "start": 500,
                  "end": 501,
                  "decorators": [],
                  "name": "Y",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 504,
                "end": 505,
                "typeName": {
                  "type": "Identifier",
                  "start": 504,
                  "end": 505,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 508,
      "end": 518,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 517,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 517,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 517,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 515,
                "end": 517,
                "typeName": {
                  "type": "Identifier",
                  "start": 515,
                  "end": 517,
                  "decorators": [],
                  "name": "Y1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 519,
      "end": 529,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 528,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 528,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 524,
              "end": 528,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 526,
                "end": 528,
                "typeName": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 528,
                  "decorators": [],
                  "name": "Y2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 539,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 539,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 535,
              "end": 539,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 537,
                "end": 539,
                "typeName": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 539,
                  "decorators": [],
                  "name": "Y3",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 542,
      "end": 567,
      "body": {
        "type": "TSInterfaceBody",
        "start": 554,
        "end": 567,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 556,
            "end": 565,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 556,
              "end": 557,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 557,
              "end": 565,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 559,
                "end": 565
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 553,
        "decorators": [],
        "name": "M",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 568,
      "end": 593,
      "body": {
        "type": "TSInterfaceBody",
        "start": 580,
        "end": 593,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 582,
            "end": 591,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 582,
              "end": 583,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 583,
              "end": 591,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 585,
                "end": 591
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 578,
        "end": 579,
        "decorators": [],
        "name": "N",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 638,
      "end": 676,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 643,
        "end": 645,
        "decorators": [],
        "name": "Z1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 648,
        "end": 675,
        "types": [
          {
            "type": "TSUnionType",
            "start": 649,
            "end": 664,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 649,
                "end": 650,
                "typeName": {
                  "type": "Identifier",
                  "start": 649,
                  "end": 650,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSIntersectionType",
                "start": 653,
                "end": 664,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 653,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 653,
                      "end": 654,
                      "decorators": [],
                      "name": "X",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 658,
                    "end": 663,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 658,
                        "end": 659,
                        "typeName": {
                          "type": "Identifier",
                          "start": 658,
                          "end": 659,
                          "decorators": [],
                          "name": "M",
                          "optional": false
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 662,
                        "end": 663,
                        "typeName": {
                          "type": "Identifier",
                          "start": 662,
                          "end": 663,
                          "decorators": [],
                          "name": "N",
                          "optional": false
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "type": "TSUnionType",
            "start": 669,
            "end": 674,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 669,
                "end": 670,
                "typeName": {
                  "type": "Identifier",
                  "start": 669,
                  "end": 670,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 673,
                "end": 674,
                "typeName": {
                  "type": "Identifier",
                  "start": 673,
                  "end": 674,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 677,
      "end": 722,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 682,
        "end": 684,
        "decorators": [],
        "name": "Z2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 687,
        "end": 722,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 687,
            "end": 698,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 687,
                "end": 688,
                "typeName": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 688,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 692,
                "end": 697,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 692,
                    "end": 693,
                    "typeName": {
                      "type": "Identifier",
                      "start": 692,
                      "end": 693,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 696,
                    "end": 697,
                    "typeName": {
                      "type": "Identifier",
                      "start": 696,
                      "end": 697,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 701,
            "end": 722,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 701,
                "end": 702,
                "typeName": {
                  "type": "Identifier",
                  "start": 701,
                  "end": 702,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 706,
                "end": 711,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 706,
                    "end": 707,
                    "typeName": {
                      "type": "Identifier",
                      "start": 706,
                      "end": 707,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 710,
                    "end": 711,
                    "typeName": {
                      "type": "Identifier",
                      "start": 710,
                      "end": 711,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "TSUnionType",
                "start": 716,
                "end": 721,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 716,
                    "end": 717,
                    "typeName": {
                      "type": "Identifier",
                      "start": 716,
                      "end": 717,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 720,
                    "end": 721,
                    "typeName": {
                      "type": "Identifier",
                      "start": 720,
                      "end": 721,
                      "decorators": [],
                      "name": "D",
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 723,
      "end": 783,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 728,
        "end": 730,
        "decorators": [],
        "name": "Z3",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 733,
        "end": 782,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 733,
            "end": 738,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 733,
                "end": 734,
                "typeName": {
                  "type": "Identifier",
                  "start": 733,
                  "end": 734,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 737,
                "end": 738,
                "typeName": {
                  "type": "Identifier",
                  "start": 737,
                  "end": 738,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 741,
            "end": 746,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 741,
                "end": 742,
                "typeName": {
                  "type": "Identifier",
                  "start": 741,
                  "end": 742,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 745,
                "end": 746,
                "typeName": {
                  "type": "Identifier",
                  "start": 745,
                  "end": 746,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 749,
            "end": 764,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 749,
                "end": 750,
                "typeName": {
                  "type": "Identifier",
                  "start": 749,
                  "end": 750,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 754,
                "end": 759,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 754,
                    "end": 755,
                    "typeName": {
                      "type": "Identifier",
                      "start": 754,
                      "end": 755,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 758,
                    "end": 759,
                    "typeName": {
                      "type": "Identifier",
                      "start": 758,
                      "end": 759,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 763,
                "end": 764,
                "typeName": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 764,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 767,
            "end": 782,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 767,
                "end": 768,
                "typeName": {
                  "type": "Identifier",
                  "start": 767,
                  "end": 768,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSUnionType",
                "start": 772,
                "end": 777,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 772,
                    "end": 773,
                    "typeName": {
                      "type": "Identifier",
                      "start": 772,
                      "end": 773,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 776,
                    "end": 777,
                    "typeName": {
                      "type": "Identifier",
                      "start": 776,
                      "end": 777,
                      "decorators": [],
                      "name": "N",
                      "optional": false
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 781,
                "end": 782,
                "typeName": {
                  "type": "Identifier",
                  "start": 781,
                  "end": 782,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 784,
      "end": 856,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 789,
        "end": 791,
        "decorators": [],
        "name": "Z4",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 794,
        "end": 855,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 794,
            "end": 799,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 794,
                "end": 795,
                "typeName": {
                  "type": "Identifier",
                  "start": 794,
                  "end": 795,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 798,
                "end": 799,
                "typeName": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 802,
            "end": 807,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 802,
                "end": 803,
                "typeName": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 803,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 806,
                "end": 807,
                "typeName": {
                  "type": "Identifier",
                  "start": 806,
                  "end": 807,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 810,
            "end": 819,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 810,
                "end": 811,
                "typeName": {
                  "type": "Identifier",
                  "start": 810,
                  "end": 811,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 814,
                "end": 815,
                "typeName": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 818,
                "end": 819,
                "typeName": {
                  "type": "Identifier",
                  "start": 818,
                  "end": 819,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 822,
            "end": 831,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 822,
                "end": 823,
                "typeName": {
                  "type": "Identifier",
                  "start": 822,
                  "end": 823,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 826,
                "end": 827,
                "typeName": {
                  "type": "Identifier",
                  "start": 826,
                  "end": 827,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 830,
                "end": 831,
                "typeName": {
                  "type": "Identifier",
                  "start": 830,
                  "end": 831,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 834,
            "end": 843,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 834,
                "end": 835,
                "typeName": {
                  "type": "Identifier",
                  "start": 834,
                  "end": 835,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 838,
                "end": 839,
                "typeName": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 839,
                  "decorators": [],
                  "name": "M",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 842,
                "end": 843,
                "typeName": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 843,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 846,
            "end": 855,
            "types": [
              {
                "type": "TSTypeReference",
                "start": 846,
                "end": 847,
                "typeName": {
                  "type": "Identifier",
                  "start": 846,
                  "end": 847,
                  "decorators": [],
                  "name": "X",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 850,
                "end": 851,
                "typeName": {
                  "type": "Identifier",
                  "start": 850,
                  "end": 851,
                  "decorators": [],
                  "name": "N",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 854,
                "end": 855,
                "typeName": {
                  "type": "Identifier",
                  "start": 854,
                  "end": 855,
                  "decorators": [],
                  "name": "D",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 858,
      "end": 868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 862,
          "end": 867,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 862,
            "end": 867,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 863,
              "end": 867,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 865,
                "end": 867,
                "typeName": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 867,
                  "decorators": [],
                  "name": "Z1",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 869,
      "end": 879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 873,
          "end": 878,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 873,
            "end": 878,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 874,
              "end": 878,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 876,
                "end": 878,
                "typeName": {
                  "type": "Identifier",
                  "start": 876,
                  "end": 878,
                  "decorators": [],
                  "name": "Z2",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 880,
      "end": 890,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 884,
          "end": 889,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 884,
            "end": 889,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 885,
              "end": 889,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 887,
                "end": 889,
                "typeName": {
                  "type": "Identifier",
                  "start": 887,
                  "end": 889,
                  "decorators": [],
                  "name": "Z3",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 901,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 900,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 895,
            "end": 900,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 896,
              "end": 900,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 898,
                "end": 900,
                "typeName": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 900,
                  "decorators": [],
                  "name": "Z4",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 924,
      "end": 967,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 929,
        "end": 937,
        "decorators": [],
        "name": "ToString",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 940,
        "end": 967,
        "members": [
          {
            "type": "TSMethodSignature",
            "start": 946,
            "end": 965,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 946,
              "end": 954,
              "decorators": [],
              "name": "toString",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 956,
              "end": 964,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 958,
                "end": 964
              }
            },
            "static": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 969,
      "end": 1068,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 974,
        "end": 984,
        "decorators": [],
        "name": "BoxedValue",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 987,
        "end": 1068,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 987,
            "end": 1018,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 989,
                "end": 1001,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 989,
                  "end": 993,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 993,
                  "end": 1000,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 995,
                    "end": 1000,
                    "literal": {
                      "type": "Literal",
                      "start": 995,
                      "end": 1000,
                      "raw": "'int'",
                      "value": "int"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1005,
                "end": 1016,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1005,
                  "end": 1008,
                  "decorators": [],
                  "name": "num",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1008,
                  "end": 1016,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1010,
                    "end": 1016
                  }
                }
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1037,
            "end": 1068,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1039,
                "end": 1054,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1039,
                  "end": 1043,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1043,
                  "end": 1053,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1045,
                    "end": 1053,
                    "literal": {
                      "type": "Literal",
                      "start": 1045,
                      "end": 1053,
                      "raw": "'string'",
                      "value": "string"
                    }
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1055,
                "end": 1066,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1055,
                  "end": 1058,
                  "decorators": [],
                  "name": "str",
                  "optional": false
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1058,
                  "end": 1066,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1060,
                    "end": 1066
                  }
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1070,
      "end": 1115,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1075,
        "end": 1091,
        "decorators": [],
        "name": "IntersectionFail",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1094,
        "end": 1115,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1094,
            "end": 1104,
            "typeName": {
              "type": "Identifier",
              "start": 1094,
              "end": 1104,
              "decorators": [],
              "name": "BoxedValue",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 1107,
            "end": 1115,
            "typeName": {
              "type": "Identifier",
              "start": 1107,
              "end": 1115,
              "decorators": [],
              "name": "ToString",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1117,
      "end": 1254,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1140,
        "decorators": [],
        "name": "IntersectionInline",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1143,
        "end": 1254,
        "types": [
          {
            "type": "TSIntersectionType",
            "start": 1143,
            "end": 1185,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 1143,
                "end": 1174,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1145,
                    "end": 1157,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1145,
                      "end": 1149,
                      "decorators": [],
                      "name": "kind",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1149,
                      "end": 1156,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 1151,
                        "end": 1156,
                        "literal": {
                          "type": "Literal",
                          "start": 1151,
                          "end": 1156,
                          "raw": "'int'",
                          "value": "int"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1161,
                    "end": 1172,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1164,
                      "decorators": [],
                      "name": "num",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1164,
                      "end": 1172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1166,
                        "end": 1172
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 1177,
                "end": 1185,
                "typeName": {
                  "type": "Identifier",
                  "start": 1177,
                  "end": 1185,
                  "decorators": [],
                  "name": "ToString",
                  "optional": false
                }
              }
            ]
          },
          {
            "type": "TSIntersectionType",
            "start": 1212,
            "end": 1254,
            "types": [
              {
                "type": "TSTypeLiteral",
                "start": 1212,
                "end": 1243,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1214,
                    "end": 1229,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1214,
                      "end": 1218,
                      "decorators": [],
                      "name": "kind",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1218,
                      "end": 1228,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 1220,
                        "end": 1228,
                        "literal": {
                          "type": "Literal",
                          "start": 1220,
                          "end": 1228,
                          "raw": "'string'",
                          "value": "string"
                        }
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 1230,
                    "end": 1241,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1230,
                      "end": 1233,
                      "decorators": [],
                      "name": "str",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1233,
                      "end": 1241,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1235,
                        "end": 1241
                      }
                    }
                  }
                ]
              },
              {
                "type": "TSTypeReference",
                "start": 1246,
                "end": 1254,
                "typeName": {
                  "type": "Identifier",
                  "start": 1246,
                  "end": 1254,
                  "decorators": [],
                  "name": "ToString",
                  "optional": false
                }
              }
            ]
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1256,
      "end": 1409,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1315,
        "end": 1409,
        "body": [
          {
            "type": "IfStatement",
            "start": 1321,
            "end": 1385,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1347,
              "end": 1385,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1357,
                  "end": 1379,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 1364,
                    "end": 1378,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 1364,
                      "end": 1366,
                      "raw": "''",
                      "value": ""
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 1369,
                      "end": 1378,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 1369,
                        "end": 1374,
                        "decorators": [],
                        "name": "value",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 1375,
                        "end": 1378,
                        "decorators": [],
                        "name": "num",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 1325,
              "end": 1345,
              "operator": "===",
              "left": {
                "type": "MemberExpression",
                "start": 1325,
                "end": 1335,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1325,
                  "end": 1330,
                  "decorators": [],
                  "name": "value",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1331,
                  "end": 1335,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 1340,
                "end": 1345,
                "raw": "'int'",
                "value": "int"
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 1390,
            "end": 1407,
            "argument": {
              "type": "MemberExpression",
              "start": 1397,
              "end": 1406,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1397,
                "end": 1402,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1403,
                "end": 1406,
                "decorators": [],
                "name": "str",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1265,
        "end": 1281,
        "decorators": [],
        "name": "getValueAsString",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1282,
          "end": 1305,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1287,
            "end": 1305,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1289,
              "end": 1305,
              "typeName": {
                "type": "Identifier",
                "start": 1289,
                "end": 1305,
                "decorators": [],
                "name": "IntersectionFail",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1306,
        "end": 1314,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 1308,
          "end": 1314
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 1433,
      "end": 1925,
      "body": {
        "type": "TSModuleBlock",
        "start": 1449,
        "end": 1925,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 1455,
            "end": 1612,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 1462,
              "end": 1612,
              "body": {
                "type": "TSEnumBody",
                "start": 1475,
                "end": 1612,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 1485,
                    "end": 1487,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1485,
                      "end": 1487,
                      "decorators": [],
                      "name": "a1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1497,
                    "end": 1499,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1497,
                      "end": 1499,
                      "decorators": [],
                      "name": "a2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1509,
                    "end": 1511,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1509,
                      "end": 1511,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1576,
                    "end": 1579,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1576,
                      "end": 1579,
                      "decorators": [],
                      "name": "a75",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1589,
                    "end": 1592,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1592,
                      "decorators": [],
                      "name": "a76",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1602,
                    "end": 1605,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1602,
                      "end": 1605,
                      "decorators": [],
                      "name": "a77",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 1473,
                "end": 1474,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1617,
            "end": 1749,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 1624,
              "end": 1749,
              "body": {
                "type": "TSEnumBody",
                "start": 1637,
                "end": 1749,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 1647,
                    "end": 1649,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1647,
                      "end": 1649,
                      "decorators": [],
                      "name": "b1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1659,
                    "end": 1661,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1659,
                      "end": 1661,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1726,
                    "end": 1729,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1726,
                      "end": 1729,
                      "decorators": [],
                      "name": "b86",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1739,
                    "end": 1742,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1739,
                      "end": 1742,
                      "decorators": [],
                      "name": "b87",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 1635,
                "end": 1636,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1754,
            "end": 1888,
            "attributes": [],
            "declaration": {
              "type": "TSEnumDeclaration",
              "start": 1761,
              "end": 1888,
              "body": {
                "type": "TSEnumBody",
                "start": 1774,
                "end": 1888,
                "members": [
                  {
                    "type": "TSEnumMember",
                    "start": 1784,
                    "end": 1786,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1784,
                      "end": 1786,
                      "decorators": [],
                      "name": "c1",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1796,
                    "end": 1798,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1796,
                      "end": 1798,
                      "decorators": [],
                      "name": "c2",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1863,
                    "end": 1867,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1863,
                      "end": 1867,
                      "decorators": [],
                      "name": "c210",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSEnumMember",
                    "start": 1877,
                    "end": 1881,
                    "computed": false,
                    "id": {
                      "type": "Identifier",
                      "start": 1877,
                      "end": 1881,
                      "decorators": [],
                      "name": "c211",
                      "optional": false
                    }
                  }
                ]
              },
              "const": true,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 1772,
                "end": 1773,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 1893,
            "end": 1923,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 1900,
              "end": 1923,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 1905,
                "end": 1910,
                "decorators": [],
                "name": "Genre",
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1913,
                "end": 1922,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1913,
                    "end": 1914,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1913,
                      "end": 1914,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1917,
                    "end": 1918,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1917,
                      "end": 1918,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1921,
                    "end": 1922,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1921,
                      "end": 1922,
                      "decorators": [],
                      "name": "C",
                      "optional": false
                    }
                  }
                ]
              }
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 1443,
        "end": 1448,
        "decorators": [],
        "name": "enums",
        "optional": false
      },
      "kind": "namespace"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1927,
      "end": 1968,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1932,
        "end": 1935,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1938,
        "end": 1967,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1944,
            "end": 1965,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1944,
              "end": 1951,
              "decorators": [],
              "name": "genreId",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1951,
              "end": 1964,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1953,
                "end": 1964,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1953,
                  "end": 1964,
                  "left": {
                    "type": "Identifier",
                    "start": 1953,
                    "end": 1958,
                    "decorators": [],
                    "name": "enums",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 1959,
                    "end": 1964,
                    "decorators": [],
                    "name": "Genre",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1970,
      "end": 2011,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1975,
        "end": 1978,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1981,
        "end": 2010,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1987,
            "end": 2008,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1987,
              "end": 1994,
              "decorators": [],
              "name": "genreId",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1994,
              "end": 2007,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1996,
                "end": 2007,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 1996,
                  "end": 2007,
                  "left": {
                    "type": "Identifier",
                    "start": 1996,
                    "end": 2001,
                    "decorators": [],
                    "name": "enums",
                    "optional": false
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 2002,
                    "end": 2007,
                    "decorators": [],
                    "name": "Genre",
                    "optional": false
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2013,
      "end": 2037,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2018,
        "end": 2024,
        "decorators": [],
        "name": "FooBar",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 2027,
        "end": 2036,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2027,
            "end": 2030,
            "typeName": {
              "type": "Identifier",
              "start": 2027,
              "end": 2030,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2033,
            "end": 2036,
            "typeName": {
              "type": "Identifier",
              "start": 2033,
              "end": 2036,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2039,
      "end": 2147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2061,
        "end": 2147,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2067,
            "end": 2092,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2073,
                "end": 2091,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2073,
                  "end": 2076,
                  "decorators": [],
                  "name": "val",
                  "optional": false
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 2079,
                  "end": 2091,
                  "expression": {
                    "type": "Identifier",
                    "start": 2079,
                    "end": 2081,
                    "decorators": [],
                    "name": "so",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2085,
                    "end": 2091,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2085,
                      "end": 2091,
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2097,
            "end": 2125,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2103,
                "end": 2124,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2110,
                  "decorators": [],
                  "name": "isGenre",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2113,
                  "end": 2124,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2113,
                    "end": 2116,
                    "decorators": [],
                    "name": "val",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2117,
                    "end": 2124,
                    "decorators": [],
                    "name": "genreId",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ReturnStatement",
            "start": 2130,
            "end": 2145,
            "argument": {
              "type": "Identifier",
              "start": 2137,
              "end": 2144,
              "decorators": [],
              "name": "isGenre",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 2048,
        "end": 2051,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2052,
          "end": 2059,
          "decorators": [],
          "name": "so",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2054,
            "end": 2059,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2056,
              "end": 2059
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
