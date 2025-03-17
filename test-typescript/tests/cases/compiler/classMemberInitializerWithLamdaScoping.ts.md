__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 983,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 50,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 50,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 48,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 40,
                        "decorators": [],
                        "name": "msg",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 37,
                            "end": 40
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 41,
                      "end": 47,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 43,
                        "end": 47
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 420,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 420,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 111,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 111,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 111,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 81,
                  "end": 102,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 89,
                    "end": 102,
                    "decorators": [],
                    "name": "field",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 245,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 130,
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 133,
              "end": 244,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 244,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 149,
                    "end": 172,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 153,
                        "end": 171,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 158,
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 161,
                          "end": 171,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 161,
                            "end": 165
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 171,
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 181,
                    "end": 200,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 181,
                      "end": 199,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 193,
                          "end": 198,
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 181,
                        "end": 192,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 188,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 192,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 250,
            "end": 271,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 262,
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 262,
              "end": 270,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 264,
                "end": 270
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 418,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 303,
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 306,
              "end": 417,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 312,
                "end": 417,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 322,
                    "end": 345,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 326,
                        "end": 344,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 331,
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 334,
                          "end": 344,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 338,
                            "decorators": [],
                            "name": "Test",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 344,
                            "decorators": [],
                            "name": "field",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "var"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 354,
                    "end": 373,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 354,
                      "end": 372,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 366,
                          "end": 371,
                          "decorators": [],
                          "name": "field",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 354,
                        "end": 365,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 361,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 365,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
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
        "start": 58,
        "end": 62,
        "decorators": [],
        "name": "Test",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 422,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 440,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 440,
            "decorators": [],
            "name": "field1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 440,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 442,
      "end": 983,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 983,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 503,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 503,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 496,
                "end": 503,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 472,
                  "end": 494,
                  "accessibility": "private",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 494,
                    "decorators": [],
                    "name": "field1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 488,
                        "end": 494
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 508,
            "end": 852,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 508,
              "end": 522,
              "decorators": [],
              "name": "messageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 525,
              "end": 851,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 531,
                "end": 851,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 541,
                    "end": 561,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 541,
                      "end": 560,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "decorators": [],
                          "name": "field1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 541,
                        "end": 552,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 548,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 552,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 857,
            "end": 981,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 864,
              "end": 884,
              "decorators": [],
              "name": "staticMessageHandler",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": null,
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 887,
              "end": 980,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 893,
                "end": 980,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 903,
                    "end": 923,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 903,
                      "end": 922,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 915,
                          "end": 921,
                          "decorators": [],
                          "name": "field1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 903,
                        "end": 914,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 910,
                          "decorators": [],
                          "name": "console",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 911,
                          "end": 914,
                          "decorators": [],
                          "name": "log",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ]
              },
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
        "start": 448,
        "end": 453,
        "decorators": [],
        "name": "Test1",
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
