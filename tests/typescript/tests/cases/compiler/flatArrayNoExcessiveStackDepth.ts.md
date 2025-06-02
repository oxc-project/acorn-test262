__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 489,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 51,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 50,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 50,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 41,
                "end": 50,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 41,
                  "end": 48
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 95,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 64,
            "end": 94,
            "callee": {
              "type": "MemberExpression",
              "start": 64,
              "end": 75,
              "object": {
                "type": "Identifier",
                "start": 64,
                "end": 67,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 75,
                "decorators": [],
                "name": "flatMap",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 76,
                "end": 93,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "TSAsExpression",
                  "start": 83,
                  "end": 93,
                  "expression": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 90,
                    "end": 93,
                    "typeName": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 93,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "id": null,
                "generator": false
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 97,
      "end": 135,
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 110,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 119,
          "end": 132,
          "expression": {
            "type": "Identifier",
            "start": 119,
            "end": 124,
            "decorators": [],
            "name": "Array",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 124,
            "end": 132,
            "params": [
              {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            ]
          }
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 133,
        "end": 135,
        "body": []
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 372,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 189,
            "decorators": [],
            "name": "repro_43249",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 192,
            "end": 371,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 207,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 207,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 200,
                    "end": 207
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 212,
              "end": 371,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 218,
                  "end": 287,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 222,
                    "end": 247,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 222,
                      "end": 234,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 234,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "!==",
                    "right": {
                      "type": "Literal",
                      "start": 239,
                      "end": 247,
                      "value": "string",
                      "raw": "\"string\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 249,
                    "end": 287,
                    "body": [
                      {
                        "type": "ThrowStatement",
                        "start": 259,
                        "end": 281,
                        "argument": {
                          "type": "NewExpression",
                          "start": 265,
                          "end": 280,
                          "callee": {
                            "type": "Identifier",
                            "start": 269,
                            "end": 274,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 275,
                              "end": 279,
                              "value": "No",
                              "raw": "\"No\""
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 292,
                  "end": 336,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 298,
                      "end": 335,
                      "id": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 303,
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "LogicalExpression",
                        "start": 306,
                        "end": 335,
                        "left": {
                          "type": "CallExpression",
                          "start": 306,
                          "end": 329,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 306,
                            "end": 317,
                            "object": {
                              "type": "Identifier",
                              "start": 306,
                              "end": 311,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 312,
                              "end": 317,
                              "decorators": [],
                              "name": "match",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 318,
                              "end": 328,
                              "value": null,
                              "raw": "/anything/",
                              "regex": {
                                "pattern": "anything",
                                "flags": ""
                              }
                            }
                          ],
                          "optional": false
                        },
                        "operator": "||",
                        "right": {
                          "type": "ArrayExpression",
                          "start": 333,
                          "end": 335,
                          "elements": []
                        }
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 341,
                  "end": 369,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 347,
                      "end": 368,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 347,
                        "end": 360,
                        "decorators": [],
                        "elements": [
                          null,
                          {
                            "type": "Identifier",
                            "start": 350,
                            "end": 359,
                            "decorators": [],
                            "name": "extracted",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 368,
                        "decorators": [],
                        "name": "match",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 489,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 384,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 384,
        "end": 407,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 385,
            "end": 388,
            "name": {
              "type": "Identifier",
              "start": 385,
              "end": 388,
              "decorators": [],
              "name": "Arr",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 390,
            "end": 406,
            "name": {
              "type": "Identifier",
              "start": 390,
              "end": 391,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 400,
              "end": 406
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 408,
          "end": 430,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 430,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 430,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 420,
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 420,
                "end": 430,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 421,
                    "end": 424,
                    "typeName": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 424,
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 426,
                    "end": 429
                  }
                ]
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 432,
          "end": 452,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 452,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 435,
              "end": 452,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 444,
                "decorators": [],
                "name": "FlatArray",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 444,
                "end": 452,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 445,
                    "end": 448,
                    "typeName": {
                      "type": "Identifier",
                      "start": 445,
                      "end": 448,
                      "decorators": [],
                      "name": "Arr",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 450,
                    "end": 451,
                    "typeName": {
                      "type": "Identifier",
                      "start": 450,
                      "end": 451,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 489,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 460,
            "end": 466,
            "expression": {
              "type": "AssignmentExpression",
              "start": 460,
              "end": 465,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 460,
                "end": 461,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 471,
            "end": 477,
            "expression": {
              "type": "AssignmentExpression",
              "start": 471,
              "end": 476,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 471,
                "end": 472,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
