__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1620,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 77,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 20,
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 20,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 21,
            "end": 66,
            "name": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 31,
              "end": 66,
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 32,
                  "end": 38
                },
                {
                  "type": "TSStringKeyword",
                  "start": 40,
                  "end": 46
                },
                {
                  "type": "TSStringKeyword",
                  "start": 48,
                  "end": 54
                },
                {
                  "type": "TSUnionType",
                  "start": 56,
                  "end": 65,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 56,
                      "end": 59,
                      "literal": {
                        "type": "Literal",
                        "start": 56,
                        "end": 59,
                        "value": "a",
                        "raw": "'a'"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 62,
                      "end": 65,
                      "literal": {
                        "type": "Literal",
                        "start": 62,
                        "end": 65,
                        "value": "b",
                        "raw": "'b'"
                      }
                    }
                  ]
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
      "params": [
        {
          "type": "Identifier",
          "start": 68,
          "end": 72,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 69,
            "end": 72,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 71,
              "end": 72,
              "typeName": {
                "type": "Identifier",
                "start": 71,
                "end": 72,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 73,
        "end": 76,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 75,
          "end": 76,
          "typeName": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 78,
      "end": 144,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 98,
        "end": 134,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 99,
            "end": 133,
            "name": {
              "type": "Identifier",
              "start": 99,
              "end": 100,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTupleType",
              "start": 109,
              "end": 133,
              "elementTypes": [
                {
                  "type": "TSRestType",
                  "start": 110,
                  "end": 121,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 113,
                    "end": 121,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 113,
                      "end": 119
                    }
                  }
                },
                {
                  "type": "TSUnionType",
                  "start": 123,
                  "end": 132,
                  "types": [
                    {
                      "type": "TSLiteralType",
                      "start": 123,
                      "end": 126,
                      "literal": {
                        "type": "Literal",
                        "start": 123,
                        "end": 126,
                        "value": "a",
                        "raw": "'a'"
                      }
                    },
                    {
                      "type": "TSLiteralType",
                      "start": 129,
                      "end": 132,
                      "literal": {
                        "type": "Literal",
                        "start": 129,
                        "end": 132,
                        "value": "b",
                        "raw": "'b'"
                      }
                    }
                  ]
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
      "params": [
        {
          "type": "Identifier",
          "start": 135,
          "end": 139,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 136,
            "end": 139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 140,
        "end": 143,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 142,
          "end": 143,
          "typeName": {
            "type": "Identifier",
            "start": 142,
            "end": 143,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 146,
      "end": 182,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 154,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 157,
            "end": 181,
            "expression": {
              "type": "ArrayExpression",
              "start": 157,
              "end": 172,
              "elements": [
                {
                  "type": "Literal",
                  "start": 158,
                  "end": 161,
                  "value": "x",
                  "raw": "'x'"
                },
                {
                  "type": "Literal",
                  "start": 163,
                  "end": 166,
                  "value": "y",
                  "raw": "'y'"
                },
                {
                  "type": "Literal",
                  "start": 168,
                  "end": 171,
                  "value": "z",
                  "raw": "'z'"
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 176,
              "end": 181,
              "typeName": {
                "type": "Identifier",
                "start": 176,
                "end": 181,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 210,
      "expression": {
        "type": "CallExpression",
        "start": 184,
        "end": 209,
        "callee": {
          "type": "Identifier",
          "start": 184,
          "end": 187,
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 188,
            "end": 208,
            "elements": [
              {
                "type": "Literal",
                "start": 189,
                "end": 192,
                "value": "x",
                "raw": "'x'"
              },
              {
                "type": "Literal",
                "start": 194,
                "end": 197,
                "value": "y",
                "raw": "'y'"
              },
              {
                "type": "Literal",
                "start": 199,
                "end": 202,
                "value": "z",
                "raw": "'z'"
              },
              {
                "type": "Literal",
                "start": 204,
                "end": 207,
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 211,
      "end": 229,
      "expression": {
        "type": "CallExpression",
        "start": 211,
        "end": 228,
        "callee": {
          "type": "Identifier",
          "start": 211,
          "end": 214,
          "decorators": [],
          "name": "fx1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 215,
            "end": 227,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 216,
                "end": 221,
                "argument": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 221,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Literal",
                "start": 223,
                "end": 226,
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 231,
      "end": 257,
      "expression": {
        "type": "CallExpression",
        "start": 231,
        "end": 256,
        "callee": {
          "type": "Identifier",
          "start": 231,
          "end": 234,
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 235,
            "end": 255,
            "elements": [
              {
                "type": "Literal",
                "start": 236,
                "end": 239,
                "value": "x",
                "raw": "'x'"
              },
              {
                "type": "Literal",
                "start": 241,
                "end": 244,
                "value": "y",
                "raw": "'y'"
              },
              {
                "type": "Literal",
                "start": 246,
                "end": 249,
                "value": "z",
                "raw": "'z'"
              },
              {
                "type": "Literal",
                "start": 251,
                "end": 254,
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 258,
      "end": 276,
      "expression": {
        "type": "CallExpression",
        "start": 258,
        "end": 275,
        "callee": {
          "type": "Identifier",
          "start": 258,
          "end": 261,
          "decorators": [],
          "name": "fx2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 262,
            "end": 274,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 263,
                "end": 268,
                "argument": {
                  "type": "Identifier",
                  "start": 266,
                  "end": 268,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Literal",
                "start": 270,
                "end": 273,
                "value": "a",
                "raw": "'a'"
              }
            ]
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 278,
      "end": 315,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 284,
          "end": 314,
          "id": {
            "type": "Identifier",
            "start": 284,
            "end": 306,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 286,
              "end": 306,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 288,
                "end": 306,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 289,
                    "end": 300,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 292,
                      "end": 300,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 292,
                        "end": 298
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 302,
                    "end": 305,
                    "literal": {
                      "type": "Literal",
                      "start": 302,
                      "end": 305,
                      "value": "!",
                      "raw": "'!'"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 309,
            "end": 314,
            "elements": [
              {
                "type": "Literal",
                "start": 310,
                "end": 313,
                "value": "!",
                "raw": "'!'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 316,
      "end": 358,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 344,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 344,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 326,
                "end": 344,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 327,
                    "end": 338,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 330,
                      "end": 338,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 330,
                        "end": 336
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 340,
                    "end": 343,
                    "literal": {
                      "type": "Literal",
                      "start": 340,
                      "end": 343,
                      "value": "!",
                      "raw": "'!'"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 347,
            "end": 357,
            "elements": [
              {
                "type": "Literal",
                "start": 348,
                "end": 351,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 353,
                "end": 356,
                "value": "!",
                "raw": "'!'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 403,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 365,
          "end": 402,
          "id": {
            "type": "Identifier",
            "start": 365,
            "end": 387,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 367,
              "end": 387,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 369,
                "end": 387,
                "elementTypes": [
                  {
                    "type": "TSRestType",
                    "start": 370,
                    "end": 381,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 373,
                      "end": 381,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 373,
                        "end": 379
                      }
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 383,
                    "end": 386,
                    "literal": {
                      "type": "Literal",
                      "start": 383,
                      "end": 386,
                      "value": "!",
                      "raw": "'!'"
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 390,
            "end": 402,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 391,
                "end": 396,
                "argument": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 396,
                  "decorators": [],
                  "name": "t3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "Literal",
                "start": 398,
                "end": 401,
                "value": "!",
                "raw": "'!'"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 427,
      "end": 470,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 433,
          "end": 469,
          "id": {
            "type": "Identifier",
            "start": 433,
            "end": 449,
            "decorators": [],
            "name": "staticPath1Level",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 452,
            "end": 469,
            "expression": {
              "type": "ArrayExpression",
              "start": 452,
              "end": 460,
              "elements": [
                {
                  "type": "Literal",
                  "start": 453,
                  "end": 459,
                  "value": "home",
                  "raw": "\"home\""
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 464,
              "end": 469,
              "typeName": {
                "type": "Identifier",
                "start": 464,
                "end": 469,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 471,
      "end": 522,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 493,
            "decorators": [],
            "name": "staticPath2Level",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 496,
            "end": 521,
            "expression": {
              "type": "ArrayExpression",
              "start": 496,
              "end": 512,
              "elements": [
                {
                  "type": "Literal",
                  "start": 497,
                  "end": 503,
                  "value": "home",
                  "raw": "\"home\""
                },
                {
                  "type": "Literal",
                  "start": 505,
                  "end": 511,
                  "value": "user",
                  "raw": "\"user\""
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 516,
              "end": 521,
              "typeName": {
                "type": "Identifier",
                "start": 516,
                "end": 521,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 587,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 529,
          "end": 586,
          "id": {
            "type": "Identifier",
            "start": 529,
            "end": 545,
            "decorators": [],
            "name": "staticPath3Level",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 548,
            "end": 586,
            "expression": {
              "type": "ArrayExpression",
              "start": 548,
              "end": 577,
              "elements": [
                {
                  "type": "Literal",
                  "start": 549,
                  "end": 555,
                  "value": "home",
                  "raw": "\"home\""
                },
                {
                  "type": "Literal",
                  "start": 557,
                  "end": 563,
                  "value": "user",
                  "raw": "\"user\""
                },
                {
                  "type": "Literal",
                  "start": 565,
                  "end": 576,
                  "value": "downloads",
                  "raw": "\"downloads\""
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 581,
              "end": 586,
              "typeName": {
                "type": "Identifier",
                "start": 581,
                "end": 586,
                "decorators": [],
                "name": "const",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 589,
      "end": 621,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 603,
            "decorators": [],
            "name": "randomID",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "TSAsExpression",
            "start": 606,
            "end": 620,
            "expression": {
              "type": "Literal",
              "start": 606,
              "end": 610,
              "value": "id",
              "raw": "'id'"
            },
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 614,
              "end": 620
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 623,
      "end": 665,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 643,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 643,
        "end": 652,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 644,
            "end": 651,
            "name": {
              "type": "Identifier",
              "start": 650,
              "end": 651,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": true
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 653,
          "end": 660,
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 657,
            "end": 660,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 659,
              "end": 660,
              "typeName": {
                "type": "Identifier",
                "start": 659,
                "end": 660,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 661,
        "end": 664,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 663,
          "end": 664,
          "typeName": {
            "type": "Identifier",
            "start": 663,
            "end": 664,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 667,
      "end": 726,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 673,
          "end": 725,
          "id": {
            "type": "Identifier",
            "start": 673,
            "end": 675,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 678,
            "end": 725,
            "callee": {
              "type": "Identifier",
              "start": 678,
              "end": 681,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 682,
                "end": 724,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 683,
                    "end": 702,
                    "argument": {
                      "type": "Identifier",
                      "start": 686,
                      "end": 702,
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 704,
                    "end": 712,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 714,
                    "end": 723,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 727,
      "end": 786,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 733,
          "end": 785,
          "id": {
            "type": "Identifier",
            "start": 733,
            "end": 735,
            "decorators": [],
            "name": "a2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 738,
            "end": 785,
            "callee": {
              "type": "Identifier",
              "start": 738,
              "end": 741,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 742,
                "end": 784,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 743,
                    "end": 762,
                    "argument": {
                      "type": "Identifier",
                      "start": 746,
                      "end": 762,
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 764,
                    "end": 772,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 774,
                    "end": 783,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 787,
      "end": 846,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 793,
          "end": 845,
          "id": {
            "type": "Identifier",
            "start": 793,
            "end": 795,
            "decorators": [],
            "name": "a3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 798,
            "end": 845,
            "callee": {
              "type": "Identifier",
              "start": 798,
              "end": 801,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 802,
                "end": 844,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 803,
                    "end": 822,
                    "argument": {
                      "type": "Identifier",
                      "start": 806,
                      "end": 822,
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 824,
                    "end": 832,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 834,
                    "end": 843,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 848,
      "end": 917,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 854,
          "end": 916,
          "id": {
            "type": "Identifier",
            "start": 854,
            "end": 856,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 859,
            "end": 916,
            "callee": {
              "type": "Identifier",
              "start": 859,
              "end": 862,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 863,
                "end": 915,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 864,
                    "end": 883,
                    "argument": {
                      "type": "Identifier",
                      "start": 867,
                      "end": 883,
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 885,
                    "end": 893,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 895,
                    "end": 903,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 905,
                    "end": 914,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 918,
      "end": 987,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 924,
          "end": 986,
          "id": {
            "type": "Identifier",
            "start": 924,
            "end": 926,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 929,
            "end": 986,
            "callee": {
              "type": "Identifier",
              "start": 929,
              "end": 932,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 933,
                "end": 985,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 934,
                    "end": 953,
                    "argument": {
                      "type": "Identifier",
                      "start": 937,
                      "end": 953,
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 955,
                    "end": 963,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 965,
                    "end": 973,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 975,
                    "end": 984,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 988,
      "end": 1057,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 994,
          "end": 1056,
          "id": {
            "type": "Identifier",
            "start": 994,
            "end": 996,
            "decorators": [],
            "name": "b3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 999,
            "end": 1056,
            "callee": {
              "type": "Identifier",
              "start": 999,
              "end": 1002,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1003,
                "end": 1055,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1004,
                    "end": 1023,
                    "argument": {
                      "type": "Identifier",
                      "start": 1007,
                      "end": 1023,
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1025,
                    "end": 1033,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1035,
                    "end": 1043,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1045,
                    "end": 1054,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1059,
      "end": 1141,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1065,
          "end": 1140,
          "id": {
            "type": "Identifier",
            "start": 1065,
            "end": 1067,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1070,
            "end": 1140,
            "callee": {
              "type": "Identifier",
              "start": 1070,
              "end": 1073,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1074,
                "end": 1139,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1075,
                    "end": 1094,
                    "argument": {
                      "type": "Identifier",
                      "start": 1078,
                      "end": 1094,
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1096,
                    "end": 1104,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1106,
                    "end": 1114,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1116,
                    "end": 1127,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1129,
                    "end": 1138,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1142,
      "end": 1224,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1148,
          "end": 1223,
          "id": {
            "type": "Identifier",
            "start": 1148,
            "end": 1150,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1153,
            "end": 1223,
            "callee": {
              "type": "Identifier",
              "start": 1153,
              "end": 1156,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1157,
                "end": 1222,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1158,
                    "end": 1177,
                    "argument": {
                      "type": "Identifier",
                      "start": 1161,
                      "end": 1177,
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1179,
                    "end": 1187,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1189,
                    "end": 1197,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1199,
                    "end": 1210,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1212,
                    "end": 1221,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1225,
      "end": 1307,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1231,
          "end": 1306,
          "id": {
            "type": "Identifier",
            "start": 1231,
            "end": 1233,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1236,
            "end": 1306,
            "callee": {
              "type": "Identifier",
              "start": 1236,
              "end": 1239,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1240,
                "end": 1305,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1241,
                    "end": 1260,
                    "argument": {
                      "type": "Identifier",
                      "start": 1244,
                      "end": 1260,
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1262,
                    "end": 1270,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1272,
                    "end": 1280,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1282,
                    "end": 1293,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1295,
                    "end": 1304,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1309,
      "end": 1412,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1315,
          "end": 1411,
          "id": {
            "type": "Identifier",
            "start": 1315,
            "end": 1317,
            "decorators": [],
            "name": "d1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1320,
            "end": 1411,
            "callee": {
              "type": "Identifier",
              "start": 1320,
              "end": 1323,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1324,
                "end": 1410,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1325,
                    "end": 1344,
                    "argument": {
                      "type": "Identifier",
                      "start": 1328,
                      "end": 1344,
                      "decorators": [],
                      "name": "staticPath1Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1346,
                    "end": 1354,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1356,
                    "end": 1364,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1366,
                    "end": 1377,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1379,
                    "end": 1398,
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1400,
                    "end": 1409,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1413,
      "end": 1516,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1419,
          "end": 1515,
          "id": {
            "type": "Identifier",
            "start": 1419,
            "end": 1421,
            "decorators": [],
            "name": "d2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1424,
            "end": 1515,
            "callee": {
              "type": "Identifier",
              "start": 1424,
              "end": 1427,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1428,
                "end": 1514,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1429,
                    "end": 1448,
                    "argument": {
                      "type": "Identifier",
                      "start": 1432,
                      "end": 1448,
                      "decorators": [],
                      "name": "staticPath2Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1450,
                    "end": 1458,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1460,
                    "end": 1468,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1470,
                    "end": 1481,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1483,
                    "end": 1502,
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1504,
                    "end": 1513,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1517,
      "end": 1620,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1523,
          "end": 1619,
          "id": {
            "type": "Identifier",
            "start": 1523,
            "end": 1525,
            "decorators": [],
            "name": "d3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1528,
            "end": 1619,
            "callee": {
              "type": "Identifier",
              "start": 1528,
              "end": 1531,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 1532,
                "end": 1618,
                "elements": [
                  {
                    "type": "SpreadElement",
                    "start": 1533,
                    "end": 1552,
                    "argument": {
                      "type": "Identifier",
                      "start": 1536,
                      "end": 1552,
                      "decorators": [],
                      "name": "staticPath3Level",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 1554,
                    "end": 1562,
                    "decorators": [],
                    "name": "randomID",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Literal",
                    "start": 1564,
                    "end": 1572,
                    "value": "folder",
                    "raw": "'folder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1574,
                    "end": 1585,
                    "value": "subfolder",
                    "raw": "'subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1587,
                    "end": 1606,
                    "value": "another-subfolder",
                    "raw": "'another-subfolder'"
                  },
                  {
                    "type": "Literal",
                    "start": 1608,
                    "end": 1617,
                    "value": "doc.pdf",
                    "raw": "'doc.pdf'"
                  }
                ]
              }
            ],
            "optional": false
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
