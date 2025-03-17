__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2298,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 101,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 99,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 99,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 68,
                  "end": 72,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 69,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 71,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "name": "T",
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
                  "start": 74,
                  "end": 78,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 75,
                    "end": 78,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 77,
                      "end": 78,
                      "typeName": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "name": "U",
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
                "start": 83,
                "end": 99,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 85,
                    "end": 97,
                    "argument": {
                      "type": "Literal",
                      "start": 92,
                      "end": 96,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 61,
                "end": 67,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 62,
                    "end": 63,
                    "name": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
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
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 65,
                    "end": 66,
                    "name": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 66,
                      "name": "U",
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 79,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 81,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 81,
                    "end": 82,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "start": 103,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 109,
        "end": 110,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 117,
        "end": 160,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 123,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 123,
              "end": 126,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 126,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 127,
                  "end": 131,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 131,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 130,
                      "end": 131,
                      "typeName": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 131,
                        "name": "T",
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
                  "start": 133,
                  "end": 137,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 134,
                    "end": 137,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 136,
                      "end": 137,
                      "typeName": {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "name": "U",
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
                "start": 142,
                "end": 158,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 144,
                    "end": 156,
                    "argument": {
                      "type": "Literal",
                      "start": 151,
                      "end": 155,
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
                "start": 138,
                "end": 141,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 140,
                  "end": 141,
                  "typeName": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 141,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 110,
        "end": 116,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 111,
            "end": 112,
            "name": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 114,
            "end": 115,
            "name": {
              "type": "Identifier",
              "start": 114,
              "end": 115,
              "name": "U",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 162,
      "end": 219,
      "id": {
        "type": "Identifier",
        "start": 168,
        "end": 169,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 176,
        "end": 219,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 217,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 182,
              "end": 185,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 185,
              "end": 217,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 190,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 187,
                    "end": 190,
                    "typeAnnotation": {
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
                  },
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 192,
                  "end": 196,
                  "name": "y",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 193,
                    "end": 196,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 195,
                      "end": 196,
                      "typeName": {
                        "type": "Identifier",
                        "start": 195,
                        "end": 196,
                        "name": "U",
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
                "start": 201,
                "end": 217,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 203,
                    "end": 215,
                    "argument": {
                      "type": "Literal",
                      "start": 210,
                      "end": 214,
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
                "start": 197,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 169,
        "end": 175,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 170,
            "end": 171,
            "name": {
              "type": "Identifier",
              "start": 170,
              "end": 171,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 173,
            "end": 174,
            "name": {
              "type": "Identifier",
              "start": 173,
              "end": 174,
              "name": "U",
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 221,
      "end": 266,
      "id": {
        "type": "Identifier",
        "start": 231,
        "end": 232,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 232,
        "end": 238,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 233,
            "end": 234,
            "name": {
              "type": "Identifier",
              "start": 233,
              "end": 234,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 236,
            "end": 237,
            "name": {
              "type": "Identifier",
              "start": 236,
              "end": 237,
              "name": "U",
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
        "start": 239,
        "end": 266,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 245,
            "end": 264,
            "key": {
              "type": "Identifier",
              "start": 245,
              "end": 248,
              "name": "foo",
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
                "start": 249,
                "end": 253,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 250,
                  "end": 253,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 252,
                    "end": 253,
                    "typeName": {
                      "type": "Identifier",
                      "start": 252,
                      "end": 253,
                      "name": "T",
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
                "start": 255,
                "end": 259,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 256,
                  "end": 259,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 258,
                    "end": 259,
                    "typeName": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "name": "U",
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
              "start": 260,
              "end": 263,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 262,
                "end": 263,
                "typeName": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "TSInterfaceDeclaration",
      "start": 268,
      "end": 314,
      "id": {
        "type": "Identifier",
        "start": 278,
        "end": 280,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 281,
        "end": 314,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 287,
            "end": 312,
            "key": {
              "type": "Identifier",
              "start": 287,
              "end": 290,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 290,
              "end": 296,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 291,
                  "end": 292,
                  "name": {
                    "type": "Identifier",
                    "start": 291,
                    "end": 292,
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
                },
                {
                  "type": "TSTypeParameter",
                  "start": 294,
                  "end": 295,
                  "name": {
                    "type": "Identifier",
                    "start": 294,
                    "end": 295,
                    "name": "U",
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
            "params": [
              {
                "type": "Identifier",
                "start": 297,
                "end": 301,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 298,
                  "end": 301,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 300,
                    "end": 301,
                    "typeName": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "T",
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
                "start": 303,
                "end": 307,
                "name": "y",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 304,
                  "end": 307,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 306,
                    "end": 307,
                    "typeName": {
                      "type": "Identifier",
                      "start": 306,
                      "end": 307,
                      "name": "U",
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
              "start": 308,
              "end": 311,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 310,
                "end": 311,
                "typeName": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
      "type": "VariableDeclaration",
      "start": 316,
      "end": 351,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 351,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 351,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 321,
              "end": 351,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 323,
                "end": 351,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 325,
                    "end": 349,
                    "key": {
                      "type": "Identifier",
                      "start": 325,
                      "end": 328,
                      "name": "foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 328,
                      "end": 334,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 329,
                          "end": 330,
                          "name": {
                            "type": "Identifier",
                            "start": 329,
                            "end": 330,
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
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 332,
                          "end": 333,
                          "name": {
                            "type": "Identifier",
                            "start": 332,
                            "end": 333,
                            "name": "U",
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
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 335,
                        "end": 339,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 336,
                          "end": 339,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 338,
                            "end": 339,
                            "typeName": {
                              "type": "Identifier",
                              "start": 338,
                              "end": 339,
                              "name": "T",
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
                        "start": 341,
                        "end": 345,
                        "name": "y",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 342,
                          "end": 345,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 344,
                            "end": 345,
                            "typeName": {
                              "type": "Identifier",
                              "start": 344,
                              "end": 345,
                              "name": "U",
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
                      "start": 346,
                      "end": 349,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 348,
                        "end": 349,
                        "typeName": {
                          "type": "Identifier",
                          "start": 348,
                          "end": 349,
                          "name": "T",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
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
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 400,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 399,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 357,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 360,
            "end": 399,
            "properties": [
              {
                "type": "Property",
                "start": 362,
                "end": 397,
                "method": true,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 365,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 365,
                  "end": 397,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 372,
                      "end": 376,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 373,
                        "end": 376,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 375,
                          "end": 376,
                          "typeName": {
                            "type": "Identifier",
                            "start": 375,
                            "end": 376,
                            "name": "T",
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
                      "start": 378,
                      "end": 382,
                      "name": "y",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 379,
                        "end": 382,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 381,
                          "end": 382,
                          "typeName": {
                            "type": "Identifier",
                            "start": 381,
                            "end": 382,
                            "name": "U",
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
                    "start": 384,
                    "end": 397,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 386,
                        "end": 395,
                        "argument": {
                          "type": "Identifier",
                          "start": 393,
                          "end": 394,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 365,
                    "end": 371,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 366,
                        "end": 367,
                        "name": {
                          "type": "Identifier",
                          "start": 366,
                          "end": 367,
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
                      },
                      {
                        "type": "TSTypeParameter",
                        "start": 369,
                        "end": 370,
                        "name": {
                          "type": "Identifier",
                          "start": 369,
                          "end": 370,
                          "name": "U",
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
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 402,
      "end": 422,
      "id": {
        "type": "Identifier",
        "start": 411,
        "end": 415,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 416,
          "end": 420,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 417,
            "end": 420,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 419,
              "end": 420,
              "typeName": {
                "type": "Identifier",
                "start": 419,
                "end": 420,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 423,
      "end": 443,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 436,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 437,
          "end": 441,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 438,
            "end": 441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 440,
              "end": 441,
              "typeName": {
                "type": "Identifier",
                "start": 440,
                "end": 441,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 453,
      "end": 478,
      "id": {
        "type": "Identifier",
        "start": 462,
        "end": 466,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 467,
          "end": 473,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 468,
            "end": 473,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 470,
              "end": 473
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 475,
        "end": 478,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 480,
      "end": 517,
      "id": {
        "type": "Identifier",
        "start": 489,
        "end": 494,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 495,
          "end": 515,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 515,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 498,
              "end": 515,
              "typeName": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 499,
                "end": 515,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 500,
                    "end": 506
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 508,
                    "end": 514
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 518,
      "end": 555,
      "id": {
        "type": "Identifier",
        "start": 527,
        "end": 532,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 533,
          "end": 553,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 534,
            "end": 553,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 536,
              "end": 553,
              "typeName": {
                "type": "Identifier",
                "start": 536,
                "end": 537,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 537,
                "end": 553,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 538,
                    "end": 544
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 546,
                    "end": 552
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 565,
      "end": 591,
      "id": {
        "type": "Identifier",
        "start": 574,
        "end": 579,
        "name": "foo1b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 580,
          "end": 586,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 581,
            "end": 586,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 583,
              "end": 586
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 588,
        "end": 591,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 593,
      "end": 630,
      "id": {
        "type": "Identifier",
        "start": 602,
        "end": 607,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 608,
          "end": 628,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 609,
            "end": 628,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 611,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 612,
                "end": 628,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 613,
                    "end": 619
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 621,
                    "end": 627
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 631,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 640,
        "end": 645,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 646,
          "end": 666,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 647,
            "end": 666,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 649,
              "end": 666,
              "typeName": {
                "type": "Identifier",
                "start": 649,
                "end": 650,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 650,
                "end": 666,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 651,
                    "end": 657
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 659,
                    "end": 665
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 678,
      "end": 704,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 692,
        "name": "foo1c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 693,
          "end": 699,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 694,
            "end": 699,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 696,
              "end": 699
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 701,
        "end": 704,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 706,
      "end": 742,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 719,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 720,
          "end": 740,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 721,
            "end": 740,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 723,
              "end": 740,
              "typeName": {
                "type": "Identifier",
                "start": 723,
                "end": 724,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 724,
                "end": 740,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 725,
                    "end": 731
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 733,
                    "end": 739
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 743,
      "end": 779,
      "id": {
        "type": "Identifier",
        "start": 752,
        "end": 756,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 757,
          "end": 777,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 758,
            "end": 777,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 760,
              "end": 777,
              "typeName": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 761,
                "end": 777,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 762,
                    "end": 768
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 770,
                    "end": 776
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 789,
      "end": 814,
      "id": {
        "type": "Identifier",
        "start": 798,
        "end": 802,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 803,
          "end": 809,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 804,
            "end": 809,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 806,
              "end": 809
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 811,
        "end": 814,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 816,
      "end": 843,
      "id": {
        "type": "Identifier",
        "start": 825,
        "end": 829,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 830,
          "end": 841,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 831,
            "end": 841,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 833,
              "end": 841,
              "exprName": {
                "type": "Identifier",
                "start": 840,
                "end": 841,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 844,
      "end": 871,
      "id": {
        "type": "Identifier",
        "start": 853,
        "end": 857,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 858,
          "end": 869,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 859,
            "end": 869,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 861,
              "end": 869,
              "exprName": {
                "type": "Identifier",
                "start": 868,
                "end": 869,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 881,
      "end": 906,
      "id": {
        "type": "Identifier",
        "start": 890,
        "end": 894,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 895,
          "end": 901,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 896,
            "end": 901,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 898,
              "end": 901
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 903,
        "end": 906,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 908,
      "end": 935,
      "id": {
        "type": "Identifier",
        "start": 917,
        "end": 921,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 922,
          "end": 933,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 923,
            "end": 933,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 925,
              "end": 933,
              "exprName": {
                "type": "Identifier",
                "start": 932,
                "end": 933,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 936,
      "end": 963,
      "id": {
        "type": "Identifier",
        "start": 945,
        "end": 949,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 950,
          "end": 961,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 951,
            "end": 961,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 953,
              "end": 961,
              "exprName": {
                "type": "Identifier",
                "start": 960,
                "end": 961,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 973,
      "end": 998,
      "id": {
        "type": "Identifier",
        "start": 982,
        "end": 986,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 987,
          "end": 993,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 988,
            "end": 993,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 990,
              "end": 993
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 995,
        "end": 998,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1000,
      "end": 1020,
      "id": {
        "type": "Identifier",
        "start": 1009,
        "end": 1013,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1014,
          "end": 1018,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1015,
            "end": 1018,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1017,
              "end": 1018,
              "typeName": {
                "type": "Identifier",
                "start": 1017,
                "end": 1018,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1021,
      "end": 1057,
      "id": {
        "type": "Identifier",
        "start": 1030,
        "end": 1034,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1035,
          "end": 1055,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1036,
            "end": 1055,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1038,
              "end": 1055,
              "typeName": {
                "type": "Identifier",
                "start": 1038,
                "end": 1039,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1039,
                "end": 1055,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1040,
                    "end": 1046
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1048,
                    "end": 1054
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1064,
      "end": 1089,
      "id": {
        "type": "Identifier",
        "start": 1073,
        "end": 1077,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1078,
          "end": 1084,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1079,
            "end": 1084,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1081,
              "end": 1084
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1086,
        "end": 1089,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1091,
      "end": 1112,
      "id": {
        "type": "Identifier",
        "start": 1100,
        "end": 1105,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1106,
          "end": 1110,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1107,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1109,
              "end": 1110,
              "typeName": {
                "type": "Identifier",
                "start": 1109,
                "end": 1110,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1113,
      "end": 1150,
      "id": {
        "type": "Identifier",
        "start": 1122,
        "end": 1127,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1128,
          "end": 1148,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1129,
            "end": 1148,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1131,
              "end": 1148,
              "typeName": {
                "type": "Identifier",
                "start": 1131,
                "end": 1132,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1132,
                "end": 1148,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1133,
                    "end": 1139
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1141,
                    "end": 1147
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1157,
      "end": 1183,
      "id": {
        "type": "Identifier",
        "start": 1166,
        "end": 1171,
        "name": "foo5b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1172,
          "end": 1178,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1173,
            "end": 1178,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1175,
              "end": 1178
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1180,
        "end": 1183,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1185,
      "end": 1205,
      "id": {
        "type": "Identifier",
        "start": 1194,
        "end": 1198,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1199,
          "end": 1203,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1200,
            "end": 1203,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1202,
              "end": 1203,
              "typeName": {
                "type": "Identifier",
                "start": 1202,
                "end": 1203,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1206,
      "end": 1242,
      "id": {
        "type": "Identifier",
        "start": 1215,
        "end": 1219,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1220,
          "end": 1240,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1221,
            "end": 1240,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1223,
              "end": 1240,
              "typeName": {
                "type": "Identifier",
                "start": 1223,
                "end": 1224,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1224,
                "end": 1240,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1225,
                    "end": 1231
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1233,
                    "end": 1239
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1249,
      "end": 1274,
      "id": {
        "type": "Identifier",
        "start": 1258,
        "end": 1262,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1263,
          "end": 1269,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1264,
            "end": 1269,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1266,
              "end": 1269
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1271,
        "end": 1274,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1276,
      "end": 1296,
      "id": {
        "type": "Identifier",
        "start": 1285,
        "end": 1289,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1290,
          "end": 1294,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1291,
            "end": 1294,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1293,
              "end": 1294,
              "typeName": {
                "type": "Identifier",
                "start": 1293,
                "end": 1294,
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1297,
      "end": 1324,
      "id": {
        "type": "Identifier",
        "start": 1306,
        "end": 1310,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1311,
          "end": 1322,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1312,
            "end": 1322,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1314,
              "end": 1322,
              "exprName": {
                "type": "Identifier",
                "start": 1321,
                "end": 1322,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1343,
      "end": 1368,
      "id": {
        "type": "Identifier",
        "start": 1352,
        "end": 1356,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1357,
          "end": 1363,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1358,
            "end": 1363,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1360,
              "end": 1363
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1365,
        "end": 1368,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1370,
      "end": 1406,
      "id": {
        "type": "Identifier",
        "start": 1379,
        "end": 1383,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1384,
          "end": 1404,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1385,
            "end": 1404,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1387,
              "end": 1404,
              "typeName": {
                "type": "Identifier",
                "start": 1387,
                "end": 1388,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1388,
                "end": 1404,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1389,
                    "end": 1395
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1397,
                    "end": 1403
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1407,
      "end": 1443,
      "id": {
        "type": "Identifier",
        "start": 1416,
        "end": 1420,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1421,
          "end": 1441,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1422,
            "end": 1441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1424,
              "end": 1441,
              "typeName": {
                "type": "Identifier",
                "start": 1424,
                "end": 1425,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1425,
                "end": 1441,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1426,
                    "end": 1432
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1434,
                    "end": 1440
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1453,
      "end": 1478,
      "id": {
        "type": "Identifier",
        "start": 1462,
        "end": 1466,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1467,
          "end": 1473,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1468,
            "end": 1473,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1470,
              "end": 1473
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1475,
        "end": 1478,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1480,
      "end": 1516,
      "id": {
        "type": "Identifier",
        "start": 1489,
        "end": 1493,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1494,
          "end": 1514,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1514,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1497,
              "end": 1514,
              "typeName": {
                "type": "Identifier",
                "start": 1497,
                "end": 1498,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1498,
                "end": 1514,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1499,
                    "end": 1505
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1507,
                    "end": 1513
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1517,
      "end": 1553,
      "id": {
        "type": "Identifier",
        "start": 1526,
        "end": 1530,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1531,
          "end": 1551,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1532,
            "end": 1551,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1534,
              "end": 1551,
              "typeName": {
                "type": "Identifier",
                "start": 1534,
                "end": 1535,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1535,
                "end": 1551,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1536,
                    "end": 1542
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1544,
                    "end": 1550
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1563,
      "end": 1588,
      "id": {
        "type": "Identifier",
        "start": 1572,
        "end": 1576,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1577,
          "end": 1583,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1578,
            "end": 1583,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1580,
              "end": 1583
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1585,
        "end": 1588,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1590,
      "end": 1627,
      "id": {
        "type": "Identifier",
        "start": 1599,
        "end": 1604,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1605,
          "end": 1625,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1606,
            "end": 1625,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1608,
              "end": 1625,
              "typeName": {
                "type": "Identifier",
                "start": 1608,
                "end": 1609,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1609,
                "end": 1625,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1610,
                    "end": 1616
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1618,
                    "end": 1624
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1628,
      "end": 1656,
      "id": {
        "type": "Identifier",
        "start": 1637,
        "end": 1642,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1643,
          "end": 1654,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1644,
            "end": 1654,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1646,
              "end": 1654,
              "exprName": {
                "type": "Identifier",
                "start": 1653,
                "end": 1654,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1663,
      "end": 1689,
      "id": {
        "type": "Identifier",
        "start": 1672,
        "end": 1677,
        "name": "foo10",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1678,
          "end": 1684,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1679,
            "end": 1684,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1681,
              "end": 1684
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1686,
        "end": 1689,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1691,
      "end": 1728,
      "id": {
        "type": "Identifier",
        "start": 1700,
        "end": 1705,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1706,
          "end": 1726,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1707,
            "end": 1726,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1709,
              "end": 1726,
              "typeName": {
                "type": "Identifier",
                "start": 1709,
                "end": 1710,
                "name": "B",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1710,
                "end": 1726,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1711,
                    "end": 1717
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1719,
                    "end": 1725
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1729,
      "end": 1757,
      "id": {
        "type": "Identifier",
        "start": 1738,
        "end": 1743,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1744,
          "end": 1755,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1745,
            "end": 1755,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1747,
              "end": 1755,
              "exprName": {
                "type": "Identifier",
                "start": 1754,
                "end": 1755,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1764,
      "end": 1790,
      "id": {
        "type": "Identifier",
        "start": 1773,
        "end": 1778,
        "name": "foo11",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1779,
          "end": 1785,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1780,
            "end": 1785,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1782,
              "end": 1785
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1787,
        "end": 1790,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1792,
      "end": 1829,
      "id": {
        "type": "Identifier",
        "start": 1801,
        "end": 1806,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1807,
          "end": 1827,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1808,
            "end": 1827,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1810,
              "end": 1827,
              "typeName": {
                "type": "Identifier",
                "start": 1810,
                "end": 1811,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1811,
                "end": 1827,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1812,
                    "end": 1818
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1820,
                    "end": 1826
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1830,
      "end": 1867,
      "id": {
        "type": "Identifier",
        "start": 1839,
        "end": 1844,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1845,
          "end": 1865,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1846,
            "end": 1865,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1848,
              "end": 1865,
              "typeName": {
                "type": "Identifier",
                "start": 1848,
                "end": 1849,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1849,
                "end": 1865,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1850,
                    "end": 1856
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1858,
                    "end": 1864
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1877,
      "end": 1903,
      "id": {
        "type": "Identifier",
        "start": 1886,
        "end": 1891,
        "name": "foo12",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1892,
          "end": 1898,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1893,
            "end": 1898,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1895,
              "end": 1898
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1900,
        "end": 1903,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1905,
      "end": 1928,
      "id": {
        "type": "Identifier",
        "start": 1914,
        "end": 1920,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1921,
          "end": 1926,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1922,
            "end": 1926,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1924,
              "end": 1926,
              "typeName": {
                "type": "Identifier",
                "start": 1924,
                "end": 1926,
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 1929,
      "end": 1967,
      "id": {
        "type": "Identifier",
        "start": 1938,
        "end": 1944,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1945,
          "end": 1965,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1946,
            "end": 1965,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1948,
              "end": 1965,
              "typeName": {
                "type": "Identifier",
                "start": 1948,
                "end": 1949,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1949,
                "end": 1965,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1950,
                    "end": 1956
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 1958,
                    "end": 1964
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 1974,
      "end": 2001,
      "id": {
        "type": "Identifier",
        "start": 1983,
        "end": 1989,
        "name": "foo12b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 1990,
          "end": 1996,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1991,
            "end": 1996,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1993,
              "end": 1996
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 1998,
        "end": 2001,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2003,
      "end": 2040,
      "id": {
        "type": "Identifier",
        "start": 2012,
        "end": 2017,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2018,
          "end": 2038,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2019,
            "end": 2038,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2021,
              "end": 2038,
              "typeName": {
                "type": "Identifier",
                "start": 2021,
                "end": 2022,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2022,
                "end": 2038,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2023,
                    "end": 2029
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2031,
                    "end": 2037
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2041,
      "end": 2069,
      "id": {
        "type": "Identifier",
        "start": 2050,
        "end": 2055,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2056,
          "end": 2067,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2057,
            "end": 2067,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2059,
              "end": 2067,
              "exprName": {
                "type": "Identifier",
                "start": 2066,
                "end": 2067,
                "name": "a",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2076,
      "end": 2102,
      "id": {
        "type": "Identifier",
        "start": 2085,
        "end": 2090,
        "name": "foo13",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2091,
          "end": 2097,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2092,
            "end": 2097,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2094,
              "end": 2097
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2099,
        "end": 2102,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2104,
      "end": 2141,
      "id": {
        "type": "Identifier",
        "start": 2113,
        "end": 2118,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2119,
          "end": 2139,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2120,
            "end": 2139,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2122,
              "end": 2139,
              "typeName": {
                "type": "Identifier",
                "start": 2122,
                "end": 2123,
                "name": "I",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2123,
                "end": 2139,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2124,
                    "end": 2130
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2132,
                    "end": 2138
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2142,
      "end": 2170,
      "id": {
        "type": "Identifier",
        "start": 2151,
        "end": 2156,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2157,
          "end": 2168,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2158,
            "end": 2168,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 2160,
              "end": 2168,
              "exprName": {
                "type": "Identifier",
                "start": 2167,
                "end": 2168,
                "name": "b",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2177,
      "end": 2203,
      "id": {
        "type": "Identifier",
        "start": 2186,
        "end": 2191,
        "name": "foo14",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2192,
          "end": 2198,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2193,
            "end": 2198,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2195,
              "end": 2198
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2200,
        "end": 2203,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2205,
      "end": 2227,
      "id": {
        "type": "Identifier",
        "start": 2214,
        "end": 2219,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2220,
          "end": 2225,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2221,
            "end": 2225,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2223,
              "end": 2225,
              "typeName": {
                "type": "Identifier",
                "start": 2223,
                "end": 2225,
                "name": "I2",
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
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 2228,
      "end": 2265,
      "id": {
        "type": "Identifier",
        "start": 2237,
        "end": 2242,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2243,
          "end": 2263,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2244,
            "end": 2263,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2246,
              "end": 2263,
              "typeName": {
                "type": "Identifier",
                "start": 2246,
                "end": 2247,
                "name": "C",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2247,
                "end": 2263,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2248,
                    "end": 2254
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2256,
                    "end": 2262
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 2272,
      "end": 2298,
      "id": {
        "type": "Identifier",
        "start": 2281,
        "end": 2286,
        "name": "foo15",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 2287,
          "end": 2293,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2288,
            "end": 2293,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2290,
              "end": 2293
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 2295,
        "end": 2298,
        "body": []
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
