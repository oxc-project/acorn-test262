__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 432,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 194,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 11,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 12,
        "end": 194,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 19,
            "end": 75,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 30,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 30,
              "end": 75,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 31,
                  "end": 47,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 38,
                    "end": 47,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 39,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 41,
                        "end": 47
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 49,
                  "end": 65,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 56,
                    "end": 65,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 57,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 59,
                        "end": 65
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 67,
                "end": 75,
                "body": []
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 156,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 87,
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 87,
              "end": 156,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 156,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 101,
                    "end": 149,
                    "argument": {
                      "type": "CallExpression",
                      "start": 108,
                      "end": 148,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 108,
                        "end": 117,
                        "object": {
                          "type": "Identifier",
                          "start": 108,
                          "end": 112,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 113,
                          "end": 117,
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 118,
                          "end": 147,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 118,
                            "end": 131,
                            "left": {
                              "type": "MemberExpression",
                              "start": 118,
                              "end": 124,
                              "object": {
                                "type": "ThisExpression",
                                "start": 118,
                                "end": 122
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 123,
                                "end": 124,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "start": 125,
                              "end": 131,
                              "object": {
                                "type": "ThisExpression",
                                "start": 125,
                                "end": 129
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 130,
                                "end": 131,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 134,
                            "end": 147,
                            "left": {
                              "type": "MemberExpression",
                              "start": 134,
                              "end": 140,
                              "object": {
                                "type": "ThisExpression",
                                "start": 134,
                                "end": 138
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 139,
                                "end": 140,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "start": 141,
                              "end": 147,
                              "object": {
                                "type": "ThisExpression",
                                "start": 141,
                                "end": 145
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 146,
                                "end": 147,
                                "decorators": [],
                                "name": "y",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        }
                      ],
                      "optional": false
                    }
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
            "type": "PropertyDefinition",
            "start": 161,
            "end": 192,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 168,
              "end": 174,
              "decorators": [],
              "name": "origin",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "NewExpression",
              "start": 177,
              "end": 191,
              "callee": {
                "type": "Identifier",
                "start": 181,
                "end": 186,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 187,
                  "end": 188,
                  "value": 0,
                  "raw": "0"
                },
                {
                  "type": "Literal",
                  "start": 189,
                  "end": 190,
                  "value": 0,
                  "raw": "0"
                }
              ]
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 196,
      "end": 431,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 209,
        "decorators": [],
        "name": "Point3D",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 218,
        "end": 223,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 224,
        "end": 431,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 231,
            "end": 321,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 231,
              "end": 242,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 242,
              "end": 321,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 243,
                  "end": 252,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 244,
                    "end": 252,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 246,
                      "end": 252
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 254,
                  "end": 263,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 255,
                    "end": 263,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 257,
                      "end": 263
                    }
                  }
                },
                {
                  "type": "TSParameterProperty",
                  "start": 265,
                  "end": 281,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 281,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 273,
                      "end": 281,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 275,
                        "end": 281
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "Identifier",
                  "start": 283,
                  "end": 291,
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 284,
                    "end": 291,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 285,
                      "end": 291
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 293,
                "end": 321,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 303,
                    "end": 315,
                    "expression": {
                      "type": "CallExpression",
                      "start": 303,
                      "end": 314,
                      "callee": {
                        "type": "Super",
                        "start": 303,
                        "end": 308
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 309,
                          "end": 310,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 312,
                          "end": 313,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 331,
            "end": 421,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 331,
              "end": 338,
              "decorators": [],
              "name": "getDist",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 338,
              "end": 421,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 341,
                "end": 421,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 351,
                    "end": 415,
                    "argument": {
                      "type": "CallExpression",
                      "start": 358,
                      "end": 414,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 358,
                        "end": 367,
                        "object": {
                          "type": "Identifier",
                          "start": 358,
                          "end": 362,
                          "decorators": [],
                          "name": "Math",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 363,
                          "end": 367,
                          "decorators": [],
                          "name": "sqrt",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "start": 368,
                          "end": 413,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 368,
                            "end": 397,
                            "left": {
                              "type": "BinaryExpression",
                              "start": 368,
                              "end": 381,
                              "left": {
                                "type": "MemberExpression",
                                "start": 368,
                                "end": 374,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 368,
                                  "end": 372
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 373,
                                  "end": 374,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "start": 375,
                                "end": 381,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 375,
                                  "end": 379
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 380,
                                  "end": 381,
                                  "decorators": [],
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            },
                            "operator": "+",
                            "right": {
                              "type": "BinaryExpression",
                              "start": 384,
                              "end": 397,
                              "left": {
                                "type": "MemberExpression",
                                "start": 384,
                                "end": 390,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 384,
                                  "end": 388
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 389,
                                  "end": 390,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "operator": "*",
                              "right": {
                                "type": "MemberExpression",
                                "start": 391,
                                "end": 397,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 391,
                                  "end": 395
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 396,
                                  "end": 397,
                                  "decorators": [],
                                  "name": "y",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              }
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "BinaryExpression",
                            "start": 400,
                            "end": 413,
                            "left": {
                              "type": "MemberExpression",
                              "start": 400,
                              "end": 406,
                              "object": {
                                "type": "ThisExpression",
                                "start": 400,
                                "end": 404
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 406,
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "operator": "*",
                            "right": {
                              "type": "MemberExpression",
                              "start": 407,
                              "end": 413,
                              "object": {
                                "type": "ThisExpression",
                                "start": 407,
                                "end": 411
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 412,
                                "end": 413,
                                "decorators": [],
                                "name": "m",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            }
                          }
                        }
                      ],
                      "optional": false
                    }
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
