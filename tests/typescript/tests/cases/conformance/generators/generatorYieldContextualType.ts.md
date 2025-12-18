__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": true,
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
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 24
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 23,
            "end": 24
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 19,
        "end": 28
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Generator",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 40,
                    "end": 49
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 50,
                          "end": 51
                        },
                        "typeArguments": null,
                        "start": 50,
                        "end": 51
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 53,
                          "end": 54
                        },
                        "typeArguments": null,
                        "start": 53,
                        "end": 54
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "S",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 56,
                          "end": 57
                        },
                        "typeArguments": null,
                        "start": 56,
                        "end": 57
                      }
                    ],
                    "start": 49,
                    "end": 58
                  },
                  "start": 40,
                  "end": 58
                },
                "start": 37,
                "end": 58
              },
              "start": 34,
              "end": 58
            },
            "start": 32,
            "end": 58
          },
          "start": 29,
          "end": 58
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 61,
          "end": 65
        },
        "start": 59,
        "end": 65
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 69
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 70,
                "end": 71
              },
              "start": 70,
              "end": 71
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 73,
                "end": 74
              },
              "start": 73,
              "end": 74
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 76,
                "end": 77
              },
              "start": 76,
              "end": 77
            }
          ],
          "start": 69,
          "end": 78
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
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
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 101,
                        "end": 102
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 111,
                          "end": 112
                        },
                        "start": 105,
                        "end": 112
                      },
                      "definite": false,
                      "start": 101,
                      "end": 112
                    }
                  ],
                  "declare": false,
                  "start": 95,
                  "end": 113
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 122,
                    "end": 123
                  },
                  "start": 115,
                  "end": 124
                }
              ],
              "start": 92,
              "end": 126
            },
            "expression": false,
            "start": 79,
            "end": 126
          }
        ],
        "optional": false,
        "start": 67,
        "end": 127
      },
      "directive": null,
      "start": 67,
      "end": 128
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 147,
        "end": 149
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 150,
              "end": 151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 150,
            "end": 151
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 153,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 153,
            "end": 154
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "S",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 157
          }
        ],
        "start": 149,
        "end": 158
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "gen",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
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
                        "name": "Generator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 179
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 180,
                            "end": 181
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 184
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 184
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 186,
                              "end": 187
                            },
                            "typeArguments": null,
                            "start": 186,
                            "end": 187
                          }
                        ],
                        "start": 179,
                        "end": 188
                      },
                      "start": 170,
                      "end": 188
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "AsyncGenerator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 191,
                        "end": 205
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "R",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 206,
                              "end": 207
                            },
                            "typeArguments": null,
                            "start": 206,
                            "end": 207
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 209,
                              "end": 210
                            },
                            "typeArguments": null,
                            "start": 209,
                            "end": 210
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "S",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 212,
                              "end": 213
                            },
                            "typeArguments": null,
                            "start": 212,
                            "end": 213
                          }
                        ],
                        "start": 205,
                        "end": 214
                      },
                      "start": 191,
                      "end": 214
                    }
                  ],
                  "start": 170,
                  "end": 214
                },
                "start": 167,
                "end": 214
              },
              "start": 164,
              "end": 214
            },
            "start": 162,
            "end": 214
          },
          "start": 159,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 217,
          "end": 221
        },
        "start": 215,
        "end": 221
      },
      "body": null,
      "expression": false,
      "start": 130,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 225
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "params": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 226,
                "end": 227
              },
              "start": 226,
              "end": 227
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 229,
                "end": 230
              },
              "start": 229,
              "end": 230
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 232,
                "end": 233
              },
              "start": 232,
              "end": 233
            }
          ],
          "start": 225,
          "end": 234
        },
        "arguments": [
          {
            "type": "FunctionExpression",
            "id": null,
            "generator": true,
            "async": true,
            "declare": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "typeAnnotation": null,
                        "start": 263,
                        "end": 264
                      },
                      "init": {
                        "type": "YieldExpression",
                        "delegate": false,
                        "argument": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 273,
                          "end": 274
                        },
                        "start": 267,
                        "end": 274
                      },
                      "definite": false,
                      "start": 263,
                      "end": 274
                    }
                  ],
                  "declare": false,
                  "start": 257,
                  "end": 275
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 284,
                    "end": 285
                  },
                  "start": 277,
                  "end": 286
                }
              ],
              "start": 254,
              "end": 288
            },
            "expression": false,
            "start": 235,
            "end": 288
          }
        ],
        "optional": false,
        "start": 223,
        "end": 289
      },
      "directive": null,
      "start": 223,
      "end": 290
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 327
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Back",
              "optional": false,
              "typeAnnotation": null,
              "start": 332,
              "end": 336
            },
            "initializer": null,
            "computed": false,
            "start": 332,
            "end": 336
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Cancel",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 346
            },
            "initializer": null,
            "computed": false,
            "start": 340,
            "end": 346
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LoadMore",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 358
            },
            "initializer": null,
            "computed": false,
            "start": 350,
            "end": 358
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Noop",
              "optional": false,
              "typeAnnotation": null,
              "start": 362,
              "end": 366
            },
            "initializer": null,
            "computed": false,
            "start": 362,
            "end": 366
          }
        ],
        "start": 328,
        "end": 369
      },
      "const": false,
      "declare": false,
      "start": 313,
      "end": 369
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Directive",
        "optional": false,
        "typeAnnotation": null,
        "start": 381,
        "end": 390
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "is",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 413
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
                      "start": 414,
                      "end": 415
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 414,
                    "end": 415
                  }
                ],
                "start": 413,
                "end": 416
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 424,
                            "end": 433
                          },
                          "typeArguments": null,
                          "start": 424,
                          "end": 433
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 436,
                            "end": 437
                          },
                          "typeArguments": null,
                          "start": 436,
                          "end": 437
                        }
                      ],
                      "start": 424,
                      "end": 437
                    },
                    "start": 422,
                    "end": 437
                  },
                  "start": 417,
                  "end": 437
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "parameterName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 445
                  },
                  "asserts": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Directive",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 449,
                        "end": 458
                      },
                      "typeArguments": null,
                      "start": 449,
                      "end": 458
                    },
                    "start": 449,
                    "end": 458
                  },
                  "start": 440,
                  "end": 458
                },
                "start": 438,
                "end": 458
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "LogicalExpression",
                      "left": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "UnaryExpression",
                          "operator": "typeof",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 479,
                            "end": 484
                          },
                          "prefix": true,
                          "start": 472,
                          "end": 484
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "value": "number",
                          "raw": "\"number\"",
                          "start": 489,
                          "end": 497
                        },
                        "start": 472,
                        "end": 497
                      },
                      "operator": "&&",
                      "right": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Directive",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 501,
                            "end": 510
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 511,
                            "end": 516
                          },
                          "optional": false,
                          "computed": true,
                          "start": 501,
                          "end": 517
                        },
                        "operator": "!=",
                        "right": {
                          "type": "Literal",
                          "value": null,
                          "raw": "null",
                          "start": 521,
                          "end": 525
                        },
                        "start": 501,
                        "end": 525
                      },
                      "start": 472,
                      "end": 525
                    },
                    "start": 465,
                    "end": 526
                  }
                ],
                "start": 459,
                "end": 530
              },
              "expression": false,
              "start": 402,
              "end": 530
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 395,
            "end": 530
          }
        ],
        "start": 391,
        "end": 532
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 371,
      "end": 532
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickItem",
        "optional": false,
        "typeAnnotation": null,
        "start": 544,
        "end": 557
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
              "name": "label",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 567
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 569,
                "end": 575
              },
              "start": 567,
              "end": 575
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 576
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "description",
              "optional": false,
              "typeAnnotation": null,
              "start": 579,
              "end": 590
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 593,
                "end": 599
              },
              "start": 591,
              "end": 599
            },
            "accessibility": null,
            "static": false,
            "start": 579,
            "end": 600
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "detail",
              "optional": false,
              "typeAnnotation": null,
              "start": 603,
              "end": 609
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 612,
                "end": 618
              },
              "start": 610,
              "end": 618
            },
            "accessibility": null,
            "static": false,
            "start": 603,
            "end": 619
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "picked",
              "optional": false,
              "typeAnnotation": null,
              "start": 622,
              "end": 628
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 631,
                "end": 638
              },
              "start": 629,
              "end": 638
            },
            "accessibility": null,
            "static": false,
            "start": 622,
            "end": 639
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "alwaysShow",
              "optional": false,
              "typeAnnotation": null,
              "start": 642,
              "end": 652
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 655,
                "end": 662
              },
              "start": 653,
              "end": 662
            },
            "accessibility": null,
            "static": false,
            "start": 642,
            "end": 663
          }
        ],
        "start": 558,
        "end": 665
      },
      "declare": false,
      "start": 534,
      "end": 665
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickInputStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 677,
        "end": 691
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null,
              "start": 696,
              "end": 707
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 710,
                "end": 716
              },
              "start": 708,
              "end": 716
            },
            "accessibility": null,
            "static": false,
            "start": 696,
            "end": 717
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "prompt",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 726
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 729,
                "end": 735
              },
              "start": 727,
              "end": 735
            },
            "accessibility": null,
            "static": false,
            "start": 720,
            "end": 736
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 739,
              "end": 744
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 747,
                "end": 753
              },
              "start": 745,
              "end": 753
            },
            "accessibility": null,
            "static": false,
            "start": 739,
            "end": 754
          }
        ],
        "start": 692,
        "end": 756
      },
      "declare": false,
      "start": 667,
      "end": 756
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "QuickPickStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 768,
        "end": 781
      },
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
              "start": 782,
              "end": 783
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 792,
                "end": 805
              },
              "typeArguments": null,
              "start": 792,
              "end": 805
            },
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 821
              },
              "typeArguments": null,
              "start": 808,
              "end": 821
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 782,
            "end": 821
          }
        ],
        "start": 781,
        "end": 822
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "placeholder",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 838
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 841,
                "end": 847
              },
              "start": 839,
              "end": 847
            },
            "accessibility": null,
            "static": false,
            "start": 827,
            "end": 848
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "title",
              "optional": false,
              "typeAnnotation": null,
              "start": 851,
              "end": 856
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 859,
                "end": 865
              },
              "start": 857,
              "end": 865
            },
            "accessibility": null,
            "static": false,
            "start": 851,
            "end": 866
          }
        ],
        "start": 823,
        "end": 868
      },
      "declare": false,
      "start": 758,
      "end": 868
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepGenerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 875,
        "end": 888
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 895,
              "end": 904
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 912,
                        "end": 925
                      },
                      "typeArguments": null,
                      "start": 912,
                      "end": 925
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 928,
                        "end": 942
                      },
                      "typeArguments": null,
                      "start": 928,
                      "end": 942
                    }
                  ],
                  "start": 912,
                  "end": 942
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 950,
                    "end": 960
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 961,
                            "end": 965
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 968,
                            "end": 977
                          }
                        ],
                        "start": 961,
                        "end": 977
                      }
                    ],
                    "start": 960,
                    "end": 978
                  },
                  "start": 950,
                  "end": 978
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 986,
                      "end": 989
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 992,
                      "end": 1001
                    }
                  ],
                  "start": 986,
                  "end": 1001
                }
              ],
              "start": 904,
              "end": 1007
            },
            "start": 895,
            "end": 1007
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1012,
              "end": 1026
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1034,
                        "end": 1047
                      },
                      "typeArguments": null,
                      "start": 1034,
                      "end": 1047
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1050,
                        "end": 1064
                      },
                      "typeArguments": null,
                      "start": 1050,
                      "end": 1064
                    }
                  ],
                  "start": 1034,
                  "end": 1064
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1072,
                    "end": 1082
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSVoidKeyword",
                            "start": 1083,
                            "end": 1087
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 1090,
                            "end": 1099
                          }
                        ],
                        "start": 1083,
                        "end": 1099
                      }
                    ],
                    "start": 1082,
                    "end": 1100
                  },
                  "start": 1072,
                  "end": 1100
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1108,
                      "end": 1111
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1114,
                      "end": 1123
                    }
                  ],
                  "start": 1108,
                  "end": 1123
                }
              ],
              "start": 1026,
              "end": 1129
            },
            "start": 1012,
            "end": 1129
          }
        ],
        "start": 893,
        "end": 1129
      },
      "declare": false,
      "start": 870,
      "end": 1130
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepItemType",
        "optional": false,
        "typeAnnotation": null,
        "start": 1137,
        "end": 1149
      },
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
              "start": 1150,
              "end": 1151
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1150,
            "end": 1151
          }
        ],
        "start": 1149,
        "end": 1152
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1155,
            "end": 1156
          },
          "typeArguments": null,
          "start": 1155,
          "end": 1156
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 1165,
            "end": 1178
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1185,
                    "end": 1186
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1185,
                  "end": 1186
                },
                "start": 1179,
                "end": 1186
              }
            ],
            "start": 1178,
            "end": 1187
          },
          "start": 1165,
          "end": 1187
        },
        "trueType": {
          "type": "TSArrayType",
          "elementType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 1192,
              "end": 1193
            },
            "typeArguments": null,
            "start": 1192,
            "end": 1193
          },
          "start": 1192,
          "end": 1195
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1201
            },
            "typeArguments": null,
            "start": 1200,
            "end": 1201
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null,
              "start": 1210,
              "end": 1224
            },
            "typeArguments": null,
            "start": 1210,
            "end": 1224
          },
          "trueType": {
            "type": "TSStringKeyword",
            "start": 1229,
            "end": 1235
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1240,
            "end": 1245
          },
          "start": 1200,
          "end": 1245
        },
        "start": 1155,
        "end": 1245
      },
      "declare": false,
      "start": 1132,
      "end": 1246
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 1257,
        "end": 1267
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Break",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1285,
                    "end": 1290
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Symbol",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1293,
                      "end": 1299
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "BreakStep",
                        "raw": "\"BreakStep\"",
                        "start": 1300,
                        "end": 1311
                      }
                    ],
                    "optional": false,
                    "start": 1293,
                    "end": 1312
                  },
                  "definite": false,
                  "start": 1285,
                  "end": 1312
                }
              ],
              "declare": false,
              "start": 1279,
              "end": 1313
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 1272,
            "end": 1313
          }
        ],
        "start": 1268,
        "end": 1315
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 1247,
      "end": 1315
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 1321,
        "end": 1331
      },
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
              "start": 1332,
              "end": 1333
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1332,
            "end": 1333
          }
        ],
        "start": 1331,
        "end": 1334
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "TSQualifiedName",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 1344,
                "end": 1354
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "Break",
                "optional": false,
                "typeAnnotation": null,
                "start": 1355,
                "end": 1360
              },
              "start": 1344,
              "end": 1360
            },
            "typeArguments": null,
            "start": 1337,
            "end": 1360
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1363,
              "end": 1364
            },
            "typeArguments": null,
            "start": 1363,
            "end": 1364
          }
        ],
        "start": 1337,
        "end": 1364
      },
      "declare": false,
      "start": 1316,
      "end": 1365
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepResultGenerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 1371,
        "end": 1390
      },
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
              "start": 1391,
              "end": 1392
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1391,
            "end": 1392
          }
        ],
        "start": 1390,
        "end": 1393
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Generator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1400,
              "end": 1409
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1410,
                        "end": 1423
                      },
                      "typeArguments": null,
                      "start": 1410,
                      "end": 1423
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1426,
                        "end": 1440
                      },
                      "typeArguments": null,
                      "start": 1426,
                      "end": 1440
                    }
                  ],
                  "start": 1410,
                  "end": 1440
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1442,
                    "end": 1452
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1453,
                          "end": 1454
                        },
                        "typeArguments": null,
                        "start": 1453,
                        "end": 1454
                      }
                    ],
                    "start": 1452,
                    "end": 1455
                  },
                  "start": 1442,
                  "end": 1455
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1457,
                      "end": 1460
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1463,
                      "end": 1472
                    }
                  ],
                  "start": 1457,
                  "end": 1472
                }
              ],
              "start": 1409,
              "end": 1473
            },
            "start": 1400,
            "end": 1473
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "AsyncGenerator",
              "optional": false,
              "typeAnnotation": null,
              "start": 1478,
              "end": 1492
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1500,
                        "end": 1513
                      },
                      "typeArguments": null,
                      "start": 1500,
                      "end": 1513
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickInputStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1516,
                        "end": 1530
                      },
                      "typeArguments": null,
                      "start": 1516,
                      "end": 1530
                    }
                  ],
                  "start": 1500,
                  "end": 1530
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1538,
                    "end": 1548
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1549,
                          "end": 1550
                        },
                        "typeArguments": null,
                        "start": 1549,
                        "end": 1550
                      }
                    ],
                    "start": 1548,
                    "end": 1551
                  },
                  "start": 1538,
                  "end": 1551
                },
                {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 1559,
                      "end": 1562
                    },
                    {
                      "type": "TSUndefinedKeyword",
                      "start": 1565,
                      "end": 1574
                    }
                  ],
                  "start": 1559,
                  "end": 1574
                }
              ],
              "start": 1492,
              "end": 1580
            },
            "start": 1478,
            "end": 1580
          }
        ],
        "start": 1398,
        "end": 1580
      },
      "declare": false,
      "start": 1366,
      "end": 1581
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepSelection",
        "optional": false,
        "typeAnnotation": null,
        "start": 1587,
        "end": 1600
      },
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
              "start": 1601,
              "end": 1602
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1601,
            "end": 1602
          }
        ],
        "start": 1600,
        "end": 1603
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 1606,
            "end": 1607
          },
          "typeArguments": null,
          "start": 1606,
          "end": 1607
        },
        "extendsType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 1616,
            "end": 1629
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSInferType",
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1636,
                    "end": 1637
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 1636,
                  "end": 1637
                },
                "start": 1630,
                "end": 1637
              }
            ],
            "start": 1629,
            "end": 1638
          },
          "start": 1616,
          "end": 1638
        },
        "trueType": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1643,
                  "end": 1644
                },
                "typeArguments": null,
                "start": 1643,
                "end": 1644
              },
              "start": 1643,
              "end": 1646
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Directive",
                "optional": false,
                "typeAnnotation": null,
                "start": 1649,
                "end": 1658
              },
              "typeArguments": null,
              "start": 1649,
              "end": 1658
            }
          ],
          "start": 1643,
          "end": 1658
        },
        "falseType": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1663,
              "end": 1664
            },
            "typeArguments": null,
            "start": 1663,
            "end": 1664
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "QuickInputStep",
              "optional": false,
              "typeAnnotation": null,
              "start": 1673,
              "end": 1687
            },
            "typeArguments": null,
            "start": 1673,
            "end": 1687
          },
          "trueType": {
            "type": "TSUnionType",
            "types": [
              {
                "type": "TSStringKeyword",
                "start": 1692,
                "end": 1698
              },
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Directive",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1701,
                  "end": 1710
                },
                "typeArguments": null,
                "start": 1701,
                "end": 1710
              }
            ],
            "start": 1692,
            "end": 1710
          },
          "falseType": {
            "type": "TSNeverKeyword",
            "start": 1715,
            "end": 1720
          },
          "start": 1663,
          "end": 1720
        },
        "start": 1606,
        "end": 1720
      },
      "declare": false,
      "start": 1582,
      "end": 1721
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "PartialStepState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1727,
        "end": 1743
      },
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
              "start": 1744,
              "end": 1745
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 1748,
              "end": 1755
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1744,
            "end": 1755
          }
        ],
        "start": 1743,
        "end": 1756
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Partial",
              "optional": false,
              "typeAnnotation": null,
              "start": 1759,
              "end": 1766
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1767,
                    "end": 1768
                  },
                  "typeArguments": null,
                  "start": 1767,
                  "end": 1768
                }
              ],
              "start": 1766,
              "end": 1769
            },
            "start": 1759,
            "end": 1769
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1776,
                  "end": 1783
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1785,
                    "end": 1791
                  },
                  "start": 1783,
                  "end": 1791
                },
                "accessibility": null,
                "static": false,
                "start": 1776,
                "end": 1792
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1795,
                  "end": 1802
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1805,
                    "end": 1812
                  },
                  "start": 1803,
                  "end": 1812
                },
                "accessibility": null,
                "static": false,
                "start": 1795,
                "end": 1813
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1816,
                  "end": 1828
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1831,
                    "end": 1837
                  },
                  "start": 1829,
                  "end": 1837
                },
                "accessibility": null,
                "static": false,
                "start": 1816,
                "end": 1838
              }
            ],
            "start": 1772,
            "end": 1840
          }
        ],
        "start": 1759,
        "end": 1840
      },
      "declare": false,
      "start": 1722,
      "end": 1841
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StepState",
        "optional": false,
        "typeAnnotation": null,
        "start": 1847,
        "end": 1856
      },
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
              "start": 1857,
              "end": 1858
            },
            "constraint": null,
            "default": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 1861,
                "end": 1867
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1868,
                    "end": 1874
                  },
                  {
                    "type": "TSUnknownKeyword",
                    "start": 1876,
                    "end": 1883
                  }
                ],
                "start": 1867,
                "end": 1884
              },
              "start": 1861,
              "end": 1884
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 1857,
            "end": 1884
          }
        ],
        "start": 1856,
        "end": 1885
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 1888,
              "end": 1889
            },
            "typeArguments": null,
            "start": 1888,
            "end": 1889
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
                  "name": "counter",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1896,
                  "end": 1903
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1905,
                    "end": 1911
                  },
                  "start": 1903,
                  "end": 1911
                },
                "accessibility": null,
                "static": false,
                "start": 1896,
                "end": 1912
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "confirm",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1915,
                  "end": 1922
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1925,
                    "end": 1932
                  },
                  "start": 1923,
                  "end": 1932
                },
                "accessibility": null,
                "static": false,
                "start": 1915,
                "end": 1933
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "startingStep",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1936,
                  "end": 1948
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 1951,
                    "end": 1957
                  },
                  "start": 1949,
                  "end": 1957
                },
                "accessibility": null,
                "static": false,
                "start": 1936,
                "end": 1958
              }
            ],
            "start": 1892,
            "end": 1960
          }
        ],
        "start": 1888,
        "end": 1960
      },
      "declare": false,
      "start": 1842,
      "end": 1961
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "canPickStepContinue",
        "optional": false,
        "typeAnnotation": null,
        "start": 1972,
        "end": 1991
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
              "start": 1992,
              "end": 1993
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null,
                "start": 2002,
                "end": 2015
              },
              "typeArguments": null,
              "start": 2002,
              "end": 2015
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1992,
            "end": 2015
          }
        ],
        "start": 1991,
        "end": 2016
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_step",
          "optional": false,
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
                "start": 2027,
                "end": 2028
              },
              "typeArguments": null,
              "start": 2027,
              "end": 2028
            },
            "start": 2025,
            "end": 2028
          },
          "start": 2020,
          "end": 2028
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "PartialStepState",
                "optional": false,
                "typeAnnotation": null,
                "start": 2040,
                "end": 2056
              },
              "typeArguments": null,
              "start": 2040,
              "end": 2056
            },
            "start": 2038,
            "end": 2056
          },
          "start": 2032,
          "end": 2056
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_selection",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "StepItemType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2072,
                    "end": 2084
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2085,
                          "end": 2086
                        },
                        "typeArguments": null,
                        "start": 2085,
                        "end": 2086
                      }
                    ],
                    "start": 2084,
                    "end": 2087
                  },
                  "start": 2072,
                  "end": 2087
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Directive",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2090,
                    "end": 2099
                  },
                  "typeArguments": null,
                  "start": 2090,
                  "end": 2099
                }
              ],
              "start": 2072,
              "end": 2099
            },
            "start": 2070,
            "end": 2099
          },
          "start": 2060,
          "end": 2099
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "_selection",
            "optional": false,
            "typeAnnotation": null,
            "start": 2103,
            "end": 2113
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "StepItemType",
                "optional": false,
                "typeAnnotation": null,
                "start": 2117,
                "end": 2129
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2130,
                      "end": 2131
                    },
                    "typeArguments": null,
                    "start": 2130,
                    "end": 2131
                  }
                ],
                "start": 2129,
                "end": 2132
              },
              "start": 2117,
              "end": 2132
            },
            "start": 2117,
            "end": 2132
          },
          "start": 2103,
          "end": 2132
        },
        "start": 2101,
        "end": 2132
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": false,
              "raw": "false",
              "start": 2144,
              "end": 2149
            },
            "start": 2137,
            "end": 2150
          }
        ],
        "start": 2133,
        "end": 2152
      },
      "expression": false,
      "start": 1963,
      "end": 2152
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createPickStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 2163,
        "end": 2177
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
              "start": 2178,
              "end": 2179
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickItem",
                "optional": false,
                "typeAnnotation": null,
                "start": 2188,
                "end": 2201
              },
              "typeArguments": null,
              "start": 2188,
              "end": 2201
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2178,
            "end": 2201
          }
        ],
        "start": 2177,
        "end": 2202
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "step",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "QuickPickStep",
                "optional": false,
                "typeAnnotation": null,
                "start": 2212,
                "end": 2225
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2226,
                      "end": 2227
                    },
                    "typeArguments": null,
                    "start": 2226,
                    "end": 2227
                  }
                ],
                "start": 2225,
                "end": 2228
              },
              "start": 2212,
              "end": 2228
            },
            "start": 2210,
            "end": 2228
          },
          "start": 2206,
          "end": 2228
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "QuickPickStep",
            "optional": false,
            "typeAnnotation": null,
            "start": 2232,
            "end": 2245
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2246,
                  "end": 2247
                },
                "typeArguments": null,
                "start": 2246,
                "end": 2247
              }
            ],
            "start": 2245,
            "end": 2248
          },
          "start": 2232,
          "end": 2248
        },
        "start": 2230,
        "end": 2248
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "step",
              "optional": false,
              "typeAnnotation": null,
              "start": 2260,
              "end": 2264
            },
            "start": 2253,
            "end": 2265
          }
        ],
        "start": 2249,
        "end": 2267
      },
      "expression": false,
      "start": 2154,
      "end": 2267
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "showStep",
        "optional": false,
        "typeAnnotation": null,
        "start": 2279,
        "end": 2287
      },
      "generator": true,
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
              "name": "State",
              "optional": false,
              "typeAnnotation": null,
              "start": 2291,
              "end": 2296
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "PartialStepState",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2305,
                    "end": 2321
                  },
                  "typeArguments": null,
                  "start": 2305,
                  "end": 2321
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
                        "name": "repo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2326,
                        "end": 2330
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSAnyKeyword",
                          "start": 2332,
                          "end": 2335
                        },
                        "start": 2330,
                        "end": 2335
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 2326,
                      "end": 2335
                    }
                  ],
                  "start": 2324,
                  "end": 2337
                }
              ],
              "start": 2305,
              "end": 2337
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2291,
            "end": 2337
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 2341,
              "end": 2348
            },
            "constraint": {
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
                    "name": "repos",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2359,
                    "end": 2364
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 2366,
                        "end": 2369
                      },
                      "start": 2366,
                      "end": 2371
                    },
                    "start": 2364,
                    "end": 2371
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2359,
                  "end": 2372
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "title",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2373,
                    "end": 2378
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 2380,
                      "end": 2386
                    },
                    "start": 2378,
                    "end": 2386
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2373,
                  "end": 2387
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "status",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2388,
                    "end": 2394
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 2396,
                      "end": 2399
                    },
                    "start": 2394,
                    "end": 2399
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 2388,
                  "end": 2399
                }
              ],
              "start": 2357,
              "end": 2401
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2341,
            "end": 2401
          }
        ],
        "start": 2287,
        "end": 2403
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "state",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "State",
                "optional": false,
                "typeAnnotation": null,
                "start": 2411,
                "end": 2416
              },
              "typeArguments": null,
              "start": 2411,
              "end": 2416
            },
            "start": 2409,
            "end": 2416
          },
          "start": 2404,
          "end": 2416
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "_context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null,
                "start": 2428,
                "end": 2435
              },
              "typeArguments": null,
              "start": 2428,
              "end": 2435
            },
            "start": 2426,
            "end": 2435
          },
          "start": 2418,
          "end": 2435
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "StepResultGenerator",
            "optional": false,
            "typeAnnotation": null,
            "start": 2438,
            "end": 2457
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "QuickPickItem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2458,
                  "end": 2471
                },
                "typeArguments": null,
                "start": 2458,
                "end": 2471
              }
            ],
            "start": 2457,
            "end": 2472
          },
          "start": 2438,
          "end": 2472
        },
        "start": 2436,
        "end": 2472
      },
      "body": {
        "type": "BlockStatement",
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
                  "name": "step",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "QuickPickStep",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2489,
                        "end": 2502
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "QuickPickItem",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2503,
                              "end": 2516
                            },
                            "typeArguments": null,
                            "start": 2503,
                            "end": 2516
                          }
                        ],
                        "start": 2502,
                        "end": 2517
                      },
                      "start": 2489,
                      "end": 2517
                    },
                    "start": 2487,
                    "end": 2517
                  },
                  "start": 2483,
                  "end": 2517
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "createPickStep",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2520,
                    "end": 2534
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "QuickPickItem",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2535,
                          "end": 2548
                        },
                        "typeArguments": null,
                        "start": 2535,
                        "end": 2548
                      }
                    ],
                    "start": 2534,
                    "end": 2549
                  },
                  "arguments": [
                    {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "title",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2556,
                            "end": 2561
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 2563,
                            "end": 2565
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2556,
                          "end": 2565
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "placeholder",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2571,
                            "end": 2582
                          },
                          "value": {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\"",
                            "start": 2584,
                            "end": 2586
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2571,
                          "end": 2586
                        }
                      ],
                      "start": 2550,
                      "end": 2591
                    }
                  ],
                  "optional": false,
                  "start": 2520,
                  "end": 2592
                },
                "definite": false,
                "start": 2483,
                "end": 2592
              }
            ],
            "declare": false,
            "start": 2477,
            "end": 2593
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
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "StepSelection",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2613,
                        "end": 2626
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeQuery",
                            "exprName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "step",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2634,
                              "end": 2638
                            },
                            "typeArguments": null,
                            "start": 2627,
                            "end": 2638
                          }
                        ],
                        "start": 2626,
                        "end": 2639
                      },
                      "start": 2613,
                      "end": 2639
                    },
                    "start": 2611,
                    "end": 2639
                  },
                  "start": 2602,
                  "end": 2639
                },
                "init": {
                  "type": "YieldExpression",
                  "delegate": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2648,
                    "end": 2652
                  },
                  "start": 2642,
                  "end": 2652
                },
                "definite": false,
                "start": 2602,
                "end": 2652
              }
            ],
            "declare": false,
            "start": 2596,
            "end": 2653
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "canPickStepContinue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2663,
                  "end": 2682
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "step",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2683,
                    "end": 2687
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "state",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2689,
                    "end": 2694
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "selection",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2696,
                    "end": 2705
                  }
                ],
                "optional": false,
                "start": 2663,
                "end": 2706
              },
              "consequent": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "selection",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2713,
                  "end": 2722
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 2723,
                  "end": 2724
                },
                "optional": false,
                "computed": true,
                "start": 2713,
                "end": 2725
              },
              "alternate": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "StepResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2732,
                  "end": 2742
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Break",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2743,
                  "end": 2748
                },
                "optional": false,
                "computed": false,
                "start": 2732,
                "end": 2748
              },
              "start": 2663,
              "end": 2748
            },
            "start": 2656,
            "end": 2749
          }
        ],
        "start": 2473,
        "end": 2751
      },
      "expression": false,
      "start": 2269,
      "end": 2751
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2751
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8,
    "end": 16,
    "range": [
      8,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 29,
    "end": 32,
    "range": [
      29,
      32
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 32,
    "end": 33,
    "range": [
      32,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 34,
    "end": 35,
    "range": [
      34,
      35
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 35,
    "end": 36,
    "range": [
      35,
      36
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 37,
    "end": 39,
    "range": [
      37,
      39
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 40,
    "end": 49,
    "range": [
      40,
      49
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 50,
    "end": 51,
    "range": [
      50,
      51
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 51,
    "end": 52,
    "range": [
      51,
      52
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 53,
    "end": 54,
    "range": [
      53,
      54
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55,
    "range": [
      54,
      55
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 56,
    "end": 57,
    "range": [
      56,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 58,
    "end": 59,
    "range": [
      58,
      59
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60,
    "range": [
      59,
      60
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 61,
    "end": 65,
    "range": [
      61,
      65
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 65,
    "end": 66,
    "range": [
      65,
      66
    ]
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72,
    "range": [
      71,
      72
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 73,
    "end": 74,
    "range": [
      73,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79,
    "range": [
      78,
      79
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 79,
    "end": 87,
    "range": [
      79,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 90,
    "end": 91,
    "range": [
      90,
      91
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93,
    "range": [
      92,
      93
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 95,
    "end": 100,
    "range": [
      95,
      100
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 105,
    "end": 110,
    "range": [
      105,
      110
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 112,
    "end": 113,
    "range": [
      112,
      113
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 115,
    "end": 121,
    "range": [
      115,
      121
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 122,
    "end": 123,
    "range": [
      122,
      123
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 123,
    "end": 124,
    "range": [
      123,
      124
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 125,
    "end": 126,
    "range": [
      125,
      126
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 130,
    "end": 137,
    "range": [
      130,
      137
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 138,
    "end": 146,
    "range": [
      138,
      146
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 147,
    "end": 149,
    "range": [
      147,
      149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 149,
    "end": 150,
    "range": [
      149,
      150
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 150,
    "end": 151,
    "range": [
      150,
      151
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 151,
    "end": 152,
    "range": [
      151,
      152
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Identifier",
    "value": "gen",
    "start": 159,
    "end": 162,
    "range": [
      159,
      162
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 162,
    "end": 163,
    "range": [
      162,
      163
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 164,
    "end": 165,
    "range": [
      164,
      165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 165,
    "end": 166,
    "range": [
      165,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 167,
    "end": 169,
    "range": [
      167,
      169
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 170,
    "end": 179,
    "range": [
      170,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 186,
    "end": 187,
    "range": [
      186,
      187
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 191,
    "end": 205,
    "range": [
      191,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Identifier",
    "value": "R",
    "start": 206,
    "end": 207,
    "range": [
      206,
      207
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208,
    "range": [
      207,
      208
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "S",
    "start": 212,
    "end": 213,
    "range": [
      212,
      213
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214,
    "range": [
      213,
      214
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 214,
    "end": 215,
    "range": [
      214,
      215
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216,
    "range": [
      215,
      216
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 217,
    "end": 221,
    "range": [
      217,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 223,
    "end": 225,
    "range": [
      223,
      225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 225,
    "end": 226,
    "range": [
      225,
      226
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 226,
    "end": 227,
    "range": [
      226,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 232,
    "end": 233,
    "range": [
      232,
      233
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 234,
    "end": 235,
    "range": [
      234,
      235
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 235,
    "end": 240,
    "range": [
      235,
      240
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 241,
    "end": 249,
    "range": [
      241,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 249,
    "end": 250,
    "range": [
      249,
      250
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252,
    "range": [
      251,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255,
    "range": [
      254,
      255
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 257,
    "end": 262,
    "range": [
      257,
      262
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 267,
    "end": 272,
    "range": [
      267,
      272
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 273,
    "end": 274,
    "range": [
      273,
      274
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275,
    "range": [
      274,
      275
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 277,
    "end": 283,
    "range": [
      277,
      283
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 284,
    "end": 285,
    "range": [
      284,
      285
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286,
    "range": [
      285,
      286
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 287,
    "end": 288,
    "range": [
      287,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 313,
    "end": 317,
    "range": [
      313,
      317
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 318,
    "end": 327,
    "range": [
      318,
      327
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 328,
    "end": 329,
    "range": [
      328,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "Back",
    "start": 332,
    "end": 336,
    "range": [
      332,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 336,
    "end": 337,
    "range": [
      336,
      337
    ]
  },
  {
    "type": "Identifier",
    "value": "Cancel",
    "start": 340,
    "end": 346,
    "range": [
      340,
      346
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347,
    "range": [
      346,
      347
    ]
  },
  {
    "type": "Identifier",
    "value": "LoadMore",
    "start": 350,
    "end": 358,
    "range": [
      350,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 358,
    "end": 359,
    "range": [
      358,
      359
    ]
  },
  {
    "type": "Identifier",
    "value": "Noop",
    "start": 362,
    "end": 366,
    "range": [
      362,
      366
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 366,
    "end": 367,
    "range": [
      366,
      367
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 368,
    "end": 369,
    "range": [
      368,
      369
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 371,
    "end": 380,
    "range": [
      371,
      380
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 381,
    "end": 390,
    "range": [
      381,
      390
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 391,
    "end": 392,
    "range": [
      391,
      392
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 395,
    "end": 401,
    "range": [
      395,
      401
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 402,
    "end": 410,
    "range": [
      402,
      410
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 413,
    "end": 414,
    "range": [
      413,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 415,
    "end": 416,
    "range": [
      415,
      416
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417,
    "range": [
      416,
      417
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 417,
    "end": 422,
    "range": [
      417,
      422
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 422,
    "end": 423,
    "range": [
      422,
      423
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 424,
    "end": 433,
    "range": [
      424,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 434,
    "end": 435,
    "range": [
      434,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 436,
    "end": 437,
    "range": [
      436,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 437,
    "end": 438,
    "range": [
      437,
      438
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 440,
    "end": 445,
    "range": [
      440,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 446,
    "end": 448,
    "range": [
      446,
      448
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 449,
    "end": 458,
    "range": [
      449,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 465,
    "end": 471,
    "range": [
      465,
      471
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 472,
    "end": 478,
    "range": [
      472,
      478
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 479,
    "end": 484,
    "range": [
      479,
      484
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 485,
    "end": 488,
    "range": [
      485,
      488
    ]
  },
  {
    "type": "String",
    "value": "\"number\"",
    "start": 489,
    "end": 497,
    "range": [
      489,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 501,
    "end": 510,
    "range": [
      501,
      510
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 510,
    "end": 511,
    "range": [
      510,
      511
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 511,
    "end": 516,
    "range": [
      511,
      516
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 516,
    "end": 517,
    "range": [
      516,
      517
    ]
  },
  {
    "type": "Punctuator",
    "value": "!=",
    "start": 518,
    "end": 520,
    "range": [
      518,
      520
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 521,
    "end": 525,
    "range": [
      521,
      525
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 525,
    "end": 526,
    "range": [
      525,
      526
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 529,
    "end": 530,
    "range": [
      529,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 531,
    "end": 532,
    "range": [
      531,
      532
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 534,
    "end": 543,
    "range": [
      534,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 544,
    "end": 557,
    "range": [
      544,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Identifier",
    "value": "label",
    "start": 562,
    "end": 567,
    "range": [
      562,
      567
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 567,
    "end": 568,
    "range": [
      567,
      568
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 569,
    "end": 575,
    "range": [
      569,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "description",
    "start": 579,
    "end": 590,
    "range": [
      579,
      590
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 590,
    "end": 591,
    "range": [
      590,
      591
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592,
    "range": [
      591,
      592
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 593,
    "end": 599,
    "range": [
      593,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 599,
    "end": 600,
    "range": [
      599,
      600
    ]
  },
  {
    "type": "Identifier",
    "value": "detail",
    "start": 603,
    "end": 609,
    "range": [
      603,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 612,
    "end": 618,
    "range": [
      612,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Identifier",
    "value": "picked",
    "start": 622,
    "end": 628,
    "range": [
      622,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 628,
    "end": 629,
    "range": [
      628,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630,
    "range": [
      629,
      630
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 631,
    "end": 638,
    "range": [
      631,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639,
    "range": [
      638,
      639
    ]
  },
  {
    "type": "Identifier",
    "value": "alwaysShow",
    "start": 642,
    "end": 652,
    "range": [
      642,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 653,
    "end": 654,
    "range": [
      653,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 655,
    "end": 662,
    "range": [
      655,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 664,
    "end": 665,
    "range": [
      664,
      665
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 667,
    "end": 676,
    "range": [
      667,
      676
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 677,
    "end": 691,
    "range": [
      677,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 692,
    "end": 693,
    "range": [
      692,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 696,
    "end": 707,
    "range": [
      696,
      707
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 707,
    "end": 708,
    "range": [
      707,
      708
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709,
    "range": [
      708,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 710,
    "end": 716,
    "range": [
      710,
      716
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 716,
    "end": 717,
    "range": [
      716,
      717
    ]
  },
  {
    "type": "Identifier",
    "value": "prompt",
    "start": 720,
    "end": 726,
    "range": [
      720,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 729,
    "end": 735,
    "range": [
      729,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736,
    "range": [
      735,
      736
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 739,
    "end": 744,
    "range": [
      739,
      744
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 744,
    "end": 745,
    "range": [
      744,
      745
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 745,
    "end": 746,
    "range": [
      745,
      746
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 747,
    "end": 753,
    "range": [
      747,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 758,
    "end": 767,
    "range": [
      758,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 768,
    "end": 781,
    "range": [
      768,
      781
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 781,
    "end": 782,
    "range": [
      781,
      782
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 782,
    "end": 783,
    "range": [
      782,
      783
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 784,
    "end": 791,
    "range": [
      784,
      791
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 792,
    "end": 805,
    "range": [
      792,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 806,
    "end": 807,
    "range": [
      806,
      807
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 808,
    "end": 821,
    "range": [
      808,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824,
    "range": [
      823,
      824
    ]
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 827,
    "end": 838,
    "range": [
      827,
      838
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 838,
    "end": 839,
    "range": [
      838,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 839,
    "end": 840,
    "range": [
      839,
      840
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 841,
    "end": 847,
    "range": [
      841,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 851,
    "end": 856,
    "range": [
      851,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 856,
    "end": 857,
    "range": [
      856,
      857
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 859,
    "end": 865,
    "range": [
      859,
      865
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 865,
    "end": 866,
    "range": [
      865,
      866
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868,
    "range": [
      867,
      868
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 870,
    "end": 874,
    "range": [
      870,
      874
    ]
  },
  {
    "type": "Identifier",
    "value": "StepGenerator",
    "start": 875,
    "end": 888,
    "range": [
      875,
      888
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 893,
    "end": 894,
    "range": [
      893,
      894
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 895,
    "end": 904,
    "range": [
      895,
      904
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 904,
    "end": 905,
    "range": [
      904,
      905
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 912,
    "end": 925,
    "range": [
      912,
      925
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 928,
    "end": 942,
    "range": [
      928,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 942,
    "end": 943,
    "range": [
      942,
      943
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 950,
    "end": 960,
    "range": [
      950,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 960,
    "end": 961,
    "range": [
      960,
      961
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 961,
    "end": 965,
    "range": [
      961,
      965
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 966,
    "end": 967,
    "range": [
      966,
      967
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 968,
    "end": 977,
    "range": [
      968,
      977
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 977,
    "end": 978,
    "range": [
      977,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 978,
    "end": 979,
    "range": [
      978,
      979
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 986,
    "end": 989,
    "range": [
      986,
      989
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 990,
    "end": 991,
    "range": [
      990,
      991
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 992,
    "end": 1001,
    "range": [
      992,
      1001
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1006,
    "end": 1007,
    "range": [
      1006,
      1007
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1010,
    "end": 1011,
    "range": [
      1010,
      1011
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1012,
    "end": 1026,
    "range": [
      1012,
      1026
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1026,
    "end": 1027,
    "range": [
      1026,
      1027
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1034,
    "end": 1047,
    "range": [
      1034,
      1047
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1048,
    "end": 1049,
    "range": [
      1048,
      1049
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1050,
    "end": 1064,
    "range": [
      1050,
      1064
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1064,
    "end": 1065,
    "range": [
      1064,
      1065
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1072,
    "end": 1082,
    "range": [
      1072,
      1082
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 1083,
    "end": 1087,
    "range": [
      1083,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1088,
    "end": 1089,
    "range": [
      1088,
      1089
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1090,
    "end": 1099,
    "range": [
      1090,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1099,
    "end": 1100,
    "range": [
      1099,
      1100
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1108,
    "end": 1111,
    "range": [
      1108,
      1111
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1112,
    "end": 1113,
    "range": [
      1112,
      1113
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1114,
    "end": 1123,
    "range": [
      1114,
      1123
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1129,
    "end": 1130,
    "range": [
      1129,
      1130
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1132,
    "end": 1136,
    "range": [
      1132,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 1137,
    "end": 1149,
    "range": [
      1137,
      1149
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1150,
    "end": 1151,
    "range": [
      1150,
      1151
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1151,
    "end": 1152,
    "range": [
      1151,
      1152
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154,
    "range": [
      1153,
      1154
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1157,
    "end": 1164,
    "range": [
      1157,
      1164
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1165,
    "end": 1178,
    "range": [
      1165,
      1178
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1178,
    "end": 1179,
    "range": [
      1178,
      1179
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1179,
    "end": 1184,
    "range": [
      1179,
      1184
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1185,
    "end": 1186,
    "range": [
      1185,
      1186
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1190,
    "end": 1191,
    "range": [
      1190,
      1191
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1192,
    "end": 1193,
    "range": [
      1192,
      1193
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1193,
    "end": 1194,
    "range": [
      1193,
      1194
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1194,
    "end": 1195,
    "range": [
      1194,
      1195
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1200,
    "end": 1201,
    "range": [
      1200,
      1201
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1202,
    "end": 1209,
    "range": [
      1202,
      1209
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1210,
    "end": 1224,
    "range": [
      1210,
      1224
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1227,
    "end": 1228,
    "range": [
      1227,
      1228
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1229,
    "end": 1235,
    "range": [
      1229,
      1235
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1238,
    "end": 1239,
    "range": [
      1238,
      1239
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1240,
    "end": 1245,
    "range": [
      1240,
      1245
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1245,
    "end": 1246,
    "range": [
      1245,
      1246
    ]
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 1247,
    "end": 1256,
    "range": [
      1247,
      1256
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1257,
    "end": 1267,
    "range": [
      1257,
      1267
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1268,
    "end": 1269,
    "range": [
      1268,
      1269
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1272,
    "end": 1278,
    "range": [
      1272,
      1278
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1279,
    "end": 1284,
    "range": [
      1279,
      1284
    ]
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 1285,
    "end": 1290,
    "range": [
      1285,
      1290
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1291,
    "end": 1292,
    "range": [
      1291,
      1292
    ]
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 1293,
    "end": 1299,
    "range": [
      1293,
      1299
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1299,
    "end": 1300,
    "range": [
      1299,
      1300
    ]
  },
  {
    "type": "String",
    "value": "\"BreakStep\"",
    "start": 1300,
    "end": 1311,
    "range": [
      1300,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1312,
    "end": 1313,
    "range": [
      1312,
      1313
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1314,
    "end": 1315,
    "range": [
      1314,
      1315
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1316,
    "end": 1320,
    "range": [
      1316,
      1320
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1321,
    "end": 1331,
    "range": [
      1321,
      1331
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1332,
    "end": 1333,
    "range": [
      1332,
      1333
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1333,
    "end": 1334,
    "range": [
      1333,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 1337,
    "end": 1343,
    "range": [
      1337,
      1343
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1344,
    "end": 1354,
    "range": [
      1344,
      1354
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1354,
    "end": 1355,
    "range": [
      1354,
      1355
    ]
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 1355,
    "end": 1360,
    "range": [
      1355,
      1360
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1361,
    "end": 1362,
    "range": [
      1361,
      1362
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1363,
    "end": 1364,
    "range": [
      1363,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1366,
    "end": 1370,
    "range": [
      1366,
      1370
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResultGenerator",
    "start": 1371,
    "end": 1390,
    "range": [
      1371,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1390,
    "end": 1391,
    "range": [
      1390,
      1391
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1398,
    "end": 1399,
    "range": [
      1398,
      1399
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 1400,
    "end": 1409,
    "range": [
      1400,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1410,
    "end": 1423,
    "range": [
      1410,
      1423
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1424,
    "end": 1425,
    "range": [
      1424,
      1425
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1426,
    "end": 1440,
    "range": [
      1426,
      1440
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1440,
    "end": 1441,
    "range": [
      1440,
      1441
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1442,
    "end": 1452,
    "range": [
      1442,
      1452
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1452,
    "end": 1453,
    "range": [
      1452,
      1453
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1453,
    "end": 1454,
    "range": [
      1453,
      1454
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1454,
    "end": 1455,
    "range": [
      1454,
      1455
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1455,
    "end": 1456,
    "range": [
      1455,
      1456
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1457,
    "end": 1460,
    "range": [
      1457,
      1460
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1461,
    "end": 1462,
    "range": [
      1461,
      1462
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1463,
    "end": 1472,
    "range": [
      1463,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1472,
    "end": 1473,
    "range": [
      1472,
      1473
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1476,
    "end": 1477,
    "range": [
      1476,
      1477
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 1478,
    "end": 1492,
    "range": [
      1478,
      1492
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1500,
    "end": 1513,
    "range": [
      1500,
      1513
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1516,
    "end": 1530,
    "range": [
      1516,
      1530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 1538,
    "end": 1548,
    "range": [
      1538,
      1548
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1548,
    "end": 1549,
    "range": [
      1548,
      1549
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1549,
    "end": 1550,
    "range": [
      1549,
      1550
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1550,
    "end": 1551,
    "range": [
      1550,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1559,
    "end": 1562,
    "range": [
      1559,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1563,
    "end": 1564,
    "range": [
      1563,
      1564
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1565,
    "end": 1574,
    "range": [
      1565,
      1574
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1579,
    "end": 1580,
    "range": [
      1579,
      1580
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1580,
    "end": 1581,
    "range": [
      1580,
      1581
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1582,
    "end": 1586,
    "range": [
      1582,
      1586
    ]
  },
  {
    "type": "Identifier",
    "value": "StepSelection",
    "start": 1587,
    "end": 1600,
    "range": [
      1587,
      1600
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1600,
    "end": 1601,
    "range": [
      1600,
      1601
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1601,
    "end": 1602,
    "range": [
      1601,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1606,
    "end": 1607,
    "range": [
      1606,
      1607
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1608,
    "end": 1615,
    "range": [
      1608,
      1615
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 1616,
    "end": 1629,
    "range": [
      1616,
      1629
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Identifier",
    "value": "infer",
    "start": 1630,
    "end": 1635,
    "range": [
      1630,
      1635
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1636,
    "end": 1637,
    "range": [
      1636,
      1637
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1637,
    "end": 1638,
    "range": [
      1637,
      1638
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 1643,
    "end": 1644,
    "range": [
      1643,
      1644
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1645,
    "end": 1646,
    "range": [
      1645,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1647,
    "end": 1648,
    "range": [
      1647,
      1648
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 1649,
    "end": 1658,
    "range": [
      1649,
      1658
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1661,
    "end": 1662,
    "range": [
      1661,
      1662
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1663,
    "end": 1664,
    "range": [
      1663,
      1664
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1665,
    "end": 1672,
    "range": [
      1665,
      1672
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickInputStep",
    "start": 1673,
    "end": 1687,
    "range": [
      1673,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1690,
    "end": 1691,
    "range": [
      1690,
      1691
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1692,
    "end": 1698,
    "range": [
      1692,
      1698
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1699,
    "end": 1700,
    "range": [
      1699,
      1700
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 1701,
    "end": 1710,
    "range": [
      1701,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 1715,
    "end": 1720,
    "range": [
      1715,
      1720
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1720,
    "end": 1721,
    "range": [
      1720,
      1721
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1722,
    "end": 1726,
    "range": [
      1722,
      1726
    ]
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 1727,
    "end": 1743,
    "range": [
      1727,
      1743
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1744,
    "end": 1745,
    "range": [
      1744,
      1745
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1746,
    "end": 1747,
    "range": [
      1746,
      1747
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1748,
    "end": 1755,
    "range": [
      1748,
      1755
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1755,
    "end": 1756,
    "range": [
      1755,
      1756
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1757,
    "end": 1758,
    "range": [
      1757,
      1758
    ]
  },
  {
    "type": "Identifier",
    "value": "Partial",
    "start": 1759,
    "end": 1766,
    "range": [
      1759,
      1766
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1767,
    "end": 1768,
    "range": [
      1767,
      1768
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1768,
    "end": 1769,
    "range": [
      1768,
      1769
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1770,
    "end": 1771,
    "range": [
      1770,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1772,
    "end": 1773,
    "range": [
      1772,
      1773
    ]
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 1776,
    "end": 1783,
    "range": [
      1776,
      1783
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1783,
    "end": 1784,
    "range": [
      1783,
      1784
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1785,
    "end": 1791,
    "range": [
      1785,
      1791
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1791,
    "end": 1792,
    "range": [
      1791,
      1792
    ]
  },
  {
    "type": "Identifier",
    "value": "confirm",
    "start": 1795,
    "end": 1802,
    "range": [
      1795,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1803,
    "end": 1804,
    "range": [
      1803,
      1804
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1805,
    "end": 1812,
    "range": [
      1805,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Identifier",
    "value": "startingStep",
    "start": 1816,
    "end": 1828,
    "range": [
      1816,
      1828
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1828,
    "end": 1829,
    "range": [
      1828,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1831,
    "end": 1837,
    "range": [
      1831,
      1837
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1837,
    "end": 1838,
    "range": [
      1837,
      1838
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1839,
    "end": 1840,
    "range": [
      1839,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1840,
    "end": 1841,
    "range": [
      1840,
      1841
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1842,
    "end": 1846,
    "range": [
      1842,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "StepState",
    "start": 1847,
    "end": 1856,
    "range": [
      1847,
      1856
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1856,
    "end": 1857,
    "range": [
      1856,
      1857
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1857,
    "end": 1858,
    "range": [
      1857,
      1858
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Identifier",
    "value": "Record",
    "start": 1861,
    "end": 1867,
    "range": [
      1861,
      1867
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1867,
    "end": 1868,
    "range": [
      1867,
      1868
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1868,
    "end": 1874,
    "range": [
      1868,
      1874
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1874,
    "end": 1875,
    "range": [
      1874,
      1875
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 1876,
    "end": 1883,
    "range": [
      1876,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1886,
    "end": 1887,
    "range": [
      1886,
      1887
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1888,
    "end": 1889,
    "range": [
      1888,
      1889
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893,
    "range": [
      1892,
      1893
    ]
  },
  {
    "type": "Identifier",
    "value": "counter",
    "start": 1896,
    "end": 1903,
    "range": [
      1896,
      1903
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1905,
    "end": 1911,
    "range": [
      1905,
      1911
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1911,
    "end": 1912,
    "range": [
      1911,
      1912
    ]
  },
  {
    "type": "Identifier",
    "value": "confirm",
    "start": 1915,
    "end": 1922,
    "range": [
      1915,
      1922
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1922,
    "end": 1923,
    "range": [
      1922,
      1923
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1923,
    "end": 1924,
    "range": [
      1923,
      1924
    ]
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 1925,
    "end": 1932,
    "range": [
      1925,
      1932
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1932,
    "end": 1933,
    "range": [
      1932,
      1933
    ]
  },
  {
    "type": "Identifier",
    "value": "startingStep",
    "start": 1936,
    "end": 1948,
    "range": [
      1936,
      1948
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 1948,
    "end": 1949,
    "range": [
      1948,
      1949
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1949,
    "end": 1950,
    "range": [
      1949,
      1950
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1951,
    "end": 1957,
    "range": [
      1951,
      1957
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1957,
    "end": 1958,
    "range": [
      1957,
      1958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1959,
    "end": 1960,
    "range": [
      1959,
      1960
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1960,
    "end": 1961,
    "range": [
      1960,
      1961
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1963,
    "end": 1971,
    "range": [
      1963,
      1971
    ]
  },
  {
    "type": "Identifier",
    "value": "canPickStepContinue",
    "start": 1972,
    "end": 1991,
    "range": [
      1972,
      1991
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 1991,
    "end": 1992,
    "range": [
      1991,
      1992
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 1992,
    "end": 1993,
    "range": [
      1992,
      1993
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 1994,
    "end": 2001,
    "range": [
      1994,
      2001
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2002,
    "end": 2015,
    "range": [
      2002,
      2015
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2015,
    "end": 2016,
    "range": [
      2015,
      2016
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2016,
    "end": 2017,
    "range": [
      2016,
      2017
    ]
  },
  {
    "type": "Identifier",
    "value": "_step",
    "start": 2020,
    "end": 2025,
    "range": [
      2020,
      2025
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2025,
    "end": 2026,
    "range": [
      2025,
      2026
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2028,
    "end": 2029,
    "range": [
      2028,
      2029
    ]
  },
  {
    "type": "Identifier",
    "value": "_state",
    "start": 2032,
    "end": 2038,
    "range": [
      2032,
      2038
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2038,
    "end": 2039,
    "range": [
      2038,
      2039
    ]
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 2040,
    "end": 2056,
    "range": [
      2040,
      2056
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Identifier",
    "value": "_selection",
    "start": 2060,
    "end": 2070,
    "range": [
      2060,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 2072,
    "end": 2084,
    "range": [
      2072,
      2084
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2084,
    "end": 2085,
    "range": [
      2084,
      2085
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2085,
    "end": 2086,
    "range": [
      2085,
      2086
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2086,
    "end": 2087,
    "range": [
      2086,
      2087
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2088,
    "end": 2089,
    "range": [
      2088,
      2089
    ]
  },
  {
    "type": "Identifier",
    "value": "Directive",
    "start": 2090,
    "end": 2099,
    "range": [
      2090,
      2099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2100,
    "end": 2101,
    "range": [
      2100,
      2101
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2101,
    "end": 2102,
    "range": [
      2101,
      2102
    ]
  },
  {
    "type": "Identifier",
    "value": "_selection",
    "start": 2103,
    "end": 2113,
    "range": [
      2103,
      2113
    ]
  },
  {
    "type": "Identifier",
    "value": "is",
    "start": 2114,
    "end": 2116,
    "range": [
      2114,
      2116
    ]
  },
  {
    "type": "Identifier",
    "value": "StepItemType",
    "start": 2117,
    "end": 2129,
    "range": [
      2117,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2133,
    "end": 2134,
    "range": [
      2133,
      2134
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2137,
    "end": 2143,
    "range": [
      2137,
      2143
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2144,
    "end": 2149,
    "range": [
      2144,
      2149
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150,
    "range": [
      2149,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2151,
    "end": 2152,
    "range": [
      2151,
      2152
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2154,
    "end": 2162,
    "range": [
      2154,
      2162
    ]
  },
  {
    "type": "Identifier",
    "value": "createPickStep",
    "start": 2163,
    "end": 2177,
    "range": [
      2163,
      2177
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2180,
    "end": 2187,
    "range": [
      2180,
      2187
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2188,
    "end": 2201,
    "range": [
      2188,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2201,
    "end": 2202,
    "range": [
      2201,
      2202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2206,
    "end": 2210,
    "range": [
      2206,
      2210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2210,
    "end": 2211,
    "range": [
      2210,
      2211
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2212,
    "end": 2225,
    "range": [
      2212,
      2225
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2225,
    "end": 2226,
    "range": [
      2225,
      2226
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2227,
    "end": 2228,
    "range": [
      2227,
      2228
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2229,
    "end": 2230,
    "range": [
      2229,
      2230
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2230,
    "end": 2231,
    "range": [
      2230,
      2231
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2232,
    "end": 2245,
    "range": [
      2232,
      2245
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2245,
    "end": 2246,
    "range": [
      2245,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2247,
    "end": 2248,
    "range": [
      2247,
      2248
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2249,
    "end": 2250,
    "range": [
      2249,
      2250
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2253,
    "end": 2259,
    "range": [
      2253,
      2259
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2260,
    "end": 2264,
    "range": [
      2260,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2266,
    "end": 2267,
    "range": [
      2266,
      2267
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2269,
    "end": 2277,
    "range": [
      2269,
      2277
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Identifier",
    "value": "showStep",
    "start": 2279,
    "end": 2287,
    "range": [
      2279,
      2287
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2287,
    "end": 2288,
    "range": [
      2287,
      2288
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2291,
    "end": 2296,
    "range": [
      2291,
      2296
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2297,
    "end": 2304,
    "range": [
      2297,
      2304
    ]
  },
  {
    "type": "Identifier",
    "value": "PartialStepState",
    "start": 2305,
    "end": 2321,
    "range": [
      2305,
      2321
    ]
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2324,
    "end": 2325,
    "range": [
      2324,
      2325
    ]
  },
  {
    "type": "Identifier",
    "value": "repo",
    "start": 2326,
    "end": 2330,
    "range": [
      2326,
      2330
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2330,
    "end": 2331,
    "range": [
      2330,
      2331
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2332,
    "end": 2335,
    "range": [
      2332,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2337,
    "end": 2338,
    "range": [
      2337,
      2338
    ]
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 2341,
    "end": 2348,
    "range": [
      2341,
      2348
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 2349,
    "end": 2356,
    "range": [
      2349,
      2356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2357,
    "end": 2358,
    "range": [
      2357,
      2358
    ]
  },
  {
    "type": "Identifier",
    "value": "repos",
    "start": 2359,
    "end": 2364,
    "range": [
      2359,
      2364
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2366,
    "end": 2369,
    "range": [
      2366,
      2369
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2369,
    "end": 2370,
    "range": [
      2369,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2371,
    "end": 2372,
    "range": [
      2371,
      2372
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 2373,
    "end": 2378,
    "range": [
      2373,
      2378
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2378,
    "end": 2379,
    "range": [
      2378,
      2379
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2380,
    "end": 2386,
    "range": [
      2380,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2386,
    "end": 2387,
    "range": [
      2386,
      2387
    ]
  },
  {
    "type": "Identifier",
    "value": "status",
    "start": 2388,
    "end": 2394,
    "range": [
      2388,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2396,
    "end": 2399,
    "range": [
      2396,
      2399
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2400,
    "end": 2401,
    "range": [
      2400,
      2401
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2403,
    "end": 2404,
    "range": [
      2403,
      2404
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2404,
    "end": 2409,
    "range": [
      2404,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Identifier",
    "value": "State",
    "start": 2411,
    "end": 2416,
    "range": [
      2411,
      2416
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2416,
    "end": 2417,
    "range": [
      2416,
      2417
    ]
  },
  {
    "type": "Identifier",
    "value": "_context",
    "start": 2418,
    "end": 2426,
    "range": [
      2418,
      2426
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2426,
    "end": 2427,
    "range": [
      2426,
      2427
    ]
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 2428,
    "end": 2435,
    "range": [
      2428,
      2435
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2435,
    "end": 2436,
    "range": [
      2435,
      2436
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2436,
    "end": 2437,
    "range": [
      2436,
      2437
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResultGenerator",
    "start": 2438,
    "end": 2457,
    "range": [
      2438,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2458,
    "end": 2471,
    "range": [
      2458,
      2471
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2471,
    "end": 2472,
    "range": [
      2471,
      2472
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2473,
    "end": 2474,
    "range": [
      2473,
      2474
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2477,
    "end": 2482,
    "range": [
      2477,
      2482
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2483,
    "end": 2487,
    "range": [
      2483,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2487,
    "end": 2488,
    "range": [
      2487,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickStep",
    "start": 2489,
    "end": 2502,
    "range": [
      2489,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2502,
    "end": 2503,
    "range": [
      2502,
      2503
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2503,
    "end": 2516,
    "range": [
      2503,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2518,
    "end": 2519,
    "range": [
      2518,
      2519
    ]
  },
  {
    "type": "Identifier",
    "value": "createPickStep",
    "start": 2520,
    "end": 2534,
    "range": [
      2520,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2534,
    "end": 2535,
    "range": [
      2534,
      2535
    ]
  },
  {
    "type": "Identifier",
    "value": "QuickPickItem",
    "start": 2535,
    "end": 2548,
    "range": [
      2535,
      2548
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2550,
    "end": 2551,
    "range": [
      2550,
      2551
    ]
  },
  {
    "type": "Identifier",
    "value": "title",
    "start": 2556,
    "end": 2561,
    "range": [
      2556,
      2561
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2561,
    "end": 2562,
    "range": [
      2561,
      2562
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2563,
    "end": 2565,
    "range": [
      2563,
      2565
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2565,
    "end": 2566,
    "range": [
      2565,
      2566
    ]
  },
  {
    "type": "Identifier",
    "value": "placeholder",
    "start": 2571,
    "end": 2582,
    "range": [
      2571,
      2582
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 2584,
    "end": 2586,
    "range": [
      2584,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2586,
    "end": 2587,
    "range": [
      2586,
      2587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2590,
    "end": 2591,
    "range": [
      2590,
      2591
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2591,
    "end": 2592,
    "range": [
      2591,
      2592
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2592,
    "end": 2593,
    "range": [
      2592,
      2593
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2596,
    "end": 2601,
    "range": [
      2596,
      2601
    ]
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2602,
    "end": 2611,
    "range": [
      2602,
      2611
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2611,
    "end": 2612,
    "range": [
      2611,
      2612
    ]
  },
  {
    "type": "Identifier",
    "value": "StepSelection",
    "start": 2613,
    "end": 2626,
    "range": [
      2613,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 2627,
    "end": 2633,
    "range": [
      2627,
      2633
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2634,
    "end": 2638,
    "range": [
      2634,
      2638
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2640,
    "end": 2641,
    "range": [
      2640,
      2641
    ]
  },
  {
    "type": "Keyword",
    "value": "yield",
    "start": 2642,
    "end": 2647,
    "range": [
      2642,
      2647
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2648,
    "end": 2652,
    "range": [
      2648,
      2652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2656,
    "end": 2662,
    "range": [
      2656,
      2662
    ]
  },
  {
    "type": "Identifier",
    "value": "canPickStepContinue",
    "start": 2663,
    "end": 2682,
    "range": [
      2663,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2682,
    "end": 2683,
    "range": [
      2682,
      2683
    ]
  },
  {
    "type": "Identifier",
    "value": "step",
    "start": 2683,
    "end": 2687,
    "range": [
      2683,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 2689,
    "end": 2694,
    "range": [
      2689,
      2694
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2694,
    "end": 2695,
    "range": [
      2694,
      2695
    ]
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2696,
    "end": 2705,
    "range": [
      2696,
      2705
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 2711,
    "end": 2712,
    "range": [
      2711,
      2712
    ]
  },
  {
    "type": "Identifier",
    "value": "selection",
    "start": 2713,
    "end": 2722,
    "range": [
      2713,
      2722
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2722,
    "end": 2723,
    "range": [
      2722,
      2723
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 2723,
    "end": 2724,
    "range": [
      2723,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2730,
    "end": 2731,
    "range": [
      2730,
      2731
    ]
  },
  {
    "type": "Identifier",
    "value": "StepResult",
    "start": 2732,
    "end": 2742,
    "range": [
      2732,
      2742
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2742,
    "end": 2743,
    "range": [
      2742,
      2743
    ]
  },
  {
    "type": "Identifier",
    "value": "Break",
    "start": 2743,
    "end": 2748,
    "range": [
      2743,
      2748
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2748,
    "end": 2749,
    "range": [
      2748,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  }
]
```
