__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 386,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 73,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 73,
            "decorators": [],
            "name": "Point",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 19,
                "end": 73,
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "start": 21,
                    "end": 71,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 25,
                        "end": 33,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 26,
                          "end": 33,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 27,
                            "end": 33
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 35,
                        "end": 43,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 36,
                          "end": 43,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 37,
                            "end": 43
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 44,
                      "end": 70,
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "start": 46,
                        "end": 70,
                        "members": [
                          {
                            "type": "TSPropertySignature",
                            "start": 47,
                            "end": 57,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 47,
                              "end": 48,
                              "decorators": [],
                              "name": "x",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 48,
                              "end": 56,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 50,
                                "end": 56
                              }
                            }
                          },
                          {
                            "type": "TSPropertySignature",
                            "start": 58,
                            "end": 68,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 58,
                              "end": 59,
                              "decorators": [],
                              "name": "y",
                              "optional": false
                            },
                            "optional": false,
                            "readonly": false,
                            "static": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 59,
                              "end": 67,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 61,
                                "end": 67
                              }
                            }
                          }
                        ]
                      }
                    }
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
      "type": "FunctionDeclaration",
      "start": 75,
      "end": 134,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 96,
        "end": 134,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 102,
            "end": 113,
            "expression": {
              "type": "AssignmentExpression",
              "start": 102,
              "end": 112,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 102,
                "end": 108,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 102,
                  "end": 106
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 108,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 118,
            "end": 129,
            "expression": {
              "type": "AssignmentExpression",
              "start": 118,
              "end": 128,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 118,
                "end": 124,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 118,
                  "end": 122
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 123,
                  "end": 124,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "right": {
                "type": "Identifier",
                "start": 127,
                "end": 128,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 89,
        "decorators": [],
        "name": "Point",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 90,
          "end": 91,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 93,
          "end": 94,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ]
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 136,
      "end": 194,
      "body": {
        "type": "TSInterfaceBody",
        "start": 152,
        "end": 194,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 158,
            "end": 189,
            "params": [
              {
                "type": "Identifier",
                "start": 159,
                "end": 168,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 160,
                  "end": 168,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 162,
                    "end": 168
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 170,
                "end": 179,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 171,
                  "end": 179,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 173,
                    "end": 179
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 180,
              "end": 188,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 182,
                "end": 188
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 146,
        "end": 151,
        "decorators": [],
        "name": "Adder",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 196,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 248,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 203,
            "decorators": [],
            "name": "add",
            "optional": false
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 206,
            "end": 248,
            "expression": {
              "type": "FunctionExpression",
              "start": 213,
              "end": 248,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 227,
                "end": 248,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 232,
                    "end": 244,
                    "argument": {
                      "type": "BinaryExpression",
                      "start": 239,
                      "end": 243,
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "start": 239,
                        "end": 240,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 242,
                        "end": 243,
                        "decorators": [],
                        "name": "y",
                        "optional": false
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
                  "start": 222,
                  "end": 223,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 224,
                  "end": 225,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              ]
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 207,
              "end": 212,
              "typeName": {
                "type": "Identifier",
                "start": 207,
                "end": 212,
                "decorators": [],
                "name": "Adder",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 251,
      "end": 310,
      "body": {
        "type": "TSInterfaceBody",
        "start": 268,
        "end": 310,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 274,
            "end": 305,
            "params": [
              {
                "type": "Identifier",
                "start": 275,
                "end": 284,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 276,
                  "end": 284,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 278,
                    "end": 284
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 286,
                "end": 295,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 287,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 289,
                    "end": 295
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 296,
              "end": 304,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 298,
                "end": 304
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 261,
        "end": 267,
        "decorators": [],
        "name": "Adder2",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 312,
      "end": 362,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 316,
          "end": 362,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 316,
            "end": 328,
            "decorators": [],
            "name": "add2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 320,
              "end": 328,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 322,
                "end": 328,
                "typeName": {
                  "type": "Identifier",
                  "start": 322,
                  "end": 328,
                  "decorators": [],
                  "name": "Adder2",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "FunctionExpression",
            "start": 331,
            "end": 362,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 345,
              "end": 362,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 351,
                  "end": 360,
                  "argument": {
                    "type": "Literal",
                    "start": 358,
                    "end": 359,
                    "raw": "0",
                    "value": 0
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
                "start": 340,
                "end": 341,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 342,
                "end": 343,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 364,
      "end": 386,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 383,
        "end": 386,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 384,
            "end": 385,
            "expression": {
              "type": "Identifier",
              "start": 384,
              "end": 385,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 373,
        "end": 377,
        "decorators": [],
        "name": "add3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 378,
          "end": 379,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "decorators": [],
          "name": "y",
          "optional": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
