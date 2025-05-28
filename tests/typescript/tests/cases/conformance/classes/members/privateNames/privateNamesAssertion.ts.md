__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 406,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 208,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 208,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 16,
              "end": 19,
              "name": "p1"
            },
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 23,
                      "end": 28,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 25,
                        "end": 28
                      }
                    }
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
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
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 55,
              "end": 147,
              "expression": false,
              "async": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 56,
                  "end": 57,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "returnType": null,
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
                        "argument": {
                          "type": "Identifier",
                          "start": 83,
                          "end": 84,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "prefix": true
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
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "id": null,
              "generator": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 152,
            "end": 206,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 152,
              "end": 154,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 154,
              "end": 206,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 155,
                  "end": 165,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 156,
                    "end": 165,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 158,
                      "end": 165
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 186,
                          "end": 187,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 210,
      "end": 406,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 220,
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 406,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 345,
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "start": 227,
              "end": 230,
              "name": "p1"
            },
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 345,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 231,
                  "end": 237,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 232,
                    "end": 237,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 234,
                      "end": 237
                    }
                  }
                }
              ],
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
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
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
              },
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
                        "argument": {
                          "type": "Identifier",
                          "start": 281,
                          "end": 282,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "prefix": true
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
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": []
                          }
                        }
                      ]
                    },
                    "alternate": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 350,
            "end": 404,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 350,
              "end": 352,
              "decorators": [],
              "name": "m1",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 352,
              "end": 404,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 353,
                  "end": 363,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 354,
                    "end": 363,
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 356,
                      "end": 363
                    }
                  }
                }
              ],
              "returnType": null,
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
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "v",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
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
                      "decorators": [],
                      "name": "v",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
