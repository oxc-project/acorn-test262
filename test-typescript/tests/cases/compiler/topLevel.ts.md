__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 409,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 32,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 46,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "IPoint",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 272,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 272,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 118,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
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
              "start": 97,
              "end": 118,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 118,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 98,
                  "end": 106,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 105,
                    "end": 106,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "readonly": false,
                  "static": false
                },
                {
                  "type": "TSParameterProperty",
                  "start": 107,
                  "end": 115,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 115,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
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
            "type": "MethodDefinition",
            "start": 123,
            "end": 203,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 134,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 134,
              "end": 203,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 203,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 170,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 159,
                      "end": 169,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 165,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 169,
                        "decorators": [],
                        "name": "xo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 183,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 182,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 178,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 178,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "decorators": [],
                        "name": "yo",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 185,
                    "end": 197,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 192,
                      "end": 196
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "decorators": [],
                  "name": "xo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "decorators": [],
                  "name": "yo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 208,
            "end": 270,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 223,
              "decorators": [],
              "name": "toString",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 270,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 226,
                "end": 270,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 229,
                    "end": 264,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 237,
                      "end": 262,
                      "operator": "+",
                      "left": {
                        "type": "BinaryExpression",
                        "start": 237,
                        "end": 258,
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "start": 237,
                          "end": 251,
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "start": 237,
                            "end": 247,
                            "operator": "+",
                            "left": {
                              "type": "Literal",
                              "start": 237,
                              "end": 240,
                              "raw": "\"(\"",
                              "value": "("
                            },
                            "right": {
                              "type": "MemberExpression",
                              "start": 241,
                              "end": 247,
                              "computed": false,
                              "object": {
                                "type": "ThisExpression",
                                "start": 241,
                                "end": 245
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 246,
                                "end": 247,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          "right": {
                            "type": "Literal",
                            "start": 248,
                            "end": 251,
                            "raw": "\",\"",
                            "value": ","
                          }
                        },
                        "right": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 258,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 252,
                            "end": 256
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 259,
                        "end": 262,
                        "raw": "\")\"",
                        "value": ")"
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
        "start": 56,
        "end": 61,
        "decorators": [],
        "name": "Point",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 73,
          "end": 79,
          "expression": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "decorators": [],
            "name": "IPoint",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 274,
      "end": 288,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 287,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 285,
            "end": 287,
            "raw": "\"\"",
            "value": ""
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 324,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 323,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 289,
          "end": 295,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 298,
          "end": 322,
          "arguments": [
            {
              "type": "Literal",
              "start": 318,
              "end": 319,
              "raw": "2",
              "value": 2
            },
            {
              "type": "Literal",
              "start": 320,
              "end": 321,
              "raw": "2",
              "value": 2
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 298,
            "end": 317,
            "computed": false,
            "object": {
              "type": "NewExpression",
              "start": 298,
              "end": 312,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 308,
                  "end": 309,
                  "raw": "3",
                  "value": 3
                },
                {
                  "type": "Literal",
                  "start": 310,
                  "end": 311,
                  "raw": "4",
                  "value": 4
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 302,
                "end": 307,
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 313,
              "end": 317,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 326,
      "end": 376,
      "body": {
        "type": "TSModuleBlock",
        "start": 335,
        "end": 376,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 341,
            "end": 374,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 348,
              "end": 374,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 352,
                  "end": 373,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 358,
                    "decorators": [],
                    "name": "origin",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 359,
                    "end": 373,
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 369,
                        "end": 370,
                        "raw": "0",
                        "value": 0
                      },
                      {
                        "type": "Literal",
                        "start": 371,
                        "end": 372,
                        "raw": "0",
                        "value": 0
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 368,
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 378,
      "end": 407,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 378,
        "end": 406,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 378,
          "end": 384,
          "decorators": [],
          "name": "result",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 387,
          "end": 405,
          "arguments": [
            {
              "type": "Literal",
              "start": 401,
              "end": 402,
              "raw": "1",
              "value": 1
            },
            {
              "type": "Literal",
              "start": 403,
              "end": 404,
              "raw": "1",
              "value": 1
            }
          ],
          "callee": {
            "type": "MemberExpression",
            "start": 387,
            "end": 400,
            "computed": false,
            "object": {
              "type": "MemberExpression",
              "start": 387,
              "end": 395,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 389,
                "end": 395,
                "decorators": [],
                "name": "origin",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 396,
              "end": 400,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
