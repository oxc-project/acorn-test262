__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 459,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 65,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 64,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 64,
            "decorators": [],
            "name": "friendA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 64,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 15,
                    "end": 34,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 19,
                      "decorators": [],
                      "name": "getX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 20,
                        "end": 24,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 24,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 23,
                            "end": 24,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 23,
                              "end": 24,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      }
                    },
                    "static": false,
                    "typeParameters": null
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 35,
                    "end": 62,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 39,
                      "decorators": [],
                      "name": "setX",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 40,
                        "end": 44,
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 41,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 43,
                            "end": 44,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 43,
                              "end": 44,
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 46,
                        "end": 55,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 49,
                            "end": 55
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 56,
                      "end": 62,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 58,
                        "end": 62
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
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 295,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 295,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 90,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 79,
              "end": 81,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 140,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 105,
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
              "start": 106,
              "end": 140,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 136,
                    "directive": null,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 135,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 131,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 131,
                          "name": "x"
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": null
                      }
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
                  "start": 107,
                  "end": 116,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
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
            "start": 144,
            "end": 177,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "decorators": [],
              "name": "getX",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 177,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 158,
                    "end": 173,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 165,
                      "end": 172,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 165,
                        "end": 169
                      },
                      "optional": false,
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 170,
                        "end": 172,
                        "name": "x"
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
          },
          {
            "type": "StaticBlock",
            "start": 181,
            "end": 293,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 194,
                "end": 289,
                "directive": null,
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 194,
                  "end": 288,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 201,
                    "decorators": [],
                    "name": "friendA",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "ObjectExpression",
                    "start": 204,
                    "end": 288,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 212,
                        "end": 239,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 216,
                          "decorators": [],
                          "name": "getX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 216,
                          "end": 239,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 222,
                            "end": 239,
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "start": 224,
                                "end": 237,
                                "argument": {
                                  "type": "MemberExpression",
                                  "start": 231,
                                  "end": 237,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 231,
                                    "end": 234,
                                    "decorators": [],
                                    "name": "obj",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 235,
                                    "end": 237,
                                    "name": "x"
                                  }
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
                              "start": 217,
                              "end": 220,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      },
                      {
                        "type": "Property",
                        "start": 247,
                        "end": 282,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "decorators": [],
                          "name": "setX",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": true,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "FunctionExpression",
                          "start": 251,
                          "end": 282,
                          "async": false,
                          "body": {
                            "type": "BlockStatement",
                            "start": 264,
                            "end": 282,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 266,
                                "end": 280,
                                "directive": null,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 266,
                                  "end": 280,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 266,
                                    "end": 272,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 266,
                                      "end": 269,
                                      "decorators": [],
                                      "name": "obj",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 270,
                                      "end": 272,
                                      "name": "x"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 275,
                                    "end": 280,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
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
                              "start": 252,
                              "end": 255,
                              "decorators": [],
                              "name": "obj",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            {
                              "type": "Identifier",
                              "start": 257,
                              "end": 262,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 295,
      "end": 296
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 406,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 406,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 404,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 321,
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
              "start": 321,
              "end": 404,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 328,
                "end": 404,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 334,
                    "end": 360,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 340,
                        "end": 359,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 340,
                          "end": 341,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 344,
                          "end": 359,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "start": 357,
                              "end": 358,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 344,
                            "end": 356,
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 351,
                              "decorators": [],
                              "name": "friendA",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 356,
                              "decorators": [],
                              "name": "getX",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          "optional": false,
                          "typeArguments": null
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 371,
                    "end": 394,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 371,
                      "end": 393,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 384,
                          "end": 385,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "BinaryExpression",
                          "start": 387,
                          "end": 392,
                          "operator": "+",
                          "left": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 388,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 391,
                            "end": 392,
                            "raw": "1",
                            "value": 1,
                            "regex": null,
                            "bigint": null
                          }
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 371,
                        "end": 383,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 378,
                          "decorators": [],
                          "name": "friendA",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 383,
                          "decorators": [],
                          "name": "setX",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 326,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 325,
                      "end": 326,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
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
        "start": 304,
        "end": 305,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "EmptyStatement",
      "start": 406,
      "end": 407
    },
    {
      "type": "VariableDeclaration",
      "start": 409,
      "end": 429,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 428,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 419,
            "end": 428,
            "arguments": [
              {
                "type": "Literal",
                "start": 425,
                "end": 427,
                "raw": "41",
                "value": 41,
                "regex": null,
                "bigint": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 430,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 440,
            "end": 448,
            "arguments": [
              {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 459,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 458,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 450,
          "end": 456,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 456,
            "decorators": [],
            "name": "getX",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
