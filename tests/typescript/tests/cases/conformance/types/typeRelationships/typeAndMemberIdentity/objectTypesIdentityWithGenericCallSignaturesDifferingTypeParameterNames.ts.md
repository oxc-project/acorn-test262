__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 44,
  "end": 2058,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 44,
      "end": 92,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 92,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 58,
            "end": 90,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 61,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 61,
              "end": 90,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 61,
                "end": 64,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 62,
                    "end": 63,
                    "name": {
                      "type": "Identifier",
                      "start": 62,
                      "end": 63,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
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
                  "start": 65,
                  "end": 69,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 66,
                    "end": 69,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 68,
                      "end": 69,
                      "typeName": {
                        "type": "Identifier",
                        "start": 68,
                        "end": 69,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 74,
                "end": 90,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 76,
                    "end": 88,
                    "argument": {
                      "type": "Literal",
                      "start": 83,
                      "end": 87,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 94,
      "end": 142,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 100,
        "end": 101,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 101,
        "end": 104,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 102,
            "end": 103,
            "name": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 105,
        "end": 142,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 111,
            "end": 140,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 114,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 140,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 115,
                  "end": 119,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 116,
                    "end": 119,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 118,
                      "end": 119,
                      "typeName": {
                        "type": "Identifier",
                        "start": 118,
                        "end": 119,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 120,
                "end": 123,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 122,
                  "end": 123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 124,
                "end": 140,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 126,
                    "end": 138,
                    "argument": {
                      "type": "Literal",
                      "start": 133,
                      "end": 137,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 144,
      "end": 192,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 151,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 151,
        "end": 154,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 152,
            "end": 153,
            "name": {
              "type": "Identifier",
              "start": 152,
              "end": 153,
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 155,
        "end": 192,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 161,
            "end": 190,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 161,
              "end": 164,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 164,
              "end": 190,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 165,
                  "end": 169,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 169,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 168,
                      "end": 169,
                      "typeName": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 170,
                "end": 173,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 172,
                  "end": 173,
                  "typeName": {
                    "type": "Identifier",
                    "start": 172,
                    "end": 173,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 174,
                "end": 190,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 176,
                    "end": 188,
                    "argument": {
                      "type": "Literal",
                      "start": 183,
                      "end": 187,
                      "value": null,
                      "raw": "null"
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 194,
      "end": 230,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 205,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 205,
        "end": 208,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 206,
            "end": 207,
            "name": {
              "type": "Identifier",
              "start": 206,
              "end": 207,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 209,
        "end": 230,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 215,
            "end": 228,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 219,
                "end": 223,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 220,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 222,
                    "end": 223,
                    "typeName": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 223,
                      "decorators": [],
                      "name": "X",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 227,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 227,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 227,
                  "decorators": [],
                  "name": "X",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 232,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 242,
        "end": 244,
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 269,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 251,
            "end": 267,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 254,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 254,
              "end": 257,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 255,
                  "end": 256,
                  "name": {
                    "type": "Identifier",
                    "start": 255,
                    "end": 256,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
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
                "start": 258,
                "end": 262,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 259,
                  "end": 262,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 261,
                    "end": 262,
                    "typeName": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 262,
                      "decorators": [],
                      "name": "Y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 266,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 266,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 266,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 271,
      "end": 297,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 297,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 297,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 276,
              "end": 297,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 278,
                "end": 297,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 280,
                    "end": 295,
                    "key": {
                      "type": "Identifier",
                      "start": 280,
                      "end": 283,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 283,
                      "end": 286,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 284,
                          "end": 285,
                          "name": {
                            "type": "Identifier",
                            "start": 284,
                            "end": 285,
                            "decorators": [],
                            "name": "Z",
                            "optional": false,
                            "typeAnnotation": null
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
                        "start": 287,
                        "end": 291,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 288,
                          "end": 291,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 290,
                            "end": 291,
                            "typeName": {
                              "type": "Identifier",
                              "start": 290,
                              "end": 291,
                              "decorators": [],
                              "name": "Z",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 292,
                      "end": 295,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 294,
                        "end": 295,
                        "typeName": {
                          "type": "Identifier",
                          "start": 294,
                          "end": 295,
                          "decorators": [],
                          "name": "Z",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 337,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 336,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 303,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 306,
            "end": 336,
            "properties": [
              {
                "type": "Property",
                "start": 308,
                "end": 334,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 308,
                  "end": 311,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 311,
                  "end": 334,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": {
                    "type": "TSTypeParameterDeclaration",
                    "start": 311,
                    "end": 314,
                    "params": [
                      {
                        "type": "TSTypeParameter",
                        "start": 312,
                        "end": 313,
                        "name": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 313,
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null
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
                      "start": 315,
                      "end": 319,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 316,
                        "end": 319,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 318,
                          "end": 319,
                          "typeName": {
                            "type": "Identifier",
                            "start": 318,
                            "end": 319,
                            "decorators": [],
                            "name": "A",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      }
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "start": 321,
                    "end": 334,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 323,
                        "end": 332,
                        "argument": {
                          "type": "Identifier",
                          "start": 330,
                          "end": 331,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 339,
      "end": 359,
      "id": {
        "type": "Identifier",
        "start": 348,
        "end": 352,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 353,
          "end": 357,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 354,
            "end": 357,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 356,
              "end": 357,
              "typeName": {
                "type": "Identifier",
                "start": 356,
                "end": 357,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 360,
      "end": 380,
      "id": {
        "type": "Identifier",
        "start": 369,
        "end": 373,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 374,
          "end": 378,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 375,
            "end": 378,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 377,
              "end": 378,
              "typeName": {
                "type": "Identifier",
                "start": 377,
                "end": 378,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 390,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 399,
        "end": 403,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 404,
          "end": 410,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 405,
            "end": 410,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 407,
              "end": 410
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 417,
      "end": 446,
      "id": {
        "type": "Identifier",
        "start": 426,
        "end": 431,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 432,
          "end": 444,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 433,
            "end": 444,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 435,
              "end": 444,
              "typeName": {
                "type": "Identifier",
                "start": 435,
                "end": 436,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 436,
                "end": 444,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 437,
                    "end": 443
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 447,
      "end": 476,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 461,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 462,
          "end": 474,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 463,
            "end": 474,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 465,
              "end": 474,
              "typeName": {
                "type": "Identifier",
                "start": 465,
                "end": 466,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 466,
                "end": 474,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 467,
                    "end": 473
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 486,
      "end": 512,
      "id": {
        "type": "Identifier",
        "start": 495,
        "end": 500,
        "decorators": [],
        "name": "foo1b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 501,
          "end": 507,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 502,
            "end": 507,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 504,
              "end": 507
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 509,
        "end": 512,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 514,
      "end": 543,
      "id": {
        "type": "Identifier",
        "start": 523,
        "end": 528,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 529,
          "end": 541,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 530,
            "end": 541,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 532,
              "end": 541,
              "typeName": {
                "type": "Identifier",
                "start": 532,
                "end": 533,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 533,
                "end": 541,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 534,
                    "end": 540
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 544,
      "end": 573,
      "id": {
        "type": "Identifier",
        "start": 553,
        "end": 558,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 559,
          "end": 571,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 560,
            "end": 571,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 562,
              "end": 571,
              "typeName": {
                "type": "Identifier",
                "start": 562,
                "end": 563,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 563,
                "end": 571,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 564,
                    "end": 570
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 583,
      "end": 609,
      "id": {
        "type": "Identifier",
        "start": 592,
        "end": 597,
        "decorators": [],
        "name": "foo1c",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 598,
          "end": 604,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 599,
            "end": 604,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 601,
              "end": 604
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 606,
        "end": 609,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 611,
      "end": 639,
      "id": {
        "type": "Identifier",
        "start": 620,
        "end": 624,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 625,
          "end": 637,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 637,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 628,
              "end": 637,
              "typeName": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 629,
                "end": 637,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 630,
                    "end": 636
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 640,
      "end": 668,
      "id": {
        "type": "Identifier",
        "start": 649,
        "end": 653,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 654,
          "end": 666,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 655,
            "end": 666,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 657,
              "end": 666,
              "typeName": {
                "type": "Identifier",
                "start": 657,
                "end": 658,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 658,
                "end": 666,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 659,
                    "end": 665
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 678,
      "end": 703,
      "id": {
        "type": "Identifier",
        "start": 687,
        "end": 691,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 692,
          "end": 698,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 693,
            "end": 698,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 695,
              "end": 698
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 700,
        "end": 703,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 705,
      "end": 732,
      "id": {
        "type": "Identifier",
        "start": 714,
        "end": 718,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 719,
          "end": 730,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 720,
            "end": 730,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 722,
              "end": 730,
              "exprName": {
                "type": "Identifier",
                "start": 729,
                "end": 730,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 733,
      "end": 760,
      "id": {
        "type": "Identifier",
        "start": 742,
        "end": 746,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 747,
          "end": 758,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 748,
            "end": 758,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 750,
              "end": 758,
              "exprName": {
                "type": "Identifier",
                "start": 757,
                "end": 758,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 770,
      "end": 795,
      "id": {
        "type": "Identifier",
        "start": 779,
        "end": 783,
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 784,
          "end": 790,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 785,
            "end": 790,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 787,
              "end": 790
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 792,
        "end": 795,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 797,
      "end": 824,
      "id": {
        "type": "Identifier",
        "start": 806,
        "end": 810,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 811,
          "end": 822,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 812,
            "end": 822,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 814,
              "end": 822,
              "exprName": {
                "type": "Identifier",
                "start": 821,
                "end": 822,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 825,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 834,
        "end": 838,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 839,
          "end": 850,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 840,
            "end": 850,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 842,
              "end": 850,
              "exprName": {
                "type": "Identifier",
                "start": 849,
                "end": 850,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 862,
      "end": 887,
      "id": {
        "type": "Identifier",
        "start": 871,
        "end": 875,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 876,
          "end": 882,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 877,
            "end": 882,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 879,
              "end": 882
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 884,
        "end": 887,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 889,
      "end": 909,
      "id": {
        "type": "Identifier",
        "start": 898,
        "end": 902,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 903,
          "end": 907,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 904,
            "end": 907,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 906,
              "end": 907,
              "typeName": {
                "type": "Identifier",
                "start": 906,
                "end": 907,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 910,
      "end": 938,
      "id": {
        "type": "Identifier",
        "start": 919,
        "end": 923,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 924,
          "end": 936,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 925,
            "end": 936,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 927,
              "end": 936,
              "typeName": {
                "type": "Identifier",
                "start": 927,
                "end": 928,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 928,
                "end": 936,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 929,
                    "end": 935
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 945,
      "end": 970,
      "id": {
        "type": "Identifier",
        "start": 954,
        "end": 958,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 959,
          "end": 965,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 960,
            "end": 965,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 962,
              "end": 965
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 967,
        "end": 970,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 972,
      "end": 993,
      "id": {
        "type": "Identifier",
        "start": 981,
        "end": 986,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 987,
          "end": 991,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 988,
            "end": 991,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 990,
              "end": 991,
              "typeName": {
                "type": "Identifier",
                "start": 990,
                "end": 991,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 994,
      "end": 1023,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1008,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1009,
          "end": 1021,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1010,
            "end": 1021,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1012,
              "end": 1021,
              "typeName": {
                "type": "Identifier",
                "start": 1012,
                "end": 1013,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1013,
                "end": 1021,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1014,
                    "end": 1020
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1030,
      "end": 1056,
      "id": {
        "type": "Identifier",
        "start": 1039,
        "end": 1044,
        "decorators": [],
        "name": "foo5b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1045,
          "end": 1051,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1046,
            "end": 1051,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1048,
              "end": 1051
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1053,
        "end": 1056,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1058,
      "end": 1078,
      "id": {
        "type": "Identifier",
        "start": 1067,
        "end": 1071,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1072,
          "end": 1076,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1073,
            "end": 1076,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1075,
              "end": 1076,
              "typeName": {
                "type": "Identifier",
                "start": 1075,
                "end": 1076,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1107,
      "id": {
        "type": "Identifier",
        "start": 1088,
        "end": 1092,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1093,
          "end": 1105,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1094,
            "end": 1105,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1096,
              "end": 1105,
              "typeName": {
                "type": "Identifier",
                "start": 1096,
                "end": 1097,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1097,
                "end": 1105,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1098,
                    "end": 1104
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1114,
      "end": 1139,
      "id": {
        "type": "Identifier",
        "start": 1123,
        "end": 1127,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1128,
          "end": 1134,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1129,
            "end": 1134,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1131,
              "end": 1134
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1136,
        "end": 1139,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1141,
      "end": 1161,
      "id": {
        "type": "Identifier",
        "start": 1150,
        "end": 1154,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1155,
          "end": 1159,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1156,
            "end": 1159,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1158,
              "end": 1159,
              "typeName": {
                "type": "Identifier",
                "start": 1158,
                "end": 1159,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1162,
      "end": 1189,
      "id": {
        "type": "Identifier",
        "start": 1171,
        "end": 1175,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1176,
          "end": 1187,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1177,
            "end": 1187,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1179,
              "end": 1187,
              "exprName": {
                "type": "Identifier",
                "start": 1186,
                "end": 1187,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1199,
      "end": 1224,
      "id": {
        "type": "Identifier",
        "start": 1208,
        "end": 1212,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1213,
          "end": 1219,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1214,
            "end": 1219,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1216,
              "end": 1219
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1221,
        "end": 1224,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1226,
      "end": 1254,
      "id": {
        "type": "Identifier",
        "start": 1235,
        "end": 1239,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1240,
          "end": 1252,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1241,
            "end": 1252,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1243,
              "end": 1252,
              "typeName": {
                "type": "Identifier",
                "start": 1243,
                "end": 1244,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1244,
                "end": 1252,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1245,
                    "end": 1251
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1255,
      "end": 1283,
      "id": {
        "type": "Identifier",
        "start": 1264,
        "end": 1268,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1269,
          "end": 1281,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1270,
            "end": 1281,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1272,
              "end": 1281,
              "typeName": {
                "type": "Identifier",
                "start": 1272,
                "end": 1273,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1273,
                "end": 1281,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1274,
                    "end": 1280
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1293,
      "end": 1318,
      "id": {
        "type": "Identifier",
        "start": 1302,
        "end": 1306,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1307,
          "end": 1313,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1308,
            "end": 1313,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1310,
              "end": 1313
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1315,
        "end": 1318,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1320,
      "end": 1348,
      "id": {
        "type": "Identifier",
        "start": 1329,
        "end": 1333,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1334,
          "end": 1346,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1335,
            "end": 1346,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1337,
              "end": 1346,
              "typeName": {
                "type": "Identifier",
                "start": 1337,
                "end": 1338,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1338,
                "end": 1346,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1339,
                    "end": 1345
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1349,
      "end": 1377,
      "id": {
        "type": "Identifier",
        "start": 1358,
        "end": 1362,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1363,
          "end": 1375,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1364,
            "end": 1375,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1366,
              "end": 1375,
              "typeName": {
                "type": "Identifier",
                "start": 1366,
                "end": 1367,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1367,
                "end": 1375,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1368,
                    "end": 1374
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1387,
      "end": 1412,
      "id": {
        "type": "Identifier",
        "start": 1396,
        "end": 1400,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1401,
          "end": 1407,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1402,
            "end": 1407,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1404,
              "end": 1407
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1409,
        "end": 1412,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1414,
      "end": 1443,
      "id": {
        "type": "Identifier",
        "start": 1423,
        "end": 1428,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1429,
          "end": 1441,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1430,
            "end": 1441,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1432,
              "end": 1441,
              "typeName": {
                "type": "Identifier",
                "start": 1432,
                "end": 1433,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1433,
                "end": 1441,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1434,
                    "end": 1440
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1444,
      "end": 1472,
      "id": {
        "type": "Identifier",
        "start": 1453,
        "end": 1458,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1459,
          "end": 1470,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1460,
            "end": 1470,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1462,
              "end": 1470,
              "exprName": {
                "type": "Identifier",
                "start": 1469,
                "end": 1470,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1479,
      "end": 1505,
      "id": {
        "type": "Identifier",
        "start": 1488,
        "end": 1493,
        "decorators": [],
        "name": "foo10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1494,
          "end": 1500,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1495,
            "end": 1500,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1497,
              "end": 1500
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1502,
        "end": 1505,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1507,
      "end": 1536,
      "id": {
        "type": "Identifier",
        "start": 1516,
        "end": 1521,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1522,
          "end": 1534,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1523,
            "end": 1534,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1525,
              "end": 1534,
              "typeName": {
                "type": "Identifier",
                "start": 1525,
                "end": 1526,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1526,
                "end": 1534,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1527,
                    "end": 1533
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1537,
      "end": 1565,
      "id": {
        "type": "Identifier",
        "start": 1546,
        "end": 1551,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1552,
          "end": 1563,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1553,
            "end": 1563,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1555,
              "end": 1563,
              "exprName": {
                "type": "Identifier",
                "start": 1562,
                "end": 1563,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1572,
      "end": 1598,
      "id": {
        "type": "Identifier",
        "start": 1581,
        "end": 1586,
        "decorators": [],
        "name": "foo11",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1587,
          "end": 1593,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1588,
            "end": 1593,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1590,
              "end": 1593
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1595,
        "end": 1598,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1600,
      "end": 1629,
      "id": {
        "type": "Identifier",
        "start": 1609,
        "end": 1614,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1615,
          "end": 1627,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1616,
            "end": 1627,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1618,
              "end": 1627,
              "typeName": {
                "type": "Identifier",
                "start": 1618,
                "end": 1619,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1619,
                "end": 1627,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1620,
                    "end": 1626
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1630,
      "end": 1659,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1644,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1645,
          "end": 1657,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1646,
            "end": 1657,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1648,
              "end": 1657,
              "typeName": {
                "type": "Identifier",
                "start": 1648,
                "end": 1649,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1649,
                "end": 1657,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1650,
                    "end": 1656
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1669,
      "end": 1695,
      "id": {
        "type": "Identifier",
        "start": 1678,
        "end": 1683,
        "decorators": [],
        "name": "foo12",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1684,
          "end": 1690,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1685,
            "end": 1690,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1687,
              "end": 1690
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1692,
        "end": 1695,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1697,
      "end": 1720,
      "id": {
        "type": "Identifier",
        "start": 1706,
        "end": 1712,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1713,
          "end": 1718,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1714,
            "end": 1718,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1716,
              "end": 1718,
              "typeName": {
                "type": "Identifier",
                "start": 1716,
                "end": 1718,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1721,
      "end": 1751,
      "id": {
        "type": "Identifier",
        "start": 1730,
        "end": 1736,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1737,
          "end": 1749,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1738,
            "end": 1749,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1740,
              "end": 1749,
              "typeName": {
                "type": "Identifier",
                "start": 1740,
                "end": 1741,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1741,
                "end": 1749,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1742,
                    "end": 1748
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1758,
      "end": 1785,
      "id": {
        "type": "Identifier",
        "start": 1767,
        "end": 1773,
        "decorators": [],
        "name": "foo12b",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1774,
          "end": 1780,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1775,
            "end": 1780,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1777,
              "end": 1780
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1782,
        "end": 1785,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1787,
      "end": 1816,
      "id": {
        "type": "Identifier",
        "start": 1796,
        "end": 1801,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1802,
          "end": 1814,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1803,
            "end": 1814,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1805,
              "end": 1814,
              "typeName": {
                "type": "Identifier",
                "start": 1805,
                "end": 1806,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1806,
                "end": 1814,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1807,
                    "end": 1813
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1817,
      "end": 1845,
      "id": {
        "type": "Identifier",
        "start": 1826,
        "end": 1831,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1832,
          "end": 1843,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1833,
            "end": 1843,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1835,
              "end": 1843,
              "exprName": {
                "type": "Identifier",
                "start": 1842,
                "end": 1843,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1852,
      "end": 1878,
      "id": {
        "type": "Identifier",
        "start": 1861,
        "end": 1866,
        "decorators": [],
        "name": "foo13",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1867,
          "end": 1873,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1868,
            "end": 1873,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1870,
              "end": 1873
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1875,
        "end": 1878,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1880,
      "end": 1909,
      "id": {
        "type": "Identifier",
        "start": 1889,
        "end": 1894,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1895,
          "end": 1907,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1896,
            "end": 1907,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1898,
              "end": 1907,
              "typeName": {
                "type": "Identifier",
                "start": 1898,
                "end": 1899,
                "decorators": [],
                "name": "I",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1899,
                "end": 1907,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 1900,
                    "end": 1906
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1910,
      "end": 1938,
      "id": {
        "type": "Identifier",
        "start": 1919,
        "end": 1924,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1925,
          "end": 1936,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1926,
            "end": 1936,
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "start": 1928,
              "end": 1936,
              "exprName": {
                "type": "Identifier",
                "start": 1935,
                "end": 1936,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1945,
      "end": 1971,
      "id": {
        "type": "Identifier",
        "start": 1954,
        "end": 1959,
        "decorators": [],
        "name": "foo14",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1960,
          "end": 1966,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1961,
            "end": 1966,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1963,
              "end": 1966
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 1968,
        "end": 1971,
        "body": []
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1973,
      "end": 1995,
      "id": {
        "type": "Identifier",
        "start": 1982,
        "end": 1987,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1988,
          "end": 1993,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1989,
            "end": 1993,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1991,
              "end": 1993,
              "typeName": {
                "type": "Identifier",
                "start": 1991,
                "end": 1993,
                "decorators": [],
                "name": "I2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1996,
      "end": 2025,
      "id": {
        "type": "Identifier",
        "start": 2005,
        "end": 2010,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2011,
          "end": 2023,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2012,
            "end": 2023,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2014,
              "end": 2023,
              "typeName": {
                "type": "Identifier",
                "start": 2014,
                "end": 2015,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2015,
                "end": 2023,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2016,
                    "end": 2022
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2032,
      "end": 2058,
      "id": {
        "type": "Identifier",
        "start": 2041,
        "end": 2046,
        "decorators": [],
        "name": "foo15",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 2047,
          "end": 2053,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2048,
            "end": 2053,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 2050,
              "end": 2053
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2055,
        "end": 2058,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
