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
