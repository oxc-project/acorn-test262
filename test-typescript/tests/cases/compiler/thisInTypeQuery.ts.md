__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 513,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 23,
      "end": 136,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 136,
        "body": [
          {
            "type": "IfStatement",
            "start": 84,
            "end": 134,
            "alternate": null,
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
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 120,
                      "end": 125,
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "UnaryExpression",
              "start": 88,
              "end": 98,
              "argument": {
                "type": "Identifier",
                "start": 89,
                "end": 98,
                "decorators": [],
                "name": "condition",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 32,
        "end": 38,
        "decorators": [],
        "name": "assert",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 39,
          "end": 57,
          "decorators": [],
          "name": "condition",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 48,
            "end": 57,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 50,
              "end": 57
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 58,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 60,
          "end": 77,
          "asserts": true,
          "parameterName": {
            "type": "Identifier",
            "start": 68,
            "end": 77,
            "decorators": [],
            "name": "condition",
            "optional": false,
            "typeAnnotation": null
          },
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 138,
      "end": 416,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 152,
        "end": 416,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 158,
            "end": 212,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 169,
              "decorators": [],
              "name": "map",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ObjectExpression",
              "start": 172,
              "end": 211,
              "properties": [
                {
                  "type": "Property",
                  "start": 182,
                  "end": 205,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 182,
                    "end": 188,
                    "decorators": [],
                    "name": "my_key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 190,
                    "end": 205,
                    "raw": "'example_value'",
                    "value": "example_value"
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 218,
            "end": 414,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 218,
              "end": 230,
              "decorators": [],
              "name": "runTypeFails",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 414,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 255,
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null
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
                              "raw": "null",
                              "value": null
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
                                    "accessibility": null,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 275,
                                      "end": 276,
                                      "decorators": [],
                                      "name": "a",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "readonly": false,
                                    "static": false,
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
                                            "accessibility": null,
                                            "computed": false,
                                            "key": {
                                              "type": "Identifier",
                                              "start": 280,
                                              "end": 283,
                                              "decorators": [],
                                              "name": "key",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "readonly": false,
                                            "static": false,
                                            "typeAnnotation": {
                                              "type": "TSTypeAnnotation",
                                              "start": 283,
                                              "end": 291,
                                              "typeAnnotation": {
                                                "type": "TSStringKeyword",
                                                "start": 285,
                                                "end": 291
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    }
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
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 312,
                    "end": 327,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 312,
                      "end": 326,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 319,
                          "end": 325,
                          "decorators": [],
                          "name": "params",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 312,
                        "end": 318,
                        "decorators": [],
                        "name": "assert",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSTypeAliasDeclaration",
                    "start": 336,
                    "end": 369,
                    "declare": false,
                    "id": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 344,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    },
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
                            "decorators": [],
                            "name": "map",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeArguments": null
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 378,
                    "end": 408,
                    "directive": null,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 378,
                      "end": 407,
                      "computed": true,
                      "object": {
                        "type": "MemberExpression",
                        "start": 378,
                        "end": 386,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 378,
                          "end": 382
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 383,
                          "end": 386,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "TSAsExpression",
                        "start": 387,
                        "end": 406,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 387,
                          "end": 399,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 387,
                            "end": 395,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 387,
                              "end": 393,
                              "decorators": [],
                              "name": "params",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 394,
                              "end": 395,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 396,
                            "end": 399,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 403,
                          "end": 406,
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 403,
                            "end": 406,
                            "decorators": [],
                            "name": "Key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 151,
        "decorators": [],
        "name": "MyClass",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 418,
      "end": 513,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 426,
        "end": 513,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 430,
            "end": 511,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 433,
              "end": 511,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 449,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "start": 452,
                          "end": 458,
                          "argument": {
                            "type": "UnaryExpression",
                            "start": 453,
                            "end": 458,
                            "argument": {
                              "type": "Literal",
                              "start": 454,
                              "end": 458,
                              "raw": "true",
                              "value": true
                            },
                            "operator": "!",
                            "prefix": true
                          },
                          "operator": "!",
                          "prefix": true
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "IfStatement",
                    "start": 464,
                    "end": 507,
                    "alternate": null,
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 471,
                      "end": 507,
                      "body": [
                        {
                          "type": "TSTypeAliasDeclaration",
                          "start": 479,
                          "end": 501,
                          "declare": false,
                          "id": {
                            "type": "Identifier",
                            "start": 484,
                            "end": 486,
                            "decorators": [],
                            "name": "T0",
                            "optional": false,
                            "typeAnnotation": null
                          },
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
                          "typeParameters": null
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 468,
                      "end": 469,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 424,
        "end": 425,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
