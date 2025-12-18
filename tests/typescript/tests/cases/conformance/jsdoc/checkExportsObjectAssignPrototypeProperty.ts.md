__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 57,
        "end": 63
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "name",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 68
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 76,
                  "end": 80
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 85
                },
                "optional": false,
                "computed": false,
                "start": 76,
                "end": 85
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 92
              },
              "start": 76,
              "end": 92
            },
            "directive": null,
            "start": 76,
            "end": 93
          }
        ],
        "start": 70,
        "end": 95
      },
      "expression": false,
      "start": 48,
      "end": 95
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 102
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 103,
              "end": 112
            },
            "optional": false,
            "computed": false,
            "start": 96,
            "end": 112
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "describe",
            "optional": false,
            "typeAnnotation": null,
            "start": 113,
            "end": 121
          },
          "optional": false,
          "computed": false,
          "start": 96,
          "end": 121
        },
        "right": {
          "type": "FunctionExpression",
          "id": null,
          "generator": false,
          "async": false,
          "declare": false,
          "typeParameters": null,
          "params": [],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Literal",
                    "value": "Person called ",
                    "raw": "\"Person called \"",
                    "start": 149,
                    "end": 165
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 168,
                      "end": 172
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 173,
                      "end": 177
                    },
                    "optional": false,
                    "computed": false,
                    "start": 168,
                    "end": 177
                  },
                  "start": 149,
                  "end": 177
                },
                "start": 142,
                "end": 178
              }
            ],
            "start": 136,
            "end": 180
          },
          "expression": false,
          "start": 124,
          "end": 180
        },
        "start": 96,
        "end": 180
      },
      "directive": null,
      "start": 96,
      "end": 181
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 188
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 203
          },
          "optional": false,
          "computed": false,
          "start": 182,
          "end": 203
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 204,
              "end": 210
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 211,
              "end": 220
            },
            "optional": false,
            "computed": false,
            "start": 204,
            "end": 220
          },
          {
            "type": "Literal",
            "value": "thing",
            "raw": "\"thing\"",
            "start": 222,
            "end": 229
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 233,
                  "end": 238
                },
                "value": {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 240,
                  "end": 242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 233,
                "end": 242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 252
                },
                "value": {
                  "type": "Literal",
                  "value": true,
                  "raw": "true",
                  "start": 254,
                  "end": 258
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 244,
                "end": 258
              }
            ],
            "start": 231,
            "end": 260
          }
        ],
        "optional": false,
        "start": 182,
        "end": 261
      },
      "directive": null,
      "start": 182,
      "end": 262
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 263,
            "end": 269
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 270,
            "end": 284
          },
          "optional": false,
          "computed": false,
          "start": 263,
          "end": 284
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 285,
              "end": 291
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 301
            },
            "optional": false,
            "computed": false,
            "start": 285,
            "end": 301
          },
          {
            "type": "Literal",
            "value": "readonlyProp",
            "raw": "\"readonlyProp\"",
            "start": 303,
            "end": 317
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 326
                },
                "value": {
                  "type": "Literal",
                  "value": "Smith",
                  "raw": "\"Smith\"",
                  "start": 328,
                  "end": 335
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 321,
                "end": 335
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "writable",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 337,
                  "end": 345
                },
                "value": {
                  "type": "Literal",
                  "value": false,
                  "raw": "false",
                  "start": 347,
                  "end": 352
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 337,
                "end": 352
              }
            ],
            "start": 319,
            "end": 354
          }
        ],
        "optional": false,
        "start": 263,
        "end": 355
      },
      "directive": null,
      "start": 263,
      "end": 356
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 363
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 364,
            "end": 378
          },
          "optional": false,
          "computed": false,
          "start": 357,
          "end": 378
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 379,
              "end": 385
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 386,
              "end": 395
            },
            "optional": false,
            "computed": false,
            "start": 379,
            "end": 395
          },
          {
            "type": "Literal",
            "value": "rwAccessors",
            "raw": "\"rwAccessors\"",
            "start": 397,
            "end": 410
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
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 417
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 98122,
                          "raw": "98122",
                          "start": 429,
                          "end": 434
                        },
                        "start": 422,
                        "end": 434
                      }
                    ],
                    "start": 420,
                    "end": 436
                  },
                  "expression": false,
                  "start": 417,
                  "end": 436
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 414,
                "end": 436
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 441
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 442,
                      "end": 443
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 445,
                    "end": 459
                  },
                  "expression": false,
                  "start": 441,
                  "end": 459
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 438,
                "end": 459
              }
            ],
            "start": 412,
            "end": 461
          }
        ],
        "optional": false,
        "start": 357,
        "end": 462
      },
      "directive": null,
      "start": 357,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 464,
            "end": 470
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 485
          },
          "optional": false,
          "computed": false,
          "start": 464,
          "end": 485
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 486,
              "end": 492
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 493,
              "end": 502
            },
            "optional": false,
            "computed": false,
            "start": 486,
            "end": 502
          },
          {
            "type": "Literal",
            "value": "readonlyAccessor",
            "raw": "\"readonlyAccessor\"",
            "start": 504,
            "end": 522
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
                  "name": "get",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 526,
                  "end": 529
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Literal",
                          "value": 21.75,
                          "raw": "21.75",
                          "start": 541,
                          "end": 546
                        },
                        "start": 534,
                        "end": 546
                      }
                    ],
                    "start": 532,
                    "end": 548
                  },
                  "expression": false,
                  "start": 529,
                  "end": 548
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 526,
                "end": 548
              }
            ],
            "start": 524,
            "end": 550
          }
        ],
        "optional": false,
        "start": 464,
        "end": 551
      },
      "directive": null,
      "start": 464,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 559
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "defineProperty",
            "optional": false,
            "typeAnnotation": null,
            "start": 560,
            "end": 574
          },
          "optional": false,
          "computed": false,
          "start": 553,
          "end": 574
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 575,
              "end": 581
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 591
            },
            "optional": false,
            "computed": false,
            "start": 575,
            "end": 591
          },
          {
            "type": "Literal",
            "value": "setonlyAccessor",
            "raw": "\"setonlyAccessor\"",
            "start": 593,
            "end": 610
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
                  "name": "set",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 649,
                  "end": 652
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 653,
                      "end": 656
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 668,
                              "end": 672
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "rwAccessors",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 684
                            },
                            "optional": false,
                            "computed": false,
                            "start": 668,
                            "end": 684
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Number",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 687,
                              "end": 693
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "str",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 694,
                                "end": 697
                              }
                            ],
                            "optional": false,
                            "start": 687,
                            "end": 698
                          },
                          "start": 668,
                          "end": 698
                        },
                        "directive": null,
                        "start": 668,
                        "end": 698
                      }
                    ],
                    "start": 658,
                    "end": 704
                  },
                  "expression": false,
                  "start": 652,
                  "end": 704
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 649,
                "end": 704
              }
            ],
            "start": 612,
            "end": 706
          }
        ],
        "optional": false,
        "start": 553,
        "end": 707
      },
      "directive": null,
      "start": 553,
      "end": 708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null,
            "start": 709,
            "end": 715
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 723
          },
          "optional": false,
          "computed": false,
          "start": 709,
          "end": 723
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Person",
          "optional": false,
          "typeAnnotation": null,
          "start": 726,
          "end": 732
        },
        "start": 709,
        "end": 732
      },
      "directive": null,
      "start": 709,
      "end": 733
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 48,
  "end": 734
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 48,
    "end": 56,
    "range": [
      48,
      56
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 57,
    "end": 63,
    "range": [
      57,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 64,
    "end": 68,
    "range": [
      64,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 76,
    "end": 80,
    "range": [
      76,
      80
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 80,
    "end": 81,
    "range": [
      80,
      81
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 81,
    "end": 85,
    "range": [
      81,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 88,
    "end": 92,
    "range": [
      88,
      92
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 94,
    "end": 95,
    "range": [
      94,
      95
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 96,
    "end": 102,
    "range": [
      96,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Identifier",
    "value": "describe",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 124,
    "end": 132,
    "range": [
      124,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 134,
    "end": 135,
    "range": [
      134,
      135
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 142,
    "end": 148,
    "range": [
      142,
      148
    ]
  },
  {
    "type": "String",
    "value": "\"Person called \"",
    "start": 149,
    "end": 165,
    "range": [
      149,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 166,
    "end": 167,
    "range": [
      166,
      167
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 168,
    "end": 172,
    "range": [
      168,
      172
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 172,
    "end": 173,
    "range": [
      172,
      173
    ]
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 173,
    "end": 177,
    "range": [
      173,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 182,
    "end": 188,
    "range": [
      182,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 188,
    "end": 189,
    "range": [
      188,
      189
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 189,
    "end": 203,
    "range": [
      189,
      203
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 204,
    "end": 210,
    "range": [
      204,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 211,
    "end": 220,
    "range": [
      211,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "String",
    "value": "\"thing\"",
    "start": 222,
    "end": 229,
    "range": [
      222,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 231,
    "end": 232,
    "range": [
      231,
      232
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 233,
    "end": 238,
    "range": [
      233,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239,
    "range": [
      238,
      239
    ]
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 240,
    "end": 242,
    "range": [
      240,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 244,
    "end": 252,
    "range": [
      244,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 254,
    "end": 258,
    "range": [
      254,
      258
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 260,
    "end": 261,
    "range": [
      260,
      261
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 261,
    "end": 262,
    "range": [
      261,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 263,
    "end": 269,
    "range": [
      263,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 269,
    "end": 270,
    "range": [
      269,
      270
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 270,
    "end": 284,
    "range": [
      270,
      284
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 285,
    "end": 291,
    "range": [
      285,
      291
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 292,
    "end": 301,
    "range": [
      292,
      301
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302,
    "range": [
      301,
      302
    ]
  },
  {
    "type": "String",
    "value": "\"readonlyProp\"",
    "start": 303,
    "end": 317,
    "range": [
      303,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 319,
    "end": 320,
    "range": [
      319,
      320
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 321,
    "end": 326,
    "range": [
      321,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "String",
    "value": "\"Smith\"",
    "start": 328,
    "end": 335,
    "range": [
      328,
      335
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Identifier",
    "value": "writable",
    "start": 337,
    "end": 345,
    "range": [
      337,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 347,
    "end": 352,
    "range": [
      347,
      352
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356,
    "range": [
      355,
      356
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 357,
    "end": 363,
    "range": [
      357,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 364,
    "end": 378,
    "range": [
      364,
      378
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 379,
    "end": 385,
    "range": [
      379,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 385,
    "end": 386,
    "range": [
      385,
      386
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 386,
    "end": 395,
    "range": [
      386,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 395,
    "end": 396,
    "range": [
      395,
      396
    ]
  },
  {
    "type": "String",
    "value": "\"rwAccessors\"",
    "start": 397,
    "end": 410,
    "range": [
      397,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 414,
    "end": 417,
    "range": [
      414,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 420,
    "end": 421,
    "range": [
      420,
      421
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 422,
    "end": 428,
    "range": [
      422,
      428
    ]
  },
  {
    "type": "Numeric",
    "value": "98122",
    "start": 429,
    "end": 434,
    "range": [
      429,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 438,
    "end": 441,
    "range": [
      438,
      441
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 441,
    "end": 442,
    "range": [
      441,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "_",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 443,
    "end": 444,
    "range": [
      443,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 445,
    "end": 446,
    "range": [
      445,
      446
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459,
    "range": [
      458,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 460,
    "end": 461,
    "range": [
      460,
      461
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 461,
    "end": 462,
    "range": [
      461,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 464,
    "end": 470,
    "range": [
      464,
      470
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 471,
    "end": 485,
    "range": [
      471,
      485
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 485,
    "end": 486,
    "range": [
      485,
      486
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 486,
    "end": 492,
    "range": [
      486,
      492
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 492,
    "end": 493,
    "range": [
      492,
      493
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 493,
    "end": 502,
    "range": [
      493,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "String",
    "value": "\"readonlyAccessor\"",
    "start": 504,
    "end": 522,
    "range": [
      504,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 524,
    "end": 525,
    "range": [
      524,
      525
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 526,
    "end": 529,
    "range": [
      526,
      529
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 532,
    "end": 533,
    "range": [
      532,
      533
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 534,
    "end": 540,
    "range": [
      534,
      540
    ]
  },
  {
    "type": "Numeric",
    "value": "21.75",
    "start": 541,
    "end": 546,
    "range": [
      541,
      546
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 553,
    "end": 559,
    "range": [
      553,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Identifier",
    "value": "defineProperty",
    "start": 560,
    "end": 574,
    "range": [
      560,
      574
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 575,
    "end": 581,
    "range": [
      575,
      581
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 581,
    "end": 582,
    "range": [
      581,
      582
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 582,
    "end": 591,
    "range": [
      582,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "String",
    "value": "\"setonlyAccessor\"",
    "start": 593,
    "end": 610,
    "range": [
      593,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 653,
    "end": 656,
    "range": [
      653,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 668,
    "end": 672,
    "range": [
      668,
      672
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 672,
    "end": 673,
    "range": [
      672,
      673
    ]
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 673,
    "end": 684,
    "range": [
      673,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "Number",
    "start": 687,
    "end": 693,
    "range": [
      687,
      693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694,
    "range": [
      693,
      694
    ]
  },
  {
    "type": "Identifier",
    "value": "str",
    "start": 694,
    "end": 697,
    "range": [
      694,
      697
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 703,
    "end": 704,
    "range": [
      703,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 706,
    "end": 707,
    "range": [
      706,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 709,
    "end": 715,
    "range": [
      709,
      715
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 715,
    "end": 716,
    "range": [
      715,
      716
    ]
  },
  {
    "type": "Identifier",
    "value": "exports",
    "start": 716,
    "end": 723,
    "range": [
      716,
      723
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 726,
    "end": 732,
    "range": [
      726,
      732
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 732,
    "end": 733,
    "range": [
      732,
      733
    ]
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "./",
        "raw": "\"./\"",
        "start": 7,
        "end": 11
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 12
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 27
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./mod1",
          "raw": "\"./mod1\"",
          "start": 38,
          "end": 46
        },
        "start": 30,
        "end": 47
      },
      "importKind": "value",
      "start": 14,
      "end": 48
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 58
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 71
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "Name",
                "raw": "\"Name\"",
                "start": 72,
                "end": 78
              }
            ],
            "start": 61,
            "end": 79
          },
          "definite": false,
          "start": 56,
          "end": 79
        }
      ],
      "declare": false,
      "start": 50,
      "end": 79
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 81,
          "end": 83
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 89
        },
        "optional": false,
        "computed": false,
        "start": 81,
        "end": 89
      },
      "directive": null,
      "start": 81,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 91,
          "end": 93
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyProp",
          "optional": false,
          "typeAnnotation": null,
          "start": 94,
          "end": 106
        },
        "optional": false,
        "computed": false,
        "start": 91,
        "end": 106
      },
      "directive": null,
      "start": 91,
      "end": 107
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 108,
          "end": 110
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "rwAccessors",
          "optional": false,
          "typeAnnotation": null,
          "start": 111,
          "end": 122
        },
        "optional": false,
        "computed": false,
        "start": 108,
        "end": 122
      },
      "directive": null,
      "start": 108,
      "end": 123
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 124,
          "end": 126
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "readonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 143
        },
        "optional": false,
        "computed": false,
        "start": 124,
        "end": 143
      },
      "directive": null,
      "start": 124,
      "end": 144
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m1",
          "optional": false,
          "typeAnnotation": null,
          "start": 145,
          "end": 147
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "setonlyAccessor",
          "optional": false,
          "typeAnnotation": null,
          "start": 148,
          "end": 163
        },
        "optional": false,
        "computed": false,
        "start": 145,
        "end": 163
      },
      "directive": null,
      "start": 145,
      "end": 164
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 189,
            "end": 191
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 189,
          "end": 197
        },
        "right": {
          "type": "Literal",
          "value": 10,
          "raw": "10",
          "start": 200,
          "end": 202
        },
        "start": 189,
        "end": 202
      },
      "directive": null,
      "start": 189,
      "end": 203
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 204,
            "end": 206
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 218
          },
          "optional": false,
          "computed": false,
          "start": 204,
          "end": 218
        },
        "right": {
          "type": "Literal",
          "value": 11,
          "raw": "11",
          "start": 221,
          "end": 223
        },
        "start": 204,
        "end": 223
      },
      "directive": null,
      "start": 204,
      "end": 224
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 225,
            "end": 227
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 228,
            "end": 243
          },
          "optional": false,
          "computed": false,
          "start": 225,
          "end": 243
        },
        "right": {
          "type": "Literal",
          "value": "yes",
          "raw": "\"yes\"",
          "start": 246,
          "end": 251
        },
        "start": 225,
        "end": 251
      },
      "directive": null,
      "start": 225,
      "end": 252
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 280,
            "end": 282
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyProp",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 295
          },
          "optional": false,
          "computed": false,
          "start": 280,
          "end": 295
        },
        "right": {
          "type": "Literal",
          "value": "name",
          "raw": "\"name\"",
          "start": 298,
          "end": 304
        },
        "start": 280,
        "end": 304
      },
      "directive": null,
      "start": 280,
      "end": 305
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 306,
            "end": 308
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "readonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 325
          },
          "optional": false,
          "computed": false,
          "start": 306,
          "end": 325
        },
        "right": {
          "type": "Literal",
          "value": 12,
          "raw": "12",
          "start": 328,
          "end": 330
        },
        "start": 306,
        "end": 330
      },
      "directive": null,
      "start": 306,
      "end": 331
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 332,
            "end": 334
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 335,
            "end": 340
          },
          "optional": false,
          "computed": false,
          "start": 332,
          "end": 340
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 343,
          "end": 347
        },
        "start": 332,
        "end": 347
      },
      "directive": null,
      "start": 332,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rwAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 363
          },
          "optional": false,
          "computed": false,
          "start": 349,
          "end": 363
        },
        "right": {
          "type": "Literal",
          "value": "no",
          "raw": "\"no\"",
          "start": 366,
          "end": 370
        },
        "start": 349,
        "end": 370
      },
      "directive": null,
      "start": 349,
      "end": 371
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m1",
            "optional": false,
            "typeAnnotation": null,
            "start": 372,
            "end": 374
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "setonlyAccessor",
            "optional": false,
            "typeAnnotation": null,
            "start": 375,
            "end": 390
          },
          "optional": false,
          "computed": false,
          "start": 372,
          "end": 390
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 393,
          "end": 394
        },
        "start": 372,
        "end": 394
      },
      "directive": null,
      "start": 372,
      "end": 395
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 396
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6,
    "range": [
      0,
      6
    ]
  },
  {
    "type": "String",
    "value": "\"./\"",
    "start": 7,
    "end": 11,
    "range": [
      7,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 14,
    "end": 20,
    "range": [
      14,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 21,
    "end": 27,
    "range": [
      21,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 30,
    "end": 37,
    "range": [
      30,
      37
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "String",
    "value": "\"./mod1\"",
    "start": 38,
    "end": 46,
    "range": [
      38,
      46
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47,
    "range": [
      46,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 50,
    "end": 55,
    "range": [
      50,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 56,
    "end": 58,
    "range": [
      56,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 61,
    "end": 64,
    "range": [
      61,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 65,
    "end": 71,
    "range": [
      65,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "String",
    "value": "\"Name\"",
    "start": 72,
    "end": 78,
    "range": [
      72,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 81,
    "end": 83,
    "range": [
      81,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 84,
    "end": 89,
    "range": [
      84,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 93,
    "end": 94,
    "range": [
      93,
      94
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 94,
    "end": 106,
    "range": [
      94,
      106
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107,
    "range": [
      106,
      107
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 108,
    "end": 110,
    "range": [
      108,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 111,
    "end": 122,
    "range": [
      111,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 124,
    "end": 126,
    "range": [
      124,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 127,
    "end": 143,
    "range": [
      127,
      143
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144,
    "range": [
      143,
      144
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 145,
    "end": 147,
    "range": [
      145,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 148,
    "end": 163,
    "range": [
      148,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164,
    "range": [
      163,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 189,
    "end": 191,
    "range": [
      189,
      191
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 191,
    "end": 192,
    "range": [
      191,
      192
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 192,
    "end": 197,
    "range": [
      192,
      197
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 200,
    "end": 202,
    "range": [
      200,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 207,
    "end": 218,
    "range": [
      207,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 221,
    "end": 223,
    "range": [
      221,
      223
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 225,
    "end": 227,
    "range": [
      225,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 228,
    "end": 243,
    "range": [
      228,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "String",
    "value": "\"yes\"",
    "start": 246,
    "end": 251,
    "range": [
      246,
      251
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyProp",
    "start": 283,
    "end": 295,
    "range": [
      283,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "String",
    "value": "\"name\"",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 306,
    "end": 308,
    "range": [
      306,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Identifier",
    "value": "readonlyAccessor",
    "start": 309,
    "end": 325,
    "range": [
      309,
      325
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 328,
    "end": 330,
    "range": [
      328,
      330
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 330,
    "end": 331,
    "range": [
      330,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 332,
    "end": 334,
    "range": [
      332,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 334,
    "end": 335,
    "range": [
      334,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 335,
    "end": 340,
    "range": [
      335,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 343,
    "end": 347,
    "range": [
      343,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 349,
    "end": 351,
    "range": [
      349,
      351
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 351,
    "end": 352,
    "range": [
      351,
      352
    ]
  },
  {
    "type": "Identifier",
    "value": "rwAccessors",
    "start": 352,
    "end": 363,
    "range": [
      352,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "\"no\"",
    "start": 366,
    "end": 370,
    "range": [
      366,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "m1",
    "start": 372,
    "end": 374,
    "range": [
      372,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 374,
    "end": 375,
    "range": [
      374,
      375
    ]
  },
  {
    "type": "Identifier",
    "value": "setonlyAccessor",
    "start": 375,
    "end": 390,
    "range": [
      375,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  }
]
```
