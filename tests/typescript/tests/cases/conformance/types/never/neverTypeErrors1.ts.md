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
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNeverKeyword",
                      "start": 27,
                      "end": 32
                    },
                    "start": 25,
                    "end": 32
                  },
                  "start": 24,
                  "end": 32
                },
                "init": null,
                "definite": false,
                "start": 24,
                "end": 32
              }
            ],
            "declare": false,
            "start": 20,
            "end": 33
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 38,
                "end": 39
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 42,
                "end": 43
              },
              "start": 38,
              "end": 43
            },
            "directive": null,
            "start": 38,
            "end": 44
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 49,
                "end": 50
              },
              "right": {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 53,
                "end": 58
              },
              "start": 49,
              "end": 58
            },
            "directive": null,
            "start": 49,
            "end": 59
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 65
              },
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 68,
                "end": 73
              },
              "start": 64,
              "end": 73
            },
            "directive": null,
            "start": 64,
            "end": 74
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 79,
                "end": 80
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 83,
                "end": 92
              },
              "start": 79,
              "end": 92
            },
            "directive": null,
            "start": 79,
            "end": 93
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 98,
                "end": 99
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 102,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "directive": null,
            "start": 98,
            "end": 107
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 112,
                "end": 113
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 116,
                "end": 118
              },
              "start": 112,
              "end": 118
            },
            "directive": null,
            "start": 112,
            "end": 119
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 125
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 124,
              "end": 127
            },
            "directive": null,
            "start": 124,
            "end": 128
          }
        ],
        "start": 14,
        "end": 130
      },
      "expression": false,
      "start": 0,
      "end": 130
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 143
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 147,
          "end": 152
        },
        "start": 145,
        "end": 152
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": null,
            "start": 159,
            "end": 166
          }
        ],
        "start": 153,
        "end": 168
      },
      "expression": false,
      "start": 132,
      "end": 168
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 181
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 185,
          "end": 190
        },
        "start": 183,
        "end": 190
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 204,
              "end": 205
            },
            "start": 197,
            "end": 206
          }
        ],
        "start": 191,
        "end": 208
      },
      "expression": false,
      "start": 170,
      "end": 208
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 219,
        "end": 221
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 225,
          "end": 230
        },
        "start": 223,
        "end": 230
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 231,
        "end": 234
      },
      "expression": false,
      "start": 210,
      "end": 234
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "init": null,
            "definite": false,
            "start": 247,
            "end": 248
          }
        ],
        "declare": false,
        "start": 241,
        "end": 248
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 252,
          "end": 254
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 252,
        "end": 256
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 258,
        "end": 260
      },
      "start": 236,
      "end": 260
    },
    {
      "type": "ForInStatement",
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 272,
              "end": 273
            },
            "init": null,
            "definite": false,
            "start": 272,
            "end": 273
          }
        ],
        "declare": false,
        "start": 266,
        "end": 273
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f4",
          "optional": false,
          "typeAnnotation": null,
          "start": 277,
          "end": 279
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 277,
        "end": 281
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 283,
        "end": 285
      },
      "start": 261,
      "end": 285
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f5",
        "optional": false,
        "typeAnnotation": null,
        "start": 296,
        "end": 298
      },
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNeverKeyword",
                        "start": 314,
                        "end": 319
                      },
                      "start": 314,
                      "end": 321
                    },
                    "start": 312,
                    "end": 321
                  },
                  "start": 311,
                  "end": 321
                },
                "init": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 324,
                  "end": 326
                },
                "definite": false,
                "start": 311,
                "end": 326
              }
            ],
            "declare": false,
            "start": 307,
            "end": 327
          }
        ],
        "start": 301,
        "end": 336
      },
      "expression": false,
      "start": 287,
      "end": 336
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 371
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 378,
              "end": 381
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 383,
                  "end": 386
                },
                "start": 383,
                "end": 386
              },
              "start": 381,
              "end": 386
            },
            "accessibility": null,
            "static": false,
            "start": 378,
            "end": 387
          }
        ],
        "start": 372,
        "end": 389
      },
      "declare": false,
      "start": 360,
      "end": 389
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 401,
        "end": 402
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
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 409,
              "end": 412
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "\"b\"",
                  "start": 414,
                  "end": 417
                },
                "start": 414,
                "end": 417
              },
              "start": 412,
              "end": 417
            },
            "accessibility": null,
            "static": false,
            "start": 409,
            "end": 418
          }
        ],
        "start": 403,
        "end": 420
      },
      "declare": false,
      "start": 391,
      "end": 420
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null,
        "start": 427,
        "end": 432
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 435,
              "end": 436
            },
            "typeArguments": null,
            "start": 435,
            "end": 436
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 440
            },
            "typeArguments": null,
            "start": 439,
            "end": 440
          }
        ],
        "start": 435,
        "end": 440
      },
      "declare": false,
      "start": 422,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 456
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
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
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 462,
                "end": 467
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Union",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 469,
                      "end": 474
                    },
                    "typeArguments": null,
                    "start": 469,
                    "end": 474
                  },
                  "start": 469,
                  "end": 476
                },
                "start": 467,
                "end": 476
              },
              "accessibility": null,
              "static": false,
              "start": 462,
              "end": 476
            }
          ],
          "start": 460,
          "end": 478
        },
        "start": 458,
        "end": 478
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 502,
                    "end": 507
                  },
                  "value": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 509,
                    "end": 511
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 502,
                  "end": 511
                }
              ],
              "start": 492,
              "end": 518
            },
            "start": 485,
            "end": 519
          }
        ],
        "start": 479,
        "end": 521
      },
      "expression": false,
      "start": 443,
      "end": 521
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 521
}
```
