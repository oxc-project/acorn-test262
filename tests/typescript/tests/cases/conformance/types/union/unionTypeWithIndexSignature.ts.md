__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Two",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 8
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 13,
                  "end": 16
                },
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
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20,
                          "end": 23
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 25,
                              "end": 29
                            },
                            "start": 25,
                            "end": 29
                          },
                          "start": 23,
                          "end": 29
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 20,
                        "end": 29
                      }
                    ],
                    "start": 18,
                    "end": 31
                  },
                  "start": 16,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 13,
                "end": 32
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "baz",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 36
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 38,
                      "end": 42
                    },
                    "start": 38,
                    "end": 42
                  },
                  "start": 36,
                  "end": 42
                },
                "accessibility": null,
                "static": false,
                "start": 33,
                "end": 42
              }
            ],
            "start": 11,
            "end": 44
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 53,
                        "end": 59
                      },
                      "start": 51,
                      "end": 59
                    },
                    "start": 50,
                    "end": 59
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  "start": 60,
                  "end": 68
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 49,
                "end": 68
              }
            ],
            "start": 47,
            "end": 70
          }
        ],
        "start": 11,
        "end": 70
      },
      "declare": false,
      "start": 0,
      "end": 71
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
            "name": "u",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Two",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 87,
                  "end": 90
                },
                "typeArguments": null,
                "start": 87,
                "end": 90
              },
              "start": 85,
              "end": 90
            },
            "start": 84,
            "end": 90
          },
          "init": null,
          "definite": false,
          "start": 84,
          "end": 90
        }
      ],
      "declare": true,
      "start": 72,
      "end": 90
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 91,
            "end": 92
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 93,
            "end": 96
          },
          "optional": false,
          "computed": false,
          "start": 91,
          "end": 96
        },
        "right": {
          "type": "Literal",
          "value": "bye",
          "raw": "'bye'",
          "start": 99,
          "end": 104
        },
        "start": 91,
        "end": 104
      },
      "directive": null,
      "start": 91,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "u",
            "optional": false,
            "typeAnnotation": null,
            "start": 105,
            "end": 106
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "baz",
            "optional": false,
            "typeAnnotation": null,
            "start": 107,
            "end": 110
          },
          "optional": false,
          "computed": false,
          "start": 105,
          "end": 110
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 113,
          "end": 117
        },
        "start": 105,
        "end": 117
      },
      "directive": null,
      "start": 105,
      "end": 117
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Three",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 128
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 133,
                  "end": 136
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 138,
                    "end": 144
                  },
                  "start": 136,
                  "end": 144
                },
                "accessibility": null,
                "static": false,
                "start": 133,
                "end": 144
              }
            ],
            "start": 131,
            "end": 146
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 155,
                        "end": 161
                      },
                      "start": 153,
                      "end": 161
                    },
                    "start": 152,
                    "end": 161
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 164,
                    "end": 170
                  },
                  "start": 162,
                  "end": 170
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 151,
                "end": 170
              }
            ],
            "start": 149,
            "end": 172
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 181,
                        "end": 187
                      },
                      "start": 179,
                      "end": 187
                    },
                    "start": 178,
                    "end": 187
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 190,
                    "end": 197
                  },
                  "start": 188,
                  "end": 197
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 177,
                "end": 197
              }
            ],
            "start": 175,
            "end": 199
          }
        ],
        "start": 131,
        "end": 199
      },
      "declare": false,
      "start": 118,
      "end": 200
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
            "name": "v",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Three",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 221
                },
                "typeArguments": null,
                "start": 216,
                "end": 221
              },
              "start": 214,
              "end": 221
            },
            "start": 213,
            "end": 221
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 221
        }
      ],
      "declare": true,
      "start": 201,
      "end": 221
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 222,
            "end": 223
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 224,
            "end": 227
          },
          "optional": false,
          "computed": false,
          "start": 222,
          "end": 227
        },
        "right": {
          "type": "Literal",
          "value": false,
          "raw": "false",
          "start": 230,
          "end": 235
        },
        "start": 222,
        "end": 235
      },
      "directive": null,
      "start": 222,
      "end": 235
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Missing",
        "optional": false,
        "typeAnnotation": null,
        "start": 241,
        "end": 248
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 256
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 258,
                    "end": 264
                  },
                  "start": 256,
                  "end": 264
                },
                "accessibility": null,
                "static": false,
                "start": 253,
                "end": 265
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 266,
                  "end": 269
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 271,
                      "end": 275
                    },
                    "start": 271,
                    "end": 275
                  },
                  "start": 269,
                  "end": 275
                },
                "accessibility": null,
                "static": false,
                "start": 266,
                "end": 275
              }
            ],
            "start": 251,
            "end": 277
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 286,
                        "end": 292
                      },
                      "start": 284,
                      "end": 292
                    },
                    "start": 283,
                    "end": 292
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 295,
                    "end": 301
                  },
                  "start": 293,
                  "end": 301
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 282,
                "end": 301
              }
            ],
            "start": 280,
            "end": 303
          },
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 311
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 313,
                    "end": 320
                  },
                  "start": 311,
                  "end": 320
                },
                "accessibility": null,
                "static": false,
                "start": 308,
                "end": 320
              }
            ],
            "start": 306,
            "end": 322
          }
        ],
        "start": 251,
        "end": 322
      },
      "declare": false,
      "start": 236,
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
            "name": "m",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Missing",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 338,
                  "end": 345
                },
                "typeArguments": null,
                "start": 338,
                "end": 345
              },
              "start": 336,
              "end": 345
            },
            "start": 335,
            "end": 345
          },
          "init": null,
          "definite": false,
          "start": 335,
          "end": 345
        }
      ],
      "declare": true,
      "start": 323,
      "end": 345
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "m",
            "optional": false,
            "typeAnnotation": null,
            "start": 346,
            "end": 347
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 348,
            "end": 351
          },
          "optional": false,
          "computed": false,
          "start": 346,
          "end": 351
        },
        "right": {
          "type": "Literal",
          "value": "hi",
          "raw": "'hi'",
          "start": 354,
          "end": 358
        },
        "start": 346,
        "end": 358
      },
      "directive": null,
      "start": 346,
      "end": 358
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "m",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 360
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 364
        },
        "optional": false,
        "computed": false,
        "start": 359,
        "end": 364
      },
      "directive": null,
      "start": 359,
      "end": 364
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RO",
        "optional": false,
        "typeAnnotation": null,
        "start": 370,
        "end": 372
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 380
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 382,
                    "end": 388
                  },
                  "start": 380,
                  "end": 388
                },
                "accessibility": null,
                "static": false,
                "start": 377,
                "end": 388
              }
            ],
            "start": 375,
            "end": 390
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 408,
                        "end": 414
                      },
                      "start": 406,
                      "end": 414
                    },
                    "start": 405,
                    "end": 414
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 417,
                    "end": 423
                  },
                  "start": 415,
                  "end": 423
                },
                "readonly": true,
                "static": false,
                "accessibility": null,
                "start": 395,
                "end": 423
              }
            ],
            "start": 393,
            "end": 425
          }
        ],
        "start": 375,
        "end": 425
      },
      "declare": false,
      "start": 365,
      "end": 425
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
            "name": "ro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 442,
                  "end": 444
                },
                "typeArguments": null,
                "start": 442,
                "end": 444
              },
              "start": 440,
              "end": 444
            },
            "start": 438,
            "end": 444
          },
          "init": null,
          "definite": false,
          "start": 438,
          "end": 444
        }
      ],
      "declare": true,
      "start": 426,
      "end": 444
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ro",
            "optional": false,
            "typeAnnotation": null,
            "start": 445,
            "end": 447
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 448,
            "end": 451
          },
          "optional": false,
          "computed": false,
          "start": 445,
          "end": 451
        },
        "right": {
          "type": "Literal",
          "value": "not allowed",
          "raw": "'not allowed'",
          "start": 454,
          "end": 467
        },
        "start": 445,
        "end": 467
      },
      "directive": null,
      "start": 445,
      "end": 467
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Num",
        "optional": false,
        "typeAnnotation": null,
        "start": 473,
        "end": 476
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 481,
                  "end": 484
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 486,
                    "end": 492
                  },
                  "start": 484,
                  "end": 492
                },
                "accessibility": null,
                "static": false,
                "start": 481,
                "end": 492
              }
            ],
            "start": 479,
            "end": 494
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 503,
                        "end": 509
                      },
                      "start": 501,
                      "end": 509
                    },
                    "start": 500,
                    "end": 509
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 512,
                    "end": 518
                  },
                  "start": 510,
                  "end": 518
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 499,
                "end": 518
              }
            ],
            "start": 497,
            "end": 520
          }
        ],
        "start": 479,
        "end": 520
      },
      "declare": false,
      "start": 468,
      "end": 520
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 538,
                  "end": 541
                },
                "typeArguments": null,
                "start": 538,
                "end": 541
              },
              "start": 536,
              "end": 541
            },
            "start": 533,
            "end": 541
          },
          "init": null,
          "definite": false,
          "start": 533,
          "end": 541
        }
      ],
      "declare": true,
      "start": 521,
      "end": 541
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 542,
            "end": 545
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 546,
            "end": 547
          },
          "optional": false,
          "computed": true,
          "start": 542,
          "end": 548
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 551,
          "end": 552
        },
        "start": 542,
        "end": 552
      },
      "directive": null,
      "start": 542,
      "end": 552
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": null,
            "start": 553,
            "end": 556
          },
          "property": {
            "type": "Literal",
            "value": "0",
            "raw": "'0'",
            "start": 557,
            "end": 560
          },
          "optional": false,
          "computed": true,
          "start": 553,
          "end": 561
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 564,
          "end": 568
        },
        "start": 553,
        "end": 568
      },
      "directive": null,
      "start": 553,
      "end": 568
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 575,
            "end": 578
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 581,
              "end": 587
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 581,
            "end": 589
          },
          "definite": false,
          "start": 575,
          "end": 589
        }
      ],
      "declare": false,
      "start": 569,
      "end": 589
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Both",
        "optional": false,
        "typeAnnotation": null,
        "start": 595,
        "end": 599
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
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
                  "name": "s",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 604,
                  "end": 605
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 607,
                    "end": 613
                  },
                  "start": 605,
                  "end": 613
                },
                "accessibility": null,
                "static": false,
                "start": 604,
                "end": 614
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 615,
                  "end": 618
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 620,
                    "end": 626
                  },
                  "start": 618,
                  "end": 626
                },
                "accessibility": null,
                "static": false,
                "start": 615,
                "end": 627
              },
              {
                "type": "TSPropertySignature",
                "computed": true,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sym",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 629,
                  "end": 632
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 635,
                    "end": 642
                  },
                  "start": 633,
                  "end": 642
                },
                "accessibility": null,
                "static": false,
                "start": 628,
                "end": 642
              }
            ],
            "start": 602,
            "end": 644
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 653,
                        "end": 659
                      },
                      "start": 651,
                      "end": 659
                    },
                    "start": 650,
                    "end": 659
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 662,
                    "end": 668
                  },
                  "start": 660,
                  "end": 668
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 649,
                "end": 669
              },
              {
                "type": "TSIndexSignature",
                "parameters": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 674,
                        "end": 680
                      },
                      "start": 672,
                      "end": 680
                    },
                    "start": 671,
                    "end": 680
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 683,
                        "end": 689
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 692,
                        "end": 698
                      }
                    ],
                    "start": 683,
                    "end": 698
                  },
                  "start": 681,
                  "end": 698
                },
                "readonly": false,
                "static": false,
                "accessibility": null,
                "start": 670,
                "end": 698
              }
            ],
            "start": 647,
            "end": 700
          }
        ],
        "start": 602,
        "end": 700
      },
      "declare": false,
      "start": 590,
      "end": 700
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
            "name": "both",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Both",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 719,
                  "end": 723
                },
                "typeArguments": null,
                "start": 719,
                "end": 723
              },
              "start": 717,
              "end": 723
            },
            "start": 713,
            "end": 723
          },
          "init": null,
          "definite": false,
          "start": 713,
          "end": 723
        }
      ],
      "declare": true,
      "start": 701,
      "end": 723
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 724,
            "end": 728
          },
          "property": {
            "type": "Literal",
            "value": "s",
            "raw": "'s'",
            "start": 729,
            "end": 732
          },
          "optional": false,
          "computed": true,
          "start": 724,
          "end": 733
        },
        "right": {
          "type": "Literal",
          "value": "ok",
          "raw": "'ok'",
          "start": 736,
          "end": 740
        },
        "start": 724,
        "end": 740
      },
      "directive": null,
      "start": 724,
      "end": 740
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 741,
            "end": 745
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 746,
            "end": 747
          },
          "optional": false,
          "computed": true,
          "start": 741,
          "end": 748
        },
        "right": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 751,
          "end": 752
        },
        "start": 741,
        "end": 752
      },
      "directive": null,
      "start": 741,
      "end": 752
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 753,
            "end": 757
          },
          "property": {
            "type": "Literal",
            "value": 1,
            "raw": "1",
            "start": 758,
            "end": 759
          },
          "optional": false,
          "computed": true,
          "start": 753,
          "end": 760
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0",
          "start": 763,
          "end": 764
        },
        "start": 753,
        "end": 764
      },
      "directive": null,
      "start": 753,
      "end": 764
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 775,
            "end": 779
          },
          "property": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 780,
            "end": 781
          },
          "optional": false,
          "computed": true,
          "start": 775,
          "end": 782
        },
        "right": {
          "type": "Literal",
          "value": "not ok",
          "raw": "'not ok'",
          "start": 785,
          "end": 793
        },
        "start": 775,
        "end": 793
      },
      "directive": null,
      "start": 775,
      "end": 793
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "both",
            "optional": false,
            "typeAnnotation": null,
            "start": 794,
            "end": 798
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "sym",
            "optional": false,
            "typeAnnotation": null,
            "start": 799,
            "end": 802
          },
          "optional": false,
          "computed": true,
          "start": 794,
          "end": 803
        },
        "right": {
          "type": "Literal",
          "value": "not ok",
          "raw": "'not ok'",
          "start": 806,
          "end": 814
        },
        "start": 794,
        "end": 814
      },
      "directive": null,
      "start": 794,
      "end": 814
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 814
}
```
