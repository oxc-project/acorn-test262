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
        "name": "T1",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 64
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 67,
              "end": 70
            },
            "start": 67,
            "end": 70
          },
          {
            "type": "TSLiteralType",
            "literal": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 73,
              "end": 76
            },
            "start": 73,
            "end": 76
          }
        ],
        "start": 67,
        "end": 76
      },
      "declare": false,
      "start": 57,
      "end": 77
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2",
        "optional": false,
        "typeAnnotation": null,
        "start": 84,
        "end": 86
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
              "name": "C",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 94
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 97,
                    "end": 103
                  }
                ],
                "start": 96,
                "end": 104
              },
              "start": 94,
              "end": 104
            },
            "accessibility": null,
            "static": false,
            "start": 93,
            "end": 105
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 109
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 112,
                    "end": 118
                  }
                ],
                "start": 111,
                "end": 119
              },
              "start": 109,
              "end": 119
            },
            "accessibility": null,
            "static": false,
            "start": 108,
            "end": 120
          }
        ],
        "start": 89,
        "end": 122
      },
      "declare": false,
      "start": 79,
      "end": 123
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
            "name": "map",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 149,
                  "end": 150
                },
                "constraint": {
                  "type": "TSUnionType",
                  "types": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 154,
                        "end": 156
                      },
                      "typeArguments": null,
                      "start": 154,
                      "end": 156
                    },
                    {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 165,
                          "end": 167
                        },
                        "typeArguments": null,
                        "start": 165,
                        "end": 167
                      },
                      "start": 159,
                      "end": 167
                    }
                  ],
                  "start": 154,
                  "end": 167
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "RestElement",
                      "decorators": [],
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 174,
                        "end": 178
                      },
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSConditionalType",
                          "checkType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 180,
                              "end": 181
                            },
                            "typeArguments": null,
                            "start": 180,
                            "end": 181
                          },
                          "extendsType": {
                            "type": "TSTypeOperator",
                            "operator": "keyof",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 196,
                                "end": 198
                              },
                              "typeArguments": null,
                              "start": 196,
                              "end": 198
                            },
                            "start": 190,
                            "end": 198
                          },
                          "trueType": {
                            "type": "TSIndexedAccessType",
                            "objectType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 201,
                                "end": 203
                              },
                              "typeArguments": null,
                              "start": 201,
                              "end": 203
                            },
                            "indexType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 204,
                                "end": 205
                              },
                              "typeArguments": null,
                              "start": 204,
                              "end": 205
                            },
                            "start": 201,
                            "end": 206
                          },
                          "falseType": {
                            "type": "TSTupleType",
                            "elementTypes": [],
                            "start": 209,
                            "end": 211
                          },
                          "start": 180,
                          "end": 211
                        },
                        "start": 178,
                        "end": 211
                      },
                      "value": null,
                      "start": 171,
                      "end": 211
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 216,
                      "end": 223
                    },
                    "start": 213,
                    "end": 223
                  },
                  "start": 170,
                  "end": 223
                },
                "optional": false,
                "readonly": null,
                "start": 144,
                "end": 226
              },
              "start": 142,
              "end": 226
            },
            "start": 139,
            "end": 226
          },
          "init": null,
          "definite": false,
          "start": 139,
          "end": 226
        }
      ],
      "declare": true,
      "start": 125,
      "end": 227
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
            "name": "args",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 249,
                "end": 252
              },
              "start": 247,
              "end": 252
            },
            "start": 243,
            "end": 252
          },
          "init": null,
          "definite": false,
          "start": 243,
          "end": 252
        }
      ],
      "declare": true,
      "start": 229,
      "end": 253
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
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
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 270
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fn",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 272,
                  "end": 274
                }
              ],
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 275
            },
            "init": null,
            "definite": false,
            "start": 266,
            "end": 275
          }
        ],
        "declare": false,
        "start": 260,
        "end": 275
      },
      "right": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 279,
            "end": 285
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "entries",
            "optional": false,
            "typeAnnotation": null,
            "start": 286,
            "end": 293
          },
          "optional": false,
          "computed": false,
          "start": 279,
          "end": 293
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "map",
            "optional": false,
            "typeAnnotation": null,
            "start": 294,
            "end": 297
          }
        ],
        "optional": false,
        "start": 279,
        "end": 298
      },
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
                "start": 304,
                "end": 306
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 310,
                    "end": 314
                  },
                  "start": 307,
                  "end": 314
                }
              ],
              "optional": false,
              "start": 304,
              "end": 315
            },
            "directive": null,
            "start": 304,
            "end": 316
          }
        ],
        "start": 300,
        "end": 318
      },
      "start": 255,
      "end": 318
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
            "name": "test2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 338,
                            "end": 344
                          },
                          "start": 336,
                          "end": 344
                        },
                        "start": 335,
                        "end": 344
                      },
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 349,
                          "end": 353
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTupleType",
                            "elementTypes": [],
                            "start": 355,
                            "end": 357
                          },
                          "start": 353,
                          "end": 357
                        },
                        "value": null,
                        "start": 346,
                        "end": 357
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 362,
                        "end": 366
                      },
                      "start": 359,
                      "end": 366
                    },
                    "start": 334,
                    "end": 366
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 377,
                            "end": 383
                          },
                          "start": 375,
                          "end": 383
                        },
                        "start": 374,
                        "end": 383
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 388,
                        "end": 392
                      },
                      "start": 385,
                      "end": 392
                    },
                    "start": 373,
                    "end": 392
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 403,
                            "end": 410
                          },
                          "start": 401,
                          "end": 410
                        },
                        "start": 400,
                        "end": 410
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 415,
                        "end": 419
                      },
                      "start": 412,
                      "end": 419
                    },
                    "start": 399,
                    "end": 419
                  }
                ],
                "start": 333,
                "end": 420
              },
              "start": 331,
              "end": 420
            },
            "start": 326,
            "end": 420
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 424,
                "end": 427
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 432,
              "end": 434
            },
            "id": null,
            "generator": false,
            "start": 423,
            "end": 434
          },
          "definite": false,
          "start": 326,
          "end": 434
        }
      ],
      "declare": false,
      "start": 320,
      "end": 435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 435
}
```
