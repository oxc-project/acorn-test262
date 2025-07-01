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
                      "start": 27,
                      "end": 30
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
                            "start": 36,
                            "end": 42
                          },
                          "start": 34,
                          "end": 42
                        },
                        "start": 31,
                        "end": 42
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      },
                      "start": 43,
                      "end": 49
                    },
                    "accessibility": null,
                    "readonly": false,
                    "static": false,
                    "start": 27,
                    "end": 50
                  }
                ],
                "start": 21,
                "end": 52
              },
              "start": 19,
              "end": 52
            },
            "start": 12,
            "end": 52
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 52
        }
      ],
      "declare": true,
      "start": 0,
      "end": 52
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null,
        "start": 58,
        "end": 63
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 67,
            "end": 73
          },
          {
            "type": "TSStringKeyword",
            "start": 75,
            "end": 81
          },
          {
            "type": "TSStringKeyword",
            "start": 83,
            "end": 89
          }
        ],
        "start": 66,
        "end": 90
      },
      "declare": false,
      "start": 53,
      "end": 91
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
                  "start": 104,
                  "end": 109
                },
                "typeArguments": null,
                "start": 104,
                "end": 109
              },
              "start": 102,
              "end": 109
            },
            "start": 96,
            "end": 109
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 113,
                "end": 114
              },
              {
                "type": "Literal",
                "value": "mower",
                "raw": "\"mower\"",
                "start": 116,
                "end": 123
              },
              {
                "type": "Literal",
                "value": "mowing",
                "raw": "\"mowing\"",
                "start": 125,
                "end": 133
              }
            ],
            "start": 112,
            "end": 134
          },
          "definite": false,
          "start": 96,
          "end": 134
        }
      ],
      "declare": false,
      "start": 92,
      "end": 135
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
            "name": "robotB",
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
                  "start": 148,
                  "end": 153
                },
                "typeArguments": null,
                "start": 148,
                "end": 153
              },
              "start": 146,
              "end": 153
            },
            "start": 140,
            "end": 153
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 157,
                "end": 158
              },
              {
                "type": "Literal",
                "value": "trimmer",
                "raw": "\"trimmer\"",
                "start": 160,
                "end": 169
              },
              {
                "type": "Literal",
                "value": "trimming",
                "raw": "\"trimming\"",
                "start": 171,
                "end": 181
              }
            ],
            "start": 156,
            "end": 182
          },
          "definite": false,
          "start": 140,
          "end": 182
        }
      ],
      "declare": false,
      "start": 136,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              null,
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA",
                "optional": false,
                "typeAnnotation": null,
                "start": 193,
                "end": 198
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 190,
            "end": 199
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 202,
            "end": 208
          },
          "definite": false,
          "start": 190,
          "end": 208
        }
      ],
      "declare": false,
      "start": 186,
      "end": 209
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberB",
                "optional": false,
                "typeAnnotation": null,
                "start": 215,
                "end": 222
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 223
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null,
            "start": 226,
            "end": 232
          },
          "definite": false,
          "start": 214,
          "end": 232
        }
      ],
      "declare": false,
      "start": 210,
      "end": 233
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 247
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 249,
                "end": 255
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "skillA2",
                "optional": false,
                "typeAnnotation": null,
                "start": 257,
                "end": 264
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 238,
            "end": 265
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 268,
            "end": 274
          },
          "definite": false,
          "start": 238,
          "end": 274
        }
      ],
      "declare": false,
      "start": 234,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberC2",
                "optional": false,
                "typeAnnotation": null,
                "start": 282,
                "end": 290
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 291
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 295,
                "end": 296
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 298,
                "end": 306
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 308,
                "end": 324
              }
            ],
            "start": 294,
            "end": 325
          },
          "definite": false,
          "start": 281,
          "end": 325
        }
      ],
      "declare": false,
      "start": 277,
      "end": 326
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberC",
                "optional": false,
                "typeAnnotation": null,
                "start": 332,
                "end": 339
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "nameC",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 346
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "skillC",
                "optional": false,
                "typeAnnotation": null,
                "start": 348,
                "end": 354
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 331,
            "end": 355
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 359,
                "end": 360
              },
              {
                "type": "Literal",
                "value": "edging",
                "raw": "\"edging\"",
                "start": 362,
                "end": 370
              },
              {
                "type": "Literal",
                "value": "Trimming edges",
                "raw": "\"Trimming edges\"",
                "start": 372,
                "end": 388
              }
            ],
            "start": 358,
            "end": 389
          },
          "definite": false,
          "start": 331,
          "end": 389
        }
      ],
      "declare": false,
      "start": 327,
      "end": 390
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "numberA3",
                "optional": false,
                "typeAnnotation": null,
                "start": 397,
                "end": 405
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "robotAInfo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 420
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 407,
                "end": 420
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 396,
            "end": 421
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null,
            "start": 424,
            "end": 430
          },
          "definite": false,
          "start": 396,
          "end": 430
        }
      ],
      "declare": false,
      "start": 392,
      "end": 431
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null,
          "start": 437,
          "end": 442
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "nameA2",
          "optional": false,
          "typeAnnotation": null,
          "start": 446,
          "end": 452
        },
        "start": 437,
        "end": 452
      },
      "consequent": {
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
                  "start": 460,
                  "end": 467
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 468,
                  "end": 471
                },
                "optional": false,
                "computed": false,
                "start": 460,
                "end": 471
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "skillA2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 472,
                  "end": 479
                }
              ],
              "optional": false,
              "start": 460,
              "end": 480
            },
            "directive": null,
            "start": 460,
            "end": 481
          }
        ],
        "start": 454,
        "end": 483
      },
      "alternate": null,
      "start": 433,
      "end": 483
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 483
}
```
