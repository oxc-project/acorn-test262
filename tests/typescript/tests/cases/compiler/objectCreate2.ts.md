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
            "start": 105,
            "end": 106
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
                "start": 109,
                "end": 115
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 116,
                "end": 122
              },
              "optional": false,
              "computed": false,
              "start": 109,
              "end": 122
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
                      "start": 125,
                      "end": 126
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 128,
                      "end": 129
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 125,
                    "end": 129
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
                      "start": 131,
                      "end": 132
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 134,
                      "end": 136
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 131,
                    "end": 136
                  }
                ],
                "start": 123,
                "end": 138
              }
            ],
            "optional": false,
            "start": 109,
            "end": 139
          },
          "definite": false,
          "start": 105,
          "end": 139
        }
      ],
      "declare": false,
      "start": 101,
      "end": 140
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
            "start": 173,
            "end": 174
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
                "start": 177,
                "end": 183
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 184,
                "end": 190
              },
              "optional": false,
              "computed": false,
              "start": 177,
              "end": 190
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 196
              }
            ],
            "optional": false,
            "start": 177,
            "end": 197
          },
          "definite": false,
          "start": 173,
          "end": 197
        }
      ],
      "declare": false,
      "start": 169,
      "end": 198
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
            "start": 241,
            "end": 242
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
                "start": 245,
                "end": 251
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 252,
                "end": 258
              },
              "optional": false,
              "computed": false,
              "start": 245,
              "end": 258
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 259,
                "end": 261
              }
            ],
            "optional": false,
            "start": 245,
            "end": 262
          },
          "definite": false,
          "start": 241,
          "end": 262
        }
      ],
      "declare": false,
      "start": 237,
      "end": 263
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
            "start": 288,
            "end": 289
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
                "start": 292,
                "end": 298
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 299,
                "end": 305
              },
              "optional": false,
              "computed": false,
              "start": 292,
              "end": 305
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 307,
                  "end": 313
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 314,
                  "end": 316
                },
                "start": 306,
                "end": 316
              }
            ],
            "optional": false,
            "start": 292,
            "end": 317
          },
          "definite": false,
          "start": 288,
          "end": 317
        }
      ],
      "declare": false,
      "start": 284,
      "end": 318
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
            "start": 340,
            "end": 341
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
                "start": 344,
                "end": 350
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 351,
                "end": 357
              },
              "optional": false,
              "computed": false,
              "start": 344,
              "end": 357
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 358,
                "end": 362
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 364,
                "end": 366
              }
            ],
            "optional": false,
            "start": 344,
            "end": 367
          },
          "definite": false,
          "start": 340,
          "end": 367
        }
      ],
      "declare": false,
      "start": 336,
      "end": 368
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
            "start": 390,
            "end": 391
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
                "start": 394,
                "end": 400
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 401,
                "end": 407
              },
              "optional": false,
              "computed": false,
              "start": 394,
              "end": 407
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
                      "start": 410,
                      "end": 411
                    },
                    "value": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 413,
                      "end": 414
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 410,
                    "end": 414
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
                      "start": 416,
                      "end": 417
                    },
                    "value": {
                      "type": "Literal",
                      "value": "",
                      "raw": "\"\"",
                      "start": 419,
                      "end": 421
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 416,
                    "end": 421
                  }
                ],
                "start": 408,
                "end": 423
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 425,
                "end": 427
              }
            ],
            "optional": false,
            "start": 394,
            "end": 428
          },
          "definite": false,
          "start": 390,
          "end": 428
        }
      ],
      "declare": false,
      "start": 386,
      "end": 429
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
            "start": 434,
            "end": 435
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
                "start": 438,
                "end": 444
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 445,
                "end": 451
              },
              "optional": false,
              "computed": false,
              "start": 438,
              "end": 451
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "union",
                "optional": false,
                "typeAnnotation": null,
                "start": 452,
                "end": 457
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 459,
                "end": 461
              }
            ],
            "optional": false,
            "start": 438,
            "end": 462
          },
          "definite": false,
          "start": 434,
          "end": 462
        }
      ],
      "declare": false,
      "start": 430,
      "end": 463
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
            "start": 468,
            "end": 469
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
                "start": 472,
                "end": 478
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 479,
                "end": 485
              },
              "optional": false,
              "computed": false,
              "start": 472,
              "end": 485
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 486,
                "end": 488
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 490,
                "end": 492
              }
            ],
            "optional": false,
            "start": 472,
            "end": 493
          },
          "definite": false,
          "start": 468,
          "end": 493
        }
      ],
      "declare": false,
      "start": 464,
      "end": 494
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
            "start": 499,
            "end": 500
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
                "start": 503,
                "end": 509
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "create",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 516
              },
              "optional": false,
              "computed": false,
              "start": 503,
              "end": 516
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSTypeAssertion",
                "typeAnnotation": {
                  "type": "TSObjectKeyword",
                  "start": 518,
                  "end": 524
                },
                "expression": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 525,
                  "end": 527
                },
                "start": 517,
                "end": 527
              },
              {
                "type": "ObjectExpression",
                "properties": [],
                "start": 529,
                "end": 531
              }
            ],
            "optional": false,
            "start": 503,
            "end": 532
          },
          "definite": false,
          "start": 499,
          "end": 532
        }
      ],
      "declare": false,
      "start": 495,
      "end": 533
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 533
}
```
