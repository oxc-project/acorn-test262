__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "let",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 7
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 10,
            "end": 12
          },
          "definite": false,
          "start": 4,
          "end": 12
        }
      ],
      "declare": false,
      "start": 0,
      "end": 13
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 24,
        "end": 27
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
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 36,
              "end": 48
            },
            "directive": "use strict",
            "start": 36,
            "end": 48
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
                  "name": "public",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 63
                },
                "init": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 66,
                  "end": 68
                },
                "definite": false,
                "start": 57,
                "end": 68
              }
            ],
            "declare": false,
            "start": 53,
            "end": 69
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
                  "name": "static",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 78,
                  "end": 84
                },
                "init": {
                  "type": "Literal",
                  "value": "hi",
                  "raw": "\"hi\"",
                  "start": 87,
                  "end": 91
                },
                "definite": false,
                "start": 78,
                "end": 91
              }
            ],
            "declare": false,
            "start": 74,
            "end": 92
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
                  "name": "let",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 104
                },
                "init": {
                  "type": "Literal",
                  "value": "blah",
                  "raw": "\"blah\"",
                  "start": 107,
                  "end": 113
                },
                "definite": false,
                "start": 101,
                "end": 113
              }
            ],
            "declare": false,
            "start": 97,
            "end": 114
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
                  "name": "package",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 123,
                  "end": 130
                },
                "init": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 133,
                  "end": 140
                },
                "definite": false,
                "start": 123,
                "end": 140
              }
            ],
            "declare": false,
            "start": 119,
            "end": 140
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "package",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 161
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 164,
              "end": 167
            },
            "expression": false,
            "start": 145,
            "end": 167
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 184
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "private",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 192
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "implements",
                "optional": false,
                "typeAnnotation": null,
                "start": 194,
                "end": 204
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "let",
                "optional": false,
                "typeAnnotation": null,
                "start": 206,
                "end": 209
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 211,
              "end": 214
            },
            "expression": false,
            "start": 172,
            "end": 214
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 231
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
                    "name": "implements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 232,
                    "end": 242
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 232,
                  "end": 242
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "protected",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 244,
                    "end": 253
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 244,
                  "end": 253
                }
              ],
              "start": 231,
              "end": 254
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 257,
              "end": 260
            },
            "expression": false,
            "start": 219,
            "end": 260
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "barn",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 278
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 284,
                        "end": 291
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "public",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 299
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "package",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 301,
                        "end": 308
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 313,
                        "end": 317
                      },
                      "start": 310,
                      "end": 317
                    },
                    "start": 283,
                    "end": 317
                  },
                  "start": 281,
                  "end": 317
                },
                "start": 279,
                "end": 317
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 319,
              "end": 322
            },
            "expression": false,
            "start": 265,
            "end": 322
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "barn",
                "optional": false,
                "typeAnnotation": null,
                "start": 327,
                "end": 331
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "private",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 333,
                      "end": 340
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "public",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 342,
                      "end": 348
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "package",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 350,
                      "end": 357
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 362,
                    "end": 365
                  },
                  "id": null,
                  "generator": false,
                  "start": 332,
                  "end": 365
                }
              ],
              "optional": false,
              "start": 327,
              "end": 366
            },
            "directive": null,
            "start": 327,
            "end": 367
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
                  "name": "myClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 384
                },
                "init": {
                  "type": "ClassExpression",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "package",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 393,
                    "end": 400
                  },
                  "typeParameters": null,
                  "superClass": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "public",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 409,
                    "end": 415
                  },
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [],
                    "start": 416,
                    "end": 418
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 387,
                  "end": 418
                },
                "definite": false,
                "start": 377,
                "end": 418
              }
            ],
            "declare": false,
            "start": 373,
            "end": 418
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
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "public",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 431,
                          "end": 437
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "bar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 438,
                          "end": 441
                        },
                        "start": 431,
                        "end": 441
                      },
                      "typeArguments": null,
                      "start": 431,
                      "end": 441
                    },
                    "start": 429,
                    "end": 441
                  },
                  "start": 428,
                  "end": 441
                },
                "init": null,
                "definite": false,
                "start": 428,
                "end": 441
              }
            ],
            "declare": false,
            "start": 424,
            "end": 442
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 457,
              "end": 460
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "private",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 464,
                        "end": 471
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 472,
                        "end": 473
                      },
                      "start": 464,
                      "end": 473
                    },
                    "typeArguments": null,
                    "start": 464,
                    "end": 473
                  },
                  "start": 462,
                  "end": 473
                },
                "start": 461,
                "end": 473
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 475,
              "end": 478
            },
            "expression": false,
            "start": 448,
            "end": 478
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo1",
              "optional": false,
              "typeAnnotation": null,
              "start": 492,
              "end": 496
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 500,
                          "end": 507
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 508,
                          "end": 515
                        },
                        "start": 500,
                        "end": 515
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 516,
                        "end": 517
                      },
                      "start": 500,
                      "end": 517
                    },
                    "typeArguments": null,
                    "start": 500,
                    "end": 517
                  },
                  "start": 498,
                  "end": 517
                },
                "start": 497,
                "end": 517
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 519,
              "end": 522
            },
            "expression": false,
            "start": 483,
            "end": 522
          },
          {
            "type": "FunctionDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo2",
              "optional": false,
              "typeAnnotation": null,
              "start": 536,
              "end": 540
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
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "private",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 544,
                          "end": 551
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "package",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 552,
                          "end": 559
                        },
                        "start": 544,
                        "end": 559
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "protected",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 560,
                        "end": 569
                      },
                      "start": 544,
                      "end": 569
                    },
                    "typeArguments": null,
                    "start": 544,
                    "end": 569
                  },
                  "start": 542,
                  "end": 569
                },
                "start": 541,
                "end": 569
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 571,
              "end": 574
            },
            "expression": false,
            "start": 527,
            "end": 574
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "interface",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 586,
                              "end": 595
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "package",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 603
                            },
                            "start": 586,
                            "end": 603
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "implements",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 604,
                            "end": 614
                          },
                          "start": 586,
                          "end": 614
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 616
                        },
                        "start": 586,
                        "end": 616
                      },
                      "typeArguments": null,
                      "start": 586,
                      "end": 616
                    },
                    "start": 584,
                    "end": 616
                  },
                  "start": 583,
                  "end": 616
                },
                "init": null,
                "definite": false,
                "start": 583,
                "end": 616
              }
            ],
            "declare": false,
            "start": 579,
            "end": 617
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "ublic",
                "optional": false,
                "typeAnnotation": null,
                "start": 622,
                "end": 627
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 622,
              "end": 629
            },
            "directive": null,
            "start": 622,
            "end": 630
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "static",
                "optional": false,
                "typeAnnotation": null,
                "start": 635,
                "end": 641
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 635,
              "end": 643
            },
            "directive": null,
            "start": 635,
            "end": 644
          }
        ],
        "start": 30,
        "end": 646
      },
      "expression": false,
      "start": 15,
      "end": 646
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 647
}
```
