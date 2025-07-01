__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 95
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        },
        "start": 97,
        "end": 103
      },
      "body": null,
      "expression": false,
      "start": 77,
      "end": 104
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 118,
                          "end": 119
                        },
                        "start": 118,
                        "end": 119
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 122,
                          "end": 123
                        },
                        "start": 122,
                        "end": 123
                      }
                    ],
                    "start": 118,
                    "end": 123
                  },
                  "start": 116,
                  "end": 123
                },
                "start": 115,
                "end": 123
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 126,
                "end": 127
              },
              "definite": false,
              "start": 115,
              "end": 127
            }
          ],
          "declare": false,
          "start": 111,
          "end": 128
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 140,
                          "end": 141
                        },
                        "start": 140,
                        "end": 141
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 144,
                          "end": 145
                        },
                        "start": 144,
                        "end": 145
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 148,
                          "end": 149
                        },
                        "start": 148,
                        "end": 149
                      }
                    ],
                    "start": 140,
                    "end": 149
                  },
                  "start": 138,
                  "end": 149
                },
                "start": 137,
                "end": 149
              },
              "init": null,
              "definite": false,
              "start": 137,
              "end": 149
            }
          ],
          "declare": false,
          "start": 133,
          "end": 150
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 160,
                            "end": 161
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 164,
                            "end": 165
                          },
                          "start": 160,
                          "end": 165
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 169,
                          "end": 170
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 158,
                        "end": 170
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 156,
                    "end": 172
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 176,
                          "end": 177
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 179,
                          "end": 180
                        }
                      ],
                      "start": 175,
                      "end": 181
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 190
                      },
                      "typeArguments": null,
                      "start": 185,
                      "end": 190
                    },
                    "start": 175,
                    "end": 190
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 156,
                  "end": 190
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 191
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 194,
              "end": 196
            },
            "start": 155,
            "end": 196
          },
          "directive": null,
          "start": 155,
          "end": 197
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 212,
                      "end": 213
                    },
                    "start": 212,
                    "end": 213
                  },
                  "start": 210,
                  "end": 213
                },
                "start": 208,
                "end": 213
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 216,
                "end": 217
              },
              "definite": false,
              "start": 208,
              "end": 217
            }
          ],
          "declare": false,
          "start": 202,
          "end": 218
        }
      ],
      "start": 105,
      "end": 220
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 234,
                          "end": 235
                        },
                        "start": 234,
                        "end": 235
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 238,
                          "end": 239
                        },
                        "start": 238,
                        "end": 239
                      }
                    ],
                    "start": 234,
                    "end": 239
                  },
                  "start": 232,
                  "end": 239
                },
                "start": 231,
                "end": 239
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 242,
                "end": 243
              },
              "definite": false,
              "start": 231,
              "end": 243
            }
          ],
          "declare": false,
          "start": 227,
          "end": 244
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 256,
                          "end": 257
                        },
                        "start": 256,
                        "end": 257
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 260,
                          "end": 261
                        },
                        "start": 260,
                        "end": 261
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 264,
                          "end": 265
                        },
                        "start": 264,
                        "end": 265
                      }
                    ],
                    "start": 256,
                    "end": 265
                  },
                  "start": 254,
                  "end": 265
                },
                "start": 253,
                "end": 265
              },
              "init": null,
              "definite": false,
              "start": 253,
              "end": 265
            }
          ],
          "declare": false,
          "start": 249,
          "end": 266
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
                  "type": "AssignmentPattern",
                  "decorators": [],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 275,
                          "end": 276
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 279,
                          "end": 280
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 274,
                        "end": 280
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 272,
                    "end": 282
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 286,
                          "end": 287
                        },
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 289,
                            "end": 290
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 293,
                            "end": 294
                          },
                          "start": 289,
                          "end": 294
                        }
                      ],
                      "start": 285,
                      "end": 295
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 299,
                        "end": 304
                      },
                      "typeArguments": null,
                      "start": 299,
                      "end": 304
                    },
                    "start": 285,
                    "end": 304
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 304
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 305
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [],
              "start": 308,
              "end": 310
            },
            "start": 271,
            "end": 310
          },
          "directive": null,
          "start": 271,
          "end": 311
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 326,
                      "end": 327
                    },
                    "start": 326,
                    "end": 327
                  },
                  "start": 324,
                  "end": 327
                },
                "start": 322,
                "end": 327
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 331
              },
              "definite": false,
              "start": 322,
              "end": 331
            }
          ],
          "declare": false,
          "start": 316,
          "end": 332
        }
      ],
      "start": 221,
      "end": 334
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 348,
                          "end": 349
                        },
                        "start": 348,
                        "end": 349
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 352,
                          "end": 353
                        },
                        "start": 352,
                        "end": 353
                      }
                    ],
                    "start": 348,
                    "end": 353
                  },
                  "start": 346,
                  "end": 353
                },
                "start": 345,
                "end": 353
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 356,
                "end": 357
              },
              "definite": false,
              "start": 345,
              "end": 357
            }
          ],
          "declare": false,
          "start": 341,
          "end": 358
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 370,
                          "end": 371
                        },
                        "start": 370,
                        "end": 371
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 374,
                          "end": 375
                        },
                        "start": 374,
                        "end": 375
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 378,
                          "end": 379
                        },
                        "start": 378,
                        "end": 379
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 382,
                          "end": 383
                        },
                        "start": 382,
                        "end": 383
                      }
                    ],
                    "start": 370,
                    "end": 383
                  },
                  "start": 368,
                  "end": 383
                },
                "start": 367,
                "end": 383
              },
              "init": null,
              "definite": false,
              "start": 367,
              "end": 383
            }
          ],
          "declare": false,
          "start": 363,
          "end": 384
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
                  "type": "AssignmentPattern",
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 394,
                            "end": 395
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 398,
                            "end": 399
                          },
                          "start": 394,
                          "end": 399
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 403,
                          "end": 404
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 392,
                        "end": 404
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 390,
                    "end": 406
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 410,
                          "end": 411
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 413,
                          "end": 414
                        }
                      ],
                      "start": 409,
                      "end": 415
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 424
                      },
                      "typeArguments": null,
                      "start": 419,
                      "end": 424
                    },
                    "start": 409,
                    "end": 424
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 424
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 389,
              "end": 425
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 430,
                        "end": 431
                      },
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 433,
                        "end": 434
                      }
                    ],
                    "start": 429,
                    "end": 435
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 439,
                      "end": 444
                    },
                    "typeArguments": null,
                    "start": 439,
                    "end": 444
                  },
                  "start": 429,
                  "end": 444
                }
              ],
              "start": 428,
              "end": 445
            },
            "start": 389,
            "end": 445
          },
          "directive": null,
          "start": 389,
          "end": 446
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 461,
                          "end": 462
                        },
                        "start": 461,
                        "end": 462
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 465,
                          "end": 466
                        },
                        "start": 465,
                        "end": 466
                      }
                    ],
                    "start": 461,
                    "end": 466
                  },
                  "start": 459,
                  "end": 466
                },
                "start": 457,
                "end": 466
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 469,
                "end": 470
              },
              "definite": false,
              "start": 457,
              "end": 470
            }
          ],
          "declare": false,
          "start": 451,
          "end": 471
        }
      ],
      "start": 335,
      "end": 473
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 487,
                          "end": 488
                        },
                        "start": 487,
                        "end": 488
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 491,
                          "end": 492
                        },
                        "start": 491,
                        "end": 492
                      }
                    ],
                    "start": 487,
                    "end": 492
                  },
                  "start": 485,
                  "end": 492
                },
                "start": 484,
                "end": 492
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 495,
                "end": 496
              },
              "definite": false,
              "start": 484,
              "end": 496
            }
          ],
          "declare": false,
          "start": 480,
          "end": 497
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 509,
                          "end": 510
                        },
                        "start": 509,
                        "end": 510
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 513,
                          "end": 514
                        },
                        "start": 513,
                        "end": 514
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 517,
                          "end": 518
                        },
                        "start": 517,
                        "end": 518
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 521,
                          "end": 522
                        },
                        "start": 521,
                        "end": 522
                      }
                    ],
                    "start": 509,
                    "end": 522
                  },
                  "start": 507,
                  "end": 522
                },
                "start": 506,
                "end": 522
              },
              "init": null,
              "definite": false,
              "start": 506,
              "end": 522
            }
          ],
          "declare": false,
          "start": 502,
          "end": 523
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
                  "type": "AssignmentPattern",
                  "decorators": [],
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 533
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 536,
                          "end": 537
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false,
                        "start": 531,
                        "end": 537
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 529,
                    "end": 539
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 543,
                            "end": 544
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 547,
                            "end": 548
                          },
                          "start": 543,
                          "end": 548
                        },
                        {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 550,
                          "end": 551
                        }
                      ],
                      "start": 542,
                      "end": 552
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 556,
                        "end": 561
                      },
                      "typeArguments": null,
                      "start": 556,
                      "end": 561
                    },
                    "start": 542,
                    "end": 561
                  },
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 529,
                  "end": 561
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 528,
              "end": 562
            },
            "right": {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Literal",
                        "value": 8,
                        "raw": "8",
                        "start": 567,
                        "end": 568
                      },
                      {
                        "type": "Literal",
                        "value": 9,
                        "raw": "9",
                        "start": 570,
                        "end": 571
                      }
                    ],
                    "start": 566,
                    "end": 572
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 576,
                      "end": 581
                    },
                    "typeArguments": null,
                    "start": 576,
                    "end": 581
                  },
                  "start": 566,
                  "end": 581
                }
              ],
              "start": 565,
              "end": 582
            },
            "start": 528,
            "end": 582
          },
          "directive": null,
          "start": 528,
          "end": 583
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 598,
                          "end": 599
                        },
                        "start": 598,
                        "end": 599
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 602,
                          "end": 603
                        },
                        "start": 602,
                        "end": 603
                      }
                    ],
                    "start": 598,
                    "end": 603
                  },
                  "start": 596,
                  "end": 603
                },
                "start": 594,
                "end": 603
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 606,
                "end": 607
              },
              "definite": false,
              "start": 594,
              "end": 607
            }
          ],
          "declare": false,
          "start": 588,
          "end": 608
        }
      ],
      "start": 474,
      "end": 610
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 676,
                          "end": 677
                        },
                        "start": 676,
                        "end": 677
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 680,
                          "end": 681
                        },
                        "start": 680,
                        "end": 681
                      }
                    ],
                    "start": 676,
                    "end": 681
                  },
                  "start": 674,
                  "end": 681
                },
                "start": 673,
                "end": 681
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 684,
                "end": 685
              },
              "definite": false,
              "start": 673,
              "end": 685
            }
          ],
          "declare": false,
          "start": 669,
          "end": 686
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 698,
                          "end": 699
                        },
                        "start": 698,
                        "end": 699
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 702,
                          "end": 703
                        },
                        "start": 702,
                        "end": 703
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 706,
                          "end": 707
                        },
                        "start": 706,
                        "end": 707
                      }
                    ],
                    "start": 698,
                    "end": 707
                  },
                  "start": 696,
                  "end": 707
                },
                "start": 695,
                "end": 707
              },
              "init": null,
              "definite": false,
              "start": 695,
              "end": 707
            }
          ],
          "declare": false,
          "start": 691,
          "end": 708
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 718,
                                "end": 719
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 722,
                                "end": 723
                              },
                              "start": 718,
                              "end": 723
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 727,
                              "end": 728
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 716,
                            "end": 728
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 714,
                        "end": 730
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 734,
                              "end": 735
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 737,
                              "end": 738
                            }
                          ],
                          "start": 733,
                          "end": 739
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 743,
                            "end": 748
                          },
                          "typeArguments": null,
                          "start": 743,
                          "end": 748
                        },
                        "start": 733,
                        "end": 748
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 714,
                      "end": 748
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 713,
                  "end": 749
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 752,
                  "end": 754
                },
                "start": 713,
                "end": 754
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 756,
                  "end": 757
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 756,
                "end": 759
              }
            ],
            "start": 713,
            "end": 759
          },
          "directive": null,
          "start": 713,
          "end": 760
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 775,
                      "end": 776
                    },
                    "start": 775,
                    "end": 776
                  },
                  "start": 773,
                  "end": 776
                },
                "start": 771,
                "end": 776
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 779,
                "end": 780
              },
              "definite": false,
              "start": 771,
              "end": 780
            }
          ],
          "declare": false,
          "start": 765,
          "end": 781
        }
      ],
      "start": 663,
      "end": 783
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 797,
                          "end": 798
                        },
                        "start": 797,
                        "end": 798
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 801,
                          "end": 802
                        },
                        "start": 801,
                        "end": 802
                      }
                    ],
                    "start": 797,
                    "end": 802
                  },
                  "start": 795,
                  "end": 802
                },
                "start": 794,
                "end": 802
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 805,
                "end": 806
              },
              "definite": false,
              "start": 794,
              "end": 806
            }
          ],
          "declare": false,
          "start": 790,
          "end": 807
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 819,
                          "end": 820
                        },
                        "start": 819,
                        "end": 820
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 823,
                          "end": 824
                        },
                        "start": 823,
                        "end": 824
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 827,
                          "end": 828
                        },
                        "start": 827,
                        "end": 828
                      }
                    ],
                    "start": 819,
                    "end": 828
                  },
                  "start": 817,
                  "end": 828
                },
                "start": 816,
                "end": 828
              },
              "init": null,
              "definite": false,
              "start": 816,
              "end": 828
            }
          ],
          "declare": false,
          "start": 812,
          "end": 829
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 838,
                              "end": 839
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 842,
                              "end": 843
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 837,
                            "end": 843
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 835,
                        "end": 845
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 849,
                              "end": 850
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 852,
                                "end": 853
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 856,
                                "end": 857
                              },
                              "start": 852,
                              "end": 857
                            }
                          ],
                          "start": 848,
                          "end": 858
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 862,
                            "end": 867
                          },
                          "typeArguments": null,
                          "start": 862,
                          "end": 867
                        },
                        "start": 848,
                        "end": 867
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 835,
                      "end": 867
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 834,
                  "end": 868
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 871,
                  "end": 873
                },
                "start": 834,
                "end": 873
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 875,
                  "end": 876
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 875,
                "end": 878
              }
            ],
            "start": 834,
            "end": 878
          },
          "directive": null,
          "start": 834,
          "end": 879
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 894,
                      "end": 895
                    },
                    "start": 894,
                    "end": 895
                  },
                  "start": 892,
                  "end": 895
                },
                "start": 890,
                "end": 895
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 898,
                "end": 899
              },
              "definite": false,
              "start": 890,
              "end": 899
            }
          ],
          "declare": false,
          "start": 884,
          "end": 900
        }
      ],
      "start": 784,
      "end": 902
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 916,
                          "end": 917
                        },
                        "start": 916,
                        "end": 917
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 920,
                          "end": 921
                        },
                        "start": 920,
                        "end": 921
                      }
                    ],
                    "start": 916,
                    "end": 921
                  },
                  "start": 914,
                  "end": 921
                },
                "start": 913,
                "end": 921
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 924,
                "end": 925
              },
              "definite": false,
              "start": 913,
              "end": 925
            }
          ],
          "declare": false,
          "start": 909,
          "end": 926
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 938,
                          "end": 939
                        },
                        "start": 938,
                        "end": 939
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 942,
                          "end": 943
                        },
                        "start": 942,
                        "end": 943
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 946,
                          "end": 947
                        },
                        "start": 946,
                        "end": 947
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 950,
                          "end": 951
                        },
                        "start": 950,
                        "end": 951
                      }
                    ],
                    "start": 938,
                    "end": 951
                  },
                  "start": 936,
                  "end": 951
                },
                "start": 935,
                "end": 951
              },
              "init": null,
              "definite": false,
              "start": 935,
              "end": 951
            }
          ],
          "declare": false,
          "start": 931,
          "end": 952
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 962,
                                "end": 963
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 966,
                                "end": 967
                              },
                              "start": 962,
                              "end": 967
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 971,
                              "end": 972
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 960,
                            "end": 972
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 958,
                        "end": 974
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 978,
                              "end": 979
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 981,
                              "end": 982
                            }
                          ],
                          "start": 977,
                          "end": 983
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 987,
                            "end": 992
                          },
                          "typeArguments": null,
                          "start": 987,
                          "end": 992
                        },
                        "start": 977,
                        "end": 992
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 958,
                      "end": 992
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 957,
                  "end": 993
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 998,
                            "end": 999
                          },
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1001,
                            "end": 1002
                          }
                        ],
                        "start": 997,
                        "end": 1003
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1007,
                          "end": 1012
                        },
                        "typeArguments": null,
                        "start": 1007,
                        "end": 1012
                      },
                      "start": 997,
                      "end": 1012
                    }
                  ],
                  "start": 996,
                  "end": 1013
                },
                "start": 957,
                "end": 1013
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1015,
                  "end": 1016
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1015,
                "end": 1018
              }
            ],
            "start": 957,
            "end": 1018
          },
          "directive": null,
          "start": 957,
          "end": 1019
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1034,
                          "end": 1035
                        },
                        "start": 1034,
                        "end": 1035
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1038,
                          "end": 1039
                        },
                        "start": 1038,
                        "end": 1039
                      }
                    ],
                    "start": 1034,
                    "end": 1039
                  },
                  "start": 1032,
                  "end": 1039
                },
                "start": 1030,
                "end": 1039
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1042,
                "end": 1043
              },
              "definite": false,
              "start": 1030,
              "end": 1043
            }
          ],
          "declare": false,
          "start": 1024,
          "end": 1044
        }
      ],
      "start": 903,
      "end": 1046
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1060,
                          "end": 1061
                        },
                        "start": 1060,
                        "end": 1061
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1064,
                          "end": 1065
                        },
                        "start": 1064,
                        "end": 1065
                      }
                    ],
                    "start": 1060,
                    "end": 1065
                  },
                  "start": 1058,
                  "end": 1065
                },
                "start": 1057,
                "end": 1065
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1068,
                "end": 1069
              },
              "definite": false,
              "start": 1057,
              "end": 1069
            }
          ],
          "declare": false,
          "start": 1053,
          "end": 1070
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1082,
                          "end": 1083
                        },
                        "start": 1082,
                        "end": 1083
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1086,
                          "end": 1087
                        },
                        "start": 1086,
                        "end": 1087
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1090,
                          "end": 1091
                        },
                        "start": 1090,
                        "end": 1091
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1094,
                          "end": 1095
                        },
                        "start": 1094,
                        "end": 1095
                      }
                    ],
                    "start": 1082,
                    "end": 1095
                  },
                  "start": 1080,
                  "end": 1095
                },
                "start": 1079,
                "end": 1095
              },
              "init": null,
              "definite": false,
              "start": 1079,
              "end": 1095
            }
          ],
          "declare": false,
          "start": 1075,
          "end": 1096
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1105,
                              "end": 1106
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1109,
                              "end": 1110
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1104,
                            "end": 1110
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1102,
                        "end": 1112
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1116,
                                "end": 1117
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1120,
                                "end": 1121
                              },
                              "start": 1116,
                              "end": 1121
                            },
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1123,
                              "end": 1124
                            }
                          ],
                          "start": 1115,
                          "end": 1125
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1129,
                            "end": 1134
                          },
                          "typeArguments": null,
                          "start": 1129,
                          "end": 1134
                        },
                        "start": 1115,
                        "end": 1134
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1102,
                      "end": 1134
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1101,
                  "end": 1135
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1140,
                            "end": 1141
                          },
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1143,
                            "end": 1144
                          }
                        ],
                        "start": 1139,
                        "end": 1145
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1149,
                          "end": 1154
                        },
                        "typeArguments": null,
                        "start": 1149,
                        "end": 1154
                      },
                      "start": 1139,
                      "end": 1154
                    }
                  ],
                  "start": 1138,
                  "end": 1155
                },
                "start": 1101,
                "end": 1155
              },
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1157,
                  "end": 1158
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1157,
                "end": 1160
              }
            ],
            "start": 1101,
            "end": 1160
          },
          "directive": null,
          "start": 1101,
          "end": 1161
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1176,
                          "end": 1177
                        },
                        "start": 1176,
                        "end": 1177
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1180,
                          "end": 1181
                        },
                        "start": 1180,
                        "end": 1181
                      }
                    ],
                    "start": 1176,
                    "end": 1181
                  },
                  "start": 1174,
                  "end": 1181
                },
                "start": 1172,
                "end": 1181
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1184,
                "end": 1185
              },
              "definite": false,
              "start": 1172,
              "end": 1185
            }
          ],
          "declare": false,
          "start": 1166,
          "end": 1186
        }
      ],
      "start": 1047,
      "end": 1188
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1255,
                          "end": 1256
                        },
                        "start": 1255,
                        "end": 1256
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1259,
                          "end": 1260
                        },
                        "start": 1259,
                        "end": 1260
                      }
                    ],
                    "start": 1255,
                    "end": 1260
                  },
                  "start": 1253,
                  "end": 1260
                },
                "start": 1252,
                "end": 1260
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1263,
                "end": 1264
              },
              "definite": false,
              "start": 1252,
              "end": 1264
            }
          ],
          "declare": false,
          "start": 1248,
          "end": 1265
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1277,
                          "end": 1278
                        },
                        "start": 1277,
                        "end": 1278
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1281,
                          "end": 1282
                        },
                        "start": 1281,
                        "end": 1282
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1285,
                          "end": 1286
                        },
                        "start": 1285,
                        "end": 1286
                      }
                    ],
                    "start": 1277,
                    "end": 1286
                  },
                  "start": 1275,
                  "end": 1286
                },
                "start": 1274,
                "end": 1286
              },
              "init": null,
              "definite": false,
              "start": 1274,
              "end": 1286
            }
          ],
          "declare": false,
          "start": 1270,
          "end": 1287
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1292,
                  "end": 1293
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1292,
                "end": 1295
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1302,
                                "end": 1303
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1306,
                                "end": 1307
                              },
                              "start": 1302,
                              "end": 1307
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1311,
                              "end": 1312
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1300,
                            "end": 1312
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1298,
                        "end": 1314
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1318,
                              "end": 1319
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1321,
                              "end": 1322
                            }
                          ],
                          "start": 1317,
                          "end": 1323
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1327,
                            "end": 1332
                          },
                          "typeArguments": null,
                          "start": 1327,
                          "end": 1332
                        },
                        "start": 1317,
                        "end": 1332
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1298,
                      "end": 1332
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1297,
                  "end": 1333
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1336,
                  "end": 1338
                },
                "start": 1297,
                "end": 1338
              }
            ],
            "start": 1292,
            "end": 1338
          },
          "directive": null,
          "start": 1292,
          "end": 1339
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 1354,
                      "end": 1355
                    },
                    "start": 1354,
                    "end": 1355
                  },
                  "start": 1352,
                  "end": 1355
                },
                "start": 1350,
                "end": 1355
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1358,
                "end": 1359
              },
              "definite": false,
              "start": 1350,
              "end": 1359
            }
          ],
          "declare": false,
          "start": 1344,
          "end": 1360
        }
      ],
      "start": 1242,
      "end": 1362
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1376,
                          "end": 1377
                        },
                        "start": 1376,
                        "end": 1377
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1380,
                          "end": 1381
                        },
                        "start": 1380,
                        "end": 1381
                      }
                    ],
                    "start": 1376,
                    "end": 1381
                  },
                  "start": 1374,
                  "end": 1381
                },
                "start": 1373,
                "end": 1381
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1384,
                "end": 1385
              },
              "definite": false,
              "start": 1373,
              "end": 1385
            }
          ],
          "declare": false,
          "start": 1369,
          "end": 1386
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1398,
                          "end": 1399
                        },
                        "start": 1398,
                        "end": 1399
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1402,
                          "end": 1403
                        },
                        "start": 1402,
                        "end": 1403
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1406,
                          "end": 1407
                        },
                        "start": 1406,
                        "end": 1407
                      }
                    ],
                    "start": 1398,
                    "end": 1407
                  },
                  "start": 1396,
                  "end": 1407
                },
                "start": 1395,
                "end": 1407
              },
              "init": null,
              "definite": false,
              "start": 1395,
              "end": 1407
            }
          ],
          "declare": false,
          "start": 1391,
          "end": 1408
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1413,
                  "end": 1414
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1413,
                "end": 1416
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1422,
                              "end": 1423
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1426,
                              "end": 1427
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1421,
                            "end": 1427
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1419,
                        "end": 1429
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1433,
                              "end": 1434
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1436,
                                "end": 1437
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1440,
                                "end": 1441
                              },
                              "start": 1436,
                              "end": 1441
                            }
                          ],
                          "start": 1432,
                          "end": 1442
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1446,
                            "end": 1451
                          },
                          "typeArguments": null,
                          "start": 1446,
                          "end": 1451
                        },
                        "start": 1432,
                        "end": 1451
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1419,
                      "end": 1451
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1418,
                  "end": 1452
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [],
                  "start": 1455,
                  "end": 1457
                },
                "start": 1418,
                "end": 1457
              }
            ],
            "start": 1413,
            "end": 1457
          },
          "directive": null,
          "start": 1413,
          "end": 1458
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": 9,
                      "raw": "9",
                      "start": 1473,
                      "end": 1474
                    },
                    "start": 1473,
                    "end": 1474
                  },
                  "start": 1471,
                  "end": 1474
                },
                "start": 1469,
                "end": 1474
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1477,
                "end": 1478
              },
              "definite": false,
              "start": 1469,
              "end": 1478
            }
          ],
          "declare": false,
          "start": 1463,
          "end": 1479
        }
      ],
      "start": 1363,
      "end": 1481
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1495,
                          "end": 1496
                        },
                        "start": 1495,
                        "end": 1496
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1499,
                          "end": 1500
                        },
                        "start": 1499,
                        "end": 1500
                      }
                    ],
                    "start": 1495,
                    "end": 1500
                  },
                  "start": 1493,
                  "end": 1500
                },
                "start": 1492,
                "end": 1500
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 1503,
                "end": 1504
              },
              "definite": false,
              "start": 1492,
              "end": 1504
            }
          ],
          "declare": false,
          "start": 1488,
          "end": 1505
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1517,
                          "end": 1518
                        },
                        "start": 1517,
                        "end": 1518
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1521,
                          "end": 1522
                        },
                        "start": 1521,
                        "end": 1522
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1525,
                          "end": 1526
                        },
                        "start": 1525,
                        "end": 1526
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1529,
                          "end": 1530
                        },
                        "start": 1529,
                        "end": 1530
                      }
                    ],
                    "start": 1517,
                    "end": 1530
                  },
                  "start": 1515,
                  "end": 1530
                },
                "start": 1514,
                "end": 1530
              },
              "init": null,
              "definite": false,
              "start": 1514,
              "end": 1530
            }
          ],
          "declare": false,
          "start": 1510,
          "end": 1531
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1536,
                  "end": 1537
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1536,
                "end": 1539
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1546,
                                "end": 1547
                              },
                              "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 1550,
                                "end": 1551
                              },
                              "start": 1546,
                              "end": 1551
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1555,
                              "end": 1556
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1544,
                            "end": 1556
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1542,
                        "end": 1558
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1562,
                              "end": 1563
                            },
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1565,
                              "end": 1566
                            }
                          ],
                          "start": 1561,
                          "end": 1567
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1571,
                            "end": 1576
                          },
                          "typeArguments": null,
                          "start": 1571,
                          "end": 1576
                        },
                        "start": 1561,
                        "end": 1576
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1542,
                      "end": 1576
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1541,
                  "end": 1577
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1582,
                            "end": 1583
                          },
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1585,
                            "end": 1586
                          }
                        ],
                        "start": 1581,
                        "end": 1587
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1591,
                          "end": 1596
                        },
                        "typeArguments": null,
                        "start": 1591,
                        "end": 1596
                      },
                      "start": 1581,
                      "end": 1596
                    }
                  ],
                  "start": 1580,
                  "end": 1597
                },
                "start": 1541,
                "end": 1597
              }
            ],
            "start": 1536,
            "end": 1597
          },
          "directive": null,
          "start": 1536,
          "end": 1598
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1613,
                          "end": 1614
                        },
                        "start": 1613,
                        "end": 1614
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1617,
                          "end": 1618
                        },
                        "start": 1617,
                        "end": 1618
                      }
                    ],
                    "start": 1613,
                    "end": 1618
                  },
                  "start": 1611,
                  "end": 1618
                },
                "start": 1609,
                "end": 1618
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1621,
                "end": 1622
              },
              "definite": false,
              "start": 1609,
              "end": 1622
            }
          ],
          "declare": false,
          "start": 1603,
          "end": 1623
        }
      ],
      "start": 1482,
      "end": 1625
    },
    {
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
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1639,
                          "end": 1640
                        },
                        "start": 1639,
                        "end": 1640
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1643,
                          "end": 1644
                        },
                        "start": 1643,
                        "end": 1644
                      }
                    ],
                    "start": 1639,
                    "end": 1644
                  },
                  "start": 1637,
                  "end": 1644
                },
                "start": 1636,
                "end": 1644
              },
              "init": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 1647,
                "end": 1648
              },
              "definite": false,
              "start": 1636,
              "end": 1648
            }
          ],
          "declare": false,
          "start": 1632,
          "end": 1649
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
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1661,
                          "end": 1662
                        },
                        "start": 1661,
                        "end": 1662
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 1665,
                          "end": 1666
                        },
                        "start": 1665,
                        "end": 1666
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1669,
                          "end": 1670
                        },
                        "start": 1669,
                        "end": 1670
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 9,
                          "raw": "9",
                          "start": 1673,
                          "end": 1674
                        },
                        "start": 1673,
                        "end": 1674
                      }
                    ],
                    "start": 1661,
                    "end": 1674
                  },
                  "start": 1659,
                  "end": 1674
                },
                "start": 1658,
                "end": 1674
              },
              "init": null,
              "definite": false,
              "start": 1658,
              "end": 1674
            }
          ],
          "declare": false,
          "start": 1654,
          "end": 1675
        },
        {
          "type": "ExpressionStatement",
          "expression": {
            "type": "SequenceExpression",
            "expressions": [
              {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1680,
                  "end": 1681
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1680,
                "end": 1683
              },
              {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1689,
                              "end": 1690
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1693,
                              "end": 1694
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false,
                            "start": 1688,
                            "end": 1694
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1686,
                        "end": 1696
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "expression": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1700,
                                "end": 1701
                              },
                              "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0",
                                "start": 1704,
                                "end": 1705
                              },
                              "start": 1700,
                              "end": 1705
                            },
                            {
                              "type": "Literal",
                              "value": 9,
                              "raw": "9",
                              "start": 1707,
                              "end": 1708
                            }
                          ],
                          "start": 1699,
                          "end": 1709
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1713,
                            "end": 1718
                          },
                          "typeArguments": null,
                          "start": 1713,
                          "end": 1718
                        },
                        "start": 1699,
                        "end": 1718
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1686,
                      "end": 1718
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1685,
                  "end": 1719
                },
                "right": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1724,
                            "end": 1725
                          },
                          {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1727,
                            "end": 1728
                          }
                        ],
                        "start": 1723,
                        "end": 1729
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1733,
                          "end": 1738
                        },
                        "typeArguments": null,
                        "start": 1733,
                        "end": 1738
                      },
                      "start": 1723,
                      "end": 1738
                    }
                  ],
                  "start": 1722,
                  "end": 1739
                },
                "start": 1685,
                "end": 1739
              }
            ],
            "start": 1680,
            "end": 1739
          },
          "directive": null,
          "start": 1680,
          "end": 1740
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 1755,
                          "end": 1756
                        },
                        "start": 1755,
                        "end": 1756
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": 8,
                          "raw": "8",
                          "start": 1759,
                          "end": 1760
                        },
                        "start": 1759,
                        "end": 1760
                      }
                    ],
                    "start": 1755,
                    "end": 1760
                  },
                  "start": 1753,
                  "end": 1760
                },
                "start": 1751,
                "end": 1760
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 1763,
                "end": 1764
              },
              "definite": false,
              "start": 1751,
              "end": 1764
            }
          ],
          "declare": false,
          "start": 1745,
          "end": 1765
        }
      ],
      "start": 1626,
      "end": 1767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 77,
  "end": 1767
}
```
