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
        "name": "logLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 144
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
              "start": 145,
              "end": 146
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 155,
              "end": 161
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 145,
            "end": 161
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 163,
              "end": 164
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 173,
              "end": 179
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 163,
            "end": 179
          }
        ],
        "start": 144,
        "end": 180
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 189,
                  "end": 190
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 194,
                    "end": 195
                  },
                  "typeArguments": null,
                  "start": 194,
                  "end": 195
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 198,
                    "end": 199
                  },
                  "typeArguments": null,
                  "start": 198,
                  "end": 199
                },
                "optional": false,
                "readonly": null,
                "start": 186,
                "end": 201
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 202,
                  "end": 203
                },
                "typeArguments": null,
                "start": 202,
                "end": 203
              },
              "start": 186,
              "end": 204
            },
            "start": 184,
            "end": 204
          },
          "start": 181,
          "end": 204
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 207,
            "end": 208
          },
          "typeArguments": null,
          "start": 207,
          "end": 208
        },
        "start": 205,
        "end": 208
      },
      "body": {
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
                  "start": 215,
                  "end": 222
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 223,
                  "end": 226
                },
                "optional": false,
                "computed": false,
                "start": 215,
                "end": 226
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arg",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 227,
                    "end": 230
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 231,
                    "end": 237
                  },
                  "optional": false,
                  "computed": false,
                  "start": 227,
                  "end": 237
                }
              ],
              "optional": false,
              "start": 215,
              "end": 238
            },
            "directive": null,
            "start": 215,
            "end": 239
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 254
            },
            "start": 244,
            "end": 255
          }
        ],
        "start": 209,
        "end": 257
      },
      "expression": false,
      "start": 126,
      "end": 257
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 258,
          "end": 267
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 42,
            "raw": "42",
            "start": 268,
            "end": 270
          }
        ],
        "optional": false,
        "start": 258,
        "end": 271
      },
      "directive": null,
      "start": 258,
      "end": 272
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
            "name": "z",
            "optional": false,
            "typeAnnotation": null,
            "start": 287,
            "end": 288
          },
          "init": null,
          "definite": false,
          "start": 287,
          "end": 288
        }
      ],
      "declare": false,
      "start": 283,
      "end": 289
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null,
          "start": 290,
          "end": 291
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logLength",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 303
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 304,
              "end": 306
            }
          ],
          "optional": false,
          "start": 294,
          "end": 307
        },
        "start": 290,
        "end": 307
      },
      "directive": null,
      "start": 290,
      "end": 308
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "logFirstLength",
        "optional": false,
        "typeAnnotation": null,
        "start": 356,
        "end": 370
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
              "start": 371,
              "end": 372
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSStringKeyword",
                "start": 381,
                "end": 387
              },
              "start": 381,
              "end": 389
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 371,
            "end": 389
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 391,
              "end": 392
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 401,
              "end": 407
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 391,
            "end": 407
          }
        ],
        "start": 370,
        "end": 408
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "objectType": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 418
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 423
                  },
                  "typeArguments": null,
                  "start": 422,
                  "end": 423
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 426,
                    "end": 427
                  },
                  "typeArguments": null,
                  "start": 426,
                  "end": 427
                },
                "optional": false,
                "readonly": null,
                "start": 414,
                "end": 429
              },
              "indexType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 430,
                  "end": 431
                },
                "typeArguments": null,
                "start": 430,
                "end": 431
              },
              "start": 414,
              "end": 432
            },
            "start": 412,
            "end": 432
          },
          "start": 409,
          "end": 432
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 435,
            "end": 436
          },
          "typeArguments": null,
          "start": 435,
          "end": 436
        },
        "start": 433,
        "end": 436
      },
      "body": {
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
                  "start": 443,
                  "end": 450
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 451,
                  "end": 454
                },
                "optional": false,
                "computed": false,
                "start": 443,
                "end": 454
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "MemberExpression",
                  "object": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 455,
                      "end": 458
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 459,
                      "end": 460
                    },
                    "optional": false,
                    "computed": true,
                    "start": 455,
                    "end": 461
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 462,
                    "end": 468
                  },
                  "optional": false,
                  "computed": false,
                  "start": 455,
                  "end": 468
                }
              ],
              "optional": false,
              "start": 443,
              "end": 469
            },
            "directive": null,
            "start": 443,
            "end": 470
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "arg",
              "optional": false,
              "typeAnnotation": null,
              "start": 482,
              "end": 485
            },
            "start": 475,
            "end": 486
          }
        ],
        "start": 437,
        "end": 488
      },
      "expression": false,
      "start": 347,
      "end": 488
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "logFirstLength",
          "optional": false,
          "typeAnnotation": null,
          "start": 489,
          "end": 503
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 505,
                "end": 507
              }
            ],
            "start": 504,
            "end": 508
          }
        ],
        "optional": false,
        "start": 489,
        "end": 509
      },
      "directive": null,
      "start": 489,
      "end": 510
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 525,
            "end": 527
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [],
            "start": 530,
            "end": 532
          },
          "definite": false,
          "start": 525,
          "end": 532
        }
      ],
      "declare": false,
      "start": 521,
      "end": 533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 534,
            "end": 536
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "push",
            "optional": false,
            "typeAnnotation": null,
            "start": 537,
            "end": 541
          },
          "optional": false,
          "computed": false,
          "start": 534,
          "end": 541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "logLength",
              "optional": false,
              "typeAnnotation": null,
              "start": 542,
              "end": 551
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": 42,
                "raw": "42",
                "start": 552,
                "end": 554
              }
            ],
            "optional": false,
            "start": 542,
            "end": 555
          }
        ],
        "optional": false,
        "start": 534,
        "end": 556
      },
      "directive": null,
      "start": 534,
      "end": 557
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "zz",
          "optional": false,
          "typeAnnotation": null,
          "start": 595,
          "end": 597
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "logFirstLength",
            "optional": false,
            "typeAnnotation": null,
            "start": 600,
            "end": 614
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "elements": [
                {
                  "type": "Literal",
                  "value": 42,
                  "raw": "42",
                  "start": 616,
                  "end": 618
                }
              ],
              "start": 615,
              "end": 619
            }
          ],
          "optional": false,
          "start": 600,
          "end": 620
        },
        "start": 595,
        "end": 620
      },
      "directive": null,
      "start": 595,
      "end": 621
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 126,
  "end": 660
}
```
