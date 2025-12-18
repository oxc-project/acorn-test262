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
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 89
          },
          "init": {
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 109,
                        "end": 113
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_map",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 114,
                        "end": 118
                      },
                      "optional": false,
                      "computed": false,
                      "start": 109,
                      "end": 118
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 121,
                      "end": 123
                    },
                    "start": 109,
                    "end": 123
                  },
                  "directive": null,
                  "start": 109,
                  "end": 124
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 129,
                      "end": 133
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "_map",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 138
                    },
                    "optional": false,
                    "computed": false,
                    "start": 129,
                    "end": 138
                  },
                  "directive": null,
                  "start": 129,
                  "end": 138
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 143,
                      "end": 147
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 148,
                      "end": 151
                    },
                    "optional": false,
                    "computed": false,
                    "start": 143,
                    "end": 151
                  },
                  "directive": null,
                  "start": 143,
                  "end": 151
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 156,
                      "end": 160
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "get",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 161,
                      "end": 164
                    },
                    "optional": false,
                    "computed": false,
                    "start": 156,
                    "end": 164
                  },
                  "directive": null,
                  "start": 156,
                  "end": 164
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "ThisExpression",
                      "start": 169,
                      "end": 173
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "addon",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 179
                    },
                    "optional": false,
                    "computed": false,
                    "start": 169,
                    "end": 179
                  },
                  "directive": null,
                  "start": 169,
                  "end": 179
                }
              ],
              "start": 103,
              "end": 181
            },
            "expression": false,
            "start": 92,
            "end": 181
          },
          "definite": false,
          "start": 81,
          "end": 181
        }
      ],
      "declare": false,
      "start": 77,
      "end": 182
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
            "name": "Multimap",
            "optional": false,
            "typeAnnotation": null,
            "start": 184,
            "end": 192
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "prototype",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 202
          },
          "optional": false,
          "computed": false,
          "start": 184,
          "end": 202
        },
        "right": {
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
                "start": 211,
                "end": 214
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 237,
                          "end": 241
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 242,
                          "end": 246
                        },
                        "optional": false,
                        "computed": false,
                        "start": 237,
                        "end": 246
                      },
                      "directive": null,
                      "start": 237,
                      "end": 246
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 255,
                          "end": 259
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 260,
                          "end": 263
                        },
                        "optional": false,
                        "computed": false,
                        "start": 255,
                        "end": 263
                      },
                      "directive": null,
                      "start": 255,
                      "end": 263
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 272,
                          "end": 276
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 277,
                          "end": 280
                        },
                        "optional": false,
                        "computed": false,
                        "start": 272,
                        "end": 280
                      },
                      "directive": null,
                      "start": 272,
                      "end": 280
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 289,
                          "end": 293
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addon",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 299
                        },
                        "optional": false,
                        "computed": false,
                        "start": 289,
                        "end": 299
                      },
                      "directive": null,
                      "start": 289,
                      "end": 299
                    }
                  ],
                  "start": 227,
                  "end": 305
                },
                "expression": false,
                "start": 216,
                "end": 305
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 211,
              "end": 305
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 314
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
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 327,
                          "end": 331
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 336
                        },
                        "optional": false,
                        "computed": false,
                        "start": 327,
                        "end": 336
                      },
                      "directive": null,
                      "start": 327,
                      "end": 336
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 345,
                          "end": 349
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 350,
                          "end": 353
                        },
                        "optional": false,
                        "computed": false,
                        "start": 345,
                        "end": 353
                      },
                      "directive": null,
                      "start": 345,
                      "end": 353
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 362,
                          "end": 366
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 367,
                          "end": 370
                        },
                        "optional": false,
                        "computed": false,
                        "start": 362,
                        "end": 370
                      },
                      "directive": null,
                      "start": 362,
                      "end": 370
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 379,
                          "end": 383
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "addon",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 384,
                          "end": 389
                        },
                        "optional": false,
                        "computed": false,
                        "start": 379,
                        "end": 389
                      },
                      "directive": null,
                      "start": 379,
                      "end": 389
                    }
                  ],
                  "start": 317,
                  "end": 395
                },
                "expression": false,
                "start": 314,
                "end": 395
              },
              "method": true,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 311,
              "end": 395
            }
          ],
          "start": 205,
          "end": 397
        },
        "start": 184,
        "end": 397
      },
      "directive": null,
      "start": 184,
      "end": 397
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
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null,
              "start": 399,
              "end": 407
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null,
              "start": 408,
              "end": 417
            },
            "optional": false,
            "computed": false,
            "start": 399,
            "end": 417
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "addon",
            "optional": false,
            "typeAnnotation": null,
            "start": 418,
            "end": 423
          },
          "optional": false,
          "computed": false,
          "start": 399,
          "end": 423
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
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 444,
                    "end": 448
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 449,
                    "end": 453
                  },
                  "optional": false,
                  "computed": false,
                  "start": 444,
                  "end": 453
                },
                "directive": null,
                "start": 444,
                "end": 453
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 458,
                    "end": 462
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "set",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 463,
                    "end": 466
                  },
                  "optional": false,
                  "computed": false,
                  "start": 458,
                  "end": 466
                },
                "directive": null,
                "start": 458,
                "end": 466
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 471,
                    "end": 475
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "get",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 479
                  },
                  "optional": false,
                  "computed": false,
                  "start": 471,
                  "end": 479
                },
                "directive": null,
                "start": 471,
                "end": 479
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 484,
                    "end": 488
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "addon",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 489,
                    "end": 494
                  },
                  "optional": false,
                  "computed": false,
                  "start": 484,
                  "end": 494
                },
                "directive": null,
                "start": 484,
                "end": 494
              }
            ],
            "start": 438,
            "end": 496
          },
          "expression": false,
          "start": 426,
          "end": 496
        },
        "start": 399,
        "end": 496
      },
      "directive": null,
      "start": 399,
      "end": 496
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
            "name": "mm",
            "optional": false,
            "typeAnnotation": null,
            "start": 502,
            "end": 504
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Multimap",
              "optional": false,
              "typeAnnotation": null,
              "start": 511,
              "end": 519
            },
            "typeArguments": null,
            "arguments": [],
            "start": 507,
            "end": 521
          },
          "definite": false,
          "start": 502,
          "end": 521
        }
      ],
      "declare": false,
      "start": 498,
      "end": 522
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mm",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 525
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "_map",
          "optional": false,
          "typeAnnotation": null,
          "start": 526,
          "end": 530
        },
        "optional": false,
        "computed": false,
        "start": 523,
        "end": 530
      },
      "directive": null,
      "start": 523,
      "end": 530
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mm",
          "optional": false,
          "typeAnnotation": null,
          "start": 531,
          "end": 533
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "set",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 537
        },
        "optional": false,
        "computed": false,
        "start": 531,
        "end": 537
      },
      "directive": null,
      "start": 531,
      "end": 537
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mm",
          "optional": false,
          "typeAnnotation": null,
          "start": 538,
          "end": 540
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "get",
          "optional": false,
          "typeAnnotation": null,
          "start": 541,
          "end": 544
        },
        "optional": false,
        "computed": false,
        "start": 538,
        "end": 544
      },
      "directive": null,
      "start": 538,
      "end": 544
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "mm",
          "optional": false,
          "typeAnnotation": null,
          "start": 545,
          "end": 547
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "addon",
          "optional": false,
          "typeAnnotation": null,
          "start": 548,
          "end": 553
        },
        "optional": false,
        "computed": false,
        "start": 545,
        "end": 553
      },
      "directive": null,
      "start": 545,
      "end": 553
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 553
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 77,
    "end": 80,
    "range": [
      77,
      80
    ]
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 81,
    "end": 89,
    "range": [
      81,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 92,
    "end": 100,
    "range": [
      92,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 100,
    "end": 101,
    "range": [
      100,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 109,
    "end": 113,
    "range": [
      109,
      113
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114,
    "range": [
      113,
      114
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 114,
    "end": 118,
    "range": [
      114,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 121,
    "end": 122,
    "range": [
      121,
      122
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 129,
    "end": 133,
    "range": [
      129,
      133
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 133,
    "end": 134,
    "range": [
      133,
      134
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 134,
    "end": 138,
    "range": [
      134,
      138
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 143,
    "end": 147,
    "range": [
      143,
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
    "value": "set",
    "start": 148,
    "end": 151,
    "range": [
      148,
      151
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 156,
    "end": 160,
    "range": [
      156,
      160
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 161,
    "end": 164,
    "range": [
      161,
      164
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 169,
    "end": 173,
    "range": [
      169,
      173
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 173,
    "end": 174,
    "range": [
      173,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 174,
    "end": 179,
    "range": [
      174,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 184,
    "end": 192,
    "range": [
      184,
      192
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 192,
    "end": 193,
    "range": [
      192,
      193
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 193,
    "end": 202,
    "range": [
      193,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 211,
    "end": 214,
    "range": [
      211,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 216,
    "end": 224,
    "range": [
      216,
      224
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225,
    "range": [
      224,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 237,
    "end": 241,
    "range": [
      237,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 242,
    "end": 246,
    "range": [
      242,
      246
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 255,
    "end": 259,
    "range": [
      255,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
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
    "start": 260,
    "end": 263,
    "range": [
      260,
      263
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 272,
    "end": 276,
    "range": [
      272,
      276
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 277,
    "end": 280,
    "range": [
      277,
      280
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 289,
    "end": 293,
    "range": [
      289,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 293,
    "end": 294,
    "range": [
      293,
      294
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 294,
    "end": 299,
    "range": [
      294,
      299
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 305,
    "end": 306,
    "range": [
      305,
      306
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 311,
    "end": 314,
    "range": [
      311,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 314,
    "end": 315,
    "range": [
      314,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 327,
    "end": 331,
    "range": [
      327,
      331
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 331,
    "end": 332,
    "range": [
      331,
      332
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 345,
    "end": 349,
    "range": [
      345,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 350,
    "end": 353,
    "range": [
      350,
      353
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 367,
    "end": 370,
    "range": [
      367,
      370
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 379,
    "end": 383,
    "range": [
      379,
      383
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 383,
    "end": 384,
    "range": [
      383,
      384
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 384,
    "end": 389,
    "range": [
      384,
      389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 399,
    "end": 407,
    "range": [
      399,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 408,
    "end": 417,
    "range": [
      408,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 417,
    "end": 418,
    "range": [
      417,
      418
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 418,
    "end": 423,
    "range": [
      418,
      423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 426,
    "end": 434,
    "range": [
      426,
      434
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 444,
    "end": 448,
    "range": [
      444,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 449,
    "end": 453,
    "range": [
      449,
      453
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 463,
    "end": 466,
    "range": [
      463,
      466
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 471,
    "end": 475,
    "range": [
      471,
      475
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 475,
    "end": 476,
    "range": [
      475,
      476
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 476,
    "end": 479,
    "range": [
      476,
      479
    ]
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 484,
    "end": 488,
    "range": [
      484,
      488
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 488,
    "end": 489,
    "range": [
      488,
      489
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 489,
    "end": 494,
    "range": [
      489,
      494
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 498,
    "end": 501,
    "range": [
      498,
      501
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 502,
    "end": 504,
    "range": [
      502,
      504
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 505,
    "end": 506,
    "range": [
      505,
      506
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 507,
    "end": 510,
    "range": [
      507,
      510
    ]
  },
  {
    "type": "Identifier",
    "value": "Multimap",
    "start": 511,
    "end": 519,
    "range": [
      511,
      519
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 519,
    "end": 520,
    "range": [
      519,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 520,
    "end": 521,
    "range": [
      520,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 523,
    "end": 525,
    "range": [
      523,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Identifier",
    "value": "_map",
    "start": 526,
    "end": 530,
    "range": [
      526,
      530
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 533,
    "end": 534,
    "range": [
      533,
      534
    ]
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 534,
    "end": 537,
    "range": [
      534,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 538,
    "end": 540,
    "range": [
      538,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 541,
    "end": 544,
    "range": [
      541,
      544
    ]
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 545,
    "end": 547,
    "range": [
      545,
      547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 547,
    "end": 548,
    "range": [
      547,
      548
    ]
  },
  {
    "type": "Identifier",
    "value": "addon",
    "start": 548,
    "end": 553,
    "range": [
      548,
      553
    ]
  }
]
```
