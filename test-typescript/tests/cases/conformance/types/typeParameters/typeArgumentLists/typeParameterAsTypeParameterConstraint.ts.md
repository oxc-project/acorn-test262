__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 122,
  "end": 548,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 122,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 134,
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
          "start": 151,
          "end": 155,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 152,
            "end": 155,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 154,
              "end": 155,
              "typeName": {
                "type": "Identifier",
                "start": 154,
                "end": 155,
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
          "start": 157,
          "end": 161,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 158,
            "end": 161,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 160,
              "end": 161,
              "typeName": {
                "type": "Identifier",
                "start": 160,
                "end": 161,
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
      "body": {
        "type": "BlockStatement",
        "start": 166,
        "end": 179,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 168,
            "end": 177,
            "argument": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "name": "T",
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
        "start": 162,
        "end": 165,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 164,
          "end": 165,
          "typeName": {
            "type": "Identifier",
            "start": 164,
            "end": 165,
            "name": "U",
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
      "start": 181,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 198,
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 196,
                "end": 197,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 219,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 204,
          "end": 218,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 208,
            "end": 218,
            "callee": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 212,
                "end": 214,
                "properties": []
              },
              {
                "type": "Literal",
                "start": 216,
                "end": 217,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 221,
      "end": 253,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 233,
        "end": 253,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 239,
            "end": 251,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 250,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 244,
                "end": 250
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
      "start": 254,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 274,
          "end": 275,
          "expression": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 276,
        "end": 296,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 294,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 293,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
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
      "start": 297,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 302,
              "end": 305,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 304,
                "end": 305,
                "typeName": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "name": "A",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 315,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 312,
              "end": 315,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 314,
                "end": 315,
                "typeName": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "name": "B",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 327,
            "end": 336,
            "callee": {
              "type": "Identifier",
              "start": 327,
              "end": 330,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 334,
                "end": 335,
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 338,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 342,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 347,
            "end": 376,
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 351,
                "end": 359,
                "properties": [
                  {
                    "type": "Property",
                    "start": 353,
                    "end": 357,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 356,
                      "end": 357,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "ObjectExpression",
                "start": 361,
                "end": 375,
                "properties": [
                  {
                    "type": "Property",
                    "start": 363,
                    "end": 367,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 367,
                      "value": 2,
                      "raw": "2"
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 369,
                    "end": 373,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "name": "y",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 372,
                      "end": 373,
                      "value": 3,
                      "raw": "3"
                    },
                    "kind": "init",
                    "optional": false
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
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "name": "foo2",
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
          "start": 421,
          "end": 425,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 422,
            "end": 425,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 424,
              "end": 425,
              "typeName": {
                "type": "Identifier",
                "start": 424,
                "end": 425,
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
          "start": 427,
          "end": 431,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 428,
            "end": 431,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 430,
              "end": 431,
              "typeName": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
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
      "body": {
        "type": "BlockStatement",
        "start": 433,
        "end": 446,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 435,
            "end": 444,
            "argument": {
              "type": "Identifier",
              "start": 442,
              "end": 443,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 392,
        "end": 420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 393,
            "end": 394,
            "name": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 396,
            "end": 419,
            "name": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 406,
              "end": 419,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 408,
                  "end": 417,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 414,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 414,
                    "end": 417,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 416,
                      "end": 417,
                      "typeName": {
                        "type": "Identifier",
                        "start": 416,
                        "end": 417,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
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
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 459,
      "expression": {
        "type": "CallExpression",
        "start": 447,
        "end": 458,
        "callee": {
          "type": "Identifier",
          "start": 447,
          "end": 451,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 452,
            "end": 453,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "Literal",
            "start": 455,
            "end": 457,
            "value": "",
            "raw": "''"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 484,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 483,
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 464,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 465,
            "end": 467,
            "properties": []
          },
          {
            "type": "ObjectExpression",
            "start": 469,
            "end": 482,
            "properties": [
              {
                "type": "Property",
                "start": 471,
                "end": 480,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 477,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 479,
                  "end": 480,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 486,
      "end": 519,
      "expression": {
        "type": "CallExpression",
        "start": 486,
        "end": 518,
        "callee": {
          "type": "Identifier",
          "start": 486,
          "end": 490,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 491,
            "end": 492,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ObjectExpression",
            "start": 494,
            "end": 517,
            "properties": [
              {
                "type": "Property",
                "start": 496,
                "end": 504,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "name": "width",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 504,
                  "value": 3,
                  "raw": "3"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 506,
                "end": 515,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 512,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 514,
                  "end": 515,
                  "value": 2,
                  "raw": "2"
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 521,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 521,
        "end": 532,
        "callee": {
          "type": "Identifier",
          "start": 521,
          "end": 525,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 526,
            "end": 527,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrayExpression",
            "start": 529,
            "end": 531,
            "elements": []
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 548,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 547,
        "callee": {
          "type": "Identifier",
          "start": 534,
          "end": 538,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 539,
            "end": 540,
            "value": 1,
            "raw": "1"
          },
          {
            "type": "ArrayExpression",
            "start": 542,
            "end": 546,
            "elements": [
              {
                "type": "Literal",
                "start": 543,
                "end": 545,
                "value": "",
                "raw": "''"
              }
            ]
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
