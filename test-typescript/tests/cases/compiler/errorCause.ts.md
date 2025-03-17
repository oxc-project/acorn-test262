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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 24,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 24,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
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
      "start": 27,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 34,
            "name": "err",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 37,
            "end": 82,
            "callee": {
              "type": "Identifier",
              "start": 41,
              "end": 46,
              "name": "Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 47,
                "end": 52,
                "value": "foo",
                "raw": "\"foo\""
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 56,
                      "end": 61,
                      "name": "cause",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "NewExpression",
                      "start": 63,
                      "end": 79,
                      "callee": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "name": "Error",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "start": 73,
                          "end": 78,
                          "value": "bar",
                          "raw": "\"bar\""
                        }
                      ],
                      "typeArguments": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 84,
      "end": 94,
      "expression": {
        "type": "MemberExpression",
        "start": 84,
        "end": 93,
        "object": {
          "type": "Identifier",
          "start": 84,
          "end": 87,
          "name": "err",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 88,
          "end": 93,
          "name": "cause",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 109,
            "name": "anotherErr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 112,
            "end": 142,
            "callee": {
              "type": "Identifier",
              "start": 116,
              "end": 121,
              "name": "Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 122,
                "end": 127,
                "value": "foo",
                "raw": "\"foo\""
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 131,
                      "end": 136,
                      "name": "cause",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 138,
                      "end": 139,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 144,
      "end": 161,
      "expression": {
        "type": "MemberExpression",
        "start": 144,
        "end": 160,
        "object": {
          "type": "Identifier",
          "start": 144,
          "end": 154,
          "name": "anotherErr",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 155,
          "end": 160,
          "name": "cause",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 163,
      "end": 213,
      "expression": {
        "type": "NewExpression",
        "start": 163,
        "end": 212,
        "callee": {
          "type": "Identifier",
          "start": 167,
          "end": 176,
          "name": "EvalError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 177,
            "end": 182,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 191,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 193,
                  "end": 209,
                  "callee": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 202,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 203,
                      "end": 208,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 249,
      "expression": {
        "type": "NewExpression",
        "start": 214,
        "end": 248,
        "callee": {
          "type": "Identifier",
          "start": 218,
          "end": 227,
          "name": "EvalError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 228,
            "end": 233,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 242,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 244,
                  "end": 245,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 250,
      "end": 301,
      "expression": {
        "type": "NewExpression",
        "start": 250,
        "end": 300,
        "callee": {
          "type": "Identifier",
          "start": 254,
          "end": 264,
          "name": "RangeError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 265,
            "end": 270,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 274,
                  "end": 279,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 281,
                  "end": 297,
                  "callee": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 290,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 291,
                      "end": 296,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 302,
      "end": 357,
      "expression": {
        "type": "NewExpression",
        "start": 302,
        "end": 356,
        "callee": {
          "type": "Identifier",
          "start": 306,
          "end": 320,
          "name": "ReferenceError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 321,
            "end": 326,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 330,
                  "end": 335,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 337,
                  "end": 353,
                  "callee": {
                    "type": "Identifier",
                    "start": 341,
                    "end": 346,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 347,
                      "end": 352,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 358,
      "end": 410,
      "expression": {
        "type": "NewExpression",
        "start": 358,
        "end": 409,
        "callee": {
          "type": "Identifier",
          "start": 362,
          "end": 373,
          "name": "SyntaxError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 374,
            "end": 379,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 388,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 390,
                  "end": 406,
                  "callee": {
                    "type": "Identifier",
                    "start": 394,
                    "end": 399,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 400,
                      "end": 405,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 461,
      "expression": {
        "type": "NewExpression",
        "start": 411,
        "end": 460,
        "callee": {
          "type": "Identifier",
          "start": 415,
          "end": 424,
          "name": "TypeError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 425,
            "end": 430,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 439,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 441,
                  "end": 457,
                  "callee": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 450,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 451,
                      "end": 456,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 462,
      "end": 511,
      "expression": {
        "type": "NewExpression",
        "start": 462,
        "end": 510,
        "callee": {
          "type": "Identifier",
          "start": 466,
          "end": 474,
          "name": "URIError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 475,
            "end": 480,
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 489,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 491,
                  "end": 507,
                  "callee": {
                    "type": "Identifier",
                    "start": 495,
                    "end": 500,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 501,
                      "end": 506,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 512,
      "end": 571,
      "expression": {
        "type": "NewExpression",
        "start": 512,
        "end": 570,
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 530,
          "name": "AggregateError",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
            "value": "foo",
            "raw": "\"foo\""
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 544,
                  "end": 549,
                  "name": "cause",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "NewExpression",
                  "start": 551,
                  "end": 567,
                  "callee": {
                    "type": "Identifier",
                    "start": 555,
                    "end": 560,
                    "name": "Error",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 561,
                      "end": 566,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  ],
                  "typeArguments": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          }
        ],
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
