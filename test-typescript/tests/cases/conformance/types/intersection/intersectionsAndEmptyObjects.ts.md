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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 109,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 112,
        "end": 125,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 114,
            "end": 123,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 117,
                "end": 123
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 150,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 136,
        "end": 149,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 138,
            "end": 147,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
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
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 151,
      "end": 163,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 156,
        "end": 157,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 160,
        "end": 162,
        "members": []
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 179,
            "decorators": [],
            "name": "x01",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 174,
                      "end": 175,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 178,
                    "end": 179,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 179,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 195,
            "decorators": [],
            "name": "x02",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 190,
                      "end": 191,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 195,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 195,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 201,
            "end": 211,
            "decorators": [],
            "name": "x03",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 206,
                      "end": 207,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 210,
                    "end": 211,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 210,
                      "end": 211,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 231,
            "decorators": [],
            "name": "x04",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 226,
                    "end": 227,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 230,
                    "end": 231,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 237,
            "end": 252,
            "decorators": [],
            "name": "x05",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 252,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 258,
            "end": 273,
            "decorators": [],
            "name": "x06",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 263,
                      "end": 264,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 267,
                    "end": 273
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 285,
            "decorators": [],
            "name": "x07",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 285,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 285,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 285,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 302,
            "decorators": [],
            "name": "x08",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 296,
                      "end": 297,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 300,
                    "end": 302,
                    "members": []
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 342,
            "decorators": [],
            "name": "x09",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 318,
                      "end": 319,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 327,
                      "end": 328,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 336,
                      "end": 337,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 340,
                    "end": 342,
                    "members": []
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 345,
      "end": 359,
      "body": {
        "type": "TSInterfaceBody",
        "start": 357,
        "end": 359,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 356,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 360,
      "end": 374,
      "body": {
        "type": "TSInterfaceBody",
        "start": 372,
        "end": 374,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 371,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 380,
            "end": 390,
            "decorators": [],
            "name": "x10",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 385,
                      "end": 386,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 389,
                    "end": 390,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 389,
                      "end": 390,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 406,
            "decorators": [],
            "name": "x11",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 406,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 406,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 412,
            "end": 430,
            "decorators": [],
            "name": "x12",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 417,
                      "end": 418,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 421,
                    "end": 422,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 425,
                    "end": 426,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 425,
                      "end": 426,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 429,
                    "end": 430,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 429,
                      "end": 430,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 446,
            "decorators": [],
            "name": "x13",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 441,
                      "end": 442,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 445,
                    "end": 446,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 446,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 452,
            "end": 474,
            "decorators": [],
            "name": "x14",
            "optional": false,
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 457,
                      "end": 458,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 461,
                    "end": 462,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 461,
                      "end": 462,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 465,
                    "end": 466,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 465,
                      "end": 466,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 469,
                    "end": 470,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 470,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 473,
                    "end": 474,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 473,
                      "end": 474,
                      "decorators": [],
                      "name": "E",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 499,
      "end": 544,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 504,
        "end": 514,
        "decorators": [],
        "name": "Dictionary",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 517,
        "end": 543,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 519,
            "end": 541,
            "accessibility": null,
            "parameters": [
              {
                "type": "Identifier",
                "start": 520,
                "end": 532,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 524,
                  "end": 532,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 526,
                    "end": 532
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 533,
              "end": 541,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 535,
                "end": 541
              }
            }
          }
        ]
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 552,
            "end": 573,
            "decorators": [],
            "name": "intersectDictionaries",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 576,
            "end": 683,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 658,
              "end": 683,
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
                  "decorators": [],
                  "name": "d1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "decorators": [],
                  "name": "d2",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 671,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 664,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 665,
                  "end": 671,
                  "decorators": [],
                  "name": "assign",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 626,
                "end": 632,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 628,
                  "end": 632,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 630,
                    "end": 632,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 630,
                      "end": 632,
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 636,
                "end": 642,
                "decorators": [],
                "name": "d2",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 638,
                  "end": 642,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 640,
                    "end": 642,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 640,
                      "end": 642,
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
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
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 647,
                      "end": 649,
                      "decorators": [],
                      "name": "F1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 652,
                    "end": 654,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 652,
                      "end": 654,
                      "decorators": [],
                      "name": "F2",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
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
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 588,
                    "end": 598,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 588,
                      "end": 598,
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 577,
                    "end": 579,
                    "decorators": [],
                    "name": "F1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                },
                {
                  "type": "TSTypeParameter",
                  "start": 600,
                  "end": 621,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 611,
                    "end": 621,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 611,
                      "end": 621,
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 600,
                    "end": 602,
                    "decorators": [],
                    "name": "F2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 706,
            "decorators": [],
            "name": "testDictionary",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 709,
            "end": 749,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 746,
              "end": 749,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 732,
                "end": 741,
                "decorators": [],
                "name": "_value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 738,
                  "end": 741,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 740,
                    "end": 741,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 740,
                      "end": 741,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ],
            "returnType": null,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 709,
              "end": 731,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 710,
                  "end": 730,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 720,
                    "end": 730,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 720,
                      "end": 730,
                      "decorators": [],
                      "name": "Dictionary",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 710,
                    "end": 711,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "out": false
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 760,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 763,
            "end": 765,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 767,
      "end": 786,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 767,
        "end": 785,
        "arguments": [
          {
            "type": "Identifier",
            "start": 782,
            "end": 784,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 767,
          "end": 781,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 795,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 798,
            "end": 827,
            "arguments": [
              {
                "type": "Identifier",
                "start": 820,
                "end": 822,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 824,
                "end": 826,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 798,
              "end": 819,
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 829,
      "end": 848,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 829,
        "end": 847,
        "arguments": [
          {
            "type": "Identifier",
            "start": 844,
            "end": 846,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 829,
          "end": 843,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 856,
            "end": 858,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 865,
                  "end": 866,
                  "decorators": [],
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 868,
                  "end": 870,
                  "raw": "''",
                  "value": ""
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
      "type": "ExpressionStatement",
      "start": 875,
      "end": 894,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 875,
        "end": 893,
        "arguments": [
          {
            "type": "Identifier",
            "start": 890,
            "end": 892,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 875,
          "end": 889,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 901,
            "end": 903,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 906,
            "end": 935,
            "arguments": [
              {
                "type": "Identifier",
                "start": 928,
                "end": 930,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 932,
                "end": 934,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 906,
              "end": 927,
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 937,
      "end": 956,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 937,
        "end": 955,
        "arguments": [
          {
            "type": "Identifier",
            "start": 952,
            "end": 954,
            "decorators": [],
            "name": "d4",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 937,
          "end": 951,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 963,
            "end": 965,
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 968,
            "end": 997,
            "arguments": [
              {
                "type": "Identifier",
                "start": 990,
                "end": 992,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 994,
                "end": 996,
                "decorators": [],
                "name": "d1",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 968,
              "end": 989,
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 999,
      "end": 1018,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 999,
        "end": 1017,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1014,
            "end": 1016,
            "decorators": [],
            "name": "d5",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 999,
          "end": 1013,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1025,
            "end": 1027,
            "decorators": [],
            "name": "d6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1030,
            "end": 1059,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1052,
                "end": 1054,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 1056,
                "end": 1058,
                "decorators": [],
                "name": "d3",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1030,
              "end": 1051,
              "decorators": [],
              "name": "intersectDictionaries",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 1061,
      "end": 1080,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1061,
        "end": 1079,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1076,
            "end": 1078,
            "decorators": [],
            "name": "d6",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1061,
          "end": 1075,
          "decorators": [],
          "name": "testDictionary",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1104,
      "end": 1227,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1109,
        "end": 1116,
        "decorators": [],
        "name": "choices",
        "optional": false,
        "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1172,
              "end": 1183,
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null
            }
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1192,
                  "end": 1197,
                  "decorators": [],
                  "name": "shoes",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1197,
                  "end": 1205,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1198,
                    "end": 1205
                  }
                }
              },
              {
                "type": "TSPropertySignature",
                "start": 1211,
                "end": 1224,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1211,
                  "end": 1215,
                  "decorators": [],
                  "name": "food",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1215,
                  "end": 1223,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1216,
                    "end": 1223
                  }
                }
              }
            ]
          }
        ]
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
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1137,
              "end": 1168,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1143,
                  "end": 1166,
                  "accessibility": null,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1144,
                      "end": 1155,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1147,
                        "end": 1155,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1149,
                          "end": 1155
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1156,
                    "end": 1165,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1158,
                      "end": 1165
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1117,
              "end": 1128,
              "decorators": [],
              "name": "IChoiceList",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1229,
      "end": 1268,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1234,
        "end": 1247,
        "decorators": [],
        "name": "IMyChoiceList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1250,
        "end": 1267,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1256,
            "end": 1265,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1256,
              "end": 1259,
              "decorators": [],
              "name": "car",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
                  "raw": "true",
                  "value": true
                }
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1270,
      "end": 1299,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1275,
        "end": 1293,
        "decorators": [],
        "name": "IUnknownChoiceList",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1296,
        "end": 1298,
        "members": []
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1305,
            "end": 1332,
            "decorators": [],
            "name": "defaultChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1319,
              "end": 1332,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1321,
                "end": 1332,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1321,
                  "end": 1328,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1334,
      "end": 1379,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1338,
          "end": 1378,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1338,
            "end": 1378,
            "decorators": [],
            "name": "defaultChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1360,
              "end": 1378,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1362,
                "end": 1378,
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1362,
                  "end": 1369,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1381,
      "end": 1419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1385,
          "end": 1418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1385,
            "end": 1418,
            "decorators": [],
            "name": "myChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1394,
              "end": 1418,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1396,
                "end": 1418,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1403,
                  "end": 1418,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1404,
                      "end": 1417,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1404,
                        "end": 1417,
                        "decorators": [],
                        "name": "IMyChoiceList",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1396,
                  "end": 1403,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1420,
      "end": 1471,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1424,
          "end": 1470,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1424,
            "end": 1470,
            "decorators": [],
            "name": "myChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1441,
              "end": 1470,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1443,
                "end": 1470,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1451,
                            "end": 1464,
                            "decorators": [],
                            "name": "IMyChoiceList",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1443,
                  "end": 1450,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1473,
      "end": 1521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1520,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1520,
            "decorators": [],
            "name": "unknownChoices",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1491,
              "end": 1520,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1493,
                "end": 1520,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1500,
                  "end": 1520,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1501,
                      "end": 1519,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1501,
                        "end": 1519,
                        "decorators": [],
                        "name": "IUnknownChoiceList",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1493,
                  "end": 1500,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1522,
      "end": 1583,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1526,
          "end": 1582,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1526,
            "end": 1582,
            "decorators": [],
            "name": "unknownChoicesAndEmpty",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1548,
              "end": 1582,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1550,
                "end": 1582,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1558,
                            "end": 1576,
                            "decorators": [],
                            "name": "IUnknownChoiceList",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 1550,
                  "end": 1557,
                  "decorators": [],
                  "name": "choices",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 1607,
      "end": 1657,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1612,
        "end": 1616,
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1621,
                  "end": 1622,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1622,
                  "end": 1630,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1624,
                    "end": 1630
                  }
                }
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
                "accessibility": null,
                "parameters": [
                  {
                    "type": "Identifier",
                    "start": 1638,
                    "end": 1647,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1639,
                      "end": 1647,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 1641,
                        "end": 1647
                      }
                    }
                  }
                ],
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1648,
                  "end": 1654,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1650,
                    "end": 1654,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1650,
                      "end": 1654,
                      "decorators": [],
                      "name": "Foo1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1658,
      "end": 1710,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1663,
        "end": 1667,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
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
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1672,
                  "end": 1673,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1673,
                  "end": 1681,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1675,
                    "end": 1681
                  }
                }
              }
            ]
          },
          {
            "type": "TSMappedType",
            "start": 1686,
            "end": 1709,
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 1694,
              "end": 1700
            },
            "key": {
              "type": "Identifier",
              "start": 1689,
              "end": 1690,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": false,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1703,
              "end": 1707,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1703,
                "end": 1707,
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1734,
      "end": 1782,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1751,
        "end": 1755,
        "decorators": [],
        "name": "mock",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1759,
          "end": 1772,
          "decorators": [],
          "name": "_",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1760,
            "end": 1772,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1762,
              "end": 1772,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1769,
                "end": 1772,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1770,
                    "end": 1771,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1770,
                      "end": 1771,
                      "decorators": [],
                      "name": "M",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1762,
                "end": 1769,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1780,
                "end": 1781,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1755,
        "end": 1758,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1756,
            "end": 1757,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1756,
              "end": 1757,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1783,
      "end": 1803,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1783,
        "end": 1803,
        "arguments": [
          {
            "type": "ImportExpression",
            "start": 1788,
            "end": 1802,
            "options": null,
            "source": {
              "type": "Literal",
              "start": 1795,
              "end": 1801,
              "raw": "'./ex'",
              "value": "./ex"
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1783,
          "end": 1787,
          "decorators": [],
          "name": "mock",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
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
  "end": 9,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 9,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
