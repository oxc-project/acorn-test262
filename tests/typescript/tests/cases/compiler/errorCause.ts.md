__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 17,
                "end": 24
              },
              "start": 15,
              "end": 24
            },
            "start": 14,
            "end": 24
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 24
        }
      ],
      "declare": true,
      "start": 0,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "err",
            "optional": false,
            "typeAnnotation": null,
            "start": 31,
            "end": 34
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 46
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 47,
                "end": 52
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 61
                    },
                    "value": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Error",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 72
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "bar",
                          "raw": "\"bar\"",
                          "start": 73,
                          "end": 78
                        }
                      ],
                      "start": 63,
                      "end": 79
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 56,
                    "end": 79
                  }
                ],
                "start": 54,
                "end": 81
              }
            ],
            "start": 37,
            "end": 82
          },
          "definite": false,
          "start": 31,
          "end": 82
        }
      ],
      "declare": false,
      "start": 27,
      "end": 83
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "err",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 87
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cause",
          "optional": false,
          "typeAnnotation": null,
          "start": 88,
          "end": 93
        },
        "optional": false,
        "computed": false,
        "start": 84,
        "end": 93
      },
      "directive": null,
      "start": 84,
      "end": 94
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anotherErr",
            "optional": false,
            "typeAnnotation": null,
            "start": 99,
            "end": 109
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Error",
              "optional": false,
              "typeAnnotation": null,
              "start": 116,
              "end": 121
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 122,
                "end": 127
              },
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cause",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 131,
                      "end": 136
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 131,
                    "end": 139
                  }
                ],
                "start": 129,
                "end": 141
              }
            ],
            "start": 112,
            "end": 142
          },
          "definite": false,
          "start": 99,
          "end": 142
        }
      ],
      "declare": false,
      "start": 95,
      "end": 143
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "anotherErr",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 154
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "cause",
          "optional": false,
          "typeAnnotation": null,
          "start": 155,
          "end": 160
        },
        "optional": false,
        "computed": false,
        "start": 144,
        "end": 160
      },
      "directive": null,
      "start": 144,
      "end": 161
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "typeAnnotation": null,
          "start": 167,
          "end": 176
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 177,
            "end": 182
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 186,
                  "end": 191
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 197,
                    "end": 202
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 203,
                      "end": 208
                    }
                  ],
                  "start": 193,
                  "end": 209
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 186,
                "end": 209
              }
            ],
            "start": 184,
            "end": 211
          }
        ],
        "start": 163,
        "end": 212
      },
      "directive": null,
      "start": 163,
      "end": 213
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "EvalError",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 227
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 228,
            "end": 233
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 242
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 245
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 237,
                "end": 245
              }
            ],
            "start": 235,
            "end": 247
          }
        ],
        "start": 214,
        "end": 248
      },
      "directive": null,
      "start": 214,
      "end": 249
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "RangeError",
          "optional": false,
          "typeAnnotation": null,
          "start": 254,
          "end": 264
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 265,
            "end": 270
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 279
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 285,
                    "end": 290
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 291,
                      "end": 296
                    }
                  ],
                  "start": 281,
                  "end": 297
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 274,
                "end": 297
              }
            ],
            "start": 272,
            "end": 299
          }
        ],
        "start": 250,
        "end": 300
      },
      "directive": null,
      "start": 250,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ReferenceError",
          "optional": false,
          "typeAnnotation": null,
          "start": 306,
          "end": 320
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 321,
            "end": 326
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 330,
                  "end": 335
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 341,
                    "end": 346
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 347,
                      "end": 352
                    }
                  ],
                  "start": 337,
                  "end": 353
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 330,
                "end": 353
              }
            ],
            "start": 328,
            "end": 355
          }
        ],
        "start": 302,
        "end": 356
      },
      "directive": null,
      "start": 302,
      "end": 357
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "SyntaxError",
          "optional": false,
          "typeAnnotation": null,
          "start": 362,
          "end": 373
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 374,
            "end": 379
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 388
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 394,
                    "end": 399
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 400,
                      "end": 405
                    }
                  ],
                  "start": 390,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 383,
                "end": 406
              }
            ],
            "start": 381,
            "end": 408
          }
        ],
        "start": 358,
        "end": 409
      },
      "directive": null,
      "start": 358,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "TypeError",
          "optional": false,
          "typeAnnotation": null,
          "start": 415,
          "end": 424
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 425,
            "end": 430
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 439
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 450
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 451,
                      "end": 456
                    }
                  ],
                  "start": 441,
                  "end": 457
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 434,
                "end": 457
              }
            ],
            "start": 432,
            "end": 459
          }
        ],
        "start": 411,
        "end": 460
      },
      "directive": null,
      "start": 411,
      "end": 461
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "URIError",
          "optional": false,
          "typeAnnotation": null,
          "start": 466,
          "end": 474
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 475,
            "end": 480
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 484,
                  "end": 489
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 495,
                    "end": 500
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 501,
                      "end": 506
                    }
                  ],
                  "start": 491,
                  "end": 507
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 484,
                "end": 507
              }
            ],
            "start": 482,
            "end": 509
          }
        ],
        "start": 462,
        "end": 510
      },
      "directive": null,
      "start": 462,
      "end": 511
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "NewExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "AggregateError",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 530
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [],
            "start": 531,
            "end": 533
          },
          {
            "type": "Literal",
            "value": "foo",
            "raw": "\"foo\"",
            "start": 535,
            "end": 540
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "cause",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 544,
                  "end": 549
                },
                "value": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 560
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "\"bar\"",
                      "start": 561,
                      "end": 566
                    }
                  ],
                  "start": 551,
                  "end": 567
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 544,
                "end": 567
              }
            ],
            "start": 542,
            "end": 569
          }
        ],
        "start": 512,
        "end": 570
      },
      "directive": null,
      "start": 512,
      "end": 571
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 571
}
```
