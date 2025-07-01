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
        "name": "makeArrayG",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "items",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 31
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 34
                },
                "typeArguments": null,
                "start": 33,
                "end": 34
              },
              "start": 33,
              "end": 36
            },
            "start": 31,
            "end": 36
          },
          "value": null,
          "start": 23,
          "end": 36
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 39,
              "end": 40
            },
            "typeArguments": null,
            "start": 39,
            "end": 40
          },
          "start": 39,
          "end": 42
        },
        "start": 37,
        "end": 42
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "items",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 57
            },
            "start": 45,
            "end": 58
          }
        ],
        "start": 43,
        "end": 60
      },
      "expression": false,
      "start": 0,
      "end": 60
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
            "name": "a1Ga",
            "optional": false,
            "typeAnnotation": null,
            "start": 65,
            "end": 69
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 82
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 83,
                "end": 84
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 86,
                "end": 88
              }
            ],
            "optional": false,
            "start": 72,
            "end": 89
          },
          "definite": false,
          "start": 65,
          "end": 89
        }
      ],
      "declare": false,
      "start": 61,
      "end": 90
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
            "name": "a1Gb",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 111
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 114,
              "end": 124
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 125,
                  "end": 128
                }
              ],
              "start": 124,
              "end": 129
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 130,
                "end": 131
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 133,
                "end": 135
              }
            ],
            "optional": false,
            "start": 114,
            "end": 136
          },
          "definite": false,
          "start": 107,
          "end": 136
        }
      ],
      "declare": false,
      "start": 103,
      "end": 137
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
            "name": "a1Gc",
            "optional": false,
            "typeAnnotation": null,
            "start": 143,
            "end": 147
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 160
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Object",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 167
                  },
                  "typeArguments": null,
                  "start": 161,
                  "end": 167
                }
              ],
              "start": 160,
              "end": 168
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 169,
                "end": 170
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 172,
                "end": 174
              }
            ],
            "optional": false,
            "start": 150,
            "end": 175
          },
          "definite": false,
          "start": 143,
          "end": 175
        }
      ],
      "declare": false,
      "start": 139,
      "end": 176
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
            "name": "a1Gd",
            "optional": false,
            "typeAnnotation": null,
            "start": 182,
            "end": 186
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 189,
              "end": 199
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 200,
                  "end": 206
                }
              ],
              "start": 199,
              "end": 207
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 208,
                "end": 209
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 211,
                "end": 213
              }
            ],
            "optional": false,
            "start": 189,
            "end": 214
          },
          "definite": false,
          "start": 182,
          "end": 214
        }
      ],
      "declare": false,
      "start": 178,
      "end": 215
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "makeArrayGOpt",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 248
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 250
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 249,
            "end": 250
          }
        ],
        "start": 248,
        "end": 251
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item1",
          "optional": true,
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
                "start": 260,
                "end": 261
              },
              "typeArguments": null,
              "start": 260,
              "end": 261
            },
            "start": 258,
            "end": 261
          },
          "start": 252,
          "end": 261
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item2",
          "optional": true,
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
                "start": 271,
                "end": 272
              },
              "typeArguments": null,
              "start": 271,
              "end": 272
            },
            "start": 269,
            "end": 272
          },
          "start": 263,
          "end": 272
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "item3",
          "optional": true,
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
                "start": 282,
                "end": 283
              },
              "typeArguments": null,
              "start": 282,
              "end": 283
            },
            "start": 280,
            "end": 283
          },
          "start": 274,
          "end": 283
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 304
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 311
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 318
                }
              ],
              "start": 298,
              "end": 319
            },
            "start": 291,
            "end": 320
          }
        ],
        "start": 285,
        "end": 322
      },
      "expression": false,
      "start": 226,
      "end": 322
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
            "name": "a2Ga",
            "optional": false,
            "typeAnnotation": null,
            "start": 327,
            "end": 331
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayGOpt",
              "optional": false,
              "typeAnnotation": null,
              "start": 334,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 348,
                "end": 349
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 351,
                "end": 353
              }
            ],
            "optional": false,
            "start": 334,
            "end": 354
          },
          "definite": false,
          "start": 327,
          "end": 354
        }
      ],
      "declare": false,
      "start": 323,
      "end": 355
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
            "name": "a2Gb",
            "optional": false,
            "typeAnnotation": null,
            "start": 361,
            "end": 365
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 378
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSAnyKeyword",
                  "start": 379,
                  "end": 382
                }
              ],
              "start": 378,
              "end": 383
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 384,
                "end": 385
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 387,
                "end": 389
              }
            ],
            "optional": false,
            "start": 368,
            "end": 390
          },
          "definite": false,
          "start": 361,
          "end": 390
        }
      ],
      "declare": false,
      "start": 357,
      "end": 391
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
            "name": "a2Gc",
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 400
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "makeArrayG",
              "optional": false,
              "typeAnnotation": null,
              "start": 403,
              "end": 413
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 414,
                    "end": 417
                  },
                  "start": 414,
                  "end": 419
                }
              ],
              "start": 413,
              "end": 420
            },
            "arguments": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 421,
                "end": 422
              },
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 424,
                "end": 426
              }
            ],
            "optional": false,
            "start": 403,
            "end": 427
          },
          "definite": false,
          "start": 396,
          "end": 427
        }
      ],
      "declare": false,
      "start": 392,
      "end": 428
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 437
}
```
