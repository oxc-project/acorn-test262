__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 961,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 42,
      "end": 58,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 46,
          "end": 57,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 52,
            "end": 57,
            "value": "bar",
            "raw": "\"bar\""
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 59,
      "end": 91,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 63,
          "end": 90,
          "id": {
            "type": "ObjectPattern",
            "start": 63,
            "end": 75,
            "properties": [
              {
                "type": "Property",
                "start": 64,
                "end": 74,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 78,
            "end": 90,
            "properties": [
              {
                "type": "Property",
                "start": 79,
                "end": 89,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 89,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 93,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 127,
          "id": {
            "type": "ObjectPattern",
            "start": 97,
            "end": 112,
            "properties": [
              {
                "type": "Property",
                "start": 98,
                "end": 111,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 99,
                  "end": 104,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "value": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "name": "bar2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 115,
            "end": 127,
            "properties": [
              {
                "type": "Property",
                "start": 116,
                "end": 126,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 119,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 121,
                  "end": 126,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 130,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 134,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 134,
            "end": 138,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 141,
            "end": 152,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Literal",
              "start": 147,
              "end": 152,
              "value": "bar",
              "raw": "\"bar\""
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 154,
      "end": 190,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 158,
          "end": 189,
          "id": {
            "type": "ObjectPattern",
            "start": 158,
            "end": 174,
            "properties": [
              {
                "type": "Property",
                "start": 159,
                "end": 173,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 160,
                  "end": 166,
                  "callee": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 164,
                    "name": "foo2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 169,
                  "end": 173,
                  "name": "bar3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 177,
            "end": 189,
            "properties": [
              {
                "type": "Property",
                "start": 178,
                "end": 188,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 178,
                  "end": 181,
                  "name": "bar",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 183,
                  "end": 188,
                  "value": "bar",
                  "raw": "\"bar\""
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 192,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 196,
          "end": 228,
          "id": {
            "type": "ArrayPattern",
            "start": 196,
            "end": 211,
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 197,
                "end": 210,
                "properties": [
                  {
                    "type": "Property",
                    "start": 198,
                    "end": 209,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 199,
                      "end": 202,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 205,
                      "end": 209,
                      "name": "bar4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 214,
            "end": 228,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 215,
                "end": 227,
                "properties": [
                  {
                    "type": "Property",
                    "start": 216,
                    "end": 226,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 216,
                      "end": 219,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 221,
                      "end": 226,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 270,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 269,
          "id": {
            "type": "ArrayPattern",
            "start": 234,
            "end": 252,
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 235,
                "end": 251,
                "properties": [
                  {
                    "type": "Property",
                    "start": 236,
                    "end": 250,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 237,
                      "end": 243,
                      "callee": {
                        "type": "Identifier",
                        "start": 237,
                        "end": 241,
                        "name": "foo2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 246,
                      "end": 250,
                      "name": "bar5",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 255,
            "end": 269,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 256,
                "end": 268,
                "properties": [
                  {
                    "type": "Property",
                    "start": 257,
                    "end": 267,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 257,
                      "end": 260,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 262,
                      "end": 267,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 272,
      "end": 317,
      "id": {
        "type": "Identifier",
        "start": 281,
        "end": 283,
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
          "type": "ObjectPattern",
          "start": 284,
          "end": 313,
          "properties": [
            {
              "type": "Property",
              "start": 285,
              "end": 295,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 286,
                "end": 291,
                "value": "bar",
                "raw": "\"bar\""
              },
              "value": {
                "type": "Identifier",
                "start": 294,
                "end": 295,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 296,
            "end": 313,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 298,
              "end": 313,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 300,
                  "end": 311,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 300,
                    "end": 303,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 303,
                    "end": 311,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 305,
                      "end": 311
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 317,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 318,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 327,
        "end": 329,
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
          "type": "ObjectPattern",
          "start": 330,
          "end": 357,
          "properties": [
            {
              "type": "Property",
              "start": 331,
              "end": 339,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 332,
                "end": 335,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 338,
                "end": 339,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 340,
            "end": 357,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 342,
              "end": 357,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 344,
                  "end": 355,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 347,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 347,
                    "end": 355,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 349,
                      "end": 355
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 361,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 362,
      "end": 408,
      "id": {
        "type": "Identifier",
        "start": 371,
        "end": 373,
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
          "type": "ObjectPattern",
          "start": 374,
          "end": 404,
          "properties": [
            {
              "type": "Property",
              "start": 375,
              "end": 386,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "CallExpression",
                "start": 376,
                "end": 382,
                "callee": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 380,
                  "name": "foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "value": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 387,
            "end": 404,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 389,
              "end": 404,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 391,
                  "end": 402,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 394,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 394,
                    "end": 402,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 396,
                      "end": 402
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 406,
        "end": 408,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 409,
      "end": 456,
      "id": {
        "type": "Identifier",
        "start": 418,
        "end": 420,
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
          "type": "ArrayPattern",
          "start": 421,
          "end": 452,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 422,
              "end": 432,
              "properties": [
                {
                  "type": "Property",
                  "start": 423,
                  "end": 431,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 424,
                    "end": 427,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 452,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 435,
              "end": 452,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 436,
                  "end": 451,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 438,
                      "end": 449,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 438,
                        "end": 441,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 441,
                        "end": 449,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 443,
                          "end": 449
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 456,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 457,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 466,
        "end": 468,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 469,
          "end": 503,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 470,
              "end": 483,
              "properties": [
                {
                  "type": "Property",
                  "start": 471,
                  "end": 482,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 472,
                    "end": 478,
                    "callee": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 476,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 481,
                    "end": 482,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 484,
            "end": 503,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 486,
              "end": 503,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 487,
                  "end": 502,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 489,
                      "end": 500,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 489,
                        "end": 492,
                        "name": "bar",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 492,
                        "end": 500,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 494,
                          "end": 500
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 505,
        "end": 507,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "VariableDeclaration",
      "start": 586,
      "end": 625,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 590,
          "end": 624,
          "id": {
            "type": "ArrayPattern",
            "start": 590,
            "end": 607,
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 591,
                "end": 606,
                "properties": [
                  {
                    "type": "Property",
                    "start": 592,
                    "end": 605,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 593,
                      "end": 598,
                      "callee": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 596,
                        "name": "foo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 601,
                      "end": 605,
                      "name": "bar6",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 610,
            "end": 624,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 611,
                "end": 623,
                "properties": [
                  {
                    "type": "Property",
                    "start": 612,
                    "end": 622,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 612,
                      "end": 615,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 617,
                      "end": 622,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 626,
      "end": 679,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 678,
          "id": {
            "type": "ArrayPattern",
            "start": 630,
            "end": 661,
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 631,
                "end": 660,
                "properties": [
                  {
                    "type": "Property",
                    "start": 632,
                    "end": 659,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 633,
                      "end": 652,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 633,
                        "end": 650,
                        "object": {
                          "type": "Identifier",
                          "start": 633,
                          "end": 636,
                          "name": "foo",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 637,
                          "end": 650,
                          "name": "toExponential",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 655,
                      "end": 659,
                      "name": "bar7",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 664,
            "end": 678,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 665,
                "end": 677,
                "properties": [
                  {
                    "type": "Property",
                    "start": 666,
                    "end": 676,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 666,
                      "end": 669,
                      "name": "bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 671,
                      "end": 676,
                      "value": "bar",
                      "raw": "\"bar\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 709,
      "end": 739,
      "expression": {
        "type": "AssignmentExpression",
        "start": 710,
        "end": 737,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 710,
          "end": 722,
          "properties": [
            {
              "type": "Property",
              "start": 711,
              "end": 721,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 712,
                "end": 715,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Identifier",
                "start": 718,
                "end": 721,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 725,
          "end": 737,
          "properties": [
            {
              "type": "Property",
              "start": 726,
              "end": 736,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 726,
                "end": 729,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 731,
                "end": 736,
                "value": "bar",
                "raw": "\"bar\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 741,
      "end": 774,
      "expression": {
        "type": "AssignmentExpression",
        "start": 742,
        "end": 772,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 742,
          "end": 757,
          "properties": [
            {
              "type": "Property",
              "start": 743,
              "end": 756,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 744,
                "end": 749,
                "value": "bar",
                "raw": "\"bar\""
              },
              "value": {
                "type": "Identifier",
                "start": 752,
                "end": 756,
                "name": "bar2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 760,
          "end": 772,
          "properties": [
            {
              "type": "Property",
              "start": 761,
              "end": 771,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 761,
                "end": 764,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 766,
                "end": 771,
                "value": "bar",
                "raw": "\"bar\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 776,
      "end": 810,
      "expression": {
        "type": "AssignmentExpression",
        "start": 777,
        "end": 808,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 777,
          "end": 793,
          "properties": [
            {
              "type": "Property",
              "start": 778,
              "end": 792,
              "method": false,
              "shorthand": false,
              "computed": true,
              "key": {
                "type": "CallExpression",
                "start": 779,
                "end": 785,
                "callee": {
                  "type": "Identifier",
                  "start": 779,
                  "end": 783,
                  "name": "foo2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              },
              "value": {
                "type": "Identifier",
                "start": 788,
                "end": 792,
                "name": "bar3",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "init",
              "optional": false
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 796,
          "end": 808,
          "properties": [
            {
              "type": "Property",
              "start": 797,
              "end": 807,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 797,
                "end": 800,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 802,
                "end": 807,
                "value": "bar",
                "raw": "\"bar\""
              },
              "kind": "init",
              "optional": false
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 812,
      "end": 845,
      "expression": {
        "type": "AssignmentExpression",
        "start": 812,
        "end": 844,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 812,
          "end": 827,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 813,
              "end": 826,
              "properties": [
                {
                  "type": "Property",
                  "start": 814,
                  "end": 825,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 815,
                    "end": 818,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 821,
                    "end": 825,
                    "name": "bar4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 830,
          "end": 844,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 831,
              "end": 843,
              "properties": [
                {
                  "type": "Property",
                  "start": 832,
                  "end": 842,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 835,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 837,
                    "end": 842,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 846,
      "end": 882,
      "expression": {
        "type": "AssignmentExpression",
        "start": 846,
        "end": 881,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 846,
          "end": 864,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 847,
              "end": 863,
              "properties": [
                {
                  "type": "Property",
                  "start": 848,
                  "end": 862,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 849,
                    "end": 855,
                    "callee": {
                      "type": "Identifier",
                      "start": 849,
                      "end": 853,
                      "name": "foo2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 862,
                    "name": "bar5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 867,
          "end": 881,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 868,
              "end": 880,
              "properties": [
                {
                  "type": "Property",
                  "start": 869,
                  "end": 879,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 869,
                    "end": 872,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 874,
                    "end": 879,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 919,
      "expression": {
        "type": "AssignmentExpression",
        "start": 884,
        "end": 918,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 884,
          "end": 901,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 885,
              "end": 900,
              "properties": [
                {
                  "type": "Property",
                  "start": 886,
                  "end": 899,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 887,
                    "end": 892,
                    "callee": {
                      "type": "Identifier",
                      "start": 887,
                      "end": 890,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "optional": false,
                    "typeArguments": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 899,
                    "name": "bar4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 904,
          "end": 918,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 905,
              "end": 917,
              "properties": [
                {
                  "type": "Property",
                  "start": 906,
                  "end": 916,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 906,
                    "end": 909,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 911,
                    "end": 916,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 920,
      "end": 958,
      "expression": {
        "type": "AssignmentExpression",
        "start": 920,
        "end": 957,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 920,
          "end": 940,
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 921,
              "end": 939,
              "properties": [
                {
                  "type": "Property",
                  "start": 922,
                  "end": 938,
                  "method": false,
                  "shorthand": false,
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "start": 924,
                    "end": 930,
                    "left": {
                      "type": "Literal",
                      "start": 924,
                      "end": 925,
                      "value": 1,
                      "raw": "1"
                    },
                    "operator": "+",
                    "right": {
                      "type": "ObjectExpression",
                      "start": 928,
                      "end": 930,
                      "properties": []
                    }
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 934,
                    "end": 938,
                    "name": "bar4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "kind": "init",
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 943,
          "end": 957,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 944,
              "end": 956,
              "properties": [
                {
                  "type": "Property",
                  "start": 945,
                  "end": 955,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 948,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 950,
                    "end": 955,
                    "value": "bar",
                    "raw": "\"bar\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
