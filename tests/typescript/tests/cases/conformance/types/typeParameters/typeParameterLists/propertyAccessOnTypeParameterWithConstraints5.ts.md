__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 17
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 21,
                  "end": 27
                },
                "start": 19,
                "end": 27
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 37,
                      "end": 39
                    },
                    "start": 30,
                    "end": 40
                  }
                ],
                "start": 28,
                "end": 42
              },
              "expression": false,
              "start": 17,
              "end": 42
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 14,
            "end": 42
          }
        ],
        "start": 8,
        "end": 44
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 44
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 53
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 63
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 73
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 77,
                  "end": 83
                },
                "start": 75,
                "end": 83
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": "",
                      "raw": "''",
                      "start": 101,
                      "end": 103
                    },
                    "start": 94,
                    "end": 104
                  }
                ],
                "start": 84,
                "end": 110
              },
              "expression": false,
              "start": 73,
              "end": 110
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 110
          }
        ],
        "start": 64,
        "end": 112
      },
      "abstract": false,
      "declare": false,
      "start": 46,
      "end": 112
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 121
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 132,
                "end": 133
              },
              "typeArguments": null,
              "start": 132,
              "end": 133
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 133
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 135,
              "end": 136
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 145,
                "end": 146
              },
              "typeArguments": null,
              "start": 145,
              "end": 146
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 135,
            "end": 146
          }
        ],
        "start": 121,
        "end": 147
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 155
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                    "kind": "var",
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
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 175,
                                "end": 176
                              },
                              "typeArguments": null,
                              "start": 175,
                              "end": 176
                            },
                            "start": 173,
                            "end": 176
                          },
                          "start": 172,
                          "end": 176
                        },
                        "init": null,
                        "definite": false,
                        "start": 172,
                        "end": 176
                      }
                    ],
                    "declare": false,
                    "start": 168,
                    "end": 177
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 190,
                          "end": 191
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 194,
                              "end": 195
                            },
                            "property": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "'foo'",
                              "start": 196,
                              "end": 201
                            },
                            "optional": false,
                            "computed": true,
                            "start": 194,
                            "end": 202
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 194,
                          "end": 204
                        },
                        "definite": false,
                        "start": 190,
                        "end": 204
                      }
                    ],
                    "declare": false,
                    "start": 186,
                    "end": 205
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 241,
                          "end": 242
                        },
                        "operator": "+",
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 245,
                              "end": 246
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 247,
                              "end": 250
                            },
                            "optional": false,
                            "computed": false,
                            "start": 245,
                            "end": 250
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 245,
                          "end": 252
                        },
                        "start": 241,
                        "end": 252
                      },
                      "operator": "+",
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 255,
                            "end": 256
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "notHere",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 257,
                            "end": 264
                          },
                          "optional": false,
                          "computed": false,
                          "start": 255,
                          "end": 264
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 255,
                        "end": 266
                      },
                      "start": 241,
                      "end": 266
                    },
                    "start": 234,
                    "end": 267
                  }
                ],
                "start": 158,
                "end": 273
              },
              "expression": false,
              "start": 155,
              "end": 273
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 154,
            "end": 273
          }
        ],
        "start": 148,
        "end": 275
      },
      "abstract": false,
      "declare": false,
      "start": 114,
      "end": 275
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
            "name": "r",
            "optional": false,
            "typeAnnotation": null,
            "start": 281,
            "end": 282
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 292,
                        "end": 293
                      },
                      "typeArguments": null,
                      "start": 292,
                      "end": 293
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 295,
                        "end": 296
                      },
                      "typeArguments": null,
                      "start": 295,
                      "end": 296
                    }
                  ],
                  "start": 291,
                  "end": 297
                },
                "arguments": [],
                "start": 286,
                "end": 299
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 302
              },
              "optional": false,
              "computed": false,
              "start": 285,
              "end": 302
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 285,
            "end": 304
          },
          "definite": false,
          "start": 281,
          "end": 304
        }
      ],
      "declare": false,
      "start": 277,
      "end": 305
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 317,
        "end": 318
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 319,
              "end": 320
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 330
              },
              "typeArguments": null,
              "start": 329,
              "end": 330
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 319,
            "end": 330
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 333
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 342,
                "end": 343
              },
              "typeArguments": null,
              "start": 342,
              "end": 343
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 332,
            "end": 343
          }
        ],
        "start": 318,
        "end": 344
      },
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
              "start": 351,
              "end": 354
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 357
                },
                "typeArguments": null,
                "start": 356,
                "end": 357
              },
              "start": 354,
              "end": 357
            },
            "accessibility": null,
            "static": false,
            "start": 351,
            "end": 358
          }
        ],
        "start": 345,
        "end": 360
      },
      "declare": false,
      "start": 307,
      "end": 360
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
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 368,
                  "end": 369
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "B",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 370,
                        "end": 371
                      },
                      "typeArguments": null,
                      "start": 370,
                      "end": 371
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 373,
                        "end": 374
                      },
                      "typeArguments": null,
                      "start": 373,
                      "end": 374
                    }
                  ],
                  "start": 369,
                  "end": 375
                },
                "start": 368,
                "end": 375
              },
              "start": 366,
              "end": 375
            },
            "start": 365,
            "end": 375
          },
          "init": null,
          "definite": false,
          "start": 365,
          "end": 375
        }
      ],
      "declare": false,
      "start": 361,
      "end": 376
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
            "name": "r2",
            "optional": false,
            "typeAnnotation": null,
            "start": 381,
            "end": 383
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 386,
                  "end": 387
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 391
                },
                "optional": false,
                "computed": false,
                "start": 386,
                "end": 391
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "typeAnnotation": null,
                "start": 392,
                "end": 399
              },
              "optional": false,
              "computed": false,
              "start": 386,
              "end": 399
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 386,
            "end": 401
          },
          "definite": false,
          "start": 381,
          "end": 401
        }
      ],
      "declare": false,
      "start": 377,
      "end": 402
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
            "name": "r2b",
            "optional": false,
            "typeAnnotation": null,
            "start": 407,
            "end": 410
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "i",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 413,
                  "end": 414
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 415,
                  "end": 418
                },
                "optional": false,
                "computed": false,
                "start": 413,
                "end": 418
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 419,
                "end": 424
              },
              "optional": false,
              "computed": true,
              "start": 413,
              "end": 425
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 413,
            "end": 427
          },
          "definite": false,
          "start": 407,
          "end": 427
        }
      ],
      "declare": false,
      "start": 403,
      "end": 428
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 444,
                            "end": 445
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 454,
                              "end": 455
                            },
                            "typeArguments": null,
                            "start": 454,
                            "end": 455
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 444,
                          "end": 455
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 457,
                            "end": 458
                          },
                          "constraint": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 467,
                              "end": 468
                            },
                            "typeArguments": null,
                            "start": 467,
                            "end": 468
                          },
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 457,
                          "end": 468
                        }
                      ],
                      "start": 443,
                      "end": 469
                    },
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 473,
                          "end": 474
                        },
                        "typeArguments": null,
                        "start": 473,
                        "end": 474
                      },
                      "start": 471,
                      "end": 474
                    },
                    "start": 443,
                    "end": 475
                  }
                ],
                "start": 437,
                "end": 477
              },
              "start": 435,
              "end": 477
            },
            "start": 434,
            "end": 477
          },
          "init": null,
          "definite": false,
          "start": 434,
          "end": 477
        }
      ],
      "declare": false,
      "start": 430,
      "end": 477
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
            "name": "r3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 500,
                "end": 506
              },
              "start": 498,
              "end": 506
            },
            "start": 496,
            "end": 506
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 509,
                  "end": 510
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 509,
                "end": 512
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "notHere",
                "optional": false,
                "typeAnnotation": null,
                "start": 513,
                "end": 520
              },
              "optional": false,
              "computed": false,
              "start": 509,
              "end": 520
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 509,
            "end": 522
          },
          "definite": false,
          "start": 496,
          "end": 522
        }
      ],
      "declare": false,
      "start": 492,
      "end": 523
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
            "name": "r3b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 533,
                "end": 539
              },
              "start": 531,
              "end": 539
            },
            "start": 528,
            "end": 539
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 542,
                  "end": 543
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 542,
                "end": 545
              },
              "property": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 546,
                "end": 551
              },
              "optional": false,
              "computed": true,
              "start": 542,
              "end": 552
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 542,
            "end": 554
          },
          "definite": false,
          "start": 528,
          "end": 554
        }
      ],
      "declare": false,
      "start": 524,
      "end": 555
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
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 571,
                  "end": 574
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 577,
                          "end": 578
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 587,
                            "end": 588
                          },
                          "typeArguments": null,
                          "start": 587,
                          "end": 588
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 577,
                        "end": 588
                      },
                      {
                        "type": "TSTypeParameter",
                        "name": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 590,
                          "end": 591
                        },
                        "constraint": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 600,
                            "end": 601
                          },
                          "typeArguments": null,
                          "start": 600,
                          "end": 601
                        },
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 590,
                        "end": 601
                      }
                    ],
                    "start": 576,
                    "end": 602
                  },
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
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 607
                          },
                          "typeArguments": null,
                          "start": 606,
                          "end": 607
                        },
                        "start": 604,
                        "end": 607
                      },
                      "start": 603,
                      "end": 607
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 610,
                        "end": 611
                      },
                      "typeArguments": null,
                      "start": 610,
                      "end": 611
                    },
                    "start": 608,
                    "end": 611
                  },
                  "body": {
                    "type": "BlockStatement",
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 629,
                              "end": 630
                            },
                            "init": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 633,
                                  "end": 634
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "'foo'",
                                  "start": 635,
                                  "end": 640
                                },
                                "optional": false,
                                "computed": true,
                                "start": 633,
                                "end": 641
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 633,
                              "end": 643
                            },
                            "definite": false,
                            "start": 629,
                            "end": 643
                          }
                        ],
                        "declare": false,
                        "start": 625,
                        "end": 644
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "BinaryExpression",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 680,
                            "end": 681
                          },
                          "operator": "+",
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 684,
                                "end": 685
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "notHere",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 686,
                                "end": 693
                              },
                              "optional": false,
                              "computed": false,
                              "start": 684,
                              "end": 693
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 684,
                            "end": 695
                          },
                          "start": 680,
                          "end": 695
                        },
                        "start": 673,
                        "end": 696
                      }
                    ],
                    "start": 615,
                    "end": 702
                  },
                  "id": null,
                  "generator": false,
                  "start": 576,
                  "end": 702
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 571,
                "end": 702
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 729
                },
                "value": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 731,
                          "end": 732
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 733,
                          "end": 736
                        },
                        "optional": false,
                        "computed": false,
                        "start": 731,
                        "end": 736
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 737,
                          "end": 738
                        }
                      ],
                      "optional": false,
                      "start": 731,
                      "end": 739
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "notHere",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 740,
                      "end": 747
                    },
                    "optional": false,
                    "computed": false,
                    "start": 731,
                    "end": 747
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 731,
                  "end": 749
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 726,
                "end": 749
              }
            ],
            "start": 565,
            "end": 751
          },
          "definite": false,
          "start": 561,
          "end": 751
        }
      ],
      "declare": false,
      "start": 557,
      "end": 751
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
            "name": "r4",
            "optional": false,
            "typeAnnotation": null,
            "start": 757,
            "end": 759
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 762,
                "end": 763
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 767
              },
              "optional": false,
              "computed": false,
              "start": 762,
              "end": 767
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 772,
                  "end": 773
                },
                "typeArguments": null,
                "arguments": [],
                "start": 768,
                "end": 775
              }
            ],
            "optional": false,
            "start": 762,
            "end": 776
          },
          "definite": false,
          "start": 757,
          "end": 776
        }
      ],
      "declare": false,
      "start": 753,
      "end": 777
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 839
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 14,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 19,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 21,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 30,
    "end": 36
  },
  {
    "type": "String",
    "value": "''",
    "start": 37,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 43,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 46,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 54,
    "end": 61
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 84,
    "end": 85
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 94,
    "end": 100
  },
  {
    "type": "String",
    "value": "''",
    "start": 101,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 114,
    "end": 119
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 132,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 135,
    "end": 136
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 137,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 168,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 172,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 186,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 195,
    "end": 196
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 196,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 234,
    "end": 240
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 245,
    "end": 246
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 247,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "notHere",
    "start": 257,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 277,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "r",
    "start": 281,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 295,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 300,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 303,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 304,
    "end": 305
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 307,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 318,
    "end": 319
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 319,
    "end": 320
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 321,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 330,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 332,
    "end": 333
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 334,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 351,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 361,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 368,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 374,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 375,
    "end": 376
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 377,
    "end": 380
  },
  {
    "type": "Identifier",
    "value": "r2",
    "start": 381,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 386,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 387,
    "end": 388
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 388,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "notHere",
    "start": 392,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 399,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 400,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 403,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "r2b",
    "start": 407,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 415,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 418,
    "end": 419
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 430,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 434,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 446,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 455,
    "end": 456
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 457,
    "end": 458
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 459,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 471,
    "end": 472
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "r3",
    "start": 496,
    "end": 498
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 498,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 500,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 507,
    "end": 508
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "notHere",
    "start": 513,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 522,
    "end": 523
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 524,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "r3b",
    "start": 528,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 533,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 540,
    "end": 541
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 545,
    "end": 546
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 546,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 554,
    "end": 555
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 557,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 565,
    "end": 566
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 571,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 579,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 587,
    "end": 588
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 592,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 612,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 625,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 634,
    "end": 635
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 635,
    "end": 640
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 640,
    "end": 641
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 641,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 642,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 673,
    "end": 679
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 685,
    "end": 686
  },
  {
    "type": "Identifier",
    "value": "notHere",
    "start": 686,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 694,
    "end": 695
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 702,
    "end": 703
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 726,
    "end": 729
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 729,
    "end": 730
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 731,
    "end": 732
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 733,
    "end": 736
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 736,
    "end": 737
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "notHere",
    "start": 740,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 753,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "r4",
    "start": 757,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 760,
    "end": 761
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 762,
    "end": 763
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 763,
    "end": 764
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 764,
    "end": 767
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 768,
    "end": 771
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 775,
    "end": 776
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 776,
    "end": 777
  }
]
```
