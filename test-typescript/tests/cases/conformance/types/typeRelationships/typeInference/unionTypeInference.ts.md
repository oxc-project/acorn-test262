__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1949,
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 24,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 17,
                "end": 24
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 49,
            "name": "s",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 65,
            "end": 84,
            "name": "sn",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "TSDeclareFunction",
      "start": 87,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "name": "f1",
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
          "start": 110,
          "end": 114,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 114,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 113,
              "end": 114,
              "typeName": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
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
        },
        {
          "type": "Identifier",
          "start": 116,
          "end": 129,
          "name": "y",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 128,
                    "end": 129,
                    "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 106,
        "end": 109,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 107,
            "end": 108,
            "name": {
              "type": "Identifier",
              "start": 107,
              "end": 108,
              "name": "T",
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
        "start": 130,
        "end": 133,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 132,
          "end": 133,
          "typeName": {
            "type": "Identifier",
            "start": 132,
            "end": 133,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 144,
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 147,
            "end": 155,
            "callee": {
              "type": "Identifier",
              "start": 147,
              "end": 149,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 153,
                "end": 154,
                "value": 2,
                "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 167,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 173,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 173,
            "end": 175,
            "name": "a2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 178,
            "end": 192,
            "callee": {
              "type": "Identifier",
              "start": 178,
              "end": 180,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 181,
                "end": 182,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 184,
                "end": 191,
                "value": "hello",
                "raw": "\"hello\""
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
      "type": "VariableDeclaration",
      "start": 200,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 220,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "name": "a3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 211,
            "end": 220,
            "callee": {
              "type": "Identifier",
              "start": 211,
              "end": 213,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 214,
                "end": 215,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Identifier",
                "start": 217,
                "end": 219,
                "name": "sn",
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
      "type": "VariableDeclaration",
      "start": 233,
      "end": 265,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 264,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 241,
            "name": "a4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 244,
            "end": 264,
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 246,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 247,
                "end": 256,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Literal",
                "start": 258,
                "end": 263,
                "value": "abc",
                "raw": "\"abc\""
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
      "type": "VariableDeclaration",
      "start": 280,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 286,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 286,
            "end": 288,
            "name": "a5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 291,
            "end": 307,
            "callee": {
              "type": "Identifier",
              "start": 291,
              "end": 293,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 294,
                "end": 299,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 301,
                "end": 306,
                "value": "bar",
                "raw": "\"bar\""
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
      "type": "VariableDeclaration",
      "start": 319,
      "end": 346,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 325,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 325,
            "end": 327,
            "name": "a6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 330,
            "end": 345,
            "callee": {
              "type": "Identifier",
              "start": 330,
              "end": 332,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 333,
                "end": 337,
                "value": true,
                "raw": "true"
              },
              {
                "type": "Literal",
                "start": 339,
                "end": 344,
                "value": false,
                "raw": "false"
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
      "type": "VariableDeclaration",
      "start": 359,
      "end": 385,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 384,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "name": "a7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 370,
            "end": 384,
            "callee": {
              "type": "Identifier",
              "start": 370,
              "end": 372,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 373,
                "end": 380,
                "value": "hello",
                "raw": "\"hello\""
              },
              {
                "type": "Literal",
                "start": 382,
                "end": 383,
                "value": 1,
                "raw": "1"
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
      "type": "TSDeclareFunction",
      "start": 397,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 414,
        "end": 416,
        "name": "f2",
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
          "start": 420,
          "end": 438,
          "name": "value",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 437,
                    "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 416,
        "end": 419,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 417,
            "end": 418,
            "name": {
              "type": "Identifier",
              "start": 417,
              "end": 418,
              "name": "T",
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
        "start": 439,
        "end": 442,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 441,
          "end": 442,
          "typeName": {
            "type": "Identifier",
            "start": 441,
            "end": 442,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 451,
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 454,
            "end": 474,
            "callee": {
              "type": "Identifier",
              "start": 454,
              "end": 456,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "value": "string",
                    "raw": "\"string\""
                  },
                  {
                    "type": "Literal",
                    "start": 468,
                    "end": 472,
                    "value": true,
                    "raw": "true"
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 489,
      "end": 538,
      "id": {
        "type": "Identifier",
        "start": 506,
        "end": 508,
        "name": "f3",
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
          "start": 512,
          "end": 533,
          "name": "x",
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
                    "value": false,
                    "raw": "false"
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 532,
                  "end": 533,
                  "typeName": {
                    "type": "Identifier",
                    "start": 532,
                    "end": 533,
                    "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 508,
        "end": 511,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 510,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "T",
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
        "start": 534,
        "end": 537,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 536,
          "end": 537,
          "typeName": {
            "type": "Identifier",
            "start": 536,
            "end": 537,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 548,
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 551,
            "end": 556,
            "callee": {
              "type": "Identifier",
              "start": 551,
              "end": 553,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 554,
                "end": 555,
                "value": 5,
                "raw": "5"
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
      "type": "VariableDeclaration",
      "start": 564,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 570,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 570,
            "end": 572,
            "name": "c2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 575,
            "end": 581,
            "callee": {
              "type": "Identifier",
              "start": 575,
              "end": 577,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 578,
                "end": 580,
                "name": "sn",
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
      "type": "VariableDeclaration",
      "start": 594,
      "end": 614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 600,
          "end": 613,
          "id": {
            "type": "Identifier",
            "start": 600,
            "end": 602,
            "name": "c3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 605,
            "end": 613,
            "callee": {
              "type": "Identifier",
              "start": 605,
              "end": 607,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 608,
                "end": 612,
                "value": true,
                "raw": "true"
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
      "type": "VariableDeclaration",
      "start": 624,
      "end": 641,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 632,
            "name": "c4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 635,
            "end": 640,
            "callee": {
              "type": "Identifier",
              "start": 635,
              "end": 637,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 638,
                "end": 639,
                "name": "b",
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
      "type": "VariableDeclaration",
      "start": 651,
      "end": 672,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 657,
          "end": 671,
          "id": {
            "type": "Identifier",
            "start": 657,
            "end": 659,
            "name": "c5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 662,
            "end": 671,
            "callee": {
              "type": "Identifier",
              "start": 662,
              "end": 664,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 665,
                "end": 670,
                "value": "abc",
                "raw": "\"abc\""
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
      "type": "TSDeclareFunction",
      "start": 684,
      "end": 725,
      "id": {
        "type": "Identifier",
        "start": 701,
        "end": 703,
        "name": "f4",
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
          "start": 707,
          "end": 720,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 719,
                    "end": 720,
                    "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 703,
        "end": 706,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 704,
            "end": 705,
            "name": {
              "type": "Identifier",
              "start": 704,
              "end": 705,
              "name": "T",
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
        "start": 721,
        "end": 724,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 723,
          "end": 724,
          "typeName": {
            "type": "Identifier",
            "start": 723,
            "end": 724,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 735,
            "name": "d1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 738,
            "end": 747,
            "callee": {
              "type": "Identifier",
              "start": 738,
              "end": 740,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 741,
                "end": 746,
                "value": "abc",
                "raw": "\"abc\""
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
      "type": "VariableDeclaration",
      "start": 749,
      "end": 766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 755,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 755,
            "end": 757,
            "name": "d2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 760,
            "end": 765,
            "callee": {
              "type": "Identifier",
              "start": 760,
              "end": 762,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 763,
                "end": 764,
                "name": "s",
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
      "type": "VariableDeclaration",
      "start": 767,
      "end": 785,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 773,
          "end": 784,
          "id": {
            "type": "Identifier",
            "start": 773,
            "end": 775,
            "name": "d3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 778,
            "end": 784,
            "callee": {
              "type": "Identifier",
              "start": 778,
              "end": 780,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 781,
                "end": 783,
                "value": 42,
                "raw": "42"
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
      "type": "ExportNamedDeclaration",
      "start": 797,
      "end": 876,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 804,
        "end": 876,
        "id": {
          "type": "Identifier",
          "start": 814,
          "end": 817,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 817,
          "end": 820,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 818,
              "end": 819,
              "name": {
                "type": "Identifier",
                "start": 818,
                "end": 819,
                "name": "T",
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 821,
          "end": 876,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 827,
              "end": 874,
              "key": {
                "type": "Identifier",
                "start": 827,
                "end": 831,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 831,
                "end": 834,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 832,
                    "end": 833,
                    "name": {
                      "type": "Identifier",
                      "start": 832,
                      "end": 833,
                      "name": "U",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 835,
                  "end": 858,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 836,
                    "end": 858,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 838,
                      "end": 858,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 839,
                          "end": 843,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 840,
                            "end": 843,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 842,
                              "end": 843,
                              "typeName": {
                                "type": "Identifier",
                                "start": 842,
                                "end": 843,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 848,
                                "end": 849,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 852,
                              "end": 858,
                              "typeName": {
                                "type": "Identifier",
                                "start": 852,
                                "end": 855,
                                "name": "Foo",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 855,
                                "end": 858,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 856,
                                    "end": 857,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 856,
                                      "end": 857,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 860,
                  "end": 864,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 861,
                    "end": 864,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 863,
                      "end": 864,
                      "typeName": {
                        "type": "Identifier",
                        "start": 863,
                        "end": 864,
                        "name": "U",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 865,
                "end": 873,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 867,
                  "end": 873,
                  "typeName": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 870,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 870,
                    "end": 873,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 871,
                        "end": 872,
                        "typeName": {
                          "type": "Identifier",
                          "start": 871,
                          "end": 872,
                          "name": "U",
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 877,
      "end": 956,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 884,
        "end": 956,
        "id": {
          "type": "Identifier",
          "start": 894,
          "end": 897,
          "name": "Bar",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 897,
          "end": 900,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 898,
              "end": 899,
              "name": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "name": "T",
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
        "body": {
          "type": "TSInterfaceBody",
          "start": 901,
          "end": 956,
          "body": [
            {
              "type": "TSMethodSignature",
              "start": 907,
              "end": 954,
              "key": {
                "type": "Identifier",
                "start": 907,
                "end": 911,
                "name": "then",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false,
              "kind": "method",
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 911,
                "end": 914,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 912,
                    "end": 913,
                    "name": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 913,
                      "name": "S",
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 915,
                  "end": 938,
                  "name": "f",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 916,
                    "end": 938,
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "start": 918,
                      "end": 938,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 919,
                          "end": 923,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 920,
                            "end": 923,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 922,
                              "end": 923,
                              "typeName": {
                                "type": "Identifier",
                                "start": 922,
                                "end": 923,
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 928,
                                "end": 929,
                                "name": "S",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 932,
                              "end": 938,
                              "typeName": {
                                "type": "Identifier",
                                "start": 932,
                                "end": 935,
                                "name": "Bar",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 935,
                                "end": 938,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 936,
                                    "end": 937,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 936,
                                      "end": 937,
                                      "name": "S",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                ]
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 940,
                  "end": 944,
                  "name": "g",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 941,
                    "end": 944,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 943,
                      "end": 944,
                      "typeName": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 944,
                        "name": "S",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 945,
                "end": 953,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 947,
                  "end": 953,
                  "typeName": {
                    "type": "Identifier",
                    "start": 947,
                    "end": 950,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 950,
                    "end": 953,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 951,
                        "end": 952,
                        "typeName": {
                          "type": "Identifier",
                          "start": 951,
                          "end": 952,
                          "name": "S",
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
              "accessibility": null,
              "readonly": false,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "FunctionDeclaration",
      "start": 958,
      "end": 1017,
      "id": {
        "type": "Identifier",
        "start": 967,
        "end": 970,
        "name": "qux",
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
          "start": 971,
          "end": 984,
          "name": "p1",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 973,
            "end": 984,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 975,
              "end": 984,
              "typeName": {
                "type": "Identifier",
                "start": 975,
                "end": 978,
                "name": "Foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 986,
          "end": 999,
          "name": "p2",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 988,
            "end": 999,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 990,
              "end": 999,
              "typeName": {
                "type": "Identifier",
                "start": 990,
                "end": 993,
                "name": "Bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1001,
        "end": 1017,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 1007,
            "end": 1015,
            "expression": {
              "type": "AssignmentExpression",
              "start": 1007,
              "end": 1014,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 1007,
                "end": 1009,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 1012,
                "end": 1014,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1042,
      "end": 1091,
      "id": {
        "type": "Identifier",
        "start": 1059,
        "end": 1062,
        "name": "foo",
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
          "start": 1066,
          "end": 1083,
          "name": "x",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 1069,
                    "end": 1070,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1073,
                  "end": 1083,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1073,
                    "end": 1080,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1080,
                    "end": 1083,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1081,
                        "end": 1082,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1081,
                          "end": 1082,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              ]
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
        "start": 1062,
        "end": 1065,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1063,
            "end": 1064,
            "name": {
              "type": "Identifier",
              "start": 1063,
              "end": 1064,
              "name": "T",
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
        "start": 1084,
        "end": 1090,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1086,
          "end": 1090
        }
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
          "id": {
            "type": "Identifier",
            "start": 1104,
            "end": 1128,
            "name": "x",
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
                      "value": false,
                      "raw": "false"
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1115,
                    "end": 1128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1115,
                      "end": 1122,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "value": true,
                            "raw": "true"
                          }
                        }
                      ]
                    }
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1130,
      "end": 1137,
      "expression": {
        "type": "CallExpression",
        "start": 1130,
        "end": 1136,
        "callee": {
          "type": "Identifier",
          "start": 1130,
          "end": 1133,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1134,
            "end": 1135,
            "name": "x",
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
      "type": "TSDeclareFunction",
      "start": 1139,
      "end": 1187,
      "id": {
        "type": "Identifier",
        "start": 1156,
        "end": 1159,
        "name": "bar",
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
          "start": 1163,
          "end": 1167,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1164,
            "end": 1167,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1166,
              "end": 1167,
              "typeName": {
                "type": "Identifier",
                "start": 1166,
                "end": 1167,
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
        },
        {
          "type": "Identifier",
          "start": 1169,
          "end": 1182,
          "name": "y",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 1181,
                    "end": 1182,
                    "name": "T",
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
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1159,
        "end": 1162,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1160,
            "end": 1161,
            "name": {
              "type": "Identifier",
              "start": 1160,
              "end": 1161,
              "name": "T",
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
        "start": 1183,
        "end": 1186,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1185,
          "end": 1186,
          "typeName": {
            "type": "Identifier",
            "start": 1185,
            "end": 1186,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 1194,
            "end": 1195,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1198,
            "end": 1207,
            "callee": {
              "type": "Identifier",
              "start": 1198,
              "end": 1201,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 1202,
                "end": 1203,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 1205,
                "end": 1206,
                "value": 2,
                "raw": "2"
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
      "type": "VariableDeclaration",
      "start": 1232,
      "end": 1281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1238,
          "end": 1280,
          "id": {
            "type": "Identifier",
            "start": 1238,
            "end": 1269,
            "name": "containsPromises",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1272,
            "end": 1280,
            "callee": {
              "type": "Identifier",
              "start": 1272,
              "end": 1278,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
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
      "type": "TSTypeAliasDeclaration",
      "start": 1283,
      "end": 1434,
      "id": {
        "type": "Identifier",
        "start": 1288,
        "end": 1300,
        "name": "DeepPromised",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1301,
              "end": 1302,
              "name": "T",
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
                "computed": true,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 1313,
                  "end": 1329,
                  "name": "containsPromises",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
          {
            "type": "TSMappedType",
            "start": 1346,
            "end": 1433,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 1349,
              "end": 1364,
              "name": {
                "type": "Identifier",
                "start": 1349,
                "end": 1353,
                "name": "TKey",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 1357,
                "end": 1364,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 1363,
                  "end": 1364,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1363,
                    "end": 1364,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1367,
              "end": 1431,
              "types": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 1367,
                  "end": 1374,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 1367,
                    "end": 1368,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1367,
                      "end": 1368,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1369,
                    "end": 1373,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1369,
                      "end": 1373,
                      "name": "TKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1377,
                  "end": 1398,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1377,
                    "end": 1389,
                    "name": "DeepPromised",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1389,
                    "end": 1398,
                    "params": [
                      {
                        "type": "TSIndexedAccessType",
                        "start": 1390,
                        "end": 1397,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1390,
                          "end": 1391,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1390,
                            "end": 1391,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1392,
                          "end": 1396,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1392,
                            "end": 1396,
                            "name": "TKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 1401,
                  "end": 1431,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1401,
                    "end": 1408,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 1408,
                    "end": 1431,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 1409,
                        "end": 1430,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1409,
                          "end": 1421,
                          "name": "DeepPromised",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 1421,
                          "end": 1430,
                          "params": [
                            {
                              "type": "TSIndexedAccessType",
                              "start": 1422,
                              "end": 1429,
                              "objectType": {
                                "type": "TSTypeReference",
                                "start": 1422,
                                "end": 1423,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1422,
                                  "end": 1423,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "start": 1424,
                                "end": 1428,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1424,
                                  "end": 1428,
                                  "name": "TKey",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 1357,
              "end": 1364,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1363,
                "end": 1364,
                "typeName": {
                  "type": "Identifier",
                  "start": 1363,
                  "end": 1364,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 1349,
              "end": 1353,
              "name": "TKey",
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
      "type": "FunctionDeclaration",
      "start": 1436,
      "end": 1776,
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1454,
        "name": "fun",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1458,
          "end": 1487,
          "name": "deepPromised",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1470,
            "end": 1487,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1472,
              "end": 1487,
              "typeName": {
                "type": "Identifier",
                "start": 1472,
                "end": 1484,
                "name": "DeepPromised",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1484,
                "end": 1487,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1485,
                    "end": 1486,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1485,
                      "end": 1486,
                      "name": "T",
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
                "id": {
                  "type": "Identifier",
                  "start": 1501,
                  "end": 1581,
                  "name": "deepPromisedWithIndexer",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1524,
                    "end": 1581,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1526,
                      "end": 1581,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1526,
                        "end": 1538,
                        "name": "DeepPromised",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 1542,
                                    "end": 1554,
                                    "name": "name",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 1546,
                                      "end": 1554,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 1548,
                                        "end": 1554
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
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
                "init": {
                  "type": "Identifier",
                  "start": 1584,
                  "end": 1596,
                  "name": "deepPromised",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ForOfStatement",
            "start": 1602,
            "end": 1774,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 1607,
              "end": 1618,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 1613,
                  "end": 1618,
                  "id": {
                    "type": "Identifier",
                    "start": 1613,
                    "end": 1618,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "CallExpression",
              "start": 1622,
              "end": 1660,
              "callee": {
                "type": "MemberExpression",
                "start": 1622,
                "end": 1635,
                "object": {
                  "type": "Identifier",
                  "start": 1622,
                  "end": 1628,
                  "name": "Object",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1629,
                  "end": 1635,
                  "name": "values",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1636,
                  "end": 1659,
                  "name": "deepPromisedWithIndexer",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            },
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
                      "id": {
                        "type": "Identifier",
                        "start": 1678,
                        "end": 1690,
                        "name": "awaitedValue",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "AwaitExpression",
                        "start": 1693,
                        "end": 1704,
                        "argument": {
                          "type": "Identifier",
                          "start": 1699,
                          "end": 1704,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "IfStatement",
                  "start": 1714,
                  "end": 1768,
                  "test": {
                    "type": "Identifier",
                    "start": 1718,
                    "end": 1730,
                    "name": "awaitedValue",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "consequent": {
                    "type": "ExpressionStatement",
                    "start": 1744,
                    "end": 1768,
                    "expression": {
                      "type": "AwaitExpression",
                      "start": 1744,
                      "end": 1767,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1750,
                        "end": 1767,
                        "callee": {
                          "type": "Identifier",
                          "start": 1750,
                          "end": 1753,
                          "name": "fun",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1754,
                            "end": 1766,
                            "name": "awaitedValue",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    "directive": null
                  },
                  "alternate": null
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1454,
        "end": 1457,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1455,
            "end": 1456,
            "name": {
              "type": "Identifier",
              "start": 1455,
              "end": 1456,
              "name": "T",
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
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1800,
      "end": 1853,
      "id": {
        "type": "Identifier",
        "start": 1805,
        "end": 1809,
        "name": "Deep",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 1810,
              "end": 1811,
              "name": "T",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 1815,
        "end": 1852,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 1818,
          "end": 1830,
          "name": {
            "type": "Identifier",
            "start": 1818,
            "end": 1819,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 1823,
            "end": 1830,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1829,
              "end": 1830,
              "typeName": {
                "type": "Identifier",
                "start": 1829,
                "end": 1830,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1833,
          "end": 1850,
          "types": [
            {
              "type": "TSIndexedAccessType",
              "start": 1833,
              "end": 1837,
              "objectType": {
                "type": "TSTypeReference",
                "start": 1833,
                "end": 1834,
                "typeName": {
                  "type": "Identifier",
                  "start": 1833,
                  "end": 1834,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 1835,
                "end": 1836,
                "typeName": {
                  "type": "Identifier",
                  "start": 1835,
                  "end": 1836,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            {
              "type": "TSTypeReference",
              "start": 1840,
              "end": 1850,
              "typeName": {
                "type": "Identifier",
                "start": 1840,
                "end": 1844,
                "name": "Deep",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1844,
                "end": 1850,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 1845,
                    "end": 1849,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1845,
                      "end": 1846,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1845,
                        "end": 1846,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1847,
                      "end": 1848,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1847,
                        "end": 1848,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          ]
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 1823,
          "end": 1830,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1829,
            "end": 1830,
            "typeName": {
              "type": "Identifier",
              "start": 1829,
              "end": 1830,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 1818,
          "end": 1819,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1855,
      "end": 1895,
      "id": {
        "type": "Identifier",
        "start": 1872,
        "end": 1875,
        "name": "baz",
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
          "start": 1879,
          "end": 1890,
          "name": "dp",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1881,
            "end": 1890,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1883,
              "end": 1890,
              "typeName": {
                "type": "Identifier",
                "start": 1883,
                "end": 1887,
                "name": "Deep",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1887,
                "end": 1890,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1888,
                    "end": 1889,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1888,
                      "end": 1889,
                      "name": "T",
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
        "start": 1875,
        "end": 1878,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1876,
            "end": 1877,
            "name": {
              "type": "Identifier",
              "start": 1876,
              "end": 1877,
              "name": "T",
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
        "start": 1891,
        "end": 1894,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1893,
          "end": 1894,
          "typeName": {
            "type": "Identifier",
            "start": 1893,
            "end": 1894,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
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
          "id": {
            "type": "Identifier",
            "start": 1908,
            "end": 1937,
            "name": "xx",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1914,
                      "end": 1915,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                    },
                    "accessibility": null,
                    "static": false
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
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1940,
      "end": 1948,
      "expression": {
        "type": "CallExpression",
        "start": 1940,
        "end": 1947,
        "callee": {
          "type": "Identifier",
          "start": 1940,
          "end": 1943,
          "name": "baz",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 1944,
            "end": 1946,
            "name": "xx",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
