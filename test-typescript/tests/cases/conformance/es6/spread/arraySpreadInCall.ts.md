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
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 29,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 21,
            "end": 29,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 23,
              "end": 29
            }
          }
        },
        {
          "type": "Identifier",
          "start": 31,
          "end": 40,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 32,
            "end": 40,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 34,
              "end": 40
            }
          }
        },
        {
          "type": "Identifier",
          "start": 42,
          "end": 51,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 43,
            "end": 51,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 45,
              "end": 51
            }
          }
        },
        {
          "type": "Identifier",
          "start": 53,
          "end": 62,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 54,
            "end": 62,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 56,
              "end": 62
            }
          }
        },
        {
          "type": "Identifier",
          "start": 64,
          "end": 73,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 65,
            "end": 73,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 67,
              "end": 73
            }
          }
        },
        {
          "type": "Identifier",
          "start": 75,
          "end": 84,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 85,
        "end": 91,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 87,
          "end": 91
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 119,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 93,
        "end": 118,
        "arguments": [
          {
            "type": "Literal",
            "start": 96,
            "end": 97,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 99,
            "end": 100,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 105,
            "end": 106,
            "raw": "4",
            "value": 4
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
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 115,
                  "end": 116,
                  "raw": "6",
                  "value": 6
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 93,
          "end": 95,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 146,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 120,
        "end": 145,
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
                  "raw": "1",
                  "value": 1
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 131,
            "end": 132,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "raw": "3",
            "value": 3
          },
          {
            "type": "Literal",
            "start": 137,
            "end": 138,
            "raw": "4",
            "value": 4
          },
          {
            "type": "Literal",
            "start": 140,
            "end": 141,
            "raw": "5",
            "value": 5
          },
          {
            "type": "Literal",
            "start": 143,
            "end": 144,
            "raw": "6",
            "value": 6
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 120,
          "end": 122,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 173,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 147,
        "end": 172,
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
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 163,
                  "end": 164,
                  "raw": "4",
                  "value": 4
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 167,
            "end": 168,
            "raw": "5",
            "value": 5
          },
          {
            "type": "Literal",
            "start": 170,
            "end": 171,
            "raw": "6",
            "value": 6
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
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 205,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 174,
        "end": 204,
        "arguments": [
          {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 180,
            "end": 181,
            "raw": "2",
            "value": 2
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
                  "raw": "3",
                  "value": 3
                }
              ]
            }
          },
          {
            "type": "Literal",
            "start": 191,
            "end": 192,
            "raw": "4",
            "value": 4
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
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 201,
                  "end": 202,
                  "raw": "6",
                  "value": 6
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 174,
          "end": 176,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 242,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 206,
        "end": 241,
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
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 216,
                  "end": 217,
                  "raw": "2",
                  "value": 2
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
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 227,
                  "end": 228,
                  "raw": "4",
                  "value": 4
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
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 238,
                  "end": 239,
                  "raw": "6",
                  "value": 6
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 206,
          "end": 208,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 243,
      "end": 293,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 243,
        "end": 292,
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
                  "raw": "1",
                  "value": 1
                },
                {
                  "type": "Literal",
                  "start": 255,
                  "end": 256,
                  "raw": "2",
                  "value": 2
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
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 272,
                  "end": 273,
                  "raw": "4",
                  "value": 4
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
                  "raw": "5",
                  "value": 5
                },
                {
                  "type": "Literal",
                  "start": 288,
                  "end": 289,
                  "raw": "6",
                  "value": 6
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 243,
          "end": 245,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 295,
      "end": 351,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 336,
          "end": 346,
          "argument": {
            "type": "Identifier",
            "start": 339,
            "end": 343,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 345,
                "end": 346,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 350,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 349,
          "end": 350,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 349,
            "end": 350,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 314,
        "end": 335,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 315,
            "end": 334,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 315,
              "end": 316,
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
      "start": 352,
      "end": 381,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 361,
            "decorators": [],
            "name": "x21",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 364,
            "end": 381,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 374,
                      "end": 379,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 364,
              "end": 366,
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
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 388,
            "end": 391,
            "decorators": [],
            "name": "x22",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 394,
            "end": 417,
            "arguments": [
              {
                "type": "Literal",
                "start": 397,
                "end": 401,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 410,
                      "end": 415,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 394,
              "end": 396,
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
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 427,
            "decorators": [],
            "name": "x23",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 430,
            "end": 449,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 441,
                      "end": 446,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 430,
              "end": 432,
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
      "kind": "const"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 459,
            "decorators": [],
            "name": "x24",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 462,
            "end": 487,
            "arguments": [
              {
                "type": "Literal",
                "start": 465,
                "end": 469,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 479,
                      "end": 484,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 462,
              "end": 464,
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
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 489,
      "end": 554,
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
          "type": "RestElement",
          "start": 539,
          "end": 549,
          "argument": {
            "type": "Identifier",
            "start": 542,
            "end": 546,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 550,
        "end": 553,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 552,
          "end": 553,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 552,
            "end": 553,
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
        "end": 538,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 509,
            "end": 537,
            "const": false,
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
      "start": 555,
      "end": 584,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 561,
          "end": 584,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 561,
            "end": 564,
            "decorators": [],
            "name": "x31",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 567,
            "end": 584,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 577,
                      "end": 582,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 567,
              "end": 569,
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
      "start": 585,
      "end": 620,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 591,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 591,
            "end": 594,
            "decorators": [],
            "name": "x32",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 597,
            "end": 620,
            "arguments": [
              {
                "type": "Literal",
                "start": 600,
                "end": 604,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 613,
                      "end": 618,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 597,
              "end": 599,
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
      "start": 621,
      "end": 652,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 627,
          "end": 652,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 627,
            "end": 630,
            "decorators": [],
            "name": "x33",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 633,
            "end": 652,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 644,
                      "end": 649,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 633,
              "end": 635,
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
      "start": 653,
      "end": 690,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 659,
          "end": 690,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 659,
            "end": 662,
            "decorators": [],
            "name": "x34",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 665,
            "end": 690,
            "arguments": [
              {
                "type": "Literal",
                "start": 668,
                "end": 672,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 682,
                      "end": 687,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 665,
              "end": 667,
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
      "start": 692,
      "end": 763,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 709,
        "end": 711,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "RestElement",
          "start": 748,
          "end": 758,
          "argument": {
            "type": "Identifier",
            "start": 751,
            "end": 755,
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null
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
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "value": null
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 759,
        "end": 762,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 761,
          "end": 762,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 761,
            "end": 762,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 711,
        "end": 747,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 712,
            "end": 746,
            "const": true,
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
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 719,
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
      "start": 764,
      "end": 793,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 770,
          "end": 793,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 770,
            "end": 773,
            "decorators": [],
            "name": "x41",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 776,
            "end": 793,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 786,
                      "end": 791,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 776,
              "end": 778,
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
      "start": 794,
      "end": 829,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 800,
          "end": 829,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 800,
            "end": 803,
            "decorators": [],
            "name": "x42",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 806,
            "end": 829,
            "arguments": [
              {
                "type": "Literal",
                "start": 809,
                "end": 813,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 822,
                      "end": 827,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 806,
              "end": 808,
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
      "start": 830,
      "end": 861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 836,
          "end": 861,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 836,
            "end": 839,
            "decorators": [],
            "name": "x43",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 842,
            "end": 861,
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 853,
                      "end": 858,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 842,
              "end": 844,
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
      "start": 862,
      "end": 899,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 868,
          "end": 899,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 868,
            "end": 871,
            "decorators": [],
            "name": "x44",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 874,
            "end": 899,
            "arguments": [
              {
                "type": "Literal",
                "start": 877,
                "end": 881,
                "raw": "true",
                "value": true
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
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Literal",
                      "start": 891,
                      "end": 896,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 874,
              "end": 876,
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
      "type": "TSInterfaceDeclaration",
      "start": 948,
      "end": 1004,
      "body": {
        "type": "TSInterfaceBody",
        "start": 966,
        "end": 1004,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 972,
            "end": 1002,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 972,
              "end": 975,
              "decorators": [],
              "name": "run",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 976,
                "end": 991,
                "decorators": [],
                "name": "event",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 982,
                  "end": 991,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 984,
                    "end": 991
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": null
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 965,
        "decorators": [],
        "name": "IAction",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1019,
            "end": 1034,
            "decorators": [],
            "name": "action",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1025,
              "end": 1034,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1027,
                "end": 1034,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1027,
                  "end": 1034,
                  "decorators": [],
                  "name": "IAction",
                  "optional": false,
                  "typeAnnotation": null
                }
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
      "type": "ExpressionStatement",
      "start": 1035,
      "end": 1062,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 1035,
        "end": 1062,
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
                  "raw": "100",
                  "value": 100
                },
                {
                  "type": "Literal",
                  "start": 1055,
                  "end": 1060,
                  "raw": "'foo'",
                  "value": "foo"
                }
              ]
            }
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 1035,
          "end": 1045,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1035,
            "end": 1041,
            "decorators": [],
            "name": "action",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1042,
            "end": 1045,
            "decorators": [],
            "name": "run",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
