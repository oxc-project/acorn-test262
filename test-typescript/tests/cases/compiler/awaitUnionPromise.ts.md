__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 57,
  "end": 486,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 57,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 82,
        "name": "AsyncEnumeratorDone",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 83,
        "end": 86,
        "body": []
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
      "start": 86,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 89,
      "end": 296,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 115,
        "name": "IAsyncEnumerator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 115,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 119,
        "end": 296,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 125,
            "end": 167,
            "key": {
              "type": "Identifier",
              "start": 125,
              "end": 130,
              "name": "next1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 132,
              "end": 166,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 134,
                "end": 166,
                "typeName": {
                  "type": "Identifier",
                  "start": 134,
                  "end": 141,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 141,
                  "end": 166,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 142,
                      "end": 165,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 142,
                          "end": 143,
                          "typeName": {
                            "type": "Identifier",
                            "start": 142,
                            "end": 143,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 146,
                          "end": 165,
                          "typeName": {
                            "type": "Identifier",
                            "start": 146,
                            "end": 165,
                            "name": "AsyncEnumeratorDone",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 172,
            "end": 223,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 177,
              "name": "next2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 222,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 181,
                "end": 222,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 181,
                    "end": 191,
                    "typeName": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 188,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 188,
                      "end": 191,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 189,
                          "end": 190,
                          "typeName": {
                            "type": "Identifier",
                            "start": 189,
                            "end": 190,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 194,
                    "end": 222,
                    "typeName": {
                      "type": "Identifier",
                      "start": 194,
                      "end": 201,
                      "name": "Promise",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 201,
                      "end": 222,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 202,
                          "end": 221,
                          "typeName": {
                            "type": "Identifier",
                            "start": 202,
                            "end": 221,
                            "name": "AsyncEnumeratorDone",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 228,
            "end": 253,
            "key": {
              "type": "Identifier",
              "start": 228,
              "end": 233,
              "name": "next3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 235,
              "end": 252,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 237,
                "end": 252,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 244,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 244,
                  "end": 252,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 245,
                      "end": 251,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 245,
                          "end": 246,
                          "typeName": {
                            "type": "Identifier",
                            "start": 245,
                            "end": 246,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 249,
                          "end": 251,
                          "members": []
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 258,
            "end": 294,
            "key": {
              "type": "Identifier",
              "start": 258,
              "end": 263,
              "name": "next4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 267,
                "end": 293,
                "typeName": {
                  "type": "Identifier",
                  "start": 267,
                  "end": 274,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 274,
                  "end": 293,
                  "params": [
                    {
                      "type": "TSUnionType",
                      "start": 275,
                      "end": 292,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 275,
                          "end": 276,
                          "typeName": {
                            "type": "Identifier",
                            "start": 275,
                            "end": 276,
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 279,
                          "end": 292,
                          "members": [
                            {
                              "type": "TSPropertySignature",
                              "start": 281,
                              "end": 290,
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "start": 281,
                                "end": 282,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 282,
                                "end": 290,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 284,
                                  "end": 290
                                }
                              },
                              "accessibility": null,
                              "static": false
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 298,
      "end": 485,
      "id": {
        "type": "Identifier",
        "start": 313,
        "end": 317,
        "name": "main",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 320,
        "end": 485,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 326,
            "end": 367,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 332,
                "end": 366,
                "id": {
                  "type": "Identifier",
                  "start": 332,
                  "end": 359,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 333,
                    "end": 359,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 335,
                      "end": 359,
                      "typeName": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 351,
                        "name": "IAsyncEnumerator",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 351,
                        "end": 359,
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 352,
                            "end": 358
                          }
                        ]
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 362,
                  "end": 366,
                  "value": null,
                  "raw": "null"
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 372,
            "end": 396,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 376,
                "end": 395,
                "id": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 377,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 380,
                  "end": 395,
                  "argument": {
                    "type": "CallExpression",
                    "start": 386,
                    "end": 395,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 386,
                      "end": 393,
                      "object": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 387,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 393,
                        "name": "next1",
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 401,
            "end": 425,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 405,
                "end": 424,
                "id": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 406,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 409,
                  "end": 424,
                  "argument": {
                    "type": "CallExpression",
                    "start": 415,
                    "end": 424,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 415,
                      "end": 422,
                      "object": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 417,
                        "end": 422,
                        "name": "next2",
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 430,
            "end": 454,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 434,
                "end": 453,
                "id": {
                  "type": "Identifier",
                  "start": 434,
                  "end": 435,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 438,
                  "end": 453,
                  "argument": {
                    "type": "CallExpression",
                    "start": 444,
                    "end": 453,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 444,
                      "end": 451,
                      "object": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 446,
                        "end": 451,
                        "name": "next3",
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 459,
            "end": 483,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 463,
                "end": 482,
                "id": {
                  "type": "Identifier",
                  "start": 463,
                  "end": 464,
                  "name": "d",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 467,
                  "end": 482,
                  "argument": {
                    "type": "CallExpression",
                    "start": 473,
                    "end": 482,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 473,
                      "end": 480,
                      "object": {
                        "type": "Identifier",
                        "start": 473,
                        "end": 474,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 475,
                        "end": 480,
                        "name": "next4",
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
                  }
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
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
