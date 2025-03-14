typeVariableConstraintIntersections.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 2539,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 40,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "T00",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 32,
        "end": 39,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 32,
            "end": 33,
            "typeName": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 36,
            "end": 39,
            "literal": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 8,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 9,
            "end": 28,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 19,
              "end": 28,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 19,
                  "end": 22,
                  "literal": {
                    "type": "Literal",
                    "start": 19,
                    "end": 22,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 25,
                  "end": 28,
                  "literal": {
                    "type": "Literal",
                    "start": 25,
                    "end": 28,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 41,
      "end": 81,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 46,
        "end": 49,
        "decorators": [],
        "name": "T01",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 73,
        "end": 80,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 73,
            "end": 74,
            "typeName": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 77,
            "end": 80,
            "literal": {
              "type": "Literal",
              "start": 77,
              "end": 80,
              "raw": "\"c\"",
              "value": "c"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 49,
        "end": 70,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 50,
            "end": 69,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 60,
              "end": 69,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 60,
                  "end": 63,
                  "literal": {
                    "type": "Literal",
                    "start": 60,
                    "end": 63,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 66,
                  "end": 69,
                  "literal": {
                    "type": "Literal",
                    "start": 66,
                    "end": 69,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 50,
              "end": 51,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 82,
      "end": 125,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 87,
        "end": 90,
        "decorators": [],
        "name": "T02",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 114,
        "end": 124,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 114,
            "end": 115,
            "typeName": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 118,
            "end": 124
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 90,
        "end": 111,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 91,
            "end": 110,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 101,
              "end": 110,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 101,
                  "end": 104,
                  "literal": {
                    "type": "Literal",
                    "start": 101,
                    "end": 104,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 107,
                  "end": 110,
                  "literal": {
                    "type": "Literal",
                    "start": 107,
                    "end": 110,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 91,
              "end": 92,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 164,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 135,
        "decorators": [],
        "name": "T10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 156,
        "end": 163,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 156,
            "end": 157,
            "typeName": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 160,
            "end": 163,
            "literal": {
              "type": "Literal",
              "start": 160,
              "end": 163,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 135,
        "end": 153,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 136,
            "end": 152,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 146,
              "end": 152
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 136,
              "end": 137,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 165,
      "end": 202,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 173,
        "decorators": [],
        "name": "T11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 194,
        "end": 201,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 194,
            "end": 195,
            "typeName": {
              "type": "Identifier",
              "start": 194,
              "end": 195,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 198,
            "end": 201,
            "literal": {
              "type": "Literal",
              "start": 198,
              "end": 201,
              "raw": "\"c\"",
              "value": "c"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 173,
        "end": 191,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 174,
            "end": 190,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 184,
              "end": 190
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 203,
      "end": 243,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 208,
        "end": 211,
        "decorators": [],
        "name": "T12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 232,
        "end": 242,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 232,
            "end": 233,
            "typeName": {
              "type": "Identifier",
              "start": 232,
              "end": 233,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 236,
            "end": 242
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 211,
        "end": 229,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 212,
            "end": 228,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 222,
              "end": 228
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 212,
              "end": 213,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 245,
      "end": 305,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 250,
        "end": 253,
        "decorators": [],
        "name": "T20",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 283,
        "end": 304,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 283,
            "end": 284,
            "typeName": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 288,
            "end": 303,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 288,
                "end": 291,
                "literal": {
                  "type": "Literal",
                  "start": 288,
                  "end": 291,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 294,
                "end": 297,
                "literal": {
                  "type": "Literal",
                  "start": 294,
                  "end": 297,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 300,
                "end": 303,
                "literal": {
                  "type": "Literal",
                  "start": 300,
                  "end": 303,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 253,
        "end": 280,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 254,
            "end": 279,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 264,
              "end": 279,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 264,
                  "end": 267,
                  "literal": {
                    "type": "Literal",
                    "start": 264,
                    "end": 267,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 270,
                  "end": 273,
                  "literal": {
                    "type": "Literal",
                    "start": 270,
                    "end": 273,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 276,
                  "end": 279,
                  "literal": {
                    "type": "Literal",
                    "start": 276,
                    "end": 279,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 254,
              "end": 255,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 306,
      "end": 366,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 311,
        "end": 314,
        "decorators": [],
        "name": "T21",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 344,
        "end": 365,
        "types": [
          {
            "type": "TSUnionType",
            "start": 345,
            "end": 360,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 345,
                "end": 348,
                "literal": {
                  "type": "Literal",
                  "start": 345,
                  "end": 348,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 351,
                "end": 354,
                "literal": {
                  "type": "Literal",
                  "start": 351,
                  "end": 354,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 357,
                "end": 360,
                "literal": {
                  "type": "Literal",
                  "start": 357,
                  "end": 360,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 364,
            "end": 365,
            "typeName": {
              "type": "Identifier",
              "start": 364,
              "end": 365,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 314,
        "end": 341,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 315,
            "end": 340,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 325,
              "end": 340,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 325,
                  "end": 328,
                  "literal": {
                    "type": "Literal",
                    "start": 325,
                    "end": 328,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 331,
                  "end": 334,
                  "literal": {
                    "type": "Literal",
                    "start": 331,
                    "end": 334,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 337,
                  "end": 340,
                  "literal": {
                    "type": "Literal",
                    "start": 337,
                    "end": 340,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 367,
      "end": 421,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 375,
        "decorators": [],
        "name": "T22",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 405,
        "end": 420,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 405,
            "end": 406,
            "typeName": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 410,
            "end": 419,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 410,
                "end": 413,
                "literal": {
                  "type": "Literal",
                  "start": 410,
                  "end": 413,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 416,
                "end": 419,
                "literal": {
                  "type": "Literal",
                  "start": 416,
                  "end": 419,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 375,
        "end": 402,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 376,
            "end": 401,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 386,
              "end": 401,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 386,
                  "end": 389,
                  "literal": {
                    "type": "Literal",
                    "start": 386,
                    "end": 389,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 392,
                  "end": 395,
                  "literal": {
                    "type": "Literal",
                    "start": 392,
                    "end": 395,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 398,
                  "end": 401,
                  "literal": {
                    "type": "Literal",
                    "start": 398,
                    "end": 401,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 376,
              "end": 377,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 422,
      "end": 476,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 430,
        "decorators": [],
        "name": "T23",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 460,
        "end": 475,
        "types": [
          {
            "type": "TSUnionType",
            "start": 461,
            "end": 470,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 461,
                "end": 464,
                "literal": {
                  "type": "Literal",
                  "start": 461,
                  "end": 464,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 467,
                "end": 470,
                "literal": {
                  "type": "Literal",
                  "start": 467,
                  "end": 470,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 474,
            "end": 475,
            "typeName": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 430,
        "end": 457,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 431,
            "end": 456,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 441,
              "end": 456,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 441,
                  "end": 444,
                  "literal": {
                    "type": "Literal",
                    "start": 441,
                    "end": 444,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 447,
                  "end": 450,
                  "literal": {
                    "type": "Literal",
                    "start": 447,
                    "end": 450,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 453,
                  "end": 456,
                  "literal": {
                    "type": "Literal",
                    "start": 453,
                    "end": 456,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 431,
              "end": 432,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 478,
      "end": 532,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 483,
        "end": 486,
        "decorators": [],
        "name": "T30",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 510,
        "end": 531,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 510,
            "end": 511,
            "typeName": {
              "type": "Identifier",
              "start": 510,
              "end": 511,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 515,
            "end": 530,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 515,
                "end": 518,
                "literal": {
                  "type": "Literal",
                  "start": 515,
                  "end": 518,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 521,
                "end": 524,
                "literal": {
                  "type": "Literal",
                  "start": 521,
                  "end": 524,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 527,
                "end": 530,
                "literal": {
                  "type": "Literal",
                  "start": 527,
                  "end": 530,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 486,
        "end": 507,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 487,
            "end": 506,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 497,
              "end": 506,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 497,
                  "end": 500,
                  "literal": {
                    "type": "Literal",
                    "start": 497,
                    "end": 500,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 503,
                  "end": 506,
                  "literal": {
                    "type": "Literal",
                    "start": 503,
                    "end": 506,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 533,
      "end": 587,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 538,
        "end": 541,
        "decorators": [],
        "name": "T31",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 565,
        "end": 586,
        "types": [
          {
            "type": "TSUnionType",
            "start": 566,
            "end": 581,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 566,
                "end": 569,
                "literal": {
                  "type": "Literal",
                  "start": 566,
                  "end": 569,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 572,
                "end": 575,
                "literal": {
                  "type": "Literal",
                  "start": 572,
                  "end": 575,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 578,
                "end": 581,
                "literal": {
                  "type": "Literal",
                  "start": 578,
                  "end": 581,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 585,
            "end": 586,
            "typeName": {
              "type": "Identifier",
              "start": 585,
              "end": 586,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 541,
        "end": 562,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 542,
            "end": 561,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 552,
              "end": 561,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 552,
                  "end": 555,
                  "literal": {
                    "type": "Literal",
                    "start": 552,
                    "end": 555,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 558,
                  "end": 561,
                  "literal": {
                    "type": "Literal",
                    "start": 558,
                    "end": 561,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 542,
              "end": 543,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 588,
      "end": 636,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 593,
        "end": 596,
        "decorators": [],
        "name": "T32",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 620,
        "end": 635,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 620,
            "end": 621,
            "typeName": {
              "type": "Identifier",
              "start": 620,
              "end": 621,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 625,
            "end": 634,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 625,
                "end": 628,
                "literal": {
                  "type": "Literal",
                  "start": 625,
                  "end": 628,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 631,
                "end": 634,
                "literal": {
                  "type": "Literal",
                  "start": 631,
                  "end": 634,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 596,
        "end": 617,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 597,
            "end": 616,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 607,
              "end": 616,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 607,
                  "end": 610,
                  "literal": {
                    "type": "Literal",
                    "start": 607,
                    "end": 610,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 613,
                  "end": 616,
                  "literal": {
                    "type": "Literal",
                    "start": 613,
                    "end": 616,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 597,
              "end": 598,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 637,
      "end": 685,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 642,
        "end": 645,
        "decorators": [],
        "name": "T33",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 669,
        "end": 684,
        "types": [
          {
            "type": "TSUnionType",
            "start": 670,
            "end": 679,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 670,
                "end": 673,
                "literal": {
                  "type": "Literal",
                  "start": 670,
                  "end": 673,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 676,
                "end": 679,
                "literal": {
                  "type": "Literal",
                  "start": 676,
                  "end": 679,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          },
          {
            "type": "TSTypeReference",
            "start": 683,
            "end": 684,
            "typeName": {
              "type": "Identifier",
              "start": 683,
              "end": 684,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 645,
        "end": 666,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 646,
            "end": 665,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 656,
              "end": 665,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 656,
                  "end": 659,
                  "literal": {
                    "type": "Literal",
                    "start": 656,
                    "end": 659,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 662,
                  "end": 665,
                  "literal": {
                    "type": "Literal",
                    "start": 662,
                    "end": 665,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 646,
              "end": 647,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 687,
      "end": 726,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 692,
        "end": 695,
        "decorators": [],
        "name": "T40",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 712,
        "end": 725,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 712,
            "end": 713,
            "typeName": {
              "type": "Identifier",
              "start": 712,
              "end": 713,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSUndefinedKeyword",
            "start": 716,
            "end": 725
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 695,
        "end": 709,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 696,
            "end": 708,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 706,
              "end": 708,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 696,
              "end": 697,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 727,
      "end": 761,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 732,
        "end": 735,
        "decorators": [],
        "name": "T41",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 752,
        "end": 760,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 752,
            "end": 753,
            "typeName": {
              "type": "Identifier",
              "start": 752,
              "end": 753,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSNullKeyword",
            "start": 756,
            "end": 760
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 735,
        "end": 749,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 736,
            "end": 748,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 746,
              "end": 748,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 762,
      "end": 798,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 767,
        "end": 770,
        "decorators": [],
        "name": "T42",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 787,
        "end": 797,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 787,
            "end": 788,
            "typeName": {
              "type": "Identifier",
              "start": 787,
              "end": 788,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSObjectKeyword",
            "start": 791,
            "end": 797
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 770,
        "end": 784,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 771,
            "end": 783,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 781,
              "end": 783,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 771,
              "end": 772,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 799,
      "end": 831,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 804,
        "end": 807,
        "decorators": [],
        "name": "T43",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 824,
        "end": 830,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 824,
            "end": 825,
            "typeName": {
              "type": "Identifier",
              "start": 824,
              "end": 825,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 828,
            "end": 830,
            "members": []
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 807,
        "end": 821,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 808,
            "end": 820,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 818,
              "end": 820,
              "members": []
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 833,
      "end": 871,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 838,
        "end": 841,
        "decorators": [],
        "name": "T50",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 863,
        "end": 870,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 863,
            "end": 864,
            "typeName": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 867,
            "end": 870,
            "literal": {
              "type": "Literal",
              "start": 867,
              "end": 870,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 841,
        "end": 860,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 842,
            "end": 859,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 852,
              "end": 859,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 852,
                  "end": 855,
                  "literal": {
                    "type": "Literal",
                    "start": 852,
                    "end": 855,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 858,
                  "end": 859,
                  "literal": {
                    "type": "Literal",
                    "start": 858,
                    "end": 859,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 842,
              "end": 843,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 872,
      "end": 910,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 877,
        "end": 880,
        "decorators": [],
        "name": "T51",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 902,
        "end": 909,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 902,
            "end": 903,
            "typeName": {
              "type": "Identifier",
              "start": 902,
              "end": 903,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 906,
            "end": 909,
            "literal": {
              "type": "Literal",
              "start": 906,
              "end": 909,
              "raw": "\"b\"",
              "value": "b"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 880,
        "end": 899,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 881,
            "end": 898,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 891,
              "end": 898,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 891,
                  "end": 894,
                  "literal": {
                    "type": "Literal",
                    "start": 891,
                    "end": 894,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 897,
                  "end": 898,
                  "literal": {
                    "type": "Literal",
                    "start": 897,
                    "end": 898,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 911,
      "end": 952,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 916,
        "end": 919,
        "decorators": [],
        "name": "T52",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 941,
        "end": 951,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 941,
            "end": 942,
            "typeName": {
              "type": "Identifier",
              "start": 941,
              "end": 942,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 945,
            "end": 951
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 919,
        "end": 938,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 920,
            "end": 937,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 930,
              "end": 937,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 930,
                  "end": 933,
                  "literal": {
                    "type": "Literal",
                    "start": 930,
                    "end": 933,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 936,
                  "end": 937,
                  "literal": {
                    "type": "Literal",
                    "start": 936,
                    "end": 937,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 920,
              "end": 921,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 953,
      "end": 989,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 961,
        "decorators": [],
        "name": "T53",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 983,
        "end": 988,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 983,
            "end": 984,
            "typeName": {
              "type": "Identifier",
              "start": 983,
              "end": 984,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 987,
            "end": 988,
            "literal": {
              "type": "Literal",
              "start": 987,
              "end": 988,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 961,
        "end": 980,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 962,
            "end": 979,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 972,
              "end": 979,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 972,
                  "end": 975,
                  "literal": {
                    "type": "Literal",
                    "start": 972,
                    "end": 975,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 978,
                  "end": 979,
                  "literal": {
                    "type": "Literal",
                    "start": 978,
                    "end": 979,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 962,
              "end": 963,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 990,
      "end": 1026,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 995,
        "end": 998,
        "decorators": [],
        "name": "T54",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1020,
        "end": 1025,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1020,
            "end": 1021,
            "typeName": {
              "type": "Identifier",
              "start": 1020,
              "end": 1021,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1024,
            "end": 1025,
            "literal": {
              "type": "Literal",
              "start": 1024,
              "end": 1025,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 998,
        "end": 1017,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 999,
            "end": 1016,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1009,
              "end": 1016,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1009,
                  "end": 1012,
                  "literal": {
                    "type": "Literal",
                    "start": 1009,
                    "end": 1012,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1015,
                  "end": 1016,
                  "literal": {
                    "type": "Literal",
                    "start": 1015,
                    "end": 1016,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 999,
              "end": 1000,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1027,
      "end": 1068,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1032,
        "end": 1035,
        "decorators": [],
        "name": "T55",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1057,
        "end": 1067,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1057,
            "end": 1058,
            "typeName": {
              "type": "Identifier",
              "start": 1057,
              "end": 1058,
              "decorators": [],
              "name": "K",
              "optional": false
            }
          },
          {
            "type": "TSNumberKeyword",
            "start": 1061,
            "end": 1067
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1035,
        "end": 1054,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1036,
            "end": 1053,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1046,
              "end": 1053,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1046,
                  "end": 1049,
                  "literal": {
                    "type": "Literal",
                    "start": 1046,
                    "end": 1049,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1052,
                  "end": 1053,
                  "literal": {
                    "type": "Literal",
                    "start": 1052,
                    "end": 1053,
                    "raw": "0",
                    "value": 0
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1036,
              "end": 1037,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1070,
      "end": 1123,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1075,
        "end": 1078,
        "decorators": [],
        "name": "T60",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1115,
        "end": 1122,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1115,
            "end": 1116,
            "typeName": {
              "type": "Identifier",
              "start": 1115,
              "end": 1116,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1119,
            "end": 1122,
            "literal": {
              "type": "Literal",
              "start": 1119,
              "end": 1122,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1078,
        "end": 1112,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1079,
            "end": 1098,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1089,
              "end": 1098,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1089,
                  "end": 1092,
                  "literal": {
                    "type": "Literal",
                    "start": 1089,
                    "end": 1092,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1095,
                  "end": 1098,
                  "literal": {
                    "type": "Literal",
                    "start": 1095,
                    "end": 1098,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1079,
              "end": 1080,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1100,
            "end": 1111,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1110,
              "end": 1111,
              "typeName": {
                "type": "Identifier",
                "start": 1110,
                "end": 1111,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1100,
              "end": 1101,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1124,
      "end": 1185,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1129,
        "end": 1132,
        "decorators": [],
        "name": "T61",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1169,
        "end": 1184,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1169,
            "end": 1170,
            "typeName": {
              "type": "Identifier",
              "start": 1169,
              "end": 1170,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 1174,
            "end": 1183,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 1174,
                "end": 1177,
                "literal": {
                  "type": "Literal",
                  "start": 1174,
                  "end": 1177,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1180,
                "end": 1183,
                "literal": {
                  "type": "Literal",
                  "start": 1180,
                  "end": 1183,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1132,
        "end": 1166,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1133,
            "end": 1152,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1143,
              "end": 1152,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1143,
                  "end": 1146,
                  "literal": {
                    "type": "Literal",
                    "start": 1143,
                    "end": 1146,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1149,
                  "end": 1152,
                  "literal": {
                    "type": "Literal",
                    "start": 1149,
                    "end": 1152,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1133,
              "end": 1134,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1154,
            "end": 1165,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1164,
              "end": 1165,
              "typeName": {
                "type": "Identifier",
                "start": 1164,
                "end": 1165,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1154,
              "end": 1155,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1186,
      "end": 1253,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1191,
        "end": 1194,
        "decorators": [],
        "name": "T62",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1231,
        "end": 1252,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1231,
            "end": 1232,
            "typeName": {
              "type": "Identifier",
              "start": 1231,
              "end": 1232,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 1236,
            "end": 1251,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 1236,
                "end": 1239,
                "literal": {
                  "type": "Literal",
                  "start": 1236,
                  "end": 1239,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1242,
                "end": 1245,
                "literal": {
                  "type": "Literal",
                  "start": 1242,
                  "end": 1245,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1248,
                "end": 1251,
                "literal": {
                  "type": "Literal",
                  "start": 1248,
                  "end": 1251,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1194,
        "end": 1228,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1195,
            "end": 1214,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1205,
              "end": 1214,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1205,
                  "end": 1208,
                  "literal": {
                    "type": "Literal",
                    "start": 1205,
                    "end": 1208,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1211,
                  "end": 1214,
                  "literal": {
                    "type": "Literal",
                    "start": 1211,
                    "end": 1214,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1195,
              "end": 1196,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1216,
            "end": 1227,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1226,
              "end": 1227,
              "typeName": {
                "type": "Identifier",
                "start": 1226,
                "end": 1227,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1216,
              "end": 1217,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1254,
      "end": 1310,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1259,
        "end": 1262,
        "decorators": [],
        "name": "T63",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1299,
        "end": 1309,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1299,
            "end": 1300,
            "typeName": {
              "type": "Identifier",
              "start": 1299,
              "end": 1300,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 1303,
            "end": 1309
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1262,
        "end": 1296,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1263,
            "end": 1282,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1273,
              "end": 1282,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1273,
                  "end": 1276,
                  "literal": {
                    "type": "Literal",
                    "start": 1273,
                    "end": 1276,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1279,
                  "end": 1282,
                  "literal": {
                    "type": "Literal",
                    "start": 1279,
                    "end": 1282,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1263,
              "end": 1264,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1284,
            "end": 1295,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 1294,
              "end": 1295,
              "typeName": {
                "type": "Identifier",
                "start": 1294,
                "end": 1295,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1284,
              "end": 1285,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1312,
      "end": 1371,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1317,
        "end": 1320,
        "decorators": [],
        "name": "T70",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1363,
        "end": 1370,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1363,
            "end": 1364,
            "typeName": {
              "type": "Identifier",
              "start": 1363,
              "end": 1364,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSLiteralType",
            "start": 1367,
            "end": 1370,
            "literal": {
              "type": "Literal",
              "start": 1367,
              "end": 1370,
              "raw": "\"a\"",
              "value": "a"
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1320,
        "end": 1360,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1321,
            "end": 1340,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1331,
              "end": 1340,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1331,
                  "end": 1334,
                  "literal": {
                    "type": "Literal",
                    "start": 1331,
                    "end": 1334,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1337,
                  "end": 1340,
                  "literal": {
                    "type": "Literal",
                    "start": 1337,
                    "end": 1340,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1321,
              "end": 1322,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1342,
            "end": 1359,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1352,
              "end": 1359,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1352,
                  "end": 1353,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1352,
                    "end": 1353,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1356,
                  "end": 1359,
                  "literal": {
                    "type": "Literal",
                    "start": 1356,
                    "end": 1359,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1342,
              "end": 1343,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1372,
      "end": 1439,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1377,
        "end": 1380,
        "decorators": [],
        "name": "T71",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1423,
        "end": 1438,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1423,
            "end": 1424,
            "typeName": {
              "type": "Identifier",
              "start": 1423,
              "end": 1424,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 1428,
            "end": 1437,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 1428,
                "end": 1431,
                "literal": {
                  "type": "Literal",
                  "start": 1428,
                  "end": 1431,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1434,
                "end": 1437,
                "literal": {
                  "type": "Literal",
                  "start": 1434,
                  "end": 1437,
                  "raw": "\"b\"",
                  "value": "b"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1380,
        "end": 1420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1381,
            "end": 1400,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1391,
              "end": 1400,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1391,
                  "end": 1394,
                  "literal": {
                    "type": "Literal",
                    "start": 1391,
                    "end": 1394,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1397,
                  "end": 1400,
                  "literal": {
                    "type": "Literal",
                    "start": 1397,
                    "end": 1400,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1381,
              "end": 1382,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1402,
            "end": 1419,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1412,
              "end": 1419,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1412,
                  "end": 1413,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1412,
                    "end": 1413,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1416,
                  "end": 1419,
                  "literal": {
                    "type": "Literal",
                    "start": 1416,
                    "end": 1419,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1402,
              "end": 1403,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1440,
      "end": 1513,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1445,
        "end": 1448,
        "decorators": [],
        "name": "T72",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1491,
        "end": 1512,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1491,
            "end": 1492,
            "typeName": {
              "type": "Identifier",
              "start": 1491,
              "end": 1492,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSUnionType",
            "start": 1496,
            "end": 1511,
            "types": [
              {
                "type": "TSLiteralType",
                "start": 1496,
                "end": 1499,
                "literal": {
                  "type": "Literal",
                  "start": 1496,
                  "end": 1499,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1502,
                "end": 1505,
                "literal": {
                  "type": "Literal",
                  "start": 1502,
                  "end": 1505,
                  "raw": "\"b\"",
                  "value": "b"
                }
              },
              {
                "type": "TSLiteralType",
                "start": 1508,
                "end": 1511,
                "literal": {
                  "type": "Literal",
                  "start": 1508,
                  "end": 1511,
                  "raw": "\"c\"",
                  "value": "c"
                }
              }
            ]
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1448,
        "end": 1488,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1449,
            "end": 1468,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1459,
              "end": 1468,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1459,
                  "end": 1462,
                  "literal": {
                    "type": "Literal",
                    "start": 1459,
                    "end": 1462,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1465,
                  "end": 1468,
                  "literal": {
                    "type": "Literal",
                    "start": 1465,
                    "end": 1468,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1449,
              "end": 1450,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1470,
            "end": 1487,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1480,
              "end": 1487,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1480,
                  "end": 1481,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1480,
                    "end": 1481,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1484,
                  "end": 1487,
                  "literal": {
                    "type": "Literal",
                    "start": 1484,
                    "end": 1487,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1470,
              "end": 1471,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1514,
      "end": 1576,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1519,
        "end": 1522,
        "decorators": [],
        "name": "T73",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1565,
        "end": 1575,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1565,
            "end": 1566,
            "typeName": {
              "type": "Identifier",
              "start": 1565,
              "end": 1566,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          },
          {
            "type": "TSStringKeyword",
            "start": 1569,
            "end": 1575
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1522,
        "end": 1562,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1523,
            "end": 1542,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1533,
              "end": 1542,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1533,
                  "end": 1536,
                  "literal": {
                    "type": "Literal",
                    "start": 1533,
                    "end": 1536,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1539,
                  "end": 1542,
                  "literal": {
                    "type": "Literal",
                    "start": 1539,
                    "end": 1542,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1523,
              "end": 1524,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 1544,
            "end": 1561,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1554,
              "end": 1561,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1554,
                  "end": 1555,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1555,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1558,
                  "end": 1561,
                  "literal": {
                    "type": "Literal",
                    "start": 1558,
                    "end": 1561,
                    "raw": "\"c\"",
                    "value": "c"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1544,
              "end": 1545,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1578,
      "end": 1617,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1595,
        "end": 1598,
        "decorators": [],
        "name": "isA",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1599,
          "end": 1605,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1600,
            "end": 1605,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1602,
              "end": 1605
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1606,
        "end": 1616,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1608,
          "end": 1616,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 1608,
            "end": 1609,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1613,
            "end": 1616,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1613,
              "end": 1616,
              "literal": {
                "type": "Literal",
                "start": 1613,
                "end": 1616,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1618,
      "end": 1657,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1635,
        "end": 1638,
        "decorators": [],
        "name": "isB",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1639,
          "end": 1645,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1640,
            "end": 1645,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1642,
              "end": 1645
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1646,
        "end": 1656,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1648,
          "end": 1656,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 1648,
            "end": 1649,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1653,
            "end": 1656,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1653,
              "end": 1656,
              "literal": {
                "type": "Literal",
                "start": 1653,
                "end": 1656,
                "raw": "\"b\"",
                "value": "b"
              }
            }
          }
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1658,
      "end": 1697,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1675,
        "end": 1678,
        "decorators": [],
        "name": "isC",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1679,
          "end": 1685,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1680,
            "end": 1685,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1682,
              "end": 1685
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1686,
        "end": 1696,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 1688,
          "end": 1696,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 1688,
            "end": 1689,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1693,
            "end": 1696,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1693,
              "end": 1696,
              "literal": {
                "type": "Literal",
                "start": 1693,
                "end": 1696,
                "raw": "\"c\"",
                "value": "c"
              }
            }
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1699,
      "end": 1956,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1739,
        "end": 1956,
        "body": [
          {
            "type": "IfStatement",
            "start": 1743,
            "end": 1779,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1755,
              "end": 1779,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1761,
                  "end": 1763,
                  "expression": {
                    "type": "Identifier",
                    "start": 1761,
                    "end": 1762,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1747,
              "end": 1753,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1751,
                  "end": 1752,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1747,
                "end": 1750,
                "decorators": [],
                "name": "isA",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1782,
            "end": 1818,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1794,
              "end": 1818,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1800,
                  "end": 1802,
                  "expression": {
                    "type": "Identifier",
                    "start": 1800,
                    "end": 1801,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1786,
              "end": 1792,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1790,
                  "end": 1791,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1786,
                "end": 1789,
                "decorators": [],
                "name": "isB",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1821,
            "end": 1855,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1833,
              "end": 1855,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1839,
                  "end": 1841,
                  "expression": {
                    "type": "Identifier",
                    "start": 1839,
                    "end": 1840,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 1825,
              "end": 1831,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1829,
                  "end": 1830,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 1825,
                "end": 1828,
                "decorators": [],
                "name": "isC",
                "optional": false
              },
              "optional": false
            }
          },
          {
            "type": "IfStatement",
            "start": 1858,
            "end": 1898,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1880,
              "end": 1898,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1886,
                  "end": 1888,
                  "expression": {
                    "type": "Identifier",
                    "start": 1886,
                    "end": 1887,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 1862,
              "end": 1878,
              "operator": "||",
              "left": {
                "type": "CallExpression",
                "start": 1862,
                "end": 1868,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1866,
                    "end": 1867,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1862,
                  "end": 1865,
                  "decorators": [],
                  "name": "isA",
                  "optional": false
                },
                "optional": false
              },
              "right": {
                "type": "CallExpression",
                "start": 1872,
                "end": 1878,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 1876,
                    "end": 1877,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 1872,
                  "end": 1875,
                  "decorators": [],
                  "name": "isB",
                  "optional": false
                },
                "optional": false
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 1901,
            "end": 1943,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 1926,
              "end": 1943,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1932,
                  "end": 1939,
                  "argument": null
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 1905,
              "end": 1924,
              "argument": {
                "type": "LogicalExpression",
                "start": 1907,
                "end": 1923,
                "operator": "||",
                "left": {
                  "type": "CallExpression",
                  "start": 1907,
                  "end": 1913,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1911,
                      "end": 1912,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1907,
                    "end": 1910,
                    "decorators": [],
                    "name": "isA",
                    "optional": false
                  },
                  "optional": false
                },
                "right": {
                  "type": "CallExpression",
                  "start": 1917,
                  "end": 1923,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 1921,
                      "end": 1922,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1917,
                    "end": 1920,
                    "decorators": [],
                    "name": "isB",
                    "optional": false
                  },
                  "optional": false
                }
              },
              "operator": "!",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 1946,
            "end": 1948,
            "expression": {
              "type": "Identifier",
              "start": 1946,
              "end": 1947,
              "decorators": [],
              "name": "x",
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
        "start": 1708,
        "end": 1711,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1733,
          "end": 1737,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1734,
            "end": 1737,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1736,
              "end": 1737,
              "typeName": {
                "type": "Identifier",
                "start": 1736,
                "end": 1737,
                "decorators": [],
                "name": "K",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1711,
        "end": 1732,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1712,
            "end": 1731,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 1722,
              "end": 1731,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 1722,
                  "end": 1725,
                  "literal": {
                    "type": "Literal",
                    "start": 1722,
                    "end": 1725,
                    "raw": "\"a\"",
                    "value": "a"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 1728,
                  "end": 1731,
                  "literal": {
                    "type": "Literal",
                    "start": 1728,
                    "end": 1731,
                    "raw": "\"b\"",
                    "value": "b"
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1712,
              "end": 1713,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1982,
      "end": 2031,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1987,
        "end": 1996,
        "decorators": [],
        "name": "OptionOne",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1999,
        "end": 2030,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2003,
            "end": 2015,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2003,
              "end": 2007,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2007,
              "end": 2014,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2009,
                "end": 2014,
                "literal": {
                  "type": "Literal",
                  "start": 2009,
                  "end": 2014,
                  "raw": "\"one\"",
                  "value": "one"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2018,
            "end": 2028,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2018,
              "end": 2019,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2019,
              "end": 2027,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2021,
                "end": 2027
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2033,
      "end": 2095,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2038,
        "end": 2047,
        "decorators": [],
        "name": "OptionTwo",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 2050,
        "end": 2094,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 2054,
            "end": 2066,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2054,
              "end": 2058,
              "decorators": [],
              "name": "kind",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2058,
              "end": 2065,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 2060,
                "end": 2065,
                "literal": {
                  "type": "Literal",
                  "start": 2060,
                  "end": 2065,
                  "raw": "\"two\"",
                  "value": "two"
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2069,
            "end": 2079,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2069,
              "end": 2070,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2070,
              "end": 2078,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2072,
                "end": 2078
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 2082,
            "end": 2092,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2082,
              "end": 2083,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2083,
              "end": 2091,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 2085,
                "end": 2091
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2097,
      "end": 2134,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2102,
        "end": 2109,
        "decorators": [],
        "name": "Options",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 2112,
        "end": 2133,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 2112,
            "end": 2121,
            "typeName": {
              "type": "Identifier",
              "start": 2112,
              "end": 2121,
              "decorators": [],
              "name": "OptionOne",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 2124,
            "end": 2133,
            "typeName": {
              "type": "Identifier",
              "start": 2124,
              "end": 2133,
              "decorators": [],
              "name": "OptionTwo",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2136,
      "end": 2230,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2141,
        "end": 2155,
        "decorators": [],
        "name": "OptionHandlers",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 2158,
        "end": 2230,
        "constraint": {
          "type": "TSIndexedAccessType",
          "start": 2168,
          "end": 2183,
          "indexType": {
            "type": "TSLiteralType",
            "start": 2176,
            "end": 2182,
            "literal": {
              "type": "Literal",
              "start": 2176,
              "end": 2182,
              "raw": "'kind'",
              "value": "kind"
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 2168,
            "end": 2175,
            "typeName": {
              "type": "Identifier",
              "start": 2168,
              "end": 2175,
              "decorators": [],
              "name": "Options",
              "optional": false
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 2163,
          "end": 2164,
          "decorators": [],
          "name": "K",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSFunctionType",
          "start": 2186,
          "end": 2227,
          "params": [
            {
              "type": "Identifier",
              "start": 2187,
              "end": 2216,
              "decorators": [],
              "name": "option",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 2193,
                "end": 2216,
                "typeAnnotation": {
                  "type": "TSIntersectionType",
                  "start": 2195,
                  "end": 2216,
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "start": 2195,
                      "end": 2202,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2195,
                        "end": 2202,
                        "decorators": [],
                        "name": "Options",
                        "optional": false
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 2205,
                      "end": 2216,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 2207,
                          "end": 2214,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 2207,
                            "end": 2211,
                            "decorators": [],
                            "name": "kind",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 2211,
                            "end": 2214,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 2213,
                              "end": 2214,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2213,
                                "end": 2214,
                                "decorators": [],
                                "name": "K",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 2218,
            "end": 2227,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 2221,
              "end": 2227
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2232,
      "end": 2350,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2238,
          "end": 2349,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2238,
            "end": 2268,
            "decorators": [],
            "name": "optionHandlers",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2252,
              "end": 2268,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2254,
                "end": 2268,
                "typeName": {
                  "type": "Identifier",
                  "start": 2254,
                  "end": 2268,
                  "decorators": [],
                  "name": "OptionHandlers",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 2271,
            "end": 2349,
            "properties": [
              {
                "type": "Property",
                "start": 2275,
                "end": 2300,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2275,
                  "end": 2280,
                  "raw": "\"one\"",
                  "value": "one"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2282,
                  "end": 2300,
                  "async": false,
                  "body": {
                    "type": "MemberExpression",
                    "start": 2292,
                    "end": 2300,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 2292,
                      "end": 2298,
                      "decorators": [],
                      "name": "option",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 2299,
                      "end": 2300,
                      "decorators": [],
                      "name": "s",
                      "optional": false
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2282,
                      "end": 2288,
                      "decorators": [],
                      "name": "option",
                      "optional": false
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2304,
                "end": 2346,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 2304,
                  "end": 2309,
                  "raw": "\"two\"",
                  "value": "two"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 2311,
                  "end": 2346,
                  "async": false,
                  "body": {
                    "type": "BinaryExpression",
                    "start": 2321,
                    "end": 2346,
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "start": 2321,
                      "end": 2335,
                      "operator": "+",
                      "left": {
                        "type": "MemberExpression",
                        "start": 2321,
                        "end": 2329,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 2321,
                          "end": 2327,
                          "decorators": [],
                          "name": "option",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2328,
                          "end": 2329,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 2332,
                        "end": 2335,
                        "raw": "\",\"",
                        "value": ","
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 2338,
                      "end": 2346,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 2338,
                        "end": 2344,
                        "decorators": [],
                        "name": "option",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 2345,
                        "end": 2346,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      }
                    }
                  },
                  "expression": true,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 2311,
                      "end": 2317,
                      "decorators": [],
                      "name": "option",
                      "optional": false
                    }
                  ]
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
      "start": 2352,
      "end": 2537,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 2440,
        "end": 2537,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2444,
            "end": 2469,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2450,
                "end": 2468,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2450,
                  "end": 2454,
                  "decorators": [],
                  "name": "kind",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2457,
                  "end": 2468,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2457,
                    "end": 2463,
                    "decorators": [],
                    "name": "option",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2464,
                    "end": 2468,
                    "decorators": [],
                    "name": "kind",
                    "optional": false
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 2472,
            "end": 2509,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2478,
                "end": 2508,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 2478,
                  "end": 2485,
                  "decorators": [],
                  "name": "handler",
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2488,
                  "end": 2508,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 2488,
                    "end": 2502,
                    "decorators": [],
                    "name": "optionHandlers",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2503,
                    "end": 2507,
                    "decorators": [],
                    "name": "kind",
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
            "start": 2512,
            "end": 2535,
            "argument": {
              "type": "CallExpression",
              "start": 2519,
              "end": 2534,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2527,
                  "end": 2533,
                  "decorators": [],
                  "name": "option",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 2519,
                "end": 2526,
                "decorators": [],
                "name": "handler",
                "optional": false
              },
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
        "start": 2361,
        "end": 2373,
        "decorators": [],
        "name": "handleOption",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2401,
          "end": 2430,
          "decorators": [],
          "name": "option",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2407,
            "end": 2430,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 2409,
              "end": 2430,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2409,
                  "end": 2416,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2409,
                    "end": 2416,
                    "decorators": [],
                    "name": "Options",
                    "optional": false
                  }
                },
                {
                  "type": "TSTypeLiteral",
                  "start": 2419,
                  "end": 2430,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 2421,
                      "end": 2428,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2421,
                        "end": 2425,
                        "decorators": [],
                        "name": "kind",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2425,
                        "end": 2428,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 2427,
                          "end": 2428,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2427,
                            "end": 2428,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2431,
        "end": 2439,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 2433,
          "end": 2439
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2373,
        "end": 2400,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2374,
            "end": 2399,
            "const": false,
            "constraint": {
              "type": "TSIndexedAccessType",
              "start": 2384,
              "end": 2399,
              "indexType": {
                "type": "TSLiteralType",
                "start": 2392,
                "end": 2398,
                "literal": {
                  "type": "Literal",
                  "start": 2392,
                  "end": 2398,
                  "raw": "'kind'",
                  "value": "kind"
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 2384,
                "end": 2391,
                "typeName": {
                  "type": "Identifier",
                  "start": 2384,
                  "end": 2391,
                  "decorators": [],
                  "name": "Options",
                  "optional": false
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 2374,
              "end": 2375,
              "decorators": [],
              "name": "K",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "EmptyStatement",
      "start": 2537,
      "end": 2538
    }
  ],
  "sourceType": "script"
}
```
