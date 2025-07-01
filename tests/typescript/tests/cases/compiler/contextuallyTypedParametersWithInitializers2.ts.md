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
        "name": "test1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 22
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
              "name": "TContext",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 34
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 34
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "TMethods",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 46
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 61
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 62,
                    "end": 68
                  },
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ctx",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TContext",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 76,
                              "end": 84
                            },
                            "typeArguments": null,
                            "start": 76,
                            "end": 84
                          },
                          "start": 74,
                          "end": 84
                        },
                        "start": 71,
                        "end": 84
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
                          "start": 89,
                          "end": 93
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSNeverKeyword",
                              "start": 95,
                              "end": 100
                            },
                            "start": 95,
                            "end": 102
                          },
                          "start": 93,
                          "end": 102
                        },
                        "value": null,
                        "start": 86,
                        "end": 102
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnknownKeyword",
                        "start": 107,
                        "end": 114
                      },
                      "start": 104,
                      "end": 114
                    },
                    "start": 70,
                    "end": 114
                  }
                ],
                "start": 61,
                "end": 115
              },
              "start": 55,
              "end": 115
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 38,
            "end": 115
          }
        ],
        "start": 22,
        "end": 118
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "context",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TContext",
                "optional": false,
                "typeAnnotation": null,
                "start": 128,
                "end": 136
              },
              "typeArguments": null,
              "start": 128,
              "end": 136
            },
            "start": 126,
            "end": 136
          },
          "start": 119,
          "end": 136
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "methods",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TMethods",
                "optional": false,
                "typeAnnotation": null,
                "start": 147,
                "end": 155
              },
              "typeArguments": null,
              "start": 147,
              "end": 155
            },
            "start": 145,
            "end": 155
          },
          "start": 138,
          "end": 155
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 158,
          "end": 162
        },
        "start": 156,
        "end": 162
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 163
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test1",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 170
        },
        "typeArguments": null,
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
                  "name": "count",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 180,
                  "end": 185
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 187,
                  "end": 188
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 180,
                "end": 188
              }
            ],
            "start": 174,
            "end": 193
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "checkLimit",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 203,
                  "end": 213
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 216,
                      "end": 219
                    },
                    {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "max",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 224
                      },
                      "right": {
                        "type": "Literal",
                        "value": 500,
                        "raw": "500",
                        "start": 227,
                        "end": 230
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 221,
                      "end": 230
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 235,
                    "end": 237
                  },
                  "id": null,
                  "generator": false,
                  "start": 215,
                  "end": 237
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 203,
                "end": 237
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "hasAccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 252
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ctx",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 255,
                      "end": 258
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "user",
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
                                "name": "name",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 268,
                                "end": 272
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 274,
                                  "end": 280
                                },
                                "start": 272,
                                "end": 280
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 268,
                              "end": 280
                            }
                          ],
                          "start": 266,
                          "end": 282
                        },
                        "start": 264,
                        "end": 282
                      },
                      "start": 260,
                      "end": 282
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [],
                    "start": 287,
                    "end": 289
                  },
                  "id": null,
                  "generator": false,
                  "start": 254,
                  "end": 289
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 243,
                "end": 289
              }
            ],
            "start": 197,
            "end": 294
          }
        ],
        "optional": false,
        "start": 165,
        "end": 297
      },
      "directive": null,
      "start": 165,
      "end": 298
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
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 319,
                "end": 325
              },
              "start": 317,
              "end": 325
            },
            "start": 314,
            "end": 325
          },
          "init": null,
          "definite": false,
          "start": 314,
          "end": 325
        }
      ],
      "declare": true,
      "start": 300,
      "end": 326
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
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1",
                              "start": 346,
                              "end": 347
                            },
                            "start": 346,
                            "end": 347
                          },
                          {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2",
                              "start": 350,
                              "end": 351
                            },
                            "start": 350,
                            "end": 351
                          }
                        ],
                        "start": 346,
                        "end": 351
                      },
                      "start": 344,
                      "end": 351
                    },
                    "start": 341,
                    "end": 351
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 356,
                    "end": 360
                  },
                  "start": 353,
                  "end": 360
                },
                "start": 340,
                "end": 360
              },
              "start": 338,
              "end": 360
            },
            "start": 333,
            "end": 360
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 367
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "num",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 370,
                  "end": 373
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 364,
                "end": 373
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 378,
              "end": 380
            },
            "id": null,
            "generator": false,
            "start": 363,
            "end": 380
          },
          "definite": false,
          "start": 333,
          "end": 380
        }
      ],
      "declare": false,
      "start": 327,
      "end": 381
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
            "name": "test3",
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
                        "type": "TSNumberKeyword",
                        "start": 402,
                        "end": 408
                      },
                      "start": 400,
                      "end": 408
                    },
                    "start": 397,
                    "end": 408
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 413,
                    "end": 417
                  },
                  "start": 410,
                  "end": 417
                },
                "start": 396,
                "end": 417
              },
              "start": 394,
              "end": 417
            },
            "start": 389,
            "end": 417
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 424
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 427,
                  "end": 428
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 421,
                "end": 428
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 433,
              "end": 435
            },
            "id": null,
            "generator": false,
            "start": 420,
            "end": 435
          },
          "definite": false,
          "start": 389,
          "end": 435
        }
      ],
      "declare": false,
      "start": 383,
      "end": 436
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 436
}
```
