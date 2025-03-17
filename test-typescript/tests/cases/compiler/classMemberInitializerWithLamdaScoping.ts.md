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
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 50,
            "name": "console",
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
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 40,
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 35,
                          "end": 40,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 37,
                            "end": 40
                          }
                        },
                        "decorators": [],
                        "optional": true
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 52,
      "end": 420,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 62,
        "name": "Test",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 420,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 111,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 111,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "field",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 94,
                      "end": 102,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 96,
                        "end": 102
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 111,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 116,
            "end": 245,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 116,
              "end": 130,
              "name": "messageHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 133,
              "end": 244,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 153,
                          "end": 158,
                          "name": "field",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 161,
                          "end": 171,
                          "object": {
                            "type": "ThisExpression",
                            "start": 161,
                            "end": 165
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 166,
                            "end": 171,
                            "name": "field",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 181,
                    "end": 200,
                    "expression": {
                      "type": "CallExpression",
                      "start": 181,
                      "end": 199,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 181,
                        "end": 192,
                        "object": {
                          "type": "Identifier",
                          "start": 181,
                          "end": 188,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 189,
                          "end": 192,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 193,
                          "end": 198,
                          "name": "field",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 250,
            "end": 271,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 257,
              "end": 262,
              "name": "field",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 276,
            "end": 418,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 303,
              "name": "staticMessageHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 306,
              "end": 417,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "id": {
                          "type": "Identifier",
                          "start": 326,
                          "end": 331,
                          "name": "field",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 334,
                          "end": 344,
                          "object": {
                            "type": "Identifier",
                            "start": 334,
                            "end": 338,
                            "name": "Test",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 339,
                            "end": 344,
                            "name": "field",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 354,
                    "end": 373,
                    "expression": {
                      "type": "CallExpression",
                      "start": 354,
                      "end": 372,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 354,
                        "end": 365,
                        "object": {
                          "type": "Identifier",
                          "start": 354,
                          "end": 361,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 362,
                          "end": 365,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 366,
                          "end": 371,
                          "name": "field",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "typeAnnotation": null,
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
      "type": "VariableDeclaration",
      "start": 422,
      "end": 441,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 440,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 440,
            "name": "field1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 432,
              "end": 440,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 434,
                "end": 440
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 442,
      "end": 983,
      "id": {
        "type": "Identifier",
        "start": 448,
        "end": 453,
        "name": "Test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 454,
        "end": 983,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 460,
            "end": 503,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 460,
              "end": 471,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 471,
              "end": 503,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "field1",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 486,
                      "end": 494,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 488,
                        "end": 494
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 496,
                "end": 503,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 508,
            "end": 852,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 508,
              "end": 522,
              "name": "messageHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 525,
              "end": 851,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 531,
                "end": 851,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 541,
                    "end": 561,
                    "expression": {
                      "type": "CallExpression",
                      "start": 541,
                      "end": 560,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 541,
                        "end": 552,
                        "object": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 548,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 549,
                          "end": 552,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 553,
                          "end": 559,
                          "name": "field1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 857,
            "end": 981,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 864,
              "end": 884,
              "name": "staticMessageHandler",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ArrowFunctionExpression",
              "start": 887,
              "end": 980,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 893,
                "end": 980,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 903,
                    "end": 923,
                    "expression": {
                      "type": "CallExpression",
                      "start": 903,
                      "end": 922,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 903,
                        "end": 914,
                        "object": {
                          "type": "Identifier",
                          "start": 903,
                          "end": 910,
                          "name": "console",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 911,
                          "end": 914,
                          "name": "log",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 915,
                          "end": 921,
                          "name": "field1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
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
            "typeAnnotation": null,
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
