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
      "async": false,
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
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 131,
        "end": 134,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 151,
          "end": 155,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 157,
          "end": 161,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 134,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 135,
            "end": 136,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 149,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 148,
              "end": 149,
              "typeName": {
                "type": "Identifier",
                "start": 148,
                "end": 149,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 186,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 189,
            "end": 198,
            "arguments": [
              {
                "type": "Literal",
                "start": 193,
                "end": 194,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 196,
                "end": 197,
                "raw": "2",
                "value": 2
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 189,
              "end": 192,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "r",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 208,
            "end": 218,
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
                "raw": "1",
                "value": 1
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 208,
              "end": 211,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 221,
      "end": 253,
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
            "key": {
              "type": "Identifier",
              "start": 239,
              "end": 242,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 242,
              "end": 250,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 244,
                "end": 250
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 254,
      "end": 296,
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
            "key": {
              "type": "Identifier",
              "start": 282,
              "end": 285,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 285,
              "end": 293,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 287,
                "end": 293
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 274,
          "end": 275,
          "expression": {
            "type": "Identifier",
            "start": 274,
            "end": 275,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 264,
        "end": 265,
        "decorators": [],
        "name": "B",
        "optional": false
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 305,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
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
      "start": 307,
      "end": 316,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 315,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 315,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                  "decorators": [],
                  "name": "B",
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
      "start": 318,
      "end": 337,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 322,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 322,
            "end": 324,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 327,
            "end": 336,
            "arguments": [
              {
                "type": "Identifier",
                "start": 331,
                "end": 332,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 334,
                "end": 335,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 327,
              "end": 330,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 342,
            "end": 344,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 347,
            "end": 376,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 354,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 356,
                      "end": 357,
                      "raw": "1",
                      "value": 1
                    }
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 366,
                      "end": 367,
                      "raw": "2",
                      "value": 2
                    }
                  },
                  {
                    "type": "Property",
                    "start": 369,
                    "end": 373,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 369,
                      "end": 370,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 372,
                      "end": 373,
                      "raw": "3",
                      "value": 3
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 350,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 379,
      "end": 446,
      "async": false,
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
              "decorators": [],
              "name": "y",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 388,
        "end": 392,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 421,
          "end": 425,
          "decorators": [],
          "name": "x",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 427,
          "end": 431,
          "decorators": [],
          "name": "y",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 392,
        "end": 420,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 393,
            "end": 394,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 396,
            "end": 419,
            "const": false,
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
                  "key": {
                    "type": "Identifier",
                    "start": 408,
                    "end": 414,
                    "decorators": [],
                    "name": "length",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 396,
              "end": 397,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 459,
      "expression": {
        "type": "CallExpression",
        "start": 447,
        "end": 458,
        "arguments": [
          {
            "type": "Literal",
            "start": 452,
            "end": 453,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 455,
            "end": 457,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 447,
          "end": 451,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 460,
      "end": 484,
      "expression": {
        "type": "CallExpression",
        "start": 460,
        "end": 483,
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 471,
                  "end": 477,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 479,
                  "end": 480,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 460,
          "end": 464,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 486,
      "end": 519,
      "expression": {
        "type": "CallExpression",
        "start": 486,
        "end": 518,
        "arguments": [
          {
            "type": "Literal",
            "start": 491,
            "end": 492,
            "raw": "1",
            "value": 1
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "decorators": [],
                  "name": "width",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 503,
                  "end": 504,
                  "raw": "3",
                  "value": 3
                }
              },
              {
                "type": "Property",
                "start": 506,
                "end": 515,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 512,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 514,
                  "end": 515,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 486,
          "end": 490,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 521,
      "end": 533,
      "expression": {
        "type": "CallExpression",
        "start": 521,
        "end": 532,
        "arguments": [
          {
            "type": "Literal",
            "start": 526,
            "end": 527,
            "raw": "1",
            "value": 1
          },
          {
            "type": "ArrayExpression",
            "start": 529,
            "end": 531,
            "elements": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 521,
          "end": 525,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 534,
      "end": 548,
      "expression": {
        "type": "CallExpression",
        "start": 534,
        "end": 547,
        "arguments": [
          {
            "type": "Literal",
            "start": 539,
            "end": 540,
            "raw": "1",
            "value": 1
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
                "raw": "''",
                "value": ""
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 534,
          "end": 538,
          "decorators": [],
          "name": "foo2",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
