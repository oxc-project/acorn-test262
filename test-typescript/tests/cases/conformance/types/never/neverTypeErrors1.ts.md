__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 14,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 20,
            "end": 33,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 24,
                "end": 32,
                "id": {
                  "type": "Identifier",
                  "start": 24,
                  "end": 32,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 27,
                      "end": 32
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
            "start": 38,
            "end": 44,
            "expression": {
              "type": "AssignmentExpression",
              "start": 38,
              "end": 43,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 42,
                "end": 43,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 49,
            "end": 59,
            "expression": {
              "type": "AssignmentExpression",
              "start": 49,
              "end": 58,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 53,
                "end": 58,
                "value": "abc",
                "raw": "\"abc\""
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 64,
            "end": 74,
            "expression": {
              "type": "AssignmentExpression",
              "start": 64,
              "end": 73,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 64,
                "end": 65,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 73,
                "value": false,
                "raw": "false"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 79,
            "end": 93,
            "expression": {
              "type": "AssignmentExpression",
              "start": 79,
              "end": 92,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 83,
                "end": 92,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 98,
            "end": 107,
            "expression": {
              "type": "AssignmentExpression",
              "start": 98,
              "end": 106,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 98,
                "end": 99,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 102,
                "end": 106,
                "value": null,
                "raw": "null"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 112,
            "end": 119,
            "expression": {
              "type": "AssignmentExpression",
              "start": 112,
              "end": 118,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 112,
                "end": 113,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "ObjectExpression",
                "start": 116,
                "end": 118,
                "properties": []
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 124,
            "end": 128,
            "expression": {
              "type": "CallExpression",
              "start": 124,
              "end": 127,
              "callee": {
                "type": "Identifier",
                "start": 124,
                "end": 125,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 132,
      "end": 168,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 143,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 153,
        "end": 168,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 159,
            "end": 166,
            "argument": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 145,
        "end": 152,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 147,
          "end": 152
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 170,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 179,
        "end": 181,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 191,
        "end": 208,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 197,
            "end": 206,
            "argument": {
              "type": "Literal",
              "start": 204,
              "end": 205,
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 183,
        "end": 190,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 185,
          "end": 190
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 210,
      "end": 234,
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 221,
        "name": "f4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 231,
        "end": 234,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 223,
        "end": 230,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 225,
          "end": 230
        }
      }
    },
    {
      "type": "ForOfStatement",
      "start": 236,
      "end": 260,
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "start": 241,
        "end": 248,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 247,
            "end": 248,
            "id": {
              "type": "Identifier",
              "start": 247,
              "end": 248,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 252,
        "end": 256,
        "callee": {
          "type": "Identifier",
          "start": 252,
          "end": 254,
          "name": "f4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 260,
        "body": []
      }
    },
    {
      "type": "ForInStatement",
      "start": 261,
      "end": 285,
      "left": {
        "type": "VariableDeclaration",
        "start": 266,
        "end": 273,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 272,
            "end": 273,
            "id": {
              "type": "Identifier",
              "start": 272,
              "end": 273,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": null,
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "right": {
        "type": "CallExpression",
        "start": 277,
        "end": 281,
        "callee": {
          "type": "Identifier",
          "start": 277,
          "end": 279,
          "name": "f4",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 283,
        "end": 285,
        "body": []
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 287,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 296,
        "end": 298,
        "name": "f5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 336,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 307,
            "end": 327,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 311,
                "end": 326,
                "id": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 321,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 312,
                    "end": 321,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 314,
                      "end": 321,
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 314,
                        "end": 319
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 324,
                  "end": 326,
                  "elements": []
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 360,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 370,
        "end": 371,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 372,
        "end": 389,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 378,
            "end": 387,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 378,
              "end": 381,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 381,
              "end": 386,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 383,
                "end": 386,
                "literal": {
                  "type": "Literal",
                  "start": 383,
                  "end": 386,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 391,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 401,
        "end": 402,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 403,
        "end": 420,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 409,
            "end": 418,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 417,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 414,
                "end": 417,
                "literal": {
                  "type": "Literal",
                  "start": 414,
                  "end": 417,
                  "value": "b",
                  "raw": "\"b\""
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 422,
      "end": 441,
      "id": {
        "type": "Identifier",
        "start": 427,
        "end": 432,
        "name": "Union",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 435,
        "end": 440,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 435,
            "end": 436,
            "typeName": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 439,
            "end": 440,
            "typeName": {
              "type": "Identifier",
              "start": 439,
              "end": 440,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 443,
      "end": 521,
      "id": {
        "type": "Identifier",
        "start": 452,
        "end": 456,
        "name": "func",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 479,
        "end": 521,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 485,
            "end": 519,
            "argument": {
              "type": "ObjectExpression",
              "start": 492,
              "end": 518,
              "properties": [
                {
                  "type": "Property",
                  "start": 502,
                  "end": 511,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 502,
                    "end": 507,
                    "name": "value",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "start": 509,
                    "end": 511,
                    "elements": []
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 458,
        "end": 478,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 460,
          "end": 478,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 462,
              "end": 476,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 462,
                "end": 467,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 467,
                "end": 476,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 469,
                  "end": 476,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 469,
                    "end": 474,
                    "typeName": {
                      "type": "Identifier",
                      "start": 469,
                      "end": 474,
                      "name": "Union",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
