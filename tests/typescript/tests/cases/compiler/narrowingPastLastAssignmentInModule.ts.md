__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 550,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 31,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 31,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "decorators": [],
        "name": "action",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 16,
          "end": 27,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 17,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 19,
              "end": 27,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 19,
                "end": 27,
                "decorators": [],
                "name": "Function",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 97,
      "end": 128,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 104,
        "end": 128,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 108,
            "end": 127,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 127,
              "decorators": [],
              "name": "x1",
              "optional": false,
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
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "let"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 140,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 139,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 131,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 134,
          "end": 139,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 141,
      "end": 184,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 141,
        "end": 183,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 148,
            "end": 182,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 154,
              "end": 182,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 156,
                  "end": 158,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 156,
                    "end": 158,
                    "decorators": [],
                    "name": "x1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 141,
          "end": 147,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 186,
      "end": 200,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 195,
          "end": 197,
          "exported": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 195,
            "end": 197,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 224,
            "decorators": [],
            "name": "x2",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 226,
      "end": 237,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 226,
        "end": 236,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 226,
          "end": 228,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 231,
          "end": 236,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 238,
      "end": 281,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 238,
        "end": 280,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 245,
            "end": 279,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 251,
              "end": 279,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 253,
                  "end": 255,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 255,
                    "decorators": [],
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 238,
          "end": 244,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 283,
      "end": 304,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 292,
          "end": 301,
          "exported": {
            "type": "Identifier",
            "start": 298,
            "end": 301,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 292,
            "end": 294,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 328,
            "decorators": [],
            "name": "x3",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 330,
      "end": 341,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 330,
        "end": 340,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 330,
          "end": 332,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 335,
          "end": 340,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 342,
      "end": 385,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 342,
        "end": 384,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 349,
            "end": 383,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 355,
              "end": 383,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 357,
                  "end": 359,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 357,
                    "end": 359,
                    "decorators": [],
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 342,
          "end": 348,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 391,
            "end": 410,
            "decorators": [],
            "name": "x4",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 423,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 412,
        "end": 422,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 412,
          "end": 414,
          "decorators": [],
          "name": "x4",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 417,
          "end": 422,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 424,
      "end": 458,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 424,
        "end": 457,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 431,
            "end": 456,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 437,
              "end": 456,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 439,
                  "end": 441,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 441,
                    "decorators": [],
                    "name": "x4",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 424,
          "end": 430,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 459,
      "end": 477,
      "declaration": {
        "type": "Identifier",
        "start": 474,
        "end": 476,
        "decorators": [],
        "name": "x4",
        "optional": false,
        "typeAnnotation": null
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 483,
            "end": 502,
            "decorators": [],
            "name": "x5",
            "optional": false,
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
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 504,
      "end": 515,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 504,
        "end": 514,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 504,
          "end": 506,
          "decorators": [],
          "name": "x5",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 509,
          "end": 514,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 516,
      "end": 550,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 516,
        "end": 549,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 523,
            "end": 548,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 529,
              "end": 548,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 531,
                  "end": 533,
                  "directive": null,
                  "expression": {
                    "type": "Identifier",
                    "start": 531,
                    "end": 533,
                    "decorators": [],
                    "name": "x5",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [],
            "returnType": null,
            "typeParameters": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 516,
          "end": 522,
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
