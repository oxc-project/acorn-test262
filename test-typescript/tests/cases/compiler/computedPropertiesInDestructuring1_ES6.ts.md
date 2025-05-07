__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 42,
  "end": 992,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 52,
            "end": 57,
            "raw": "\"bar\"",
            "value": "bar",
            "regex": null,
            "bigint": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
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
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 63,
            "end": 75,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 64,
                "end": 74,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 65,
                  "end": 68,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 74,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 79,
                  "end": 82,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 84,
                  "end": 89,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
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
      "type": "VariableDeclaration",
      "start": 93,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 127,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 97,
            "end": 112,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 98,
                "end": 111,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 99,
                  "end": 104,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 111,
                  "decorators": [],
                  "name": "bar2",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
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
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 119,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 121,
                  "end": 126,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
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
      "type": "VariableDeclaration",
      "start": 129,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 133,
          "end": 161,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 133,
            "end": 147,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 134,
                "end": 146,
                "computed": true,
                "key": {
                  "type": "Literal",
                  "start": 135,
                  "end": 137,
                  "raw": "11",
                  "value": 11,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 146,
                  "decorators": [],
                  "name": "bar2_1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 150,
            "end": 161,
            "properties": [
              {
                "type": "Property",
                "start": 151,
                "end": 160,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 151,
                  "end": 153,
                  "raw": "11",
                  "value": 11,
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 155,
                  "end": 160,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
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
      "type": "VariableDeclaration",
      "start": 164,
      "end": 187,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 186,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 172,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 175,
            "end": 186,
            "async": false,
            "body": {
              "type": "Literal",
              "start": 181,
              "end": 186,
              "raw": "\"bar\"",
              "value": "bar",
              "regex": null,
              "bigint": null
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 224,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 223,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 192,
            "end": 208,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 193,
                "end": 207,
                "computed": true,
                "key": {
                  "type": "CallExpression",
                  "start": 194,
                  "end": 200,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 198,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeArguments": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 203,
                  "end": 207,
                  "decorators": [],
                  "name": "bar3",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 211,
            "end": 223,
            "properties": [
              {
                "type": "Property",
                "start": 212,
                "end": 222,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 215,
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 217,
                  "end": 222,
                  "raw": "\"bar\"",
                  "value": "bar",
                  "regex": null,
                  "bigint": null
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
      "type": "VariableDeclaration",
      "start": 226,
      "end": 263,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 230,
          "end": 262,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 230,
            "end": 245,
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 231,
                "end": 244,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 232,
                    "end": 243,
                    "computed": true,
                    "key": {
                      "type": "Identifier",
                      "start": 233,
                      "end": 236,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 239,
                      "end": 243,
                      "decorators": [],
                      "name": "bar4",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 248,
            "end": 262,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 249,
                "end": 261,
                "properties": [
                  {
                    "type": "Property",
                    "start": 250,
                    "end": 260,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 253,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 255,
                      "end": 260,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 264,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 303,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 268,
            "end": 286,
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 269,
                "end": 285,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 270,
                    "end": 284,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 271,
                      "end": 277,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 271,
                        "end": 275,
                        "decorators": [],
                        "name": "foo2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 284,
                      "decorators": [],
                      "name": "bar5",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 289,
            "end": 303,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 290,
                "end": 302,
                "properties": [
                  {
                    "type": "Property",
                    "start": 291,
                    "end": 301,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 294,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 296,
                      "end": 301,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 306,
      "end": 351,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 349,
        "end": 351,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 315,
        "end": 317,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 318,
          "end": 347,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 319,
              "end": 329,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 320,
                "end": 325,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 328,
                "end": 329,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 330,
            "end": 347,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 332,
              "end": 347,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 334,
                  "end": 345,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 334,
                    "end": 337,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 337,
                    "end": 345,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 339,
                      "end": 345
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 352,
      "end": 395,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 393,
        "end": 395,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 361,
        "end": 363,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 364,
          "end": 391,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 365,
              "end": 373,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 366,
                "end": 369,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 372,
                "end": 373,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 374,
            "end": 391,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 376,
              "end": 391,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 378,
                  "end": 389,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 378,
                    "end": 381,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 383,
                      "end": 389
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 396,
      "end": 442,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 440,
        "end": 442,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 405,
        "end": 407,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 408,
          "end": 438,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 409,
              "end": 420,
              "computed": true,
              "key": {
                "type": "CallExpression",
                "start": 410,
                "end": 416,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 410,
                  "end": 414,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 421,
            "end": 438,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 423,
              "end": 438,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 425,
                  "end": 436,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 428,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 428,
                    "end": 436,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 430,
                      "end": 436
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 490,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 488,
        "end": 490,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 454,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 455,
          "end": 486,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 456,
              "end": 466,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 457,
                  "end": 465,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 458,
                    "end": 461,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 465,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 467,
            "end": 486,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 469,
              "end": 486,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 470,
                  "end": 485,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 472,
                      "end": 483,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 475,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 475,
                        "end": 483,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 477,
                          "end": 483
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 491,
      "end": 541,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 539,
        "end": 541,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 500,
        "end": 502,
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 503,
          "end": 537,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 504,
              "end": 517,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 505,
                  "end": 516,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 506,
                    "end": 512,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 506,
                      "end": 510,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 515,
                    "end": 516,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 537,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 520,
              "end": 537,
              "elementTypes": [
                {
                  "type": "TSTypeLiteral",
                  "start": 521,
                  "end": 536,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 523,
                      "end": 534,
                      "accessibility": null,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 523,
                        "end": 526,
                        "decorators": [],
                        "name": "bar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 526,
                        "end": 534,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 528,
                          "end": 534
                        }
                      }
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 620,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 624,
          "end": 658,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 624,
            "end": 641,
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 625,
                "end": 640,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 626,
                    "end": 639,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 627,
                      "end": 632,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 627,
                        "end": 630,
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 639,
                      "decorators": [],
                      "name": "bar6",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 644,
            "end": 658,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 645,
                "end": 657,
                "properties": [
                  {
                    "type": "Property",
                    "start": 646,
                    "end": 656,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 646,
                      "end": 649,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 651,
                      "end": 656,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 660,
      "end": 713,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 664,
          "end": 712,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 664,
            "end": 695,
            "decorators": [],
            "elements": [
              {
                "type": "ObjectPattern",
                "start": 665,
                "end": 694,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 666,
                    "end": 693,
                    "computed": true,
                    "key": {
                      "type": "CallExpression",
                      "start": 667,
                      "end": 686,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 667,
                        "end": 684,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 667,
                          "end": 670,
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 671,
                          "end": 684,
                          "decorators": [],
                          "name": "toExponential",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 689,
                      "end": 693,
                      "decorators": [],
                      "name": "bar7",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 698,
            "end": 712,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 699,
                "end": 711,
                "properties": [
                  {
                    "type": "Property",
                    "start": 700,
                    "end": 710,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 700,
                      "end": 703,
                      "decorators": [],
                      "name": "bar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 705,
                      "end": 710,
                      "raw": "\"bar\"",
                      "value": "bar",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
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
      "start": 743,
      "end": 773,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 744,
        "end": 771,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 744,
          "end": 756,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 745,
              "end": 755,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 746,
                "end": 749,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 752,
                "end": 755,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 759,
          "end": 771,
          "properties": [
            {
              "type": "Property",
              "start": 760,
              "end": 770,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 760,
                "end": 763,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 765,
                "end": 770,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 775,
      "end": 808,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 776,
        "end": 806,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 776,
          "end": 791,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 777,
              "end": 790,
              "computed": true,
              "key": {
                "type": "Literal",
                "start": 778,
                "end": 783,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 786,
                "end": 790,
                "decorators": [],
                "name": "bar2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 794,
          "end": 806,
          "properties": [
            {
              "type": "Property",
              "start": 795,
              "end": 805,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 795,
                "end": 798,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 800,
                "end": 805,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 810,
      "end": 844,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 811,
        "end": 842,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 811,
          "end": 827,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 812,
              "end": 826,
              "computed": true,
              "key": {
                "type": "CallExpression",
                "start": 813,
                "end": 819,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 813,
                  "end": 817,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeArguments": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 822,
                "end": 826,
                "decorators": [],
                "name": "bar3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ],
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 830,
          "end": 842,
          "properties": [
            {
              "type": "Property",
              "start": 831,
              "end": 841,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 831,
                "end": 834,
                "decorators": [],
                "name": "bar",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Literal",
                "start": 836,
                "end": 841,
                "raw": "\"bar\"",
                "value": "bar",
                "regex": null,
                "bigint": null
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 846,
      "end": 879,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 846,
        "end": 878,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 846,
          "end": 861,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 847,
              "end": 860,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 848,
                  "end": 859,
                  "computed": true,
                  "key": {
                    "type": "Identifier",
                    "start": 849,
                    "end": 852,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 855,
                    "end": 859,
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 864,
          "end": 878,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 865,
              "end": 877,
              "properties": [
                {
                  "type": "Property",
                  "start": 866,
                  "end": 876,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 869,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 871,
                    "end": 876,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 880,
      "end": 916,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 880,
        "end": 915,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 880,
          "end": 898,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 881,
              "end": 897,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 882,
                  "end": 896,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 883,
                    "end": 889,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 883,
                      "end": 887,
                      "decorators": [],
                      "name": "foo2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 892,
                    "end": 896,
                    "decorators": [],
                    "name": "bar5",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 901,
          "end": 915,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 902,
              "end": 914,
              "properties": [
                {
                  "type": "Property",
                  "start": 903,
                  "end": 913,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 906,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 908,
                    "end": 913,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 918,
      "end": 953,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 918,
        "end": 952,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 918,
          "end": 935,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 919,
              "end": 934,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 920,
                  "end": 933,
                  "computed": true,
                  "key": {
                    "type": "CallExpression",
                    "start": 921,
                    "end": 926,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 921,
                      "end": 924,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 929,
                    "end": 933,
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 938,
          "end": 952,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 939,
              "end": 951,
              "properties": [
                {
                  "type": "Property",
                  "start": 940,
                  "end": 950,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 940,
                    "end": 943,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 945,
                    "end": 950,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 954,
      "end": 992,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 954,
        "end": 991,
        "operator": "=",
        "left": {
          "type": "ArrayPattern",
          "start": 954,
          "end": 974,
          "decorators": [],
          "elements": [
            {
              "type": "ObjectPattern",
              "start": 955,
              "end": 973,
              "decorators": [],
              "optional": false,
              "properties": [
                {
                  "type": "Property",
                  "start": 956,
                  "end": 972,
                  "computed": true,
                  "key": {
                    "type": "BinaryExpression",
                    "start": 958,
                    "end": 964,
                    "operator": "+",
                    "left": {
                      "type": "Literal",
                      "start": 958,
                      "end": 959,
                      "raw": "1",
                      "value": 1,
                      "regex": null,
                      "bigint": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 962,
                      "end": 964,
                      "properties": []
                    }
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Identifier",
                    "start": 968,
                    "end": 972,
                    "decorators": [],
                    "name": "bar4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ],
              "typeAnnotation": null
            }
          ],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 977,
          "end": 991,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 978,
              "end": 990,
              "properties": [
                {
                  "type": "Property",
                  "start": 979,
                  "end": 989,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 979,
                    "end": 982,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 984,
                    "end": 989,
                    "raw": "\"bar\"",
                    "value": "bar",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
