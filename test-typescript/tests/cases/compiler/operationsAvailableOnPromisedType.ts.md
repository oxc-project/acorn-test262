__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 482,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 482,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 482,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 252,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 246,
              "end": 251,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 263,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 257,
              "end": 262,
              "operator": "|",
              "left": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 274,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 273,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 279,
            "end": 285,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 279,
              "end": 284,
              "operator": ">",
              "left": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 290,
            "end": 294,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 290,
              "end": 293,
              "argument": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 299,
            "end": 303,
            "directive": null,
            "expression": {
              "type": "UpdateExpression",
              "start": 299,
              "end": 302,
              "argument": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "--",
              "prefix": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 316,
            "directive": null,
            "expression": {
              "type": "BinaryExpression",
              "start": 308,
              "end": 315,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 321,
            "end": 328,
            "directive": null,
            "expression": {
              "type": "ArrayExpression",
              "start": 321,
              "end": 327,
              "elements": [
                {
                  "type": "SpreadElement",
                  "start": 322,
                  "end": 326,
                  "argument": {
                    "type": "Identifier",
                    "start": 325,
                    "end": 326,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          },
          {
            "type": "ForOfStatement",
            "start": 333,
            "end": 408,
            "await": false,
            "body": {
              "type": "BlockStatement",
              "start": 352,
              "end": 408,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 362,
                  "end": 386,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 362,
                    "end": 385,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 365,
                        "end": 366,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 368,
                        "end": 369,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "decorators": [],
                        "name": "d",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 377,
                        "end": 378,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "decorators": [],
                        "name": "f",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 384,
                        "decorators": [],
                        "name": "g",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
                      "decorators": [],
                      "name": "fn",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 395,
                  "end": 402,
                  "directive": null,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 395,
                    "end": 401,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "decorators": [],
                      "name": "d",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "decorators": [],
                      "name": "prop",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 338,
              "end": 345,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 344,
                  "end": 345,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ForOfStatement",
            "start": 413,
            "end": 440,
            "await": true,
            "body": {
              "type": "BlockStatement",
              "start": 438,
              "end": 440,
              "body": []
            },
            "left": {
              "type": "VariableDeclaration",
              "start": 424,
              "end": 431,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 430,
                  "end": 431,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "decorators": [],
                    "name": "s",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": null
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "right": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 445,
            "end": 449,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 445,
              "end": 448,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 454,
            "end": 458,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 454,
              "end": 457,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 463,
            "end": 471,
            "directive": null,
            "expression": {
              "type": "NewExpression",
              "start": 463,
              "end": 470,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 476,
            "end": 480,
            "directive": null,
            "expression": {
              "type": "CallExpression",
              "start": 476,
              "end": 479,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
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
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          }
        },
        {
          "type": "Identifier",
          "start": 38,
          "end": 56,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 56,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 48,
                "end": 56,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 49,
                    "end": 55
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 48,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 62,
          "end": 82,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 82,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 82,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 72,
                "end": 82,
                "params": [
                  {
                    "type": "TSArrayType",
                    "start": 73,
                    "end": 81,
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 73,
                      "end": 79
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 72,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 88,
          "end": 116,
          "decorators": [],
          "name": "d",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 116,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 98,
                "end": 116,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 99,
                    "end": 115,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 101,
                        "end": 113,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 105,
                          "decorators": [],
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        }
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 98,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 122,
          "end": 144,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 144,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 132,
                "end": 144,
                "params": [
                  {
                    "type": "TSFunctionType",
                    "start": 133,
                    "end": 143,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 136,
                      "end": 143,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 139,
                        "end": 143
                      }
                    },
                    "typeParameters": null
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 132,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 150,
          "end": 187,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 151,
            "end": 187,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 153,
              "end": 187,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 153,
                  "end": 172,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 160,
                    "end": 172,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 161,
                        "end": 171,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 164,
                          "end": 171,
                          "typeAnnotation": {
                            "type": "TSVoidKeyword",
                            "start": 167,
                            "end": 171
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 160,
                    "decorators": [],
                    "name": "Promise",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 176,
                  "end": 186,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 179,
                    "end": 186,
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 182,
                      "end": 186
                    }
                  },
                  "typeParameters": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 193,
          "end": 219,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 219,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 203,
                "end": 219,
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 204,
                    "end": 218,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 206,
                        "end": 216,
                        "params": [],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 211,
                          "end": 216,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 213,
                            "end": 216
                          }
                        },
                        "typeParameters": null
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 203,
                "decorators": [],
                "name": "Promise",
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
