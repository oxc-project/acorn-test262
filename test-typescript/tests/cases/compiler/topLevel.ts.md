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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "name": "IPoint",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 48,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 24,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 46,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 50,
      "end": 272,
      "id": {
        "type": "Identifier",
        "start": 56,
        "end": 61,
        "name": "Point",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 272,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 118,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 118,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
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
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 116,
                "end": 118,
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
            "type": "MethodDefinition",
            "start": 123,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 130,
              "end": 134,
              "name": "move",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 134,
              "end": 203,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 135,
                  "end": 144,
                  "name": "xo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 137,
                    "end": 144,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 138,
                      "end": 144
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 145,
                  "end": 154,
                  "name": "yo",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 154,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 148,
                      "end": 154
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 156,
                "end": 203,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 159,
                    "end": 170,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 159,
                      "end": 169,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 159,
                        "end": 165,
                        "object": {
                          "type": "ThisExpression",
                          "start": 159,
                          "end": 163
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 164,
                          "end": 165,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 169,
                        "name": "xo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 172,
                    "end": 183,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 172,
                      "end": 182,
                      "operator": "+=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 172,
                        "end": 178,
                        "object": {
                          "type": "ThisExpression",
                          "start": 172,
                          "end": 176
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 177,
                          "end": 178,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 180,
                        "end": 182,
                        "name": "yo",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
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
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 208,
            "end": 270,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 223,
              "name": "toString",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 223,
              "end": 270,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "left": {
                        "type": "BinaryExpression",
                        "start": 237,
                        "end": 258,
                        "left": {
                          "type": "BinaryExpression",
                          "start": 237,
                          "end": 251,
                          "left": {
                            "type": "BinaryExpression",
                            "start": 237,
                            "end": 247,
                            "left": {
                              "type": "Literal",
                              "start": 237,
                              "end": 240,
                              "value": "(",
                              "raw": "\"(\""
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "start": 241,
                              "end": 247,
                              "object": {
                                "type": "ThisExpression",
                                "start": 241,
                                "end": 245
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 246,
                                "end": 247,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            }
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 248,
                            "end": 251,
                            "value": ",",
                            "raw": "\",\""
                          }
                        },
                        "operator": "+",
                        "right": {
                          "type": "MemberExpression",
                          "start": 252,
                          "end": 258,
                          "object": {
                            "type": "ThisExpression",
                            "start": 252,
                            "end": 256
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 257,
                            "end": 258,
                            "name": "y",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        }
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 259,
                        "end": 262,
                        "value": ")",
                        "raw": "\")\""
                      }
                    }
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
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 73,
          "end": 79,
          "expression": {
            "type": "Identifier",
            "start": 73,
            "end": 79,
            "name": "IPoint",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 284,
            "name": "result",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 285,
            "end": 287,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 324,
      "expression": {
        "type": "AssignmentExpression",
        "start": 289,
        "end": 323,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 289,
          "end": 295,
          "name": "result",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 298,
          "end": 322,
          "callee": {
            "type": "MemberExpression",
            "start": 298,
            "end": 317,
            "object": {
              "type": "NewExpression",
              "start": 298,
              "end": 312,
              "callee": {
                "type": "Identifier",
                "start": 302,
                "end": 307,
                "name": "Point",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 308,
                  "end": 309,
                  "value": 3,
                  "raw": "3"
                },
                {
                  "type": "Literal",
                  "start": 310,
                  "end": 311,
                  "value": 4,
                  "raw": "4"
                }
              ],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "start": 313,
              "end": 317,
              "name": "move",
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
              "end": 319,
              "value": 2,
              "raw": "2"
            },
            {
              "type": "Literal",
              "start": 320,
              "end": 321,
              "value": 2,
              "raw": "2"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 326,
      "end": 376,
      "id": {
        "type": "Identifier",
        "start": 333,
        "end": 334,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 335,
        "end": 376,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 341,
            "end": 374,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 348,
              "end": 374,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 352,
                  "end": 373,
                  "id": {
                    "type": "Identifier",
                    "start": 352,
                    "end": 358,
                    "name": "origin",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "NewExpression",
                    "start": 359,
                    "end": 373,
                    "callee": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 368,
                      "name": "Point",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "start": 369,
                        "end": 370,
                        "value": 0,
                        "raw": "0"
                      },
                      {
                        "type": "Literal",
                        "start": 371,
                        "end": 372,
                        "value": 0,
                        "raw": "0"
                      }
                    ],
                    "typeArguments": null
                  },
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "ExpressionStatement",
      "start": 378,
      "end": 407,
      "expression": {
        "type": "AssignmentExpression",
        "start": 378,
        "end": 406,
        "operator": "+=",
        "left": {
          "type": "Identifier",
          "start": 378,
          "end": 384,
          "name": "result",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 387,
          "end": 405,
          "callee": {
            "type": "MemberExpression",
            "start": 387,
            "end": 400,
            "object": {
              "type": "MemberExpression",
              "start": 387,
              "end": 395,
              "object": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 389,
                "end": 395,
                "name": "origin",
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
              "end": 400,
              "name": "move",
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
              "start": 401,
              "end": 402,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 403,
              "end": 404,
              "value": 1,
              "raw": "1"
            }
          ],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
