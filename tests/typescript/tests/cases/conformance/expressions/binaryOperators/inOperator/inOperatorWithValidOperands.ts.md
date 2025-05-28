__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 836,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 143,
      "end": 158,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 147,
          "end": 157,
          "id": {
            "type": "Identifier",
            "start": 147,
            "end": 157,
            "decorators": [],
            "name": "a1",
            "optional": false,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 159,
      "end": 174,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 163,
          "end": 173,
          "id": {
            "type": "Identifier",
            "start": 163,
            "end": 173,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 165,
              "end": 173,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 167,
                "end": 173
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 175,
      "end": 208,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 179,
          "end": 207,
          "id": {
            "type": "Identifier",
            "start": 179,
            "end": 207,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 181,
              "end": 207,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 183,
                "end": 207,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 183,
                    "end": 189
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 192,
                    "end": 198
                  },
                  {
                    "type": "TSSymbolKeyword",
                    "start": 201,
                    "end": 207
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 209,
      "end": 221,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 213,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 213,
            "end": 220,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 215,
              "end": 220,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 217,
                "end": 220
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 240,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 239,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 230,
            "decorators": [],
            "name": "ra1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 233,
            "end": 239,
            "left": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 238,
              "end": 239,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 241,
      "end": 259,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 245,
          "end": 258,
          "id": {
            "type": "Identifier",
            "start": 245,
            "end": 248,
            "decorators": [],
            "name": "ra2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 251,
            "end": 258,
            "left": {
              "type": "Identifier",
              "start": 251,
              "end": 253,
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 260,
      "end": 278,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 264,
          "end": 277,
          "id": {
            "type": "Identifier",
            "start": 264,
            "end": 267,
            "decorators": [],
            "name": "ra3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 270,
            "end": 277,
            "left": {
              "type": "Identifier",
              "start": 270,
              "end": 272,
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 276,
              "end": 277,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 279,
      "end": 297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 283,
          "end": 296,
          "id": {
            "type": "Identifier",
            "start": 283,
            "end": 286,
            "decorators": [],
            "name": "ra4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 289,
            "end": 296,
            "left": {
              "type": "Literal",
              "start": 289,
              "end": 291,
              "value": "",
              "raw": "''"
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 295,
              "end": 296,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 315,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 305,
            "decorators": [],
            "name": "ra5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 308,
            "end": 314,
            "left": {
              "type": "Literal",
              "start": 308,
              "end": 309,
              "value": 0,
              "raw": "0"
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 313,
              "end": 314,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 334,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 333,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 323,
            "decorators": [],
            "name": "ra6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 326,
            "end": 333,
            "left": {
              "type": "Identifier",
              "start": 326,
              "end": 328,
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 353,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 352,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 342,
            "decorators": [],
            "name": "ra7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 345,
            "end": 352,
            "left": {
              "type": "Identifier",
              "start": 345,
              "end": 347,
              "decorators": [],
              "name": "a4",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 351,
              "end": 352,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 472,
      "end": 483,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 476,
          "end": 482,
          "id": {
            "type": "Identifier",
            "start": 476,
            "end": 482,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 478,
              "end": 482,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 480,
                "end": 482,
                "members": []
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 485,
      "end": 503,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 489,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 489,
            "end": 492,
            "decorators": [],
            "name": "rb1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 495,
            "end": 502,
            "left": {
              "type": "Identifier",
              "start": 495,
              "end": 496,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 500,
              "end": 502,
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 522,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 508,
            "end": 511,
            "decorators": [],
            "name": "rb2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 514,
            "end": 521,
            "left": {
              "type": "Identifier",
              "start": 514,
              "end": 515,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "ObjectExpression",
              "start": 519,
              "end": 521,
              "properties": []
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 524,
      "end": 571,
      "id": {
        "type": "Identifier",
        "start": 533,
        "end": 536,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 536,
        "end": 539,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 537,
            "end": 538,
            "name": {
              "type": "Identifier",
              "start": 537,
              "end": 538,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 540,
          "end": 544,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 541,
            "end": 544,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 543,
              "end": 544,
              "typeName": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 546,
        "end": 571,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 552,
            "end": 569,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 556,
                "end": 568,
                "id": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 559,
                  "decorators": [],
                  "name": "rb3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 562,
                  "end": 568,
                  "left": {
                    "type": "Identifier",
                    "start": 562,
                    "end": 563,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 567,
                    "end": 568,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 573,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 582,
        "end": 591,
        "decorators": [],
        "name": "unionCase",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 591,
        "end": 597,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 592,
            "end": 593,
            "name": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 595,
            "end": 596,
            "name": {
              "type": "Identifier",
              "start": 595,
              "end": 596,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 598,
          "end": 606,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 599,
            "end": 606,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 601,
              "end": 606,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 601,
                  "end": 602,
                  "typeName": {
                    "type": "Identifier",
                    "start": 601,
                    "end": 602,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 605,
                  "end": 606,
                  "typeName": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 606,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 608,
        "end": 633,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 614,
            "end": 631,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 618,
                "end": 630,
                "id": {
                  "type": "Identifier",
                  "start": 618,
                  "end": 621,
                  "decorators": [],
                  "name": "rb4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 624,
                  "end": 630,
                  "left": {
                    "type": "Identifier",
                    "start": 624,
                    "end": 625,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 629,
                    "end": 630,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 635,
      "end": 698,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 654,
        "decorators": [],
        "name": "unionCase2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 654,
        "end": 657,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 655,
            "end": 656,
            "name": {
              "type": "Identifier",
              "start": 655,
              "end": 656,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 658,
          "end": 671,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 659,
            "end": 671,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 661,
              "end": 671,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 661,
                  "end": 662,
                  "typeName": {
                    "type": "Identifier",
                    "start": 661,
                    "end": 662,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSObjectKeyword",
                  "start": 665,
                  "end": 671
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 673,
        "end": 698,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 679,
            "end": 696,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 683,
                "end": 695,
                "id": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 686,
                  "decorators": [],
                  "name": "rb5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 689,
                  "end": 695,
                  "left": {
                    "type": "Identifier",
                    "start": 689,
                    "end": 690,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "in",
                  "right": {
                    "type": "Identifier",
                    "start": 694,
                    "end": 695,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 700,
      "end": 725,
      "id": {
        "type": "Identifier",
        "start": 710,
        "end": 711,
        "decorators": [],
        "name": "X",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 712,
        "end": 725,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 714,
            "end": 723,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 714,
              "end": 715,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 715,
              "end": 723,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 717,
                "end": 723
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
      "type": "TSInterfaceDeclaration",
      "start": 726,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 736,
        "end": 737,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 738,
        "end": 751,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 740,
            "end": 749,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 740,
              "end": 741,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 741,
              "end": 749,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 743,
                "end": 749
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
      "type": "VariableDeclaration",
      "start": 753,
      "end": 767,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 757,
          "end": 766,
          "id": {
            "type": "Identifier",
            "start": 757,
            "end": 766,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 759,
              "end": 766,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 761,
                "end": 766,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 761,
                    "end": 762,
                    "typeName": {
                      "type": "Identifier",
                      "start": 761,
                      "end": 762,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 765,
                    "end": 766,
                    "typeName": {
                      "type": "Identifier",
                      "start": 765,
                      "end": 766,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 778,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 777,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 774,
              "end": 777,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 776,
                "end": 777,
                "typeName": {
                  "type": "Identifier",
                  "start": 776,
                  "end": 777,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 779,
      "end": 789,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 788,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 788,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 785,
              "end": 788,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 787,
                "end": 788,
                "typeName": {
                  "type": "Identifier",
                  "start": 787,
                  "end": 788,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 791,
      "end": 809,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 795,
          "end": 808,
          "id": {
            "type": "Identifier",
            "start": 795,
            "end": 798,
            "decorators": [],
            "name": "rc1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 801,
            "end": 808,
            "left": {
              "type": "Identifier",
              "start": 801,
              "end": 802,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "Identifier",
              "start": 806,
              "end": 808,
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 810,
      "end": 836,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 814,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 814,
            "end": 817,
            "decorators": [],
            "name": "rc2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 820,
            "end": 835,
            "left": {
              "type": "Identifier",
              "start": 820,
              "end": 821,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "in",
            "right": {
              "type": "LogicalExpression",
              "start": 826,
              "end": 834,
              "left": {
                "type": "Identifier",
                "start": 826,
                "end": 828,
                "decorators": [],
                "name": "c2",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "||",
              "right": {
                "type": "Identifier",
                "start": 832,
                "end": 834,
                "decorators": [],
                "name": "c3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
