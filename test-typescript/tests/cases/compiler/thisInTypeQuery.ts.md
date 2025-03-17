__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 514,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "name": "assert",
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
          "start": 39,
          "end": 57,
          "name": "condition",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 57,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 50,
              "end": 57
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 136,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 134,
            "test": {
              "type": "UnaryExpression",
              "start": 88,
              "end": 98,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 89,
                "end": 98,
                "name": "condition",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 100,
              "end": 134,
              "body": [
                {
                  "type": "ThrowStatement",
                  "start": 110,
                  "end": 128,
                  "argument": {
                    "type": "NewExpression",
                    "start": 116,
                    "end": 127,
                    "callee": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 125,
                      "name": "Error",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 60,
          "end": 77,
          "parameterName": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "name": "condition",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": true,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 416,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 151,
        "name": "MyClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 212,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "name": "map",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ObjectExpression",
              "start": 172,
              "end": 211,
              "properties": [
                {
                  "type": "Property",
                  "start": 182,
                  "end": 205,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 188,
                    "name": "my_key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 190,
                    "end": 205,
                    "value": "example_value",
                    "raw": "'example_value'"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 218,
            "end": 414,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 230,
              "name": "runTypeFails",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 414,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 233,
                "end": 414,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 243,
                    "end": 303,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 249,
                        "end": 302,
                        "id": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 255,
                          "name": "params",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 258,
                          "end": 302,
                          "expression": {
                            "type": "TSAsExpression",
                            "start": 258,
                            "end": 269,
                            "expression": {
                              "type": "Literal",
                              "start": 258,
                              "end": 262,
                              "value": null,
                              "raw": "null"
                            },
                            "typeAnnotation": {
                              "type": "TSAnyKeyword",
                              "start": 266,
                              "end": 269
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 273,
                            "end": 302,
                            "types": [
                              {
                                "type": "TSTypeLiteral",
                                "start": 273,
                                "end": 295,
                                "members": [
                                  {
                                    "type": "TSPropertySignature",
                                    "start": 275,
                                    "end": 293,
                                    "computed": false,
                                    "optional": false,
                                    "readonly": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 275,
                                      "end": 276,
                                      "name": "a",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 276,
                                      "end": 293,
                                      "typeAnnotation": {
                                        "type": "TSTypeLiteral",
                                        "start": 278,
                                        "end": 293,
                                        "members": [
                                          {
                                            "type": "TSPropertySignature",
                                            "start": 280,
                                            "end": 291,
                                            "computed": false,
                                            "optional": false,
                                            "readonly": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 280,
                                              "end": 283,
                                              "name": "key",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 283,
                                              "end": 291,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 285,
                                                "end": 291
                                              }
                                            },
                                            "accessibility": null,
                                            "static": false
                                          }
                                        ]
                                      }
                                    },
                                    "accessibility": null,
                                    "static": false
                                  }
                                ]
                              },
                              {
                                "type": "TSNullKeyword",
                                "start": 298,
                                "end": 302
                              }
                            ]
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 312,
                    "end": 327,
                    "expression": {
                      "type": "CallExpression",
                      "start": 312,
                      "end": 326,
                      "callee": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 318,
                        "name": "assert",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 319,
                          "end": 325,
                          "name": "params",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 336,
                    "end": 369,
                    "id": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 344,
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeParameters": null,
                    "typeAnnotation": {
                      "type": "TSTypeOperator",
                      "start": 347,
                      "end": 368,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 353,
                        "end": 368,
                        "exprName": {
                          "type": "TSQualifiedName",
                          "start": 360,
                          "end": 368,
                          "left": {
                            "type": "ThisExpression",
                            "start": 360,
                            "end": 364
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 365,
                            "end": 368,
                            "name": "map",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 378,
                    "end": 408,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 407,
                      "object": {
                        "type": "MemberExpression",
                        "start": 378,
                        "end": 386,
                        "object": {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 386,
                          "name": "map",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "start": 387,
                        "end": 406,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 387,
                          "end": 399,
                          "object": {
                            "type": "MemberExpression",
                            "start": 387,
                            "end": 395,
                            "object": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 393,
                              "name": "params",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 394,
                              "end": 395,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 399,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 403,
                          "end": 406,
                          "typeName": {
                            "type": "Identifier",
                            "start": 403,
                            "end": 406,
                            "name": "Key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "computed": true,
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 513,
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 425,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 426,
        "end": 513,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 430,
            "end": 511,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 511,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 436,
                "end": 511,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 442,
                    "end": 459,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 448,
                        "end": 458,
                        "id": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 449,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "start": 452,
                          "end": 458,
                          "operator": "!",
                          "prefix": true,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 453,
                            "end": 458,
                            "operator": "!",
                            "prefix": true,
                            "argument": {
                              "type": "Literal",
                              "start": 454,
                              "end": 458,
                              "value": true,
                              "raw": "true"
                            }
                          }
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 464,
                    "end": 507,
                    "test": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 471,
                      "end": 507,
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "start": 479,
                          "end": 501,
                          "id": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 486,
                            "name": "T0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "typeAnnotation": {
                            "type": "TSTypeQuery",
                            "start": 489,
                            "end": 500,
                            "exprName": {
                              "type": "ThisExpression",
                              "start": 496,
                              "end": 500
                            },
                            "typeArguments": null
                          },
                          "declare": false
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
