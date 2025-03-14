__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 16,
  "end": 689,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 16,
      "end": 54,
      "body": {
        "type": "TSEnumBody",
        "start": 26,
        "end": 54,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 32,
            "end": 39,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 36,
              "end": 39,
              "raw": "'a'",
              "value": "a"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 52,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 49,
              "end": 52,
              "raw": "'b'",
              "value": "b"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 25,
        "decorators": [],
        "name": "Strs",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 55,
      "end": 96,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 68,
        "decorators": [],
        "name": "TestStrs",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 71,
        "end": 96,
        "constraint": {
          "type": "TSTypeReference",
          "start": 81,
          "end": 85,
          "typeName": {
            "type": "Identifier",
            "start": 81,
            "end": 85,
            "decorators": [],
            "name": "Strs",
            "optional": false
          }
        },
        "key": {
          "type": "Identifier",
          "start": 74,
          "end": 77,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 88,
          "end": 94
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 97,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 159,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 114,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 104,
              "end": 114,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 106,
                "end": 114,
                "typeName": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 114,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 117,
            "end": 159,
            "properties": [
              {
                "type": "Property",
                "start": 123,
                "end": 137,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 124,
                  "end": 130,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 128,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 130,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 133,
                  "end": 137,
                  "raw": "'xo'",
                  "value": "xo"
                }
              },
              {
                "type": "Property",
                "start": 143,
                "end": 157,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 144,
                  "end": 150,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 144,
                    "end": 148,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 149,
                    "end": 150,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 153,
                  "end": 157,
                  "raw": "'xe'",
                  "value": "xe"
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
      "start": 160,
      "end": 213,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 168,
            "decorators": [],
            "name": "ux",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 171,
            "end": 213,
            "properties": [
              {
                "type": "Property",
                "start": 177,
                "end": 191,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 178,
                  "end": 184,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 182,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 183,
                    "end": 184,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 187,
                  "end": 191,
                  "raw": "'xo'",
                  "value": "xo"
                }
              },
              {
                "type": "Property",
                "start": 197,
                "end": 211,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 198,
                  "end": 204,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 202,
                    "decorators": [],
                    "name": "Strs",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 203,
                    "end": 204,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 207,
                  "end": 211,
                  "raw": "'xe'",
                  "value": "xe"
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
      "start": 214,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 220,
          "end": 270,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 220,
            "end": 231,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 231,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 231,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 234,
            "end": 270,
            "properties": [
              {
                "type": "Property",
                "start": 240,
                "end": 251,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 241,
                  "end": 244,
                  "raw": "'a'",
                  "value": "a"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 247,
                  "end": 251,
                  "raw": "'yo'",
                  "value": "yo"
                }
              },
              {
                "type": "Property",
                "start": 257,
                "end": 268,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 258,
                  "end": 261,
                  "raw": "'b'",
                  "value": "b"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 264,
                  "end": 268,
                  "raw": "'ye'",
                  "value": "ye"
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
      "start": 271,
      "end": 285,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 284,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 278,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 281,
            "end": 284,
            "raw": "'a'",
            "value": "a"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 286,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 293,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 296,
            "end": 299,
            "raw": "'b'",
            "value": "b"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 353,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 318,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 318,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 318,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 318,
                  "decorators": [],
                  "name": "TestStrs",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 321,
            "end": 353,
            "properties": [
              {
                "type": "Property",
                "start": 327,
                "end": 336,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 328,
                  "end": 329,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 332,
                  "end": 336,
                  "raw": "'zo'",
                  "value": "zo"
                }
              },
              {
                "type": "Property",
                "start": 342,
                "end": 351,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 344,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 347,
                  "end": 351,
                  "raw": "'ze'",
                  "value": "ze"
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
      "start": 354,
      "end": 397,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 397,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 362,
            "decorators": [],
            "name": "uz",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 365,
            "end": 397,
            "properties": [
              {
                "type": "Property",
                "start": 371,
                "end": 380,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 373,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 376,
                  "end": 380,
                  "raw": "'zo'",
                  "value": "zo"
                }
              },
              {
                "type": "Property",
                "start": 386,
                "end": 395,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 387,
                  "end": 388,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 391,
                  "end": 395,
                  "raw": "'ze'",
                  "value": "ze"
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
      "type": "TSEnumDeclaration",
      "start": 399,
      "end": 425,
      "body": {
        "type": "TSEnumBody",
        "start": 409,
        "end": 425,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 415,
            "end": 416,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 415,
              "end": 416,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 422,
            "end": 423,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 422,
              "end": 423,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 404,
        "end": 408,
        "decorators": [],
        "name": "Nums",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 426,
      "end": 466,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 431,
        "end": 439,
        "decorators": [],
        "name": "TestNums",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 442,
        "end": 466,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 444,
            "end": 454,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 444,
              "end": 445,
              "raw": "0",
              "value": 0
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 445,
              "end": 453,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 447,
                "end": 453
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 455,
            "end": 464,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 455,
              "end": 456,
              "raw": "1",
              "value": 1
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 456,
              "end": 464,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 458,
                "end": 464
              }
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 467,
      "end": 523,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 523,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 484,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 474,
              "end": 484,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 476,
                "end": 484,
                "typeName": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 484,
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 487,
            "end": 523,
            "properties": [
              {
                "type": "Property",
                "start": 493,
                "end": 504,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 494,
                  "end": 500,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 494,
                    "end": 498,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 499,
                    "end": 500,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 504,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 510,
                "end": 521,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 511,
                  "end": 517,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 511,
                    "end": 515,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 516,
                    "end": 517,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 520,
                  "end": 521,
                  "raw": "2",
                  "value": 2
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
      "start": 524,
      "end": 571,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 530,
          "end": 571,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 530,
            "end": 532,
            "decorators": [],
            "name": "un",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 535,
            "end": 571,
            "properties": [
              {
                "type": "Property",
                "start": 541,
                "end": 552,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 542,
                  "end": 548,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 542,
                    "end": 546,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 547,
                    "end": 548,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 551,
                  "end": 552,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 558,
                "end": 569,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 559,
                  "end": 565,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 559,
                    "end": 563,
                    "decorators": [],
                    "name": "Nums",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 564,
                    "end": 565,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 568,
                  "end": 569,
                  "raw": "4",
                  "value": 4
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
      "start": 572,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 578,
          "end": 584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 578,
            "end": 580,
            "decorators": [],
            "name": "an",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 583,
            "end": 584,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 599,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 592,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 592,
            "end": 594,
            "decorators": [],
            "name": "bn",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 597,
            "end": 598,
            "raw": "1",
            "value": 1
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 600,
      "end": 648,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 648,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 617,
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 607,
              "end": 617,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 609,
                "end": 617,
                "typeName": {
                  "type": "Identifier",
                  "start": 609,
                  "end": 617,
                  "decorators": [],
                  "name": "TestNums",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 620,
            "end": 648,
            "properties": [
              {
                "type": "Property",
                "start": 626,
                "end": 633,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 627,
                  "end": 629,
                  "decorators": [],
                  "name": "an",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 632,
                  "end": 633,
                  "raw": "5",
                  "value": 5
                }
              },
              {
                "type": "Property",
                "start": 639,
                "end": 646,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 640,
                  "end": 642,
                  "decorators": [],
                  "name": "bn",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 645,
                  "end": 646,
                  "raw": "6",
                  "value": 6
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
      "start": 649,
      "end": 688,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 655,
          "end": 688,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 655,
            "end": 657,
            "decorators": [],
            "name": "um",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 660,
            "end": 688,
            "properties": [
              {
                "type": "Property",
                "start": 666,
                "end": 673,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 667,
                  "end": 669,
                  "decorators": [],
                  "name": "an",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 672,
                  "end": 673,
                  "raw": "7",
                  "value": 7
                }
              },
              {
                "type": "Property",
                "start": 679,
                "end": 686,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 680,
                  "end": 682,
                  "decorators": [],
                  "name": "bn",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 685,
                  "end": 686,
                  "raw": "8",
                  "value": 8
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
