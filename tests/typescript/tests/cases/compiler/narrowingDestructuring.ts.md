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
        "name": "X",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 6
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
                      "raw": "\"a\"",
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
                "end": 21
              },
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
                  "start": 22,
                  "end": 23
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 25,
                    "end": 31
                  },
                  "start": 23,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 22,
                "end": 31
              }
            ],
            "start": 9,
            "end": 33
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 42
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 44,
                      "end": 47
                    },
                    "start": 44,
                    "end": 47
                  },
                  "start": 42,
                  "end": 47
                },
                "accessibility": null,
                "static": false,
                "start": 38,
                "end": 48
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 49,
                  "end": 50
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 52,
                    "end": 58
                  },
                  "start": 50,
                  "end": 58
                },
                "accessibility": null,
                "static": false,
                "start": 49,
                "end": 58
              }
            ],
            "start": 36,
            "end": 60
          }
        ],
        "start": 9,
        "end": 60
      },
      "declare": false,
      "start": 0,
      "end": 60
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 75
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
              "start": 76,
              "end": 77
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "X",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 87
              },
              "typeArguments": null,
              "start": 86,
              "end": 87
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 87
          }
        ],
        "start": 75,
        "end": 88
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "typeArguments": null,
              "start": 96,
              "end": 97
            },
            "start": 94,
            "end": 97
          },
          "start": 89,
          "end": 97
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 114
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 119
                },
                "optional": false,
                "computed": false,
                "start": 109,
                "end": 119
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 124,
                "end": 127
              },
              "start": 109,
              "end": 127
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 139,
                      "end": 144
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 145,
                      "end": 146
                    },
                    "optional": false,
                    "computed": false,
                    "start": 139,
                    "end": 146
                  },
                  "directive": null,
                  "start": 139,
                  "end": 147
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
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
                              "start": 164,
                              "end": 165
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 164,
                              "end": 165
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 164,
                            "end": 165
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 162,
                        "end": 167
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 175
                      },
                      "definite": false,
                      "start": 162,
                      "end": 175
                    }
                  ],
                  "declare": false,
                  "start": 156,
                  "end": 176
                }
              ],
              "start": 129,
              "end": 182
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 198,
                      "end": 203
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 204,
                      "end": 205
                    },
                    "optional": false,
                    "computed": false,
                    "start": 198,
                    "end": 205
                  },
                  "directive": null,
                  "start": 198,
                  "end": 206
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 223,
                              "end": 224
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 223,
                            "end": 224
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 226
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 234
                      },
                      "definite": false,
                      "start": 221,
                      "end": 234
                    }
                  ],
                  "declare": false,
                  "start": 215,
                  "end": 235
                }
              ],
              "start": 188,
              "end": 241
            },
            "start": 105,
            "end": 241
          }
        ],
        "start": 99,
        "end": 243
      },
      "expression": false,
      "start": 62,
      "end": 243
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Z",
        "optional": false,
        "typeAnnotation": null,
        "start": 250,
        "end": 251
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 260
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "f",
                      "raw": "\"f\"",
                      "start": 262,
                      "end": 265
                    },
                    "start": 262,
                    "end": 265
                  },
                  "start": 260,
                  "end": 265
                },
                "accessibility": null,
                "static": false,
                "start": 256,
                "end": 266
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 268
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 272,
                          "end": 273
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 275,
                            "end": 281
                          },
                          "start": 273,
                          "end": 281
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 272,
                        "end": 282
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
                        },
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
                        "accessibility": null,
                        "static": false,
                        "start": 283,
                        "end": 293
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 294,
                          "end": 295
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 297,
                            "end": 303
                          },
                          "start": 295,
                          "end": 303
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 294,
                        "end": 303
                      }
                    ],
                    "start": 270,
                    "end": 305
                  },
                  "start": 268,
                  "end": 305
                },
                "accessibility": null,
                "static": false,
                "start": 267,
                "end": 305
              }
            ],
            "start": 254,
            "end": 307
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 316,
                  "end": 320
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "g",
                      "raw": "\"g\"",
                      "start": 322,
                      "end": 325
                    },
                    "start": 322,
                    "end": 325
                  },
                  "start": 320,
                  "end": 325
                },
                "accessibility": null,
                "static": false,
                "start": 316,
                "end": 326
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "g",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 327,
                  "end": 328
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 332,
                          "end": 333
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 335,
                            "end": 341
                          },
                          "start": 333,
                          "end": 341
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 332,
                        "end": 342
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 343,
                          "end": 344
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 346,
                            "end": 352
                          },
                          "start": 344,
                          "end": 352
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 343,
                        "end": 353
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 354,
                          "end": 355
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 357,
                            "end": 363
                          },
                          "start": 355,
                          "end": 363
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 354,
                        "end": 363
                      }
                    ],
                    "start": 330,
                    "end": 365
                  },
                  "start": 328,
                  "end": 365
                },
                "accessibility": null,
                "static": false,
                "start": 327,
                "end": 365
              }
            ],
            "start": 314,
            "end": 366
          }
        ],
        "start": 254,
        "end": 366
      },
      "declare": false,
      "start": 245,
      "end": 367
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func2",
        "optional": false,
        "typeAnnotation": null,
        "start": 378,
        "end": 383
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
              "start": 384,
              "end": 385
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null,
                "start": 394,
                "end": 395
              },
              "typeArguments": null,
              "start": 394,
              "end": 395
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 384,
            "end": 395
          }
        ],
        "start": 383,
        "end": 396
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
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 404,
                "end": 405
              },
              "typeArguments": null,
              "start": 404,
              "end": 405
            },
            "start": 402,
            "end": 405
          },
          "start": 397,
          "end": 405
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 417,
                  "end": 422
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 423,
                  "end": 427
                },
                "optional": false,
                "computed": false,
                "start": 417,
                "end": 427
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "f",
                "raw": "\"f\"",
                "start": 432,
                "end": 435
              },
              "start": 417,
              "end": 435
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 455,
                              "end": 456
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 458,
                              "end": 460
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 455,
                            "end": 460
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 462
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 465,
                        "end": 470
                      },
                      "definite": false,
                      "start": 453,
                      "end": 470
                    }
                  ],
                  "declare": false,
                  "start": 447,
                  "end": 471
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 488,
                              "end": 489
                            },
                            "value": {
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
                                    "start": 493,
                                    "end": 494
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 493,
                                    "end": 494
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 493,
                                  "end": 494
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 499,
                                    "end": 505
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 496,
                                  "end": 505
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 491,
                              "end": 507
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 488,
                            "end": 507
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 486,
                        "end": 509
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 512,
                        "end": 517
                      },
                      "definite": false,
                      "start": 486,
                      "end": 517
                    }
                  ],
                  "declare": false,
                  "start": 480,
                  "end": 518
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 527,
                      "end": 532
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "f",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 534
                    },
                    "optional": false,
                    "computed": false,
                    "start": 527,
                    "end": 534
                  },
                  "directive": null,
                  "start": 527,
                  "end": 535
                }
              ],
              "start": 437,
              "end": 541
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "g",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 565,
                              "end": 566
                            },
                            "value": {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 570,
                                    "end": 571
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "c",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 570,
                                    "end": 571
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 570,
                                  "end": 571
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "spread",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 576,
                                    "end": 582
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 573,
                                  "end": 582
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 568,
                              "end": 584
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 565,
                            "end": 584
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 563,
                        "end": 586
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 589,
                        "end": 594
                      },
                      "definite": false,
                      "start": 563,
                      "end": 594
                    }
                  ],
                  "declare": false,
                  "start": 557,
                  "end": 595
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 609
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "g",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 610,
                      "end": 611
                    },
                    "optional": false,
                    "computed": false,
                    "start": 604,
                    "end": 611
                  },
                  "directive": null,
                  "start": 604,
                  "end": 612
                }
              ],
              "start": 547,
              "end": 618
            },
            "start": 413,
            "end": 618
          }
        ],
        "start": 407,
        "end": 620
      },
      "expression": false,
      "start": 369,
      "end": 620
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "func3",
        "optional": false,
        "typeAnnotation": null,
        "start": 631,
        "end": 636
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
              "start": 637,
              "end": 638
            },
            "constraint": {
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 649,
                        "end": 653
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "a",
                            "raw": "\"a\"",
                            "start": 655,
                            "end": 658
                          },
                          "start": 655,
                          "end": 658
                        },
                        "start": 653,
                        "end": 658
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 649,
                      "end": 659
                    },
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
                        "start": 660,
                        "end": 661
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 663,
                          "end": 669
                        },
                        "start": 661,
                        "end": 669
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 660,
                      "end": 669
                    }
                  ],
                  "start": 647,
                  "end": 671
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 676,
                        "end": 680
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "b",
                            "raw": "\"b\"",
                            "start": 682,
                            "end": 685
                          },
                          "start": 682,
                          "end": 685
                        },
                        "start": 680,
                        "end": 685
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 676,
                      "end": 686
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 687,
                        "end": 688
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 690,
                          "end": 696
                        },
                        "start": 688,
                        "end": 696
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 687,
                      "end": 696
                    }
                  ],
                  "start": 674,
                  "end": 698
                }
              ],
              "start": 647,
              "end": 698
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 637,
            "end": 698
          }
        ],
        "start": 636,
        "end": 699
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
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
                "start": 703,
                "end": 704
              },
              "typeArguments": null,
              "start": 703,
              "end": 704
            },
            "start": 701,
            "end": 704
          },
          "start": 700,
          "end": 704
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 716,
                  "end": 717
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 722
                },
                "optional": false,
                "computed": false,
                "start": 716,
                "end": 722
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 727,
                "end": 730
              },
              "start": 716,
              "end": 730
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 754
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 750,
                              "end": 754
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 750,
                            "end": 754
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "r1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 759,
                              "end": 761
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 756,
                            "end": 761
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 748,
                        "end": 763
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 766,
                        "end": 767
                      },
                      "definite": false,
                      "start": 748,
                      "end": 767
                    }
                  ],
                  "declare": false,
                  "start": 742,
                  "end": 768
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
                        "name": "r2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 783,
                        "end": 785
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "ArrowFunctionExpression",
                          "expression": true,
                          "async": false,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "ObjectPattern",
                              "decorators": [],
                              "properties": [
                                {
                                  "type": "Property",
                                  "kind": "init",
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 792,
                                    "end": 796
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "kind",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 792,
                                    "end": 796
                                  },
                                  "method": false,
                                  "shorthand": true,
                                  "computed": false,
                                  "optional": false,
                                  "start": 792,
                                  "end": 796
                                },
                                {
                                  "type": "RestElement",
                                  "decorators": [],
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "rest",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 801,
                                    "end": 805
                                  },
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "value": null,
                                  "start": 798,
                                  "end": 805
                                }
                              ],
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 790,
                              "end": 807
                            }
                          ],
                          "returnType": null,
                          "body": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "rest",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 812,
                            "end": 816
                          },
                          "id": null,
                          "generator": false,
                          "start": 789,
                          "end": 816
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 818,
                            "end": 819
                          }
                        ],
                        "optional": false,
                        "start": 788,
                        "end": 820
                      },
                      "definite": false,
                      "start": 783,
                      "end": 820
                    }
                  ],
                  "declare": false,
                  "start": 777,
                  "end": 821
                }
              ],
              "start": 732,
              "end": 827
            },
            "alternate": null,
            "start": 712,
            "end": 827
          }
        ],
        "start": 706,
        "end": 829
      },
      "expression": false,
      "start": 622,
      "end": 829
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "farr",
        "optional": false,
        "typeAnnotation": null,
        "start": 840,
        "end": 844
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
              "start": 845,
              "end": 846
            },
            "constraint": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 856,
                      "end": 862
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 864,
                      "end": 870
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 872,
                      "end": 878
                    }
                  ],
                  "start": 855,
                  "end": 879
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSStringKeyword",
                      "start": 883,
                      "end": 889
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 891,
                      "end": 897
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 899,
                      "end": 905
                    }
                  ],
                  "start": 882,
                  "end": 906
                }
              ],
              "start": 855,
              "end": 906
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 845,
            "end": 906
          }
        ],
        "start": 844,
        "end": 907
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 911,
                "end": 912
              },
              "typeArguments": null,
              "start": 911,
              "end": 912
            },
            "start": 909,
            "end": 912
          },
          "start": 908,
          "end": 912
        }
      ],
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "head",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 927,
                      "end": 931
                    },
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "tail",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 936,
                        "end": 940
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "value": null,
                      "start": 933,
                      "end": 940
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 926,
                  "end": 941
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 944,
                  "end": 945
                },
                "definite": false,
                "start": 926,
                "end": 945
              }
            ],
            "declare": false,
            "start": 920,
            "end": 946
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 962,
                    "end": 963
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 964,
                    "end": 965
                  },
                  "optional": false,
                  "computed": true,
                  "start": 962,
                  "end": 966
                },
                "prefix": true,
                "start": 955,
                "end": 966
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "number",
                "raw": "'number'",
                "start": 971,
                "end": 979
              },
              "start": 955,
              "end": 979
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "head",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 998,
                            "end": 1002
                          },
                          {
                            "type": "RestElement",
                            "decorators": [],
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "tail",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1007,
                              "end": 1011
                            },
                            "optional": false,
                            "typeAnnotation": null,
                            "value": null,
                            "start": 1004,
                            "end": 1011
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 997,
                        "end": 1012
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1015,
                        "end": 1016
                      },
                      "definite": false,
                      "start": 997,
                      "end": 1016
                    }
                  ],
                  "declare": false,
                  "start": 991,
                  "end": 1017
                }
              ],
              "start": 981,
              "end": 1023
            },
            "alternate": null,
            "start": 951,
            "end": 1023
          }
        ],
        "start": 914,
        "end": 1025
      },
      "expression": false,
      "start": 831,
      "end": 1025
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1025
}
```
