__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 624,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 18,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 17,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 9,
            "decorators": [],
            "name": "named",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 12,
            "end": 17,
            "raw": "\"foo\"",
            "value": "foo"
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 54,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 23,
            "end": 38,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 24,
                "end": 37,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 30,
                  "decorators": [],
                  "name": "named",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 33,
                  "end": 37,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 41,
            "end": 54,
            "properties": [
              {
                "type": "Property",
                "start": 42,
                "end": 53,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 42,
                  "end": 46,
                  "decorators": [],
                  "name": "prop",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 48,
                  "end": 53,
                  "raw": "\"foo\"",
                  "value": "foo"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 56,
      "end": 66,
      "expression": {
        "type": "UnaryExpression",
        "start": 56,
        "end": 65,
        "argument": {
          "type": "Identifier",
          "start": 61,
          "end": 65,
          "decorators": [],
          "name": "prop",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 68,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 74,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 74,
            "end": 109,
            "decorators": [],
            "name": "numIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 86,
                "end": 109,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 87,
                    "end": 108,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 99,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 108,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 102,
                        "end": 108
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 112,
            "end": 123,
            "expression": {
              "type": "Literal",
              "start": 112,
              "end": 116,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 120,
              "end": 123
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 125,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 180,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 166,
            "decorators": [],
            "name": "strIndexed",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 143,
                "end": 166,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 144,
                    "end": 165,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 145,
                        "end": 156,
                        "decorators": [],
                        "name": "idx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 148,
                          "end": 156,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 150,
                            "end": 156
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 157,
                      "end": 165,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 159,
                        "end": 165
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 169,
            "end": 180,
            "expression": {
              "type": "Literal",
              "start": 169,
              "end": 173,
              "raw": "null",
              "value": null
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 177,
              "end": 180
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 197,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 187,
          "end": 196,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 187,
            "end": 192,
            "decorators": [],
            "name": "numed",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 195,
            "end": 196,
            "raw": "6",
            "value": 6
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 199,
      "end": 222,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 221,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 210,
            "decorators": [],
            "name": "symed",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 213,
            "end": 221,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 213,
              "end": 219,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 223,
      "end": 245,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 227,
          "end": 244,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 227,
            "end": 233,
            "decorators": [],
            "name": "symed2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 236,
            "end": 244,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 236,
              "end": 242,
              "decorators": [],
              "name": "Symbol",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 281,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 280,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 251,
            "end": 267,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 252,
                "end": 266,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 253,
                  "end": 258,
                  "decorators": [],
                  "name": "named",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 266,
                  "decorators": [],
                  "name": "prop2",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 270,
            "end": 280,
            "decorators": [],
            "name": "numIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 282,
      "end": 293,
      "expression": {
        "type": "UnaryExpression",
        "start": 282,
        "end": 292,
        "argument": {
          "type": "Identifier",
          "start": 287,
          "end": 292,
          "decorators": [],
          "name": "prop2",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 294,
      "end": 328,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 327,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 298,
            "end": 314,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 299,
                "end": 313,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 305,
                  "decorators": [],
                  "name": "numed",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 313,
                  "decorators": [],
                  "name": "prop3",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 317,
            "end": 327,
            "decorators": [],
            "name": "numIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 329,
      "end": 340,
      "expression": {
        "type": "UnaryExpression",
        "start": 329,
        "end": 339,
        "argument": {
          "type": "Identifier",
          "start": 334,
          "end": 339,
          "decorators": [],
          "name": "prop3",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 341,
      "end": 375,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 345,
          "end": 374,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 345,
            "end": 361,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 346,
                "end": 360,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 347,
                  "end": 352,
                  "decorators": [],
                  "name": "named",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 360,
                  "decorators": [],
                  "name": "prop4",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 364,
            "end": 374,
            "decorators": [],
            "name": "strIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 376,
      "end": 387,
      "expression": {
        "type": "UnaryExpression",
        "start": 376,
        "end": 386,
        "argument": {
          "type": "Identifier",
          "start": 381,
          "end": 386,
          "decorators": [],
          "name": "prop4",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 421,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 392,
            "end": 408,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 393,
                "end": 407,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 399,
                  "decorators": [],
                  "name": "numed",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 402,
                  "end": 407,
                  "decorators": [],
                  "name": "prop5",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 411,
            "end": 421,
            "decorators": [],
            "name": "strIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 423,
      "end": 434,
      "expression": {
        "type": "UnaryExpression",
        "start": 423,
        "end": 433,
        "argument": {
          "type": "Identifier",
          "start": 428,
          "end": 433,
          "decorators": [],
          "name": "prop5",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 435,
      "end": 469,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 439,
          "end": 468,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 439,
            "end": 455,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 440,
                "end": 454,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 441,
                  "end": 446,
                  "decorators": [],
                  "name": "symed",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 454,
                  "decorators": [],
                  "name": "prop6",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 458,
            "end": 468,
            "decorators": [],
            "name": "numIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 470,
      "end": 481,
      "expression": {
        "type": "UnaryExpression",
        "start": 470,
        "end": 480,
        "argument": {
          "type": "Identifier",
          "start": 475,
          "end": 480,
          "decorators": [],
          "name": "prop6",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 516,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 515,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 486,
            "end": 502,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 487,
                "end": 501,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 488,
                  "end": 493,
                  "decorators": [],
                  "name": "symed",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "decorators": [],
                  "name": "prop7",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 505,
            "end": 515,
            "decorators": [],
            "name": "strIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 517,
      "end": 528,
      "expression": {
        "type": "UnaryExpression",
        "start": 517,
        "end": 527,
        "argument": {
          "type": "Identifier",
          "start": 522,
          "end": 527,
          "decorators": [],
          "name": "prop7",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 564,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 533,
          "end": 563,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 533,
            "end": 550,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 534,
                "end": 549,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 535,
                  "end": 541,
                  "decorators": [],
                  "name": "symed2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 549,
                  "decorators": [],
                  "name": "prop8",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 553,
            "end": 563,
            "decorators": [],
            "name": "numIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 565,
      "end": 576,
      "expression": {
        "type": "UnaryExpression",
        "start": 565,
        "end": 575,
        "argument": {
          "type": "Identifier",
          "start": 570,
          "end": 575,
          "decorators": [],
          "name": "prop8",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 577,
      "end": 612,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 581,
          "end": 611,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 581,
            "end": 598,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 582,
                "end": 597,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 589,
                  "decorators": [],
                  "name": "symed2",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 592,
                  "end": 597,
                  "decorators": [],
                  "name": "prop9",
                  "optional": false
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 601,
            "end": 611,
            "decorators": [],
            "name": "strIndexed",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 613,
      "end": 624,
      "expression": {
        "type": "UnaryExpression",
        "start": 613,
        "end": 623,
        "argument": {
          "type": "Identifier",
          "start": 618,
          "end": 623,
          "decorators": [],
          "name": "prop9",
          "optional": false
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
