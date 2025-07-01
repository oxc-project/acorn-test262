__ESTREE_TEST__:PASS:
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
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "start": 8,
              "end": 9
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 8,
            "end": 9
          }
        ],
        "start": 7,
        "end": 10
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 17,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "ThisExpression",
              "start": 21,
              "end": 25
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 17,
            "end": 26
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 34
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
                      "type": "ThisExpression",
                      "start": 54,
                      "end": 58
                    },
                    "start": 47,
                    "end": 59
                  }
                ],
                "start": 37,
                "end": 65
              },
              "expression": false,
              "start": 34,
              "end": 65
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 31,
            "end": 65
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 81
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 85,
                        "end": 86
                      },
                      "typeArguments": null,
                      "start": 85,
                      "end": 86
                    },
                    "start": 83,
                    "end": 86
                  },
                  "start": 82,
                  "end": 86
                }
              ],
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 102,
                          "end": 103
                        },
                        "init": {
                          "type": "ThisExpression",
                          "start": 106,
                          "end": 110
                        },
                        "definite": false,
                        "start": 102,
                        "end": 110
                      }
                    ],
                    "declare": false,
                    "start": 98,
                    "end": 111
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 120,
                        "end": 121
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 122,
                        "end": 123
                      },
                      "optional": false,
                      "computed": false,
                      "start": 120,
                      "end": 123
                    },
                    "directive": null,
                    "start": 120,
                    "end": 124
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 133,
                        "end": 134
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "optional": false,
                      "computed": false,
                      "start": 133,
                      "end": 136
                    },
                    "directive": null,
                    "start": 133,
                    "end": 137
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 146,
                        "end": 147
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 148,
                        "end": 149
                      },
                      "optional": false,
                      "computed": false,
                      "start": 146,
                      "end": 149
                    },
                    "directive": null,
                    "start": 146,
                    "end": 150
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
                          "start": 163,
                          "end": 164
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 167,
                              "end": 168
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 169,
                              "end": 172
                            },
                            "optional": false,
                            "computed": false,
                            "start": 167,
                            "end": 172
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 167,
                          "end": 174
                        },
                        "definite": false,
                        "start": 163,
                        "end": 174
                      }
                    ],
                    "declare": false,
                    "start": 159,
                    "end": 175
                  }
                ],
                "start": 88,
                "end": 181
              },
              "expression": false,
              "start": 81,
              "end": 181
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 70,
            "end": 181
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 191,
              "end": 192
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
                      "type": "ThisExpression",
                      "start": 212,
                      "end": 216
                    },
                    "start": 205,
                    "end": 217
                  }
                ],
                "start": 195,
                "end": 223
              },
              "expression": false,
              "start": 192,
              "end": 223
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 187,
            "end": 223
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 230
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
                  "start": 232,
                  "end": 233
                },
                "typeArguments": null,
                "start": 232,
                "end": 233
              },
              "start": 230,
              "end": 233
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 234
          }
        ],
        "start": 11,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 236
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
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 245,
                  "end": 246
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 247,
                      "end": 253
                    }
                  ],
                  "start": 246,
                  "end": 254
                },
                "start": 245,
                "end": 254
              },
              "start": 243,
              "end": 254
            },
            "start": 242,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 254
        }
      ],
      "declare": false,
      "start": 238,
      "end": 255
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
            "start": 270,
            "end": 271
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 274,
              "end": 275
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 277
            },
            "optional": false,
            "computed": false,
            "start": 274,
            "end": 277
          },
          "definite": false,
          "start": 270,
          "end": 277
        }
      ],
      "declare": false,
      "start": 266,
      "end": 278
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
            "name": "ra",
            "optional": false,
            "typeAnnotation": null,
            "start": 283,
            "end": 285
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 288,
                  "end": 289
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 291
                },
                "optional": false,
                "computed": false,
                "start": 288,
                "end": 291
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 292,
                "end": 293
              },
              "optional": false,
              "computed": false,
              "start": 288,
              "end": 293
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 294,
              "end": 295
            },
            "optional": false,
            "computed": false,
            "start": 288,
            "end": 295
          },
          "definite": false,
          "start": 283,
          "end": 295
        }
      ],
      "declare": false,
      "start": 279,
      "end": 296
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
            "start": 301,
            "end": 303
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 308,
              "end": 309
            },
            "optional": false,
            "computed": false,
            "start": 306,
            "end": 309
          },
          "definite": false,
          "start": 301,
          "end": 309
        }
      ],
      "declare": false,
      "start": 297,
      "end": 310
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
            "typeAnnotation": null,
            "start": 315,
            "end": 317
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 320,
                "end": 321
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 322,
                "end": 325
              },
              "optional": false,
              "computed": false,
              "start": 320,
              "end": 325
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 320,
            "end": 327
          },
          "definite": false,
          "start": 315,
          "end": 327
        }
      ],
      "declare": false,
      "start": 311,
      "end": 328
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
            "start": 333,
            "end": 335
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 338,
              "end": 339
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 341
            },
            "optional": false,
            "computed": false,
            "start": 338,
            "end": 341
          },
          "definite": false,
          "start": 333,
          "end": 341
        }
      ],
      "declare": false,
      "start": 329,
      "end": 342
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
            "name": "rs",
            "optional": false,
            "typeAnnotation": null,
            "start": 347,
            "end": 349
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 354
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r2",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 358
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "r3",
                "optional": false,
                "typeAnnotation": null,
                "start": 360,
                "end": 362
              }
            ],
            "start": 352,
            "end": 363
          },
          "definite": false,
          "start": 347,
          "end": 363
        }
      ],
      "declare": false,
      "start": 343,
      "end": 364
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
            "name": "rs",
            "optional": false,
            "typeAnnotation": null,
            "start": 366,
            "end": 368
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "forEach",
            "optional": false,
            "typeAnnotation": null,
            "start": 369,
            "end": 376
          },
          "optional": false,
          "computed": false,
          "start": 366,
          "end": 376
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 377,
                "end": 378
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 388,
                      "end": 389
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 390,
                      "end": 393
                    },
                    "optional": false,
                    "computed": false,
                    "start": 388,
                    "end": 393
                  },
                  "directive": null,
                  "start": 388,
                  "end": 394
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 399,
                      "end": 400
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 401,
                      "end": 402
                    },
                    "optional": false,
                    "computed": false,
                    "start": 399,
                    "end": 402
                  },
                  "directive": null,
                  "start": 399,
                  "end": 403
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 408,
                      "end": 409
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 411
                    },
                    "optional": false,
                    "computed": false,
                    "start": 408,
                    "end": 411
                  },
                  "directive": null,
                  "start": 408,
                  "end": 412
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 417,
                      "end": 418
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 419,
                      "end": 420
                    },
                    "optional": false,
                    "computed": false,
                    "start": 417,
                    "end": 420
                  },
                  "directive": null,
                  "start": 417,
                  "end": 421
                }
              ],
              "start": 382,
              "end": 423
            },
            "id": null,
            "generator": false,
            "start": 377,
            "end": 423
          }
        ],
        "optional": false,
        "start": 366,
        "end": 424
      },
      "directive": null,
      "start": 366,
      "end": 425
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 425
}
```
