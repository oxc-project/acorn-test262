__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "action",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 15
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null,
                "start": 19,
                "end": 27
              },
              "typeArguments": null,
              "start": 19,
              "end": 27
            },
            "start": 17,
            "end": 27
          },
          "start": 16,
          "end": 27
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 29,
        "end": 31
      },
      "expression": false,
      "start": 0,
      "end": 31
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "let",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x1",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 121,
                      "end": 127
                    }
                  ],
                  "start": 112,
                  "end": 127
                },
                "start": 110,
                "end": 127
              },
              "start": 108,
              "end": 127
            },
            "init": null,
            "definite": false,
            "start": 108,
            "end": 127
          }
        ],
        "declare": false,
        "start": 104,
        "end": 128
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 97,
      "end": 128
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null,
          "start": 129,
          "end": 131
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 134,
          "end": 139
        },
        "start": 129,
        "end": 139
      },
      "directive": null,
      "start": 129,
      "end": 140
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 141,
          "end": 147
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 158
                  },
                  "directive": null,
                  "start": 156,
                  "end": 158
                }
              ],
              "start": 154,
              "end": 182
            },
            "id": null,
            "generator": false,
            "start": 148,
            "end": 182
          }
        ],
        "optional": false,
        "start": 141,
        "end": 183
      },
      "directive": null,
      "start": 141,
      "end": 184
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 197
          },
          "exportKind": "value",
          "start": 195,
          "end": 197
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 186,
      "end": 200
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 209,
                    "end": 215
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 218,
                    "end": 224
                  }
                ],
                "start": 209,
                "end": 224
              },
              "start": 207,
              "end": 224
            },
            "start": 205,
            "end": 224
          },
          "init": null,
          "definite": false,
          "start": 205,
          "end": 224
        }
      ],
      "declare": false,
      "start": 201,
      "end": 225
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null,
          "start": 226,
          "end": 228
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 231,
          "end": 236
        },
        "start": 226,
        "end": 236
      },
      "directive": null,
      "start": 226,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 238,
          "end": 244
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 255
                  },
                  "directive": null,
                  "start": 253,
                  "end": 255
                }
              ],
              "start": 251,
              "end": 279
            },
            "id": null,
            "generator": false,
            "start": 245,
            "end": 279
          }
        ],
        "optional": false,
        "start": 238,
        "end": 280
      },
      "directive": null,
      "start": 238,
      "end": 281
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 294
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 301
          },
          "exportKind": "value",
          "start": 292,
          "end": 301
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 283,
      "end": 304
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 313,
                    "end": 319
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 322,
                    "end": 328
                  }
                ],
                "start": 313,
                "end": 328
              },
              "start": 311,
              "end": 328
            },
            "start": 309,
            "end": 328
          },
          "init": null,
          "definite": false,
          "start": 309,
          "end": 328
        }
      ],
      "declare": false,
      "start": 305,
      "end": 329
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null,
          "start": 330,
          "end": 332
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 335,
          "end": 340
        },
        "start": 330,
        "end": 340
      },
      "directive": null,
      "start": 330,
      "end": 341
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 348
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 357,
                    "end": 359
                  },
                  "directive": null,
                  "start": 357,
                  "end": 359
                }
              ],
              "start": 355,
              "end": 383
            },
            "id": null,
            "generator": false,
            "start": 349,
            "end": 383
          }
        ],
        "optional": false,
        "start": 342,
        "end": 384
      },
      "directive": null,
      "start": 342,
      "end": 385
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
            "name": "x4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 395,
                    "end": 401
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 404,
                    "end": 410
                  }
                ],
                "start": 395,
                "end": 410
              },
              "start": 393,
              "end": 410
            },
            "start": 391,
            "end": 410
          },
          "init": null,
          "definite": false,
          "start": 391,
          "end": 410
        }
      ],
      "declare": false,
      "start": 387,
      "end": 411
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null,
          "start": 412,
          "end": 414
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 417,
          "end": 422
        },
        "start": 412,
        "end": 422
      },
      "directive": null,
      "start": 412,
      "end": 423
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 424,
          "end": 430
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 441
                  },
                  "directive": null,
                  "start": 439,
                  "end": 441
                }
              ],
              "start": 437,
              "end": 456
            },
            "id": null,
            "generator": false,
            "start": 431,
            "end": 456
          }
        ],
        "optional": false,
        "start": 424,
        "end": 457
      },
      "directive": null,
      "start": 424,
      "end": 458
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "x4",
        "optional": false,
        "typeAnnotation": null,
        "start": 474,
        "end": 476
      },
      "exportKind": "value",
      "start": 459,
      "end": 477
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
            "name": "x5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 487,
                    "end": 493
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 496,
                    "end": 502
                  }
                ],
                "start": 487,
                "end": 502
              },
              "start": 485,
              "end": 502
            },
            "start": 483,
            "end": 502
          },
          "init": null,
          "definite": false,
          "start": 483,
          "end": 502
        }
      ],
      "declare": false,
      "start": 479,
      "end": 503
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null,
          "start": 504,
          "end": 506
        },
        "right": {
          "type": "Literal",
          "value": "abc",
          "raw": "\"abc\"",
          "start": 509,
          "end": 514
        },
        "start": 504,
        "end": 514
      },
      "directive": null,
      "start": 504,
      "end": 515
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null,
          "start": 516,
          "end": 522
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 531,
                    "end": 533
                  },
                  "directive": null,
                  "start": 531,
                  "end": 533
                }
              ],
              "start": 529,
              "end": 548
            },
            "id": null,
            "generator": false,
            "start": 523,
            "end": 548
          }
        ],
        "optional": false,
        "start": 516,
        "end": 549
      },
      "directive": null,
      "start": 516,
      "end": 550
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 550
}
```
