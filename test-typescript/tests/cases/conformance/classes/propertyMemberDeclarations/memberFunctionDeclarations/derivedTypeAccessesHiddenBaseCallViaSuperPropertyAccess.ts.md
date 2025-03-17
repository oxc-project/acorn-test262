__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 84,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 82,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 17,
              "end": 20,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 20,
              "end": 82,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 21,
                  "end": 37,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 22,
                    "end": 37,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 24,
                      "end": 37,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 26,
                          "end": 35,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 26,
                            "end": 27,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 27,
                            "end": 35,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 29,
                              "end": 35
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 54,
                "end": 82,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 76,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 75,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 38,
                "end": 53,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 40,
                  "end": 53,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 42,
                      "end": 51,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 42,
                        "end": 43,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 43,
                        "end": 51,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 45,
                          "end": 51
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              }
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
      "start": 86,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 92,
        "end": 99,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 108,
        "end": 112,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 113,
        "end": 414,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 119,
            "end": 206,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 119,
              "end": 122,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 122,
              "end": 206,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 123,
                  "end": 150,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 124,
                    "end": 150,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 126,
                      "end": 150,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 128,
                          "end": 138,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 128,
                            "end": 129,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 129,
                            "end": 137,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 131,
                              "end": 137
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 139,
                          "end": 148,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 139,
                            "end": 140,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 140,
                            "end": 148,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 142,
                              "end": 148
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 206,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 188,
                    "end": 200,
                    "argument": {
                      "type": "Literal",
                      "start": 195,
                      "end": 199,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 151,
                "end": 177,
                "typeAnnotation": {
                  "type": "TSTypeLiteral",
                  "start": 153,
                  "end": 177,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 155,
                      "end": 165,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 155,
                        "end": 156,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 156,
                        "end": 164,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 158,
                          "end": 164
                        }
                      },
                      "accessibility": null,
                      "static": false
                    },
                    {
                      "type": "TSPropertySignature",
                      "start": 166,
                      "end": 175,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 166,
                        "end": 167,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 167,
                        "end": 175,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 169,
                          "end": 175
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
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
            "start": 212,
            "end": 412,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 212,
              "end": 215,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 215,
              "end": 412,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 412,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 228,
                    "end": 256,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 232,
                        "end": 255,
                        "id": {
                          "type": "Identifier",
                          "start": 232,
                          "end": 233,
                          "name": "r",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 236,
                          "end": 255,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 236,
                            "end": 245,
                            "object": {
                              "type": "Super",
                              "start": 236,
                              "end": 241
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 242,
                              "end": 245,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 246,
                              "end": 254,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 248,
                                  "end": 252,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 248,
                                    "end": 249,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 251,
                                    "end": 252,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 282,
                    "end": 317,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 286,
                        "end": 316,
                        "id": {
                          "type": "Identifier",
                          "start": 286,
                          "end": 288,
                          "name": "r2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 291,
                          "end": 316,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 291,
                            "end": 300,
                            "object": {
                              "type": "Super",
                              "start": 291,
                              "end": 296
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 297,
                              "end": 300,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 301,
                              "end": 315,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 303,
                                  "end": 307,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 303,
                                    "end": 304,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 306,
                                    "end": 307,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 309,
                                  "end": 313,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 309,
                                    "end": 310,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 312,
                                    "end": 313,
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
                  },
                  {
                    "type": "VariableDeclaration",
                    "start": 343,
                    "end": 377,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 347,
                        "end": 376,
                        "id": {
                          "type": "Identifier",
                          "start": 347,
                          "end": 349,
                          "name": "r3",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 352,
                          "end": 376,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 352,
                            "end": 360,
                            "object": {
                              "type": "ThisExpression",
                              "start": 352,
                              "end": 356
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 357,
                              "end": 360,
                              "name": "foo",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "arguments": [
                            {
                              "type": "ObjectExpression",
                              "start": 361,
                              "end": 375,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 363,
                                  "end": 367,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 363,
                                    "end": 364,
                                    "name": "a",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 366,
                                    "end": 367,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 369,
                                  "end": 373,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 369,
                                    "end": 370,
                                    "name": "b",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 372,
                                    "end": 373,
                                    "value": 2,
                                    "raw": "2"
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "var",
                    "declare": false
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
