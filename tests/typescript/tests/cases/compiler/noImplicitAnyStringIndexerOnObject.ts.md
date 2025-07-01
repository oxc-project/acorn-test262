__ESTREE_TEST__:PASS:
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
