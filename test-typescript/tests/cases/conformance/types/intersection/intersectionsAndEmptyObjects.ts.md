__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 103,
  "end": 1804,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 103,
      "end": 126,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 112,
        "end": 125,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 123,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 136,
        "end": 149,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 138,
            "end": 147,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 151,
      "end": 163,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 157,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 160,
        "end": 162,
        "members": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 179,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 179,
            "name": "x01",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 172,
              "end": 179,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 174,
                "end": 179,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 174,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 181,
      "end": 196,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 195,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 195,
            "name": "x02",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 188,
              "end": 195,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 190,
                "end": 195,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 190,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 195,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 197,
      "end": 212,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 201,
          "end": 211,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 211,
            "name": "x03",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 204,
              "end": 211,
              "typeAnnotation": {
                "type": "TSIntersectionType",
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
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 210,
                    "end": 211,
                    "typeName": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 213,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 231,
            "name": "x04",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 220,
              "end": 231,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 222,
                "end": 231,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 227,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 231,
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 253,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 237,
          "end": 252,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 252,
            "name": "x05",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 252,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 242,
                "end": 252,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 242,
                    "end": 248
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 252,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 252,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 254,
      "end": 274,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 258,
          "end": 273,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 273,
            "name": "x06",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 261,
              "end": 273,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 263,
                "end": 273,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 263,
                    "end": 264,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 285,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "name": "x07",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 285,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 303,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 302,
            "name": "x08",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 294,
              "end": 302,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 296,
                "end": 302,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 296,
                    "end": 297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 300,
                    "end": 302,
                    "members": []
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 342,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 342,
            "name": "x09",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 342,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 313,
                "end": 342,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 313,
                    "end": 315,
                    "members": []
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 318,
                    "end": 319,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 322,
                    "end": 324,
                    "members": []
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 327,
                    "end": 328,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 331,
                    "end": 333,
                    "members": []
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 336,
                    "end": 337,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 340,
                    "end": 342,
                    "members": []
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 345,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 356,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 357,
        "end": 359,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 360,
      "end": 374,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 371,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 372,
        "end": 374,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 376,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 380,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "name": "x10",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 383,
              "end": 390,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 385,
                "end": 390,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 385,
                    "end": 386,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 389,
                    "end": 390,
                    "typeName": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 407,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 406,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 406,
            "name": "x11",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 399,
              "end": 406,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 401,
                "end": 406,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 401,
                    "end": 402,
                    "typeName": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 406,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 408,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 412,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 430,
            "name": "x12",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 430,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 417,
                "end": 430,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 417,
                    "end": 418,
                    "typeName": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 421,
                    "end": 422,
                    "typeName": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 425,
                    "end": 426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 426,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 429,
                    "end": 430,
                    "typeName": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 430,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 432,
      "end": 447,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 446,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 446,
            "name": "x13",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 439,
              "end": 446,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 441,
                "end": 446,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 441,
                    "end": 442,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 445,
                    "end": 446,
                    "typeName": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 446,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 448,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 452,
          "end": 474,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 474,
            "name": "x14",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 455,
              "end": 474,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 457,
                "end": 474,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 457,
                    "end": 458,
                    "typeName": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 458,
                      "name": "A",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 461,
                    "end": 462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 466,
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 469,
                    "end": 470,
                    "typeName": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 470,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "name": "E",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 499,
      "end": 544,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 514,
        "name": "Dictionary",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 517,
        "end": 543,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 519,
            "end": 541,
            "parameters": [
              {
                "type": "Identifier",
                "start": 520,
                "end": 532,
                "name": "name",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 524,
                  "end": 532,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 526,
                    "end": 532
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 541,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 535,
                "end": 541
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 546,
      "end": 684,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 552,
          "end": 683,
          "id": {
            "type": "Identifier",
            "start": 552,
            "end": 573,
            "name": "intersectDictionaries",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 576,
            "end": 683,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 626,
                "end": 632,
                "name": "d1",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 628,
                  "end": 632,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 630,
                    "end": 632,
                    "typeName": {
                      "type": "Identifier",
                      "start": 630,
                      "end": 632,
                      "name": "F1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 636,
                "end": 642,
                "name": "d2",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 638,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 640,
                    "end": 642,
                    "typeName": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 642,
                      "name": "F2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "CallExpression",
              "start": 658,
              "end": 683,
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 671,
                "object": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 664,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 671,
                  "name": "assign",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 672,
                  "end": 674,
                  "properties": []
                },
                {
                  "type": "Identifier",
                  "start": 676,
                  "end": 678,
                  "name": "d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "name": "d2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 576,
              "end": 622,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 577,
                  "end": 598,
                  "name": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 579,
                    "name": "F1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 588,
                    "end": 598,
                    "typeName": {
                      "type": "Identifier",
                      "start": 588,
                      "end": 598,
                      "name": "Dictionary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 600,
                  "end": 621,
                  "name": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 602,
                    "name": "F2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 611,
                    "end": 621,
                    "typeName": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 621,
                      "name": "Dictionary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 654,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 647,
                "end": 654,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 647,
                    "end": 649,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 649,
                      "name": "F1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 654,
                      "name": "F2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 686,
      "end": 750,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 692,
          "end": 749,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 706,
            "name": "testDictionary",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 709,
            "end": 749,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 732,
                "end": 741,
                "name": "_value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 738,
                  "end": 741,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 741,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 746,
              "end": 749,
              "body": []
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 709,
              "end": 731,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 710,
                  "end": 730,
                  "name": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 711,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 720,
                    "end": 730,
                    "typeName": {
                      "type": "Identifier",
                      "start": 720,
                      "end": 730,
                      "name": "Dictionary",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 758,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 760,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 763,
            "end": 765,
            "properties": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 767,
      "end": 786,
      "expression": {
        "type": "CallExpression",
        "start": 767,
        "end": 785,
        "callee": {
          "type": "Identifier",
          "start": 767,
          "end": 781,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 787,
      "end": 828,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 793,
          "end": 827,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 795,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 798,
            "end": 827,
            "callee": {
              "type": "Identifier",
              "start": 798,
              "end": 819,
              "name": "intersectDictionaries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 820,
                "end": 822,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 824,
                "end": 826,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 829,
      "end": 848,
      "expression": {
        "type": "CallExpression",
        "start": 829,
        "end": 847,
        "callee": {
          "type": "Identifier",
          "start": 829,
          "end": 843,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 844,
            "end": 846,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 850,
      "end": 874,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 856,
          "end": 873,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 858,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 861,
            "end": 873,
            "properties": [
              {
                "type": "Property",
                "start": 865,
                "end": 870,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 866,
                  "name": "s",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 868,
                  "end": 870,
                  "value": "",
                  "raw": "''"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 875,
      "end": 894,
      "expression": {
        "type": "CallExpression",
        "start": 875,
        "end": 893,
        "callee": {
          "type": "Identifier",
          "start": 875,
          "end": 889,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 895,
      "end": 936,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 901,
          "end": 935,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 903,
            "name": "d4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 906,
            "end": 935,
            "callee": {
              "type": "Identifier",
              "start": 906,
              "end": 927,
              "name": "intersectDictionaries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 928,
                "end": 930,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 932,
                "end": 934,
                "name": "d3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 937,
      "end": 956,
      "expression": {
        "type": "CallExpression",
        "start": 937,
        "end": 955,
        "callee": {
          "type": "Identifier",
          "start": 937,
          "end": 951,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 952,
            "end": 954,
            "name": "d4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 957,
      "end": 998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 963,
          "end": 997,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 965,
            "name": "d5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 968,
            "end": 997,
            "callee": {
              "type": "Identifier",
              "start": 968,
              "end": 989,
              "name": "intersectDictionaries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 990,
                "end": 992,
                "name": "d3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 994,
                "end": 996,
                "name": "d1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 999,
      "end": 1018,
      "expression": {
        "type": "CallExpression",
        "start": 999,
        "end": 1017,
        "callee": {
          "type": "Identifier",
          "start": 999,
          "end": 1013,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1014,
            "end": 1016,
            "name": "d5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1019,
      "end": 1060,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1025,
          "end": 1059,
          "id": {
            "type": "Identifier",
            "start": 1025,
            "end": 1027,
            "name": "d6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1030,
            "end": 1059,
            "callee": {
              "type": "Identifier",
              "start": 1030,
              "end": 1051,
              "name": "intersectDictionaries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 1052,
                "end": 1054,
                "name": "d3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 1056,
                "end": 1058,
                "name": "d3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1061,
      "end": 1080,
      "expression": {
        "type": "CallExpression",
        "start": 1061,
        "end": 1079,
        "callee": {
          "type": "Identifier",
          "start": 1061,
          "end": 1075,
          "name": "testDictionary",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1076,
            "end": 1078,
            "name": "d6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1104,
      "end": 1227,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1116,
        "name": "choices",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1116,
        "end": 1169,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1117,
            "end": 1168,
            "name": {
              "type": "Identifier",
              "start": 1117,
              "end": 1128,
              "name": "IChoiceList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1137,
              "end": 1168,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1143,
                  "end": 1166,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1155,
                      "name": "key",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1147,
                        "end": 1155,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1149,
                          "end": 1155
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1156,
                    "end": 1165,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1172,
        "end": 1226,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1172,
            "end": 1183,
            "typeName": {
              "type": "Identifier",
              "start": 1172,
              "end": 1183,
              "name": "IChoiceList",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeLiteral",
            "start": 1186,
            "end": 1226,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1192,
                "end": 1206,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1192,
                  "end": 1197,
                  "name": "shoes",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1197,
                  "end": 1205,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1198,
                    "end": 1205
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 1211,
                "end": 1224,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1215,
                  "name": "food",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1215,
                  "end": 1223,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1216,
                    "end": 1223
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1229,
      "end": 1268,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1247,
        "name": "IMyChoiceList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1250,
        "end": 1267,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1256,
            "end": 1265,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1256,
              "end": 1259,
              "name": "car",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1259,
              "end": 1265,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1261,
                "end": 1265,
                "literal": {
                  "type": "Literal",
                  "start": 1261,
                  "end": 1265,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1270,
      "end": 1299,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1293,
        "name": "IUnknownChoiceList",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1296,
        "end": 1298,
        "members": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1301,
      "end": 1333,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1305,
          "end": 1332,
          "id": {
            "type": "Identifier",
            "start": 1305,
            "end": 1332,
            "name": "defaultChoices",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1332,
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1328,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1328,
                  "end": 1332,
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 1329,
                      "end": 1331,
                      "members": []
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1334,
      "end": 1379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1338,
          "end": 1378,
          "id": {
            "type": "Identifier",
            "start": 1338,
            "end": 1378,
            "name": "defaultChoicesAndEmpty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1360,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1362,
                "end": 1378,
                "typeName": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1369,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1369,
                  "end": 1378,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 1370,
                      "end": 1377,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 1370,
                          "end": 1372,
                          "members": []
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1375,
                          "end": 1377,
                          "members": []
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1381,
      "end": 1419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1385,
          "end": 1418,
          "id": {
            "type": "Identifier",
            "start": 1385,
            "end": 1418,
            "name": "myChoices",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1394,
              "end": 1418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1396,
                "end": 1418,
                "typeName": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1403,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1403,
                  "end": 1418,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1404,
                      "end": 1417,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1417,
                        "name": "IMyChoiceList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1420,
      "end": 1471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1424,
          "end": 1470,
          "id": {
            "type": "Identifier",
            "start": 1424,
            "end": 1470,
            "name": "myChoicesAndEmpty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1441,
              "end": 1470,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1443,
                "end": 1470,
                "typeName": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1450,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1450,
                  "end": 1470,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 1451,
                      "end": 1469,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1451,
                          "end": 1464,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1451,
                            "end": 1464,
                            "name": "IMyChoiceList",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1467,
                          "end": 1469,
                          "members": []
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1473,
      "end": 1521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1520,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1520,
            "name": "unknownChoices",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1491,
              "end": 1520,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1520,
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1500,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1500,
                  "end": 1520,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1501,
                      "end": 1519,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1501,
                        "end": 1519,
                        "name": "IUnknownChoiceList",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1522,
      "end": 1583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1526,
          "end": 1582,
          "id": {
            "type": "Identifier",
            "start": 1526,
            "end": 1582,
            "name": "unknownChoicesAndEmpty",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1548,
              "end": 1582,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1550,
                "end": 1582,
                "typeName": {
                  "type": "Identifier",
                  "start": 1550,
                  "end": 1557,
                  "name": "choices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1557,
                  "end": 1582,
                  "params": [
                    {
                      "type": "TSIntersectionType",
                      "start": 1558,
                      "end": 1581,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 1558,
                          "end": 1576,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1558,
                            "end": 1576,
                            "name": "IUnknownChoiceList",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 1579,
                          "end": 1581,
                          "members": []
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1607,
      "end": 1657,
      "id": {
        "type": "Identifier",
        "start": 1612,
        "end": 1616,
        "name": "Foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1619,
        "end": 1656,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1619,
            "end": 1632,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1621,
                "end": 1630,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1622,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1622,
                  "end": 1630,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1624,
                    "end": 1630
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 1635,
            "end": 1656,
            "members": [
              {
                "type": "TSIndexSignature",
                "start": 1637,
                "end": 1654,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1647,
                    "name": "x",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1639,
                      "end": 1647,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1641,
                        "end": 1647
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1648,
                  "end": 1654,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1650,
                    "end": 1654,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1650,
                      "end": 1654,
                      "name": "Foo1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "readonly": false,
                "static": false,
                "accessibility": null
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1658,
      "end": 1710,
      "id": {
        "type": "Identifier",
        "start": 1663,
        "end": 1667,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1670,
        "end": 1709,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1670,
            "end": 1683,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1672,
                "end": 1681,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1673,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1673,
                  "end": 1681,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1675,
                    "end": 1681
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSMappedType",
            "start": 1686,
            "end": 1709,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 1689,
              "end": 1700,
              "name": {
                "type": "Identifier",
                "start": 1689,
                "end": 1690,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 1694,
                "end": 1700
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1703,
              "end": 1707,
              "typeName": {
                "type": "Identifier",
                "start": 1703,
                "end": 1707,
                "name": "Foo2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1694,
              "end": 1700
            },
            "key": {
              "type": "Identifier",
              "start": 1689,
              "end": 1690,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1734,
      "end": 1782,
      "id": {
        "type": "Identifier",
        "start": 1751,
        "end": 1755,
        "name": "mock",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1759,
          "end": 1772,
          "name": "_",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1760,
            "end": 1772,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1762,
              "end": 1772,
              "typeName": {
                "type": "Identifier",
                "start": 1762,
                "end": 1769,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1769,
                "end": 1772,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1770,
                    "end": 1771,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1770,
                      "end": 1771,
                      "name": "M",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1755,
        "end": 1758,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1756,
            "end": 1757,
            "name": {
              "type": "Identifier",
              "start": 1756,
              "end": 1757,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1773,
        "end": 1781,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1775,
          "end": 1781,
          "types": [
            {
              "type": "TSTypeLiteral",
              "start": 1775,
              "end": 1777,
              "members": []
            },
            {
              "type": "TSTypeReference",
              "start": 1780,
              "end": 1781,
              "typeName": {
                "type": "Identifier",
                "start": 1780,
                "end": 1781,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1783,
      "end": 1803,
      "expression": {
        "type": "CallExpression",
        "start": 1783,
        "end": 1803,
        "callee": {
          "type": "Identifier",
          "start": 1783,
          "end": 1787,
          "name": "mock",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 1788,
            "end": 1802,
            "source": {
              "type": "Literal",
              "start": 1795,
              "end": 1801,
              "value": "./ex",
              "raw": "'./ex'"
            },
            "options": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
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
  "end": 10,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
