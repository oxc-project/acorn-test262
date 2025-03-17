__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 407,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 208,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 147,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 19,
              "name": "p1"
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 55,
              "end": 147,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "name": "v",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 147,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 72,
                    "end": 141,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 76,
                      "end": 97,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 76,
                        "end": 84,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Literal",
                        "start": 89,
                        "end": 97,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 99,
                      "end": 141,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 113,
                          "end": 131,
                          "argument": {
                            "type": "NewExpression",
                            "start": 119,
                            "end": 130,
                            "callee": {
                              "type": "Identifier",
                              "start": 123,
                              "end": 128,
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 21,
                "end": 52,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 22,
                    "end": 28,
                    "name": "v",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 25,
                        "end": 28
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSTypePredicate",
                    "start": 33,
                    "end": 52,
                    "parameterName": {
                      "type": "Identifier",
                      "start": 41,
                      "end": 42,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "asserts": true,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 46,
                      "end": 52,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 46,
                        "end": 52
                      }
                    }
                  }
                }
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 206,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 165,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 158,
                      "end": 165
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 167,
                "end": 206,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 177,
                    "end": 189,
                    "expression": {
                      "type": "CallExpression",
                      "start": 177,
                      "end": 188,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 177,
                        "end": 185,
                        "object": {
                          "type": "ThisExpression",
                          "start": 177,
                          "end": 181
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 182,
                          "end": 185,
                          "name": "p1"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "name": "v",
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
                    "type": "ExpressionStatement",
                    "start": 198,
                    "end": 200,
                    "expression": {
                      "type": "Identifier",
                      "start": 198,
                      "end": 199,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
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
      "start": 210,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 220,
        "name": "Foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 406,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 345,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 227,
              "end": 230,
              "name": "p1"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 345,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 237,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 237,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 234,
                      "end": 237
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 260,
                "end": 345,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 270,
                    "end": 339,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 274,
                      "end": 295,
                      "left": {
                        "type": "UnaryExpression",
                        "start": 274,
                        "end": 282,
                        "operator": "typeof",
                        "prefix": true,
                        "argument": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 282,
                          "name": "v",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "operator": "!==",
                      "right": {
                        "type": "Literal",
                        "start": 287,
                        "end": 295,
                        "value": "string",
                        "raw": "\"string\""
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 297,
                      "end": 339,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 311,
                          "end": 329,
                          "argument": {
                            "type": "NewExpression",
                            "start": 317,
                            "end": 328,
                            "callee": {
                              "type": "Identifier",
                              "start": 321,
                              "end": 326,
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
                "start": 238,
                "end": 259,
                "typeAnnotation": {
                  "type": "TSTypePredicate",
                  "start": 240,
                  "end": 259,
                  "parameterName": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 249,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "asserts": true,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 253,
                    "end": 259,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 253,
                      "end": 259
                    }
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 350,
            "end": 404,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 352,
              "name": "m1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 353,
                  "end": 363,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 354,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 356,
                      "end": 363
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 404,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 375,
                    "end": 387,
                    "expression": {
                      "type": "CallExpression",
                      "start": 375,
                      "end": 386,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 375,
                        "end": 383,
                        "object": {
                          "type": "ThisExpression",
                          "start": 375,
                          "end": 379
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 380,
                          "end": 383,
                          "name": "p1"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "name": "v",
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
                    "type": "ExpressionStatement",
                    "start": 396,
                    "end": 398,
                    "expression": {
                      "type": "Identifier",
                      "start": 396,
                      "end": 397,
                      "name": "v",
                      "typeAnnotation": null,
                      "decorators": [],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
