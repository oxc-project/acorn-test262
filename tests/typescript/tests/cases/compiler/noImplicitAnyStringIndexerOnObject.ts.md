__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [],
              "start": 8,
              "end": 10
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "\"hello\"",
              "start": 11,
              "end": 18
            },
            "optional": false,
            "computed": true,
            "start": 8,
            "end": 19
          },
          "definite": false,
          "start": 4,
          "end": 19
        }
      ],
      "declare": false,
      "start": 0,
      "end": 20
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              },
              "start": 26,
              "end": 34
            },
            "start": 25,
            "end": 34
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Literal",
                    "value": "",
                    "raw": "''",
                    "start": 39,
                    "end": 41
                  },
                  "value": {
                    "type": "Literal",
                    "value": "foo",
                    "raw": "'foo'",
                    "start": 43,
                    "end": 48
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 39,
                  "end": 48
                }
              ],
              "start": 37,
              "end": 50
            },
            "property": {
              "type": "Literal",
              "value": "",
              "raw": "''",
              "start": 51,
              "end": 53
            },
            "optional": false,
            "computed": true,
            "start": 37,
            "end": 54
          },
          "definite": false,
          "start": 25,
          "end": 54
        }
      ],
      "declare": false,
      "start": 21,
      "end": 55
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 62
          },
          "init": {
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
                  "start": 69,
                  "end": 72
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 80,
                          "end": 86
                        },
                        "start": 78,
                        "end": 86
                      },
                      "start": 75,
                      "end": 86
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "foobar",
                    "raw": "'foobar'",
                    "start": 91,
                    "end": 99
                  },
                  "id": null,
                  "generator": false,
                  "start": 74,
                  "end": 99
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 69,
                "end": 99
              }
            ],
            "start": 65,
            "end": 101
          },
          "definite": false,
          "start": 61,
          "end": 101
        }
      ],
      "declare": false,
      "start": 57,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null,
          "start": 103,
          "end": 104
        },
        "property": {
          "type": "Literal",
          "value": "hello",
          "raw": "'hello'",
          "start": 105,
          "end": 112
        },
        "optional": false,
        "computed": true,
        "start": 103,
        "end": 113
      },
      "directive": null,
      "start": 103,
      "end": 114
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 121,
            "end": 124
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 129,
              "end": 136
            },
            "optional": false,
            "computed": true,
            "start": 127,
            "end": 137
          },
          "definite": false,
          "start": 121,
          "end": 137
        }
      ],
      "declare": false,
      "start": 115,
      "end": 138
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": null,
            "start": 144,
            "end": 145
          },
          "init": {
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
                  "start": 152,
                  "end": 155
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 163,
                          "end": 169
                        },
                        "start": 161,
                        "end": 169
                      },
                      "start": 158,
                      "end": 169
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "foobar",
                    "raw": "'foobar'",
                    "start": 174,
                    "end": 182
                  },
                  "id": null,
                  "generator": false,
                  "start": 157,
                  "end": 182
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 152,
                "end": 182
              }
            ],
            "start": 148,
            "end": 184
          },
          "definite": false,
          "start": 144,
          "end": 184
        }
      ],
      "declare": false,
      "start": 140,
      "end": 185
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 192,
            "end": 195
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "d",
              "optional": false,
              "typeAnnotation": null,
              "start": 198,
              "end": 199
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 200,
              "end": 207
            },
            "optional": false,
            "computed": true,
            "start": 198,
            "end": 208
          },
          "definite": false,
          "start": 192,
          "end": 208
        }
      ],
      "declare": false,
      "start": 186,
      "end": 209
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 220
              },
              "init": {
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
                      "start": 229,
                      "end": 232
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 240,
                              "end": 246
                            },
                            "start": 238,
                            "end": 246
                          },
                          "start": 235,
                          "end": 246
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 251,
                        "end": 259
                      },
                      "id": null,
                      "generator": false,
                      "start": 234,
                      "end": 259
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 229,
                    "end": 259
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
                      "start": 265,
                      "end": 268
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 276,
                              "end": 282
                            },
                            "start": 274,
                            "end": 282
                          },
                          "start": 271,
                          "end": 282
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 287,
                        "end": 295
                      },
                      "id": null,
                      "generator": false,
                      "start": 270,
                      "end": 295
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 265,
                    "end": 295
                  }
                ],
                "start": 223,
                "end": 299
              },
              "definite": false,
              "start": 219,
              "end": 299
            }
          ],
          "declare": false,
          "start": 215,
          "end": 300
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 304
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 305,
              "end": 312
            },
            "optional": false,
            "computed": true,
            "start": 303,
            "end": 313
          },
          "directive": null,
          "start": 303,
          "end": 314
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 317,
                "end": 318
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 319,
                "end": 326
              },
              "optional": false,
              "computed": true,
              "start": 317,
              "end": 327
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 330,
              "end": 340
            },
            "start": 317,
            "end": 340
          },
          "directive": null,
          "start": 317,
          "end": 341
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 345
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 346,
                "end": 353
              },
              "optional": false,
              "computed": true,
              "start": 344,
              "end": 354
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 358,
              "end": 359
            },
            "start": 344,
            "end": 359
          },
          "directive": null,
          "start": 344,
          "end": 360
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 364
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 365,
                "end": 372
              },
              "optional": false,
              "computed": true,
              "start": 363,
              "end": 373
            },
            "start": 363,
            "end": 376
          },
          "directive": null,
          "start": 363,
          "end": 377
        }
      ],
      "start": 211,
      "end": 379
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 389,
                "end": 390
              },
              "init": {
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
                      "start": 399,
                      "end": 402
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 410,
                              "end": 416
                            },
                            "start": 408,
                            "end": 416
                          },
                          "start": 405,
                          "end": 416
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 421,
                        "end": 429
                      },
                      "id": null,
                      "generator": false,
                      "start": 404,
                      "end": 429
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 399,
                    "end": 429
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
                      "start": 435,
                      "end": 438
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 446,
                              "end": 452
                            },
                            "start": 444,
                            "end": 452
                          },
                          "start": 441,
                          "end": 452
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 461,
                              "end": 467
                            },
                            "start": 459,
                            "end": 467
                          },
                          "start": 454,
                          "end": 467
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 472,
                        "end": 480
                      },
                      "id": null,
                      "generator": false,
                      "start": 440,
                      "end": 480
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 435,
                    "end": 480
                  }
                ],
                "start": 393,
                "end": 484
              },
              "definite": false,
              "start": 389,
              "end": 484
            }
          ],
          "declare": false,
          "start": 385,
          "end": 485
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 488,
              "end": 489
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 490,
              "end": 497
            },
            "optional": false,
            "computed": true,
            "start": 488,
            "end": 498
          },
          "directive": null,
          "start": 488,
          "end": 499
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 502,
                "end": 503
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 504,
                "end": 511
              },
              "optional": false,
              "computed": true,
              "start": 502,
              "end": 512
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 515,
              "end": 525
            },
            "start": 502,
            "end": 525
          },
          "directive": null,
          "start": 502,
          "end": 526
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 529,
                "end": 530
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 531,
                "end": 538
              },
              "optional": false,
              "computed": true,
              "start": 529,
              "end": 539
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 543,
              "end": 544
            },
            "start": 529,
            "end": 544
          },
          "directive": null,
          "start": 529,
          "end": 545
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 548,
                "end": 549
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 550,
                "end": 557
              },
              "optional": false,
              "computed": true,
              "start": 548,
              "end": 558
            },
            "start": 548,
            "end": 561
          },
          "directive": null,
          "start": 548,
          "end": 562
        }
      ],
      "start": 381,
      "end": 564
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 574,
                "end": 575
              },
              "init": {
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
                      "start": 584,
                      "end": 587
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "\"hello\"",
                                    "start": 595,
                                    "end": 602
                                  },
                                  "start": 595,
                                  "end": 602
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "world",
                                    "raw": "\"world\"",
                                    "start": 605,
                                    "end": 612
                                  },
                                  "start": 605,
                                  "end": 612
                                }
                              ],
                              "start": 595,
                              "end": 612
                            },
                            "start": 593,
                            "end": 612
                          },
                          "start": 590,
                          "end": 612
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 617,
                        "end": 625
                      },
                      "id": null,
                      "generator": false,
                      "start": 589,
                      "end": 625
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 584,
                    "end": 625
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
                      "start": 631,
                      "end": 634
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "hello",
                                    "raw": "\"hello\"",
                                    "start": 642,
                                    "end": 649
                                  },
                                  "start": 642,
                                  "end": 649
                                },
                                {
                                  "type": "TSLiteralType",
                                  "literal": {
                                    "type": "Literal",
                                    "value": "world",
                                    "raw": "\"world\"",
                                    "start": 652,
                                    "end": 659
                                  },
                                  "start": 652,
                                  "end": 659
                                }
                              ],
                              "start": 642,
                              "end": 659
                            },
                            "start": 640,
                            "end": 659
                          },
                          "start": 637,
                          "end": 659
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 668,
                              "end": 674
                            },
                            "start": 666,
                            "end": 674
                          },
                          "start": 661,
                          "end": 674
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "foobar",
                        "raw": "'foobar'",
                        "start": 679,
                        "end": 687
                      },
                      "id": null,
                      "generator": false,
                      "start": 636,
                      "end": 687
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 631,
                    "end": 687
                  }
                ],
                "start": 578,
                "end": 691
              },
              "definite": false,
              "start": 574,
              "end": 691
            }
          ],
          "declare": false,
          "start": 570,
          "end": 692
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 695,
              "end": 696
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 697,
              "end": 704
            },
            "optional": false,
            "computed": true,
            "start": 695,
            "end": 705
          },
          "directive": null,
          "start": 695,
          "end": 706
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
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 710
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 711,
                "end": 718
              },
              "optional": false,
              "computed": true,
              "start": 709,
              "end": 719
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 722,
              "end": 732
            },
            "start": 709,
            "end": 732
          },
          "directive": null,
          "start": 709,
          "end": 733
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 737
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 738,
                "end": 745
              },
              "optional": false,
              "computed": true,
              "start": 736,
              "end": 746
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 750,
              "end": 751
            },
            "start": 736,
            "end": 751
          },
          "directive": null,
          "start": 736,
          "end": 752
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 756
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 757,
                "end": 764
              },
              "optional": false,
              "computed": true,
              "start": 755,
              "end": 765
            },
            "start": 755,
            "end": 768
          },
          "directive": null,
          "start": 755,
          "end": 769
        }
      ],
      "start": 566,
      "end": 771
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
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
                    "start": 780,
                    "end": 783
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 791,
                            "end": 797
                          },
                          "start": 789,
                          "end": 797
                        },
                        "start": 786,
                        "end": 797
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "Literal",
                      "value": "hello",
                      "raw": "'hello'",
                      "start": 802,
                      "end": 809
                    },
                    "id": null,
                    "generator": false,
                    "start": 785,
                    "end": 809
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 780,
                  "end": 809
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
                    "start": 811,
                    "end": 814
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 822,
                            "end": 828
                          },
                          "start": 820,
                          "end": 828
                        },
                        "start": 817,
                        "end": 828
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 837,
                            "end": 843
                          },
                          "start": 835,
                          "end": 843
                        },
                        "start": 830,
                        "end": 843
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 848,
                      "end": 850
                    },
                    "id": null,
                    "generator": false,
                    "start": 816,
                    "end": 850
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 811,
                  "end": 850
                }
              ],
              "start": 778,
              "end": 852
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 854,
              "end": 861
            },
            "optional": false,
            "computed": true,
            "start": 777,
            "end": 862
          },
          "directive": null,
          "start": 777,
          "end": 863
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
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
                      "start": 869,
                      "end": 872
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 880,
                              "end": 886
                            },
                            "start": 878,
                            "end": 886
                          },
                          "start": 875,
                          "end": 886
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 891,
                        "end": 898
                      },
                      "id": null,
                      "generator": false,
                      "start": 874,
                      "end": 898
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 869,
                    "end": 898
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
                      "start": 900,
                      "end": 903
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 911,
                              "end": 917
                            },
                            "start": 909,
                            "end": 917
                          },
                          "start": 906,
                          "end": 917
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 926,
                              "end": 932
                            },
                            "start": 924,
                            "end": 932
                          },
                          "start": 919,
                          "end": 932
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 937,
                        "end": 939
                      },
                      "id": null,
                      "generator": false,
                      "start": 905,
                      "end": 939
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 900,
                    "end": 939
                  }
                ],
                "start": 867,
                "end": 941
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 943,
                "end": 950
              },
              "optional": false,
              "computed": true,
              "start": 866,
              "end": 951
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 954,
              "end": 964
            },
            "start": 866,
            "end": 964
          },
          "directive": null,
          "start": 866,
          "end": 965
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
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
                      "start": 971,
                      "end": 974
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 982,
                              "end": 988
                            },
                            "start": 980,
                            "end": 988
                          },
                          "start": 977,
                          "end": 988
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 993,
                        "end": 1000
                      },
                      "id": null,
                      "generator": false,
                      "start": 976,
                      "end": 1000
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 971,
                    "end": 1000
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
                      "start": 1002,
                      "end": 1005
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1013,
                              "end": 1019
                            },
                            "start": 1011,
                            "end": 1019
                          },
                          "start": 1008,
                          "end": 1019
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1028,
                              "end": 1034
                            },
                            "start": 1026,
                            "end": 1034
                          },
                          "start": 1021,
                          "end": 1034
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1039,
                        "end": 1041
                      },
                      "id": null,
                      "generator": false,
                      "start": 1007,
                      "end": 1041
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1002,
                    "end": 1041
                  }
                ],
                "start": 969,
                "end": 1043
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1045,
                "end": 1052
              },
              "optional": false,
              "computed": true,
              "start": 968,
              "end": 1053
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1057,
              "end": 1058
            },
            "start": 968,
            "end": 1058
          },
          "directive": null,
          "start": 968,
          "end": 1059
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
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
                      "start": 1065,
                      "end": 1068
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1076,
                              "end": 1082
                            },
                            "start": 1074,
                            "end": 1082
                          },
                          "start": 1071,
                          "end": 1082
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "hello",
                        "raw": "'hello'",
                        "start": 1087,
                        "end": 1094
                      },
                      "id": null,
                      "generator": false,
                      "start": 1070,
                      "end": 1094
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1065,
                    "end": 1094
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
                      "start": 1096,
                      "end": 1099
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1107,
                              "end": 1113
                            },
                            "start": 1105,
                            "end": 1113
                          },
                          "start": 1102,
                          "end": 1113
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1122,
                              "end": 1128
                            },
                            "start": 1120,
                            "end": 1128
                          },
                          "start": 1115,
                          "end": 1128
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1133,
                        "end": 1135
                      },
                      "id": null,
                      "generator": false,
                      "start": 1101,
                      "end": 1135
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1096,
                    "end": 1135
                  }
                ],
                "start": 1063,
                "end": 1137
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1139,
                "end": 1146
              },
              "optional": false,
              "computed": true,
              "start": 1062,
              "end": 1147
            },
            "start": 1062,
            "end": 1150
          },
          "directive": null,
          "start": 1062,
          "end": 1151
        }
      ],
      "start": 773,
      "end": 1153
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1165
                    },
                    "value": {
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
                            "start": 1169,
                            "end": 1172
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": true,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1180,
                                    "end": 1186
                                  },
                                  "start": 1178,
                                  "end": 1186
                                },
                                "start": 1175,
                                "end": 1186
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "Literal",
                              "value": "hello",
                              "raw": "'hello'",
                              "start": 1191,
                              "end": 1198
                            },
                            "id": null,
                            "generator": false,
                            "start": 1174,
                            "end": 1198
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1169,
                          "end": 1198
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
                            "start": 1200,
                            "end": 1203
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "expression": false,
                            "async": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1211,
                                    "end": 1217
                                  },
                                  "start": 1209,
                                  "end": 1217
                                },
                                "start": 1206,
                                "end": 1217
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 1226,
                                    "end": 1232
                                  },
                                  "start": 1224,
                                  "end": 1232
                                },
                                "start": 1219,
                                "end": 1232
                              }
                            ],
                            "returnType": null,
                            "body": {
                              "type": "BlockStatement",
                              "body": [],
                              "start": 1237,
                              "end": 1239
                            },
                            "id": null,
                            "generator": false,
                            "start": 1205,
                            "end": 1239
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1200,
                          "end": 1239
                        }
                      ],
                      "start": 1167,
                      "end": 1241
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1162,
                    "end": 1241
                  }
                ],
                "start": 1160,
                "end": 1243
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 1245,
                "end": 1248
              },
              "optional": false,
              "computed": false,
              "start": 1159,
              "end": 1248
            },
            "property": {
              "type": "Literal",
              "value": "hello",
              "raw": "'hello'",
              "start": 1249,
              "end": 1256
            },
            "optional": false,
            "computed": true,
            "start": 1159,
            "end": 1257
          },
          "directive": null,
          "start": 1159,
          "end": 1258
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
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1264,
                        "end": 1267
                      },
                      "value": {
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
                              "start": 1271,
                              "end": 1274
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1282,
                                      "end": 1288
                                    },
                                    "start": 1280,
                                    "end": 1288
                                  },
                                  "start": 1277,
                                  "end": 1288
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1293,
                                "end": 1300
                              },
                              "id": null,
                              "generator": false,
                              "start": 1276,
                              "end": 1300
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1271,
                            "end": 1300
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
                              "start": 1302,
                              "end": 1305
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1313,
                                      "end": 1319
                                    },
                                    "start": 1311,
                                    "end": 1319
                                  },
                                  "start": 1308,
                                  "end": 1319
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1328,
                                      "end": 1334
                                    },
                                    "start": 1326,
                                    "end": 1334
                                  },
                                  "start": 1321,
                                  "end": 1334
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1339,
                                "end": 1341
                              },
                              "id": null,
                              "generator": false,
                              "start": 1307,
                              "end": 1341
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1302,
                            "end": 1341
                          }
                        ],
                        "start": 1269,
                        "end": 1343
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1264,
                      "end": 1343
                    }
                  ],
                  "start": 1262,
                  "end": 1345
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1347,
                  "end": 1350
                },
                "optional": false,
                "computed": false,
                "start": 1261,
                "end": 1350
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1351,
                "end": 1358
              },
              "optional": false,
              "computed": true,
              "start": 1261,
              "end": 1359
            },
            "right": {
              "type": "Literal",
              "value": "modified",
              "raw": "'modified'",
              "start": 1362,
              "end": 1372
            },
            "start": 1261,
            "end": 1372
          },
          "directive": null,
          "start": 1261,
          "end": 1373
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "AssignmentExpression",
            "operator": "+=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1379,
                        "end": 1382
                      },
                      "value": {
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
                              "start": 1386,
                              "end": 1389
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1397,
                                      "end": 1403
                                    },
                                    "start": 1395,
                                    "end": 1403
                                  },
                                  "start": 1392,
                                  "end": 1403
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1408,
                                "end": 1415
                              },
                              "id": null,
                              "generator": false,
                              "start": 1391,
                              "end": 1415
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1386,
                            "end": 1415
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
                              "start": 1417,
                              "end": 1420
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1428,
                                      "end": 1434
                                    },
                                    "start": 1426,
                                    "end": 1434
                                  },
                                  "start": 1423,
                                  "end": 1434
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1443,
                                      "end": 1449
                                    },
                                    "start": 1441,
                                    "end": 1449
                                  },
                                  "start": 1436,
                                  "end": 1449
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1454,
                                "end": 1456
                              },
                              "id": null,
                              "generator": false,
                              "start": 1422,
                              "end": 1456
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1417,
                            "end": 1456
                          }
                        ],
                        "start": 1384,
                        "end": 1458
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1379,
                      "end": 1458
                    }
                  ],
                  "start": 1377,
                  "end": 1460
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1462,
                  "end": 1465
                },
                "optional": false,
                "computed": false,
                "start": 1376,
                "end": 1465
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1466,
                "end": 1473
              },
              "optional": false,
              "computed": true,
              "start": 1376,
              "end": 1474
            },
            "right": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1478,
              "end": 1479
            },
            "start": 1376,
            "end": 1479
          },
          "directive": null,
          "start": 1376,
          "end": 1480
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "UpdateExpression",
            "operator": "++",
            "prefix": false,
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1486,
                        "end": 1489
                      },
                      "value": {
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
                              "start": 1493,
                              "end": 1496
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": true,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1504,
                                      "end": 1510
                                    },
                                    "start": 1502,
                                    "end": 1510
                                  },
                                  "start": 1499,
                                  "end": 1510
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "Literal",
                                "value": "hello",
                                "raw": "'hello'",
                                "start": 1515,
                                "end": 1522
                              },
                              "id": null,
                              "generator": false,
                              "start": 1498,
                              "end": 1522
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1493,
                            "end": 1522
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
                              "start": 1524,
                              "end": 1527
                            },
                            "value": {
                              "type": "ArrowFunctionExpression",
                              "expression": false,
                              "async": false,
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1535,
                                      "end": 1541
                                    },
                                    "start": 1533,
                                    "end": 1541
                                  },
                                  "start": 1530,
                                  "end": 1541
                                },
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 1550,
                                      "end": 1556
                                    },
                                    "start": 1548,
                                    "end": 1556
                                  },
                                  "start": 1543,
                                  "end": 1556
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 1561,
                                "end": 1563
                              },
                              "id": null,
                              "generator": false,
                              "start": 1529,
                              "end": 1563
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 1524,
                            "end": 1563
                          }
                        ],
                        "start": 1491,
                        "end": 1565
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 1486,
                      "end": 1565
                    }
                  ],
                  "start": 1484,
                  "end": 1567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1569,
                  "end": 1572
                },
                "optional": false,
                "computed": false,
                "start": 1483,
                "end": 1572
              },
              "property": {
                "type": "Literal",
                "value": "hello",
                "raw": "'hello'",
                "start": 1573,
                "end": 1580
              },
              "optional": false,
              "computed": true,
              "start": 1483,
              "end": 1581
            },
            "start": 1483,
            "end": 1584
          },
          "directive": null,
          "start": 1483,
          "end": 1585
        }
      ],
      "start": 1155,
      "end": 1587
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 1595,
            "end": 1596
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1601,
                  "end": 1602
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 1604,
                  "end": 1605
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1601,
                "end": 1605
              }
            ],
            "start": 1599,
            "end": 1607
          },
          "definite": false,
          "start": 1595,
          "end": 1607
        }
      ],
      "declare": false,
      "start": 1589,
      "end": 1608
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
            "name": "k",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 1627,
                      "end": 1630
                    },
                    "start": 1627,
                    "end": 1630
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 1633,
                      "end": 1636
                    },
                    "start": 1633,
                    "end": 1636
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "c",
                      "raw": "\"c\"",
                      "start": 1639,
                      "end": 1642
                    },
                    "start": 1639,
                    "end": 1642
                  }
                ],
                "start": 1627,
                "end": 1642
              },
              "start": 1625,
              "end": 1642
            },
            "start": 1624,
            "end": 1642
          },
          "init": null,
          "definite": false,
          "start": 1624,
          "end": 1642
        }
      ],
      "declare": true,
      "start": 1610,
      "end": 1643
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1644,
          "end": 1645
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k",
          "optional": false,
          "typeAnnotation": null,
          "start": 1646,
          "end": 1647
        },
        "optional": false,
        "computed": true,
        "start": 1644,
        "end": 1648
      },
      "directive": null,
      "start": 1644,
      "end": 1649
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
            "name": "k2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "c",
                  "raw": "\"c\"",
                  "start": 1670,
                  "end": 1673
                },
                "start": 1670,
                "end": 1673
              },
              "start": 1668,
              "end": 1673
            },
            "start": 1666,
            "end": 1673
          },
          "init": null,
          "definite": false,
          "start": 1666,
          "end": 1673
        }
      ],
      "declare": true,
      "start": 1652,
      "end": 1674
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1675,
          "end": 1676
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "k2",
          "optional": false,
          "typeAnnotation": null,
          "start": 1677,
          "end": 1679
        },
        "optional": false,
        "computed": true,
        "start": 1675,
        "end": 1680
      },
      "directive": null,
      "start": 1675,
      "end": 1681
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 1710,
                  "end": 1716
                },
                "start": 1703,
                "end": 1716
              },
              "start": 1701,
              "end": 1716
            },
            "start": 1697,
            "end": 1716
          },
          "init": null,
          "definite": false,
          "start": 1697,
          "end": 1716
        }
      ],
      "declare": true,
      "start": 1683,
      "end": 1717
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1718,
          "end": 1719
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "sym",
          "optional": false,
          "typeAnnotation": null,
          "start": 1720,
          "end": 1723
        },
        "optional": false,
        "computed": true,
        "start": 1718,
        "end": 1724
      },
      "directive": null,
      "start": 1718,
      "end": 1725
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1732,
        "end": 1739
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1742,
              "end": 1743
            },
            "initializer": null,
            "computed": false,
            "start": 1742,
            "end": 1743
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1745,
              "end": 1746
            },
            "initializer": null,
            "computed": false,
            "start": 1745,
            "end": 1746
          }
        ],
        "start": 1740,
        "end": 1748
      },
      "const": false,
      "declare": false,
      "start": 1727,
      "end": 1748
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
            "name": "numEnumKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NumEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1765,
                  "end": 1772
                },
                "typeArguments": null,
                "start": 1765,
                "end": 1772
              },
              "start": 1763,
              "end": 1772
            },
            "start": 1753,
            "end": 1772
          },
          "init": null,
          "definite": false,
          "start": 1753,
          "end": 1772
        }
      ],
      "declare": false,
      "start": 1749,
      "end": 1773
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1774,
          "end": 1775
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "numEnumKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 1776,
          "end": 1786
        },
        "optional": false,
        "computed": true,
        "start": 1774,
        "end": 1787
      },
      "directive": null,
      "start": 1774,
      "end": 1788
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 1796,
        "end": 1803
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1806,
              "end": 1807
            },
            "initializer": {
              "type": "Literal",
              "value": "a",
              "raw": "\"a\"",
              "start": 1810,
              "end": 1813
            },
            "computed": false,
            "start": 1806,
            "end": 1813
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 1815,
              "end": 1816
            },
            "initializer": {
              "type": "Literal",
              "value": "b",
              "raw": "\"b\"",
              "start": 1819,
              "end": 1822
            },
            "computed": false,
            "start": 1815,
            "end": 1822
          }
        ],
        "start": 1804,
        "end": 1824
      },
      "const": false,
      "declare": false,
      "start": 1791,
      "end": 1824
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
            "name": "strEnumKey",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StrEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1841,
                  "end": 1848
                },
                "typeArguments": null,
                "start": 1841,
                "end": 1848
              },
              "start": 1839,
              "end": 1848
            },
            "start": 1829,
            "end": 1848
          },
          "init": null,
          "definite": false,
          "start": 1829,
          "end": 1848
        }
      ],
      "declare": false,
      "start": 1825,
      "end": 1849
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "o",
          "optional": false,
          "typeAnnotation": null,
          "start": 1850,
          "end": 1851
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "strEnumKey",
          "optional": false,
          "typeAnnotation": null,
          "start": 1852,
          "end": 1862
        },
        "optional": false,
        "computed": true,
        "start": 1850,
        "end": 1863
      },
      "directive": null,
      "start": 1850,
      "end": 1864
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "MyMap",
        "optional": false,
        "typeAnnotation": null,
        "start": 1877,
        "end": 1882
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 1883,
              "end": 1884
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1883,
            "end": 1884
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1886,
              "end": 1887
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1886,
            "end": 1887
          }
        ],
        "start": 1882,
        "end": 1888
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1893,
              "end": 1896
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1902,
                      "end": 1903
                    },
                    "typeArguments": null,
                    "start": 1902,
                    "end": 1903
                  },
                  "start": 1900,
                  "end": 1903
                },
                "start": 1897,
                "end": 1903
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1906,
                  "end": 1907
                },
                "typeArguments": null,
                "start": 1906,
                "end": 1907
              },
              "start": 1904,
              "end": 1907
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1893,
            "end": 1908
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "set",
              "optional": false,
              "typeAnnotation": null,
              "start": 1911,
              "end": 1914
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1920,
                      "end": 1921
                    },
                    "typeArguments": null,
                    "start": 1920,
                    "end": 1921
                  },
                  "start": 1918,
                  "end": 1921
                },
                "start": 1915,
                "end": 1921
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1930,
                      "end": 1931
                    },
                    "typeArguments": null,
                    "start": 1930,
                    "end": 1931
                  },
                  "start": 1928,
                  "end": 1931
                },
                "start": 1923,
                "end": 1931
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1934,
                "end": 1938
              },
              "start": 1932,
              "end": 1938
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1911,
            "end": 1939
          }
        ],
        "start": 1889,
        "end": 1941
      },
      "declare": false,
      "start": 1867,
      "end": 1941
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 1953,
        "end": 1956
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bark",
              "optional": false,
              "typeAnnotation": null,
              "start": 1959,
              "end": 1963
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1967,
                "end": 1971
              },
              "start": 1965,
              "end": 1971
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1959,
            "end": 1972
          }
        ],
        "start": 1957,
        "end": 1974
      },
      "declare": false,
      "start": 1943,
      "end": 1974
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
            "name": "rover",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Dog",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1986,
                  "end": 1989
                },
                "typeArguments": null,
                "start": 1986,
                "end": 1989
              },
              "start": 1984,
              "end": 1989
            },
            "start": 1979,
            "end": 1989
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bark",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1994,
                  "end": 1998
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
                    "body": [],
                    "start": 2001,
                    "end": 2003
                  },
                  "expression": false,
                  "start": 1998,
                  "end": 2003
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1994,
                "end": 2003
              }
            ],
            "start": 1992,
            "end": 2005
          },
          "definite": false,
          "start": 1979,
          "end": 2005
        }
      ],
      "declare": false,
      "start": 1975,
      "end": 2006
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2025,
                  "end": 2030
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Dog",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2031,
                        "end": 2034
                      },
                      "typeArguments": null,
                      "start": 2031,
                      "end": 2034
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2036,
                      "end": 2042
                    }
                  ],
                  "start": 2030,
                  "end": 2043
                },
                "start": 2025,
                "end": 2043
              },
              "start": 2023,
              "end": 2043
            },
            "start": 2020,
            "end": 2043
          },
          "init": null,
          "definite": false,
          "start": 2020,
          "end": 2043
        }
      ],
      "declare": true,
      "start": 2008,
      "end": 2044
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
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 2045,
            "end": 2048
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "rover",
            "optional": false,
            "typeAnnotation": null,
            "start": 2049,
            "end": 2054
          },
          "optional": false,
          "computed": true,
          "start": 2045,
          "end": 2055
        },
        "right": {
          "type": "Literal",
          "value": "Rover",
          "raw": "\"Rover\"",
          "start": 2058,
          "end": 2065
        },
        "start": 2045,
        "end": 2065
      },
      "directive": null,
      "start": 2045,
      "end": 2066
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 2078,
        "end": 2079
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 2084,
              "end": 2088
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "MyMap",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2090,
                  "end": 2095
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 2096,
                      "end": 2102
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 2104,
                      "end": 2110
                    }
                  ],
                  "start": 2095,
                  "end": 2111
                },
                "start": 2090,
                "end": 2111
              },
              "start": 2088,
              "end": 2111
            },
            "accessibility": null,
            "static": false,
            "start": 2084,
            "end": 2111
          }
        ],
        "start": 2080,
        "end": 2113
      },
      "declare": false,
      "start": 2068,
      "end": 2113
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2131,
                  "end": 2132
                },
                "typeArguments": null,
                "start": 2131,
                "end": 2132
              },
              "start": 2129,
              "end": 2132
            },
            "start": 2128,
            "end": 2132
          },
          "init": null,
          "definite": false,
          "start": 2128,
          "end": 2132
        }
      ],
      "declare": true,
      "start": 2114,
      "end": 2133
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 2134,
            "end": 2135
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null,
            "start": 2136,
            "end": 2140
          },
          "optional": false,
          "computed": false,
          "start": 2134,
          "end": 2140
        },
        "property": {
          "type": "Literal",
          "value": "a",
          "raw": "'a'",
          "start": 2141,
          "end": 2144
        },
        "optional": false,
        "computed": true,
        "start": 2134,
        "end": 2145
      },
      "directive": null,
      "start": 2134,
      "end": 2146
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4,
    "end": 5,
    "range": [
      4,
      5
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7,
    "range": [
      6,
      7
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9,
    "range": [
      8,
      9
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9,
    "end": 10,
    "range": [
      9,
      10
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 10,
    "end": 11,
    "range": [
      10,
      11
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 11,
    "end": 18,
    "range": [
      11,
      18
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 21,
    "end": 24,
    "range": [
      21,
      24
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 28,
    "end": 34,
    "range": [
      28,
      34
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38,
    "range": [
      37,
      38
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 39,
    "end": 41,
    "range": [
      39,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 41,
    "end": 42,
    "range": [
      41,
      42
    ]
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 43,
    "end": 48,
    "range": [
      43,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "String",
    "value": "''",
    "start": 51,
    "end": 53,
    "range": [
      51,
      53
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 57,
    "end": 60,
    "range": [
      57,
      60
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 69,
    "end": 72,
    "range": [
      69,
      72
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 75,
    "end": 78,
    "range": [
      75,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 80,
    "end": 86,
    "range": [
      80,
      86
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 91,
    "end": 99,
    "range": [
      91,
      99
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 104,
    "end": 105,
    "range": [
      104,
      105
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 105,
    "end": 112,
    "range": [
      105,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 115,
    "end": 120,
    "range": [
      115,
      120
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 121,
    "end": 124,
    "range": [
      121,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Identifier",
    "value": "c",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 129,
    "end": 136,
    "range": [
      129,
      136
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 136,
    "end": 137,
    "range": [
      136,
      137
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138,
    "range": [
      137,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 140,
    "end": 143,
    "range": [
      140,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 144,
    "end": 145,
    "range": [
      144,
      145
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 146,
    "end": 147,
    "range": [
      146,
      147
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 152,
    "end": 155,
    "range": [
      152,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 158,
    "end": 161,
    "range": [
      158,
      161
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162,
    "range": [
      161,
      162
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173,
    "range": [
      171,
      173
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 174,
    "end": 182,
    "range": [
      174,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 186,
    "end": 191,
    "range": [
      186,
      191
    ]
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 192,
    "end": 195,
    "range": [
      192,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 198,
    "end": 199,
    "range": [
      198,
      199
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 199,
    "end": 200,
    "range": [
      199,
      200
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 200,
    "end": 207,
    "range": [
      200,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 208,
    "end": 209,
    "range": [
      208,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 215,
    "end": 218,
    "range": [
      215,
      218
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 219,
    "end": 220,
    "range": [
      219,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224,
    "range": [
      223,
      224
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 229,
    "end": 232,
    "range": [
      229,
      232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 235,
    "end": 238,
    "range": [
      235,
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
    "type": "Identifier",
    "value": "string",
    "start": 240,
    "end": 246,
    "range": [
      240,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 251,
    "end": 259,
    "range": [
      251,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 265,
    "end": 268,
    "range": [
      265,
      268
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 268,
    "end": 269,
    "range": [
      268,
      269
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 271,
    "end": 274,
    "range": [
      271,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 276,
    "end": 282,
    "range": [
      276,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 284,
    "end": 286,
    "range": [
      284,
      286
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 287,
    "end": 295,
    "range": [
      287,
      295
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 299,
    "end": 300,
    "range": [
      299,
      300
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 303,
    "end": 304,
    "range": [
      303,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 305,
    "end": 312,
    "range": [
      305,
      312
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 318,
    "end": 319,
    "range": [
      318,
      319
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 319,
    "end": 326,
    "range": [
      319,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 326,
    "end": 327,
    "range": [
      326,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 330,
    "end": 340,
    "range": [
      330,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 345,
    "end": 346,
    "range": [
      345,
      346
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 346,
    "end": 353,
    "range": [
      346,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 353,
    "end": 354,
    "range": [
      353,
      354
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 355,
    "end": 357,
    "range": [
      355,
      357
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 359,
    "end": 360,
    "range": [
      359,
      360
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 364,
    "end": 365,
    "range": [
      364,
      365
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 365,
    "end": 372,
    "range": [
      365,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 372,
    "end": 373,
    "range": [
      372,
      373
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 374,
    "end": 376,
    "range": [
      374,
      376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 376,
    "end": 377,
    "range": [
      376,
      377
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 378,
    "end": 379,
    "range": [
      378,
      379
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 385,
    "end": 388,
    "range": [
      385,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 389,
    "end": 390,
    "range": [
      389,
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
    "type": "Punctuator",
    "value": "{",
    "start": 393,
    "end": 394,
    "range": [
      393,
      394
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 399,
    "end": 402,
    "range": [
      399,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 404,
    "end": 405,
    "range": [
      404,
      405
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 405,
    "end": 408,
    "range": [
      405,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 410,
    "end": 416,
    "range": [
      410,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 418,
    "end": 420,
    "range": [
      418,
      420
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 421,
    "end": 429,
    "range": [
      421,
      429
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 435,
    "end": 438,
    "range": [
      435,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 441,
    "end": 444,
    "range": [
      441,
      444
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445,
    "range": [
      444,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 446,
    "end": 452,
    "range": [
      446,
      452
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 452,
    "end": 453,
    "range": [
      452,
      453
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 454,
    "end": 459,
    "range": [
      454,
      459
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 461,
    "end": 467,
    "range": [
      461,
      467
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 469,
    "end": 471,
    "range": [
      469,
      471
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 472,
    "end": 480,
    "range": [
      472,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 490,
    "end": 497,
    "range": [
      490,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 502,
    "end": 503,
    "range": [
      502,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 504,
    "end": 511,
    "range": [
      504,
      511
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 511,
    "end": 512,
    "range": [
      511,
      512
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514,
    "range": [
      513,
      514
    ]
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 515,
    "end": 525,
    "range": [
      515,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 530,
    "end": 531,
    "range": [
      530,
      531
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 531,
    "end": 538,
    "range": [
      531,
      538
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 538,
    "end": 539,
    "range": [
      538,
      539
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 540,
    "end": 542,
    "range": [
      540,
      542
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 543,
    "end": 544,
    "range": [
      543,
      544
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 544,
    "end": 545,
    "range": [
      544,
      545
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 550,
    "end": 557,
    "range": [
      550,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 559,
    "end": 561,
    "range": [
      559,
      561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562,
    "range": [
      561,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 566,
    "end": 567,
    "range": [
      566,
      567
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 570,
    "end": 573,
    "range": [
      570,
      573
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 576,
    "end": 577,
    "range": [
      576,
      577
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 578,
    "end": 579,
    "range": [
      578,
      579
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 584,
    "end": 587,
    "range": [
      584,
      587
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 587,
    "end": 588,
    "range": [
      587,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 590,
    "end": 593,
    "range": [
      590,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 595,
    "end": 602,
    "range": [
      595,
      602
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 603,
    "end": 604,
    "range": [
      603,
      604
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 605,
    "end": 612,
    "range": [
      605,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 612,
    "end": 613,
    "range": [
      612,
      613
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 614,
    "end": 616,
    "range": [
      614,
      616
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 617,
    "end": 625,
    "range": [
      617,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 631,
    "end": 634,
    "range": [
      631,
      634
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635,
    "range": [
      634,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 637,
    "end": 640,
    "range": [
      637,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "String",
    "value": "\"hello\"",
    "start": 642,
    "end": 649,
    "range": [
      642,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 650,
    "end": 651,
    "range": [
      650,
      651
    ]
  },
  {
    "type": "String",
    "value": "\"world\"",
    "start": 652,
    "end": 659,
    "range": [
      652,
      659
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 659,
    "end": 660,
    "range": [
      659,
      660
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 661,
    "end": 666,
    "range": [
      661,
      666
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 666,
    "end": 667,
    "range": [
      666,
      667
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 668,
    "end": 674,
    "range": [
      668,
      674
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 674,
    "end": 675,
    "range": [
      674,
      675
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 676,
    "end": 678,
    "range": [
      676,
      678
    ]
  },
  {
    "type": "String",
    "value": "'foobar'",
    "start": 679,
    "end": 687,
    "range": [
      679,
      687
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 691,
    "end": 692,
    "range": [
      691,
      692
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 695,
    "end": 696,
    "range": [
      695,
      696
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 697,
    "end": 704,
    "range": [
      697,
      704
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 704,
    "end": 705,
    "range": [
      704,
      705
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 705,
    "end": 706,
    "range": [
      705,
      706
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 709,
    "end": 710,
    "range": [
      709,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 711,
    "end": 718,
    "range": [
      711,
      718
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 720,
    "end": 721,
    "range": [
      720,
      721
    ]
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 722,
    "end": 732,
    "range": [
      722,
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
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 737,
    "end": 738,
    "range": [
      737,
      738
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 738,
    "end": 745,
    "range": [
      738,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 747,
    "end": 749,
    "range": [
      747,
      749
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 750,
    "end": 751,
    "range": [
      750,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 756,
    "end": 757,
    "range": [
      756,
      757
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 757,
    "end": 764,
    "range": [
      757,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 764,
    "end": 765,
    "range": [
      764,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 766,
    "end": 768,
    "range": [
      766,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 770,
    "end": 771,
    "range": [
      770,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 773,
    "end": 774,
    "range": [
      773,
      774
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 777,
    "end": 778,
    "range": [
      777,
      778
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 780,
    "end": 783,
    "range": [
      780,
      783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 785,
    "end": 786,
    "range": [
      785,
      786
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 786,
    "end": 789,
    "range": [
      786,
      789
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 789,
    "end": 790,
    "range": [
      789,
      790
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 791,
    "end": 797,
    "range": [
      791,
      797
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 797,
    "end": 798,
    "range": [
      797,
      798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 799,
    "end": 801,
    "range": [
      799,
      801
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 802,
    "end": 809,
    "range": [
      802,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 811,
    "end": 814,
    "range": [
      811,
      814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 814,
    "end": 815,
    "range": [
      814,
      815
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 816,
    "end": 817,
    "range": [
      816,
      817
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 817,
    "end": 820,
    "range": [
      817,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 822,
    "end": 828,
    "range": [
      822,
      828
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 830,
    "end": 835,
    "range": [
      830,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 837,
    "end": 843,
    "range": [
      837,
      843
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 843,
    "end": 844,
    "range": [
      843,
      844
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 845,
    "end": 847,
    "range": [
      845,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 848,
    "end": 849,
    "range": [
      848,
      849
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 849,
    "end": 850,
    "range": [
      849,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 853,
    "end": 854,
    "range": [
      853,
      854
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 854,
    "end": 861,
    "range": [
      854,
      861
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 861,
    "end": 862,
    "range": [
      861,
      862
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 862,
    "end": 863,
    "range": [
      862,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 866,
    "end": 867,
    "range": [
      866,
      867
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 869,
    "end": 872,
    "range": [
      869,
      872
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 872,
    "end": 873,
    "range": [
      872,
      873
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 874,
    "end": 875,
    "range": [
      874,
      875
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 875,
    "end": 878,
    "range": [
      875,
      878
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879,
    "range": [
      878,
      879
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 880,
    "end": 886,
    "range": [
      880,
      886
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 886,
    "end": 887,
    "range": [
      886,
      887
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 888,
    "end": 890,
    "range": [
      888,
      890
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 891,
    "end": 898,
    "range": [
      891,
      898
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 898,
    "end": 899,
    "range": [
      898,
      899
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 900,
    "end": 903,
    "range": [
      900,
      903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 903,
    "end": 904,
    "range": [
      903,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 905,
    "end": 906,
    "range": [
      905,
      906
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 906,
    "end": 909,
    "range": [
      906,
      909
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 909,
    "end": 910,
    "range": [
      909,
      910
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 911,
    "end": 917,
    "range": [
      911,
      917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 917,
    "end": 918,
    "range": [
      917,
      918
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 919,
    "end": 924,
    "range": [
      919,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 926,
    "end": 932,
    "range": [
      926,
      932
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 932,
    "end": 933,
    "range": [
      932,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 934,
    "end": 936,
    "range": [
      934,
      936
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 937,
    "end": 938,
    "range": [
      937,
      938
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 938,
    "end": 939,
    "range": [
      938,
      939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 940,
    "end": 941,
    "range": [
      940,
      941
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 941,
    "end": 942,
    "range": [
      941,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 943,
    "end": 950,
    "range": [
      943,
      950
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 950,
    "end": 951,
    "range": [
      950,
      951
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953,
    "range": [
      952,
      953
    ]
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 954,
    "end": 964,
    "range": [
      954,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 968,
    "end": 969,
    "range": [
      968,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 971,
    "end": 974,
    "range": [
      971,
      974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 974,
    "end": 975,
    "range": [
      974,
      975
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 976,
    "end": 977,
    "range": [
      976,
      977
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 977,
    "end": 980,
    "range": [
      977,
      980
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 980,
    "end": 981,
    "range": [
      980,
      981
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 982,
    "end": 988,
    "range": [
      982,
      988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 990,
    "end": 992,
    "range": [
      990,
      992
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 993,
    "end": 1000,
    "range": [
      993,
      1000
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1000,
    "end": 1001,
    "range": [
      1000,
      1001
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1002,
    "end": 1005,
    "range": [
      1002,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1007,
    "end": 1008,
    "range": [
      1007,
      1008
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1008,
    "end": 1011,
    "range": [
      1008,
      1011
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1011,
    "end": 1012,
    "range": [
      1011,
      1012
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1013,
    "end": 1019,
    "range": [
      1013,
      1019
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1019,
    "end": 1020,
    "range": [
      1019,
      1020
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1021,
    "end": 1026,
    "range": [
      1021,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1028,
    "end": 1034,
    "range": [
      1028,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1036,
    "end": 1038,
    "range": [
      1036,
      1038
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1039,
    "end": 1040,
    "range": [
      1039,
      1040
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1040,
    "end": 1041,
    "range": [
      1040,
      1041
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1042,
    "end": 1043,
    "range": [
      1042,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1044,
    "end": 1045,
    "range": [
      1044,
      1045
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1045,
    "end": 1052,
    "range": [
      1045,
      1052
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1052,
    "end": 1053,
    "range": [
      1052,
      1053
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1054,
    "end": 1056,
    "range": [
      1054,
      1056
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1057,
    "end": 1058,
    "range": [
      1057,
      1058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1058,
    "end": 1059,
    "range": [
      1058,
      1059
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1063,
    "end": 1064,
    "range": [
      1063,
      1064
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1065,
    "end": 1068,
    "range": [
      1065,
      1068
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1068,
    "end": 1069,
    "range": [
      1068,
      1069
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1070,
    "end": 1071,
    "range": [
      1070,
      1071
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1071,
    "end": 1074,
    "range": [
      1071,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1076,
    "end": 1082,
    "range": [
      1076,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1084,
    "end": 1086,
    "range": [
      1084,
      1086
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1087,
    "end": 1094,
    "range": [
      1087,
      1094
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1094,
    "end": 1095,
    "range": [
      1094,
      1095
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1096,
    "end": 1099,
    "range": [
      1096,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1101,
    "end": 1102,
    "range": [
      1101,
      1102
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1102,
    "end": 1105,
    "range": [
      1102,
      1105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1105,
    "end": 1106,
    "range": [
      1105,
      1106
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1107,
    "end": 1113,
    "range": [
      1107,
      1113
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1113,
    "end": 1114,
    "range": [
      1113,
      1114
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1115,
    "end": 1120,
    "range": [
      1115,
      1120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1120,
    "end": 1121,
    "range": [
      1120,
      1121
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1122,
    "end": 1128,
    "range": [
      1122,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1130,
    "end": 1132,
    "range": [
      1130,
      1132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1136,
    "end": 1137,
    "range": [
      1136,
      1137
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1138,
    "end": 1139,
    "range": [
      1138,
      1139
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1139,
    "end": 1146,
    "range": [
      1139,
      1146
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1146,
    "end": 1147,
    "range": [
      1146,
      1147
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1148,
    "end": 1150,
    "range": [
      1148,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1152,
    "end": 1153,
    "range": [
      1152,
      1153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1159,
    "end": 1160,
    "range": [
      1159,
      1160
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1160,
    "end": 1161,
    "range": [
      1160,
      1161
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1162,
    "end": 1165,
    "range": [
      1162,
      1165
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1165,
    "end": 1166,
    "range": [
      1165,
      1166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1169,
    "end": 1172,
    "range": [
      1169,
      1172
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1172,
    "end": 1173,
    "range": [
      1172,
      1173
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1174,
    "end": 1175,
    "range": [
      1174,
      1175
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1175,
    "end": 1178,
    "range": [
      1175,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1180,
    "end": 1186,
    "range": [
      1180,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1188,
    "end": 1190,
    "range": [
      1188,
      1190
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1191,
    "end": 1198,
    "range": [
      1191,
      1198
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1200,
    "end": 1203,
    "range": [
      1200,
      1203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1206,
    "end": 1209,
    "range": [
      1206,
      1209
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1209,
    "end": 1210,
    "range": [
      1209,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1211,
    "end": 1217,
    "range": [
      1211,
      1217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1217,
    "end": 1218,
    "range": [
      1217,
      1218
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1219,
    "end": 1224,
    "range": [
      1219,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1224,
    "end": 1225,
    "range": [
      1224,
      1225
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1226,
    "end": 1232,
    "range": [
      1226,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1234,
    "end": 1236,
    "range": [
      1234,
      1236
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1237,
    "end": 1238,
    "range": [
      1237,
      1238
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1242,
    "end": 1243,
    "range": [
      1242,
      1243
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1244,
    "end": 1245,
    "range": [
      1244,
      1245
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1245,
    "end": 1248,
    "range": [
      1245,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1249,
    "end": 1256,
    "range": [
      1249,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1257,
    "end": 1258,
    "range": [
      1257,
      1258
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1261,
    "end": 1262,
    "range": [
      1261,
      1262
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1264,
    "end": 1267,
    "range": [
      1264,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1267,
    "end": 1268,
    "range": [
      1267,
      1268
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1269,
    "end": 1270,
    "range": [
      1269,
      1270
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1271,
    "end": 1274,
    "range": [
      1271,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1274,
    "end": 1275,
    "range": [
      1274,
      1275
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1276,
    "end": 1277,
    "range": [
      1276,
      1277
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1277,
    "end": 1280,
    "range": [
      1277,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1282,
    "end": 1288,
    "range": [
      1282,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1290,
    "end": 1292,
    "range": [
      1290,
      1292
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1293,
    "end": 1300,
    "range": [
      1293,
      1300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1300,
    "end": 1301,
    "range": [
      1300,
      1301
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1302,
    "end": 1305,
    "range": [
      1302,
      1305
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308,
    "range": [
      1307,
      1308
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1308,
    "end": 1311,
    "range": [
      1308,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1313,
    "end": 1319,
    "range": [
      1313,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1321,
    "end": 1326,
    "range": [
      1321,
      1326
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1326,
    "end": 1327,
    "range": [
      1326,
      1327
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1328,
    "end": 1334,
    "range": [
      1328,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1334,
    "end": 1335,
    "range": [
      1334,
      1335
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1336,
    "end": 1338,
    "range": [
      1336,
      1338
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1339,
    "end": 1340,
    "range": [
      1339,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1342,
    "end": 1343,
    "range": [
      1342,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1345,
    "end": 1346,
    "range": [
      1345,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1347,
    "end": 1350,
    "range": [
      1347,
      1350
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1350,
    "end": 1351,
    "range": [
      1350,
      1351
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1351,
    "end": 1358,
    "range": [
      1351,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1358,
    "end": 1359,
    "range": [
      1358,
      1359
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1360,
    "end": 1361,
    "range": [
      1360,
      1361
    ]
  },
  {
    "type": "String",
    "value": "'modified'",
    "start": 1362,
    "end": 1372,
    "range": [
      1362,
      1372
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1372,
    "end": 1373,
    "range": [
      1372,
      1373
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1376,
    "end": 1377,
    "range": [
      1376,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1377,
    "end": 1378,
    "range": [
      1377,
      1378
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1379,
    "end": 1382,
    "range": [
      1379,
      1382
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1382,
    "end": 1383,
    "range": [
      1382,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1384,
    "end": 1385,
    "range": [
      1384,
      1385
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1386,
    "end": 1389,
    "range": [
      1386,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1392,
    "end": 1395,
    "range": [
      1392,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1395,
    "end": 1396,
    "range": [
      1395,
      1396
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1397,
    "end": 1403,
    "range": [
      1397,
      1403
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1403,
    "end": 1404,
    "range": [
      1403,
      1404
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1405,
    "end": 1407,
    "range": [
      1405,
      1407
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1408,
    "end": 1415,
    "range": [
      1408,
      1415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1415,
    "end": 1416,
    "range": [
      1415,
      1416
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1417,
    "end": 1420,
    "range": [
      1417,
      1420
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1420,
    "end": 1421,
    "range": [
      1420,
      1421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1422,
    "end": 1423,
    "range": [
      1422,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1423,
    "end": 1426,
    "range": [
      1423,
      1426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1426,
    "end": 1427,
    "range": [
      1426,
      1427
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1428,
    "end": 1434,
    "range": [
      1428,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1436,
    "end": 1441,
    "range": [
      1436,
      1441
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1441,
    "end": 1442,
    "range": [
      1441,
      1442
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1443,
    "end": 1449,
    "range": [
      1443,
      1449
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450,
    "range": [
      1449,
      1450
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1451,
    "end": 1453,
    "range": [
      1451,
      1453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1460,
    "end": 1461,
    "range": [
      1460,
      1461
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1462,
    "end": 1465,
    "range": [
      1462,
      1465
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1465,
    "end": 1466,
    "range": [
      1465,
      1466
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1466,
    "end": 1473,
    "range": [
      1466,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "+=",
    "start": 1475,
    "end": 1477,
    "range": [
      1475,
      1477
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1478,
    "end": 1479,
    "range": [
      1478,
      1479
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1479,
    "end": 1480,
    "range": [
      1479,
      1480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1486,
    "end": 1489,
    "range": [
      1486,
      1489
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1489,
    "end": 1490,
    "range": [
      1489,
      1490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1491,
    "end": 1492,
    "range": [
      1491,
      1492
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1493,
    "end": 1496,
    "range": [
      1493,
      1496
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1496,
    "end": 1497,
    "range": [
      1496,
      1497
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1498,
    "end": 1499,
    "range": [
      1498,
      1499
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1499,
    "end": 1502,
    "range": [
      1499,
      1502
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1504,
    "end": 1510,
    "range": [
      1504,
      1510
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1510,
    "end": 1511,
    "range": [
      1510,
      1511
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1515,
    "end": 1522,
    "range": [
      1515,
      1522
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1522,
    "end": 1523,
    "range": [
      1522,
      1523
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1524,
    "end": 1527,
    "range": [
      1524,
      1527
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1527,
    "end": 1528,
    "range": [
      1527,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1529,
    "end": 1530,
    "range": [
      1529,
      1530
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1530,
    "end": 1533,
    "range": [
      1530,
      1533
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1533,
    "end": 1534,
    "range": [
      1533,
      1534
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1535,
    "end": 1541,
    "range": [
      1535,
      1541
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1541,
    "end": 1542,
    "range": [
      1541,
      1542
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1543,
    "end": 1548,
    "range": [
      1543,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1550,
    "end": 1556,
    "range": [
      1550,
      1556
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1556,
    "end": 1557,
    "range": [
      1556,
      1557
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1558,
    "end": 1560,
    "range": [
      1558,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1562,
    "end": 1563,
    "range": [
      1562,
      1563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1564,
    "end": 1565,
    "range": [
      1564,
      1565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1566,
    "end": 1567,
    "range": [
      1566,
      1567
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1567,
    "end": 1568,
    "range": [
      1567,
      1568
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1568,
    "end": 1569,
    "range": [
      1568,
      1569
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 1569,
    "end": 1572,
    "range": [
      1569,
      1572
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1572,
    "end": 1573,
    "range": [
      1572,
      1573
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 1573,
    "end": 1580,
    "range": [
      1573,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Punctuator",
    "value": "++",
    "start": 1582,
    "end": 1584,
    "range": [
      1582,
      1584
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1586,
    "end": 1587,
    "range": [
      1586,
      1587
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1589,
    "end": 1594,
    "range": [
      1589,
      1594
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1595,
    "end": 1596,
    "range": [
      1595,
      1596
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1607,
    "end": 1608,
    "range": [
      1607,
      1608
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1610,
    "end": 1617,
    "range": [
      1610,
      1617
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1618,
    "end": 1623,
    "range": [
      1618,
      1623
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1625,
    "end": 1626,
    "range": [
      1625,
      1626
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1627,
    "end": 1630,
    "range": [
      1627,
      1630
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1631,
    "end": 1632,
    "range": [
      1631,
      1632
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1633,
    "end": 1636,
    "range": [
      1633,
      1636
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1639,
    "end": 1642,
    "range": [
      1639,
      1642
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1642,
    "end": 1643,
    "range": [
      1642,
      1643
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1648,
    "end": 1649,
    "range": [
      1648,
      1649
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1652,
    "end": 1659,
    "range": [
      1652,
      1659
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1660,
    "end": 1665,
    "range": [
      1660,
      1665
    ]
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1666,
    "end": 1668,
    "range": [
      1666,
      1668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1668,
    "end": 1669,
    "range": [
      1668,
      1669
    ]
  },
  {
    "type": "String",
    "value": "\"c\"",
    "start": 1670,
    "end": 1673,
    "range": [
      1670,
      1673
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1673,
    "end": 1674,
    "range": [
      1673,
      1674
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1675,
    "end": 1676,
    "range": [
      1675,
      1676
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1676,
    "end": 1677,
    "range": [
      1676,
      1677
    ]
  },
  {
    "type": "Identifier",
    "value": "k2",
    "start": 1677,
    "end": 1679,
    "range": [
      1677,
      1679
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1679,
    "end": 1680,
    "range": [
      1679,
      1680
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1680,
    "end": 1681,
    "range": [
      1680,
      1681
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1683,
    "end": 1690,
    "range": [
      1683,
      1690
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1691,
    "end": 1696,
    "range": [
      1691,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1697,
    "end": 1700,
    "range": [
      1697,
      1700
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 1703,
    "end": 1709,
    "range": [
      1703,
      1709
    ]
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 1710,
    "end": 1716,
    "range": [
      1710,
      1716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1716,
    "end": 1717,
    "range": [
      1716,
      1717
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1718,
    "end": 1719,
    "range": [
      1718,
      1719
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1719,
    "end": 1720,
    "range": [
      1719,
      1720
    ]
  },
  {
    "type": "Identifier",
    "value": "sym",
    "start": 1720,
    "end": 1723,
    "range": [
      1720,
      1723
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1724,
    "end": 1725,
    "range": [
      1724,
      1725
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1727,
    "end": 1731,
    "range": [
      1727,
      1731
    ]
  },
  {
    "type": "Identifier",
    "value": "NumEnum",
    "start": 1732,
    "end": 1739,
    "range": [
      1732,
      1739
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1740,
    "end": 1741,
    "range": [
      1740,
      1741
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1742,
    "end": 1743,
    "range": [
      1742,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1747,
    "end": 1748,
    "range": [
      1747,
      1748
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1749,
    "end": 1752,
    "range": [
      1749,
      1752
    ]
  },
  {
    "type": "Identifier",
    "value": "numEnumKey",
    "start": 1753,
    "end": 1763,
    "range": [
      1753,
      1763
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1763,
    "end": 1764,
    "range": [
      1763,
      1764
    ]
  },
  {
    "type": "Identifier",
    "value": "NumEnum",
    "start": 1765,
    "end": 1772,
    "range": [
      1765,
      1772
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1774,
    "end": 1775,
    "range": [
      1774,
      1775
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1775,
    "end": 1776,
    "range": [
      1775,
      1776
    ]
  },
  {
    "type": "Identifier",
    "value": "numEnumKey",
    "start": 1776,
    "end": 1786,
    "range": [
      1776,
      1786
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1786,
    "end": 1787,
    "range": [
      1786,
      1787
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1787,
    "end": 1788,
    "range": [
      1787,
      1788
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 1791,
    "end": 1795,
    "range": [
      1791,
      1795
    ]
  },
  {
    "type": "Identifier",
    "value": "StrEnum",
    "start": 1796,
    "end": 1803,
    "range": [
      1796,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1806,
    "end": 1807,
    "range": [
      1806,
      1807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1808,
    "end": 1809,
    "range": [
      1808,
      1809
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 1810,
    "end": 1813,
    "range": [
      1810,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 1815,
    "end": 1816,
    "range": [
      1815,
      1816
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1817,
    "end": 1818,
    "range": [
      1817,
      1818
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 1819,
    "end": 1822,
    "range": [
      1819,
      1822
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1823,
    "end": 1824,
    "range": [
      1823,
      1824
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1825,
    "end": 1828,
    "range": [
      1825,
      1828
    ]
  },
  {
    "type": "Identifier",
    "value": "strEnumKey",
    "start": 1829,
    "end": 1839,
    "range": [
      1829,
      1839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Identifier",
    "value": "StrEnum",
    "start": 1841,
    "end": 1848,
    "range": [
      1841,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1851,
    "end": 1852,
    "range": [
      1851,
      1852
    ]
  },
  {
    "type": "Identifier",
    "value": "strEnumKey",
    "start": 1852,
    "end": 1862,
    "range": [
      1852,
      1862
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1862,
    "end": 1863,
    "range": [
      1862,
      1863
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1863,
    "end": 1864,
    "range": [
      1863,
      1864
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1867,
    "end": 1876,
    "range": [
      1867,
      1876
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 1877,
    "end": 1882,
    "range": [
      1877,
      1882
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1882,
    "end": 1883,
    "range": [
      1882,
      1883
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1887,
    "end": 1888,
    "range": [
      1887,
      1888
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1889,
    "end": 1890,
    "range": [
      1889,
      1890
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1893,
    "end": 1896,
    "range": [
      1893,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1896,
    "end": 1897,
    "range": [
      1896,
      1897
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1897,
    "end": 1900,
    "range": [
      1897,
      1900
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1900,
    "end": 1901,
    "range": [
      1900,
      1901
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1902,
    "end": 1903,
    "range": [
      1902,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1907,
    "end": 1908,
    "range": [
      1907,
      1908
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1911,
    "end": 1914,
    "range": [
      1911,
      1914
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1914,
    "end": 1915,
    "range": [
      1914,
      1915
    ]
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 1915,
    "end": 1918,
    "range": [
      1915,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 1920,
    "end": 1921,
    "range": [
      1920,
      1921
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1921,
    "end": 1922,
    "range": [
      1921,
      1922
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1923,
    "end": 1928,
    "range": [
      1923,
      1928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1928,
    "end": 1929,
    "range": [
      1928,
      1929
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1930,
    "end": 1931,
    "range": [
      1930,
      1931
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1931,
    "end": 1932,
    "range": [
      1931,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1934,
    "end": 1938,
    "range": [
      1934,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1940,
    "end": 1941,
    "range": [
      1940,
      1941
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1943,
    "end": 1952,
    "range": [
      1943,
      1952
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1953,
    "end": 1956,
    "range": [
      1953,
      1956
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 1959,
    "end": 1963,
    "range": [
      1959,
      1963
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1963,
    "end": 1964,
    "range": [
      1963,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1965,
    "end": 1966,
    "range": [
      1965,
      1966
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1967,
    "end": 1971,
    "range": [
      1967,
      1971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1971,
    "end": 1972,
    "range": [
      1971,
      1972
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1973,
    "end": 1974,
    "range": [
      1973,
      1974
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1975,
    "end": 1978,
    "range": [
      1975,
      1978
    ]
  },
  {
    "type": "Identifier",
    "value": "rover",
    "start": 1979,
    "end": 1984,
    "range": [
      1979,
      1984
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1984,
    "end": 1985,
    "range": [
      1984,
      1985
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 1986,
    "end": 1989,
    "range": [
      1986,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Identifier",
    "value": "bark",
    "start": 1994,
    "end": 1998,
    "range": [
      1994,
      1998
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1998,
    "end": 1999,
    "range": [
      1998,
      1999
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1999,
    "end": 2000,
    "range": [
      1999,
      2000
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2001,
    "end": 2002,
    "range": [
      2001,
      2002
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2002,
    "end": 2003,
    "range": [
      2002,
      2003
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2004,
    "end": 2005,
    "range": [
      2004,
      2005
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2005,
    "end": 2006,
    "range": [
      2005,
      2006
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2008,
    "end": 2015,
    "range": [
      2008,
      2015
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2016,
    "end": 2019,
    "range": [
      2016,
      2019
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2020,
    "end": 2023,
    "range": [
      2020,
      2023
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2023,
    "end": 2024,
    "range": [
      2023,
      2024
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 2025,
    "end": 2030,
    "range": [
      2025,
      2030
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2030,
    "end": 2031,
    "range": [
      2030,
      2031
    ]
  },
  {
    "type": "Identifier",
    "value": "Dog",
    "start": 2031,
    "end": 2034,
    "range": [
      2031,
      2034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2034,
    "end": 2035,
    "range": [
      2034,
      2035
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2036,
    "end": 2042,
    "range": [
      2036,
      2042
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2042,
    "end": 2043,
    "range": [
      2042,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 2045,
    "end": 2048,
    "range": [
      2045,
      2048
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2048,
    "end": 2049,
    "range": [
      2048,
      2049
    ]
  },
  {
    "type": "Identifier",
    "value": "rover",
    "start": 2049,
    "end": 2054,
    "range": [
      2049,
      2054
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2054,
    "end": 2055,
    "range": [
      2054,
      2055
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "String",
    "value": "\"Rover\"",
    "start": 2058,
    "end": 2065,
    "range": [
      2058,
      2065
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2065,
    "end": 2066,
    "range": [
      2065,
      2066
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2068,
    "end": 2077,
    "range": [
      2068,
      2077
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2078,
    "end": 2079,
    "range": [
      2078,
      2079
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2080,
    "end": 2081,
    "range": [
      2080,
      2081
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2084,
    "end": 2088,
    "range": [
      2084,
      2088
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "MyMap",
    "start": 2090,
    "end": 2095,
    "range": [
      2090,
      2095
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2095,
    "end": 2096,
    "range": [
      2095,
      2096
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2096,
    "end": 2102,
    "range": [
      2096,
      2102
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2102,
    "end": 2103,
    "range": [
      2102,
      2103
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2104,
    "end": 2110,
    "range": [
      2104,
      2110
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2110,
    "end": 2111,
    "range": [
      2110,
      2111
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2112,
    "end": 2113,
    "range": [
      2112,
      2113
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2114,
    "end": 2121,
    "range": [
      2114,
      2121
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2122,
    "end": 2127,
    "range": [
      2122,
      2127
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2128,
    "end": 2129,
    "range": [
      2128,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2132,
    "end": 2133,
    "range": [
      2132,
      2133
    ]
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 2134,
    "end": 2135,
    "range": [
      2134,
      2135
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2135,
    "end": 2136,
    "range": [
      2135,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2136,
    "end": 2140,
    "range": [
      2136,
      2140
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2140,
    "end": 2141,
    "range": [
      2140,
      2141
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2141,
    "end": 2144,
    "range": [
      2141,
      2144
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2144,
    "end": 2145,
    "range": [
      2144,
      2145
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2145,
    "end": 2146,
    "range": [
      2145,
      2146
    ]
  }
]
```
