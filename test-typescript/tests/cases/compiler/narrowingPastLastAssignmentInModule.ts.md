__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 551,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "name": "f",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 27,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 31,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 128,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 127,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 127,
              "name": "x1",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 110,
                "end": 127,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 112,
                  "end": 127,
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
                  ]
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "let",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 140,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 139,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 131,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 134,
          "end": 139,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 184,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 183,
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 147,
          "name": "action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 182,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 154,
              "end": 182,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 156,
                  "end": 158,
                  "expression": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "name": "x1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 200,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 195,
          "end": 197,
          "local": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "name": "x2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 225,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 224,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 224,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 224,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 209,
                "end": 224,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 237,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 228,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 236,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 281,
      "expression": {
        "type": "CallExpression",
        "start": 238,
        "end": 280,
        "callee": {
          "type": "Identifier",
          "start": 238,
          "end": 244,
          "name": "action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 245,
            "end": 279,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 251,
              "end": 279,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 253,
                  "end": 255,
                  "expression": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 255,
                    "name": "x2",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 283,
      "end": 304,
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 292,
          "end": 301,
          "local": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "name": "x3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 328,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 311,
              "end": 328,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 313,
                "end": 328,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 341,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 340,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 332,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 335,
          "end": 340,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 342,
      "end": 385,
      "expression": {
        "type": "CallExpression",
        "start": 342,
        "end": 384,
        "callee": {
          "type": "Identifier",
          "start": 342,
          "end": 348,
          "name": "action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 349,
            "end": 383,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 355,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 359,
                  "expression": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 359,
                    "name": "x3",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 387,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 391,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 410,
            "name": "x4",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 393,
              "end": 410,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 395,
                "end": 410,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 423,
      "expression": {
        "type": "AssignmentExpression",
        "start": 412,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 412,
          "end": 414,
          "name": "x4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 417,
          "end": 422,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 458,
      "expression": {
        "type": "CallExpression",
        "start": 424,
        "end": 457,
        "callee": {
          "type": "Identifier",
          "start": 424,
          "end": 430,
          "name": "action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 431,
            "end": 456,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 437,
              "end": 456,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 439,
                  "end": 441,
                  "expression": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 441,
                    "name": "x4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 459,
      "end": 477,
      "declaration": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "name": "x4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 479,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 483,
          "end": 502,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 502,
            "name": "x5",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 485,
              "end": 502,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 487,
                "end": 502,
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
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 504,
      "end": 515,
      "expression": {
        "type": "AssignmentExpression",
        "start": 504,
        "end": 514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 506,
          "name": "x5",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 509,
          "end": 514,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 550,
      "expression": {
        "type": "CallExpression",
        "start": 516,
        "end": 549,
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 522,
          "name": "action",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 523,
            "end": 548,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 529,
              "end": 548,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 533,
                  "expression": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 533,
                    "name": "x5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
