__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 41,
                  "end": 48
                },
                "start": 41,
                "end": 50
              },
              "start": 39,
              "end": 50
            },
            "start": 36,
            "end": 50
          },
          "init": null,
          "definite": false,
          "start": 36,
          "end": 50
        }
      ],
      "declare": true,
      "start": 22,
      "end": 51
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
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 58,
            "end": 61
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 64,
                "end": 67
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null,
                "start": 68,
                "end": 75
              },
              "optional": false,
              "computed": false,
              "start": 64,
              "end": 75
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
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 79
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 83,
                    "end": 86
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 90,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 90,
                    "end": 93
                  },
                  "start": 83,
                  "end": 93
                },
                "id": null,
                "generator": false,
                "start": 76,
                "end": 93
              }
            ],
            "optional": false,
            "start": 64,
            "end": 94
          },
          "definite": false,
          "start": 58,
          "end": 94
        }
      ],
      "declare": false,
      "start": 52,
      "end": 95
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 107,
        "end": 110
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null,
            "start": 119,
            "end": 124
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            ],
            "start": 124,
            "end": 132
          },
          "start": 119,
          "end": 132
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 133,
        "end": 135
      },
      "declare": false,
      "start": 97,
      "end": 135
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
            "name": "repro_43249",
            "optional": false,
            "typeAnnotation": null,
            "start": 178,
            "end": 189
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
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 200,
                    "end": 207
                  },
                  "start": 198,
                  "end": 207
                },
                "start": 193,
                "end": 207
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
                      "type": "UnaryExpression",
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 234
                      },
                      "prefix": true,
                      "start": 222,
                      "end": 234
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "\"string\"",
                      "start": 239,
                      "end": 247
                    },
                    "start": 222,
                    "end": 247
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "argument": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 274
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "No",
                              "raw": "\"No\"",
                              "start": 275,
                              "end": 279
                            }
                          ],
                          "start": 265,
                          "end": 280
                        },
                        "start": 259,
                        "end": 281
                      }
                    ],
                    "start": 249,
                    "end": 287
                  },
                  "alternate": null,
                  "start": 218,
                  "end": 287
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
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 303
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 311
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "match",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 312,
                              "end": 317
                            },
                            "optional": false,
                            "computed": false,
                            "start": 306,
                            "end": 317
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": null,
                              "raw": "/anything/",
                              "regex": {
                                "pattern": "anything",
                                "flags": ""
                              },
                              "start": 318,
                              "end": 328
                            }
                          ],
                          "optional": false,
                          "start": 306,
                          "end": 329
                        },
                        "operator": "||",
                        "right": {
                          "type": "ArrayExpression",
                          "elements": [],
                          "start": 333,
                          "end": 335
                        },
                        "start": 306,
                        "end": 335
                      },
                      "definite": false,
                      "start": 298,
                      "end": 335
                    }
                  ],
                  "declare": false,
                  "start": 292,
                  "end": 336
                },
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
                          null,
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extracted",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 350,
                            "end": 359
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 347,
                        "end": 360
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 363,
                        "end": 368
                      },
                      "definite": false,
                      "start": 347,
                      "end": 368
                    }
                  ],
                  "declare": false,
                  "start": 341,
                  "end": 369
                }
              ],
              "start": 212,
              "end": 371
            },
            "id": null,
            "generator": false,
            "start": 192,
            "end": 371
          },
          "definite": false,
          "start": 178,
          "end": 371
        }
      ],
      "declare": false,
      "start": 172,
      "end": 372
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 383,
        "end": 384
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
              "name": "Arr",
              "optional": false,
              "typeAnnotation": null,
              "start": 385,
              "end": 388
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 385,
            "end": 388
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 400,
              "end": 406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 406
          }
        ],
        "start": 384,
        "end": 407
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
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 411,
                "end": 420
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 421,
                      "end": 424
                    },
                    "typeArguments": null,
                    "start": 421,
                    "end": 424
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 426,
                    "end": 429
                  }
                ],
                "start": 420,
                "end": 430
              },
              "start": 411,
              "end": 430
            },
            "start": 409,
            "end": 430
          },
          "start": 408,
          "end": 430
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 444
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 445,
                      "end": 448
                    },
                    "typeArguments": null,
                    "start": 445,
                    "end": 448
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 450,
                      "end": 451
                    },
                    "typeArguments": null,
                    "start": 450,
                    "end": 451
                  }
                ],
                "start": 444,
                "end": 452
              },
              "start": 435,
              "end": 452
            },
            "start": 433,
            "end": 452
          },
          "start": 432,
          "end": 452
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 465
              },
              "start": 460,
              "end": 465
            },
            "directive": null,
            "start": 460,
            "end": 466
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 471,
                "end": 472
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 476
              },
              "start": 471,
              "end": 476
            },
            "directive": null,
            "start": 471,
            "end": 477
          }
        ],
        "start": 454,
        "end": 489
      },
      "expression": false,
      "start": 374,
      "end": 489
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 489
}
```
