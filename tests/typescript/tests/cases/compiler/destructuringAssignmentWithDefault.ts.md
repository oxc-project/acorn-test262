__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 11,
                      "end": 12
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 15,
                        "end": 21
                      },
                      "start": 13,
                      "end": 21
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 11,
                    "end": 21
                  }
                ],
                "start": 9,
                "end": 23
              },
              "start": 7,
              "end": 23
            },
            "start": 6,
            "end": 23
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 26,
            "end": 29
          },
          "definite": false,
          "start": 6,
          "end": 29
        }
      ],
      "declare": false,
      "start": 0,
      "end": 30
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 36
          },
          "init": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 39,
            "end": 40
          },
          "definite": false,
          "start": 35,
          "end": 40
        }
      ],
      "declare": false,
      "start": 31,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 48,
                  "end": 49
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 49
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 44,
              "end": 49
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 43,
          "end": 50
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 54
        },
        "start": 43,
        "end": 54
      },
      "directive": null,
      "start": 42,
      "end": 56
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 89,
        "end": 91
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 104,
                    "end": 109
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 112,
                      "end": 118
                    },
                    "start": 110,
                    "end": 118
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 104,
                  "end": 119
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 125
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 128,
                      "end": 134
                    },
                    "start": 126,
                    "end": 134
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 120,
                  "end": 134
                }
              ],
              "start": 102,
              "end": 136
            },
            "start": 100,
            "end": 136
          },
          "start": 92,
          "end": 136
        }
      ],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "color",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 155
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "color",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 150,
                        "end": 155
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 150,
                      "end": 155
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 162
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 157,
                        "end": 162
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 157,
                      "end": 162
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 148,
                  "end": 164
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 167,
                    "end": 174
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 178,
                    "end": 180
                  },
                  "start": 167,
                  "end": 180
                },
                "definite": false,
                "start": 148,
                "end": 180
              }
            ],
            "declare": false,
            "start": 144,
            "end": 181
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 194
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 189,
                      "end": 194
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 189,
                    "end": 194
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 201
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 201
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 196,
                    "end": 201
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 187,
                "end": 203
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 206,
                  "end": 213
                },
                "operator": "||",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 217,
                  "end": 219
                },
                "start": 206,
                "end": 219
              },
              "start": 187,
              "end": 219
            },
            "directive": null,
            "start": 186,
            "end": 221
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 232
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 236,
                      "end": 243
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 247,
                      "end": 249
                    },
                    "start": 236,
                    "end": 249
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 251,
                    "end": 256
                  },
                  "optional": false,
                  "computed": false,
                  "start": 235,
                  "end": 256
                },
                "definite": false,
                "start": 230,
                "end": 256
              }
            ],
            "declare": false,
            "start": 226,
            "end": 257
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
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 268
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 272,
                      "end": 279
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 283,
                      "end": 285
                    },
                    "start": 272,
                    "end": 285
                  },
                  "property": {
                    "type": "Literal",
                    "value": "color",
                    "raw": "\"color\"",
                    "start": 287,
                    "end": 294
                  },
                  "optional": false,
                  "computed": true,
                  "start": 271,
                  "end": 295
                },
                "definite": false,
                "start": 266,
                "end": 295
              }
            ],
            "declare": false,
            "start": 262,
            "end": 296
          }
        ],
        "start": 138,
        "end": 298
      },
      "expression": false,
      "start": 80,
      "end": 298
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 309,
        "end": 311
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 323,
                    "end": 329
                  },
                  "start": 323,
                  "end": 330
                },
                {
                  "type": "TSOptionalType",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 332,
                    "end": 338
                  },
                  "start": 332,
                  "end": 339
                }
              ],
              "start": 322,
              "end": 340
            },
            "start": 320,
            "end": 340
          },
          "start": 312,
          "end": 340
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 353,
                      "end": 356
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 358,
                      "end": 361
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 352,
                  "end": 362
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 365,
                    "end": 372
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 376,
                    "end": 378
                  },
                  "start": 365,
                  "end": 378
                },
                "definite": false,
                "start": 352,
                "end": 378
              }
            ],
            "declare": false,
            "start": 348,
            "end": 379
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 385,
                    "end": 388
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 393
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 384,
                "end": 394
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 397,
                  "end": 404
                },
                "operator": "||",
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 408,
                  "end": 410
                },
                "start": 397,
                "end": 410
              },
              "start": 384,
              "end": 410
            },
            "directive": null,
            "start": 384,
            "end": 411
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 420,
                  "end": 422
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 426,
                      "end": 433
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 437,
                      "end": 439
                    },
                    "start": 426,
                    "end": 439
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 441,
                    "end": 442
                  },
                  "optional": false,
                  "computed": true,
                  "start": 425,
                  "end": 443
                },
                "definite": false,
                "start": 420,
                "end": 443
              }
            ],
            "declare": false,
            "start": 416,
            "end": 444
          }
        ],
        "start": 342,
        "end": 446
      },
      "expression": false,
      "start": 300,
      "end": 446
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 457,
        "end": 459
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
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
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 472,
                    "end": 477
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 479,
                      "end": 485
                    },
                    "start": 477,
                    "end": 485
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 472,
                  "end": 486
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "width",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 492
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 494,
                      "end": 500
                    },
                    "start": 492,
                    "end": 500
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 487,
                  "end": 500
                }
              ],
              "start": 470,
              "end": 502
            },
            "start": 468,
            "end": 502
          },
          "start": 460,
          "end": 502
        }
      ],
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
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "color",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 521
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "color",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 521
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 516,
                      "end": 521
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 528
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "width",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 523,
                        "end": 528
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 523,
                      "end": 528
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 514,
                  "end": 530
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 533,
                    "end": 540
                  },
                  "operator": "||",
                  "right": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 544,
                    "end": 546
                  },
                  "start": 533,
                  "end": 546
                },
                "definite": false,
                "start": 514,
                "end": 546
              }
            ],
            "declare": false,
            "start": 510,
            "end": 547
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 560
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "color",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 555,
                      "end": 560
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 555,
                    "end": 560
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 567
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "width",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 562,
                      "end": 567
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 562,
                    "end": 567
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 553,
                "end": 569
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 572,
                  "end": 579
                },
                "operator": "||",
                "right": {
                  "type": "ObjectExpression",
                  "properties": [],
                  "start": 583,
                  "end": 585
                },
                "start": 572,
                "end": 585
              },
              "start": 553,
              "end": 585
            },
            "directive": null,
            "start": 552,
            "end": 587
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 596,
                  "end": 598
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 602,
                      "end": 609
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 613,
                      "end": 615
                    },
                    "start": 602,
                    "end": 615
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 617,
                    "end": 622
                  },
                  "optional": false,
                  "computed": false,
                  "start": 601,
                  "end": 622
                },
                "definite": false,
                "start": 596,
                "end": 622
              }
            ],
            "declare": false,
            "start": 592,
            "end": 623
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
                  "typeAnnotation": null,
                  "start": 632,
                  "end": 634
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 645
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 649,
                      "end": 651
                    },
                    "start": 638,
                    "end": 651
                  },
                  "property": {
                    "type": "Literal",
                    "value": "color",
                    "raw": "\"color\"",
                    "start": 653,
                    "end": 660
                  },
                  "optional": false,
                  "computed": true,
                  "start": 637,
                  "end": 661
                },
                "definite": false,
                "start": 632,
                "end": 661
              }
            ],
            "declare": false,
            "start": 628,
            "end": 662
          }
        ],
        "start": 504,
        "end": 664
      },
      "expression": false,
      "start": 448,
      "end": 664
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 675,
        "end": 677
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSStringKeyword",
                  "start": 689,
                  "end": 695
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 697,
                  "end": 703
                }
              ],
              "start": 688,
              "end": 704
            },
            "start": 686,
            "end": 704
          },
          "start": 678,
          "end": 704
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "str",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 717,
                      "end": 720
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "num",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 722,
                      "end": 725
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 726
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "options",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 729,
                    "end": 736
                  },
                  "operator": "||",
                  "right": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 740,
                    "end": 742
                  },
                  "start": 729,
                  "end": 742
                },
                "definite": false,
                "start": 716,
                "end": 742
              }
            ],
            "declare": false,
            "start": 712,
            "end": 743
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "str",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 749,
                    "end": 752
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "num",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 754,
                    "end": 757
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 748,
                "end": 758
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "options",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 761,
                  "end": 768
                },
                "operator": "||",
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 772,
                  "end": 774
                },
                "start": 761,
                "end": 774
              },
              "start": 748,
              "end": 774
            },
            "directive": null,
            "start": 748,
            "end": 775
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
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 784,
                  "end": 786
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "options",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 790,
                      "end": 797
                    },
                    "operator": "||",
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 801,
                      "end": 803
                    },
                    "start": 790,
                    "end": 803
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 805,
                    "end": 806
                  },
                  "optional": false,
                  "computed": true,
                  "start": 789,
                  "end": 807
                },
                "definite": false,
                "start": 784,
                "end": 807
              }
            ],
            "declare": false,
            "start": 780,
            "end": 808
          }
        ],
        "start": 706,
        "end": 810
      },
      "expression": false,
      "start": 666,
      "end": 810
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 810
}
```
