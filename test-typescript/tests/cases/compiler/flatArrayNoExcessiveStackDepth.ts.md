__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 490,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 50,
            "name": "foo",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 52,
      "end": 95,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 94,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "name": "bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 68,
                "end": 75,
                "name": "flatMap",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 76,
                "end": 93,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 76,
                    "end": 79,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "TSAsExpression",
                  "start": 83,
                  "end": 93,
                  "expression": {
                    "type": "Identifier",
                    "start": 83,
                    "end": 86,
                    "name": "bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 90,
                    "end": 93,
                    "typeName": {
                      "type": "Identifier",
                      "start": 90,
                      "end": 93,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "typeParameters": null,
                "returnType": null
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 119,
          "end": 132,
          "expression": {
            "type": "Identifier",
            "start": 119,
            "end": 124,
            "name": "Array",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "typeParameters": null,
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 178,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 178,
            "end": 189,
            "name": "repro_43249",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 192,
            "end": 371,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 193,
                "end": 207,
                "name": "value",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 198,
                  "end": 207,
                  "typeAnnotation": {
                    "type": "TSUnknownKeyword",
                    "start": 200,
                    "end": 207
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 234,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 275,
                              "end": 279,
                              "value": "No",
                              "raw": "\"No\""
                            }
                          ],
                          "typeArguments": null
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
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 298,
                      "end": 335,
                      "id": {
                        "type": "Identifier",
                        "start": 298,
                        "end": 303,
                        "name": "match",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 312,
                              "end": 317,
                              "name": "match",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "start": 318,
                              "end": 328,
                              "value": null,
                              "raw": "/anything/",
                              "regex": {
                                "flags": "",
                                "pattern": "anything"
                              }
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
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
                  "kind": "const",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 341,
                  "end": 369,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 347,
                      "end": 368,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 347,
                        "end": 360,
                        "elements": [
                          null,
                          {
                            "type": "Identifier",
                            "start": 350,
                            "end": 359,
                            "name": "extracted",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 363,
                        "end": 368,
                        "name": "match",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "const",
                  "declare": false
                }
              ]
            },
            "typeParameters": null,
            "returnType": null
          },
          "definite": false
        }
      ],
      "kind": "const",
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
        "name": "f",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 408,
          "end": 430,
          "name": "x",
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
                "name": "FlatArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 432,
          "end": 452,
          "name": "y",
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
                "name": "FlatArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                      "name": "Arr",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 464,
                "end": 465,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 475,
                "end": 476,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          }
        ]
      },
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
              "name": "Arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "D",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
