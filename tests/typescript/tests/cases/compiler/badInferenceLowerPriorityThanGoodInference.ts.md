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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 32,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 46
            },
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
                  "start": 48,
                  "end": 49
                },
                "typeArguments": null,
                "start": 48,
                "end": 49
              },
              "start": 46,
              "end": 49
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 50
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
              "start": 55,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 62,
                          "end": 63
                        },
                        "typeArguments": null,
                        "start": 62,
                        "end": 63
                      },
                      "start": 60,
                      "end": 63
                    },
                    "start": 59,
                    "end": 63
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 68,
                    "end": 72
                  },
                  "start": 65,
                  "end": 72
                },
                "start": 58,
                "end": 72
              },
              "start": 56,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 55,
            "end": 73
          }
        ],
        "start": 39,
        "end": 75
      },
      "declare": false,
      "start": 22,
      "end": 75
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "canYouInferThis",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 109
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
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 111
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 110,
            "end": 111
          }
        ],
        "start": 109,
        "end": 112
      },
      "params": [
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
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 123,
                    "end": 126
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 127,
                          "end": 128
                        },
                        "typeArguments": null,
                        "start": 127,
                        "end": 128
                      }
                    ],
                    "start": 126,
                    "end": 129
                  },
                  "start": 123,
                  "end": 129
                },
                "start": 120,
                "end": 129
              },
              "start": 117,
              "end": 129
            },
            "start": 115,
            "end": 129
          },
          "start": 113,
          "end": 129
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 132,
            "end": 133
          },
          "typeArguments": null,
          "start": 132,
          "end": 133
        },
        "start": 130,
        "end": 133
      },
      "body": null,
      "expression": false,
      "start": 77,
      "end": 134
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
            "name": "result",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "canYouInferThis",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 166
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
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
                        "start": 180,
                        "end": 181
                      },
                      "value": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "BLAH",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 185,
                              "end": 189
                            },
                            "value": {
                              "type": "Literal",
                              "value": 33,
                              "raw": "33",
                              "start": 191,
                              "end": 193
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 185,
                            "end": 193
                          }
                        ],
                        "start": 183,
                        "end": 195
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 180,
                      "end": 195
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 201,
                        "end": 202
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
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 204,
                            "end": 205
                          }
                        ],
                        "returnType": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [],
                          "start": 209,
                          "end": 212
                        },
                        "id": null,
                        "generator": false,
                        "start": 204,
                        "end": 212
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 201,
                      "end": 212
                    }
                  ],
                  "start": 174,
                  "end": 214
                },
                "id": null,
                "generator": false,
                "start": 167,
                "end": 215
              }
            ],
            "optional": false,
            "start": 151,
            "end": 216
          },
          "definite": false,
          "start": 142,
          "end": 216
        }
      ],
      "declare": false,
      "start": 136,
      "end": 216
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "Identifier",
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null,
          "start": 218,
          "end": 224
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "BLAH",
          "optional": false,
          "typeAnnotation": null,
          "start": 225,
          "end": 229
        },
        "optional": false,
        "computed": false,
        "start": 218,
        "end": 229
      },
      "directive": null,
      "start": 218,
      "end": 230
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "goofus",
        "optional": false,
        "typeAnnotation": null,
        "start": 263,
        "end": 269
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
              "name": "ARGS",
              "optional": false,
              "typeAnnotation": null,
              "start": 271,
              "end": 275
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 284,
                "end": 287
              },
              "start": 284,
              "end": 289
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 271,
            "end": 289
          }
        ],
        "start": 270,
        "end": 290
      },
      "params": [
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
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 299,
                    "end": 303
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ARGS",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 305,
                        "end": 309
                      },
                      "typeArguments": null,
                      "start": 305,
                      "end": 309
                    },
                    "start": 303,
                    "end": 309
                  },
                  "value": null,
                  "start": 296,
                  "end": 309
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 314,
                  "end": 317
                },
                "start": 311,
                "end": 317
              },
              "start": 295,
              "end": 317
            },
            "start": 293,
            "end": 317
          },
          "start": 292,
          "end": 317
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 320,
        "end": 322
      },
      "expression": false,
      "start": 254,
      "end": 322
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "goofus",
          "optional": false,
          "typeAnnotation": null,
          "start": 324,
          "end": 330
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 335,
                    "end": 341
                  },
                  "start": 333,
                  "end": 341
                },
                "start": 332,
                "end": 341
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 349,
                    "end": 352
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 364,
                            "end": 365
                          },
                          "start": 357,
                          "end": 366
                        }
                      ],
                      "start": 355,
                      "end": 368
                    },
                    "expression": false,
                    "start": 352,
                    "end": 368
                  },
                  "method": true,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 349,
                  "end": 368
                }
              ],
              "start": 347,
              "end": 370
            },
            "id": null,
            "generator": false,
            "start": 331,
            "end": 371
          }
        ],
        "optional": false,
        "start": 324,
        "end": 372
      },
      "directive": null,
      "start": 324,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "goofus",
          "optional": false,
          "typeAnnotation": null,
          "start": 374,
          "end": 380
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "type": "TSStringKeyword",
                    "start": 385,
                    "end": 391
                  },
                  "start": 383,
                  "end": 391
                },
                "start": 382,
                "end": 391
              }
            ],
            "returnType": null,
            "body": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dog",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 399,
                    "end": 402
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
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 424,
                            "end": 425
                          },
                          "start": 417,
                          "end": 426
                        }
                      ],
                      "start": 415,
                      "end": 428
                    },
                    "expression": false,
                    "start": 404,
                    "end": 428
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 399,
                  "end": 428
                }
              ],
              "start": 397,
              "end": 430
            },
            "id": null,
            "generator": false,
            "start": 381,
            "end": 431
          }
        ],
        "optional": false,
        "start": 374,
        "end": 432
      },
      "directive": null,
      "start": 374,
      "end": 433
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 433
}
```
