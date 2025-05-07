__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 788,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 46,
        "end": 94,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 62,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 52,
              "end": 53,
              "raw": "0",
              "value": 0,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 61,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 55,
                "end": 61
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 67,
            "end": 77,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 67,
              "end": 68,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 76,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 70,
                "end": 76
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 82,
            "end": 92,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 82,
              "end": 88,
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 91,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 90,
                "end": 91,
                "literal": {
                  "type": "Literal",
                  "start": 90,
                  "end": 91,
                  "raw": "2",
                  "value": 2,
                  "regex": null,
                  "bigint": null
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
          "start": 25,
          "end": 45,
          "expression": {
            "type": "Identifier",
            "start": 25,
            "end": 30,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 30,
            "end": 45,
            "params": [
              {
                "type": "TSUnionType",
                "start": 31,
                "end": 44,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 31,
                    "end": 37
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  }
                ]
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "StrNum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 96,
      "end": 120,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 100,
          "end": 119,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 100,
            "end": 119,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 119,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 103,
                "end": 119,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                ]
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
      "start": 121,
      "end": 134,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 125,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 125,
            "end": 134,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 134,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 134,
                  "decorators": [],
                  "name": "StrNum",
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
      "start": 135,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 139,
          "end": 190,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 139,
            "end": 190,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 140,
              "end": 190,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 142,
                "end": 190,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 148,
                    "end": 158,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 148,
                      "end": 149,
                      "raw": "0",
                      "value": 0,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 149,
                      "end": 157,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 151,
                        "end": 157
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 163,
                    "end": 173,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 163,
                      "end": 164,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 164,
                      "end": 172,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 166,
                        "end": 172
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 178,
                    "end": 188,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 184,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 184,
                      "end": 187,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 186,
                        "end": 187,
                        "literal": {
                          "type": "Literal",
                          "start": 186,
                          "end": 187,
                          "raw": "2",
                          "value": 2,
                          "regex": null,
                          "bigint": null
                        }
                      }
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
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 210,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 209,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 196,
            "end": 205,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 197,
                "end": 198,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 200,
                "end": 201,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 203,
                "end": 204,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 228,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 215,
            "end": 224,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 219,
                "end": 220,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 222,
                "end": 223,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 227,
            "end": 228,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 247,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 234,
            "end": 243,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 235,
                "end": 236,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 241,
                "end": 242,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 246,
            "end": 247,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 281,
            "decorators": [],
            "name": "j1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 255,
              "end": 281,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 257,
                "end": 281,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 266,
                    "end": 272
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 274,
                    "end": 280
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 284,
            "end": 285,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 324,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 323,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 319,
            "decorators": [],
            "name": "j2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 319,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 295,
                "end": 319,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 304,
                    "end": 310
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 312,
                    "end": 318
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 322,
            "end": 323,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 325,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 329,
          "end": 361,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 329,
            "end": 357,
            "decorators": [],
            "name": "j3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 331,
              "end": 357,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 333,
                "end": 357,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 334,
                    "end": 340
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 342,
                    "end": 348
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 350,
                    "end": 356
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 360,
            "end": 361,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 399,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 395,
            "decorators": [],
            "name": "k1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 369,
              "end": 395,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 371,
                "end": 395,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 372,
                    "end": 378
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 380,
                    "end": 386
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 388,
                    "end": 394
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 398,
            "end": 399,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 401,
      "end": 438,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 405,
          "end": 437,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 405,
            "end": 433,
            "decorators": [],
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 407,
              "end": 433,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 409,
                "end": 433,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 410,
                    "end": 416
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 418,
                    "end": 424
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 426,
                    "end": 432
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 439,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 443,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 443,
            "end": 471,
            "decorators": [],
            "name": "k3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 471,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 447,
                "end": 471,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 448,
                    "end": 454
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 456,
                    "end": 462
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 464,
                    "end": 470
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 474,
            "end": 475,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 498,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 497,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 481,
            "end": 493,
            "decorators": [],
            "name": "l1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 483,
              "end": 493,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 485,
                "end": 493,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 486,
                    "end": 492
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 496,
            "end": 497,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 499,
      "end": 520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 503,
          "end": 519,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 503,
            "end": 515,
            "decorators": [],
            "name": "l2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 505,
              "end": 515,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 507,
                "end": 515,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 521,
      "end": 542,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 525,
          "end": 541,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 525,
            "end": 537,
            "decorators": [],
            "name": "l3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 527,
              "end": 537,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 529,
                "end": 537,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 530,
                    "end": 536
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 540,
            "end": 541,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 543,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 547,
          "end": 563,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 547,
            "end": 559,
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 549,
              "end": 559,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 551,
                "end": 559,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 552,
                    "end": 558
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 562,
            "end": 563,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 565,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 569,
          "end": 585,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 569,
            "end": 581,
            "decorators": [],
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 573,
                "end": 581,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 574,
                    "end": 580
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 584,
            "end": 585,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 587,
      "end": 608,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 607,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 603,
            "decorators": [],
            "name": "m3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 593,
              "end": 603,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 595,
                "end": 603,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 596,
                    "end": 602
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 609,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 613,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 613,
            "end": 633,
            "decorators": [],
            "name": "n1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 615,
              "end": 633,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 617,
                "end": 633,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 618,
                    "end": 624
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 626,
                    "end": 632
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 636,
            "end": 637,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 639,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 667,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 663,
            "decorators": [],
            "name": "n2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 663,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 647,
                "end": 663,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 648,
                    "end": 654
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 656,
                    "end": 662
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 666,
            "end": 667,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 669,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 697,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 693,
            "decorators": [],
            "name": "n3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 693,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 677,
                "end": 693,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 678,
                    "end": 684
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 686,
                    "end": 692
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 696,
            "end": 697,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 699,
      "end": 728,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 703,
          "end": 727,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 703,
            "end": 723,
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 705,
              "end": 723,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 707,
                "end": 723,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 708,
                    "end": 714
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 716,
                    "end": 722
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 726,
            "end": 727,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 729,
      "end": 758,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 757,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 753,
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 735,
              "end": 753,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 737,
                "end": 753,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 738,
                    "end": 744
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 746,
                    "end": 752
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 759,
      "end": 788,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 763,
          "end": 787,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 763,
            "end": 783,
            "decorators": [],
            "name": "o3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 765,
              "end": 783,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 767,
                "end": 783,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 768,
                    "end": 774
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 776,
                    "end": 782
                  }
                ]
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 786,
            "end": 787,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
