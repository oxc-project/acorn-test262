__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
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
              "name": "animal",
              "optional": false,
              "typeAnnotation": null,
              "start": 19,
              "end": 25
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 19,
            "end": 25
          }
        ],
        "start": 17,
        "end": 27
      },
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null,
        "start": 38,
        "end": 41
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 56
          },
          "typeArguments": null,
          "start": 50,
          "end": 56
        }
      ],
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
              "name": "dog",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 62
          }
        ],
        "start": 57,
        "end": 64
      },
      "declare": false,
      "start": 28,
      "end": 64
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null,
        "start": 75,
        "end": 78
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 87,
            "end": 93
          },
          "typeArguments": null,
          "start": 87,
          "end": 93
        }
      ],
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
              "name": "cat",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 99
            },
            "typeAnnotation": null,
            "accessibility": null,
            "static": false,
            "start": 96,
            "end": 99
          }
        ],
        "start": 94,
        "end": 101
      },
      "declare": false,
      "start": 65,
      "end": 101
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 116
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 124,
                      "end": 125
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 126,
                        "end": 132
                      },
                      "start": 125,
                      "end": 132
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 124,
                    "end": 132
                  }
                ],
                "start": 122,
                "end": 134
              },
              "start": 122,
              "end": 136
            },
            "start": 120,
            "end": 136
          },
          "start": 117,
          "end": 136
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null,
            "start": 139,
            "end": 142
          },
          "typeArguments": null,
          "start": 139,
          "end": 142
        },
        "start": 137,
        "end": 142
      },
      "body": null,
      "expression": false,
      "start": 103,
      "end": 143
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 153,
        "end": 157
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 165,
                      "end": 166
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 167,
                        "end": 173
                      },
                      "start": 166,
                      "end": 173
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 165,
                    "end": 173
                  }
                ],
                "start": 163,
                "end": 175
              },
              "start": 163,
              "end": 177
            },
            "start": 161,
            "end": 177
          },
          "start": 158,
          "end": 177
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null,
            "start": 180,
            "end": 186
          },
          "typeArguments": null,
          "start": 180,
          "end": 186
        },
        "start": 178,
        "end": 186
      },
      "body": null,
      "expression": false,
      "start": 144,
      "end": 187
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 197,
        "end": 201
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 210
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 211,
                            "end": 217
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 220,
                            "end": 226
                          }
                        ],
                        "start": 211,
                        "end": 226
                      },
                      "start": 210,
                      "end": 226
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 209,
                    "end": 226
                  }
                ],
                "start": 207,
                "end": 228
              },
              "start": 207,
              "end": 230
            },
            "start": 205,
            "end": 230
          },
          "start": 202,
          "end": 230
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Dog",
            "optional": false,
            "typeAnnotation": null,
            "start": 233,
            "end": 236
          },
          "typeArguments": null,
          "start": 233,
          "end": 236
        },
        "start": 231,
        "end": 236
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 259
            },
            "start": 243,
            "end": 260
          }
        ],
        "start": 237,
        "end": 262
      },
      "expression": false,
      "start": 188,
      "end": 262
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 273,
        "end": 277
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 285,
                      "end": 286
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 287,
                        "end": 293
                      },
                      "start": 286,
                      "end": 293
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 285,
                    "end": 293
                  }
                ],
                "start": 283,
                "end": 295
              },
              "start": 283,
              "end": 297
            },
            "start": 281,
            "end": 297
          },
          "start": 278,
          "end": 297
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cat",
            "optional": false,
            "typeAnnotation": null,
            "start": 300,
            "end": 303
          },
          "typeArguments": null,
          "start": 300,
          "end": 303
        },
        "start": 298,
        "end": 303
      },
      "body": null,
      "expression": false,
      "start": 264,
      "end": 304
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 314,
        "end": 318
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 326,
                      "end": 327
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 328,
                        "end": 334
                      },
                      "start": 327,
                      "end": 334
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 326,
                    "end": 334
                  }
                ],
                "start": 324,
                "end": 336
              },
              "start": 324,
              "end": 338
            },
            "start": 322,
            "end": 338
          },
          "start": 319,
          "end": 338
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Cat",
                "optional": false,
                "typeAnnotation": null,
                "start": 341,
                "end": 344
              },
              "typeArguments": null,
              "start": 341,
              "end": 344
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Dog",
                "optional": false,
                "typeAnnotation": null,
                "start": 347,
                "end": 350
              },
              "typeArguments": null,
              "start": 347,
              "end": 350
            }
          ],
          "start": 341,
          "end": 350
        },
        "start": 339,
        "end": 350
      },
      "body": null,
      "expression": false,
      "start": 305,
      "end": 351
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 361,
        "end": 365
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 368
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSArrayType",
              "elementType": {
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 373,
                      "end": 374
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 375,
                            "end": 381
                          },
                          {
                            "type": "TSStringKeyword",
                            "start": 384,
                            "end": 390
                          }
                        ],
                        "start": 375,
                        "end": 390
                      },
                      "start": 374,
                      "end": 390
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 373,
                    "end": 390
                  }
                ],
                "start": 371,
                "end": 392
              },
              "start": 371,
              "end": 394
            },
            "start": 369,
            "end": 394
          },
          "start": 366,
          "end": 394
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Cat",
            "optional": false,
            "typeAnnotation": null,
            "start": 397,
            "end": 400
          },
          "typeArguments": null,
          "start": 397,
          "end": 400
        },
        "start": 395,
        "end": 400
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 414,
              "end": 423
            },
            "start": 407,
            "end": 424
          }
        ],
        "start": 401,
        "end": 426
      },
      "expression": false,
      "start": 352,
      "end": 426
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 433,
            "end": 435
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 438,
              "end": 442
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
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
                          "start": 445,
                          "end": 446
                        },
                        "value": {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 448,
                          "end": 453
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 445,
                        "end": 453
                      }
                    ],
                    "start": 444,
                    "end": 454
                  }
                ],
                "start": 443,
                "end": 455
              }
            ],
            "optional": false,
            "start": 438,
            "end": 456
          },
          "definite": false,
          "start": 433,
          "end": 456
        }
      ],
      "declare": false,
      "start": 429,
      "end": 457
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
            "name": "y1",
            "optional": false,
            "typeAnnotation": null,
            "start": 462,
            "end": 464
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 467,
              "end": 471
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
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
                          "start": 474,
                          "end": 475
                        },
                        "value": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 477,
                          "end": 480
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 474,
                        "end": 480
                      }
                    ],
                    "start": 473,
                    "end": 481
                  }
                ],
                "start": 472,
                "end": 482
              }
            ],
            "optional": false,
            "start": 467,
            "end": 483
          },
          "definite": false,
          "start": 462,
          "end": 483
        }
      ],
      "declare": false,
      "start": 458,
      "end": 484
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 490,
            "end": 492
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 495,
              "end": 499
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
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
                          "start": 502,
                          "end": 503
                        },
                        "value": {
                          "type": "Literal",
                          "value": "str",
                          "raw": "\"str\"",
                          "start": 505,
                          "end": 510
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 502,
                        "end": 510
                      }
                    ],
                    "start": 501,
                    "end": 511
                  }
                ],
                "start": 500,
                "end": 512
              }
            ],
            "optional": false,
            "start": 495,
            "end": 513
          },
          "definite": false,
          "start": 490,
          "end": 513
        }
      ],
      "declare": false,
      "start": 486,
      "end": 514
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
            "name": "y2",
            "optional": false,
            "typeAnnotation": null,
            "start": 519,
            "end": 521
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 528
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ObjectExpression",
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
                          "start": 531,
                          "end": 532
                        },
                        "value": {
                          "type": "Literal",
                          "value": 100,
                          "raw": "100",
                          "start": 534,
                          "end": 537
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 531,
                        "end": 537
                      }
                    ],
                    "start": 530,
                    "end": 538
                  }
                ],
                "start": 529,
                "end": 539
              }
            ],
            "optional": false,
            "start": 524,
            "end": 540
          },
          "definite": false,
          "start": 519,
          "end": 540
        }
      ],
      "declare": false,
      "start": 515,
      "end": 541
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 541
}
```
