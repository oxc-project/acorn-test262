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
            "name": "union",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSNullKeyword",
                    "start": 19,
                    "end": 23
                  },
                  {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 28,
                          "end": 29
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          },
                          "start": 29,
                          "end": 37
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 28,
                        "end": 38
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 39,
                          "end": 40
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 42,
                            "end": 48
                          },
                          "start": 40,
                          "end": 48
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 39,
                        "end": 48
                      }
                    ],
                    "start": 26,
                    "end": 50
                  }
                ],
                "start": 19,
                "end": 50
              },
              "start": 17,
              "end": 50
            },
            "start": 12,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 50
        }
      ],
      "declare": true,
      "start": 0,
      "end": 51
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
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 57,
            "end": 58
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 61,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 74
              },
              "optional": false,
              "computed": false,
              "start": 61,
              "end": 74
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 75,
                "end": 79
              }
            ],
            "optional": false,
            "start": 61,
            "end": 80
          },
          "definite": false,
          "start": 57,
          "end": 80
        }
      ],
      "declare": false,
      "start": 53,
      "end": 81
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
            "name": "t",
            "optional": false,
            "typeAnnotation": null,
            "start": 108,
            "end": 109
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 118
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 119,
                "end": 125
              },
              "optional": false,
              "computed": false,
              "start": 112,
              "end": 125
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 128,
                      "end": 129
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 131,
                      "end": 132
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 128,
                    "end": 132
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 135
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 137,
                      "end": 139
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 134,
                    "end": 139
                  }
                ],
                "start": 126,
                "end": 141
              }
            ],
            "optional": false,
            "start": 112,
            "end": 142
          },
          "definite": false,
          "start": 108,
          "end": 142
        }
      ],
      "declare": false,
      "start": 104,
      "end": 143
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
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 186
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 193
              },
              "optional": false,
              "computed": false,
              "start": 180,
              "end": 193
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 199
              }
            ],
            "optional": false,
            "start": 180,
            "end": 200
          },
          "definite": false,
          "start": 176,
          "end": 200
        }
      ],
      "declare": false,
      "start": 172,
      "end": 201
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
            "name": "e",
            "optional": false,
            "typeAnnotation": null,
            "start": 253,
            "end": 254
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 263
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 264,
                "end": 270
              },
              "optional": false,
              "computed": false,
              "start": 257,
              "end": 270
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 271,
                "end": 273
              }
            ],
            "optional": false,
            "start": 257,
            "end": 274
          },
          "definite": false,
          "start": 253,
          "end": 274
        }
      ],
      "declare": false,
      "start": 249,
      "end": 275
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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 301
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 304,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 317
              },
              "optional": false,
              "computed": false,
              "start": 304,
              "end": 317
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 319,
                  "end": 325
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 326,
                  "end": 328
                },
                "start": 318,
                "end": 328
              }
            ],
            "optional": false,
            "start": 304,
            "end": 329
          },
          "definite": false,
          "start": 300,
          "end": 329
        }
      ],
      "declare": false,
      "start": 296,
      "end": 330
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 352,
            "end": 353
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 362
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 369
              },
              "optional": false,
              "computed": false,
              "start": 356,
              "end": 369
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 370,
                "end": 374
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 376,
                "end": 378
              }
            ],
            "optional": false,
            "start": 356,
            "end": 379
          },
          "definite": false,
          "start": 352,
          "end": 379
        }
      ],
      "declare": false,
      "start": 348,
      "end": 380
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 402,
            "end": 403
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 406,
                "end": 412
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 413,
                "end": 419
              },
              "optional": false,
              "computed": false,
              "start": 406,
              "end": 419
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 422,
                      "end": 423
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 425,
                      "end": 426
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 422,
                    "end": 426
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 428,
                      "end": 429
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 431,
                      "end": 433
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 428,
                    "end": 433
                  }
                ],
                "start": 420,
                "end": 435
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 437,
                "end": 439
              }
            ],
            "optional": false,
            "start": 406,
            "end": 440
          },
          "definite": false,
          "start": 402,
          "end": 440
        }
      ],
      "declare": false,
      "start": 398,
      "end": 441
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 446,
            "end": 447
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 456
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 463
              },
              "optional": false,
              "computed": false,
              "start": 450,
              "end": 463
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 469
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 471,
                "end": 473
              }
            ],
            "optional": false,
            "start": 450,
            "end": 474
          },
          "definite": false,
          "start": 446,
          "end": 474
        }
      ],
      "declare": false,
      "start": 442,
      "end": 475
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 480,
            "end": 481
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 490
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 497
              },
              "optional": false,
              "computed": false,
              "start": 484,
              "end": 497
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 498,
                "end": 500
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 502,
                "end": 504
              }
            ],
            "optional": false,
            "start": 484,
            "end": 505
          },
          "definite": false,
          "start": 480,
          "end": 505
        }
      ],
      "declare": false,
      "start": 476,
      "end": 506
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 511,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Object",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 521
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 522,
                "end": 528
              },
              "optional": false,
              "computed": false,
              "start": 515,
              "end": 528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 530,
                  "end": 536
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 537,
                  "end": 539
                },
                "start": 529,
                "end": 539
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 541,
                "end": 543
              }
            ],
            "optional": false,
            "start": 515,
            "end": 544
          },
          "definite": false,
          "start": 511,
          "end": 544
        }
      ],
      "declare": false,
      "start": 507,
      "end": 545
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 545
}
```
