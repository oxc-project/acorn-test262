__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1073,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 92,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
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
          "start": 20,
          "end": 29,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 23,
              "end": 29
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 40,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 51,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 53,
          "end": 62,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 62,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "name": "e",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 73,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 84,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 91,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 119,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 118,
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 95,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 96,
            "end": 97,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 100,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 106,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "SpreadElement",
            "start": 108,
            "end": 117,
            "argument": {
              "type": "ArrayExpression",
              "start": 111,
              "end": 117,
              "elements": [
                {
                  "type": "Literal",
                  "start": 112,
                  "end": 113,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "value": 6,
                  "raw": "6"
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 146,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 145,
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 122,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 123,
            "end": 129,
            "argument": {
              "type": "ArrayExpression",
              "start": 126,
              "end": 129,
              "elements": [
                {
                  "type": "Literal",
                  "start": 127,
                  "end": 128,
                  "value": 1,
                  "raw": "1"
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "value": 3,
            "raw": "3"
          },
          {
            "type": "Literal",
            "start": 137,
            "end": 138,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "Literal",
            "start": 140,
            "end": 141,
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Literal",
            "start": 143,
            "end": 144,
            "value": 6,
            "raw": "6"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 173,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 172,
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
          },
          {
            "type": "SpreadElement",
            "start": 156,
            "end": 165,
            "argument": {
              "type": "ArrayExpression",
              "start": 159,
              "end": 165,
              "elements": [
                {
                  "type": "Literal",
                  "start": 160,
                  "end": 161,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "value": 4,
                  "raw": "4"
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 167,
            "end": 168,
            "value": 5,
            "raw": "5"
          },
          {
            "type": "Literal",
            "start": 170,
            "end": 171,
            "value": 6,
            "raw": "6"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 205,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 204,
        "callee": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 180,
            "end": 181,
            "value": 2,
            "raw": "2"
          },
          {
            "type": "SpreadElement",
            "start": 183,
            "end": 189,
            "argument": {
              "type": "ArrayExpression",
              "start": 186,
              "end": 189,
              "elements": [
                {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 3,
                  "raw": "3"
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 191,
            "end": 192,
            "value": 4,
            "raw": "4"
          },
          {
            "type": "SpreadElement",
            "start": 194,
            "end": 203,
            "argument": {
              "type": "ArrayExpression",
              "start": 197,
              "end": 203,
              "elements": [
                {
                  "type": "Literal",
                  "start": 198,
                  "end": 199,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 201,
                  "end": 202,
                  "value": 6,
                  "raw": "6"
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 242,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 241,
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 208,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 209,
            "end": 218,
            "argument": {
              "type": "ArrayExpression",
              "start": 212,
              "end": 218,
              "elements": [
                {
                  "type": "Literal",
                  "start": 213,
                  "end": 214,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          },
          {
            "type": "SpreadElement",
            "start": 220,
            "end": 229,
            "argument": {
              "type": "ArrayExpression",
              "start": 223,
              "end": 229,
              "elements": [
                {
                  "type": "Literal",
                  "start": 224,
                  "end": 225,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 227,
                  "end": 228,
                  "value": 4,
                  "raw": "4"
                }
              ]
            }
          },
          {
            "type": "SpreadElement",
            "start": 231,
            "end": 240,
            "argument": {
              "type": "ArrayExpression",
              "start": 234,
              "end": 240,
              "elements": [
                {
                  "type": "Literal",
                  "start": 235,
                  "end": 236,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "value": 6,
                  "raw": "6"
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 293,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 292,
        "callee": {
          "type": "Identifier",
          "start": 243,
          "end": 245,
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 246,
            "end": 259,
            "argument": {
              "type": "ArrayExpression",
              "start": 251,
              "end": 257,
              "elements": [
                {
                  "type": "Literal",
                  "start": 252,
                  "end": 253,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 255,
                  "end": 256,
                  "value": 2,
                  "raw": "2"
                }
              ]
            }
          },
          {
            "type": "SpreadElement",
            "start": 261,
            "end": 278,
            "argument": {
              "type": "ArrayExpression",
              "start": 268,
              "end": 274,
              "elements": [
                {
                  "type": "Literal",
                  "start": 269,
                  "end": 270,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 272,
                  "end": 273,
                  "value": 4,
                  "raw": "4"
                }
              ]
            }
          },
          {
            "type": "SpreadElement",
            "start": 280,
            "end": 291,
            "argument": {
              "type": "ArrayExpression",
              "start": 284,
              "end": 290,
              "elements": [
                {
                  "type": "Literal",
                  "start": 285,
                  "end": 286,
                  "value": 5,
                  "raw": "5"
                },
                {
                  "type": "Literal",
                  "start": 288,
                  "end": 289,
                  "value": 6,
                  "raw": "6"
                }
              ]
            }
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 351,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
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
          "type": "RestElement",
          "start": 336,
          "end": 346,
          "argument": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 343,
            "end": 346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 345,
              "end": 346,
              "typeName": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 314,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 315,
            "end": 334,
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSArrayType",
              "start": 325,
              "end": 334,
              "elementType": {
                "type": "TSUnknownKeyword",
                "start": 325,
                "end": 332
              }
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
        "start": 347,
        "end": 350,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 349,
          "end": 350,
          "typeName": {
            "type": "Identifier",
            "start": 349,
            "end": 350,
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
      "start": 352,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "name": "x21",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 381,
            "callee": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 367,
                "end": 380,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 370,
                  "end": 380,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 371,
                      "end": 372,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 374,
                      "end": 379,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 382,
      "end": 417,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 388,
          "end": 417,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 391,
            "name": "x22",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 394,
            "end": 417,
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 396,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 397,
                "end": 401,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 403,
                "end": 416,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 406,
                  "end": 416,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 407,
                      "end": 408,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 410,
                      "end": 415,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 418,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 427,
            "name": "x23",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 430,
            "end": 449,
            "callee": {
              "type": "Identifier",
              "start": 430,
              "end": 432,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 433,
                "end": 448,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 437,
                  "end": 447,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 438,
                      "end": 439,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 441,
                      "end": 446,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 450,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 487,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "name": "x24",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 462,
            "end": 487,
            "callee": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 465,
                "end": 469,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 471,
                "end": 486,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 475,
                  "end": 485,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 476,
                      "end": 477,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 479,
                      "end": 484,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 489,
      "end": 554,
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
          "type": "RestElement",
          "start": 539,
          "end": 549,
          "argument": {
            "type": "Identifier",
            "start": 542,
            "end": 546,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 546,
            "end": 549,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 548,
              "end": 549,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 508,
        "end": 538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 537,
            "name": {
              "type": "Identifier",
              "start": 509,
              "end": 510,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 519,
              "end": 537,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 528,
                "end": 537,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 528,
                  "end": 535
                }
              }
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
        "start": 550,
        "end": 553,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 552,
          "end": 553,
          "typeName": {
            "type": "Identifier",
            "start": 552,
            "end": 553,
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
      "start": 555,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 584,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 564,
            "name": "x31",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 567,
            "end": 584,
            "callee": {
              "type": "Identifier",
              "start": 567,
              "end": 569,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 570,
                "end": 583,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 573,
                  "end": 583,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 574,
                      "end": 575,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 577,
                      "end": 582,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 585,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 594,
            "name": "x32",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 620,
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 600,
                "end": 604,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 606,
                "end": 619,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 609,
                  "end": 619,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 610,
                      "end": 611,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 613,
                      "end": 618,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 621,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 652,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 630,
            "name": "x33",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 633,
            "end": 652,
            "callee": {
              "type": "Identifier",
              "start": 633,
              "end": 635,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 636,
                "end": 651,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 640,
                  "end": 650,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 641,
                      "end": 642,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 644,
                      "end": 649,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 653,
      "end": 690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 662,
            "name": "x34",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 665,
            "end": 690,
            "callee": {
              "type": "Identifier",
              "start": 665,
              "end": 667,
              "name": "f3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 668,
                "end": 672,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 674,
                "end": 689,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 678,
                  "end": 688,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 679,
                      "end": 680,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 682,
                      "end": 687,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 692,
      "end": 763,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 711,
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
          "type": "RestElement",
          "start": 748,
          "end": 758,
          "argument": {
            "type": "Identifier",
            "start": 751,
            "end": 755,
            "name": "args",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 755,
            "end": 758,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 757,
              "end": 758,
              "typeName": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "value": null
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 711,
        "end": 747,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 746,
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 719,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 728,
              "end": 746,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 737,
                "end": 746,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 737,
                  "end": 744
                }
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 759,
        "end": 762,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 761,
          "end": 762,
          "typeName": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
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
      "start": 764,
      "end": 793,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 770,
          "end": 793,
          "id": {
            "type": "Identifier",
            "start": 770,
            "end": 773,
            "name": "x41",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 776,
            "end": 793,
            "callee": {
              "type": "Identifier",
              "start": 776,
              "end": 778,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 779,
                "end": 792,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 782,
                  "end": 792,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 783,
                      "end": 784,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 786,
                      "end": 791,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 794,
      "end": 829,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 829,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 803,
            "name": "x42",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 829,
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 808,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 809,
                "end": 813,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 815,
                "end": 828,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 818,
                  "end": 828,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 819,
                      "end": 820,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 822,
                      "end": 827,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 830,
      "end": 861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 836,
          "end": 861,
          "id": {
            "type": "Identifier",
            "start": 836,
            "end": 839,
            "name": "x43",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 842,
            "end": 861,
            "callee": {
              "type": "Identifier",
              "start": 842,
              "end": 844,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "SpreadElement",
                "start": 845,
                "end": 860,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 849,
                  "end": 859,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 850,
                      "end": 851,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 853,
                      "end": 858,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "start": 862,
      "end": 899,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 899,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 871,
            "name": "x44",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 874,
            "end": 899,
            "callee": {
              "type": "Identifier",
              "start": 874,
              "end": 876,
              "name": "f4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 877,
                "end": 881,
                "value": true,
                "raw": "true"
              },
              {
                "type": "SpreadElement",
                "start": 883,
                "end": 898,
                "argument": {
                  "type": "ArrayExpression",
                  "start": 887,
                  "end": 897,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 888,
                      "end": 889,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Literal",
                      "start": 891,
                      "end": 896,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  ]
                }
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
      "type": "TSInterfaceDeclaration",
      "start": 948,
      "end": 1004,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 965,
        "name": "IAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 966,
        "end": 1004,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 972,
            "end": 1002,
            "key": {
              "type": "Identifier",
              "start": 972,
              "end": 975,
              "name": "run",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 976,
                "end": 991,
                "name": "event",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 982,
                  "end": 991,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 984,
                    "end": 991
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 992,
              "end": 1001,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 994,
                "end": 1001
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
    {
      "type": "VariableDeclaration",
      "start": 1005,
      "end": 1034,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1019,
          "end": 1034,
          "id": {
            "type": "Identifier",
            "start": 1019,
            "end": 1034,
            "name": "action",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1027,
                "end": 1034,
                "typeName": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1034,
                  "name": "IAction",
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
      "kind": "const",
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1035,
      "end": 1062,
      "expression": {
        "type": "CallExpression",
        "start": 1035,
        "end": 1062,
        "callee": {
          "type": "MemberExpression",
          "start": 1035,
          "end": 1045,
          "object": {
            "type": "Identifier",
            "start": 1035,
            "end": 1041,
            "name": "action",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1042,
            "end": 1045,
            "name": "run",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "SpreadElement",
            "start": 1046,
            "end": 1061,
            "argument": {
              "type": "ArrayExpression",
              "start": 1049,
              "end": 1061,
              "elements": [
                {
                  "type": "Literal",
                  "start": 1050,
                  "end": 1053,
                  "value": 100,
                  "raw": "100"
                },
                {
                  "type": "Literal",
                  "start": 1055,
                  "end": 1060,
                  "value": "foo",
                  "raw": "'foo'"
                }
              ]
            }
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
