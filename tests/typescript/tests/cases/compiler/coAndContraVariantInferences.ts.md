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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 11,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 17,
                  "end": 20
                },
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "accessibility": null,
            "static": false,
            "start": 11,
            "end": 20
          }
        ],
        "start": 9,
        "end": 22
      },
      "declare": false,
      "start": 0,
      "end": 23
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 30
      },
      "typeParameters": null,
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
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 35,
              "end": 39
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 41,
                  "end": 44
                },
                "start": 41,
                "end": 44
              },
              "start": 39,
              "end": 44
            },
            "accessibility": null,
            "static": false,
            "start": 35,
            "end": 44
          }
        ],
        "start": 33,
        "end": 46
      },
      "declare": false,
      "start": 24,
      "end": 47
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
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 67
                },
                "typeArguments": null,
                "start": 66,
                "end": 67
              },
              "start": 64,
              "end": 67
            },
            "start": 63,
            "end": 67
          },
          "init": null,
          "definite": false,
          "start": 63,
          "end": 67
        }
      ],
      "declare": true,
      "start": 49,
      "end": 68
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
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 86,
                  "end": 87
                },
                "typeArguments": null,
                "start": 86,
                "end": 87
              },
              "start": 84,
              "end": 87
            },
            "start": 83,
            "end": 87
          },
          "init": null,
          "definite": false,
          "start": 83,
          "end": 87
        }
      ],
      "declare": true,
      "start": 69,
      "end": 88
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fab",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
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
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 116,
                    "end": 117
                  },
                  "typeArguments": null,
                  "start": 116,
                  "end": 117
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 120,
                    "end": 121
                  },
                  "typeArguments": null,
                  "start": 120,
                  "end": 121
                }
              ],
              "start": 116,
              "end": 121
            },
            "start": 114,
            "end": 121
          },
          "start": 111,
          "end": 121
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 124,
          "end": 128
        },
        "start": 122,
        "end": 128
      },
      "body": null,
      "expression": false,
      "start": 90,
      "end": 129
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 148,
        "end": 151
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
              "start": 152,
              "end": 153
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 152,
            "end": 153
          }
        ],
        "start": 151,
        "end": 154
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
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 164
                  },
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
                        "start": 166,
                        "end": 167
                      },
                      "typeArguments": null,
                      "start": 166,
                      "end": 167
                    },
                    "start": 164,
                    "end": 167
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 160,
                  "end": 167
                }
              ],
              "start": 158,
              "end": 169
            },
            "start": 156,
            "end": 169
          },
          "start": 155,
          "end": 169
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "f",
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
                  "name": "arg",
                  "optional": false,
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
                            "name": "kind",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 186
                          },
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
                                "start": 188,
                                "end": 189
                              },
                              "typeArguments": null,
                              "start": 188,
                              "end": 189
                            },
                            "start": 186,
                            "end": 189
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 182,
                          "end": 189
                        }
                      ],
                      "start": 180,
                      "end": 191
                    },
                    "start": 178,
                    "end": 191
                  },
                  "start": 175,
                  "end": 191
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 196,
                  "end": 200
                },
                "start": 193,
                "end": 200
              },
              "start": 174,
              "end": 200
            },
            "start": 172,
            "end": 200
          },
          "start": 171,
          "end": 200
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 203,
          "end": 207
        },
        "start": 201,
        "end": 207
      },
      "body": null,
      "expression": false,
      "start": 131,
      "end": 208
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 210,
          "end": 213
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 214,
            "end": 215
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fab",
            "optional": false,
            "typeAnnotation": null,
            "start": 217,
            "end": 220
          }
        ],
        "optional": false,
        "start": 210,
        "end": 221
      },
      "directive": null,
      "start": 210,
      "end": 222
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 223,
          "end": 226
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 227,
            "end": 228
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "fab",
            "optional": false,
            "typeAnnotation": null,
            "start": 230,
            "end": 233
          }
        ],
        "optional": false,
        "start": 223,
        "end": 234
      },
      "directive": null,
      "start": 223,
      "end": 235
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 269,
        "end": 275
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TName",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 281
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 290,
              "end": 296
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 276,
            "end": 296
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPayload",
              "optional": false,
              "typeAnnotation": null,
              "start": 297,
              "end": 305
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 297,
            "end": 305
          }
        ],
        "start": 275,
        "end": 306
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
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 317
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 324
                },
                "typeArguments": null,
                "start": 319,
                "end": 324
              },
              "start": 317,
              "end": 324
            },
            "accessibility": null,
            "static": false,
            "start": 313,
            "end": 325
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 330,
              "end": 337
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "TPayload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 339,
                  "end": 347
                },
                "typeArguments": null,
                "start": 339,
                "end": 347
              },
              "start": 337,
              "end": 347
            },
            "accessibility": null,
            "static": false,
            "start": 330,
            "end": 347
          }
        ],
        "start": 307,
        "end": 349
      },
      "declare": false,
      "start": 259,
      "end": 349
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
            "name": "actionA",
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 364
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 369,
                    "end": 376
                  },
                  "value": {
                    "type": "Literal",
                    "value": "any-string",
                    "raw": "'any-string'",
                    "start": 378,
                    "end": 390
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 369,
                  "end": 390
                }
              ],
              "start": 367,
              "end": 392
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 402
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ACTION_A",
                      "raw": "'ACTION_A'",
                      "start": 403,
                      "end": 413
                    },
                    "start": 403,
                    "end": 413
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 415,
                    "end": 421
                  }
                ],
                "start": 402,
                "end": 422
              },
              "start": 396,
              "end": 422
            },
            "start": 367,
            "end": 422
          },
          "definite": false,
          "start": 357,
          "end": 422
        }
      ],
      "declare": false,
      "start": 351,
      "end": 423
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
            "name": "actionB",
            "optional": false,
            "typeAnnotation": null,
            "start": 430,
            "end": 437
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "payload",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 442,
                    "end": 449
                  },
                  "value": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 451,
                    "end": 455
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 442,
                  "end": 455
                }
              ],
              "start": 440,
              "end": 457
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 461,
                "end": 467
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "ACTION_B",
                      "raw": "'ACTION_B'",
                      "start": 468,
                      "end": 478
                    },
                    "start": 468,
                    "end": 478
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 480,
                    "end": 487
                  }
                ],
                "start": 467,
                "end": 488
              },
              "start": 461,
              "end": 488
            },
            "start": 440,
            "end": 488
          },
          "definite": false,
          "start": 430,
          "end": 488
        }
      ],
      "declare": false,
      "start": 424,
      "end": 489
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "call",
        "optional": false,
        "typeAnnotation": null,
        "start": 500,
        "end": 504
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
              "name": "TName",
              "optional": false,
              "typeAnnotation": null,
              "start": 505,
              "end": 510
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 519,
              "end": 525
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 505,
            "end": 525
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TPayload",
              "optional": false,
              "typeAnnotation": null,
              "start": 526,
              "end": 534
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 526,
            "end": 534
          }
        ],
        "start": 504,
        "end": 535
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 547,
                "end": 553
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TName",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 554,
                      "end": 559
                    },
                    "typeArguments": null,
                    "start": 554,
                    "end": 559
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "TPayload",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 560,
                      "end": 568
                    },
                    "typeArguments": null,
                    "start": 560,
                    "end": 568
                  }
                ],
                "start": 553,
                "end": 569
              },
              "start": 547,
              "end": 569
            },
            "start": 545,
            "end": 569
          },
          "start": 539,
          "end": 569
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fn",
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
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 586,
                        "end": 592
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TName",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 593,
                              "end": 598
                            },
                            "typeArguments": null,
                            "start": 593,
                            "end": 598
                          },
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TPayload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 607
                            },
                            "typeArguments": null,
                            "start": 599,
                            "end": 607
                          }
                        ],
                        "start": 592,
                        "end": 608
                      },
                      "start": 586,
                      "end": 608
                    },
                    "start": 584,
                    "end": 608
                  },
                  "start": 578,
                  "end": 608
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 612,
                  "end": 615
                },
                "start": 609,
                "end": 615
              },
              "start": 577,
              "end": 615
            },
            "start": 575,
            "end": 615
          },
          "start": 573,
          "end": 615
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fn",
                "optional": false,
                "typeAnnotation": null,
                "start": 623,
                "end": 625
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 626,
                  "end": 632
                }
              ],
              "optional": false,
              "start": 623,
              "end": 633
            },
            "directive": null,
            "start": 623,
            "end": 634
          }
        ],
        "start": 619,
        "end": 636
      },
      "expression": false,
      "start": 491,
      "end": 636
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
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 644,
            "end": 651
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "actionA",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 670,
                          "end": 677
                        },
                        "typeArguments": null,
                        "start": 663,
                        "end": 677
                      },
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "actionB",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 687,
                          "end": 694
                        },
                        "typeArguments": null,
                        "start": 680,
                        "end": 694
                      }
                    ],
                    "start": 663,
                    "end": 694
                  },
                  "start": 661,
                  "end": 694
                },
                "start": 655,
                "end": 694
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 698,
                  "end": 705
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 706,
                  "end": 709
                },
                "optional": false,
                "computed": false,
                "start": 698,
                "end": 709
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 716
                }
              ],
              "optional": false,
              "start": 698,
              "end": 717
            },
            "id": null,
            "generator": false,
            "start": 654,
            "end": 717
          },
          "definite": false,
          "start": 644,
          "end": 717
        }
      ],
      "declare": false,
      "start": 638,
      "end": 718
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 720,
          "end": 724
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "actionA",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 732
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 734,
            "end": 741
          }
        ],
        "optional": false,
        "start": 720,
        "end": 742
      },
      "directive": null,
      "start": 720,
      "end": 743
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "call",
          "optional": false,
          "typeAnnotation": null,
          "start": 744,
          "end": 748
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "actionB",
            "optional": false,
            "typeAnnotation": null,
            "start": 749,
            "end": 756
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "printFn",
            "optional": false,
            "typeAnnotation": null,
            "start": 758,
            "end": 765
          }
        ],
        "optional": false,
        "start": 744,
        "end": 766
      },
      "directive": null,
      "start": 744,
      "end": 767
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 767
}
```
