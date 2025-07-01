__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 22,
              "end": 26
            },
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
            "accessibility": null,
            "static": false,
            "start": 22,
            "end": 35
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 40,
            "end": 54
          }
        ],
        "start": 16,
        "end": 56
      },
      "declare": false,
      "start": 0,
      "end": 56
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
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 84,
                      "end": 87
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          },
                          "start": 91,
                          "end": 99
                        },
                        "start": 88,
                        "end": 99
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      },
                      "start": 100,
                      "end": 106
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 84,
                    "end": 107
                  }
                ],
                "start": 78,
                "end": 109
              },
              "start": 76,
              "end": 109
            },
            "start": 69,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 69,
          "end": 109
        }
      ],
      "declare": true,
      "start": 57,
      "end": 109
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
            "name": "hello",
            "optional": false,
            "typeAnnotation": null,
            "start": 114,
            "end": 119
          },
          "init": {
            "type": "Literal",
            "value": "hello",
            "raw": "\"hello\"",
            "start": 122,
            "end": 129
          },
          "definite": false,
          "start": 114,
          "end": 129
        }
      ],
      "declare": false,
      "start": 110,
      "end": 130
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
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 143,
                  "end": 148
                },
                "typeArguments": null,
                "start": 143,
                "end": 148
              },
              "start": 141,
              "end": 148
            },
            "start": 135,
            "end": 148
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
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 153,
                  "end": 157
                },
                "value": {
                  "type": "Literal",
                  "value": "mower",
                  "raw": "\"mower\"",
                  "start": 159,
                  "end": 166
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 153,
                "end": 166
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 168,
                  "end": 173
                },
                "value": {
                  "type": "Literal",
                  "value": "mowing",
                  "raw": "\"mowing\"",
                  "start": 175,
                  "end": 183
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 168,
                "end": 183
              }
            ],
            "start": 151,
            "end": 185
          },
          "definite": false,
          "start": 135,
          "end": 185
        }
      ],
      "declare": false,
      "start": 131,
      "end": 186
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 208
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 210,
                "end": 215
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 204,
              "end": 215
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 219,
                "end": 224
              },
              "typeArguments": null,
              "start": 219,
              "end": 224
            },
            "start": 217,
            "end": 224
          },
          "start": 202,
          "end": 224
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 232,
                  "end": 239
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 240,
                  "end": 243
                },
                "optional": false,
                "computed": false,
                "start": 232,
                "end": 243
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 244,
                  "end": 249
                }
              ],
              "optional": false,
              "start": 232,
              "end": 250
            },
            "directive": null,
            "start": 232,
            "end": 251
          }
        ],
        "start": 226,
        "end": 253
      },
      "expression": false,
      "start": 188,
      "end": 253
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 267
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 274
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "nameB",
                "optional": false,
                "typeAnnotation": null,
                "start": 276,
                "end": 281
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 270,
              "end": 281
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "skill",
                "optional": false,
                "typeAnnotation": null,
                "start": 283,
                "end": 288
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "skillB",
                "optional": false,
                "typeAnnotation": null,
                "start": 290,
                "end": 296
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 283,
              "end": 296
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 305
              },
              "typeArguments": null,
              "start": 300,
              "end": 305
            },
            "start": 298,
            "end": 305
          },
          "start": 268,
          "end": 305
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 320
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 321,
                  "end": 324
                },
                "optional": false,
                "computed": false,
                "start": 313,
                "end": 324
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 325,
                  "end": 330
                }
              ],
              "optional": false,
              "start": 313,
              "end": 331
            },
            "directive": null,
            "start": 313,
            "end": 332
          }
        ],
        "start": 307,
        "end": 334
      },
      "expression": false,
      "start": 254,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null,
        "start": 344,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 355
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 355
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 351,
              "end": 355
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Robot",
                "optional": false,
                "typeAnnotation": null,
                "start": 359,
                "end": 364
              },
              "typeArguments": null,
              "start": 359,
              "end": 364
            },
            "start": 357,
            "end": 364
          },
          "start": 349,
          "end": 364
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 379
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 380,
                  "end": 383
                },
                "optional": false,
                "computed": false,
                "start": 372,
                "end": 383
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 384,
                  "end": 388
                }
              ],
              "optional": false,
              "start": 372,
              "end": 389
            },
            "directive": null,
            "start": 372,
            "end": 390
          }
        ],
        "start": 366,
        "end": 392
      },
      "expression": false,
      "start": 335,
      "end": 392
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 398
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 399,
            "end": 405
          }
        ],
        "optional": false,
        "start": 394,
        "end": 406
      },
      "directive": null,
      "start": 394,
      "end": 407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null,
          "start": 408,
          "end": 412
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 419
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 421,
                  "end": 428
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 415,
                "end": 428
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 435
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 437,
                  "end": 452
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 430,
                "end": 452
              }
            ],
            "start": 413,
            "end": 454
          }
        ],
        "optional": false,
        "start": 408,
        "end": 455
      },
      "directive": null,
      "start": 408,
      "end": 456
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 458,
          "end": 462
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 463,
            "end": 469
          }
        ],
        "optional": false,
        "start": 458,
        "end": 470
      },
      "directive": null,
      "start": 458,
      "end": 471
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null,
          "start": 472,
          "end": 476
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 479,
                  "end": 483
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 485,
                  "end": 492
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 479,
                "end": 492
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 494,
                  "end": 499
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 501,
                  "end": 516
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 494,
                "end": 516
              }
            ],
            "start": 477,
            "end": 518
          }
        ],
        "optional": false,
        "start": 472,
        "end": 519
      },
      "directive": null,
      "start": 472,
      "end": 520
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 522,
          "end": 526
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 527,
            "end": 533
          }
        ],
        "optional": false,
        "start": 522,
        "end": 534
      },
      "directive": null,
      "start": 522,
      "end": 535
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo3",
          "optional": false,
          "typeAnnotation": null,
          "start": 536,
          "end": 540
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 547
                },
                "value": {
                  "type": "Literal",
                  "value": "Edger",
                  "raw": "\"Edger\"",
                  "start": 549,
                  "end": 556
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 543,
                "end": 556
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 558,
                  "end": 563
                },
                "value": {
                  "type": "Literal",
                  "value": "cutting edges",
                  "raw": "\"cutting edges\"",
                  "start": 565,
                  "end": 580
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 558,
                "end": 580
              }
            ],
            "start": 541,
            "end": 582
          }
        ],
        "optional": false,
        "start": 536,
        "end": 583
      },
      "directive": null,
      "start": 536,
      "end": 584
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 584
}
```
