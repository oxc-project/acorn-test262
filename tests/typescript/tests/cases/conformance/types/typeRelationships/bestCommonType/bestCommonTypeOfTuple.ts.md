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
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
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
          "start": 12,
          "end": 21
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 24,
          "end": 30
        },
        "start": 22,
        "end": 30
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 40,
              "end": 45
            },
            "start": 33,
            "end": 46
          }
        ],
        "start": 31,
        "end": 48
      },
      "expression": false,
      "start": 0,
      "end": 48
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 59,
        "end": 61
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 65,
              "end": 71
            },
            "start": 63,
            "end": 71
          },
          "start": 62,
          "end": 71
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 74,
          "end": 80
        },
        "start": 72,
        "end": 80
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 90,
              "end": 92
            },
            "start": 83,
            "end": 93
          }
        ],
        "start": 81,
        "end": 95
      },
      "expression": false,
      "start": 50,
      "end": 95
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 106,
        "end": 108
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 112,
              "end": 118
            },
            "start": 110,
            "end": 118
          },
          "start": 109,
          "end": 118
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 121,
          "end": 128
        },
        "start": 119,
        "end": 128
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": true,
              "raw": "true",
              "start": 138,
              "end": 142
            },
            "start": 131,
            "end": 143
          }
        ],
        "start": 129,
        "end": 145
      },
      "expression": false,
      "start": 97,
      "end": 145
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 154
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "one",
              "optional": false,
              "typeAnnotation": null,
              "start": 157,
              "end": 160
            },
            "initializer": null,
            "computed": false,
            "start": 157,
            "end": 160
          }
        ],
        "start": 155,
        "end": 162
      },
      "const": false,
      "declare": false,
      "start": 147,
      "end": 162
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 169,
        "end": 171
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "two",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 177
            },
            "initializer": null,
            "computed": false,
            "start": 174,
            "end": 177
          }
        ],
        "start": 172,
        "end": 179
      },
      "const": false,
      "declare": false,
      "start": 164,
      "end": 179
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
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 195,
                            "end": 201
                          },
                          "start": 193,
                          "end": 201
                        },
                        "start": 192,
                        "end": 201
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 206,
                        "end": 212
                      },
                      "start": 203,
                      "end": 212
                    },
                    "start": 191,
                    "end": 212
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 218,
                            "end": 224
                          },
                          "start": 216,
                          "end": 224
                        },
                        "start": 215,
                        "end": 224
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 229,
                        "end": 235
                      },
                      "start": 226,
                      "end": 235
                    },
                    "start": 214,
                    "end": 235
                  }
                ],
                "start": 190,
                "end": 236
              },
              "start": 188,
              "end": 236
            },
            "start": 186,
            "end": 236
          },
          "init": null,
          "definite": false,
          "start": 186,
          "end": 236
        }
      ],
      "declare": false,
      "start": 182,
      "end": 237
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
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 247,
                      "end": 249
                    },
                    "typeArguments": null,
                    "start": 247,
                    "end": 249
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 251,
                      "end": 253
                    },
                    "typeArguments": null,
                    "start": 251,
                    "end": 253
                  }
                ],
                "start": 246,
                "end": 254
              },
              "start": 244,
              "end": 254
            },
            "start": 242,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 254
        }
      ],
      "declare": false,
      "start": 238,
      "end": 255
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
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 265,
                    "end": 271
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 273,
                    "end": 276
                  }
                ],
                "start": 264,
                "end": 277
              },
              "start": 262,
              "end": 277
            },
            "start": 260,
            "end": 277
          },
          "init": null,
          "definite": false,
          "start": 260,
          "end": 277
        }
      ],
      "declare": false,
      "start": 256,
      "end": 278
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
            "name": "t4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 288,
                      "end": 290
                    },
                    "typeArguments": null,
                    "start": 288,
                    "end": 290
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "E2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 292,
                      "end": 294
                    },
                    "typeArguments": null,
                    "start": 292,
                    "end": 294
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 296,
                    "end": 302
                  }
                ],
                "start": 287,
                "end": 303
              },
              "start": 285,
              "end": 303
            },
            "start": 283,
            "end": 303
          },
          "init": null,
          "definite": false,
          "start": 283,
          "end": 303
        }
      ],
      "declare": false,
      "start": 279,
      "end": 304
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t1",
          "optional": false,
          "typeAnnotation": null,
          "start": 318,
          "end": 320
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 326
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null,
              "start": 328,
              "end": 330
            }
          ],
          "start": 323,
          "end": 331
        },
        "start": 318,
        "end": 331
      },
      "directive": null,
      "start": 318,
      "end": 332
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t2",
          "optional": false,
          "typeAnnotation": null,
          "start": 333,
          "end": 335
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 339,
                "end": 341
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 345
              },
              "optional": false,
              "computed": false,
              "start": 339,
              "end": 345
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 349
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 353
              },
              "optional": false,
              "computed": false,
              "start": 347,
              "end": 353
            }
          ],
          "start": 338,
          "end": 354
        },
        "start": 333,
        "end": 354
      },
      "directive": null,
      "start": 333,
      "end": 355
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t3",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 358
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "Literal",
              "value": 5,
              "raw": "5",
              "start": 362,
              "end": 363
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 365,
              "end": 374
            }
          ],
          "start": 361,
          "end": 375
        },
        "start": 356,
        "end": 375
      },
      "directive": null,
      "start": 356,
      "end": 376
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "t4",
          "optional": false,
          "typeAnnotation": null,
          "start": 377,
          "end": 379
        },
        "right": {
          "type": "ArrayExpression",
          "elements": [
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 385
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "one",
                "optional": false,
                "typeAnnotation": null,
                "start": 386,
                "end": 389
              },
              "optional": false,
              "computed": false,
              "start": 383,
              "end": 389
            },
            {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 393
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "two",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 397
              },
              "optional": false,
              "computed": false,
              "start": 391,
              "end": 397
            },
            {
              "type": "Literal",
              "value": 20,
              "raw": "20",
              "start": 399,
              "end": 401
            }
          ],
          "start": 382,
          "end": 402
        },
        "start": 377,
        "end": 402
      },
      "directive": null,
      "start": 377,
      "end": 403
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
            "name": "e1",
            "optional": false,
            "typeAnnotation": null,
            "start": 408,
            "end": 410
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 413,
              "end": 415
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 416,
              "end": 417
            },
            "optional": false,
            "computed": true,
            "start": 413,
            "end": 418
          },
          "definite": false,
          "start": 408,
          "end": 418
        }
      ],
      "declare": false,
      "start": 404,
      "end": 419
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
            "name": "e2",
            "optional": false,
            "typeAnnotation": null,
            "start": 431,
            "end": 433
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 436,
              "end": 438
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 439,
              "end": 440
            },
            "optional": false,
            "computed": true,
            "start": 436,
            "end": 441
          },
          "definite": false,
          "start": 431,
          "end": 441
        }
      ],
      "declare": false,
      "start": 427,
      "end": 442
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
            "name": "e3",
            "optional": false,
            "typeAnnotation": null,
            "start": 454,
            "end": 456
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 461
            },
            "property": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 462,
              "end": 463
            },
            "optional": false,
            "computed": true,
            "start": 459,
            "end": 464
          },
          "definite": false,
          "start": 454,
          "end": 464
        }
      ],
      "declare": false,
      "start": 450,
      "end": 465
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
            "name": "e4",
            "optional": false,
            "typeAnnotation": null,
            "start": 478,
            "end": 480
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "t4",
              "optional": false,
              "typeAnnotation": null,
              "start": 483,
              "end": 485
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3",
              "start": 486,
              "end": 487
            },
            "optional": false,
            "computed": true,
            "start": 483,
            "end": 488
          },
          "definite": false,
          "start": 478,
          "end": 488
        }
      ],
      "declare": false,
      "start": 474,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 500
}
```
