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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 64,
            "name": "friendA",
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
                    "key": {
                      "type": "Identifier",
                      "start": 15,
                      "end": 19,
                      "name": "getX",
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
                        "start": 20,
                        "end": 24,
                        "name": "o",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 21,
                          "end": 24,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 23,
                            "end": 24,
                            "typeName": {
                              "type": "Identifier",
                              "start": 23,
                              "end": 24,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                    "accessibility": null,
                    "readonly": false,
                    "static": false
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 35,
                    "end": 62,
                    "key": {
                      "type": "Identifier",
                      "start": 35,
                      "end": 39,
                      "name": "setX",
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
                        "start": 40,
                        "end": 44,
                        "name": "o",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 41,
                          "end": 44,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 43,
                            "end": 44,
                            "typeName": {
                              "type": "Identifier",
                              "start": 43,
                              "end": 44,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 46,
                        "end": 55,
                        "name": "v",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 47,
                          "end": 55,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 49,
                            "end": 55
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
      "kind": "let",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 67,
      "end": 295,
      "id": {
        "type": "Identifier",
        "start": 73,
        "end": 74,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 295,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 79,
            "end": 90,
            "static": false,
            "computed": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 79,
              "end": 81,
              "name": "x"
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
              "start": 81,
              "end": 89,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 83,
                "end": 89
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 94,
            "end": 140,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 94,
              "end": 105,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 106,
              "end": 140,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 107,
                  "end": 116,
                  "name": "v",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 116,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 110,
                      "end": 116
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 118,
                "end": 140,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 124,
                    "end": 136,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 124,
                      "end": 135,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 124,
                        "end": 131,
                        "object": {
                          "type": "ThisExpression",
                          "start": 124,
                          "end": 128
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 129,
                          "end": 131,
                          "name": "x"
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 134,
                        "end": 135,
                        "name": "v",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
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
          },
          {
            "type": "MethodDefinition",
            "start": 144,
            "end": 177,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 144,
              "end": 148,
              "name": "getX",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 149,
              "end": 177,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "object": {
                        "type": "ThisExpression",
                        "start": 165,
                        "end": 169
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "start": 170,
                        "end": 172,
                        "name": "x"
                      },
                      "computed": false,
                      "optional": false
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
            "accessibility": null
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
                "expression": {
                  "type": "AssignmentExpression",
                  "start": 194,
                  "end": 288,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 194,
                    "end": 201,
                    "name": "friendA",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 212,
                          "end": 216,
                          "name": "getX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 216,
                          "end": 239,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 217,
                              "end": 220,
                              "name": "obj",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                                  "object": {
                                    "type": "Identifier",
                                    "start": 231,
                                    "end": 234,
                                    "name": "obj",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 235,
                                    "end": 237,
                                    "name": "x"
                                  },
                                  "computed": false,
                                  "optional": false
                                }
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 247,
                        "end": 282,
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 247,
                          "end": 251,
                          "name": "setX",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "start": 251,
                          "end": 282,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 252,
                              "end": 255,
                              "name": "obj",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 257,
                              "end": 262,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "BlockStatement",
                            "start": 264,
                            "end": 282,
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "start": 266,
                                "end": 280,
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "start": 266,
                                  "end": 280,
                                  "operator": "=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "start": 266,
                                    "end": 272,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 266,
                                      "end": 269,
                                      "name": "obj",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "PrivateIdentifier",
                                      "start": 270,
                                      "end": 272,
                                      "name": "x"
                                    },
                                    "computed": false,
                                    "optional": false
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "start": 275,
                                    "end": 280,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                },
                                "directive": null
                              }
                            ]
                          },
                          "declare": false,
                          "typeParameters": null,
                          "returnType": null
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                },
                "directive": null
              }
            ]
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
      "type": "EmptyStatement",
      "start": 295,
      "end": 296
    },
    {
      "type": "ClassDeclaration",
      "start": 298,
      "end": 406,
      "id": {
        "type": "Identifier",
        "start": 304,
        "end": 305,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 306,
        "end": 406,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 310,
            "end": 404,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 310,
              "end": 321,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 321,
              "end": 404,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 322,
                  "end": 326,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 323,
                    "end": 326,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 325,
                      "end": 326,
                      "typeName": {
                        "type": "Identifier",
                        "start": 325,
                        "end": 326,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
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
                        "id": {
                          "type": "Identifier",
                          "start": 340,
                          "end": 341,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "CallExpression",
                          "start": 344,
                          "end": 359,
                          "callee": {
                            "type": "MemberExpression",
                            "start": 344,
                            "end": 356,
                            "object": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 351,
                              "name": "friendA",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 352,
                              "end": 356,
                              "name": "getX",
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
                              "start": 357,
                              "end": 358,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "optional": false,
                          "typeArguments": null
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 371,
                    "end": 394,
                    "expression": {
                      "type": "CallExpression",
                      "start": 371,
                      "end": 393,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 371,
                        "end": 383,
                        "object": {
                          "type": "Identifier",
                          "start": 371,
                          "end": 378,
                          "name": "friendA",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 383,
                          "name": "setX",
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
                          "start": 384,
                          "end": 385,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "BinaryExpression",
                          "start": 387,
                          "end": 392,
                          "left": {
                            "type": "Identifier",
                            "start": 387,
                            "end": 388,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "operator": "+",
                          "right": {
                            "type": "Literal",
                            "start": 391,
                            "end": 392,
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 416,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 419,
            "end": 428,
            "callee": {
              "type": "Identifier",
              "start": 423,
              "end": 424,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 425,
                "end": 427,
                "value": 41,
                "raw": "41"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 437,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 440,
            "end": 448,
            "callee": {
              "type": "Identifier",
              "start": 444,
              "end": 445,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 446,
                "end": 447,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 459,
      "expression": {
        "type": "CallExpression",
        "start": 450,
        "end": 458,
        "callee": {
          "type": "MemberExpression",
          "start": 450,
          "end": 456,
          "object": {
            "type": "Identifier",
            "start": 450,
            "end": 451,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 452,
            "end": 456,
            "name": "getX",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
