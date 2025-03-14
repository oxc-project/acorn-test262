inOperatorWithInvalidOperands.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 946,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 12,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 12,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 13,
      "end": 25,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 25,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 22,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 38,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 37,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 37,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 37,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 34,
                "end": 37
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
      "start": 172,
      "end": 188,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 187,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 187,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 178,
              "end": 187,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 180,
                "end": 187
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
      "start": 189,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 201,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 201,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 197,
                "end": 201
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
      "start": 203,
      "end": 214,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 207,
          "end": 213,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 207,
            "end": 213,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 209,
              "end": 213,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 211,
                "end": 213,
                "members": []
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
      "start": 215,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 219,
          "end": 224,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 219,
            "end": 224,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 223,
                "end": 224,
                "typeName": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 224,
                  "decorators": [],
                  "name": "E",
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
      "start": 226,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 230,
            "end": 246,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 232,
              "end": 246,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 234,
                "end": 246,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 234,
                    "end": 237,
                    "typeName": {
                      "type": "Identifier",
                      "start": 234,
                      "end": 237,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 240,
                    "end": 246
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
      "start": 248,
      "end": 260,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 259,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 259,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 254,
              "end": 259,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 256,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 259,
                  "decorators": [],
                  "name": "Foo",
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
      "start": 262,
      "end": 280,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 266,
          "end": 279,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "ra1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 279,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 274,
              "decorators": [],
              "name": "a1",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 278,
              "end": 279,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 281,
      "end": 299,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 298,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 288,
            "decorators": [],
            "name": "ra2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 291,
            "end": 298,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 291,
              "end": 293,
              "decorators": [],
              "name": "a2",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 297,
              "end": 298,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 300,
      "end": 318,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 304,
          "end": 317,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 304,
            "end": 307,
            "decorators": [],
            "name": "ra3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 310,
            "end": 317,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 310,
              "end": 312,
              "decorators": [],
              "name": "a3",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 316,
              "end": 317,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 319,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 323,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 323,
            "end": 326,
            "decorators": [],
            "name": "ra4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 329,
            "end": 336,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 329,
              "end": 331,
              "decorators": [],
              "name": "a4",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 345,
            "decorators": [],
            "name": "ra5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 348,
            "end": 357,
            "operator": "in",
            "left": {
              "type": "Literal",
              "start": 348,
              "end": 352,
              "raw": "null",
              "value": null
            },
            "right": {
              "type": "Identifier",
              "start": 356,
              "end": 357,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 384,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 383,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 366,
            "decorators": [],
            "name": "ra6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 369,
            "end": 383,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 369,
              "end": 378,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 382,
              "end": 383,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 385,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 403,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 392,
            "decorators": [],
            "name": "ra7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 395,
            "end": 403,
            "operator": "in",
            "left": {
              "type": "MemberExpression",
              "start": 395,
              "end": 398,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 395,
                "end": 396,
                "decorators": [],
                "name": "E",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 397,
                "end": 398,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            },
            "right": {
              "type": "Identifier",
              "start": 402,
              "end": 403,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 405,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 425,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 412,
            "decorators": [],
            "name": "ra8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 415,
            "end": 425,
            "operator": "in",
            "left": {
              "type": "Literal",
              "start": 415,
              "end": 420,
              "raw": "false",
              "value": false
            },
            "right": {
              "type": "Identifier",
              "start": 424,
              "end": 425,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 444,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 434,
            "decorators": [],
            "name": "ra9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 437,
            "end": 444,
            "operator": "in",
            "left": {
              "type": "ObjectExpression",
              "start": 437,
              "end": 439,
              "properties": []
            },
            "right": {
              "type": "Identifier",
              "start": 443,
              "end": 444,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 446,
      "end": 465,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 464,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 454,
            "decorators": [],
            "name": "ra10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 457,
            "end": 464,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 457,
              "end": 459,
              "decorators": [],
              "name": "a5",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 466,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 470,
          "end": 484,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 470,
            "end": 474,
            "decorators": [],
            "name": "ra11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 477,
            "end": 484,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 477,
              "end": 479,
              "decorators": [],
              "name": "a6",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 483,
              "end": 484,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 606,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 610,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 610,
            "end": 620,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 612,
              "end": 620,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 614,
                "end": 620
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
      "start": 622,
      "end": 638,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 637,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 637,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 628,
              "end": 637,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 630,
                "end": 637
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
      "start": 639,
      "end": 654,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 653,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 643,
            "end": 653,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 645,
              "end": 653,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 647,
                "end": 653
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
      "start": 655,
      "end": 668,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 667,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 667,
            "decorators": [],
            "name": "b4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 661,
              "end": 667,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 663,
                "end": 667
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
      "start": 669,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 692,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 692,
            "decorators": [],
            "name": "b5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 692,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 677,
                "end": 692,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 677,
                    "end": 683
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 686,
                    "end": 692
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
      "start": 695,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 699,
          "end": 712,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 699,
            "end": 702,
            "decorators": [],
            "name": "rb1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 705,
            "end": 712,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 705,
              "end": 706,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 710,
              "end": 712,
              "decorators": [],
              "name": "b1",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 731,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 721,
            "decorators": [],
            "name": "rb2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 724,
            "end": 731,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 724,
              "end": 725,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 729,
              "end": 731,
              "decorators": [],
              "name": "b2",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 733,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 750,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 740,
            "decorators": [],
            "name": "rb3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 743,
            "end": 750,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 743,
              "end": 744,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 748,
              "end": 750,
              "decorators": [],
              "name": "b3",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 770,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 756,
          "end": 769,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 756,
            "end": 759,
            "decorators": [],
            "name": "rb4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 762,
            "end": 769,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 762,
              "end": 763,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 767,
              "end": 769,
              "decorators": [],
              "name": "b4",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 789,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 788,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 778,
            "decorators": [],
            "name": "rb5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 781,
            "end": 788,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 781,
              "end": 782,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 786,
              "end": 788,
              "decorators": [],
              "name": "b5",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 790,
      "end": 807,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 794,
          "end": 806,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 794,
            "end": 797,
            "decorators": [],
            "name": "rb6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 800,
            "end": 806,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 800,
              "end": 801,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 805,
              "end": 806,
              "raw": "0",
              "value": 0
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 808,
      "end": 829,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 812,
          "end": 828,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 812,
            "end": 815,
            "decorators": [],
            "name": "rb7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 818,
            "end": 828,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 818,
              "end": 819,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 823,
              "end": 828,
              "raw": "false",
              "value": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 830,
      "end": 848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 834,
          "end": 847,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 834,
            "end": 837,
            "decorators": [],
            "name": "rb8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 840,
            "end": 847,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 840,
              "end": 841,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 845,
              "end": 847,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 849,
      "end": 869,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 868,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 856,
            "decorators": [],
            "name": "rb9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 859,
            "end": 868,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 859,
              "end": 860,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 864,
              "end": 868,
              "raw": "null",
              "value": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 870,
      "end": 896,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 874,
          "end": 895,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 874,
            "end": 878,
            "decorators": [],
            "name": "rb10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 881,
            "end": 895,
            "operator": "in",
            "left": {
              "type": "Identifier",
              "start": 881,
              "end": 882,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 886,
              "end": 895,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 927,
      "end": 946,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 931,
          "end": 945,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 931,
            "end": 934,
            "decorators": [],
            "name": "rc1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 937,
            "end": 945,
            "operator": "in",
            "left": {
              "type": "ObjectExpression",
              "start": 937,
              "end": 939,
              "properties": []
            },
            "right": {
              "type": "Literal",
              "start": 943,
              "end": 945,
              "raw": "''",
              "value": ""
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
