__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 483,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 17,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 32,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 32,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 26,
              "end": 32
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 38,
          "end": 56,
          "name": "b",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 39,
            "end": 56,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 41,
              "end": 56,
              "typeName": {
                "type": "Identifier",
                "start": 41,
                "end": 48,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 62,
          "end": 82,
          "name": "c",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 63,
            "end": 82,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 65,
              "end": 82,
              "typeName": {
                "type": "Identifier",
                "start": 65,
                "end": 72,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 88,
          "end": 116,
          "name": "d",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 89,
            "end": 116,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 91,
              "end": 116,
              "typeName": {
                "type": "Identifier",
                "start": 91,
                "end": 98,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 101,
                          "end": 105,
                          "name": "prop",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 105,
                          "end": 113,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 107,
                            "end": 113
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 122,
          "end": 144,
          "name": "e",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 144,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 125,
              "end": 144,
              "typeName": {
                "type": "Identifier",
                "start": 125,
                "end": 132,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 132,
                "end": 144,
                "params": [
                  {
                    "type": "TSFunctionType",
                    "start": 133,
                    "end": 143,
                    "typeParameters": null,
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
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 150,
          "end": 187,
          "name": "f",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 153,
                    "end": 160,
                    "name": "Promise",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 160,
                    "end": 172,
                    "params": [
                      {
                        "type": "TSFunctionType",
                        "start": 161,
                        "end": 171,
                        "typeParameters": null,
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
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "TSFunctionType",
                  "start": 176,
                  "end": 186,
                  "typeParameters": null,
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
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 193,
          "end": 219,
          "name": "g",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 194,
            "end": 219,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 196,
              "end": 219,
              "typeName": {
                "type": "Identifier",
                "start": 196,
                "end": 203,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                        "typeParameters": null,
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
                        }
                      }
                    ]
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 222,
        "end": 482,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 246,
            "end": 252,
            "expression": {
              "type": "BinaryExpression",
              "start": 246,
              "end": 251,
              "left": {
                "type": "Identifier",
                "start": 246,
                "end": 247,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 250,
                "end": 251,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 257,
            "end": 263,
            "expression": {
              "type": "BinaryExpression",
              "start": 257,
              "end": 262,
              "left": {
                "type": "Identifier",
                "start": 257,
                "end": 258,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "|",
              "right": {
                "type": "Identifier",
                "start": 261,
                "end": 262,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 268,
            "end": 274,
            "expression": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 273,
              "left": {
                "type": "Identifier",
                "start": 268,
                "end": 269,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 272,
                "end": 273,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 279,
            "end": 285,
            "expression": {
              "type": "BinaryExpression",
              "start": 279,
              "end": 284,
              "left": {
                "type": "Identifier",
                "start": 279,
                "end": 280,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": ">",
              "right": {
                "type": "Identifier",
                "start": 283,
                "end": 284,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 290,
            "end": 294,
            "expression": {
              "type": "UpdateExpression",
              "start": 290,
              "end": 293,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "Identifier",
                "start": 290,
                "end": 291,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 299,
            "end": 303,
            "expression": {
              "type": "UpdateExpression",
              "start": 299,
              "end": 302,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 308,
            "end": 316,
            "expression": {
              "type": "BinaryExpression",
              "start": 308,
              "end": 315,
              "left": {
                "type": "Identifier",
                "start": 308,
                "end": 309,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 321,
            "end": 328,
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
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "directive": null
          },
          {
            "type": "ForOfStatement",
            "start": 333,
            "end": 408,
            "await": false,
            "left": {
              "type": "VariableDeclaration",
              "start": 338,
              "end": 345,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 344,
                  "end": 345,
                  "id": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 345,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 352,
              "end": 408,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 362,
                  "end": 386,
                  "expression": {
                    "type": "CallExpression",
                    "start": 362,
                    "end": 385,
                    "callee": {
                      "type": "Identifier",
                      "start": 362,
                      "end": 364,
                      "name": "fn",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 365,
                        "end": 366,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 368,
                        "end": 369,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 371,
                        "end": 372,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 374,
                        "end": 375,
                        "name": "d",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 377,
                        "end": 378,
                        "name": "e",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 380,
                        "end": 381,
                        "name": "f",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 383,
                        "end": 384,
                        "name": "g",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 395,
                  "end": 402,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 395,
                    "end": 401,
                    "object": {
                      "type": "Identifier",
                      "start": 395,
                      "end": 396,
                      "name": "d",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ForOfStatement",
            "start": 413,
            "end": 440,
            "await": true,
            "left": {
              "type": "VariableDeclaration",
              "start": 424,
              "end": 431,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 430,
                  "end": 431,
                  "id": {
                    "type": "Identifier",
                    "start": 430,
                    "end": 431,
                    "name": "s",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "right": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 438,
              "end": 440,
              "body": []
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 445,
            "end": 449,
            "expression": {
              "type": "CallExpression",
              "start": 445,
              "end": 448,
              "callee": {
                "type": "Identifier",
                "start": 445,
                "end": 446,
                "name": "e",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 454,
            "end": 458,
            "expression": {
              "type": "CallExpression",
              "start": 454,
              "end": 457,
              "callee": {
                "type": "Identifier",
                "start": 454,
                "end": 455,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 463,
            "end": 471,
            "expression": {
              "type": "NewExpression",
              "start": 463,
              "end": 470,
              "callee": {
                "type": "Identifier",
                "start": 467,
                "end": 468,
                "name": "g",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 476,
            "end": 480,
            "expression": {
              "type": "CallExpression",
              "start": 476,
              "end": 479,
              "callee": {
                "type": "Identifier",
                "start": 476,
                "end": 477,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
