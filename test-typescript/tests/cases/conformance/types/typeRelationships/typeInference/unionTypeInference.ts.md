__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1948,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 24,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 24,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 17,
                "end": 24
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 26,
      "end": 50,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 49,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "decorators": [],
            "name": "s",
            "optional": false,
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
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 51,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 65,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 84,
            "decorators": [],
            "name": "sn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 84,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 69,
                "end": 84,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 69,
                    "end": 75
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 78,
                    "end": 84
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 134,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 110,
          "end": 114,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 116,
          "end": 129,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 129,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 119,
              "end": 129,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 119,
                  "end": 125
                },
                {
                  "type": "TSTypeReference",
                  "start": 128,
                  "end": 129,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 130,
        "end": 133,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 133,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 106,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 107,
            "end": 108,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 156,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 155,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 147,
            "end": 155,
            "arguments": [
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 167,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 192,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 175,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 178,
            "end": 192,
            "arguments": [
              {
                "type": "Literal",
                "start": 181,
                "end": 182,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 184,
                "end": 191,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 178,
              "end": 180,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 200,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 211,
            "end": 220,
            "arguments": [
              {
                "type": "Literal",
                "start": 214,
                "end": 215,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Identifier",
                "start": 217,
                "end": 219,
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 213,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 233,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 264,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "decorators": [],
            "name": "a4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 244,
            "end": 264,
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 256,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Literal",
                "start": 258,
                "end": 263,
                "raw": "\"abc\"",
                "value": "abc"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 280,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "decorators": [],
            "name": "a5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 307,
            "arguments": [
              {
                "type": "Literal",
                "start": 294,
                "end": 299,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 301,
                "end": 306,
                "raw": "\"bar\"",
                "value": "bar"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 293,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 319,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 345,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "decorators": [],
            "name": "a6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 345,
            "arguments": [
              {
                "type": "Literal",
                "start": 333,
                "end": 337,
                "raw": "true",
                "value": true
              },
              {
                "type": "Literal",
                "start": 339,
                "end": 344,
                "raw": "false",
                "value": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "decorators": [],
              "name": "f1",
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
      "type": "VariableDeclaration",
      "start": 359,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 384,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "a7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 370,
            "end": 384,
            "arguments": [
              {
                "type": "Literal",
                "start": 373,
                "end": 380,
                "raw": "\"hello\"",
                "value": "hello"
              },
              {
                "type": "Literal",
                "start": 382,
                "end": 383,
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 372,
              "decorators": [],
              "name": "f1",
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
      "type": "TSDeclareFunction",
      "start": 397,
      "end": 443,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 416,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 420,
          "end": 438,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 425,
            "end": 438,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 427,
              "end": 438,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 428,
                  "end": 434
                },
                {
                  "type": "TSTypeReference",
                  "start": 436,
                  "end": 437,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 439,
        "end": 442,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 441,
          "end": 442,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 419,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 418,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 445,
      "end": 475,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 474,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 451,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 454,
            "end": 474,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 457,
                "end": 473,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 458,
                    "end": 466,
                    "raw": "\"string\"",
                    "value": "string"
                  },
                  {
                    "type": "Literal",
                    "start": 468,
                    "end": 472,
                    "raw": "true",
                    "value": true
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSDeclareFunction",
      "start": 489,
      "end": 538,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 508,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 512,
          "end": 533,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 513,
            "end": 533,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 515,
              "end": 533,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 515,
                  "end": 521
                },
                {
                  "type": "TSLiteralType",
                  "start": 524,
                  "end": 529,
                  "literal": {
                    "type": "Literal",
                    "start": 524,
                    "end": 529,
                    "raw": "false",
                    "value": false
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 532,
                  "end": 533,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 533,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 534,
        "end": 537,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 536,
          "end": 537,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 536,
            "end": 537,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 508,
        "end": 511,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 510,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 540,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 551,
            "end": 556,
            "arguments": [
              {
                "type": "Literal",
                "start": 554,
                "end": 555,
                "raw": "5",
                "value": 5
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 551,
              "end": 553,
              "decorators": [],
              "name": "f3",
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
      "type": "VariableDeclaration",
      "start": 564,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 572,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 575,
            "end": 581,
            "arguments": [
              {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "decorators": [],
                "name": "sn",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "decorators": [],
              "name": "f3",
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
      "type": "VariableDeclaration",
      "start": 594,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 613,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 602,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 605,
            "end": 613,
            "arguments": [
              {
                "type": "Literal",
                "start": 608,
                "end": 612,
                "raw": "true",
                "value": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 605,
              "end": 607,
              "decorators": [],
              "name": "f3",
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
      "type": "VariableDeclaration",
      "start": 624,
      "end": 641,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 640,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 632,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 635,
            "end": 640,
            "arguments": [
              {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 635,
              "end": 637,
              "decorators": [],
              "name": "f3",
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
      "type": "VariableDeclaration",
      "start": 651,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 671,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 659,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 662,
            "end": 671,
            "arguments": [
              {
                "type": "Literal",
                "start": 665,
                "end": 670,
                "raw": "\"abc\"",
                "value": "abc"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "decorators": [],
              "name": "f3",
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
      "type": "TSDeclareFunction",
      "start": 684,
      "end": 725,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 703,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 707,
          "end": 720,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 708,
            "end": 720,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 710,
              "end": 720,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 710,
                  "end": 716
                },
                {
                  "type": "TSTypeReference",
                  "start": 719,
                  "end": 720,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 720,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 721,
        "end": 724,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 723,
          "end": 724,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 723,
            "end": 724,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 703,
        "end": 706,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 704,
            "end": 705,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 727,
      "end": 748,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 747,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 735,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 738,
            "end": 747,
            "arguments": [
              {
                "type": "Literal",
                "start": 741,
                "end": 746,
                "raw": "\"abc\"",
                "value": "abc"
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 738,
              "end": 740,
              "decorators": [],
              "name": "f4",
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
      "type": "VariableDeclaration",
      "start": 749,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 765,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 757,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 760,
            "end": 765,
            "arguments": [
              {
                "type": "Identifier",
                "start": 763,
                "end": 764,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "decorators": [],
              "name": "f4",
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
      "type": "VariableDeclaration",
      "start": 767,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 784,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 775,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 778,
            "end": 784,
            "arguments": [
              {
                "type": "Literal",
                "start": 781,
                "end": 783,
                "raw": "42",
                "value": 42
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 778,
              "end": 780,
              "decorators": [],
              "name": "f4",
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
      "type": "ExportNamedDeclaration",
      "start": 797,
      "end": 876,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 804,
        "end": 876,
        "body": {
          "type": "TSInterfaceBody",
          "start": 821,
          "end": 876,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 827,
              "end": 874,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 827,
                "end": 831,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 835,
                  "end": 858,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 836,
                    "end": 858,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 838,
                      "end": 858,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 839,
                          "end": 843,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 840,
                            "end": 843,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 842,
                              "end": 843,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 842,
                                "end": 843,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 845,
                        "end": 858,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 848,
                          "end": 858,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 848,
                              "end": 849,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 848,
                                "end": 849,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 852,
                              "end": 858,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 855,
                                "end": 858,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 856,
                                    "end": 857,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 856,
                                      "end": 857,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 852,
                                "end": 855,
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 860,
                  "end": 864,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 861,
                    "end": 864,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 863,
                      "end": 864,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 863,
                        "end": 864,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 865,
                "end": 873,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 867,
                  "end": 873,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 870,
                    "end": 873,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 872,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 870,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 831,
                "end": 834,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 832,
                    "end": 833,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 832,
                      "end": 833,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 814,
          "end": 817,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 817,
          "end": 820,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 818,
              "end": 819,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 818,
                "end": 819,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 877,
      "end": 956,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 884,
        "end": 956,
        "body": {
          "type": "TSInterfaceBody",
          "start": 901,
          "end": 956,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 907,
              "end": 954,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 907,
                "end": 911,
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 938,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 916,
                    "end": 938,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 918,
                      "end": 938,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 919,
                          "end": 923,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 920,
                            "end": 923,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 922,
                              "end": 923,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 922,
                                "end": 923,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 925,
                        "end": 938,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 928,
                          "end": 938,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 928,
                              "end": 929,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 928,
                                "end": 929,
                                "decorators": [],
                                "name": "S",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 932,
                              "end": 938,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 935,
                                "end": 938,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 936,
                                    "end": 937,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 936,
                                      "end": 937,
                                      "decorators": [],
                                      "name": "S",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 932,
                                "end": 935,
                                "decorators": [],
                                "name": "Bar",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          ]
                        }
                      },
                      "typeParameters": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 940,
                  "end": 944,
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 941,
                    "end": 944,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 943,
                      "end": 944,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 944,
                        "decorators": [],
                        "name": "S",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "readonly": false,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 945,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 947,
                  "end": 953,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 950,
                    "end": 953,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 951,
                        "end": 952,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 951,
                          "end": 952,
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 950,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "static": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 911,
                "end": 914,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 912,
                    "end": 913,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
                      "decorators": [],
                      "name": "S",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 894,
          "end": 897,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 897,
          "end": 900,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 898,
              "end": 899,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 958,
      "end": 1017,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1001,
        "end": 1017,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1007,
            "end": 1015,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1007,
              "end": 1014,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1007,
                "end": 1009,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 1012,
                "end": 1014,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
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
        "start": 967,
        "end": 970,
        "decorators": [],
        "name": "qux",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 971,
          "end": 984,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 984,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 975,
              "end": 984,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 978,
                "end": 984,
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 979,
                    "end": 983
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 975,
                "end": 978,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 986,
          "end": 999,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 988,
            "end": 999,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 990,
              "end": 999,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 993,
                "end": 999,
                "params": [
                  {
                    "type": "TSVoidKeyword",
                    "start": 994,
                    "end": 998
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 990,
                "end": 993,
                "decorators": [],
                "name": "Bar",
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
      "type": "TSDeclareFunction",
      "start": 1042,
      "end": 1091,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1062,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1066,
          "end": 1083,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1067,
            "end": 1083,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1069,
              "end": 1083,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1069,
                  "end": 1070,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1069,
                    "end": 1070,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1073,
                  "end": 1083,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1080,
                    "end": 1083,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1081,
                        "end": 1082,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1082,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1080,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1084,
        "end": 1090,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1086,
          "end": 1090
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1062,
        "end": 1065,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1063,
            "end": 1064,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1063,
              "end": 1064,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1092,
      "end": 1129,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1104,
          "end": 1128,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1128,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1105,
              "end": 1128,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1107,
                "end": 1128,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1107,
                    "end": 1112,
                    "literal": {
                      "type": "Literal",
                      "start": 1107,
                      "end": 1112,
                      "raw": "false",
                      "value": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1128,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1122,
                      "end": 1128,
                      "params": [
                        {
                          "type": "TSLiteralType",
                          "start": 1123,
                          "end": 1127,
                          "literal": {
                            "type": "Literal",
                            "start": 1123,
                            "end": 1127,
                            "raw": "true",
                            "value": true
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1122,
                      "decorators": [],
                      "name": "Promise",
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1130,
      "end": 1137,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1130,
        "end": 1136,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1134,
            "end": 1135,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1130,
          "end": 1133,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1139,
      "end": 1187,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1159,
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1163,
          "end": 1167,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1164,
            "end": 1167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1166,
              "end": 1167,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 1166,
                "end": 1167,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1169,
          "end": 1182,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1170,
            "end": 1182,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1172,
              "end": 1182,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 1172,
                  "end": 1178
                },
                {
                  "type": "TSTypeReference",
                  "start": 1181,
                  "end": 1182,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1181,
                    "end": 1182,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1183,
        "end": 1186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1185,
          "end": 1186,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1185,
            "end": 1186,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1159,
        "end": 1162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1160,
            "end": 1161,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1160,
              "end": 1161,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1188,
      "end": 1208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1194,
          "end": 1207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1194,
            "end": 1195,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1198,
            "end": 1207,
            "arguments": [
              {
                "type": "Literal",
                "start": 1202,
                "end": 1203,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 1205,
                "end": 1206,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1198,
              "end": 1201,
              "decorators": [],
              "name": "bar",
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
      "type": "VariableDeclaration",
      "start": 1232,
      "end": 1281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1238,
          "end": 1280,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1238,
            "end": 1269,
            "decorators": [],
            "name": "containsPromises",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1254,
              "end": 1269,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 1256,
                "end": 1269,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1263,
                  "end": 1269
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1272,
            "end": 1280,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 1272,
              "end": 1278,
              "decorators": [],
              "name": "Symbol",
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
      "type": "TSTypeAliasDeclaration",
      "start": 1283,
      "end": 1434,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1300,
        "decorators": [],
        "name": "DeepPromised",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 1310,
        "end": 1433,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1310,
            "end": 1339,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 1312,
                "end": 1337,
                "accessibility": null,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1329,
                  "decorators": [],
                  "name": "containsPromises",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": true,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1331,
                  "end": 1337,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1333,
                    "end": 1337,
                    "literal": {
                      "type": "Literal",
                      "start": 1333,
                      "end": 1337,
                      "raw": "true",
                      "value": true
                    }
                  }
                }
              }
            ]
          },
          {
            "type": "TSMappedType",
            "start": 1346,
            "end": 1433,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1357,
              "end": 1364,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1363,
                "end": 1364,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1363,
                  "end": 1364,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            "key": {
              "type": "Identifier",
              "start": 1349,
              "end": 1353,
              "decorators": [],
              "name": "TKey",
              "optional": false,
              "typeAnnotation": null
            },
            "nameType": null,
            "optional": null,
            "readonly": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1367,
              "end": 1431,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1367,
                  "end": 1374,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1369,
                    "end": 1373,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1373,
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1367,
                    "end": 1368,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1367,
                      "end": 1368,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1377,
                  "end": 1398,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1389,
                    "end": 1398,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 1390,
                        "end": 1397,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1392,
                          "end": 1396,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1392,
                            "end": 1396,
                            "decorators": [],
                            "name": "TKey",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1390,
                          "end": 1391,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1390,
                            "end": 1391,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1389,
                    "decorators": [],
                    "name": "DeepPromised",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1401,
                  "end": 1431,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1408,
                    "end": 1431,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1409,
                        "end": 1430,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1421,
                          "end": 1430,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 1422,
                              "end": 1429,
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 1424,
                                "end": 1428,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1424,
                                  "end": 1428,
                                  "decorators": [],
                                  "name": "TKey",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 1422,
                                "end": 1423,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1422,
                                  "end": 1423,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 1409,
                          "end": 1421,
                          "decorators": [],
                          "name": "DeepPromised",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 1401,
                    "end": 1408,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1300,
        "end": 1303,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1301,
            "end": 1302,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1301,
              "end": 1302,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1436,
      "end": 1776,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 1489,
        "end": 1776,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 1495,
            "end": 1597,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 1501,
                "end": 1596,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1581,
                  "decorators": [],
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1524,
                    "end": 1581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1526,
                      "end": 1581,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 1538,
                        "end": 1581,
                        "params": [
                          {
                            "type": "TSTypeLiteral",
                            "start": 1539,
                            "end": 1580,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 1541,
                                "end": 1578,
                                "accessibility": null,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 1542,
                                    "end": 1554,
                                    "decorators": [],
                                    "name": "name",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1546,
                                      "end": 1554,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1548,
                                        "end": 1554
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1555,
                                  "end": 1578,
                                  "typeAnnotation": {
                                    "type": "TSUnionType",
                                    "start": 1557,
                                    "end": 1578,
                                    "types": [
                                      {
                                        "type": "TSTypeLiteral",
                                        "start": 1557,
                                        "end": 1559,
                                        "members": []
                                      },
                                      {
                                        "type": "TSNullKeyword",
                                        "start": 1562,
                                        "end": 1566
                                      },
                                      {
                                        "type": "TSUndefinedKeyword",
                                        "start": 1569,
                                        "end": 1578
                                      }
                                    ]
                                  }
                                }
                              }
                            ]
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 1526,
                        "end": 1538,
                        "decorators": [],
                        "name": "DeepPromised",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                },
                "init": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1596,
                  "decorators": [],
                  "name": "deepPromised",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "ForOfStatement",
            "start": 1602,
            "end": 1774,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 1662,
              "end": 1774,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 1672,
                  "end": 1705,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 1678,
                      "end": 1704,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 1678,
                        "end": 1690,
                        "decorators": [],
                        "name": "awaitedValue",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 1693,
                        "end": 1704,
                        "argument": {
                          "type": "Identifier",
                          "start": 1699,
                          "end": 1704,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "const"
                },
                {
                  "type": "IfStatement",
                  "start": 1714,
                  "end": 1768,
                  "alternate": null,
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 1744,
                    "end": 1768,
                    "directive": null,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1744,
                      "end": 1767,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1750,
                        "end": 1767,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1754,
                            "end": 1766,
                            "decorators": [],
                            "name": "awaitedValue",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1753,
                          "decorators": [],
                          "name": "fun",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  },
                  "test": {
                    "type": "Identifier",
                    "start": 1718,
                    "end": 1730,
                    "decorators": [],
                    "name": "awaitedValue",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 1607,
              "end": 1618,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1613,
                  "end": 1618,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1618,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "CallExpression",
              "start": 1622,
              "end": 1660,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1636,
                  "end": 1659,
                  "decorators": [],
                  "name": "deepPromisedWithIndexer",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 1622,
                "end": 1635,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1622,
                  "end": 1628,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1635,
                  "decorators": [],
                  "name": "values",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1454,
        "decorators": [],
        "name": "fun",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1458,
          "end": 1487,
          "decorators": [],
          "name": "deepPromised",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1470,
            "end": 1487,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1472,
              "end": 1487,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1484,
                "end": 1487,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1485,
                    "end": 1486,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1485,
                      "end": 1486,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1472,
                "end": 1484,
                "decorators": [],
                "name": "DeepPromised",
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
        "start": 1454,
        "end": 1457,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1455,
            "end": 1456,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1455,
              "end": 1456,
              "decorators": [],
              "name": "T",
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
      "start": 1800,
      "end": 1853,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1805,
        "end": 1809,
        "decorators": [],
        "name": "Deep",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1815,
        "end": 1852,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1823,
          "end": 1830,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1829,
            "end": 1830,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 1829,
              "end": 1830,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1818,
          "end": 1819,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": null,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1833,
          "end": 1850,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 1833,
              "end": 1837,
              "indexType": {
                "type": "TSTypeReference",
                "start": 1835,
                "end": 1836,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1836,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "objectType": {
                "type": "TSTypeReference",
                "start": 1833,
                "end": 1834,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1833,
                  "end": 1834,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1840,
              "end": 1850,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1844,
                "end": 1850,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 1845,
                    "end": 1849,
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1847,
                      "end": 1848,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1847,
                        "end": 1848,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1845,
                      "end": 1846,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1845,
                        "end": 1846,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1840,
                "end": 1844,
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1809,
        "end": 1812,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1810,
            "end": 1811,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1810,
              "end": 1811,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1855,
      "end": 1895,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1872,
        "end": 1875,
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1879,
          "end": 1890,
          "decorators": [],
          "name": "dp",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1881,
            "end": 1890,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1883,
              "end": 1890,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1887,
                "end": 1890,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1888,
                    "end": 1889,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1888,
                      "end": 1889,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1883,
                "end": 1887,
                "decorators": [],
                "name": "Deep",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1891,
        "end": 1894,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1893,
          "end": 1894,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 1893,
            "end": 1894,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1875,
        "end": 1878,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1876,
            "end": 1877,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1876,
              "end": 1877,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1896,
      "end": 1938,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1908,
          "end": 1937,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1908,
            "end": 1937,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1910,
              "end": 1937,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1912,
                "end": 1937,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 1914,
                    "end": 1935,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1914,
                      "end": 1915,
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
                      "start": 1915,
                      "end": 1935,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 1917,
                        "end": 1935,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 1917,
                            "end": 1923
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1926,
                            "end": 1935
                          }
                        ]
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
      "declare": true,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1940,
      "end": 1948,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1940,
        "end": 1947,
        "arguments": [
          {
            "type": "Identifier",
            "start": 1944,
            "end": 1946,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1940,
          "end": 1943,
          "decorators": [],
          "name": "baz",
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
