__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 572,
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 24,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
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
      "start": 27,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "decorators": [],
            "name": "err",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 37,
            "end": 82,
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "ObjectExpression",
                "start": 54,
                "end": 81,
                "properties": [
                  {
                    "type": "Property",
                    "start": 56,
                    "end": 79,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 61,
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "NewExpression",
                      "start": 63,
                      "end": 79,
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 73,
                          "end": 78,
                          "raw": "\"bar\"",
                          "value": "bar"
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 94,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 84,
        "end": 93,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 88,
          "end": 93,
          "decorators": [],
          "name": "cause",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 95,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 99,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 109,
            "decorators": [],
            "name": "anotherErr",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 112,
            "end": 142,
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 127,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "ObjectExpression",
                "start": 129,
                "end": 141,
                "properties": [
                  {
                    "type": "Property",
                    "start": 131,
                    "end": 139,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 136,
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 121,
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 161,
      "directive": null,
      "expression": {
        "type": "MemberExpression",
        "start": 144,
        "end": 160,
        "computed": false,
        "object": {
          "type": "Identifier",
          "start": 144,
          "end": 154,
          "decorators": [],
          "name": "anotherErr",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 155,
          "end": 160,
          "decorators": [],
          "name": "cause",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 213,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 163,
        "end": 212,
        "arguments": [
          {
            "type": "Literal",
            "start": 177,
            "end": 182,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 184,
            "end": 211,
            "properties": [
              {
                "type": "Property",
                "start": 186,
                "end": 209,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 191,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 193,
                  "end": 209,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 203,
                      "end": 208,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 202,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 176,
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 249,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 214,
        "end": 248,
        "arguments": [
          {
            "type": "Literal",
            "start": 228,
            "end": 233,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 235,
            "end": 247,
            "properties": [
              {
                "type": "Property",
                "start": 237,
                "end": 245,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 242,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 301,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 250,
        "end": 300,
        "arguments": [
          {
            "type": "Literal",
            "start": 265,
            "end": 270,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 272,
            "end": 299,
            "properties": [
              {
                "type": "Property",
                "start": 274,
                "end": 297,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 279,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 281,
                  "end": 297,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 291,
                      "end": 296,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 290,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 254,
          "end": 264,
          "decorators": [],
          "name": "RangeError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 357,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 302,
        "end": 356,
        "arguments": [
          {
            "type": "Literal",
            "start": 321,
            "end": 326,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 328,
            "end": 355,
            "properties": [
              {
                "type": "Property",
                "start": 330,
                "end": 353,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 335,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 337,
                  "end": 353,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 347,
                      "end": 352,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 346,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 320,
          "decorators": [],
          "name": "ReferenceError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 410,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 358,
        "end": 409,
        "arguments": [
          {
            "type": "Literal",
            "start": 374,
            "end": 379,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 381,
            "end": 408,
            "properties": [
              {
                "type": "Property",
                "start": 383,
                "end": 406,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 388,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 390,
                  "end": 406,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 400,
                      "end": 405,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 399,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 362,
          "end": 373,
          "decorators": [],
          "name": "SyntaxError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 461,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 411,
        "end": 460,
        "arguments": [
          {
            "type": "Literal",
            "start": 425,
            "end": 430,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 432,
            "end": 459,
            "properties": [
              {
                "type": "Property",
                "start": 434,
                "end": 457,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 439,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 441,
                  "end": 457,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 451,
                      "end": 456,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 450,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 424,
          "decorators": [],
          "name": "TypeError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 511,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 462,
        "end": 510,
        "arguments": [
          {
            "type": "Literal",
            "start": 475,
            "end": 480,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 482,
            "end": 509,
            "properties": [
              {
                "type": "Property",
                "start": 484,
                "end": 507,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 489,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 491,
                  "end": 507,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 501,
                      "end": 506,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 500,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 466,
          "end": 474,
          "decorators": [],
          "name": "URIError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 571,
      "directive": null,
      "expression": {
        "type": "NewExpression",
        "start": 512,
        "end": 570,
        "arguments": [
          {
            "type": "ArrayExpression",
            "start": 531,
            "end": 533,
            "elements": []
          },
          {
            "type": "Literal",
            "start": 535,
            "end": 540,
            "raw": "\"foo\"",
            "value": "foo"
          },
          {
            "type": "ObjectExpression",
            "start": 542,
            "end": 569,
            "properties": [
              {
                "type": "Property",
                "start": 544,
                "end": 567,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 549,
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "NewExpression",
                  "start": 551,
                  "end": 567,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 561,
                      "end": 566,
                      "raw": "\"bar\"",
                      "value": "bar"
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 560,
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 530,
          "decorators": [],
          "name": "AggregateError",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
